import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Invoicing & Business Glossary for Australian Freelancers — InvoiceFlow',
  description:
    'Plain-English definitions of ABN, GST, BAS, PAYG, tax invoices, superannuation, and every business term Australian freelancers need to know. Free glossary with ATO-accurate information.',
  keywords: [
    'invoicing glossary australia',
    'business terms freelancer',
    'what is GST australia',
    'what is BAS australia',
    'what is ABN',
    'PAYG meaning',
    'tax invoice definition',
    'freelancer business terms',
    'australian business glossary',
  ],
  alternates: { canonical: '/glossary' },
  openGraph: {
    title: 'Invoicing & Business Glossary for Australian Freelancers — InvoiceFlow',
    description:
      'Plain-English definitions of every business term Australian freelancers need to know. ABN, GST, BAS, PAYG, super, and more.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: 'https://invoiceflow-teal.vercel.app/glossary' },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Australian Business & Invoicing Glossary',
  description: 'Essential business terms for Australian freelancers, sole traders, and contractors.',
  numberOfItems: 24,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ABN (Australian Business Number)', url: 'https://invoiceflow-teal.vercel.app/glossary/abn' },
    { '@type': 'ListItem', position: 2, name: 'GST (Goods and Services Tax)', url: 'https://invoiceflow-teal.vercel.app/glossary/gst' },
    { '@type': 'ListItem', position: 3, name: 'BAS (Business Activity Statement)', url: 'https://invoiceflow-teal.vercel.app/glossary/bas' },
    { '@type': 'ListItem', position: 4, name: 'PAYG (Pay As You Go)', url: 'https://invoiceflow-teal.vercel.app/glossary/payg' },
    { '@type': 'ListItem', position: 5, name: 'Tax Invoice', url: 'https://invoiceflow-teal.vercel.app/glossary/tax-invoice' },
    { '@type': 'ListItem', position: 6, name: 'Sole Trader', url: 'https://invoiceflow-teal.vercel.app/glossary/sole-trader' },
    { '@type': 'ListItem', position: 7, name: 'Credit Note', url: 'https://invoiceflow-teal.vercel.app/glossary/credit-note' },
    { '@type': 'ListItem', position: 8, name: 'Superannuation', url: 'https://invoiceflow-teal.vercel.app/glossary/superannuation' },
    { '@type': 'ListItem', position: 9, name: 'Invoice', url: 'https://invoiceflow-teal.vercel.app/glossary/invoice' },
    { '@type': 'ListItem', position: 10, name: 'Tax File Number (TFN)', url: 'https://invoiceflow-teal.vercel.app/glossary/tfn' },
    { '@type': 'ListItem', position: 11, name: 'Professional Indemnity Insurance', url: 'https://invoiceflow-teal.vercel.app/glossary/professional-indemnity' },
    { '@type': 'ListItem', position: 12, name: 'ACN (Australian Company Number)', url: 'https://invoiceflow-teal.vercel.app/glossary/acn' },
    { '@type': 'ListItem', position: 13, name: 'Accounts Receivable', url: 'https://invoiceflow-teal.vercel.app/glossary/accounts-receivable' },
    { '@type': 'ListItem', position: 14, name: 'Cash Flow', url: 'https://invoiceflow-teal.vercel.app/glossary/cash-flow' },
    { '@type': 'ListItem', position: 15, name: 'Pty Ltd (Proprietary Limited)', url: 'https://invoiceflow-teal.vercel.app/glossary/pty-ltd' },
    { '@type': 'ListItem', position: 16, name: 'Depreciation', url: 'https://invoiceflow-teal.vercel.app/glossary/depreciation' },
    { '@type': 'ListItem', position: 17, name: 'Payment Terms', url: 'https://invoiceflow-teal.vercel.app/glossary/payment-terms' },
    { '@type': 'ListItem', position: 18, name: 'Contractor vs Employee', url: 'https://invoiceflow-teal.vercel.app/glossary/contractor-vs-employee' },
    { '@type': 'ListItem', position: 19, name: 'Income Tax', url: 'https://invoiceflow-teal.vercel.app/glossary/income-tax' },
    { '@type': 'ListItem', position: 20, name: 'Purchase Order', url: 'https://invoiceflow-teal.vercel.app/glossary/purchase-order' },
    { '@type': 'ListItem', position: 21, name: 'Profit and Loss Statement', url: 'https://invoiceflow-teal.vercel.app/glossary/profit-and-loss' },
    { '@type': 'ListItem', position: 22, name: 'Retainer Agreement', url: 'https://invoiceflow-teal.vercel.app/glossary/retainer' },
    { '@type': 'ListItem', position: 23, name: 'Quote (Quotation)', url: 'https://invoiceflow-teal.vercel.app/glossary/quote' },
    { '@type': 'ListItem', position: 24, name: 'Scope Creep', url: 'https://invoiceflow-teal.vercel.app/glossary/scope-creep' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What business terms do Australian freelancers need to know?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most important terms are ABN (Australian Business Number), GST (Goods and Services Tax), BAS (Business Activity Statement), PAYG (Pay As You Go instalments), superannuation, tax invoices, and credit notes. Understanding these is essential for legal compliance and getting paid correctly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I find plain-English explanations of ATO terminology?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our glossary provides plain-English definitions of every business term Australian freelancers encounter. Each entry includes practical examples, ATO references, and links to relevant tools and guides.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to understand all these terms before starting freelancing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should understand the basics: ABN (you need one to invoice), GST (you must register once you earn $75K+), and tax invoices (required for GST-registered businesses). Other terms become relevant as your business grows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are these definitions specific to Australian tax law?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All definitions reference current Australian tax law, ATO rates, and thresholds for the 2025-26 financial year. Some terms like GST and BAS are uniquely Australian.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I use InvoiceFlow to handle these requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow handles ABN display, GST calculations, tax invoice formatting, and BAS-ready reporting automatically. Start for free with up to 5 invoices per month — no accounting knowledge required.',
      },
    },
  ],
};

