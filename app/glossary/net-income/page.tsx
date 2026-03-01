import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Net Income: Gross vs Net Income Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What is net income? Learn the difference between gross and net income, how to calculate your take-home pay as a freelancer, ATO 2025-26 tax brackets, and why net income matters more than revenue. Australia-focused guide.',
  keywords: [
    'net income meaning',
    'gross vs net income',
    'net income freelancer australia',
    'take home pay freelancer',
    'net income calculation',
    'gross income vs net income difference',
    'freelancer income after tax',
    'sole trader net income',
    'what is net income australia',
    'how to calculate net income freelancer',
    'net income vs revenue',
    'freelance income after expenses',
  ],
  alternates: { canonical: '/glossary/net-income' },
  openGraph: {
    title: 'Net Income: Gross vs Net Income Guide for Australian Freelancers — InvoiceFlow',
    description:
      'Everything about net income for freelancers: gross vs net, ATO 2025-26 brackets, deductions, worked examples, and why tracking net income is essential for business survival.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/net-income',
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
    { '@type': 'ListItem', position: 3, name: 'Net Income', item: `${BASE_URL}/glossary/net-income` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between gross income and net income for freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gross income is the total amount you invoice and receive from clients before any deductions. Net income is what remains after subtracting all business expenses, tax, Medicare levy, and superannuation contributions. For example, if you invoice $120,000 in a year and have $25,000 in business expenses, your gross profit is $95,000. After paying approximately $22,000 in income tax and $1,900 in Medicare levy, your net income (take-home pay) is roughly $71,100. Understanding this difference is critical because many freelancers set rates based on gross income without accounting for the 30-40% that goes to tax and expenses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate my net income as a freelancer in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To calculate your net income: (1) Start with your total gross income — all invoiced revenue received during the financial year. (2) Subtract all deductible business expenses — software, equipment, home office, travel, insurance, professional development, etc. This gives you your taxable income. (3) Calculate income tax using ATO 2025-26 brackets (0% up to $18,200, 16% $18,201-$45,000, 30% $45,001-$135,000, 37% $135,001-$190,000, 45% over $190,000). (4) Add Medicare levy (2% of taxable income). (5) Subtract voluntary super contributions if applicable. The result is your net income — your actual take-home pay for the year.',
      },
    },
    {
      '@type': 'Question',
      name: 'What percentage of my gross income should I expect as net income?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most Australian freelancers earning between $80,000 and $150,000 gross, you can expect to keep approximately 55-65% as net income after tax, Medicare, and business expenses. At $100,000 gross with typical expenses, your net income is roughly $60,000-$65,000. At $150,000 gross, it might be $85,000-$95,000 depending on your deductions. The key variables are: your marginal tax rate (which increases with income), the amount of legitimate business deductions you can claim, and whether you are making voluntary super contributions. Freelancers who track expenses diligently and claim all legitimate deductions typically retain a higher percentage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is net income the same as profit for a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not exactly, although they are closely related. For a sole trader freelancer, net profit (also called business net profit) is your gross income minus business expenses — this is what appears on your tax return as taxable income. Net income (take-home pay) goes one step further and subtracts income tax, Medicare levy, and any super contributions from your net profit. So: Gross Income - Expenses = Net Profit (taxable income). Net Profit - Tax - Medicare - Super = Net Income (take-home pay). In everyday conversation, freelancers often use "net income" and "profit" interchangeably, but for tax purposes the distinction matters.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I increase my net income as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two main levers: increase gross income or reduce the gap between gross and net. To increase gross income: raise your rates (even 10% adds $10K on $100K revenue), take on higher-value projects, or add passive income streams. To reduce the gap: claim all legitimate tax deductions (home office at 67c/hr, vehicle at 85c/km, equipment under $20K instant write-off), make concessional super contributions (tax-deductible up to $30K/yr, taxed at 15% instead of your marginal rate), prepay deductible expenses before EOFY, and use a tax agent to ensure you are not missing any deductions. The most impactful strategy is usually rate increases combined with diligent expense tracking.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-net-income', label: '1. What Is Net Income?' },
  { id: 'gross-vs-net', label: '2. Gross Income vs Net Income' },
  { id: 'calculate-net-income', label: '3. How to Calculate Net Income' },
  { id: 'net-income-benchmarks', label: '4. Net Income Benchmarks by Revenue' },
  { id: 'increase-net-income', label: '5. Strategies to Increase Net Income' },
  { id: 'invoiceflow-net-income', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate your ideal hourly or project rate based on your target net income, expenses, and tax obligations.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax, Medicare levy, and take-home pay based on the current ATO 2025-26 tax brackets.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H18v-.008zm0 2.25h.008v.008H18v-.008zM9 20.25h9A2.25 2.25 0 0020.25 18V6.75A2.25 2.25 0 0018 4.5H6A2.25 2.25 0 003.75 6.75V18A2.25 2.25 0 006 20.25h3z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Calculate your net profit margin and understand how expenses affect your bottom line.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/super-calculator',
    name: 'Super Calculator',
    description: 'Calculate your superannuation contributions and understand the tax benefits of voluntary contributions.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Freelancer Tax Guide',
    description: 'Complete guide to tax obligations, brackets, deductions, and PAYG for Australian freelancers.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Your Freelance Rates',
    description: 'How to calculate rates that account for tax, super, and expenses — and deliver your target net income.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide for Freelancers',
    description: 'End of financial year checklist to maximise deductions and minimise tax — directly improving your net income.',
  },
];

