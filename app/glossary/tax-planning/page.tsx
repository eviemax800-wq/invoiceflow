import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Tax Planning Australia: Strategies, Brackets & Tips for Freelancers — InvoiceFlow',
  description:
    'What is tax planning? Learn legal tax minimisation strategies for Australian freelancers — timing income and expenses, maximising deductions, super contributions, 2025-26 tax brackets, and common mistakes to avoid.',
  keywords: [
    'tax planning australia',
    'tax planning strategies freelancer',
    'how to reduce tax freelancer',
    'tax minimisation sole trader',
    'freelancer tax tips australia',
    'tax planning strategies australia',
    'reduce tax freelancer australia',
    'sole trader tax planning',
    'tax deductions freelancer',
    'EOFY tax planning',
    'tax brackets 2025-26',
    'freelancer tax minimisation',
  ],
  alternates: { canonical: '/glossary/tax-planning' },
  openGraph: {
    title: 'Tax Planning Australia: Strategies, Brackets & Tips for Freelancers — InvoiceFlow',
    description:
      'Everything about tax planning for Australian freelancers: legal strategies to minimise tax, 2025-26 tax brackets with worked examples, quarterly planning calendar, common mistakes, and how to reduce your tax bill legally.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/tax-planning',
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
    { '@type': 'ListItem', position: 3, name: 'Tax Planning', item: `${BASE_URL}/glossary/tax-planning` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much tax should a freelancer set aside in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As a general rule, Australian freelancers should set aside 30-35% of every payment received for tax obligations. This covers income tax, Medicare levy (2%), and potentially GST (if registered). The exact amount depends on your total annual income and tax bracket. For example, a freelancer earning $100,000 will pay approximately $24,967 in income tax plus $2,000 Medicare levy — about 27% effective rate. Setting aside 30-35% provides a buffer for any additional liabilities like HELP repayments or Medicare levy surcharge. The key is to transfer this percentage to a separate savings account immediately when you receive each payment — do not wait until EOFY.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between tax avoidance and tax evasion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tax avoidance (also called tax minimisation or tax planning) is the legal use of the tax system to reduce your tax liability. Examples include claiming legitimate deductions, timing income and expenses, and making concessional super contributions. Tax evasion is illegal — it involves deliberately misrepresenting or concealing information to reduce tax. Examples include not declaring cash income, claiming fake deductions, or using false invoices. The ATO distinguishes between the two clearly: tax planning is encouraged, tax evasion carries penalties of up to 75% of the tax shortfall plus potential criminal prosecution. Part IVA of the Income Tax Assessment Act 1936 is the general anti-avoidance provision that targets artificial schemes designed primarily to obtain a tax benefit.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should freelancers start tax planning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tax planning should be a year-round activity, not a June scramble. The ideal approach is quarterly: Q1 (Jul-Sep) — set your income targets and PAYG instalment rate for the year. Q2 (Oct-Dec) — mid-year review, assess whether you are tracking to budget, adjust PAYG instalments if needed. Q3 (Jan-Mar) — review deduction opportunities, assess super contribution strategy. Q4 (Apr-Jun) — EOFY planning, prepay expenses, make final super contributions, purchase assets. At minimum, start your EOFY planning by 1 May to give yourself enough time to execute strategies before 30 June.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can freelancers reduce tax by incorporating as Pty Ltd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but it depends on your income level and circumstances. A Pty Ltd company pays a flat 25% tax rate on profits (for base rate entities with aggregated turnover under $50 million). As a sole trader, income above $120,000 is taxed at 37%, and above $190,000 at 45%. So if your freelance income consistently exceeds $120,000, incorporating can save significant tax. However, there are costs: company registration ($576 ASIC fee), annual review fee ($332), additional accounting fees ($2,000-5,000/year), and more complex compliance obligations. You also cannot simply withdraw company profits tax-free — you must pay yourself a salary (taxed at personal rates) or take dividends (with franking credits). Consult a registered tax agent before incorporating.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best tax deductions for Australian freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most valuable tax deductions for Australian freelancers include: (1) Home office expenses — 67 cents per hour (fixed rate method) covering electricity, internet, phone, stationery, and depreciation of furniture, (2) Vehicle expenses — 85 cents per kilometre for business travel (up to 5,000 km), or logbook method for higher usage, (3) Technology and equipment — laptops, monitors, phones, cameras, and software under the $20,000 instant asset write-off, (4) Professional development — courses, books, conferences, and subscriptions related to your field, (5) Professional indemnity and public liability insurance, (6) Accounting and tax agent fees, (7) Superannuation contributions — up to $30,000 concessional cap as a tax deduction, (8) Marketing and advertising — website hosting, domain names, online ads, business cards, (9) Phone and internet — business percentage of your plan, (10) Travel — flights, accommodation, and meals for business travel.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-tax-planning', label: '1. What Is Tax Planning?' },
  { id: 'key-strategies', label: '2. Key Tax Planning Strategies' },
  { id: 'tax-brackets', label: '3. 2025-26 Tax Brackets & Thresholds' },
  { id: 'quarterly-calendar', label: '4. Quarterly Tax Planning Calendar' },
  { id: 'common-mistakes', label: '5. Common Tax Planning Mistakes' },
  { id: 'invoiceflow-tax', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Calculate your estimated income tax, Medicare levy, and take-home pay based on your freelance income and deductions.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-tax-estimator',
    name: 'Freelance Tax Estimator',
    description: 'Purpose-built for freelancers — estimates tax including GST, super deductions, and business expenses.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    href: '/tools/eofy-tax-checklist-generator',
    name: 'EOFY Tax Checklist Generator',
    description: 'Generate a personalised EOFY checklist based on your business type to ensure you maximise every deduction.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-first-calculator',
    name: 'Profit First Calculator',
    description: 'Calculate your ideal income allocation — tax reserve, profit, operating expenses, and owner\'s pay — using the Profit First method.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Complete guide to Australian tax obligations for freelancers — ABN, GST, PAYG, deductions, and lodgement.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide for Freelancers',
    description: 'Step-by-step end-of-financial-year preparation — maximise deductions, super, and asset write-offs before 30 June.',
  },
  {
    href: '/guides/superannuation-for-freelancers',
    name: 'Superannuation for Freelancers',
    description: 'How to use super as a powerful tax planning tool — concessional contributions, co-contribution, and carry-forward rules.',
  },
];

export default function TaxPlanningGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Tax Planning</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Compliance
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Tax Planning{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Tax planning is the legal use of strategies to minimise your tax liability. This guide covers the key strategies for Australian freelancers &mdash; timing income and expenses, maximising deductions, super contributions, 2025-26 tax brackets with worked examples, a quarterly planning calendar, and the most common mistakes to avoid.
          </p>

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
              <span>Australia-Focused 2025-26</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$18K</span>
              <div>
                <p className="text-white font-medium text-sm">$18,200 Tax-Free Threshold</p>
                <p className="text-gray-400 text-sm">The amount every Australian can earn per FY before paying any income tax</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">30%</span>
              <div>
                <p className="text-white font-medium text-sm">30-35% Tax Reserve</p>
                <p className="text-gray-400 text-sm">Recommended percentage to set aside from every payment for tax obligations</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$30K</span>
              <div>
                <p className="text-white font-medium text-sm">$30,000 Concessional Super Cap</p>
                <p className="text-gray-400 text-sm">Maximum tax-deductible super contribution per financial year</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$20K</span>
              <div>
                <p className="text-white font-medium text-sm">$20,000 Instant Asset Write-Off</p>
                <p className="text-gray-400 text-sm">Immediately deduct the full cost of eligible business assets under this threshold</p>
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
              <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm py-1">
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

        {/* Section 1 */}
        <section id="what-is-tax-planning">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Tax Planning?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Tax planning is the <strong className="text-white">legal and proactive use of the tax system to minimise your tax liability</strong>. It involves structuring your income, expenses, and investments in the most tax-efficient way allowed by law. Tax planning is not just legal &mdash; it is actively encouraged by the ATO as responsible financial management.
            </p>
            <p className="text-gray-300 leading-relaxed">
              There is an important distinction between three concepts that are often confused:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                { title: 'Tax Planning', subtitle: '(Legal)', desc: 'Using legitimate strategies within the tax law to reduce your tax — claiming deductions, timing income, making super contributions. Encouraged by the ATO.', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
                { title: 'Tax Avoidance', subtitle: '(Grey Area)', desc: 'Artificial or contrived schemes whose dominant purpose is to obtain a tax benefit. Targeted by Part IVA of ITAA 1936. The ATO can void the tax benefit and impose penalties.', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
                { title: 'Tax Evasion', subtitle: '(Illegal)', desc: 'Deliberately concealing income, claiming false deductions, or falsifying records. Criminal offence carrying penalties of up to 75% of the tax shortfall plus potential imprisonment.', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
              ].map((item, i) => (
                <div key={i} className={`rounded-xl ${item.bg} border ${item.border} p-5`}>
                  <h4 className={`${item.color} font-semibold`}>{item.title}</h4>
                  <span className={`text-xs ${item.color} opacity-75`}>{item.subtitle}</span>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed mt-6">
              For freelancers, tax planning is <strong className="text-white">more important than for employees</strong>. Employees have tax withheld automatically through <Link href="/glossary/payg" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">PAYG withholding</Link>, and their employer handles <Link href="/glossary/superannuation" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">super contributions</Link>. Freelancers must manage everything themselves &mdash; estimating tax, setting aside reserves, making super contributions, and proactively claiming deductions. Without a plan, the end-of-year tax bill can be devastating.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="key-strategies">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Key Tax Planning Strategies for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              These are the most effective and widely used tax planning strategies available to Australian freelancers. All are completely legal and endorsed by the ATO.
            </p>

            <div className="space-y-4 mt-6">
              {[
                {
                  letter: 'A',
                  title: 'Timing Income & Expenses Around 30 June',
                  desc: 'If you use cash basis accounting, you have control over when income is recognised. Delaying an invoice from late June to early July pushes that income into the next financial year. Conversely, chasing outstanding invoices before 30 June accelerates income into the current year (useful if you expect higher income next year). On the expense side, prepaying next year\'s costs before 30 June — insurance premiums, subscriptions, professional memberships, rent — gives you deductions in the current year.',
                },
                {
                  letter: 'B',
                  title: 'Prepaying Deductible Expenses',
                  desc: 'Under the small business prepayment rules, you can prepay up to 12 months of expenses and claim the full deduction in the current financial year. Common prepayments: professional indemnity insurance, public liability insurance, software subscriptions (Adobe, accounting tools), domain and hosting fees, co-working space memberships, and professional association memberships.',
                },
                {
                  letter: 'C',
                  title: 'Maximising Deductions',
                  desc: 'Ensure you are claiming every legitimate deduction. The three biggest categories for freelancers are: (1) Home office — 67 cents per hour using the fixed rate method, covering electricity, internet, phone, stationery, and furniture depreciation, (2) Vehicle expenses — 85 cents per kilometre for business travel (up to 5,000 km/year), and (3) The $20,000 instant asset write-off for business equipment — laptops, monitors, cameras, desks, chairs, and software.',
                },
                {
                  letter: 'D',
                  title: 'Concessional Super Contributions',
                  desc: 'Voluntary super contributions up to the $30,000 concessional cap are tax-deductible. This means a freelancer in the 37% bracket who contributes $25,000 to super saves $5,750 in income tax (minus the 15% contributions tax of $3,750 — net saving of $2,000 plus the retirement benefit). The government co-contribution adds up to $500 for low-income earners (under $58,445).',
                },
                {
                  letter: 'E',
                  title: 'Income Splitting via Company Structure',
                  desc: 'If your freelance income consistently exceeds $120,000, incorporating as a Pty Ltd and paying the 25% company tax rate can save significant tax compared to the 37-45% marginal rate. However, this requires careful planning — you must pay yourself a reasonable salary, and there are additional compliance costs ($2,000-5,000/year in accounting fees). Consult a registered tax agent before making this decision.',
                },
                {
                  letter: 'F',
                  title: 'Carry-Forward Super Contributions',
                  desc: 'If your total super balance is under $500,000, you can carry forward unused concessional contributions from up to 5 previous financial years. For example, if you only contributed $10,000 last year, you have $20,000 of unused cap that can be used this year — making your effective cap $50,000 instead of $30,000. This is a powerful strategy for freelancers with variable income.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">{item.letter}</div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="tax-brackets">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">2025-26 Tax Brackets &amp; Planning Thresholds</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Understanding the tax brackets is essential for effective tax planning. Each dollar is taxed at the rate of the bracket it falls into &mdash; not your entire income at the highest rate.
            </p>

            {/* Tax Brackets Table */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Individual Tax Rates 2025-26</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Taxable Income</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Tax Rate</th>
                    <th className="text-left text-sm font-medium text-emerald-400 px-6 py-4">Tax on This Bracket</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { income: '$0 – $18,200', rate: '0%', tax: 'Nil' },
                    { income: '$18,201 – $45,000', rate: '16%', tax: 'Up to $4,288' },
                    { income: '$45,001 – $135,000', rate: '30%', tax: 'Up to $27,000' },
                    { income: '$135,001 – $190,000', rate: '37%', tax: 'Up to $20,350' },
                    { income: '$190,001+', rate: '45%', tax: '45c per $ over $190,000' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">{row.income}</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-bold">{row.rate}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.tax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Worked Example */}
            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-6 mt-6">
              <p className="text-emerald-400 font-medium mb-3">Worked Example: $120,000 Freelance Income</p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>$0 &ndash; $18,200 at 0% = <strong className="text-gray-200">$0</strong></p>
                <p>$18,201 &ndash; $45,000 at 16% = <strong className="text-gray-200">$4,288</strong></p>
                <p>$45,001 &ndash; $120,000 at 30% = <strong className="text-gray-200">$22,500</strong></p>
                <div className="border-t border-gray-700/50 pt-2 mt-2">
                  <p>Total income tax = <strong className="text-emerald-400">$26,788</strong></p>
                  <p>Medicare levy (2%) = <strong className="text-gray-200">$2,400</strong></p>
                  <p className="font-bold text-white mt-1">Total tax = $29,188 (effective rate: 24.3%)</p>
                </div>
              </div>
            </div>

            {/* Key Planning Thresholds */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Key Planning Thresholds</h3>
            <div className="space-y-3">
              {[
                { threshold: '$18,200', label: 'Tax-free threshold', desc: 'Income below this amount is not taxed. If you have multiple income sources, this threshold applies to your total combined income.' },
                { threshold: '$45,000', label: '16% to 30% bracket jump', desc: 'The biggest marginal rate increase. Every dollar above $45,000 is taxed at nearly double the previous rate. Key planning point for income timing.' },
                { threshold: '$135,000', label: '30% to 37% bracket jump', desc: 'Income above this threshold attracts a significantly higher rate. Consider super contributions or prepayments to bring taxable income below $135,000.' },
                { threshold: '$135,000', label: 'Medicare Levy Surcharge', desc: 'Singles earning above $93,000 (or $186,000 for families) without private health insurance pay an additional 1-1.5% surcharge. Getting hospital cover can be cheaper than the surcharge.' },
                { threshold: '$190,000', label: 'Top marginal rate', desc: 'Income above $190,000 is taxed at 45%. Combined with Medicare levy (2%), the effective marginal rate is 47 cents per dollar.' },
                { threshold: '$250,000', label: 'Division 293 super tax', desc: 'If your income plus concessional super contributions exceeds $250,000, an additional 15% tax applies to super contributions (total 30% instead of 15%).' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4 flex items-start gap-4">
                  <div className="flex-shrink-0 min-w-[80px] text-center">
                    <span className="text-emerald-400 text-sm font-bold">{item.threshold}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{item.label}</p>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional levies */}
            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Additional Offsets to Know</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Low Income Tax Offset (LITO):</strong> Up to $700 for incomes under $45,000 (phases out between $45,000 and $66,667). <strong className="text-gray-200">Small Business Income Tax Offset (SBITO):</strong> Up to $1,000 for sole traders and partnerships with turnover under $5 million &mdash; equal to 8% of your business income tax. <strong className="text-gray-200">HELP/HECS repayment:</strong> Compulsory repayments start at 1% when income exceeds $54,435, increasing to 10% at $151,201+. Factor this into your tax reserve calculation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="quarterly-calendar">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Quarterly Tax Planning Calendar</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Effective tax planning is a year-round discipline, not a June scramble. Here is a quarter-by-quarter framework aligned to the Australian <Link href="/glossary/financial-year" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">financial year</Link>.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  quarter: 'Q1: Jul – Sep',
                  title: 'Set the Foundation',
                  color: 'text-emerald-400',
                  steps: [
                    'Set your annual income target and estimated tax liability',
                    'Review and adjust your PAYG instalment rate with the ATO',
                    'Set up a separate tax savings account (transfer 30-35% of each payment)',
                    'Review last year\'s tax return for missed deductions to claim this year',
                  ],
                },
                {
                  quarter: 'Q2: Oct – Dec',
                  title: 'Mid-Year Review',
                  color: 'text-teal-400',
                  steps: [
                    'Compare actual income vs target — are you tracking to budget?',
                    'Review PAYG instalments — request a variation if income has changed significantly',
                    'Assess prepayment opportunities before the December break',
                    'Plan super contribution strategy — how much cap have you used?',
                  ],
                },
                {
                  quarter: 'Q3: Jan – Mar',
                  title: 'Strategic Assessment',
                  color: 'text-cyan-400',
                  steps: [
                    'Review BAS data — is your GST position clean?',
                    'Assess deduction pipeline — what purchases are needed before EOFY?',
                    'Check super balance — start planning carry-forward contributions if eligible',
                    'Review business structure — is sole trader still optimal for your income level?',
                  ],
                },
                {
                  quarter: 'Q4: Apr – Jun',
                  title: 'EOFY Execution',
                  color: 'text-blue-400',
                  steps: [
                    'Execute prepayment strategy — pay next year\'s insurance, subscriptions, and rent',
                    'Purchase any needed business assets (under $20,000 instant write-off)',
                    'Make final super contributions (allow 3-5 days for processing before 30 June)',
                    'Decide on income timing — delay or accelerate invoices around 30 June',
                  ],
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className={`${item.color} font-semibold text-sm`}>{item.quarter}</h4>
                  </div>
                  <p className="text-white font-medium mb-3">{item.title}</p>
                  <ul className="space-y-2">
                    {item.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <svg className={`w-4 h-4 ${item.color} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="common-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Tax Planning Mistakes</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              These are the most common and costly tax planning mistakes made by Australian freelancers. Avoiding even a few of these can save thousands of dollars per year.
            </p>

            <div className="space-y-3 mt-6">
              {[
                {
                  mistake: 'Not setting aside tax from every payment',
                  impact: 'Devastating EOFY surprise',
                  fix: 'Open a separate high-interest savings account. Transfer 30-35% of every payment received immediately. This is non-negotiable — treat it as money that is not yours.',
                },
                {
                  mistake: 'Missing legitimate deductions',
                  impact: 'Overpaying tax by thousands',
                  fix: 'Keep every receipt. Use accounting software to categorise expenses in real time. The ATO\'s app lets you photograph receipts on the go. Common missed deductions: phone bills, internet, home office, professional development, and travel between client sites.',
                },
                {
                  mistake: 'Confusing tax avoidance with tax evasion',
                  impact: 'Fear of claiming legitimate deductions',
                  fix: 'Claiming genuine business deductions is legal and encouraged. Hiding income or inventing fake expenses is illegal. If you earned it and spent it on your business, claim it. Keep records to prove it.',
                },
                {
                  mistake: 'Not using a registered tax agent',
                  impact: 'Missed strategies worth more than the fee',
                  fix: 'A good tax agent costs $300-800/year for a sole trader return but typically identifies deductions and strategies worth far more. They also extend your lodgement deadline from 31 October to 15 May.',
                },
                {
                  mistake: 'Ignoring superannuation',
                  impact: 'Missing tax deductions and retirement savings',
                  fix: 'Unlike employees, nobody contributes super for you. Voluntary contributions up to $30,000 are tax-deductible and reduce your taxable income. Even $5,000/year makes a significant difference over a career.',
                },
                {
                  mistake: 'Poor record keeping',
                  impact: 'Audit risk and inability to prove deductions',
                  fix: 'The ATO requires you to keep records for 5 years. Use cloud accounting software (Xero, MYOB, or InvoiceFlow) to store everything digitally. The ATO\'s data matching catches discrepancies — your records need to match.',
                },
                {
                  mistake: 'Not adjusting PAYG instalments',
                  impact: 'Over or underpaying quarterly',
                  fix: 'If your income changes significantly (up or down), you can vary your PAYG instalments through the ATO portal. Overpaying ties up your cash flow. Underpaying means a big EOFY bill plus potential interest.',
                },
                {
                  mistake: 'Forgetting the Medicare levy',
                  impact: 'Under-estimating tax by 2-3.5%',
                  fix: 'The Medicare levy (2%) applies on top of income tax. If you earn over $93,000 without private hospital cover, the Medicare levy surcharge adds another 1-1.5%. Factor both into your 30-35% tax reserve.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold text-sm">{item.mistake}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">{item.impact}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-emerald-400">Fix:</strong> {item.fix}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="invoiceflow-tax">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow gives you the real-time financial visibility that makes tax planning simple and proactive &mdash; not a stressful EOFY scramble.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { title: 'Real-Time Income Tracking', desc: 'See your year-to-date income, projected annual income, and which tax bracket you are heading toward. Know exactly when you are approaching a bracket boundary so you can time income and deductions strategically.' },
                { title: 'Expense Categorisation', desc: 'Categorise every business expense as you go — home office, travel, equipment, professional development, insurance. At EOFY, your deductions are already organised and ready for your tax return. No more shoebox of receipts.' },
                { title: 'BAS-Ready Reports', desc: 'Your quarterly GST data is calculated automatically — GST collected, GST paid, and net GST position. Transfer directly to your BAS without manual calculation. Includes PAYG instalment tracking.' },
                { title: 'Tax Estimate Dashboard', desc: 'InvoiceFlow estimates your income tax, Medicare levy, and effective tax rate in real time based on your current income and deductions. See how much you should have in your tax reserve account at any point in the year.' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                  { label: 'PAYG', href: '/glossary/payg' },
                  { label: 'Superannuation', href: '/glossary/superannuation' },
                  { label: 'BAS', href: '/glossary/bas' },
                  { label: 'Financial Year', href: '/glossary/financial-year' },
                ].map((term) => (
                  <Link key={term.href} href={term.href} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-colors">
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
        <p className="text-gray-400 text-center mb-8">Free tools to help you plan, estimate, and minimise your tax as a freelancer.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">{tool.icon}</div>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on Australian tax strategies and obligations for freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-emerald-500/40 transition-all duration-300">
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
            Take Control of Your Tax with Real-Time Visibility
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow tracks your income, categorises expenses, and estimates your tax in real time &mdash; so you always know where you stand and never face an unexpected tax bill.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/tax-estimator">
              <Button variant="secondary">Estimate Your Tax Now</Button>
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