const categories = [
  {
    name: 'Tax & Compliance',
    color: 'from-emerald-500 to-teal-500',
    terms: [
      { name: 'ABN', full: 'Australian Business Number', slug: 'abn', description: 'Your unique 11-digit business identifier required for invoicing and tax.' },
      { name: 'GST', full: 'Goods and Services Tax', slug: 'gst', description: 'The 10% tax on most goods and services in Australia. Registration required at $75K.' },
      { name: 'BAS', full: 'Business Activity Statement', slug: 'bas', description: 'Your quarterly report to the ATO for GST, PAYG, and other tax obligations.' },
      { name: 'PAYG', full: 'Pay As You Go', slug: 'payg', description: 'Pre-paying your income tax in quarterly instalments to the ATO.' },
      { name: 'Super', full: 'Superannuation', slug: 'superannuation', description: 'Australia\'s mandatory retirement savings system. 11.5% guarantee rate for 2025-26.' },
      { name: 'TFN', full: 'Tax File Number (TFN)', slug: 'tfn', description: 'Your unique 9-digit tax identifier issued by the ATO. Required for tax returns and bank accounts.' },
      { name: 'Depreciation', full: 'Depreciation', slug: 'depreciation', description: 'Spreading the cost of business assets over their useful life for tax deductions. $20K instant write-off.' },
      { name: 'Income Tax', full: 'Income Tax', slug: 'income-tax', description: 'Tax on your freelance earnings. $18,200 tax-free threshold, then progressive rates up to 45%.' },
    ],
  },
  {
    name: 'Invoicing & Documents',
    color: 'from-blue-500 to-indigo-500',
    terms: [
      { name: 'Invoice', full: 'Invoice', slug: 'invoice', description: 'A commercial document requesting payment for goods or services. The foundation of getting paid.' },
      { name: 'Tax Invoice', full: 'Tax Invoice', slug: 'tax-invoice', description: 'The GST document your clients need to claim input tax credits from the ATO.' },
      { name: 'Credit Note', full: 'Credit Note', slug: 'credit-note', description: 'A document that reduces or cancels the amount on a previously issued invoice.' },
      { name: 'PO', full: 'Purchase Order', slug: 'purchase-order', description: 'A buyer\'s document authorising a purchase. Required by corporates and government agencies.' },
      { name: 'Quote', full: 'Quote (Quotation)', slug: 'quote', description: 'A formal document stating a fixed price for a specific scope of work. Becomes binding on acceptance.' },
    ],
  },
  {
    name: 'Cash Flow & Payments',
    color: 'from-cyan-500 to-blue-500',
    terms: [
      { name: 'Cash Flow', full: 'Cash Flow', slug: 'cash-flow', description: 'The movement of money in and out of your business. Positive cash flow = survival.' },
      { name: 'AR', full: 'Accounts Receivable', slug: 'accounts-receivable', description: 'Money owed to you by clients for work completed. Your outstanding invoices.' },
      { name: 'Terms', full: 'Payment Terms', slug: 'payment-terms', description: 'Conditions for when and how invoices must be paid. Net 30, Due on Receipt, EOM, and more.' },
      { name: 'Retainer', full: 'Retainer Agreement', slug: 'retainer', description: 'A recurring fee arrangement where a client reserves your time, expertise, or deliverables on an ongoing basis.' },
    ],
  },
  {
    name: 'Business Structure',
    color: 'from-lime-500 to-green-500',
    terms: [
      { name: 'Sole Trader', full: 'Sole Trader', slug: 'sole-trader', description: 'The simplest business structure — an individual trading on their own.' },
      { name: 'ACN', full: 'Australian Company Number (ACN)', slug: 'acn', description: 'A 9-digit identifier for registered companies. Needed if you incorporate as a Pty Ltd.' },
      { name: 'Pty Ltd', full: 'Proprietary Limited Company (Pty Ltd)', slug: 'pty-ltd', description: 'The most common company structure in Australia. Separate legal entity with limited liability.' },
      { name: 'C vs E', full: 'Contractor vs Employee', slug: 'contractor-vs-employee', description: 'The critical distinction that determines tax, super, leave, and legal obligations. Get it wrong = penalties.' },
    ],
  },
  {
    name: 'Financial Reporting',
    color: 'from-lime-500 to-green-500',
    terms: [
      { name: 'P&L', full: 'Profit and Loss Statement', slug: 'profit-and-loss', description: 'A summary of your income and expenses over a period, showing whether your business made a profit or loss.' },
    ],
  },
  {
    name: 'Business Protection',
    color: 'from-emerald-500 to-green-500',
    terms: [
      { name: 'PI Insurance', full: 'Professional Indemnity Insurance', slug: 'professional-indemnity', description: 'Insurance protecting against claims of negligence, errors, or bad advice. Essential for service providers.' },
    ],
  },
  {
    name: 'Project Management',
    color: 'from-red-500 to-rose-500',
    terms: [
      { name: 'Scope Creep', full: 'Scope Creep', slug: 'scope-creep', description: 'The gradual, uncontrolled expansion of project requirements beyond the original scope — the #1 profitability killer.' },
    ],
  },
];

