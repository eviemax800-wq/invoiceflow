import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'What Is an Invoice? Complete Guide to Invoicing in Australia — InvoiceFlow',
  description:
    'What is an invoice? Learn the definition, types of invoices in Australia (tax invoice, proforma, credit note), ATO requirements, ABN rules, and how to create professional invoices. Updated for 2025-26.',
  keywords: [
    'what is an invoice',
    'invoice definition',
    'invoice meaning',
    'types of invoices australia',
    'tax invoice australia',
    'invoice requirements ato',
    'abn on invoice',
    'invoice vs receipt',
    'how to create an invoice',
    'australian invoice template',
    'gst invoice requirements',
    'proforma invoice australia',
  ],
  alternates: { canonical: '/glossary/invoice' },
  openGraph: {
    title: 'What Is an Invoice? Complete Guide to Invoicing in Australia — InvoiceFlow',
    description:
      'Everything you need to know about invoices in Australia: definition, types (tax invoice, proforma, credit note), ATO requirements, ABN rules, common mistakes, and how to create professional invoices.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/invoice',
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
    { '@type': 'ListItem', position: 3, name: 'Invoice', item: `${BASE_URL}/glossary/invoice` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between an invoice and a tax invoice in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A regular invoice is a request for payment that any business can issue, regardless of GST registration. A tax invoice is a specific type of invoice required when a business is registered for GST and the sale is $82.50 or more (including GST). Tax invoices must include seven additional details mandated by the ATO: the words "Tax Invoice", the seller\'s ABN, the date of issue, a description of items sold, the GST amount for each item, the total price including GST, and the buyer\'s identity for sales over $1,000. Only tax invoices allow the buyer to claim GST credits on their BAS.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an ABN to send an invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You are not legally required to have an ABN to send an invoice in Australia, but there are significant financial consequences if you don\'t include one. Under the PAYG withholding rules, if you do not quote your ABN on an invoice, the payer is required to withhold 47% of the payment amount and send it to the ATO. This means you would only receive 53 cents for every dollar invoiced. You can apply for an ABN for free through the Australian Business Register (ABR) at abr.gov.au, and it typically takes just minutes if you have a valid identity document.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I don\'t include GST on my invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are registered for GST, you are legally required to charge GST on most goods and services and issue tax invoices. Failing to include GST when required can result in ATO penalties and interest charges. If you are NOT registered for GST (i.e., your annual turnover is below $75,000), you must not charge GST on your invoices — doing so is illegal. Your invoice should clearly state that the total does not include GST, or you can add a note such as "Not registered for GST." If your turnover exceeds the $75,000 threshold, you must register for GST within 21 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should I keep invoice records?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO requires you to keep invoice records for a minimum of five years from the date you lodge the tax return that the records relate to. For example, invoices from the 2024-25 financial year (which you would include in your tax return lodged in late 2025) must be kept until at least 2030. Records can be kept electronically — you do not need paper copies. If you are claiming depreciation on an asset, keep purchase invoices for the entire period you own the asset plus five years after you dispose of it. Using invoicing software like InvoiceFlow automatically maintains a complete, searchable archive.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I invoice without being registered for GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can absolutely send invoices without being registered for GST. If your annual turnover is below the $75,000 threshold (or $150,000 for non-profit organisations), GST registration is optional. Your invoices should not include GST amounts, should not be labelled "Tax Invoice", and should clearly indicate that the price does not include GST. You must still include your ABN to avoid the 47% PAYG withholding. Many freelancers and sole traders operate below the GST threshold and issue regular invoices rather than tax invoices.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-an-invoice', label: '1. What Is an Invoice?' },
  { id: 'types-of-invoices', label: '2. Types of Invoices' },
  { id: 'australian-invoice-requirements', label: '3. What Must Be on an Australian Invoice?' },
  { id: 'invoice-vs-receipt', label: '4. Invoice vs Receipt vs Quote vs Statement' },
  { id: 'common-invoice-mistakes', label: '5. Common Invoice Mistakes' },
  { id: 'how-to-create-invoices', label: '6. How to Create Professional Invoices' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional, ATO-compliant invoices in seconds with automatic GST calculation.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST-inclusive and exclusive amounts instantly using the 1/11th method.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/abn-lookup',
    name: 'ABN Lookup',
    description: 'Verify any Australian Business Number and check GST registration status instantly.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/late-payment-calculator',
    name: 'Late Payment Calculator',
    description: 'Calculate interest and penalties on overdue invoices under Australian law.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'The complete beginner\'s guide to invoicing as a freelancer in Australia.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'When to register, how to charge GST, BAS lodgement, and the 1/11th method explained.',
  },
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment times and improve your cash flow as a freelancer.',
  },
];

