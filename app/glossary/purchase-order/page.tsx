import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Purchase Orders: What Freelancers Need to Know — InvoiceFlow',
  description:
    'What is a purchase order? Learn how POs work, the difference between a purchase order and an invoice, when freelancers encounter POs, how to include PO numbers on your invoices, and how PO-based invoicing gets you paid faster. Free guide for Australian freelancers.',
  keywords: [
    'what is a purchase order',
    'purchase order vs invoice',
    'purchase order meaning',
    'PO number on invoice',
    'purchase order template australia',
    'do freelancers need purchase orders',
    'purchase order process',
    'PO number meaning',
  ],
  alternates: { canonical: '/glossary/purchase-order' },
  openGraph: {
    title: 'Purchase Orders: What Freelancers Need to Know — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about purchase orders — what they are, how the PO process works, PO vs invoice, and how to include PO numbers on your invoices to get paid faster.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/purchase-order',
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
    { '@type': 'ListItem', position: 3, name: 'Purchase Order', item: `${BASE_URL}/glossary/purchase-order` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a purchase order and how does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A purchase order (PO) is a formal document issued by a buyer (your client) to authorise a purchase of goods or services from a seller (you, the freelancer). It specifies what is being purchased, the agreed price, quantity, delivery date, and payment terms. The PO acts as the client\'s internal approval to spend money — once issued, it confirms that the budget has been approved and the purchase is authorised. As a freelancer, you receive the PO, review it, accept it by beginning work, and then reference the PO number on your invoice when billing for the completed work.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a purchase order and an invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A purchase order is created by the buyer (your client) before work begins, authorising the purchase and confirming the budget. An invoice is created by the seller (you, the freelancer) after work is completed, requesting payment for the goods or services delivered. The PO says "we agree to buy this from you at this price," while the invoice says "here is what I delivered, please pay me." In the procurement cycle, the PO comes first, then the work happens, then the invoice is sent referencing the PO number. Both documents should match in terms of description, quantities, and amounts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do freelancers need to use purchase orders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freelancers do not create purchase orders — the client does. However, you will encounter POs when working with corporate clients, government agencies, large enterprises, and agencies that have formal procurement processes. Government agencies in Australia almost always require a PO before any work can begin or any invoice can be processed. If a client tells you "I need to raise a PO first," it means they need internal budget approval before you can start. You should understand how POs work, be patient during the approval process, and always reference the PO number on your invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a PO number and should I include it on my invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A PO number is a unique identifier assigned to a purchase order by the client\'s procurement or finance system. Yes, you should always include the PO number on your invoice when one has been provided. Most corporate and government accounts payable departments cannot process an invoice without a matching PO number. Without it, your invoice will be rejected or delayed — it is the single most common cause of payment delays when working with large organisations. Place the PO number prominently on your invoice, typically in a reference field near your invoice number.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a purchase order a legally binding contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A purchase order can become a legally binding contract once it is accepted by the seller. When the buyer issues a PO and the seller accepts it (either formally in writing or implicitly by beginning work), it forms a binding agreement between both parties. The PO contains the essential elements of a contract: an offer (the PO itself), acceptance (the seller agreeing to fulfil it), consideration (the agreed price), and intention to create legal relations. However, if you already have a signed contract or statement of work with the client, the PO typically serves as an administrative tool for budget tracking rather than replacing the underlying contract.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-purchase-order', label: '1. What Is a Purchase Order?' },
  { id: 'po-vs-invoice-vs-quote', label: '2. Purchase Order vs Invoice vs Quote' },
  { id: 'purchase-order-process', label: '3. The Purchase Order Process' },
  { id: 'when-freelancers-encounter-pos', label: '4. When Freelancers Encounter Purchase Orders' },
  { id: 'po-numbers-on-invoices', label: '5. PO Numbers on Your Invoices' },
  { id: 'po-and-getting-paid', label: '6. Purchase Orders and Getting Paid Faster' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices with PO number reference fields and automatic formatting.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-numbering-system',
    name: 'Invoice Numbering System',
    description: 'Set up a professional numbering system that keeps PO references organised across clients.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-contract-generator',
    name: 'Contract Generator',
    description: 'Generate freelance contracts that reference PO processes and payment terms upfront.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9.75m3 0h3m-13.5-3v9a2.25 2.25 0 002.25 2.25h13.5a2.25 2.25 0 002.25-2.25v-9m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v3" />
      </svg>
    ),
  },
  {
    href: '/tools/project-brief-generator',
    name: 'Project Brief Generator',
    description: 'Create detailed project briefs that align with client PO requirements and scope.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'The complete guide to creating professional, compliant invoices that reference POs correctly.',
  },
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays, including PO-based invoicing best practices.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'When to register, how to charge GST, and how GST interacts with purchase order amounts.',
  },
];