const popularTerms = [
  { name: 'GST', slug: 'gst', searches: '22,200/mo', description: 'Goods and Services Tax — 10% tax on most Australian goods and services' },
  { name: 'Tax Invoice', slug: 'tax-invoice', searches: '18,100/mo', description: 'The document that proves GST was charged on a sale' },
  { name: 'ABN', slug: 'abn', searches: '14,800/mo', description: 'Australian Business Number — your 11-digit business identifier' },
  { name: 'Sole Trader', slug: 'sole-trader', searches: '14,800/mo', description: 'The simplest business structure for Australian freelancers' },
  { name: 'BAS', slug: 'bas', searches: '12,100/mo', description: 'Business Activity Statement — your quarterly ATO report' },
  { name: 'Super', slug: 'superannuation', searches: '12,100/mo', description: 'Superannuation — Australia\'s retirement savings system' },
  { name: 'PAYG', slug: 'payg', searches: '9,900/mo', description: 'Pay As You Go — pre-paying income tax in quarterly instalments' },
  { name: 'Credit Note', slug: 'credit-note', searches: '8,100/mo', description: 'A document that adjusts or cancels a previously issued invoice' },
  { name: 'Invoice', slug: 'invoice', searches: '40,500/mo', description: 'A commercial document requesting payment for goods or services provided' },
  { name: 'TFN', slug: 'tfn', searches: '12,100/mo', description: 'Tax File Number — your unique 9-digit ATO tax identifier' },
  { name: 'PI Insurance', slug: 'professional-indemnity', searches: '6,600/mo', description: 'Professional Indemnity — insurance against negligence and errors claims' },
  { name: 'ACN', slug: 'acn', searches: '5,400/mo', description: 'Australian Company Number — 9-digit ASIC identifier for registered companies' },
  { name: 'Cash Flow', slug: 'cash-flow', searches: '33,100/mo', description: 'The movement of money in and out of your business — critical for survival' },
  { name: 'Pty Ltd', slug: 'pty-ltd', searches: '22,200/mo', description: 'Proprietary Limited Company — the most common company structure in Australia' },
  { name: 'Depreciation', slug: 'depreciation', searches: '18,100/mo', description: 'Spreading asset costs over time for tax deductions. $20K instant write-off in 2025-26' },
  { name: 'Accounts Receivable', slug: 'accounts-receivable', searches: '14,800/mo', description: 'Money owed to you by clients for completed work — your outstanding invoices' },
  { name: 'Payment Terms', slug: 'payment-terms', searches: '12,100/mo', description: 'Net 30, Due on Receipt, EOM — conditions for when and how invoices must be paid' },
  { name: 'Contractor vs Employee', slug: 'contractor-vs-employee', searches: '22,200/mo', description: 'The ATO\'s multi-factor test that determines tax, super, and legal obligations' },
  { name: 'Income Tax', slug: 'income-tax', searches: '33,100/mo', description: 'How much tax freelancers pay — 2025-26 brackets, deductions, PAYG instalments' },
  { name: 'Purchase Order', slug: 'purchase-order', searches: '18,100/mo', description: 'A buyer\'s document authorising a purchase — required by corporates and government' },
  { name: 'P&L Statement', slug: 'profit-and-loss', searches: '14,800/mo', description: 'Profit and Loss Statement — your income minus expenses, showing business health' },
  { name: 'Retainer', slug: 'retainer', searches: '9,900/mo', description: 'Recurring fee arrangement for ongoing client work — the "holy grail" of freelance billing' },
  { name: 'Quote', slug: 'quote', searches: '22,200/mo', description: 'A formal fixed-price document sent before work begins — becomes binding on acceptance' },
  { name: 'Scope Creep', slug: 'scope-creep', searches: '8,100/mo', description: 'Uncontrolled expansion of project requirements — the #1 profitability killer for freelancers' },
];

