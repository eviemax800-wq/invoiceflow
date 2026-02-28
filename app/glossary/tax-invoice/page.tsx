import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Tax Invoice: What It Is & ATO Requirements for Freelancers — InvoiceFlow',
  description:
    'What is a tax invoice in Australia? Learn the 7 ATO requirements, when you need one, the difference between tax invoices and regular invoices, and how to create compliant invoices. Free guide for 2025-26.',
  keywords: [
    'what is a tax invoice',
    'tax invoice requirements australia',
    'tax invoice vs invoice',
    'tax invoice template',
    'ATO tax invoice requirements',
    'tax invoice example australia',
    'do I need a tax invoice',
    'tax invoice GST',
    'tax invoice sole trader',
    'tax invoice freelancer australia',
  ],
  alternates: { canonical: '/glossary/tax-invoice' },
  openGraph: {
    title: 'Tax Invoice: What It Is & ATO Requirements for Freelancers — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about tax invoices — ATO requirements, when you need one, and how to create compliant invoices.',
  },
};

const BASE_URL = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: `${BASE_URL}/glossary` },
    { '@type': 'ListItem', position: 3, name: 'Tax Invoice', item: `${BASE_URL}/glossary/tax-invoice` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a tax invoice and a regular invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tax invoice is a specific type of invoice required under Australian tax law when the supplier is registered for GST. It must include the words "Tax Invoice", the supplier\'s ABN, GST amount, and total price including GST. A regular invoice doesn\'t need to show GST separately. Only GST-registered businesses can (and must) issue tax invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to issue tax invoices if I am not registered for GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. If you are not registered for GST (i.e., your turnover is below $75,000 and you haven\'t voluntarily registered), you do not issue tax invoices. You issue regular invoices instead. Your invoices should NOT include GST as a line item, and should NOT be labelled "Tax Invoice". You still need to include your ABN.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the ATO requirements for a tax invoice under $1,000?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For tax invoices under $1,000 (excluding GST), the ATO requires: (1) the words "Tax Invoice", (2) the supplier\'s identity (name or business name), (3) the supplier\'s ABN, (4) the date of issue, (5) a brief description of goods or services, (6) the GST amount (or a statement that total price includes GST), and (7) the total price including GST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What additional details are required on tax invoices over $1,000?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For tax invoices of $1,000 or more (excluding GST), in addition to the standard requirements, you must also include: the buyer\'s identity or ABN, the quantity of each item supplied, and the price of each item with GST shown separately for each line (or a statement that each price includes GST).',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I need to keep tax invoices in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO requires you to keep tax invoices and other business records for 5 years from when you prepared or obtained them, or 5 years from when you completed the transactions or acts they relate to — whichever is later. Records can be kept electronically, but they must be readable and accessible.',
      },
    },
  ],
};

const sections = [
  { id: 'what-is-tax-invoice', title: 'What Is a Tax Invoice?' },
  { id: 'tax-vs-regular', title: 'Tax Invoice vs Regular Invoice' },
  { id: 'ato-requirements', title: 'ATO Requirements' },
  { id: 'when-needed', title: 'When Do You Need One?' },
  { id: 'creating-tax-invoices', title: 'Creating Tax Invoices' },
  { id: 'common-mistakes', title: 'Common Mistakes to Avoid' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    title: 'Invoice Generator',
    description: 'Create ATO-compliant tax invoices with GST calculated automatically.',
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    title: 'GST Calculator',
    description: 'Calculate GST-inclusive and exclusive amounts for your tax invoices.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-invoice-compliance-checker',
    title: 'Tax Invoice Compliance Checker',
    description: 'Verify your invoices meet all ATO requirements before sending.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    href: '/tools/credit-note-generator',
    title: 'Credit Note Generator',
    description: 'Create adjustment documents when you need to correct a tax invoice.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/gst-for-freelancers',
    title: 'GST for Freelancers',
    description: 'When to register, how to charge GST, and how to lodge your BAS.',
  },
  {
    href: '/guides/invoicing-101',
    title: 'Invoicing 101',
    description: 'A complete guide to creating professional, compliant invoices.',
  },
  {
    href: '/glossary/gst',
    title: 'GST Definition',
    description: 'Understanding the Goods and Services Tax and its impact on your invoicing.',
  },
];