export default function InvoiceGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Invoice</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Invoicing Fundamentals
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            What Is an{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Invoice?
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            An invoice is a commercial document issued by a seller to a buyer, formally requesting payment for goods or services provided. In Australia, invoices are more than just bills &mdash; they serve as legal records for GST claims, income reporting, and tax deduction substantiation.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
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
        <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-8">
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">47%</span>
              <div>
                <p className="text-white font-medium text-sm">Tax Withheld Without ABN</p>
                <p className="text-gray-400 text-sm">Payers must withhold 47% if no ABN is quoted on the invoice</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">$75K</span>
              <div>
                <p className="text-white font-medium text-sm">GST Registration Threshold</p>
                <p className="text-gray-400 text-sm">Must register for GST once annual turnover exceeds $75,000</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">7 days</span>
              <div>
                <p className="text-white font-medium text-sm">Recommended Payment Term</p>
                <p className="text-gray-400 text-sm">Shorter terms improve cash flow; 14 and 30 days also common</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">$82.50</span>
              <div>
                <p className="text-white font-medium text-sm">Tax Invoice Threshold</p>
                <p className="text-gray-400 text-sm">Tax invoice required for GST-taxable sales of $82.50 or more (incl. GST)</p>
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

        {/* Section 1: What Is an Invoice? */}
        <section id="what-is-an-invoice">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is an Invoice?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              An invoice is a <strong className="text-white">commercial document issued by a seller to a buyer</strong>, formally requesting payment for goods or services that have been provided. It is not just a bill &mdash; it is a legally significant record of a business transaction that creates an obligation for the buyer to pay and evidence for the seller that income was earned.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In Australia, invoices serve multiple critical functions beyond simply requesting payment. They are the <strong className="text-white">primary evidence for GST credit claims</strong> on Business Activity Statements (BAS), the foundation of income records for tax returns, and the substantiation required for business deductions. Without proper invoices, freelancers and sole traders risk losing tax deductions, facing ATO audit penalties, and creating cash flow headaches.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The word &quot;invoice&quot; comes from the French word <em>envois</em>, meaning &quot;sendings&quot; or &quot;dispatches.&quot; Historically, invoices accompanied goods being shipped, listing the items and their values. Today, an invoice is typically issued <strong className="text-white">after</strong> goods or services have been delivered (or upon agreed milestones) and <strong className="text-white">before</strong> payment has been received. Once payment is made, a receipt or payment confirmation is issued instead.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers and sole traders, issuing invoices is a <strong className="text-white">fundamental business practice</strong>. Whether you are a graphic designer delivering a logo, a consultant billing for advisory hours, or a tradesperson completing a job, an invoice formalises the transaction, sets clear payment expectations, and creates a paper trail that protects both you and your client.
            </p>
            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Key Point</p>
              <p className="text-gray-400 text-sm">
                An invoice is <strong className="text-gray-200">not a receipt</strong>. An invoice is issued <strong className="text-gray-200">before payment</strong> to request it. A receipt is issued <strong className="text-gray-200">after payment</strong> to confirm it. Confusing the two can cause issues with your bookkeeping, BAS reporting, and cash flow tracking. Always issue an invoice first, then provide a receipt (or mark the invoice as paid) once you receive the funds.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Types of Invoices */}
        <section id="types-of-invoices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of Invoices</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Not all invoices are created equal. In Australia, the type of invoice you issue depends on your GST registration status, the nature of the transaction, and whether you are billing for completed work or providing an estimate. Here are the main types you need to know:
            </p>

            <div className="space-y-4 mt-6">
              {/* Tax Invoice */}
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full">MOST COMMON</span>
                  <h3 className="text-lg font-semibold text-white">Tax Invoice</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Required when you are <strong className="text-gray-200">registered for GST</strong> and the taxable sale is <strong className="text-gray-200">$82.50 or more (including GST)</strong>. A tax invoice must meet seven specific ATO requirements: it must include the words &quot;Tax Invoice&quot;, your ABN, the date of issue, a description of items, the GST amount, the total price, and the buyer&apos;s identity for sales over $1,000. Only tax invoices allow buyers to claim GST credits.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  <strong className="text-gray-200">When to use:</strong> Every time you sell goods or services with GST included and the total is $82.50 or more.
                </p>
              </div>

              {/* Regular Invoice */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-gray-400 bg-gray-500/10 px-2.5 py-1 rounded-full">NON-GST</span>
                  <h3 className="text-lg font-semibold text-white">Regular Invoice</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Used by businesses <strong className="text-gray-200">not registered for GST</strong> (annual turnover under $75,000). A regular invoice requests payment but does not include GST amounts or allow the buyer to claim GST credits. It should still include your ABN, business name, date, description of goods/services, and the total amount payable. Do not label it &quot;Tax Invoice&quot; if you are not GST-registered.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  <strong className="text-gray-200">When to use:</strong> You are a sole trader or freelancer earning under $75K/year and not registered for GST.
                </p>
              </div>

              {/* Proforma Invoice */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full">ESTIMATE</span>
                  <h3 className="text-lg font-semibold text-white">Proforma Invoice</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A proforma invoice is essentially a <strong className="text-gray-200">preliminary bill or quote</strong> sent before goods are delivered or services are completed. It outlines what the buyer can expect to pay but is <strong className="text-gray-200">not a demand for payment</strong>. Proforma invoices are commonly used for project estimates, customs declarations on international shipments, and to give buyers a preview of costs before they commit.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  <strong className="text-gray-200">When to use:</strong> When a client requests a cost breakdown before agreeing to the work, or for international transactions.
                </p>
              </div>

              {/* Credit Note */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">ADJUSTMENT</span>
                  <h3 className="text-lg font-semibold text-white">Credit Note</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A credit note (or credit memo) is issued to <strong className="text-gray-200">reduce or cancel an existing invoice</strong>. Rather than deleting an invoice (which breaks your sequential numbering and audit trail), you issue a credit note that references the original invoice number. Credit notes are used for refunds, discounts applied after invoicing, errors on the original invoice, or returned goods.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  <strong className="text-gray-200">When to use:</strong> When you need to adjust a previously issued invoice downward (partial or full refund/discount).
                </p>
              </div>

              {/* Debit Note */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full">INCREASE</span>
                  <h3 className="text-lg font-semibold text-white">Debit Note</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A debit note is the opposite of a credit note &mdash; it <strong className="text-gray-200">increases the amount owed</strong> on an existing transaction. This can be used when additional work was required beyond the original scope, materials costs increased, or an undercharge needs to be corrected. Like credit notes, debit notes reference the original invoice to maintain a clear audit trail.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  <strong className="text-gray-200">When to use:</strong> When scope creep or cost increases mean the original invoice amount was too low.
                </p>
              </div>

              {/* Recurring Invoice */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-full">AUTOMATED</span>
                  <h3 className="text-lg font-semibold text-white">Recurring Invoice</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A recurring invoice is automatically generated at <strong className="text-gray-200">regular intervals</strong> (weekly, fortnightly, monthly, quarterly) for ongoing services with a fixed fee. This is ideal for retainer clients, subscription-based services, or any arrangement where the same amount is billed on a predictable schedule. Invoicing software like InvoiceFlow can automate this entirely, eliminating the need to manually create each invoice.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  <strong className="text-gray-200">When to use:</strong> Retainer agreements, monthly maintenance contracts, or any repeating service at a fixed price.
                </p>
              </div>

              {/* Progress/Milestone Invoice */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">PROJECT</span>
                  <h3 className="text-lg font-semibold text-white">Progress / Milestone Invoice</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A progress invoice (also called a milestone invoice) bills for <strong className="text-gray-200">portions of a larger project</strong> as specific stages are completed. For example, a web developer might bill 30% upfront, 40% at design approval, and 30% on launch. This approach improves cash flow for the freelancer and reduces risk for the client by tying payments to deliverables rather than time.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  <strong className="text-gray-200">When to use:</strong> Large projects spanning weeks or months where billing at the end would create cash flow problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: What Must Be on an Australian Invoice? */}
        <section id="australian-invoice-requirements">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Must Be on an Australian Invoice?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO has specific requirements for what must appear on an invoice, particularly for tax invoices. Getting these wrong can mean your client cannot claim their GST credit, and you may face penalties during an audit. Here is everything that must be included:
            </p>

            {/* Requirements Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Requirement</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Regular Invoice</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Tax Invoice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Words &quot;Tax Invoice&quot;</td>
                    <td className="px-6 py-3 text-red-400 text-sm font-medium">No</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Required</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Supplier&apos;s ABN</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Required</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Required</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Supplier&apos;s name / business name</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Required</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Required</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Date of issue</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Required</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Required</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Description of goods/services</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Required</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Required</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">GST amount (for each item or total)</td>
                    <td className="px-6 py-3 text-gray-500 text-sm">N/A</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Required</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Total amount payable</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Required</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Required</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Buyer&apos;s identity (sales &gt; $1,000)</td>
                    <td className="px-6 py-3 text-gray-500 text-sm">Optional</td>
                    <td className="px-6 py-3 text-emerald-400 text-sm font-medium">Required</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Under $1,000 vs Over $1,000</h3>
            <p className="text-gray-300 leading-relaxed">
              The ATO has <strong className="text-white">different requirements based on the invoice amount</strong>. For tax invoices under $1,000, you do not need to include the buyer&apos;s identity (name or ABN). For tax invoices of $1,000 or more (including GST), you must include the <strong className="text-white">buyer&apos;s name or ABN</strong> and show the GST amount for each line item (or clearly state that the total price includes GST).
            </p>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">ABN Warning: 47% Withholding</p>
              <p className="text-gray-400 text-sm">
                If you do not include your ABN on an invoice, the payer is <strong className="text-gray-200">legally required to withhold 47% of the payment</strong> and remit it to the ATO under the PAYG withholding rules. This means on a $1,000 invoice, you would only receive $530. The withheld amount is credited against your income tax, but you won&apos;t see that money until you lodge your tax return. Always include your ABN on every invoice &mdash; no exceptions.
              </p>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Best Practice: Include More Than the Minimum</p>
              <p className="text-gray-400 text-sm">
                While these are the ATO minimums, professional invoices should also include: a <strong className="text-gray-200">unique invoice number</strong> (for sequential tracking), <strong className="text-gray-200">payment terms</strong> (e.g., &quot;Due within 7 days&quot;), <strong className="text-gray-200">payment methods</strong> (bank details, PayID, or payment link), your <strong className="text-gray-200">contact details</strong>, and the <strong className="text-gray-200">buyer&apos;s full details</strong> even for invoices under $1,000. This reduces payment friction and demonstrates professionalism.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Invoice vs Receipt vs Quote vs Statement */}
        <section id="invoice-vs-receipt">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Invoice vs Receipt vs Quote vs Statement</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              These four documents are frequently confused, but they serve very different purposes in the business transaction lifecycle. Understanding when to use each one is essential for proper bookkeeping and ATO compliance.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Document</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Purpose</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden sm:table-cell">Timing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Invoice</td>
                    <td className="px-6 py-4 text-sm text-gray-400">Request for payment for goods/services delivered</td>
                    <td className="px-6 py-4 text-sm text-cyan-400 hidden sm:table-cell">After delivery, before payment</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Receipt</td>
                    <td className="px-6 py-4 text-sm text-gray-400">Proof that payment has been received</td>
                    <td className="px-6 py-4 text-sm text-cyan-400 hidden sm:table-cell">After payment is made</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Quote</td>
                    <td className="px-6 py-4 text-sm text-gray-400">Estimated cost before work begins</td>
                    <td className="px-6 py-4 text-sm text-cyan-400 hidden sm:table-cell">Before agreement / work starts</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Statement</td>
                    <td className="px-6 py-4 text-sm text-gray-400">Summary of account activity over a period</td>
                    <td className="px-6 py-4 text-sm text-cyan-400 hidden sm:table-cell">Periodic (monthly, quarterly)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/20 p-5">
                <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  Invoice
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Issued by the seller to the buyer</li>
                  <li>Creates an obligation to pay</li>
                  <li>Includes payment terms and due date</li>
                  <li>Used for BAS and GST credit claims</li>
                  <li>Must be numbered sequentially</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Receipt
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Issued after payment is received</li>
                  <li>Confirms the transaction is complete</li>
                  <li>Shows date and method of payment</li>
                  <li>Used as proof of purchase for deductions</li>
                  <li>Can be a marked-up copy of the invoice</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Pro Tip</p>
              <p className="text-gray-400 text-sm">
                Many freelancers mark an invoice as <strong className="text-gray-200">&quot;PAID&quot;</strong> once payment is received, which effectively turns the invoice into a receipt. This is acceptable practice and avoids having to issue a separate receipt document. InvoiceFlow does this automatically when you record a payment against an invoice, updating the status and adding a payment confirmation timestamp.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Common Invoice Mistakes */}
        <section id="common-invoice-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Invoice Mistakes</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Even experienced freelancers make invoicing mistakes that cost them money, create tax headaches, or damage their professional reputation. Here are the most common errors and how to avoid them:
            </p>

            <div className="space-y-4 mt-6">
              {/* Mistake 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Missing ABN</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The single most costly mistake. Without your ABN on the invoice, the payer must withhold <strong className="text-gray-200">47% of the total payment</strong> and remit it to the ATO. On a $5,000 invoice, that means you receive only $2,650. The withheld amount is credited to your tax return, but the cash flow impact can be devastating for a freelancer. Always double-check your ABN is visible on every invoice before sending.
                </p>
              </div>

              {/* Mistake 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Wrong GST Calculation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The GST component of a GST-inclusive price is calculated using the <strong className="text-gray-200">1/11th method</strong>, not by multiplying by 10%. For example, if your GST-inclusive price is $1,100, the GST component is $1,100 &divide; 11 = $100 (not $1,100 x 10% = $110). Getting this wrong means you are either overcharging your client for GST or under-reporting GST to the ATO &mdash; both of which cause problems at BAS time.
                </p>
              </div>

              {/* Mistake 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">No Payment Terms</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sending an invoice without clear payment terms (e.g., &quot;Due within 7 days&quot; or &quot;Net 14&quot;) gives the client no urgency to pay. Without a stated due date, you have no leverage to follow up on overdue payments, and it becomes much harder to charge late payment fees. Always include <strong className="text-gray-200">specific payment terms with a concrete due date</strong> on every invoice.
                </p>
              </div>

              {/* Mistake 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Vague Descriptions</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Descriptions like &quot;consulting services&quot; or &quot;design work&quot; are not specific enough. The ATO requires a <strong className="text-gray-200">sufficient description to identify the goods or services</strong> provided. Vague descriptions also make it harder for your client to approve the invoice internally, and they provide weak evidence in the event of a dispute. Use descriptions like &quot;Brand identity design &mdash; logo, colour palette, and typography guide (March 2026)&quot; instead.
                </p>
              </div>

              {/* Mistake 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Not Numbering Sequentially</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  While the ATO does not strictly require sequential numbering, it is <strong className="text-gray-200">best practice and expected during audits</strong>. Gaps in your invoice numbering sequence raise red flags with auditors, as they may indicate unreported income. Use a consistent format like INV-001, INV-002, INV-003 or include the date (INV-2026-03-001). Never reuse or skip invoice numbers.
                </p>
              </div>

              {/* Mistake 6 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Sending Late or Without a Due Date</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The longer you wait to send an invoice, the longer it takes to get paid. Research shows that invoices sent <strong className="text-gray-200">within 24 hours of completing work</strong> are paid significantly faster than those sent days or weeks later. Additionally, invoices without a clear due date sit in the client&apos;s &quot;I&apos;ll get to it later&quot; pile. Always include a specific due date (not just &quot;Net 30&quot;) &mdash; e.g., &quot;Due by 15 March 2026.&quot;
                </p>
              </div>

              {/* Mistake 7 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">7</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Wrong Entity Name</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you operate through a company or trust, the invoice must be issued <strong className="text-gray-200">from the correct legal entity</strong> &mdash; not your personal name. The name and ABN on the invoice must match your registered business structure. Mismatches between the invoice entity and your ABN registration can invalidate the invoice for GST credit purposes and create confusion with the ATO&apos;s data matching systems.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Avoid All These Mistakes Automatically</p>
              <p className="text-gray-400 text-sm">
                Invoicing software eliminates most of these errors by <strong className="text-gray-200">pre-filling your ABN</strong>, <strong className="text-gray-200">auto-calculating GST</strong>, <strong className="text-gray-200">numbering invoices sequentially</strong>, and <strong className="text-gray-200">setting default payment terms</strong>. InvoiceFlow is purpose-built for Australian freelancers and handles all ATO compliance requirements automatically.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How to Create Professional Invoices */}
        <section id="how-to-create-invoices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Create Professional Invoices</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              There are three main approaches to creating invoices as a freelancer, each with different trade-offs in terms of cost, time, professionalism, and compliance. Here is an honest comparison:
            </p>

            <div className="space-y-4 mt-6">
              {/* Option 1: DIY */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-gray-400 bg-gray-500/10 px-2.5 py-1 rounded-full">BASIC</span>
                  <h3 className="text-lg font-semibold text-white">DIY &mdash; Word or Excel</h3>
                </div>
                <div className="text-gray-400 text-sm leading-relaxed space-y-2">
                  <p>
                    The simplest approach: create an invoice template in Microsoft Word, Google Docs, or Excel, fill in the details for each job, save as PDF, and email it. <strong className="text-gray-200">Cost: Free.</strong>
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mt-3">
                    <div>
                      <p className="text-emerald-400 text-xs font-medium mb-1">Pros</p>
                      <ul className="space-y-1 text-xs text-gray-400">
                        <li>No cost</li>
                        <li>Full control over layout</li>
                        <li>No learning curve</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-red-400 text-xs font-medium mb-1">Cons</p>
                      <ul className="space-y-1 text-xs text-gray-400">
                        <li>Manual numbering (easy to make mistakes)</li>
                        <li>No GST auto-calculation</li>
                        <li>No payment tracking</li>
                        <li>Hard to search historical invoices</li>
                        <li>Looks unprofessional to larger clients</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Option 2: Online Generators */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full">MID-RANGE</span>
                  <h3 className="text-lg font-semibold text-white">Online Invoice Generators</h3>
                </div>
                <div className="text-gray-400 text-sm leading-relaxed space-y-2">
                  <p>
                    Free or low-cost web tools that let you fill in a form and download a PDF invoice. Some offer basic features like saving client details and GST calculation, but most are limited in tracking and automation. <strong className="text-gray-200">Cost: Free to $10/month.</strong>
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mt-3">
                    <div>
                      <p className="text-emerald-400 text-xs font-medium mb-1">Pros</p>
                      <ul className="space-y-1 text-xs text-gray-400">
                        <li>Quick and easy</li>
                        <li>Professional templates</li>
                        <li>Some offer GST calculation</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-red-400 text-xs font-medium mb-1">Cons</p>
                      <ul className="space-y-1 text-xs text-gray-400">
                        <li>Limited payment tracking</li>
                        <li>Often no recurring invoices</li>
                        <li>May not be ATO-specific</li>
                        <li>Data may not be stored long-term</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Option 3: Dedicated Software */}
              <div className="rounded-xl bg-gray-800/50 border border-cyan-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full">RECOMMENDED</span>
                  <h3 className="text-lg font-semibold text-white">Dedicated Invoicing Software (InvoiceFlow)</h3>
                </div>
                <div className="text-gray-400 text-sm leading-relaxed space-y-2">
                  <p>
                    Purpose-built invoicing platforms designed specifically for Australian freelancers and sole traders. InvoiceFlow handles the full invoicing lifecycle: creation, sending, tracking, payment recording, and BAS-ready reporting. <strong className="text-gray-200">Cost: Free tier available (5 invoices/month), paid plans from $9/month.</strong>
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mt-3">
                    <div>
                      <p className="text-emerald-400 text-xs font-medium mb-1">Pros</p>
                      <ul className="space-y-1 text-xs text-gray-400">
                        <li>Automatic sequential numbering</li>
                        <li>GST auto-calculation (1/11th method)</li>
                        <li>Payment tracking and reminders</li>
                        <li>Professional branded templates</li>
                        <li>BAS-ready GST reports</li>
                        <li>Recurring invoice automation</li>
                        <li>Client portal and online payments</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-red-400 text-xs font-medium mb-1">Cons</p>
                      <ul className="space-y-1 text-xs text-gray-400">
                        <li>Monthly cost (though often pays for itself in time saved)</li>
                        <li>Learning curve for initial setup</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/10 to-blue-900/10 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Why Automation Matters for Freelancers</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-sm text-cyan-400 font-medium">Time Saved Per Invoice</p>
                  <div className="text-sm font-mono space-y-1 text-gray-400">
                    <p>Manual (Word/Excel): <span className="text-white">15-20 min</span></p>
                    <p>Online generator: <span className="text-white">8-10 min</span></p>
                    <p>InvoiceFlow: <span className="text-emerald-400 font-bold">2-3 min</span></p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-cyan-400 font-medium">At 20 Invoices/Month</p>
                  <div className="text-sm font-mono space-y-1 text-gray-400">
                    <p>Manual: <span className="text-white">6+ hours/month</span></p>
                    <p>Online generator: <span className="text-white">3+ hours/month</span></p>
                    <p>InvoiceFlow: <span className="text-emerald-400 font-bold">45 min/month</span></p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-cyan-500/20">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Beyond time savings:</strong> automated invoicing eliminates numbering errors, ensures GST compliance, sends payment reminders automatically, and creates a searchable archive that satisfies the ATO&apos;s 5-year record-keeping requirement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you create compliant invoices and manage your billing.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on invoicing, GST, and getting paid as a freelancer.</p>
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
        <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Create Professional Invoices in Seconds
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow is built for Australian freelancers. ATO-compliant templates, automatic GST calculation, payment tracking, and BAS-ready reports. Start for free &mdash; no accountant required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/invoice-generator">
              <Button variant="secondary">Try the Invoice Generator</Button>
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