export default function GlossaryHub() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-cyan-500/10 to-teal-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Glossary</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Business & Invoicing Glossary
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Every Business Term
            <span className="block bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Australian Freelancers Need to Know
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Plain-English definitions of ABN, GST, BAS, PAYG, tax invoices, credit notes, superannuation, and every other term the ATO throws at you. Written for humans, not accountants.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>2025-26 Rates</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free Forever</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Terms */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Most Searched Terms</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularTerms.map((term) => (
            <Link
              key={term.slug}
              href={`/glossary/${term.slug}`}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-sky-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  {term.name}
                </span>
                <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded-full">
                  {term.searches}
                </span>
              </div>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {term.description}
              </p>
              <div className="mt-4 text-sky-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read definition
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Terms by Category */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Browse by Category</h2>
        {categories.map((category) => (
          <div key={category.name} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              <span className="text-sm text-gray-500">({category.terms.length} terms)</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {category.terms.map((term) => (
                <Link
                  key={term.slug}
                  href={`/glossary/${term.slug}`}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-gray-800/40 border border-gray-700/40 hover:border-emerald-500/40 hover:bg-gray-800/60 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-emerald-400">{term.name}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                      {term.full}
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">{term.description}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-emerald-400 transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Quick Reference Table */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Quick Reference: Key Numbers for 2025-26</h2>
        <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800/80">
                <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Term</th>
                <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Key Number</th>
                <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">What It Means</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/50">
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/gst" className="text-sky-400 hover:text-sky-300 font-medium">GST Threshold</Link></td>
                <td className="px-6 py-4 text-white font-medium">$75,000/yr</td>
                <td className="px-6 py-4 text-sm text-gray-400">Must register for GST once turnover exceeds this</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/payg" className="text-sky-400 hover:text-sky-300 font-medium">PAYG Rate</Link></td>
                <td className="px-6 py-4 text-white font-medium">47% (no ABN)</td>
                <td className="px-6 py-4 text-sm text-gray-400">Tax withheld if you don&apos;t quote your ABN</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/bas" className="text-sky-400 hover:text-sky-300 font-medium">BAS Frequency</Link></td>
                <td className="px-6 py-4 text-white font-medium">Quarterly</td>
                <td className="px-6 py-4 text-sm text-gray-400">Due 28 days after each quarter ends</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><span className="text-sky-400 font-medium">Super Rate</span></td>
                <td className="px-6 py-4 text-white font-medium">11.5%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Superannuation guarantee rate for 2025-26</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><span className="text-sky-400 font-medium">Tax-Free Threshold</span></td>
                <td className="px-6 py-4 text-white font-medium">$18,200</td>
                <td className="px-6 py-4 text-sm text-gray-400">No tax on the first $18,200 of income</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><span className="text-sky-400 font-medium">Instant Asset Write-Off</span></td>
                <td className="px-6 py-4 text-white font-medium">$20,000</td>
                <td className="px-6 py-4 text-sm text-gray-400">Immediately deduct assets costing less than this</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/superannuation" className="text-sky-400 hover:text-sky-300 font-medium">Super Guarantee</Link></td>
                <td className="px-6 py-4 text-white font-medium">11.5%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Superannuation guarantee rate for 2025-26 (12% from July 2025)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/tax-invoice" className="text-sky-400 hover:text-sky-300 font-medium">Tax Invoice Threshold</Link></td>
                <td className="px-6 py-4 text-white font-medium">$82.50</td>
                <td className="px-6 py-4 text-sm text-gray-400">Tax invoice required for GST-registered sales above this amount</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/sole-trader" className="text-sky-400 hover:text-sky-300 font-medium">Sole Traders in AU</Link></td>
                <td className="px-6 py-4 text-white font-medium">2.47 million</td>
                <td className="px-6 py-4 text-sm text-gray-400">Active sole traders in Australia (ABS)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/tfn" className="text-sky-400 hover:text-sky-300 font-medium">TFN Withholding</Link></td>
                <td className="px-6 py-4 text-white font-medium">47%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Highest marginal rate withheld if you don&apos;t quote your TFN</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/acn" className="text-sky-400 hover:text-sky-300 font-medium">ACN Registration</Link></td>
                <td className="px-6 py-4 text-white font-medium">$576</td>
                <td className="px-6 py-4 text-sm text-gray-400">Cost to register a Pty Ltd company with ASIC</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/professional-indemnity" className="text-sky-400 hover:text-sky-300 font-medium">PI Insurance</Link></td>
                <td className="px-6 py-4 text-white font-medium">$300-$700/yr</td>
                <td className="px-6 py-4 text-sm text-gray-400">Typical PI insurance cost for Australian freelancers</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/cash-flow" className="text-sky-400 hover:text-sky-300 font-medium">Late Payments (AU)</Link></td>
                <td className="px-6 py-4 text-white font-medium">$26 billion</td>
                <td className="px-6 py-4 text-sm text-gray-400">Late payments owed to Australian small businesses</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/accounts-receivable" className="text-sky-400 hover:text-sky-300 font-medium">Avg Payment Time</Link></td>
                <td className="px-6 py-4 text-white font-medium">33 days</td>
                <td className="px-6 py-4 text-sm text-gray-400">Average time Australian invoices take to get paid</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/depreciation" className="text-sky-400 hover:text-sky-300 font-medium">Instant Write-Off</Link></td>
                <td className="px-6 py-4 text-white font-medium">$20,000</td>
                <td className="px-6 py-4 text-sm text-gray-400">Instant asset write-off threshold for 2025-26</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/pty-ltd" className="text-sky-400 hover:text-sky-300 font-medium">Company Tax Rate</Link></td>
                <td className="px-6 py-4 text-white font-medium">25%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Base rate entity company tax rate (turnover under $50M)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/payment-terms" className="text-sky-400 hover:text-sky-300 font-medium">Standard Payment Terms</Link></td>
                <td className="px-6 py-4 text-white font-medium">Net 30</td>
                <td className="px-6 py-4 text-sm text-gray-400">Most common payment terms for Australian freelancers (34-day AU average)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/contractor-vs-employee" className="text-sky-400 hover:text-sky-300 font-medium">Sham Contracting Penalty</Link></td>
                <td className="px-6 py-4 text-white font-medium">$469,500</td>
                <td className="px-6 py-4 text-sm text-gray-400">Maximum penalty per contravention for sham contracting (company)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/income-tax" className="text-sky-400 hover:text-sky-300 font-medium">Top Marginal Rate</Link></td>
                <td className="px-6 py-4 text-white font-medium">45% + 2% ML</td>
                <td className="px-6 py-4 text-sm text-gray-400">Income over $190,000 taxed at 45% plus 2% Medicare levy</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/purchase-order" className="text-sky-400 hover:text-sky-300 font-medium">PO 3-Way Match</Link></td>
                <td className="px-6 py-4 text-white font-medium">PO + Invoice + Delivery</td>
                <td className="px-6 py-4 text-sm text-gray-400">Standard corporate matching process before releasing payment</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/profit-and-loss" className="text-sky-400 hover:text-sky-300 font-medium">Healthy Net Margin</Link></td>
                <td className="px-6 py-4 text-white font-medium">50-70%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Target net profit margin for freelance service businesses</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/retainer" className="text-sky-400 hover:text-sky-300 font-medium">Retainer Discount</Link></td>
                <td className="px-6 py-4 text-white font-medium">10-15%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Standard discount off project rate for retainer commitment</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/quote" className="text-sky-400 hover:text-sky-300 font-medium">Quote Validity</Link></td>
                <td className="px-6 py-4 text-white font-medium">14-30 days</td>
                <td className="px-6 py-4 text-sm text-gray-400">Standard validity period for freelance quotes in Australia</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/scope-creep" className="text-sky-400 hover:text-sky-300 font-medium">Projects Affected</Link></td>
                <td className="px-6 py-4 text-white font-medium">52%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Percentage of projects that experience scope creep (PMI)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Related Resources */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Related Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/guides"
            className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-violet-500/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-2 group-hover:text-violet-400 transition-colors">8 Free Guides</h3>
            <p className="text-sm text-gray-400">Comprehensive guides on GST, tax, ABN, superannuation, invoicing, and more.</p>
          </Link>
          <Link
            href="/tools"
            className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-emerald-500/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.386 3.024A1 1 0 015 17.24V5.76a1 1 0 011.034-.954l5.386 3.024a1 1 0 01.546.874v5.55a1 1 0 01-.546.876z" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-2 group-hover:text-emerald-400 transition-colors">100+ Free Tools</h3>
            <p className="text-sm text-gray-400">GST calculator, invoice generator, rate calculator, ABN lookup, and 96 more.</p>
          </Link>
          <Link
            href="/blog"
            className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-amber-500/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-2 group-hover:text-amber-400 transition-colors">125+ Articles</h3>
            <p className="text-sm text-gray-400">In-depth articles on invoicing, tax, business strategy, and getting paid.</p>
          </Link>
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
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stop Googling. Start Invoicing.
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          InvoiceFlow handles ABN display, GST calculations, and ATO-compliant invoices automatically. No accounting degree required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button>Start Free — No Card Required</Button>
          </Link>
          <Link href="/tools">
            <Button variant="secondary">Browse 100+ Free Tools</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
