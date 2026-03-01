import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Remittance Advice: What It Is, How It Works & When You Need One — InvoiceFlow',
  description:
    'What is remittance advice? Learn how it differs from a receipt, what to include, when Australian freelancers encounter them, and how to handle common payment matching issues. Free guide for 2025-26.',
  keywords: [
    'remittance advice meaning',
    'what is a remittance advice',
    'remittance advice vs receipt',
    'remittance advice template australia',
    'remittance advice in accounting',
    'payment remittance slip',
    'remittance advice example',
    'remittance advice definition',
    'remittance slip template',
    'payment advice document',
    'remittance advice freelancer',
    'remittance advice EFT payment',
  ],
  alternates: { canonical: '/glossary/remittance-advice' },
  openGraph: {
    title: 'Remittance Advice: What It Is, How It Works & When You Need One — InvoiceFlow',
    description:
      'Everything Australian freelancers and small businesses need to know about remittance advice — what it is, how it differs from a receipt, what to include, and how to match payments to invoices.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/remittance-advice',
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
    { '@type': 'ListItem', position: 3, name: 'Remittance Advice', item: `${BASE_URL}/glossary/remittance-advice` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a remittance advice and a receipt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A remittance advice is issued by the payer (the person or business making the payment) to inform the payee that a payment has been sent and which invoices it covers. A receipt is issued by the payee (the person or business receiving the payment) to confirm that payment has been received. They serve opposite ends of the same transaction: the remittance advice says "I have paid you," while the receipt says "I confirm I received your payment." In practice, freelancers receive remittance advice from their clients and issue receipts back to those clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is remittance advice legally required in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, remittance advice is not legally required in Australia. Unlike tax invoices (which are mandatory for GST-registered businesses under the GST Act), remittance advice is a voluntary document. However, it is considered professional best practice, especially in B2B transactions, government procurement, and corporate payments. Many large organisations and all levels of Australian government send remittance advice automatically as part of their standard accounts payable processes. While not legally mandated, failing to send one when paying multiple invoices in a single transfer can cause confusion and reconciliation delays for the recipient.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do freelancers need to send remittance advice to clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freelancers typically do not need to send remittance advice to their clients, because the freelancer is usually the one receiving payment, not making it. Remittance advice is sent by the payer to the payee. However, if you subcontract work to other freelancers or suppliers and pay them, it is good practice to send remittance advice with your payment so they can match it to their invoices. This is especially important when paying multiple invoices in a single bank transfer or when making partial payments.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I match a remittance advice to my invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To match remittance advice to your invoices, follow these steps: First, check the invoice number(s) listed on the remittance advice against your invoice records. Second, verify that the payment amount matches the total of the referenced invoices (accounting for any deductions like early payment discounts or withholding tax). Third, confirm the payment has actually arrived in your bank account by checking the transaction reference number. Fourth, if the amount does not match, review for GST rounding differences, payment processing fees, or legitimate deductions noted on the remittance. Finally, mark the matching invoices as paid in your records only after confirming the bank deposit matches the remittance amount.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if I receive payment without remittance advice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you receive a bank deposit without accompanying remittance advice, do not immediately mark any invoice as paid. Instead, check the bank reference or description for clues (invoice numbers, client names, or project references). If you can identify the client but not the specific invoice, contact them and request remittance details. Use a professional template: "Hi [Name], I received a payment of $[amount] on [date] with reference [ref]. Could you please confirm which invoice(s) this payment relates to?" If you cannot identify the payer at all, check for transposed digits or partial payments that might match outstanding invoices. Never assume which invoice a mystery payment covers — always confirm before updating your records.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-remittance-advice', label: '1. What Is Remittance Advice?' },
  { id: 'remittance-vs-other-documents', label: '2. Remittance Advice vs Other Documents' },
  { id: 'what-to-include', label: '3. What to Include in Remittance Advice' },
  { id: 'when-freelancers-encounter', label: '4. When Freelancers Encounter Remittance Advice' },
  { id: 'common-problems', label: '5. Common Problems & Solutions' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional tax invoices that your clients can reference on their remittance advice.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/payment-receipt-generator',
    name: 'Payment Receipt Generator',
    description: 'Generate receipts to confirm payment received — the counterpart to remittance advice.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-numbering-system-generator',
    name: 'Invoice Numbering Generator',
    description: 'Set up a consistent numbering system so remittance advice always references the right invoice.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST on payments to verify remittance amounts match your invoiced totals.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'The complete beginner guide to creating invoices, setting terms, and managing the payment lifecycle.',
  },
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays and improve cash flow for Australian freelancers.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'When to register, how to charge GST, how to lodge your BAS, and how GST affects payment matching.',
  },
];

