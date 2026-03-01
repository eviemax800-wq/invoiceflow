import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Tax Offset: LITO, SAPTO & Small Business Offset Guide Australia — InvoiceFlow',
  description:
    'What is a tax offset? Learn about Low Income Tax Offset (LITO), Small Business Income Tax Offset (SBITO), SAPTO, and how Australian freelancers can reduce their tax bill. ATO 2025-26 rates.',
  keywords: [
    'tax offset australia',
    'low income tax offset 2025',
    'LITO tax offset',
    'small business income tax offset',
    'tax offset vs tax deduction',
    'SAPTO seniors tax offset',
    'tax offset meaning',
    'what is a tax offset australia',
    'how do tax offsets work',
    'tax offset freelancer sole trader',
    'franking credit offset',
    'tax offset calculator australia',
  ],
  alternates: { canonical: '/glossary/tax-offset' },
  openGraph: {
    title: 'Tax Offset: LITO, SAPTO & Small Business Offset Guide Australia — InvoiceFlow',
    description:
      'Complete guide to Australian tax offsets: LITO (up to $700), small business income tax offset (up to $1,000), SAPTO, and how they reduce your tax bill dollar-for-dollar.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/tax-offset',
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
    { '@type': 'ListItem', position: 3, name: 'Tax Offset', item: `${BASE_URL}/glossary/tax-offset` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a tax offset and a tax deduction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tax deduction reduces your taxable income — the amount of income you pay tax on. A tax offset (also called a tax rebate) reduces the actual tax you owe, dollar-for-dollar. For example, if you earn $80,000, a $1,000 tax deduction reduces your taxable income to $79,000, saving you $300 in tax (at the 30% marginal rate). But a $1,000 tax offset reduces your actual tax bill by $1,000 — the full amount. This makes tax offsets significantly more valuable than deductions of the same dollar amount. However, most tax offsets are non-refundable, meaning they can reduce your tax to zero but cannot create a refund on their own.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Low Income Tax Offset (LITO) for 2025-26?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Low Income Tax Offset for 2025-26 provides a maximum offset of $700 for taxable incomes up to $37,500. It then phases out at a rate of 5 cents per dollar between $37,500 and $45,000, and 1.5 cents per dollar between $45,000 and $66,667, reaching zero at $66,667. The LITO is automatically calculated by the ATO when you lodge your tax return — you do not need to claim it separately. For freelancers earning under $66,667 in taxable income, this offset effectively reduces their average tax rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the small business income tax offset?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Small Business Income Tax Offset (SBITO) is available to individuals with business income from a small business entity with aggregated turnover under $5 million. It provides an offset of 16% of the income tax payable on your small business income, up to a maximum of $1,000 per year. If you are a sole trader freelancer earning under $5 million turnover (which is virtually all freelancers), you are eligible. Like LITO, it is non-refundable — it can reduce your tax to zero but will not generate a refund. The ATO calculates it automatically based on information in your tax return.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can tax offsets give me a tax refund?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most tax offsets are non-refundable, meaning they can only reduce your tax payable to zero — they cannot create a refund by themselves. However, some offsets are refundable, most notably franking credits (dividend imputation credits). If you receive dividends from Australian companies with franking credits attached, those credits offset your tax, and if the credits exceed your tax liability, the excess is refunded to you. For freelancers, the main offsets (LITO and SBITO) are non-refundable, so they reduce your tax bill but will not generate an additional refund beyond what PAYG instalments or other withholding amounts would produce.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to claim tax offsets on my tax return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the most common offsets affecting freelancers — LITO and the Small Business Income Tax Offset — the ATO calculates them automatically based on your tax return information. You do not need to fill in a separate claim form. However, for some other offsets like the Private Health Insurance Rebate, you may need to provide relevant details (such as your health insurance policy number and the tax statement from your insurer). Franking credits from dividends are claimed through your tax return using the dividend statement from your share registry. If you use a tax agent, they will ensure all eligible offsets are applied.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-tax-offset', label: '1. What Is a Tax Offset?' },
  { id: 'offset-vs-deduction', label: '2. Tax Offset vs Tax Deduction' },
  { id: 'lito', label: '3. Low Income Tax Offset (LITO)' },
  { id: 'small-business-offset', label: '4. Small Business Income Tax Offset' },
  { id: 'other-offsets', label: '5. Other Offsets Freelancers Should Know' },
  { id: 'invoiceflow-tax-offset', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax including offsets based on ATO 2025-26 brackets. See your actual tax liability after LITO.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H18v-.008zm0 2.25h.008v.008H18v-.008zM9 20.25h9A2.25 2.25 0 0020.25 18V6.75A2.25 2.25 0 0018 4.5H6A2.25 2.25 0 003.75 6.75V18A2.25 2.25 0 006 20.25h3z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate your ideal hourly rate factoring in tax brackets, offsets, and your target take-home income.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/super-calculator',
    name: 'Super Calculator',
    description: 'Calculate super contributions and understand the tax offset benefits of concessional contributions.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-deduction-finder',
    name: 'Tax Deduction Finder',
    description: 'Find all the tax deductions you can claim to reduce your taxable income alongside your tax offsets.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Freelancer Tax Guide',
    description: 'Complete guide to income tax, deductions, PAYG, and offsets for Australian freelancers and sole traders.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide',
    description: 'End of financial year checklist to maximise deductions and ensure all offsets are applied to your return.',
  },
  {
    href: '/guides/superannuation-for-freelancers',
    name: 'Super for Freelancers',
    description: 'How voluntary super contributions create tax benefits that work alongside offsets to reduce your tax bill.',
  },
];

export default function TaxOffsetGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Tax Offset</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Compliance
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Tax Offset{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A tax offset directly reduces your tax bill, dollar-for-dollar. This guide covers the key offsets available to Australian freelancers &mdash; LITO (up to $700), the small business income tax offset (up to $1,000), SAPTO, franking credits &mdash; and how they differ from deductions.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>9 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO 2025-26 Rates</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">1:1</span>
              <div>
                <p className="text-white font-medium text-sm">Dollar-for-Dollar Reduction</p>
                <p className="text-gray-400 text-sm">Tax offsets reduce your actual tax bill, not just your taxable income</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$700</span>
              <div>
                <p className="text-white font-medium text-sm">LITO: Up to $700</p>
                <p className="text-gray-400 text-sm">Low Income Tax Offset for taxable incomes under $66,667</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$1K</span>
              <div>
                <p className="text-white font-medium text-sm">Small Biz Offset: Up to $1,000</p>
                <p className="text-gray-400 text-sm">16% of tax on business income for sole traders under $5M turnover</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">Auto</span>
              <div>
                <p className="text-white font-medium text-sm">Calculated Automatically</p>
                <p className="text-gray-400 text-sm">LITO and SBITO are applied by the ATO — no separate claim needed</p>
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
              <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm py-1">
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

        {/* Section 1 */}
        <section id="what-is-tax-offset">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Tax Offset?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A tax offset (also called a <strong className="text-white">tax rebate</strong>) is a direct reduction in the amount of tax you owe. Unlike a tax deduction, which reduces your <em>taxable income</em>, a tax offset reduces your <em>actual tax liability</em> &mdash; dollar for dollar.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For example, if you owe $15,000 in income tax and you have a $1,000 tax offset, your tax bill becomes <strong className="text-white">$14,000</strong>. Compare this to a $1,000 tax deduction, which would only reduce your tax by $300 (at a 30% marginal rate). This makes tax offsets <strong className="text-white">significantly more valuable</strong> than deductions of the same dollar amount.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Most tax offsets for freelancers are <strong className="text-white">non-refundable</strong> &mdash; they can reduce your tax to zero but cannot generate a refund by themselves. The notable exception is franking credits on dividends, which can be refunded.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="offset-vs-deduction">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax Offset vs Tax Deduction</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Aspect</th>
                    <th className="text-left text-sm font-medium text-amber-400 px-6 py-4">Tax Offset</th>
                    <th className="text-left text-sm font-medium text-orange-400 px-6 py-4">Tax Deduction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { aspect: 'What it reduces', offset: 'Your tax bill (directly)', deduction: 'Your taxable income' },
                    { aspect: 'Value of $1,000', offset: 'Saves exactly $1,000 in tax', deduction: 'Saves $300-$450 depending on marginal rate' },
                    { aspect: 'How you get it', offset: 'Automatic (LITO, SBITO) or via tax return', deduction: 'Claimed on your tax return' },
                    { aspect: 'Examples', offset: 'LITO, SBITO, SAPTO, franking credits', deduction: 'Home office, vehicle, equipment, insurance' },
                    { aspect: 'Refundable?', offset: 'Usually no (except franking credits)', deduction: 'Can create a refund if PAYG was overpaid' },
                    { aspect: 'Can reduce tax below zero?', offset: 'No (non-refundable offsets)', deduction: 'Can create a tax loss carried forward' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">{row.aspect}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.offset}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.deduction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Key Insight: Offsets and Deductions Work Together</p>
              <p className="text-gray-400 text-sm">
                Tax offsets and deductions are not either/or. They work in sequence: first, deductions reduce your taxable income. Then, offsets reduce the tax calculated on that reduced income. Maximising both is how freelancers pay the least legally possible. See:{' '}
                <Link href="/glossary/tax-deduction" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">tax deductions</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="lito">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Low Income Tax Offset (LITO)</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              LITO is the most common tax offset for Australian taxpayers. It effectively raises the <strong className="text-white">tax-free threshold from $18,200 to $24,076</strong> for low-income earners and provides graduated benefits up to $66,667.
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Taxable Income</th>
                    <th className="text-left text-sm font-medium text-amber-400 px-6 py-4">LITO Amount</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Phase-Out Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { income: 'Up to $37,500', lito: '$700 (maximum)', rate: 'Full amount' },
                    { income: '$37,501 – $45,000', lito: '$700 minus 5c per $1 over $37,500', rate: '5 cents per dollar' },
                    { income: '$45,001 – $66,667', lito: '$325 minus 1.5c per $1 over $45,000', rate: '1.5 cents per dollar' },
                    { income: 'Over $66,667', lito: '$0', rate: 'Fully phased out' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">{row.income}</td>
                      <td className="px-6 py-3 text-amber-400 text-sm font-bold">{row.lito}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Effective Tax-Free Threshold</p>
              <p className="text-gray-400 text-sm">
                With LITO, the effective tax-free threshold is <strong className="text-gray-200">$24,076</strong>, not $18,200. This is because a person earning $24,076 would owe $939 in tax (16% on income above $18,200), which is entirely offset by the $700 LITO. This means freelancers earning under $24,076 after deductions pay <strong className="text-gray-200">no income tax at all</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="small-business-offset">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Small Business Income Tax Offset</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The Small Business Income Tax Offset (SBITO) is one of the most <strong className="text-white">underappreciated tax benefits for sole trader freelancers</strong>. If your aggregated turnover is under $5 million (virtually all freelancers), you automatically qualify.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3">How It Works</h4>
                <ul className="space-y-2">
                  {[
                    'Offset = 16% of tax payable on business income',
                    'Maximum offset: $1,000 per year',
                    'Applied automatically by the ATO',
                    'Non-refundable (cannot create a refund)',
                    'Eligibility: aggregated turnover under $5M',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3">Worked Example</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Taxable business income</span>
                    <span className="text-white font-medium">$95,000</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Income tax payable</span>
                    <span className="text-white font-medium">$20,533</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>SBITO (16% of $20,533)</span>
                    <span className="text-amber-400 font-medium">$3,285</span>
                  </div>
                  <div className="border-t border-amber-500/30 pt-2 flex justify-between">
                    <span className="text-amber-400 font-semibold">Offset applied (capped)</span>
                    <span className="text-amber-400 font-bold">$1,000</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-2">16% of tax is $3,285, but capped at $1,000 maximum</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">When Does SBITO Max Out?</p>
              <p className="text-gray-400 text-sm">
                You hit the $1,000 cap when 16% of your tax on business income equals $1,000 &mdash; meaning <strong className="text-gray-200">$6,250 in tax payable</strong>. This corresponds to a taxable income of about <strong className="text-gray-200">$39,000</strong>. Above that income, the offset stays at $1,000 regardless of how much you earn (as long as turnover stays under $5M).
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="other-offsets">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Other Offsets Freelancers Should Know</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <div className="space-y-4 mt-6">
              {[
                {
                  title: 'Franking Credits (Dividend Imputation)',
                  desc: 'If you hold Australian shares that pay dividends with franking credits attached, those credits offset your tax. Uniquely, franking credits are REFUNDABLE — if they exceed your tax liability, the ATO refunds the difference. A $700 fully franked dividend from a company that already paid 25% tax comes with a $233 franking credit.',
                  relevance: 'Relevant if you invest in Australian shares',
                },
                {
                  title: 'Private Health Insurance Rebate',
                  desc: 'If you have private hospital cover, you can receive the rebate as a tax offset (or as a premium reduction). The rebate depends on your income tier: 24.608% (under $97,000), 16.405% ($97K-$113K), 8.202% ($113K-$151K), 0% (above $151K). Claimed using your insurer\'s tax statement.',
                  relevance: 'Relevant if you have private health insurance',
                },
                {
                  title: 'SAPTO (Seniors and Pensioners Tax Offset)',
                  desc: 'Available if you have reached Age Pension age. Maximum offset of $2,230 (single) or $1,602 each (couple). Phases out above certain income thresholds. Significantly reduces tax for older freelancers who continue working past retirement age.',
                  relevance: 'Relevant if you are of Age Pension age',
                },
                {
                  title: 'Super Co-Contribution',
                  desc: 'Not technically a tax offset, but a government contribution to your super. If your income is under $60,400 and you make personal (after-tax) super contributions, the government matches up to $500 (at 50 cents per dollar). Maximum co-contribution on $1,000 after-tax contribution for incomes under $45,400.',
                  relevance: 'Relevant if income is under $60,400',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">{item.desc}</p>
                  <p className="text-xs text-amber-400/70">{item.relevance}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">LMITO Has Ended</p>
              <p className="text-gray-400 text-sm">
                The Low and Middle Income Tax Offset (LMITO) &mdash; the additional offset of up to $1,500 that was available during COVID &mdash; <strong className="text-gray-200">ended after the 2021-22 financial year</strong>. It is no longer available for 2025-26 or any subsequent year. Do not confuse LMITO with the ongoing LITO, which continues to apply.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="invoiceflow-tax-offset">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              While tax offsets are calculated by the ATO, InvoiceFlow helps you <strong className="text-white">track the income and expenses that determine your offset eligibility</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { title: 'Income Tracking', desc: 'Track your total business revenue throughout the year to know whether you are below the LITO phase-out threshold ($66,667) and how much offset you can expect.' },
                { title: 'Expense Tracking', desc: 'Log deductible expenses to reduce your taxable income — which is the starting point for calculating both your tax liability and your eligible offsets.' },
                { title: 'Tax Estimation', desc: 'InvoiceFlow estimates your income tax including the effect of offsets, so you can see your approximate net tax position at any time during the year.' },
                { title: 'EOFY Preparation', desc: 'Come tax time, your InvoiceFlow dashboard provides a clear summary of income and expenses — making it easy for you (or your tax agent) to ensure all offsets are applied correctly.' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                  { label: 'Sole Trader', href: '/glossary/sole-trader' },
                ].map((term) => (
                  <Link key={term.href} href={term.href} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium hover:bg-amber-500/20 transition-colors">
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
        <p className="text-gray-400 text-center mb-8">Free tools to help you estimate tax, find deductions, and maximise offsets.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-amber-500/50 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">{tool.icon}</div>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax obligations and strategies for Australian freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-amber-500/40 transition-all duration-300">
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

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture />
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Track Your Income &amp; Maximise Your Offsets
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers track revenue and expenses throughout the year &mdash; so you always know where you stand with tax offsets, deductions, and your estimated net tax position.
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