export default function PurchaseOrderGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-indigo-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Purchase Order</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Procurement &amp; Documents
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Purchase Orders{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A purchase order is the client&apos;s formal document authorising a purchase from you. If you work with corporates or government agencies, understanding POs is the difference between getting paid on time and chasing invoices for months. Here&apos;s everything you need to know.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Practical &amp; Accurate</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">PO</span>
              <div>
                <p className="text-white font-medium text-sm">Created by the Buyer</p>
                <p className="text-gray-400 text-sm">The client creates the PO, not you &mdash; it authorises them to spend money with you</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">3-Way</span>
              <div>
                <p className="text-white font-medium text-sm">3-Way Match</p>
                <p className="text-gray-400 text-sm">PO + invoice + delivery confirmation = payment approved and processed</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">#1</span>
              <div>
                <p className="text-white font-medium text-sm">#1 Cause of Payment Delays</p>
                <p className="text-gray-400 text-sm">Missing PO numbers on invoices is the top reason corporate payments get held up</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">72%</span>
              <div>
                <p className="text-white font-medium text-sm">Enterprises Require PO Numbers</p>
                <p className="text-gray-400 text-sm">Nearly three-quarters of large enterprises require a PO number on every invoice</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-indigo-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is a Purchase Order? */}
        <section id="what-is-purchase-order">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Purchase Order?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A <strong className="text-white">purchase order (PO)</strong> is a formal, written document issued by a <strong className="text-white">buyer</strong> (your client) to a <strong className="text-white">seller</strong> (you, the freelancer) that authorises a purchase of goods or services at an agreed price. It is the client&apos;s way of saying: &ldquo;We have budget approval, here is exactly what we want, and we commit to paying this amount once the work is delivered.&rdquo;
            </p>
            <p className="text-gray-300 leading-relaxed">
              The critical distinction to understand is that <strong className="text-white">the client creates the purchase order, not you</strong>. As a freelancer, you do not generate POs for your own work. The PO originates from the buyer&apos;s side &mdash; typically from their procurement, finance, or operations team. When you receive a PO, it means the client has gone through their internal approval process, secured budget, and formally authorised the expenditure.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Purchase orders exist primarily for <strong className="text-white">internal budget control, audit trails, and accountability</strong>. In larger organisations, a manager cannot simply send you money &mdash; the expenditure needs to be tracked, approved, and reconciled against departmental budgets. The PO is the mechanism that makes this happen. It creates a paper trail from the initial request all the way through to payment.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For many freelancers, especially those who work primarily with small businesses or individual clients, purchase orders are unfamiliar. But if you&apos;re scaling your freelance business into corporate work &mdash; where the real money is &mdash; understanding POs is non-negotiable. They are the language of corporate procurement.
            </p>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Key Fields on a Purchase Order</h3>
              <div className="space-y-3">
                {[
                  { num: '1', field: 'PO Number', desc: 'A unique identifier assigned by the client\'s system — this is the number you will reference on your invoice' },
                  { num: '2', field: 'Description of Goods/Services', desc: 'What the client is purchasing from you — e.g., "Website redesign project — 5 pages, responsive design"' },
                  { num: '3', field: 'Quantity', desc: 'The amount of each item or service — e.g., 1 project, 40 hours, 5 deliverables' },
                  { num: '4', field: 'Agreed Price', desc: 'The unit price and total price (excl. and incl. GST) — this must match your quote or contract' },
                  { num: '5', field: 'Delivery Date', desc: 'When the client expects the work to be completed — may align with milestones in your contract' },
                  { num: '6', field: 'Payment Terms', desc: 'When the client will pay after receiving your invoice — e.g., Net 30, Net 45, Net 60' },
                  { num: '7', field: 'Billing Address', desc: 'The address and contact details for the client\'s accounts payable department' },
                  { num: '8', field: 'Vendor Details', desc: 'Your business name, ABN, and contact information as the approved supplier' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-3">
                    <span className="w-7 h-7 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-400 flex-shrink-0 mt-0.5">{item.num}</span>
                    <div>
                      <span className="text-white font-medium text-sm">{item.field}</span>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-6 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-violet-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <div>
                  <h4 className="text-violet-400 font-semibold mb-1">Key Point</h4>
                  <p className="text-sm text-gray-300">
                    A purchase order is <strong className="text-white">not</strong> your job to create. If a client asks you to &ldquo;raise a PO,&rdquo; they are asking you to provide the information they need (a quote or proposal) so <em>they</em> can create the PO in their system. The PO is their internal approval mechanism. Your quote is the input; their PO is the output.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Purchase Order vs Invoice vs Quote */}
        <section id="po-vs-invoice-vs-quote">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Purchase Order vs Invoice vs Quote</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              One of the most common sources of confusion for freelancers is the relationship between quotes, purchase orders, invoices, and receipts. These four documents form a <strong className="text-white">procurement chain</strong> that follows a specific order. Understanding this chain is essential for working with corporate clients &mdash; and for getting paid without delays.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">The Document Flow</h3>
            <p className="text-gray-300 leading-relaxed">
              The standard procurement cycle follows this sequence: <strong className="text-white">Quote &rarr; Purchase Order &rarr; Invoice &rarr; Receipt</strong>. Each document builds on the previous one, creating a complete audit trail from the initial agreement to the final payment.
            </p>

            <div className="grid grid-cols-4 gap-3 my-6">
              <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold mx-auto mb-2">1</div>
                <p className="text-indigo-400 font-bold text-sm">Quote</p>
                <p className="text-gray-500 text-xs mt-1">You send to client</p>
              </div>
              <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold mx-auto mb-2">2</div>
                <p className="text-violet-400 font-bold text-sm">PO</p>
                <p className="text-gray-500 text-xs mt-1">Client sends to you</p>
              </div>
              <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold mx-auto mb-2">3</div>
                <p className="text-indigo-400 font-bold text-sm">Invoice</p>
                <p className="text-gray-500 text-xs mt-1">You send to client</p>
              </div>
              <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold mx-auto mb-2">4</div>
                <p className="text-violet-400 font-bold text-sm">Receipt</p>
                <p className="text-gray-500 text-xs mt-1">You send after payment</p>
              </div>
            </div>

            {/* Comprehensive Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-5 py-4">Feature</th>
                      <th className="text-left text-sm font-medium text-indigo-400 px-5 py-4">Purchase Order</th>
                      <th className="text-left text-sm font-medium text-violet-400 px-5 py-4">Invoice</th>
                      <th className="text-left text-sm font-medium text-indigo-300 px-5 py-4">Quote</th>
                      <th className="text-left text-sm font-medium text-violet-300 px-5 py-4">Receipt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-3 text-gray-300 text-sm font-medium">Created By</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Buyer (client)</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Seller (freelancer)</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Seller (freelancer)</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Seller (freelancer)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-3 text-gray-300 text-sm font-medium">Purpose</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Authorise a purchase</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Request payment</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Propose pricing</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Confirm payment received</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-3 text-gray-300 text-sm font-medium">When Issued</td>
                      <td className="px-5 py-3 text-indigo-400 font-medium text-sm">Before work begins</td>
                      <td className="px-5 py-3 text-violet-400 font-medium text-sm">After work is done</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Before PO is raised</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">After payment received</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-3 text-gray-300 text-sm font-medium">Legally Binding?</td>
                      <td className="px-5 py-3 text-indigo-400 text-sm font-medium">Yes, once accepted</td>
                      <td className="px-5 py-3 text-violet-400 text-sm font-medium">No (it&apos;s a payment request)</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">No (it&apos;s an offer)</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">No (it&apos;s a record)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-3 text-gray-300 text-sm font-medium">Key Information</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">PO number, items, price, terms</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Invoice number, PO ref, amount due</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Scope, pricing, validity period</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Payment amount, date, method</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-3 text-gray-300 text-sm font-medium">Triggers Next Step</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Work begins</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Payment processing</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">PO creation (or rejection)</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Transaction closed</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-3 text-gray-300 text-sm font-medium">Direction</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Client &rarr; Freelancer</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Freelancer &rarr; Client</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Freelancer &rarr; Client</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Freelancer &rarr; Client</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-3 text-gray-300 text-sm font-medium">Common in Freelancing?</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Corporate &amp; government only</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Always &mdash; every client</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Often, especially for projects</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Sometimes, on request</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">The Key Difference</p>
              <p className="text-gray-400 text-sm">
                A <strong className="text-gray-200">quote</strong> is your proposal. A <strong className="text-gray-200">purchase order</strong> is the client&apos;s acceptance and budget authorisation. An <strong className="text-gray-200">invoice</strong> is your payment request after delivery. A <strong className="text-gray-200">receipt</strong> confirms the transaction is complete. Getting this order wrong &mdash; like invoicing before receiving a PO &mdash; is a guaranteed way to delay payment when working with corporate clients.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: The Purchase Order Process */}
        <section id="purchase-order-process">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Purchase Order Process</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The purchase order process &mdash; sometimes called the <strong className="text-white">procurement cycle</strong> or <strong className="text-white">procure-to-pay (P2P) process</strong> &mdash; is a step-by-step workflow that large organisations follow to purchase goods and services. As a freelancer, you only see part of this process from the outside, but understanding the full cycle helps you anticipate delays, respond to requests appropriately, and invoice correctly.
            </p>

            <div className="space-y-4 mt-6">
              {[
                {
                  step: '1',
                  title: 'Client Identifies the Need',
                  desc: 'A department manager or project lead inside your client\'s organisation decides they need to hire a freelancer for a project. They may reach out to you directly, or you may have responded to a brief. At this stage, nothing is official yet — it is an internal decision to explore a purchase.',
                  color: 'indigo',
                },
                {
                  step: '2',
                  title: 'Client Creates PO with Budget Approval',
                  desc: 'The manager submits a purchase requisition through their internal system. This goes through an approval chain — the manager\'s boss, the finance team, or a procurement officer must sign off on the budget. Only once approved does it become an official purchase order with a unique PO number.',
                  color: 'violet',
                },
                {
                  step: '3',
                  title: 'PO Sent to Freelancer',
                  desc: 'You receive the PO via email, a procurement portal, or through your client contact. It will contain the PO number, description of work, agreed price, delivery timeline, and payment terms. This is your official green light to proceed.',
                  color: 'indigo',
                },
                {
                  step: '4',
                  title: 'Freelancer Reviews and Accepts',
                  desc: 'You review the PO to ensure it matches your quote or agreed scope. Check the description, amounts (including GST), payment terms, and delivery dates. If everything matches, you accept — either formally in writing or by beginning work. If something is wrong, flag it immediately before starting.',
                  color: 'violet',
                },
                {
                  step: '5',
                  title: 'Work Is Performed',
                  desc: 'You complete the project according to the scope described in the PO. Keep records of milestones, deliverables, and any communications about scope changes. If the scope changes during the project, the client may need to issue a revised PO or a new supplementary PO.',
                  color: 'indigo',
                },
                {
                  step: '6',
                  title: 'Freelancer Sends Invoice Referencing PO Number',
                  desc: 'Upon completion (or at agreed milestones), you send your invoice. The invoice must reference the PO number prominently. The description, quantities, and amounts on your invoice should match the PO as closely as possible. Discrepancies will trigger a query and delay payment.',
                  color: 'violet',
                },
                {
                  step: '7',
                  title: 'Client Performs 3-Way Matching',
                  desc: 'The client\'s accounts payable team matches three documents: the original PO (what they agreed to buy), the invoice (what you\'re billing), and the delivery confirmation (proof the work was received). If all three match, the invoice is approved for payment. This is called 3-way matching and is the standard in corporate procurement.',
                  color: 'indigo',
                },
                {
                  step: '8',
                  title: 'Payment Processed',
                  desc: 'Once the 3-way match is confirmed, the invoice enters the client\'s payment cycle. Depending on the agreed payment terms (Net 30, Net 45, Net 60), payment is released on the next scheduled payment run. Money hits your bank account, and the PO is closed out in their system.',
                  color: 'violet',
                },
              ].map((item) => (
                <div key={item.step} className={`rounded-xl bg-gray-800/40 border border-${item.color}-500/20 p-5`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center text-sm font-bold text-${item.color}-400 flex-shrink-0`}>
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
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
                  <h4 className="text-amber-400 font-semibold mb-1">Timing Warning</h4>
                  <p className="text-sm text-gray-300">
                    Steps 1 and 2 can take anywhere from <strong className="text-white">a few days to several weeks</strong>, depending on the size of the organisation and the amount involved. Government agencies and large enterprises often have multi-layered approval chains. If a client says &ldquo;I need to raise a PO first,&rdquo; be patient &mdash; this is normal corporate process, not a stalling tactic. Do not start work until you have the PO number in hand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: When Freelancers Encounter Purchase Orders */}
        <section id="when-freelancers-encounter-pos">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">When Freelancers Encounter Purchase Orders</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Not every client uses purchase orders. Whether you encounter them depends entirely on <strong className="text-white">who you work with</strong>. Understanding which clients require POs &mdash; and which never will &mdash; helps you prepare appropriately and avoid surprises in the sales process.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Clients Who Almost Always Require POs</h3>
            <div className="space-y-4 mt-4">
              {[
                {
                  title: 'Government Agencies (Federal, State, Local)',
                  desc: 'Government procurement is highly regulated. In Australia, all three levels of government — federal, state (e.g., Victorian Government, NSW Government), and local councils — require purchase orders for virtually every expenditure. This is mandated by public financial management frameworks to ensure accountability of taxpayer funds. No PO means no payment, full stop.',
                  icon: (
                    <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                  ),
                },
                {
                  title: 'Large Enterprises & Corporates',
                  desc: 'Companies with 200+ employees almost always have formal procurement processes. Think banks, insurance companies, telcos, mining companies, and the Big 4 consultancies. These organisations use ERP systems like SAP, Oracle, or Microsoft Dynamics that require a PO before any vendor invoice can be processed. If you freelance for any ASX-listed company, expect to deal with POs.',
                  icon: (
                    <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                  ),
                },
                {
                  title: 'Agencies & Consultancies',
                  desc: 'If you subcontract through a creative agency, marketing firm, or IT consultancy, they will likely issue you a PO for each engagement. Agencies need POs to track costs against client budgets and maintain project-level profitability reporting. The PO will typically reference the agency\'s internal project code and the end client name.',
                  icon: (
                    <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Universities & Education Institutions',
                  desc: 'Public and private universities, TAFEs, and large schools use procurement systems that require POs. Academic departments, IT, and marketing teams all operate under purchase order policies. Budget cycles in education can also create additional delays around EOFY and semester boundaries.',
                  icon: (
                    <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/40 border border-gray-700/40 p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Clients Who Typically Don&apos;t Use POs</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-semibold text-sm mb-2">Small Businesses &amp; Sole Traders</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A local cafe owner hiring you to build their website will not issue a PO. Small businesses operate informally &mdash; a verbal agreement or email confirmation is their &ldquo;purchase order.&rdquo; No procurement system, no approval chain.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-semibold text-sm mb-2">Direct Consumers</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Individual clients (e.g., someone hiring you for a portrait, personal branding, or private tutoring) will never use a PO. The concept does not exist in consumer transactions.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-semibold text-sm mb-2">Early-Stage Startups</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Most startups under 50 employees do not have formal procurement processes. A Slack message saying &ldquo;let&apos;s do it&rdquo; is often the closest thing to a PO you will get. This changes as they scale and bring in finance teams.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-semibold text-sm mb-2">Freelancer-to-Freelancer</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you subcontract work to another freelancer, you are unlikely to issue a PO unless your own client requires one for the downstream relationship. Most freelancer collaborations operate on a quote-and-invoice basis.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-6 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <div>
                  <h4 className="text-indigo-400 font-semibold mb-1">Tips for Navigating Corporate Procurement</h4>
                  <div className="space-y-2 mt-2">
                    {[
                      'Ask about the PO process early in the engagement — don\'t assume your contact knows how their own procurement works.',
                      'Get the accounts payable email address directly. Your main contact and their AP team are often in completely different departments.',
                      'Never start work without a PO number if the client uses POs. Verbal promises do not count — their AP team will reject your invoice.',
                      'Budget for longer payment terms. Corporate clients on Net 30 or Net 45 terms may actually take 45-60 days. Factor this into your cash flow planning.',
                      'Keep a record of every PO number, the associated client, project, and amount. You will need this when following up on unpaid invoices.',
                    ].map((tip, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-sm text-gray-300">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: PO Numbers on Your Invoices */}
        <section id="po-numbers-on-invoices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">PO Numbers on Your Invoices</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              If there is one practical takeaway from this entire guide, it is this: <strong className="text-white">always include the PO number on your invoice when one has been provided</strong>. This single detail is the most common reason freelancer invoices get rejected, bounced back, or delayed by corporate accounts payable teams.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Why the PO Number Matters</h3>
            <p className="text-gray-300 leading-relaxed">
              Corporate accounts payable departments process hundreds or thousands of invoices per month. They do not know who you are or what project you worked on. The PO number is the <strong className="text-white">key that links your invoice to the pre-approved budget</strong> in their system. Without it, the AP clerk cannot match your invoice to an authorised purchase, and they will either reject it outright or park it in a &ldquo;pending review&rdquo; queue that can take weeks to resolve.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Where to Put the PO Number on Your Invoice</h3>
              <p className="text-gray-400 text-sm mb-4">
                Place the PO number in a <strong className="text-gray-200">prominent reference field</strong> near the top of your invoice, alongside your invoice number. It should be immediately visible without scrolling. Here is a sample layout:
              </p>
              <div className="rounded-lg bg-gray-900/70 p-6 font-mono text-xs text-gray-400 space-y-3 overflow-x-auto">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-indigo-400 font-bold text-sm">TAX INVOICE</p>
                    <p className="text-gray-500 mt-1">Your Business Name</p>
                    <p className="text-gray-500">ABN: 12 345 678 901</p>
                    <p className="text-gray-500">your@email.com</p>
                  </div>
                  <div className="text-right">
                    <p>Invoice No: <span className="text-gray-200">INV-0087</span></p>
                    <p>Date: <span className="text-gray-200">1 March 2026</span></p>
                    <p className="text-indigo-400 font-bold">PO Number: <span className="text-white">PO-2026-04532</span></p>
                    <p>Due: <span className="text-gray-200">31 March 2026</span></p>
                  </div>
                </div>
                <hr className="border-gray-700" />
                <div>
                  <p className="text-gray-500 mb-1">Bill To:</p>
                  <p className="text-gray-200">Client Corporation Pty Ltd</p>
                  <p className="text-gray-500">ABN: 98 765 432 109</p>
                  <p className="text-gray-500">Accounts Payable, Level 12, 100 Collins St, Melbourne VIC 3000</p>
                </div>
                <hr className="border-gray-700" />
                <div className="grid grid-cols-4 gap-2 text-right">
                  <p className="text-left text-gray-500">Description</p>
                  <p className="text-gray-500">Qty</p>
                  <p className="text-gray-500">Rate</p>
                  <p className="text-gray-500">Amount</p>
                  <p className="text-left text-gray-200">Website redesign &mdash; 5 pages</p>
                  <p className="text-gray-300">1</p>
                  <p className="text-gray-300">$5,000.00</p>
                  <p className="text-gray-300">$5,000.00</p>
                </div>
                <hr className="border-gray-700" />
                <div className="text-right space-y-1">
                  <p>Subtotal: <span className="text-gray-200">$5,000.00</span></p>
                  <p>GST (10%): <span className="text-gray-200">$500.00</span></p>
                  <p className="text-gray-200 font-bold">Total: <span className="text-indigo-400">$5,500.00</span></p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6">What Happens If You Forget the PO Number</h3>
            <div className="space-y-3 mt-4">
              {[
                { bold: 'Invoice rejected by AP', text: ' — Most corporate AP systems will automatically reject invoices without a matching PO number. Your invoice goes back to you, and the payment clock resets to zero.' },
                { bold: 'Weeks of back-and-forth', text: ' — Even if the AP team does not reject it outright, they will email you (or your contact) asking for the PO number. This can take days. Meanwhile, your invoice sits unpaid.' },
                { bold: 'Your contact has to chase internally', text: ' — Your client contact is now spending their time chasing their own procurement team on your behalf. This is not a good look and can damage the relationship.' },
                { bold: 'Payment delayed by 30-60+ days', text: ' — Between the rejection, the back-and-forth, the re-submission, and the re-entry into the payment cycle, a missing PO number can easily add 30-60 days to your payment timeline.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <span className="text-gray-300 text-sm"><strong className="text-white">{item.bold}</strong>{item.text}</span>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Pro Tips for Managing Multiple POs</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-indigo-400 font-medium mb-2">One PO per Project</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Large clients may issue <strong className="text-gray-200">separate POs for each project</strong>. If you are working on three projects for the same client, you may have three different PO numbers. Make sure each invoice references the correct PO for that specific project. Mixing them up will cause matching failures.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-violet-400 font-medium mb-2">Blanket POs</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Some clients issue a <strong className="text-gray-200">blanket PO</strong> (also called a standing PO) that covers multiple invoices over a period &mdash; e.g., &ldquo;PO for up to $20,000 of design services over 6 months.&rdquo; You reference the same PO number on each invoice until the total is reached.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-indigo-400 font-medium mb-2">Track PO Balances</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For blanket POs, keep a running total of how much you have invoiced against the PO. If the PO is for $20,000 and you have invoiced $18,000, you only have $2,000 remaining. Exceeding the PO value will cause your invoice to be rejected &mdash; the client will need to issue a new PO for the overage.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-violet-400 font-medium mb-2">Keep a PO Register</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Maintain a simple spreadsheet or log of all PO numbers you receive: PO number, client, project, PO value, date received, invoices raised against it, and remaining balance. This becomes invaluable when you are working with multiple corporate clients simultaneously.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">InvoiceFlow Tip</p>
              <p className="text-gray-400 text-sm">
                InvoiceFlow includes a dedicated <strong className="text-gray-200">PO reference field</strong> on every invoice template. When you enter a PO number, it is displayed prominently in the header alongside your invoice number, exactly where AP teams expect to find it. You can also filter your invoice history by PO number to track how much you have billed against each purchase order.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Purchase Orders and Getting Paid Faster */}
        <section id="po-and-getting-paid">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Purchase Orders and Getting Paid Faster</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Far from being bureaucratic obstacles, purchase orders can actually be your <strong className="text-white">best friend when it comes to getting paid on time</strong>. A PO represents pre-approved budget &mdash; the money is already set aside. When used correctly, PO-based invoicing eliminates the most common causes of payment delays and puts you at the front of the payment queue.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Why PO-Based Invoicing Is Faster</h3>
            <div className="space-y-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-indigo-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Pre-Approved Budget = No Approval Bottleneck</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Without a PO, your invoice may need to go through a <strong className="text-gray-200">post-hoc approval process</strong> &mdash; a manager has to find budget, get sign-off, and then tell AP to process it. With a PO, the budget was approved <em>before</em> you started work. When your invoice arrives referencing the PO, AP can process it immediately without waiting for any additional approvals.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-indigo-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Clean 3-Way Match = No Disputes</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When your invoice matches the PO in terms of description, quantity, and amount, the 3-way matching process is <strong className="text-gray-200">automatic and instant</strong>. AP systems can match documents electronically in seconds. Discrepancies &mdash; even minor ones like a different project description or a rounding error &mdash; trigger manual review, which adds days or weeks to the process.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-indigo-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Fewer Queries = Faster Processing</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every time AP has a question about your invoice, the payment clock stops. Common queries include: &ldquo;What is this for?&rdquo;, &ldquo;Who approved this?&rdquo;, &ldquo;Which project does this relate to?&rdquo; A PO number <strong className="text-gray-200">answers all of these questions instantly</strong>, because the PO itself contains the project details, the approval chain, and the budget allocation. Zero queries means zero delays.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">You Have Leverage</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A PO is essentially a <strong className="text-gray-200">written commitment to pay</strong>. If a client is slow to pay after you have delivered against a valid PO, you have documentation that the purchase was authorised at an agreed price. This gives you significantly more leverage in payment follow-ups compared to invoicing without a PO, where the client could claim the work was never formally approved.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Your PO-Based Invoicing Checklist</h3>
            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-6 mt-4">
              <div className="space-y-3">
                {[
                  'Confirm the PO number before starting work — never rely on "the PO is being raised" as a green light',
                  'Match your invoice description exactly to the PO description — copy it word-for-word if possible',
                  'Ensure the invoice amount does not exceed the PO amount (request a revised PO if scope changed)',
                  'Include the PO number in the invoice header, not buried in the notes or footer',
                  'Send your invoice to the AP email address listed on the PO, not just your main contact',
                  'Keep a copy of every PO you receive — you may need it to chase payments months later',
                  'For blanket POs, track cumulative invoicing to avoid exceeding the PO value',
                  'If the client changes scope, request an updated PO before invoicing the additional work',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">InvoiceFlow + Purchase Orders</p>
              <p className="text-gray-400 text-sm">
                InvoiceFlow is built for freelancers who work with corporate clients. Every invoice includes a <strong className="text-gray-200">dedicated PO reference field</strong>, automatic PO number validation, and a PO tracking dashboard that shows your remaining balance against each purchase order. When it is time to invoice, InvoiceFlow pulls the PO details directly into your invoice &mdash; matching descriptions and amounts automatically to ensure a clean 3-way match every time.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage POs, invoices, and contracts.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-indigo-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-indigo-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-indigo-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on invoicing, payments, and working with corporate clients.</p>
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-indigo-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Invoice with PO Numbers &mdash; Get Paid Faster
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow includes dedicated PO reference fields, automatic matching, and a PO tracking dashboard so your invoices sail through corporate AP without a hitch. Start free.
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
