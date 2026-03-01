import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Dividends Explained: Franking Credits, Salary vs Dividends & Division 7A for Freelancers — InvoiceFlow',
  description:
    'What is a dividend? Learn how dividends work for Australian freelancers with a Pty Ltd: franked vs unfranked dividends, franking credits explained, salary vs dividends comparison, Division 7A rules, and when to incorporate. Includes worked examples and tax calculations.',
  keywords: [
    'dividend meaning',
    'dividend vs salary australia',
    'paying yourself dividends Pty Ltd',
    'franked dividend meaning',
    'franking credits explained',
    'unfranked dividend tax',
    'Division 7A explained',
    'how are dividends taxed australia',
    'sole trader vs Pty Ltd dividends',
    'franking credit calculator',
    'dividend imputation system australia',
    'when to incorporate freelancer',
  ],
  alternates: { canonical: '/glossary/dividend' },
  openGraph: {
    title: 'Dividends Explained: Franking Credits, Salary vs Dividends & Division 7A for Freelancers — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about dividends: franked vs unfranked, franking credits, salary vs dividends comparison, Division 7A rules, when to incorporate, and managing dividends with InvoiceFlow.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/dividend',
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
    { '@type': 'ListItem', position: 3, name: 'Dividend', item: `${BASE_URL}/glossary/dividend` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a franked dividend in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A franked dividend is a dividend paid by an Australian company that has already paid company tax (25%) on the profits being distributed. The shareholder receives a franking credit (also called an imputation credit) for the tax already paid, which reduces their personal tax liability. For example, a $10,000 fully franked dividend comes with a $3,333 franking credit. You declare $13,333 as taxable income, calculate personal tax on that amount, then subtract the $3,333 credit. This prevents the same profit from being taxed twice — once at company level and again at personal level. Australia\'s dividend imputation system is unique globally and is a significant advantage of the Pty Ltd structure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it better to pay yourself a salary or dividends from a Pty Ltd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The optimal strategy for most freelancers operating through a Pty Ltd is a mix of both salary and dividends. Salary is tax deductible for the company and generates super guarantee obligations (11.5% in 2025-26), which builds your retirement savings. Dividends come from after-tax profits and carry no super obligation. A common approach is to pay yourself a salary up to around $80,000-$100,000 (to cover living expenses and generate reasonable super contributions), then distribute remaining profits as franked dividends. The exact split depends on your total income, personal deductions, and financial goals. Always work with an accountant to model the specific numbers for your situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Division 7A and why should I care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Division 7A is a provision in the Income Tax Assessment Act 1936 that prevents company directors and shareholders from accessing company funds without proper documentation. If you withdraw money from your Pty Ltd company account for personal use without recording it as a salary payment, declared dividend, or properly documented loan, the ATO will treat it as a deemed unfranked dividend — meaning you pay tax at your full marginal rate with no franking credit offset. This is the worst possible tax outcome. To comply, any loans from the company must have a formal written agreement, charge the ATO benchmark interest rate (currently 8.27%), and follow a maximum 7-year repayment schedule for unsecured loans or 25 years for secured loans.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do sole traders receive dividends?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Sole traders cannot pay themselves dividends because they are not a separate legal entity from their business. Dividends can only be paid by companies (such as Pty Ltd companies) to their shareholders. As a sole trader, all business income is your personal income — you simply take "drawings" from the business whenever you need money. There is no separate company tax return, no franking credits, and no Division 7A rules to worry about. The trade-off is that all business profits are taxed at your personal marginal rate in the year they are earned, with no ability to retain profits at the lower 25% company rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are dividends taxed in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dividends in Australia are taxed through the imputation (franking) system. When you receive a franked dividend, you gross it up by adding the franking credit to determine the taxable amount. For a fully franked dividend, the gross-up factor is 100/75 (or equivalently, add 25/75 = 33.33% of the dividend amount as the franking credit). You then pay personal income tax on the grossed-up amount at your marginal rate and subtract the franking credit. If your marginal rate is below 25%, you may receive a refund of the excess franking credits. If your marginal rate is above 25%, you pay the difference. Unfranked dividends have no franking credit attached, so you pay full personal tax on the dividend amount — this is the worst tax outcome and is also what happens with Division 7A deemed dividends.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-a-dividend', label: '1. What Is a Dividend?' },
  { id: 'franked-vs-unfranked', label: '2. Franked vs Unfranked Dividends' },
  { id: 'dividends-vs-salary', label: '3. Dividends vs Salary' },
  { id: 'division-7a', label: '4. Division 7A — The Critical Warning' },
  { id: 'when-to-incorporate', label: '5. When Should a Freelancer Incorporate?' },
  { id: 'managing-dividends', label: '6. Managing Dividends with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Compare your tax liability as a sole trader vs Pty Ltd company director with dividends.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-and-loss-generator',
    name: 'Profit & Loss Generator',
    description: 'Generate profit reports to determine how much is available for dividend distribution.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
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
    href: '/tools/super-calculator',
    name: 'Super Calculator',
    description: 'Calculate super guarantee obligations when paying yourself a salary from your Pty Ltd.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
    href: '/guides/superannuation-freelancers',
    name: 'Superannuation for Freelancers',
    description: 'Super obligations as a sole trader vs Pty Ltd director, salary sacrifice strategies, and contribution caps.',
  },
  {
    href: '/guides/gst-freelancers',
    name: 'GST for Freelancers',
    description: 'GST registration, BAS lodgement, input tax credits, and compliance for sole traders and companies.',
  },
];