export default function NetIncomeGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-sky-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Net Income</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Financial Reporting
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Net Income{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Net income is the money you actually keep after tax, expenses, and obligations are subtracted from your gross revenue. This guide covers the gross vs net distinction, how to calculate your real take-home pay, ATO 2025-26 brackets, benchmarks by revenue level, and strategies to keep more of what you earn.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO 2025-26 Rates</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">$</span>
              <div>
                <p className="text-white font-medium text-sm">Revenue &minus; Everything = Net Income</p>
                <p className="text-gray-400 text-sm">Your actual take-home pay after expenses, tax, Medicare, and super</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">60%</span>
              <div>
                <p className="text-white font-medium text-sm">Typical Retention: 55&ndash;65%</p>
                <p className="text-gray-400 text-sm">Most AU freelancers keep 55-65% of gross income as net income</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">30%</span>
              <div>
                <p className="text-white font-medium text-sm">Effective Tax Rate: 25&ndash;35%</p>
                <p className="text-gray-400 text-sm">Combined income tax + Medicare for most freelancers ($80K-$150K range)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">!</span>
              <div>
                <p className="text-white font-medium text-sm">Revenue Is Vanity, Net Income Is Sanity</p>
                <p className="text-gray-400 text-sm">A $150K freelancer with poor expense management may keep less than a $100K one</p>
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
              <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors text-sm py-1">
                <svg className="w-4 h-4 text-sky-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1 */}
        <section id="what-is-net-income">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Net Income?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Net income is the <strong className="text-white">amount of money you actually take home</strong> after all business expenses, taxes, Medicare levy, and superannuation contributions have been deducted from your total revenue. It is sometimes called &ldquo;take-home pay,&rdquo; &ldquo;bottom line,&rdquo; or simply &ldquo;what you keep.&rdquo;
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers, this number is the single most important financial metric because it represents your <strong className="text-white">actual standard of living</strong>. A freelancer who invoices $150,000 per year might only take home $90,000 after tax and expenses &mdash; while an employee earning $100,000 salary takes home about $78,000 with no business expenses to cover. Understanding net income is what separates freelancers who are actually profitable from those who just appear to be.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The fundamental formula is straightforward:
            </p>
            <div className="rounded-xl bg-sky-500/10 border border-sky-500/20 p-6 text-center">
              <p className="text-sky-300 font-mono text-lg font-semibold">
                Net Income = Gross Revenue &minus; Business Expenses &minus; Income Tax &minus; Medicare &minus; Super
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="gross-vs-net">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Gross Income vs Net Income</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              These terms are constantly confused. Here is the clear distinction:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3">Gross Income (Revenue)</h4>
                <ul className="space-y-2">
                  {[
                    'Total amount invoiced and received from clients',
                    'Before any deductions of any kind',
                    'The "top line" number',
                    'What most freelancers quote when asked their income',
                    'Excludes GST (GST is not your income)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-5">
                <h4 className="text-blue-400 font-semibold mb-3">Net Income (Take-Home)</h4>
                <ul className="space-y-2">
                  {[
                    'What remains after all deductions',
                    'After expenses, tax, Medicare, super',
                    'The "bottom line" number',
                    'What actually lands in your personal bank account',
                    'The true measure of your earnings',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Income Flow */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">The Income Flow: From Gross to Net</h3>
            <div className="space-y-3">
              {[
                { label: 'Gross Revenue (ex-GST)', amount: '$120,000', color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20' },
                { label: '- Business Expenses', amount: '-$25,000', color: 'text-gray-400', bg: 'bg-gray-800/50', border: 'border-gray-700/50' },
                { label: '= Taxable Income (Net Profit)', amount: '= $95,000', color: 'text-sky-400', bg: 'bg-sky-500/5', border: 'border-sky-500/10' },
                { label: '- Income Tax (ATO 2025-26)', amount: '-$20,533', color: 'text-red-400', bg: 'bg-gray-800/50', border: 'border-gray-700/50' },
                { label: '- Medicare Levy (2%)', amount: '-$1,900', color: 'text-red-400', bg: 'bg-gray-800/50', border: 'border-gray-700/50' },
                { label: '- Voluntary Super (11.5%)', amount: '-$10,925', color: 'text-amber-400', bg: 'bg-gray-800/50', border: 'border-gray-700/50' },
                { label: '= NET INCOME (Take-Home)', amount: '= $61,642', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
              ].map((row, i) => (
                <div key={i} className={`flex justify-between items-center p-4 rounded-xl ${row.bg} border ${row.border}`}>
                  <span className={`${row.color} text-sm font-medium`}>{row.label}</span>
                  <span className={`${row.color} text-sm font-bold font-mono`}>{row.amount}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">The Shocking Reality</p>
              <p className="text-gray-400 text-sm">
                In this example, a freelancer earning <strong className="text-gray-200">$120,000 gross</strong> takes home just <strong className="text-gray-200">$61,642</strong> &mdash; only 51% of their revenue. If they skip voluntary super, take-home rises to $72,567 (60%), but they miss out on retirement savings and tax benefits. This is why understanding net income is not optional &mdash; it determines your entire financial reality.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="calculate-net-income">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Calculate Net Income</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Here are the ATO 2025-26 income tax brackets used to calculate your tax liability:
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Taxable Income</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Tax Rate</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Tax on This Bracket</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { range: '$0 – $18,200', rate: '0%', tax: '$0' },
                    { range: '$18,201 – $45,000', rate: '16%', tax: 'Up to $4,288' },
                    { range: '$45,001 – $135,000', rate: '30%', tax: 'Up to $27,000' },
                    { range: '$135,001 – $190,000', rate: '37%', tax: 'Up to $20,350' },
                    { range: '$190,001+', rate: '45%', tax: 'No cap' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">{row.range}</td>
                      <td className="px-6 py-3 text-sky-400 text-sm font-bold">{row.rate}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.tax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 leading-relaxed mt-6">
              <strong className="text-white">Plus Medicare levy:</strong> 2% of your taxable income (reduced or nil below $26,000). If you do not have private hospital cover and earn above $93,000 (single), you may also pay the Medicare Levy Surcharge (1-1.5%).
            </p>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Key Deductions That Reduce Taxable Income</p>
              <p className="text-gray-400 text-sm">
                Every dollar of legitimate <Link href="/glossary/tax-deduction" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">tax deductions</Link> reduces your taxable income, which reduces your tax, which increases your net income. Key deductions for freelancers: home office (67c/hr fixed rate or actual cost method), vehicle (85c/km), equipment under $20K (instant asset write-off), software subscriptions, professional development, insurance, and marketing expenses. See:{' '}
                <Link href="/glossary/business-expenses" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">business expenses</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="net-income-benchmarks">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Net Income Benchmarks by Revenue</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Here is what typical Australian freelancers can expect to take home at various gross income levels (assuming typical business expenses of 15-25% and no voluntary super):
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Gross Revenue</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Est. Expenses</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Taxable Income</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Tax + Medicare</th>
                    <th className="text-left text-sm font-medium text-sky-400 px-6 py-4">Net Income</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Retention %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { gross: '$60,000', expenses: '$10,000', taxable: '$50,000', tax: '$6,788', net: '$43,212', pct: '72%' },
                    { gross: '$80,000', expenses: '$15,000', taxable: '$65,000', tax: '$11,288', net: '$53,712', pct: '67%' },
                    { gross: '$100,000', expenses: '$18,000', taxable: '$82,000', tax: '$16,388', net: '$65,612', pct: '66%' },
                    { gross: '$120,000', expenses: '$25,000', taxable: '$95,000', tax: '$22,288', net: '$72,712', pct: '61%' },
                    { gross: '$150,000', expenses: '$30,000', taxable: '$120,000', tax: '$29,788', net: '$90,212', pct: '60%' },
                    { gross: '$200,000', expenses: '$40,000', taxable: '$160,000', tax: '$43,538', net: '$116,462', pct: '58%' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">{row.gross}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.expenses}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.taxable}</td>
                      <td className="px-6 py-3 text-red-400 text-sm">{row.tax}</td>
                      <td className="px-6 py-3 text-sky-400 text-sm font-bold">{row.net}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">The Diminishing Returns of Gross Revenue</p>
              <p className="text-gray-400 text-sm">
                Notice how the retention percentage <strong className="text-gray-200">decreases as income rises</strong>: a $60K freelancer keeps 72% while a $200K freelancer keeps only 58%. This is because of Australia&rsquo;s progressive tax system &mdash; each additional dollar earned is taxed at a higher marginal rate. This is why strategies like <Link href="/glossary/superannuation" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">concessional super contributions</Link> (taxed at 15% instead of your marginal rate) become increasingly valuable as income grows.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="increase-net-income">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Strategies to Increase Net Income</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              There are two paths to higher net income: <strong className="text-white">earn more gross income</strong> or <strong className="text-white">reduce the gap between gross and net</strong>. The smartest freelancers work on both simultaneously.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { title: 'Raise Your Rates', desc: 'A 15% rate increase on $100K revenue adds $15K gross — roughly $10K net after tax. This is the single highest-leverage move for most freelancers.', impact: 'High' },
                { title: 'Claim All Deductions', desc: 'Track every legitimate expense: home office (67c/hr), vehicle (85c/km), equipment, software, insurance, training. Each $1,000 in deductions saves $300-$450 in tax.', impact: 'High' },
                { title: 'Concessional Super ($30K cap)', desc: 'Voluntary super contributions are taxed at 15% instead of your marginal rate (30-45%). On $95K taxable income, contributing $20K to super saves ~$3,000 in tax.', impact: 'Medium' },
                { title: 'Prepay Expenses Before EOFY', desc: 'Prepaying annual subscriptions, insurance, or professional memberships before June 30 brings deductions into the current year — reducing this year\'s taxable income.', impact: 'Medium' },
                { title: 'Move to Higher-Value Work', desc: 'Shift from hourly to project or value-based pricing. A $5K project that takes 20 hours ($250/hr effective) nets far more than 20 hours billed at $120/hr.', impact: 'High' },
                { title: 'Reduce Unnecessary Overheads', desc: 'Audit your subscriptions and tools quarterly. Cancel anything not generating revenue. $200/month in cancelled subscriptions = $2,400/year back in your pocket.', impact: 'Low' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${item.impact === 'High' ? 'bg-sky-500/10 text-sky-400' : item.impact === 'Medium' ? 'bg-amber-500/10 text-amber-400' : 'bg-gray-500/10 text-gray-400'}`}>{item.impact} Impact</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="invoiceflow-net-income">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow gives you the visibility and tools to understand, track, and maximise your net income as a freelancer.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { title: 'Revenue Dashboard', desc: 'See your total invoiced revenue, collected payments, and outstanding amounts at a glance — so you always know your gross income position in real time.' },
                { title: 'Expense Tracking', desc: 'Log and categorise business expenses as they happen. InvoiceFlow keeps a running total of your deductions so you can see your estimated taxable income at any time.' },
                { title: 'Tax Estimation', desc: 'Based on your revenue and expenses, InvoiceFlow estimates your income tax and Medicare liability — so you can see your approximate net income throughout the year, not just at tax time.' },
                { title: 'Faster Payments', desc: 'The faster you get paid, the better your cash position. Automated reminders, clear payment terms, and instant invoicing reduce the gap between earning and receiving — improving your real net income.' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Related glossary terms */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Related Glossary Terms</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Income Tax', href: '/glossary/income-tax' },
                  { label: 'Tax Deduction', href: '/glossary/tax-deduction' },
                  { label: 'Profit & Loss', href: '/glossary/profit-and-loss' },
                  { label: 'Profit Margin', href: '/glossary/profit-margin' },
                  { label: 'Business Expenses', href: '/glossary/business-expenses' },
                  { label: 'Superannuation', href: '/glossary/superannuation' },
                  { label: 'Billable Hours', href: '/glossary/billable-hours' },
                ].map((term) => (
                  <Link key={term.href} href={term.href} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium hover:bg-sky-500/20 transition-colors">
                    {term.label}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you understand and maximise your net income.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-sky-500/50 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">{tool.icon}</div>
              <h3 className="text-white font-medium mb-2 group-hover:text-sky-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-sky-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, pricing, and maximising your freelance earnings.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-sky-500/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-sky-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-sky-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-sky-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Track Your Real Net Income
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers track revenue, expenses, and estimated tax &mdash; so you always know your true take-home pay, not just your top-line number.
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