export default function TaxInvoiceGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Tax Invoice</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Invoicing &amp; Documents
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Tax Invoice{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            The document that proves GST was charged, allows your clients to claim GST credits, and keeps you ATO-compliant. Here&apos;s everything you need to know.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>2025-26 FY</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-blue-500/5 border border-blue-500/20 p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <ul className="space-y-3">
            {[
              { bold: 'A tax invoice is a GST document', text: ' — it proves that GST was included in the price and allows the buyer to claim GST credits from the ATO.' },
              { bold: 'Only GST-registered businesses issue them', text: ' — if your turnover is under $75K and you haven\'t registered for GST, you issue regular invoices instead.' },
              { bold: '7 mandatory elements', text: ' — the words "Tax Invoice", your ABN, date, description, GST amount, total price, and your identity.' },
              { bold: 'Must be kept for 5 years', text: ' — the ATO requires you to retain all tax invoices (sent and received) for at least 5 years.' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300"><strong className="text-white">{item.bold}</strong>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-8">
          <h2 className="text-lg font-bold text-white mb-4">Table of Contents</h2>
          <nav className="grid sm:grid-cols-2 gap-2">
            {sections.map((section, i) => (
              <a key={section.id} href={`#${section.id}`} className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-700/40 transition-colors group">
                <span className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sm font-medium text-blue-400 flex-shrink-0">{i + 1}</span>
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm">{section.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-16">

        {/* Section 1 */}
        <section id="what-is-tax-invoice">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-400">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Tax Invoice?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A <strong className="text-white">tax invoice</strong> is a document issued by a GST-registered supplier that shows the <strong className="text-white">Goods and Services Tax (GST)</strong> included in the price of a sale. It&apos;s not just any invoice &mdash; it&apos;s a specific legal document defined under the <em>A New Tax System (Goods and Services Tax) Act 1999</em>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The primary purpose of a tax invoice is to allow the <strong className="text-white">buyer to claim GST credits</strong> (also called input tax credits) when they lodge their Business Activity Statement (BAS). Without a valid tax invoice, a business cannot claim back the GST it paid on purchases &mdash; which is why your clients will always ask for one.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers and sole traders, the tax invoice is the cornerstone of your financial relationship with clients and the ATO. It simultaneously serves as a <strong className="text-white">payment request</strong>, a <strong className="text-white">legal record</strong> of the transaction, and a <strong className="text-white">GST compliance document</strong>.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="tax-vs-regular">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-400">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax Invoice vs Regular Invoice</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              This is one of the most common points of confusion for Australian freelancers. The key distinction is simple: <strong className="text-white">tax invoices include GST details, regular invoices don&apos;t</strong>.
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Side-by-Side Comparison</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-900/50 p-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Tax Invoice</h4>
                  <ul className="text-sm text-gray-400 space-y-1.5">
                    <li>&bull; Issued by <strong className="text-gray-200">GST-registered</strong> businesses</li>
                    <li>&bull; Must say &ldquo;Tax Invoice&rdquo; at the top</li>
                    <li>&bull; Shows GST as a separate amount</li>
                    <li>&bull; Allows buyer to claim GST credits</li>
                    <li>&bull; Required for sales over $82.50 (inc. GST)</li>
                    <li>&bull; 7 mandatory ATO elements</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4">
                  <h4 className="text-sm font-semibold text-indigo-400 mb-2">Regular Invoice</h4>
                  <ul className="text-sm text-gray-400 space-y-1.5">
                    <li>&bull; Issued by <strong className="text-gray-200">non-GST-registered</strong> businesses</li>
                    <li>&bull; Labelled &ldquo;Invoice&rdquo; (never &ldquo;Tax Invoice&rdquo;)</li>
                    <li>&bull; Does NOT include GST</li>
                    <li>&bull; Buyer CANNOT claim GST credits</li>
                    <li>&bull; Used when turnover is under $75K</li>
                    <li>&bull; Fewer mandatory elements (but ABN still required)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-6 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div>
                  <h4 className="text-amber-400 font-semibold mb-1">Critical Rule</h4>
                  <p className="text-sm text-gray-300">
                    If you are <strong className="text-white">NOT registered for GST</strong>, you must <strong className="text-white">never</strong> label your invoices as &ldquo;Tax Invoice&rdquo; or include GST as a line item. Doing so is misleading and can create tax complications for both you and your clients. Just use &ldquo;Invoice&rdquo;.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="ato-requirements">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-400">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">ATO Requirements</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO has specific requirements for what must appear on a tax invoice. The requirements differ based on the <strong className="text-white">value of the sale</strong>.
            </p>
            <div className="rounded-xl bg-blue-500/5 border border-blue-500/20 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Tax Invoices Under $1,000 (excl. GST)</h3>
              <div className="space-y-3">
                {[
                  { num: '1', text: 'The words "Tax Invoice" — prominently displayed (usually at the top)' },
                  { num: '2', text: 'The supplier\'s identity — your business name or legal name' },
                  { num: '3', text: 'The supplier\'s ABN — your 11-digit Australian Business Number' },
                  { num: '4', text: 'The date of issue — when the invoice was created' },
                  { num: '5', text: 'A brief description — what goods or services were provided' },
                  { num: '6', text: 'The GST amount — either shown separately OR a statement that the total includes GST' },
                  { num: '7', text: 'The total price — the amount payable including GST' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400 flex-shrink-0 mt-0.5">{item.num}</span>
                    <p className="text-sm text-gray-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Additional Requirements for $1,000+ (excl. GST)</h3>
              <div className="space-y-3">
                {[
                  'The buyer\'s identity or ABN',
                  'The quantity of each item supplied',
                  'The price of each item, with GST shown for each line item individually',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="when-needed">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-400">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">When Do You Need One?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              If you are <strong className="text-white">registered for GST</strong> and a client requests a tax invoice, you are <strong className="text-white">legally required to provide one within 28 days</strong>. For taxable sales over $82.50 (including GST), you must provide a tax invoice even if the client doesn&apos;t ask.
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">You Must Issue a Tax Invoice When:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'You are GST-registered and make a taxable sale',
                  'The sale is over $82.50 (including GST)',
                  'A client requests one (within 28 days)',
                  'You are claiming GST credits on your purchases',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">You Do NOT Issue a Tax Invoice When:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'You are NOT registered for GST',
                  'The sale is GST-free (e.g., exports, medical)',
                  'The sale is input-taxed (e.g., financial supplies)',
                  'You are selling to a non-business consumer under $82.50',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="creating-tax-invoices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-400">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Creating Tax Invoices</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Creating ATO-compliant tax invoices doesn&apos;t have to be complicated. Here&apos;s a practical approach:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Anatomy of a Compliant Tax Invoice</h3>
              <div className="space-y-4 text-sm">
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-blue-400">
                  <p className="text-blue-400 font-semibold mb-1">Header Area</p>
                  <p className="text-gray-400">&ldquo;Tax Invoice&rdquo; title + your business name + your ABN (formatted with spaces: XX XXX XXX XXX) + your contact details</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-indigo-400">
                  <p className="text-indigo-400 font-semibold mb-1">Invoice Details</p>
                  <p className="text-gray-400">Invoice number + date of issue + payment terms + client name/ABN (if over $1,000)</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-violet-400">
                  <p className="text-violet-400 font-semibold mb-1">Line Items</p>
                  <p className="text-gray-400">Description of each service/product + quantity + unit price + GST per item (for $1,000+) or subtotal + GST total</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-purple-400">
                  <p className="text-purple-400 font-semibold mb-1">Totals</p>
                  <p className="text-gray-400">Subtotal (excl. GST) + GST amount + Total (incl. GST) OR statement &ldquo;Total price includes GST&rdquo;</p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Pro tip:</strong> Use invoicing software like InvoiceFlow that automatically handles the &ldquo;Tax Invoice&rdquo; label, GST calculations, ABN display, and all ATO formatting requirements. This eliminates the risk of missing required elements and ensures every invoice you send is fully compliant.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section id="common-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-400">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Mistakes to Avoid</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <div className="space-y-4">
              {[
                { title: 'Labelling invoices as "Tax Invoice" when not GST-registered', desc: 'This is the #1 mistake freelancers make. If you\'re not registered for GST, your invoices must be labelled "Invoice" — never "Tax Invoice". Using the wrong label creates confusion for clients and can trigger ATO scrutiny.' },
                { title: 'Charging GST without being registered', desc: 'You cannot charge GST unless you are GST-registered. If you add a 10% GST line to your invoice without registration, you\'re collecting money you have no legal right to collect. Your clients won\'t be able to claim it, and the ATO may penalise you.' },
                { title: 'Missing your ABN', desc: 'Your ABN must appear on every invoice — tax or regular. Without it, your client is legally required to withhold 47% of your payment. Make sure it\'s clearly visible, not hidden in fine print.' },
                { title: 'Not keeping copies for 5 years', desc: 'The ATO requires you to keep all tax invoices — both issued and received — for at least 5 years. Digital copies are fine, but they must be readable. Use cloud storage or invoicing software that automatically archives everything.' },
                { title: 'Incorrect GST calculations', desc: 'GST is exactly 1/11th of the GST-inclusive price. A $1,100 invoice includes $100 GST (not $110). Double-check your math or use software that calculates it automatically.' },
              ].map((mistake, i) => (
                <div key={i} className="rounded-xl bg-gray-800/40 border border-gray-700/40 p-5">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div>
                      <h4 className="text-white font-medium mb-1">{mistake.title}</h4>
                      <p className="text-sm text-gray-400">{mistake.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to create and verify your tax invoices</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/40 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">{tool.icon}</div>
              <h3 className="text-white font-medium mb-2 group-hover:text-blue-400 transition-colors">{tool.title}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Use tool
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Resources</h2>
        <p className="text-gray-400 text-center mb-8">Dive deeper into invoicing and GST compliance</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-indigo-500/40 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-indigo-400 transition-colors">{guide.title}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-indigo-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {(faqSchema.mainEntity as Array<{ '@type': string; name: string; acceptedAnswer: { '@type': string; text: string } }>).map((faq, i) => (
            <details key={i} className="group rounded-xl bg-gray-800/40 border border-gray-700/40">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-blue-400 transition-colors">
                {faq.name}
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </summary>
              <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">{faq.acceptedAnswer.text}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16"><EmailCapture /></section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Create ATO-Compliant Tax Invoices in Seconds</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">InvoiceFlow automatically handles the &ldquo;Tax Invoice&rdquo; label, GST calculations, ABN display, and every ATO requirement. Start free.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup"><Button>Start Free &mdash; No Card Required</Button></Link>
          <Link href="/tools/invoice-generator"><Button variant="secondary">Try Invoice Generator</Button></Link>
        </div>
      </section>
    </div>
  );
}