export default function DividendGlossaryPage() {
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
            <span className="text-white">Dividend</span>
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
            Dividends{' '}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A dividend is a distribution of company profits to shareholders. If you&apos;ve incorporated as a Pty Ltd, dividends are one of two ways to pay yourself &mdash; alongside salary. Understanding franking credits, the salary vs dividends decision, and the Division 7A trap is essential to minimising your tax bill and staying compliant.
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">25%</span>
              <div>
                <p className="text-white font-medium text-sm">Company Tax Rate</p>
                <p className="text-gray-400 text-sm">Flat rate on Pty Ltd profits before dividends are paid</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">33.3%</span>
              <div>
                <p className="text-white font-medium text-sm">Franking Credit Gross-Up</p>
                <p className="text-gray-400 text-sm">Gross-up rate (25/75) applied to calculate the franking credit</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">8.27%</span>
              <div>
                <p className="text-white font-medium text-sm">Division 7A Benchmark Rate</p>
                <p className="text-gray-400 text-sm">ATO benchmark interest rate for company loans to shareholders</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">$120K+</span>
              <div>
                <p className="text-white font-medium text-sm">Income Threshold</p>
                <p className="text-gray-400 text-sm">Profit level where incorporating as Pty Ltd starts making sense</p>
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

        {/* Section 1: What Is a Dividend? */}
        <section id="what-is-a-dividend">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Dividend?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A dividend is a <strong className="text-white">distribution of company profits to shareholders</strong>. When a Pty Ltd company earns a profit, the directors can decide to distribute some or all of that profit to the shareholders &mdash; that distribution is a dividend. It is one of only two legitimate ways to get money out of a company and into your personal bank account (the other being salary).
            </p>
            <p className="text-gray-300 leading-relaxed">
              Only <strong className="text-white">companies (Pty Ltd)</strong> can pay dividends. If you are a sole trader, you cannot pay yourself dividends &mdash; instead, you take &quot;drawings&quot; from the business. This is a fundamental difference between the two structures: a sole trader&apos;s business income is automatically their personal income, while a Pty Ltd company&apos;s income belongs to the company until it is formally distributed as a dividend or paid as salary.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Dividends are paid from <strong className="text-white">after-tax profits</strong>. The company first earns revenue, deducts expenses, and pays 25% company tax on the remaining profit. What is left after company tax is the pool of money available for dividend distribution. You cannot pay dividends from capital or from borrowed funds &mdash; there must be genuine profits to distribute.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Australia has a unique <strong className="text-white">franking (imputation) system</strong> that prevents the same profit from being taxed twice &mdash; once at the company level and again when the shareholder receives the dividend. This system is a significant advantage of the Australian tax framework and is central to understanding how dividends work in practice.
            </p>

            {/* Flow diagram */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">How Dividends Flow: The Basic Process</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold text-sm">1</span>
                  <p className="text-gray-400 text-sm">Company earns <strong className="text-gray-200">$100,000 profit</strong> after deducting all business expenses</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold text-sm">2</span>
                  <p className="text-gray-400 text-sm">Company pays <strong className="text-gray-200">25% company tax = $25,000</strong> to the ATO</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold text-sm">3</span>
                  <p className="text-gray-400 text-sm">Remaining <strong className="text-gray-200">$75,000</strong> is available for dividend distribution</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold text-sm">4</span>
                  <p className="text-gray-400 text-sm">Company distributes <strong className="text-gray-200">$75,000 as a fully franked dividend</strong> with $25,000 franking credit attached</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold text-sm">5</span>
                  <p className="text-gray-400 text-sm">Shareholder declares <strong className="text-gray-200">$100,000 taxable income</strong> ($75K + $25K credit), pays personal tax, subtracts the $25K credit</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Key Point</p>
              <p className="text-gray-400 text-sm">
                Dividends are <strong className="text-gray-200">not a tax deduction</strong> for the company. Unlike salary payments (which reduce the company&apos;s taxable income), dividends are paid from after-tax profits. This is the fundamental difference between salary and dividends &mdash; and understanding it is critical to optimising your tax position as a freelancer operating through a Pty Ltd.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Franked vs Unfranked Dividends */}
        <section id="franked-vs-unfranked">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Franked vs Unfranked Dividends</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The <strong className="text-white">franking (imputation) system</strong> is Australia&apos;s way of preventing double taxation on company profits. When a company pays tax on its profits and then distributes those profits as dividends, the shareholder receives a <strong className="text-white">franking credit</strong> (also called an imputation credit) representing the tax the company already paid. This credit offsets the shareholder&apos;s personal tax liability.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <h4 className="text-emerald-400 font-semibold mb-3">Fully Franked Dividends</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A fully franked dividend means the company has paid the full 25% company tax on the profits being distributed. The shareholder receives the <strong className="text-gray-200">maximum franking credit</strong> &mdash; calculated as 25/75 (33.33%) of the dividend amount. This is the most common and most tax-efficient type of dividend for Australian companies. Almost all small Pty Ltd companies operated by freelancers will pay fully franked dividends, because the company will have paid its full company tax before distributing profits.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-yellow-500/20 p-6">
                <h4 className="text-yellow-400 font-semibold mb-3">Partially Franked Dividends</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A partially franked dividend occurs when only part of the profit has been subject to company tax. The shareholder receives a <strong className="text-gray-200">proportional franking credit</strong>. For example, a 50% franked dividend of $10,000 would carry a franking credit of $1,667 (50% of the full $3,333 credit). This is rare for small companies but can occur when a company has a mix of taxed and untaxed income.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <h4 className="text-red-400 font-semibold mb-3">Unfranked Dividends</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  An unfranked dividend carries <strong className="text-gray-200">no franking credit at all</strong> &mdash; meaning no company tax has been paid on the distributed profit. The shareholder pays their full personal marginal tax rate on the entire dividend amount with no offset. This is the <strong className="text-gray-200">worst tax outcome</strong> and is relatively rare for Australian companies. However, it is exactly what happens when the ATO deems a payment as a dividend under Division 7A &mdash; making compliance even more critical.
                </p>
              </div>
            </div>

            {/* Worked Example */}
            <div className="rounded-xl bg-gray-800/50 border border-violet-500/30 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Worked Example: $10,000 Fully Franked Dividend</h4>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center text-sm border-b border-gray-700/30 pb-2">
                  <span className="text-gray-400">Cash dividend received</span>
                  <span className="text-white font-medium">$10,000</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-gray-700/30 pb-2">
                  <span className="text-gray-400">Franking credit (25/75 &times; $10,000)</span>
                  <span className="text-violet-400 font-medium">+ $3,333</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-gray-700/30 pb-2">
                  <span className="text-gray-400">Grossed-up taxable amount</span>
                  <span className="text-white font-bold">$13,333</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-gray-700/30 pb-2">
                  <span className="text-gray-400">Personal tax at 32.5% marginal rate</span>
                  <span className="text-gray-300 font-medium">$4,333</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-gray-700/30 pb-2">
                  <span className="text-gray-400">Less: franking credit</span>
                  <span className="text-emerald-400 font-medium">- $3,333</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-1">
                  <span className="text-white font-medium">Additional personal tax payable</span>
                  <span className="text-white font-bold">$1,000</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs">
                Total tax on this $13,333 of profit: $3,333 (company) + $1,000 (personal) = $4,333. Effective rate: 32.5% &mdash; exactly the same as if you had earned it as a sole trader. The franking system ensures no double taxation.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Feature</th>
                      <th className="text-left text-sm font-medium text-emerald-400 px-6 py-4">Fully Franked</th>
                      <th className="text-left text-sm font-medium text-red-400 px-6 py-4">Unfranked</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Company tax paid?</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm">Yes &mdash; full 25%</td>
                      <td className="px-6 py-3 text-red-400 text-sm">No</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Franking credit</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm">33.33% of dividend amount</td>
                      <td className="px-6 py-3 text-red-400 text-sm">None</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Taxable income declared</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Dividend + franking credit</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Dividend only</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Personal tax offset</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm">Yes &mdash; credit reduces personal tax</td>
                      <td className="px-6 py-3 text-red-400 text-sm">No offset &mdash; full marginal rate</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Total effective tax rate</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm">Your marginal rate (no double tax)</td>
                      <td className="px-6 py-3 text-red-400 text-sm">Your marginal rate (no offset for company tax)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Common scenario</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Standard Pty Ltd distributing taxed profits</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Division 7A deemed dividends, foreign income</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Refund Scenario</p>
              <p className="text-gray-400 text-sm">
                If your personal marginal rate is <strong className="text-gray-200">below 25%</strong> (e.g., you earn under $45,000 in total taxable income), you can actually receive a <strong className="text-gray-200">refund of excess franking credits</strong>. The company paid 25% tax, but your personal rate is lower &mdash; so the ATO refunds the difference. This is one of the rare situations where the franking system creates a net benefit over sole trader taxation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Dividends vs Salary */}
        <section id="dividends-vs-salary">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Dividends vs Salary &mdash; Which Is Better for Freelancers?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              This is the big question every freelancer faces after incorporating as a Pty Ltd: <strong className="text-white">should I pay myself a salary, dividends, or a mix of both?</strong> The answer is almost always a mix &mdash; but understanding the trade-offs requires looking at tax deductibility, super obligations, and your total income level.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Feature</th>
                      <th className="text-left text-sm font-medium text-violet-400 px-6 py-4">Salary</th>
                      <th className="text-left text-sm font-medium text-purple-400 px-6 py-4">Dividend</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Tax deductible for company?</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Yes &mdash; reduces company taxable income</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">No &mdash; paid from after-tax profits</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Taxed at personal level?</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Yes &mdash; full marginal rate via PAYG</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Yes &mdash; marginal rate less franking credit</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Super guarantee (11.5%)?</td>
                      <td className="px-6 py-3 text-violet-400 text-sm font-medium">Yes &mdash; mandatory obligation</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">No &mdash; no super required</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">PAYG withholding?</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Yes &mdash; withheld each pay cycle</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">No &mdash; tax settled at EOFY</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Workers compensation?</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Yes &mdash; must have coverage</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">No &mdash; not applicable</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Payroll tax?</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Only if payroll exceeds state threshold</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Not subject to payroll tax</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Builds retirement savings?</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Yes &mdash; via super guarantee</td>
                      <td className="px-6 py-3 text-red-400 text-sm font-medium">No &mdash; must contribute separately</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Timing flexibility?</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Regular pay cycle required</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Declare when you choose</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Counts for loan applications?</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Yes &mdash; banks love PAYG income</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Yes, but less favourably</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Admin complexity?</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Higher &mdash; payroll, STP, super, BAS</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Lower &mdash; board resolution + payment</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Effect on company profit?</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Reduces profit (tax deductible expense)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Does not reduce profit (paid from after-tax)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Worked Example: $150K Scenarios */}
            <div className="rounded-xl bg-gray-800/50 border border-violet-500/30 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Worked Example: $150K Company Profit &mdash; Three Scenarios</h4>
              <p className="text-gray-400 text-sm mb-4">Assumes no other personal income, 2025-26 tax rates including Medicare levy.</p>

              <div className="space-y-6">
                {/* Scenario A */}
                <div className="rounded-xl bg-gray-900/50 border border-gray-700/30 p-5">
                  <h5 className="text-violet-400 font-semibold mb-3">Scenario A: All Salary ($150K)</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Salary paid</span>
                      <span className="text-white">$150,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Company tax (profit = $0 after deduction)</span>
                      <span className="text-white">$0</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Personal income tax + Medicare</span>
                      <span className="text-white">~$40,567</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Super guarantee (11.5%)</span>
                      <span className="text-white">$17,250</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-white font-medium">Total tax + super cost</span>
                      <span className="text-white font-bold">~$57,817</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-2">Cash in hand: ~$109,433. Plus $17,250 in super (locked until preservation age).</p>
                  </div>
                </div>

                {/* Scenario B */}
                <div className="rounded-xl bg-gray-900/50 border border-violet-500/20 p-5">
                  <h5 className="text-emerald-400 font-semibold mb-3">Scenario B: Mix &mdash; $80K Salary + $70K Dividend (Optimal)</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Salary paid (tax deductible)</span>
                      <span className="text-white">$80,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Company taxable profit ($150K - $80K - $9,200 super)</span>
                      <span className="text-white">~$60,800</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Company tax at 25%</span>
                      <span className="text-white">~$15,200</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Dividend available (after-tax profit)</span>
                      <span className="text-white">~$45,600</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Personal tax on salary ($80K)</span>
                      <span className="text-white">~$18,067</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Personal tax on grossed-up dividend (net of franking credit)</span>
                      <span className="text-white">~$5,400</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Super guarantee (11.5% on $80K)</span>
                      <span className="text-white">$9,200</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-white font-medium">Total tax + super cost</span>
                      <span className="text-white font-bold">~$47,867</span>
                    </div>
                    <p className="text-emerald-400 text-xs mt-2">Approximately $9,950 less total tax than all-salary, plus $9,200 in super. Cash in hand: ~$107,333.</p>
                  </div>
                </div>

                {/* Scenario C */}
                <div className="rounded-xl bg-gray-900/50 border border-gray-700/30 p-5">
                  <h5 className="text-yellow-400 font-semibold mb-3">Scenario C: All Dividend ($150K profit)</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Company tax at 25%</span>
                      <span className="text-white">$37,500</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Dividend available</span>
                      <span className="text-white">$112,500</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Grossed-up taxable income</span>
                      <span className="text-white">$150,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Personal tax on $150K</span>
                      <span className="text-white">~$40,567</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Less: franking credit</span>
                      <span className="text-emerald-400">- $37,500</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Additional personal tax</span>
                      <span className="text-white">~$3,067</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700/20 pb-1">
                      <span className="text-gray-400">Super guarantee</span>
                      <span className="text-red-400">$0 (no salary = no super)</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-white font-medium">Total tax cost</span>
                      <span className="text-white font-bold">~$40,567</span>
                    </div>
                    <p className="text-yellow-400 text-xs mt-2">Lowest total tax, but $0 super contributions. Cash in hand: ~$109,433. You lose retirement savings and loan serviceability.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">The Optimal Strategy</p>
              <p className="text-gray-400 text-sm">
                For most freelancers, the sweet spot is <strong className="text-gray-200">Scenario B: a mix of salary and dividends</strong>. Pay yourself a salary of $80K-$100K to cover living expenses, generate PAYG income for loan applications, and build super. Distribute remaining profits as franked dividends. The exact split depends on your personal circumstances &mdash; always model the numbers with your accountant before deciding.
              </p>
            </div>

            {/* Division 7A Teaser Warning */}
            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-4">
              <p className="text-red-400 font-medium mb-2">Division 7A Warning</p>
              <p className="text-gray-400 text-sm">
                You <strong className="text-gray-200">cannot</strong> simply transfer company money to your personal account and call it a &quot;loan&quot; or &quot;drawing.&quot; If it is not documented as a salary payment or a declared dividend, the ATO will treat it as an unfranked deemed dividend under Division 7A &mdash; the worst possible tax outcome. See Section 4 below for the full details.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Division 7A */}
        <section id="division-7a">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Division 7A &mdash; The Critical Warning</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Division 7A</strong> of the Income Tax Assessment Act 1936 is the ATO&apos;s mechanism to prevent company directors and shareholders from accessing company profits <strong className="text-white">without paying the appropriate amount of tax</strong>. It treats certain payments, loans, and debt forgiveness by a private company to its shareholders or their associates as assessable dividends.
            </p>

            {/* The Trap */}
            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-6 mt-6">
              <h4 className="text-red-400 font-semibold mb-3">The Trap: How Freelancers Get Caught</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The most common scenario is straightforward: a freelancer incorporates as a Pty Ltd, earns money through the company, and then <strong className="text-gray-200">transfers company funds to their personal bank account for living expenses</strong> without formally recording the payment as a salary or declaring a dividend. They might think of it as a &quot;loan&quot; or just accessing &quot;their own money.&quot;
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Under Division 7A, the ATO will treat this as a <strong className="text-gray-200">deemed unfranked dividend</strong>. This means you pay tax at your full personal marginal rate with <strong className="text-gray-200">no franking credit offset</strong> &mdash; the absolute worst tax outcome. On top of that, you may face penalties and interest charges.
              </p>
            </div>

            {/* Consequences */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Consequences of a Division 7A Breach</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <p className="text-gray-400 text-sm"><strong className="text-gray-200">Deemed unfranked dividend</strong> &mdash; the amount is included in your assessable income at your full marginal rate with zero franking credit offset</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <p className="text-gray-400 text-sm"><strong className="text-gray-200">ATO penalties</strong> &mdash; up to 75% of the shortfall amount for recklessness, 25% for failure to take reasonable care</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <p className="text-gray-400 text-sm"><strong className="text-gray-200">General interest charge (GIC)</strong> &mdash; compounding daily on any outstanding tax debt from the deemed dividend</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <p className="text-gray-400 text-sm"><strong className="text-gray-200">Amended assessments</strong> &mdash; the ATO can go back up to 4 years (or unlimited for fraud/evasion) to reassess your tax returns</p>
                </div>
              </div>
            </div>

            {/* How to Stay Compliant */}
            <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6 mt-6">
              <h4 className="text-emerald-400 font-semibold mb-4">How to Stay Compliant with Division 7A</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-400 text-sm"><strong className="text-gray-200">Only pay yourself via salary or declared dividends.</strong> Every payment from company to personal must be one or the other.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-400 text-sm"><strong className="text-gray-200">If you must borrow from the company,</strong> use a formal written loan agreement at the ATO benchmark interest rate (currently <strong className="text-gray-200">8.27%</strong> for 2025-26).</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-400 text-sm"><strong className="text-gray-200">Follow minimum repayment schedules:</strong> 7 years maximum for unsecured loans, 25 years for loans secured against real property.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-400 text-sm"><strong className="text-gray-200">Never use company funds for personal expenses</strong> &mdash; no personal groceries, holidays, or mortgage repayments from the company account.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-400 text-sm"><strong className="text-gray-200">Keep immaculate records.</strong> Document every transaction between you and the company. Your accountant should reconcile these at least quarterly.</p>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Common Division 7A Mistakes Freelancers Make</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-red-400 font-bold flex-shrink-0">1.</span>
                  <span>Using the company credit card for personal purchases (&quot;I&apos;ll sort it out later&quot;)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-red-400 font-bold flex-shrink-0">2.</span>
                  <span>Transferring lump sums to personal account without recording as salary or dividend</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-red-400 font-bold flex-shrink-0">3.</span>
                  <span>Paying personal rent, mortgage, or car repayments directly from the company account</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-red-400 font-bold flex-shrink-0">4.</span>
                  <span>Having a &quot;shareholder loan&quot; on the books without a compliant loan agreement</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-red-400 font-bold flex-shrink-0">5.</span>
                  <span>Not making minimum yearly repayments on a Division 7A loan</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-red-400 font-bold flex-shrink-0">6.</span>
                  <span>Forgetting that loans to associates (spouse, family members) are also caught by Division 7A</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">The Simple Rule</p>
              <p className="text-gray-400 text-sm">
                Think of it this way: <strong className="text-gray-200">company money is not your money</strong>. It belongs to the company &mdash; a separate legal entity. You can only access it via salary (payroll), declared dividends (board resolution), or a properly documented Division 7A compliant loan. Any other withdrawal will be treated as a deemed unfranked dividend. When in doubt, ask your accountant before transferring any money.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: When Should a Freelancer Consider Incorporating? */}
        <section id="when-to-incorporate">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">When Should a Freelancer Consider Incorporating?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Dividends are only available to companies &mdash; so the question of &quot;should I use dividends?&quot; is really the question of <strong className="text-white">&quot;should I incorporate as a Pty Ltd?&quot;</strong> Here is the framework for making that decision, focused specifically on the dividend and tax implications.
            </p>

            {/* Income Threshold */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Income Threshold: When the Numbers Work</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The general threshold where incorporating starts to make financial sense is <strong className="text-gray-200">$120,000-$150,000+ in annual profit</strong>. Below this level, your personal marginal tax rate is close to or below the 25% company rate, and the additional compliance costs ($576 ASIC registration + $336/yr annual review fee + $1,500-$3,000 accountant fees) eat into any tax savings.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">Annual Profit</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">Sole Trader Marginal Rate</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">Company Rate</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-4 py-3">Verdict</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="px-4 py-2 text-gray-300 text-sm">Under $80K</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">0-32.5%</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">25%</td>
                      <td className="px-4 py-2 text-emerald-400 text-sm">Stay sole trader</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300 text-sm">$80K-$120K</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">32.5%</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">25%</td>
                      <td className="px-4 py-2 text-yellow-400 text-sm">Marginal benefit</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300 text-sm">$120K-$190K</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">37%</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">25%</td>
                      <td className="px-4 py-2 text-violet-400 text-sm">Consider incorporating</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300 text-sm">$190K+</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">45% + 2% Medicare</td>
                      <td className="px-4 py-2 text-gray-400 text-sm">25%</td>
                      <td className="px-4 py-2 text-emerald-400 text-sm font-medium">Strong case for Pty Ltd</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Benefits and Costs */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3">Benefits of Incorporating</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">25% flat company rate</strong> vs up to 47% personal rate</li>
                  <li><strong className="text-gray-200">Asset protection</strong> &mdash; limited liability shields personal assets</li>
                  <li><strong className="text-gray-200">Professional credibility</strong> &mdash; enterprise clients prefer Pty Ltd</li>
                  <li><strong className="text-gray-200">Profit retention</strong> &mdash; keep profits in the company at 25%</li>
                  <li><strong className="text-gray-200">Income timing flexibility</strong> &mdash; choose when to pay dividends</li>
                  <li><strong className="text-gray-200">Sellable entity</strong> &mdash; you can sell shares or the whole company</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3">Costs of Incorporating</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">$576 ASIC registration</strong> (one-time)</li>
                  <li><strong className="text-gray-200">$336/yr annual ASIC review fee</strong></li>
                  <li><strong className="text-gray-200">$1,500-$3,000/yr</strong> accountant for company tax return</li>
                  <li><strong className="text-gray-200">Separate tax return</strong> for the company</li>
                  <li><strong className="text-gray-200">ASIC annual statement</strong> compliance</li>
                  <li><strong className="text-gray-200">BAS lodgement</strong> if GST-registered (likely at this income level)</li>
                  <li><strong className="text-gray-200">Director duties</strong> and personal liability risks</li>
                </ul>
              </div>
            </div>

            {/* 5 Signs */}
            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-6 mt-6">
              <h4 className="text-violet-400 font-semibold mb-4">The 5 Signs It&apos;s Time to Incorporate</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">1</span>
                  <p className="text-gray-400 text-sm">Your annual <strong className="text-gray-200">profit consistently exceeds $120K-$150K</strong> and you are paying 37%+ marginal tax rates</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">2</span>
                  <p className="text-gray-400 text-sm">You want to <strong className="text-gray-200">retain profits in the business</strong> for reinvestment rather than drawing everything as personal income</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">3</span>
                  <p className="text-gray-400 text-sm">You work in a <strong className="text-gray-200">high-liability field</strong> and need the protection of a separate legal entity</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">4</span>
                  <p className="text-gray-400 text-sm">Your <strong className="text-gray-200">clients require you to operate as a company</strong> (common with enterprise and government contracts)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">5</span>
                  <p className="text-gray-400 text-sm">You plan to <strong className="text-gray-200">bring on partners, hire staff, or eventually sell the business</strong></p>
                </div>
              </div>
            </div>

            {/* Break-even */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-3">Break-Even Analysis</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                The minimum annual compliance cost of a Pty Ltd is approximately <strong className="text-gray-200">$2,000-$3,500</strong> ($336 ASIC + $1,500-$3,000 accountant). To justify this cost through tax savings alone, you need to save at least that amount by operating through a company. At the 32.5% marginal rate (income between $45K-$135K), the difference between personal and company rates is 7.5% &mdash; meaning you need to retain approximately <strong className="text-gray-200">$27,000-$47,000 in the company</strong> just to break even on compliance costs. At the 37% marginal rate ($135K-$190K), the gap is 12%, and the break-even drops to about <strong className="text-gray-200">$17,000-$29,000</strong> in retained profits. This is why the $120K-$150K threshold is the common recommendation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Managing Dividends with InvoiceFlow */}
        <section id="managing-dividends">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Managing Dividends with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Whether you are a sole trader considering incorporation or already operating through a Pty Ltd, <strong className="text-white">InvoiceFlow</strong> gives you the financial visibility you need to make informed dividend decisions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Track Company Income</h4>
                <p className="text-gray-400 text-sm">Monitor all invoices, payments, and revenue in real time. Know exactly how much your company has earned and what is available for distribution.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Profit &amp; Loss Reports</h4>
                <p className="text-gray-400 text-sm">Generate profit reports that show your true bottom line after expenses. Use these to determine how much profit is available for dividend distribution each quarter or year.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Separate Business &amp; Personal</h4>
                <p className="text-gray-400 text-sm">Keep your company finances clearly separated from personal expenses. InvoiceFlow ensures every dollar is tracked under the correct entity &mdash; essential for Division 7A compliance.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Company Invoice Templates</h4>
                <p className="text-gray-400 text-sm">Invoice under your company structure with Pty Ltd name, ACN, and ABN auto-filled. Professional invoices that match your corporate structure and comply with ATO requirements.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage dividends, tax, and company finances.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, super, and compliance for Australian freelancers.</p>
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
            Track Your Profits &mdash; Make Smarter Dividend Decisions
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a sole trader considering incorporation or a Pty Ltd director deciding between salary and dividends, InvoiceFlow gives you the financial clarity you need. Track income, generate profit reports, and invoice like a pro.
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