export default function RemittanceAdviceGlossaryPage() {
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
            <span className="text-white">Remittance Advice</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Payments &amp; Reconciliation
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Remittance Advice{' '}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              Complete Guide
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A remittance advice is a document sent by a payer to inform the payee that a payment has been made &mdash; and which invoices it covers. It&apos;s not a receipt, not an invoice, and not legally required in Australia. But it&apos;s one of the most useful documents in B2B payments. Here&apos;s everything you need to know.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>AU-Focused 2025-26</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">PAY</span>
              <div>
                <p className="text-white font-medium text-sm">Issued by the PAYER</p>
                <p className="text-gray-400 text-sm">Not the payee &mdash; the person or business making the payment sends it to the recipient</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">OPT</span>
              <div>
                <p className="text-white font-medium text-sm">Not Legally Required in AU</p>
                <p className="text-gray-400 text-sm">Voluntary document &mdash; no ATO or legislative mandate, but professional best practice</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">B2B</span>
              <div>
                <p className="text-white font-medium text-sm">Common in B2B &amp; Government</p>
                <p className="text-gray-400 text-sm">Standard practice in corporate accounts payable and all levels of Australian government procurement</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">TIP</span>
              <div>
                <p className="text-white font-medium text-sm">Always Match Before Marking Paid</p>
                <p className="text-gray-400 text-sm">Never mark an invoice as paid until the remittance advice matches the bank deposit</p>
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

        {/* Section 1: What Is Remittance Advice? */}
        <section id="what-is-remittance-advice">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Remittance Advice?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A <strong className="text-white">remittance advice</strong> (sometimes called a <strong className="text-white">remittance slip</strong>, <strong className="text-white">payment advice</strong>, or <strong className="text-white">payment notification</strong>) is a document sent by the <strong className="text-white">payer</strong> (the person or business making the payment) to the <strong className="text-white">payee</strong> (the person or business receiving the payment) to inform them that a payment has been made. It details which invoices the payment covers, how much was paid against each invoice, and how the payment was made.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Think of it as a <strong className="text-white">cover note for a payment</strong>. When a client pays you $5,500 via bank transfer and that transfer covers three separate invoices, the remittance advice is the document that explains the breakdown &mdash; $2,200 for Invoice #042, $1,650 for Invoice #043, and $1,650 for Invoice #045. Without it, you would see a $5,500 deposit in your bank account with no clear way to know which invoices it relates to.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The critical distinction is <strong className="text-white">who issues it</strong>. A remittance advice is always issued by the <strong className="text-white">buyer or client</strong> &mdash; the party making the payment. This is the opposite of a receipt, which is issued by the seller (the party receiving the payment). This often confuses freelancers who are accustomed to thinking about documents from the seller&apos;s perspective. When you receive a remittance advice, it means your client has paid you and is telling you what the payment covers.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Remittance advice is <strong className="text-white">not legally required in Australia</strong>. There is no provision in the Goods and Services Tax Act 1999, the Income Tax Assessment Act 1997, or any other Australian legislation that mandates the issuance of remittance advice. Unlike tax invoices (which are legally required for GST-registered businesses), remittance advice is entirely voluntary. However, it is considered <strong className="text-white">professional best practice</strong> and is standard procedure in B2B transactions, corporate accounts payable departments, and government procurement processes at federal, state, and local government levels throughout Australia.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For Australian freelancers, remittance advice most commonly arrives as an <strong className="text-white">email or PDF attachment</strong> from a client&apos;s accounts payable system, often generated automatically when the client processes a payment run. Large organisations like government departments, universities, hospitals, banks, and listed companies almost always send remittance advice as standard practice. Smaller clients and individual business owners are less likely to send one, which is where payment matching problems tend to arise.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The term &ldquo;remittance&rdquo; itself comes from the Latin <em>remittere</em>, meaning &ldquo;to send back.&rdquo; In financial context, it refers to the act of sending money to someone. So &ldquo;remittance advice&rdquo; literally means &ldquo;advice (notification) that a remittance (payment) has been sent.&rdquo; In Australia, the terms &ldquo;remittance advice,&rdquo; &ldquo;payment advice,&rdquo; and &ldquo;remittance slip&rdquo; are used interchangeably, though &ldquo;remittance advice&rdquo; is the most common in formal business communication.
            </p>
            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Key Point</p>
              <p className="text-gray-400 text-sm">
                A remittance advice is <strong className="text-gray-200">issued by the payer, not the payee</strong>. As a freelancer, you typically <strong className="text-gray-200">receive</strong> remittance advice from clients (because they are paying you). You would only <strong className="text-gray-200">send</strong> remittance advice when you are the one making a payment &mdash; for example, paying a subcontractor or supplier. Never confuse it with a receipt (which you issue) or an invoice (which you also issue).
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Remittance Advice vs Other Documents */}
        <section id="remittance-vs-other-documents">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Remittance Advice vs Other Documents</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Remittance advice is frequently confused with receipts, payment confirmations, and other financial documents. While they are all related to the payment process, each serves a distinct purpose and is issued by a different party at a different stage. Understanding these differences is essential for accurate bookkeeping and clean reconciliation.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 whitespace-nowrap">Document</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 whitespace-nowrap">Issued By</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 whitespace-nowrap">When Issued</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 whitespace-nowrap">Purpose</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 whitespace-nowrap">Legally Required?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-violet-400 text-sm font-medium whitespace-nowrap">Remittance Advice</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Payer (buyer/client)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">When payment is sent</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Notify payee which invoices are being paid</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">No</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-purple-400 text-sm font-medium whitespace-nowrap">Receipt</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Payee (seller/freelancer)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">After payment is received</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Confirm payment has been received</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">No (recommended)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-blue-400 text-sm font-medium whitespace-nowrap">Invoice</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Payee (seller/freelancer)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">After work delivered</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Request payment for goods/services</td>
                      <td className="px-6 py-3 text-violet-400 text-sm font-medium">Yes (for GST)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium whitespace-nowrap">Credit Note</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Payee (seller/freelancer)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">When adjusting a previous invoice</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Reduce or cancel amount on a prior invoice</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Yes (for GST adj.)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-teal-400 text-sm font-medium whitespace-nowrap">Statement of Account</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Payee (seller/freelancer)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Monthly or on demand</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Summarise all activity on a client&apos;s account</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">No</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-amber-400 text-sm font-medium whitespace-nowrap">Payment Confirmation</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Bank or payment processor</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">When transaction processes</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Confirm the transaction was processed</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">No</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-cyan-400 text-sm font-medium whitespace-nowrap">Purchase Order</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Payer (buyer/client)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Before work begins</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Authorise a purchase or engagement</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">No (but common)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-rose-400 text-sm font-medium whitespace-nowrap">Proof of Payment</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Payer or bank</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">After payment is made</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Prove that a payment was actually made</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-6 mt-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-violet-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <div>
                  <h4 className="text-violet-400 font-semibold mb-1">Remittance Advice vs Receipt &mdash; The Key Difference</h4>
                  <p className="text-sm text-gray-300">
                    This is the most common point of confusion. A <strong className="text-white">remittance advice</strong> says &ldquo;I have paid you&rdquo; and is sent by the client. A <strong className="text-white">receipt</strong> says &ldquo;I confirm I received your payment&rdquo; and is sent by you (the freelancer). They are <strong className="text-white">complementary documents on opposite sides of the same transaction</strong>. The client sends remittance advice when they pay; you send a receipt when you confirm receipt. In an ideal workflow, you receive the remittance advice, verify the bank deposit matches, then issue a receipt back to the client.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">The Payment Document Lifecycle</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Understanding where remittance advice fits in the overall payment workflow helps clarify its role. Here is the typical sequence of documents in a B2B freelancer engagement:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xs font-bold text-violet-400 flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <span className="text-white font-medium">Quote / Proposal</span>
                    <span className="text-gray-400"> &mdash; You send the client an estimate of costs before work begins (optional but recommended).</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xs font-bold text-violet-400 flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <span className="text-white font-medium">Purchase Order</span>
                    <span className="text-gray-400"> &mdash; Client sends a PO to formally authorise the work (common in corporate and government).</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xs font-bold text-violet-400 flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <span className="text-white font-medium">Tax Invoice</span>
                    <span className="text-gray-400"> &mdash; You send the client an invoice for completed work (legally required if GST-registered).</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-7 h-7 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xs font-bold text-purple-400 flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <span className="text-white font-medium">Remittance Advice</span>
                    <span className="text-gray-400"> &mdash; Client sends remittance advice when they process the payment, detailing which invoices are covered.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xs font-bold text-violet-400 flex-shrink-0 mt-0.5">5</span>
                  <div>
                    <span className="text-white font-medium">Payment Receipt</span>
                    <span className="text-gray-400"> &mdash; You send a receipt confirming the payment was received (completes the audit trail).</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              In practice, many freelancers skip the receipt step (it is not legally required), and many smaller clients skip the remittance advice step (also not legally required). The result is often a payment appearing in your bank account with no clear documentation of what it covers &mdash; which is exactly why remittance advice is so valuable when you do receive it, and why following up for it when you don&apos;t is good practice.
            </p>
          </div>
        </section>

        {/* Section 3: What to Include in Remittance Advice */}
        <section id="what-to-include">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What to Include in Remittance Advice</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              While there is no legally mandated format for remittance advice in Australia (unlike tax invoices), a well-structured remittance advice should contain enough information for the recipient to <strong className="text-white">immediately identify the payment, match it to the correct invoices, and reconcile their records</strong>. Here are the eight essential fields every remittance advice should include:
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Essential Fields</h3>
              <div className="space-y-4 text-sm">
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-violet-400">
                  <p className="text-violet-400 font-semibold mb-1">1. Payer Business Name &amp; ABN</p>
                  <p className="text-gray-400">The full legal name and 11-digit Australian Business Number of the business making the payment. This identifies who the payment is from and allows the recipient to match it to the correct client in their records. For government agencies, this includes the department or agency name and ABN.</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-purple-400">
                  <p className="text-purple-400 font-semibold mb-1">2. Date of Payment</p>
                  <p className="text-gray-400">The date the payment was processed or initiated. This is important because EFT transfers can take 1-2 business days to clear, so the payment date on the remittance may differ from the date the funds appear in your bank account. Knowing the payment date helps you identify the correct bank transaction.</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-violet-300">
                  <p className="text-violet-300 font-semibold mb-1">3. Invoice Number(s) Being Paid</p>
                  <p className="text-gray-400">The specific invoice numbers that the payment covers. This is the most critical field for reconciliation. Without it, the recipient has to guess which invoices the payment relates to &mdash; a common source of errors and disputes.</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-purple-300">
                  <p className="text-purple-300 font-semibold mb-1">4. Payment Amount Per Invoice</p>
                  <p className="text-gray-400">The amount being paid against each individual invoice. This is especially important when a single payment covers multiple invoices, or when only a partial payment is being made against an invoice. Each line should show the invoice number and the corresponding payment amount (GST-inclusive).</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-violet-500">
                  <p className="text-violet-500 font-semibold mb-1">5. Total Payment Amount</p>
                  <p className="text-gray-400">The total sum being paid in this transaction. This should equal the sum of all individual invoice payments listed above. The recipient can use this to quickly verify the remittance against their bank deposit.</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-purple-500">
                  <p className="text-purple-500 font-semibold mb-1">6. Payment Method</p>
                  <p className="text-gray-400">How the payment was made &mdash; electronic funds transfer (EFT), credit card, BPAY, cheque, direct debit, PayPal, or other method. This helps the recipient look for the payment in the right place (bank account, payment processor, etc.).</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-violet-600">
                  <p className="text-violet-400 font-semibold mb-1">7. Reference / Transaction Number</p>
                  <p className="text-gray-400">The bank reference number, transaction ID, or payment reference used for the transfer. For EFT payments, this is the description or reference the payer entered when making the bank transfer. The recipient can search their bank statement for this reference to locate the deposit.</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-purple-600">
                  <p className="text-purple-400 font-semibold mb-1">8. Any Deductions or Adjustments</p>
                  <p className="text-gray-400">If the payer has deducted any amounts from the total (e.g., early payment discounts, withholding tax, agreed deductions, or disputed amounts), these should be itemised on the remittance advice with a clear explanation. This prevents the recipient from thinking the payment is short and chasing a non-existent shortfall.</p>
                </div>
              </div>
            </div>

            {/* Template Layout */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Remittance Advice Template Layout</h3>
              <div className="rounded-lg bg-gray-900/70 p-6 font-mono text-xs text-gray-400 space-y-3 overflow-x-auto">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-violet-400 font-bold text-sm">REMITTANCE ADVICE</p>
                    <p className="text-gray-500 mt-1">Acme Digital Pty Ltd</p>
                    <p className="text-gray-500">ABN: 98 765 432 109</p>
                    <p className="text-gray-500">accounts@acmedigital.com.au</p>
                  </div>
                  <div className="text-right">
                    <p>Payment Date: <span className="text-gray-200">28 February 2026</span></p>
                    <p>Payment Ref: <span className="text-gray-200">EFT-2026-0284</span></p>
                    <p>Method: <span className="text-gray-200">Electronic Funds Transfer</span></p>
                  </div>
                </div>
                <hr className="border-gray-700" />
                <div>
                  <p className="text-gray-500 mb-1">Paid To:</p>
                  <p className="text-gray-200">Sarah Chen &mdash; Freelance Design</p>
                  <p className="text-gray-500">ABN: 12 345 678 901</p>
                  <p className="text-gray-500">BSB: 063-000 | Acc: 1234 5678</p>
                </div>
                <hr className="border-gray-700" />
                <div className="grid grid-cols-4 gap-2 text-right">
                  <p className="text-left text-gray-500">Invoice #</p>
                  <p className="text-left text-gray-500">Description</p>
                  <p className="text-gray-500">Invoice Total</p>
                  <p className="text-gray-500">Amount Paid</p>

                  <p className="text-left text-gray-300">INV-0042</p>
                  <p className="text-left text-gray-300">Website redesign &mdash; Phase 1</p>
                  <p className="text-gray-400">$3,300.00</p>
                  <p className="text-violet-400">$3,300.00</p>

                  <p className="text-left text-gray-300">INV-0045</p>
                  <p className="text-left text-gray-300">Logo design &amp; brand assets</p>
                  <p className="text-gray-400">$1,650.00</p>
                  <p className="text-violet-400">$1,650.00</p>

                  <p className="text-left text-gray-300">INV-0047</p>
                  <p className="text-left text-gray-300">SEO audit &amp; report</p>
                  <p className="text-gray-400">$1,100.00</p>
                  <p className="text-violet-400">$550.00</p>
                </div>
                <hr className="border-gray-700" />
                <div className="text-right space-y-1">
                  <p>Subtotal paid against invoices: <span className="text-gray-200">$5,500.00</span></p>
                  <p>Less: Early payment discount (2%): <span className="text-rose-400">-$0.00</span></p>
                  <p>Less: Withholding / adjustments: <span className="text-rose-400">-$0.00</span></p>
                  <p className="text-gray-200 font-bold">Total Payment: <span className="text-violet-400">$5,500.00</span></p>
                </div>
                <hr className="border-gray-700" />
                <div className="text-gray-500 text-xs">
                  <p>Note: INV-0047 partially paid ($550.00 of $1,100.00). Remaining balance: $550.00</p>
                  <p className="mt-1">Bank reference: &ldquo;ACME-FEB-BATCH3&rdquo; | Processed via: CBA Business Banking</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Formatting Best Practice</p>
              <p className="text-gray-400 text-sm">
                When creating your own remittance advice (for paying subcontractors or suppliers), keep it <strong className="text-gray-200">clear, scannable, and unambiguous</strong>. Use the exact invoice numbers as they appear on the original invoices. Right-align monetary columns. Clearly distinguish between the invoice total and the amount being paid against each invoice (they may differ for partial payments). Include the bank reference so the recipient can match the deposit in their bank statement. If you are making any deductions, explain them &mdash; do not simply reduce the total without explanation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: When Freelancers Encounter Remittance Advice */}
        <section id="when-freelancers-encounter">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">When Freelancers Encounter Remittance Advice</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              As an Australian freelancer, you will encounter remittance advice in several common scenarios. Understanding each one helps you know what to expect, how to process the document, and how to handle situations where remittance advice is missing.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: 'Receiving Remittance from Corporate Clients',
                  desc: 'This is the most common scenario for freelancers. When you invoice a corporate client — whether a private company, a listed enterprise, or any business with a dedicated accounts payable department — they typically send remittance advice automatically when processing your payment. Their accounting software (Xero, MYOB, SAP, Oracle) generates the remittance as part of the payment run. You will usually receive it as a PDF email attachment, often from an automated "noreply" or "accounts payable" email address. The remittance arrives either slightly before or at the same time as the bank deposit. For freelancers doing regular work for corporate clients, this is the smoothest payment experience — the remittance tells you exactly what is being paid and for which invoices.',
                  icon: (
                    <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                    </svg>
                  ),
                },
                {
                  title: 'Receiving Remittance from Government Agencies',
                  desc: 'Government agencies at all levels — federal (e.g., Services Australia, Department of Defence), state (e.g., Victorian Department of Education, NSW Health), and local councils — almost always send remittance advice as standard procedure. Government procurement systems are highly structured, and remittance is generated automatically as part of their accounts payable process. Government remittances are typically very detailed, including purchase order numbers, contract references, and ABN verification. If you do contract work for any level of government in Australia, expect to receive remittance advice for every payment without exception. These remittances often arrive several days before the actual bank deposit clears.',
                  icon: (
                    <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                  ),
                },
                {
                  title: 'Sending Remittance to Subcontractors',
                  desc: 'When you hire subcontractors or freelancers to help with project work and pay them, you become the payer — and it is your responsibility to send remittance advice. This is especially important when you are paying a subcontractor for multiple invoices in a single bank transfer, when you are making a partial payment against a larger invoice, or when you are deducting any amounts (e.g., if the subcontractor has a voluntary PAYG withholding agreement). A simple email stating "I have paid $X against your invoice(s) #Y, #Z via bank transfer with reference ABC" is sufficient, though a formal PDF remittance is more professional.',
                  icon: (
                    <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Partial Payments with Remittance',
                  desc: 'Partial payments are where remittance advice provides the most value. When a client pays part of an invoice — for example, paying $2,200 of a $4,400 invoice as a progress payment — the remittance advice clarifies exactly how much is being paid against which invoice and what the remaining balance is. Without remittance advice on a partial payment, you are left guessing: is this a partial payment on Invoice #042, or is it full payment on a different, smaller invoice? Remittance advice eliminates this ambiguity and allows you to update your records accurately, marking the invoice as partially paid rather than fully paid or leaving it entirely open.',
                  icon: (
                    <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
              ].map((scenario, i) => (
                <div key={i} className="rounded-xl bg-gray-800/40 border border-gray-700/40 p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {scenario.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{scenario.title}</h4>
                      <p className="text-sm text-gray-400">{scenario.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-6 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div>
                  <h4 className="text-amber-400 font-semibold mb-1">Golden Rule</h4>
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Always match the remittance advice to the actual bank deposit before marking any invoice as paid.</strong> A remittance advice tells you the client <em>intends</em> to pay &mdash; it does not confirm the money has arrived. Check your bank account, verify the deposit amount matches the remittance total, and only then update your records. Payments can fail, be reversed, or be delayed. The remittance is the notification; the bank deposit is the confirmation.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Matching Checklist</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Use this checklist every time you receive a remittance advice to ensure accurate reconciliation:
              </p>
              <div className="space-y-3">
                {[
                  'Verify the payer name on the remittance matches the client in your records',
                  'Check that the invoice number(s) match your issued invoices',
                  'Confirm the payment amount per invoice matches what you invoiced (or note any deductions)',
                  'Verify the total payment amount is the sum of individual line items',
                  'Check your bank account for a deposit matching the total payment amount',
                  'Match the bank reference number to the reference on the remittance advice',
                  'If all checks pass, mark the invoice(s) as paid in your records',
                  'File the remittance advice with the corresponding invoice(s) for your records',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Common Problems & Solutions */}
        <section id="common-problems">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Problems &amp; Solutions</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Even with remittance advice, payment matching is not always straightforward. Here are the six most common problems Australian freelancers encounter with remittance advice &mdash; and the steps to resolve each one.
            </p>

            <div className="space-y-6 mt-6">
              {/* Problem 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xs font-bold text-violet-400">1</span>
                  <h4 className="text-white font-semibold">Payment Doesn&apos;t Match Invoice Amount</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  You invoiced $3,300.00 (incl. GST) but the remittance shows a payment of $3,267.00. The most common causes are:
                </p>
                <div className="space-y-2 mb-3">
                  {[
                    'Early payment discount applied (e.g., 2% for payment within 7 days) — check your payment terms',
                    'GST rounding differences — the client\'s accounting system may round GST differently',
                    'Withholding tax deducted — some contracts include voluntary PAYG withholding arrangements',
                    'Bank or processing fees deducted by the client\'s bank from international transfers',
                    'Disputed amount — the client may have deducted a contested charge without prior agreement',
                  ].map((cause, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-violet-400 mt-0.5">&bull;</span>
                      <span>{cause}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg bg-violet-500/5 border border-violet-500/20 p-3">
                  <p className="text-sm text-violet-300"><strong>Resolution:</strong> Check the remittance advice for itemised deductions. If the deduction is legitimate (agreed discount, withholding tax), record it accordingly. If unexplained, contact the client&apos;s accounts payable team with: &ldquo;The payment of $3,267.00 is $33.00 less than Invoice #042 ($3,300.00). Could you please advise the reason for the deduction?&rdquo;</p>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xs font-bold text-violet-400">2</span>
                  <h4 className="text-white font-semibold">Missing Remittance for EFT Payments</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  You receive a bank deposit but no remittance advice email. This is extremely common with smaller clients, sole traders, and individuals who pay via manual bank transfer without accounting software that auto-generates remittance.
                </p>
                <div className="rounded-lg bg-violet-500/5 border border-violet-500/20 p-3 mb-3">
                  <p className="text-sm text-violet-300"><strong>Resolution:</strong> Send a polite follow-up email requesting remittance details. Use this template:</p>
                </div>
                <div className="rounded-lg bg-gray-900/70 p-4 font-mono text-xs text-gray-400">
                  <p className="text-gray-500">Subject: Payment received &mdash; remittance details request</p>
                  <p className="mt-2">Hi [Client Name],</p>
                  <p className="mt-2">Thank you &mdash; I received a payment of <span className="text-violet-400">$[amount]</span> on <span className="text-violet-400">[date]</span></p>
                  <p>with bank reference <span className="text-violet-400">[reference]</span>.</p>
                  <p className="mt-2">Could you please confirm which invoice(s) this payment</p>
                  <p>relates to so I can update my records?</p>
                  <p className="mt-2">Thanks,</p>
                  <p>[Your Name]</p>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xs font-bold text-violet-400">3</span>
                  <h4 className="text-white font-semibold">Remittance References Wrong Invoice Number</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  The remittance advice lists an invoice number that does not exist in your records, or references an old invoice number format you no longer use. This happens when the client&apos;s accounts payable team has a data entry error, when they reference their own internal purchase order number instead of your invoice number, or when invoices were re-issued with new numbers and the client is referencing the original.
                </p>
                <div className="rounded-lg bg-violet-500/5 border border-violet-500/20 p-3">
                  <p className="text-sm text-violet-300"><strong>Resolution:</strong> Cross-reference the payment amount and date against your outstanding invoices to identify the most likely match. Check whether the reference might be a PO number rather than an invoice number. If unclear, contact the client: &ldquo;Your remittance references invoice [wrong number]. Could you please confirm if this payment is for my Invoice #[suspected correct number] dated [date]?&rdquo;</p>
                </div>
              </div>

              {/* Problem 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xs font-bold text-violet-400">4</span>
                  <h4 className="text-white font-semibold">Partial Payment with No Remittance</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  A deposit arrives that is less than any single outstanding invoice, and no remittance advice accompanies it. You have three outstanding invoices ($2,200, $1,650, and $1,100) and receive a deposit of $1,100. Is it full payment of the $1,100 invoice? Or a partial payment on the $2,200 invoice? Or even a deposit/advance against future work?
                </p>
                <div className="rounded-lg bg-violet-500/5 border border-violet-500/20 p-3">
                  <p className="text-sm text-violet-300"><strong>Resolution:</strong> Do not guess. Do not allocate the payment to any invoice without confirmation. Contact the client immediately and ask which invoice the payment covers. In the meantime, record the deposit as an &ldquo;unallocated payment&rdquo; or &ldquo;unapplied receipt&rdquo; in your accounting records. This prevents you from incorrectly marking an invoice as paid (or partially paid) and distorting your accounts receivable position.</p>
                </div>
              </div>

              {/* Problem 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xs font-bold text-violet-400">5</span>
                  <h4 className="text-white font-semibold">Multiple Invoices Paid in One Lump Sum</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  A client pays $7,150 in a single bank transfer covering invoices #042, #043, #045, and #047. Without remittance advice, you need to manually work out which invoices the payment covers by comparing the total against your outstanding balances. With remittance advice, the breakdown is provided &mdash; but you should still verify that the individual amounts add up to the deposit total.
                </p>
                <div className="rounded-lg bg-violet-500/5 border border-violet-500/20 p-3">
                  <p className="text-sm text-violet-300"><strong>Resolution:</strong> If remittance is provided, verify the line items sum to the total. If no remittance is provided, list your outstanding invoices for that client, check which combination of invoices equals (or is close to) the deposit amount, and confirm with the client before marking invoices as paid. Common scenario: the total matches perfectly, making identification straightforward. Watch for rounding differences of a few cents.</p>
                </div>
              </div>

              {/* Problem 6 */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xs font-bold text-violet-400">6</span>
                  <h4 className="text-white font-semibold">Late Remittance &mdash; Payment Arrives Before the Advice</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  You receive a bank deposit on Monday but the remittance advice email doesn&apos;t arrive until Wednesday. This is common with large organisations that process payment runs in batches &mdash; the bank transfer is initiated immediately, but the remittance advice is generated and emailed as a separate, sometimes delayed, process. The timing gap can range from a few hours to several business days.
                </p>
                <div className="rounded-lg bg-violet-500/5 border border-violet-500/20 p-3">
                  <p className="text-sm text-violet-300"><strong>Resolution:</strong> If you can identify the deposit from the bank reference or client name, make a note in your records: &ldquo;Payment received [date], awaiting remittance for allocation.&rdquo; Do not mark invoices as paid until the remittance arrives and you can confirm the allocation. If the remittance does not arrive within 5 business days, follow up with the client&apos;s accounts payable team. Most corporate accounts payable systems generate remittance automatically, so a missing one may indicate a system error on their end.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Prevention Strategy</p>
              <p className="text-gray-400 text-sm">
                The best way to avoid most remittance advice problems is to <strong className="text-gray-200">include clear payment instructions on every invoice</strong>. Specify your preferred bank reference format (e.g., &ldquo;Please use invoice number as payment reference&rdquo;), remind clients to send remittance advice with payments, and set up your invoicing software to send automatic payment reminders that include your bank details and reference instructions. The easier you make it for clients to pay correctly, the fewer reconciliation headaches you will face.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built to eliminate the manual work of matching payments to invoices. Whether you receive formal remittance advice from corporate clients or mystery deposits from smaller ones, InvoiceFlow makes reconciliation fast, accurate, and stress-free.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-3.06a4.5 4.5 0 00-6.364-6.364L4.5 8.257m0 0l6.364 6.364" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Automatic Payment Matching</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When payments arrive in your connected bank account, InvoiceFlow automatically matches them to outstanding invoices based on amount, client, and reference number. Single-invoice payments are matched instantly. Multi-invoice payments are matched against the most likely combination of outstanding invoices for that client.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Payment Receipt Generation</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Once a payment is matched and confirmed, InvoiceFlow can automatically generate and send a payment receipt back to the client. This completes the document lifecycle &mdash; invoice, remittance advice, receipt &mdash; without you having to create anything manually.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Remittance Tracking Dashboard</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  See all incoming payments at a glance with their remittance status: matched, unmatched, partially matched, or pending remittance. Filter by client, date range, or status. Quickly identify which payments need your attention and which have been fully reconciled.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Reconciliation Dashboard</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A dedicated reconciliation view that shows your book balance vs bank balance, highlights discrepancies, and surfaces unmatched transactions. Drill into any discrepancy to see the details and resolve it in a few clicks &mdash; no spreadsheets required.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Partial Payment Handling</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When a client pays part of an invoice, InvoiceFlow records the partial payment, updates the remaining balance, and tracks the outstanding amount. You can see exactly how much has been paid and how much is still owed on each invoice &mdash; no manual calculations or spreadsheet tracking needed.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Payment History Per Client</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  View the complete payment history for any client &mdash; every invoice issued, every payment received, every remittance matched, and the current outstanding balance. This client-level ledger gives you instant visibility into your relationship with each client and makes it easy to spot late-paying patterns early.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Why It Matters</p>
              <p className="text-gray-400 text-sm">
                Manually matching remittance advice to invoices and bank deposits is time-consuming and error-prone, especially when you have multiple clients paying multiple invoices on different schedules. A single misallocation &mdash; applying a payment to the wrong invoice &mdash; can cascade into incorrect accounts receivable balances, wrong payment reminders being sent, and inaccurate BAS reporting. InvoiceFlow eliminates these risks by <strong className="text-gray-200">automating the matching process and maintaining a verified audit trail</strong> from invoice to remittance to bank deposit to receipt.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Glossary Terms */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-8">
          <h2 className="text-lg font-bold text-white mb-4">Related Glossary Terms</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/glossary/invoice', label: 'Invoice' },
              { href: '/glossary/payment-terms', label: 'Payment Terms' },
              { href: '/glossary/accounts-receivable', label: 'Accounts Receivable' },
              { href: '/glossary/statement-of-account', label: 'Statement of Account' },
              { href: '/glossary/bank-reconciliation', label: 'Bank Reconciliation' },
              { href: '/glossary/credit-note', label: 'Credit Note' },
            ].map((term) => (
              <Link
                key={term.href}
                href={term.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-300 text-sm hover:border-violet-500/40 hover:text-violet-400 transition-all"
              >
                <svg className="w-3.5 h-3.5 text-violet-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                {term.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to create invoices, generate receipts, and manage payment reconciliation.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on invoicing, getting paid, and managing your freelance finances.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-purple-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-purple-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
            Match Payments to Invoices Automatically
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow matches bank deposits to your invoices, tracks partial payments, and generates receipts &mdash; so you never have to chase remittance advice or reconcile manually again. Start free.
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
