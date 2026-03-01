import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Escrow: What It Means for Freelancers & How It Protects Your Payments — InvoiceFlow',
  description:
    'What does escrow mean for freelancers? Learn how escrow works, compare escrow vs deposits, milestones, and retainers, understand platform escrow fees (Upwork, Freelancer.com, Airtasker), and discover when Australian freelancers should use escrow to protect payments. Includes Australian legal framework and tax implications.',
  keywords: [
    'escrow meaning',
    'escrow payment freelancer',
    'escrow account australia',
    'escrow for freelance work',
    'how does escrow work',
    'escrow vs deposit',
    'escrow service australia',
    'escrow for contractors',
  ],
  alternates: { canonical: '/glossary/escrow' },
  openGraph: {
    title: 'Escrow: What It Means for Freelancers & How It Protects Your Payments — InvoiceFlow',
    description:
      'The complete guide to escrow for Australian freelancers. Understand how escrow protects payments, compare escrow to deposits and milestones, learn platform fees, Australian legal requirements, and when to use escrow for freelance projects.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/escrow',
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
    { '@type': 'ListItem', position: 3, name: 'Escrow', item: `${BASE_URL}/glossary/escrow` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does escrow mean in freelancing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In freelancing, escrow means a neutral third party holds the client\'s payment in a secure account while the freelancer completes the agreed work. Once the freelancer delivers and the client approves, the escrow agent releases the funds to the freelancer. This protects both sides: the freelancer knows the money exists and is committed, while the client knows they will not pay until they receive satisfactory work. Platforms like Upwork, Freelancer.com, and Airtasker use built-in escrow systems. For off-platform work, dedicated escrow services or milestone invoicing with deposits serve a similar purpose.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is escrow legally required in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, escrow is not legally required for freelance work in Australia. There is no specific federal escrow legislation governing freelance transactions. Escrow is most commonly mandated in real estate transactions under state Property Law Acts. For freelance and contractor work, escrow is entirely voluntary and agreed upon between the parties. However, if you work through platforms like Upwork or Freelancer.com, their escrow systems are built into the terms of service and are effectively mandatory for platform transactions. If you use a standalone escrow service, it must comply with ASIC regulations regarding the holding of client funds, and trust account requirements under state law apply to the escrow agent.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does escrow cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Escrow costs vary depending on the provider. Standalone escrow services in Australia typically charge 1 to 3 percent of the transaction value, with some charging a flat fee for smaller amounts (for example, $25 to $50 for transactions under $5,000). Freelance platform escrow is bundled into their service fees: Upwork charges freelancers approximately 10 percent (on a sliding scale from 5 to 20 percent based on client billing), Freelancer.com charges around 3 percent (or $3, whichever is greater), and Airtasker charges 15 to 20 percent of the task value. Some escrow services also charge for dispute resolution if the transaction does not complete smoothly. For most freelancers, the cost of escrow is worth the payment security it provides, particularly for high-value projects or new client relationships.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if there is a dispute in escrow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a dispute arises in escrow, the funds remain held by the escrow agent until the dispute is resolved. On freelance platforms, the platform acts as mediator: both parties submit evidence (contracts, communications, deliverables), and the platform makes a determination. Upwork, for example, has a structured dispute resolution process that can take 2 to 4 weeks. For standalone escrow services, the dispute resolution process is outlined in the escrow agreement signed by both parties. Options include mediation, arbitration, or court action. In Australia, small claims tribunals (VCAT in Victoria, NCAT in NSW, QCAT in Queensland) can adjudicate disputes over escrow funds, typically for amounts up to $10,000 to $25,000. To protect yourself, always document deliverables thoroughly, keep written records of all client communications, and ensure the escrow agreement clearly defines acceptance criteria and dispute resolution procedures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should freelancers use escrow for every project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, escrow is not necessary for every project. Escrow adds cost, complexity, and time to the payment process, so it is best reserved for situations where the risk of non-payment or dispute is elevated. Use escrow when working with new clients you have not vetted, for high-value projects exceeding $5,000, for international clients where legal recourse is difficult, for complex deliverables with subjective acceptance criteria, and in dispute-prone industries. For established client relationships with a proven payment track record, milestone invoicing with deposits provides similar protection without the overhead and cost of a formal escrow service. Many experienced freelancers use escrow for the first one or two projects with a new client, then transition to direct invoicing once trust is established.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-escrow', label: '1. What Is Escrow?' },
  { id: 'how-escrow-works-freelancers', label: '2. How Escrow Works for Freelancers' },
  { id: 'escrow-vs-other-payment-methods', label: '3. Escrow vs Other Payment Methods' },
  { id: 'when-to-use-escrow', label: '4. When Freelancers Should Use Escrow' },
  { id: 'escrow-in-australia', label: '5. Escrow in Australia' },
  { id: 'invoiceflow-escrow-alternative', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices with milestone payments, deposit requests, and payment tracking built in.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/payment-terms-calculator',
    name: 'Payment Terms Generator',
    description: 'Model deposit and milestone structures that give you escrow-like protection without platform fees.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    href: '/tools/late-payment-calculator',
    name: 'Late Payment Calculator',
    description: 'Calculate interest and penalties on overdue invoices using Australian GIC and penalty rates.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Set rates that account for platform escrow fees, payment delays, tax, super, and business costs.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment times, automate follow-ups, and stop chasing overdue invoices.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'The complete beginner guide to invoicing in Australia &mdash; what to include, when to send, and how to follow up.',
  },
  {
    href: '/guides/freelancer-contracts',
    name: 'Freelancer Contracts',
    description: 'How to structure freelance contracts with payment protection clauses, escrow terms, and dispute resolution.',
  },
];

export default function EscrowGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-sky-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Escrow</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Cash Flow &amp; Payments
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Escrow:{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
              Payment Protection Explained for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Escrow is a payment arrangement where a neutral third party holds funds until both the freelancer and client fulfil their obligations. This guide explains how escrow works, compares it to deposits, milestones, and retainers, covers platform escrow fees (Upwork, Freelancer.com, Airtasker), and helps Australian freelancers decide when escrow is worth the cost &mdash; and when milestone invoicing is a smarter alternative.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>16 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
              </svg>
              <span>Cash Flow &amp; Payments</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">$26B</span>
              <div>
                <p className="text-white font-medium text-sm">Unpaid Invoices in Australia</p>
                <p className="text-gray-400 text-sm">$26 billion in unpaid invoices outstanding across Australian businesses at any given time</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">1 in 3</span>
              <div>
                <p className="text-white font-medium text-sm">Payment Disputes</p>
                <p className="text-gray-400 text-sm">1 in 3 freelancers experience payment disputes &mdash; escrow eliminates most of these</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">$3.8B</span>
              <div>
                <p className="text-white font-medium text-sm">Upwork Escrow Volume</p>
                <p className="text-gray-400 text-sm">Upwork processes $3.8B+ annually through its escrow system, protecting millions of transactions</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">80%</span>
              <div>
                <p className="text-white font-medium text-sm">Dispute Reduction</p>
                <p className="text-gray-400 text-sm">Escrow reduces payment disputes by up to 80% compared to direct invoicing with no upfront payment</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors text-sm py-1"
              >
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

        {/* Section 1: What Is Escrow? */}
        <section id="what-is-escrow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Escrow?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Escrow is a financial arrangement where a neutral third party holds funds on behalf of two transacting parties until predetermined conditions are met.</strong> In its simplest form: the buyer deposits money into an escrow account, the seller delivers the agreed goods or services, the buyer confirms they are satisfied, and the escrow agent releases the funds to the seller. If the conditions are not met, the funds are returned to the buyer (or held pending dispute resolution).
            </p>
            <p className="text-gray-300 leading-relaxed">
              The word &quot;escrow&quot; comes from the Old French <em className="text-gray-200">escroue</em>, meaning a scroll or deed &mdash; a reference to the physical document that was held by a third party until a transaction was completed. The concept dates back to medieval European commerce, where a trusted intermediary (often a notary or church official) would hold deeds, money, or goods until both sides of a deal fulfilled their obligations. The principle has not changed in 800 years: <strong className="text-white">trust through a neutral intermediary</strong>.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">The Three Key Participants</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">B</span>
                <div>
                  <p className="text-white font-medium text-sm">Buyer (Client)</p>
                  <p className="text-gray-400 text-sm">The party paying for the goods or services. In freelancing, this is your client. They deposit funds into the escrow account, demonstrating their ability and commitment to pay. Their risk is mitigated because they do not release funds until they are satisfied with the deliverable.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">S</span>
                <div>
                  <p className="text-white font-medium text-sm">Seller (Freelancer)</p>
                  <p className="text-gray-400 text-sm">The party providing the goods or services. As a freelancer, you are the seller. Your risk is mitigated because you know the funds exist and are committed &mdash; the client cannot spend the escrowed money on something else or claim they do not have the budget after you complete the work.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">E</span>
                <div>
                  <p className="text-white font-medium text-sm">Escrow Agent (Third Party)</p>
                  <p className="text-gray-400 text-sm">The neutral intermediary who holds the funds. This can be a dedicated escrow service, a freelance platform (Upwork, Freelancer.com, Airtasker), a solicitor&apos;s trust account, or a registered escrow company. The escrow agent is bound by the escrow agreement and must follow the release conditions specified by both parties.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Escrow vs. Direct Payment</h3>
            <p className="text-gray-300 leading-relaxed">
              Without escrow, the fundamental problem in any freelance transaction is <strong className="text-white">trust asymmetry</strong>. If the freelancer requires full payment upfront, the client bears all the risk (what if the work is substandard?). If the client pays only after delivery, the freelancer bears all the risk (what if the client disappears or disputes the quality?). Escrow eliminates this asymmetry by ensuring that <strong className="text-white">neither party is fully exposed</strong>. The money is committed but not released, creating a mutual assurance that both sides have skin in the game.
            </p>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Key Takeaway</p>
              <p className="text-gray-400 text-sm">
                Escrow is not a payment method &mdash; it is a <strong className="text-gray-200">trust mechanism</strong>. It does not change how you get paid (bank transfer, PayPal, etc.); it changes <em className="text-gray-200">when</em> and <em className="text-gray-200">under what conditions</em> the payment is released. For freelancers, escrow is most valuable when working with unknown clients, on high-value projects, or in industries where payment disputes are common.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: How Escrow Works for Freelancers */}
        <section id="how-escrow-works-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How Escrow Works for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Whether you are using a freelance platform or a standalone escrow service, the process follows the same five steps. Understanding each step helps you manage client expectations and protect yourself at every stage:
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">The 5-Step Escrow Process</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">1</span>
                <div>
                  <p className="text-white font-medium text-sm">Agreement &amp; Terms</p>
                  <p className="text-gray-400 text-sm">Both parties agree on the scope of work, deliverables, acceptance criteria, timeline, and total price. This is documented in a contract, platform job posting, or escrow agreement. The terms must be crystal clear &mdash; vague acceptance criteria are the number one cause of escrow disputes. Define exactly what &quot;complete&quot; looks like before any money changes hands.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">2</span>
                <div>
                  <p className="text-white font-medium text-sm">Buyer Deposits Funds</p>
                  <p className="text-gray-400 text-sm">The client deposits the agreed amount into the escrow account. On platforms like Upwork, this happens when the client funds a milestone or fixed-price contract. The funds are verified and held securely by the escrow agent. <strong className="text-gray-200">Do not start work until the escrow is funded.</strong> A funded escrow account is your confirmation that the client has the money and has committed it to your project.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">3</span>
                <div>
                  <p className="text-white font-medium text-sm">Freelancer Delivers Work</p>
                  <p className="text-gray-400 text-sm">You complete the work according to the agreed scope and submit the deliverables. On platforms, you &quot;submit work&quot; through the platform interface. For standalone escrow, you deliver as agreed (email, file transfer, deployment) and notify the escrow agent that delivery is complete. Keep records of everything you deliver &mdash; screenshots, files, commit logs, timestamps.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">4</span>
                <div>
                  <p className="text-white font-medium text-sm">Buyer Reviews &amp; Approves</p>
                  <p className="text-gray-400 text-sm">The client reviews the deliverables against the agreed criteria. If satisfied, they approve the release. On Upwork, the client has 14 days to review before funds auto-release. If the client requests revisions, you address them within the agreed scope. If there is a genuine dispute about quality or scope, the escrow agent mediates.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">5</span>
                <div>
                  <p className="text-white font-medium text-sm">Funds Released to Freelancer</p>
                  <p className="text-gray-400 text-sm">Upon approval, the escrow agent releases the funds to you, minus any service fees. Payment typically arrives in 1&ndash;5 business days depending on the platform or service. On Upwork, funds move to your account balance immediately upon approval and can be withdrawn to your bank account (1&ndash;3 business days) or via wire transfer.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Escrow Timeline</h3>
            <p className="text-gray-300 leading-relaxed">
              Here is a realistic timeline for a $5,000 web development project using escrow:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Day</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Action</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Who</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Status of Funds</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Day 1</td>
                      <td className="py-3 px-4 text-gray-300">Contract signed, scope agreed</td>
                      <td className="py-3 px-4 text-gray-300">Both parties</td>
                      <td className="py-3 px-4"><span className="text-gray-400 text-xs font-medium bg-gray-500/10 px-2 py-0.5 rounded-full">Not deposited</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Day 2</td>
                      <td className="py-3 px-4 text-gray-300">Client deposits $5,000 into escrow</td>
                      <td className="py-3 px-4 text-gray-300">Client</td>
                      <td className="py-3 px-4"><span className="text-sky-400 text-xs font-medium bg-sky-500/10 px-2 py-0.5 rounded-full">Held in escrow</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Day 3</td>
                      <td className="py-3 px-4 text-gray-300">Freelancer begins work (escrow confirmed)</td>
                      <td className="py-3 px-4 text-gray-300">Freelancer</td>
                      <td className="py-3 px-4"><span className="text-sky-400 text-xs font-medium bg-sky-500/10 px-2 py-0.5 rounded-full">Held in escrow</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Day 17</td>
                      <td className="py-3 px-4 text-gray-300">Freelancer delivers completed work</td>
                      <td className="py-3 px-4 text-gray-300">Freelancer</td>
                      <td className="py-3 px-4"><span className="text-sky-400 text-xs font-medium bg-sky-500/10 px-2 py-0.5 rounded-full">Held in escrow</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Day 19</td>
                      <td className="py-3 px-4 text-gray-300">Client reviews and approves deliverables</td>
                      <td className="py-3 px-4 text-gray-300">Client</td>
                      <td className="py-3 px-4"><span className="text-sky-400 text-xs font-medium bg-sky-500/10 px-2 py-0.5 rounded-full">Release triggered</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Day 21&ndash;24</td>
                      <td className="py-3 px-4 text-gray-300">Funds transferred to freelancer&apos;s bank</td>
                      <td className="py-3 px-4 text-gray-300">Escrow agent</td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Paid</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Timeline assumes a 2-week project with prompt client review. Actual timelines vary based on project scope, client responsiveness, and the escrow platform&apos;s processing times.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Platform Escrow Fees</h3>
            <p className="text-gray-300 leading-relaxed">
              Freelance platforms bundle escrow into their service fees. Here is what the major platforms charge:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Platform</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Fee Structure</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Who Pays</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Auto-Release</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Upwork</td>
                      <td className="py-3 px-4 text-gray-300">10% (sliding: 20% first $500, 10% $500&ndash;$10K, 5% over $10K per client)</td>
                      <td className="py-3 px-4 text-gray-300">Freelancer</td>
                      <td className="py-3 px-4 text-gray-300">14 days after submission</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Freelancer.com</td>
                      <td className="py-3 px-4 text-gray-300">3% or $3 (whichever is greater) for fixed-price; 3% for hourly</td>
                      <td className="py-3 px-4 text-gray-300">Freelancer</td>
                      <td className="py-3 px-4 text-gray-300">14 days after submission</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Airtasker</td>
                      <td className="py-3 px-4 text-gray-300">15&ndash;20% of task value (varies by category and task price)</td>
                      <td className="py-3 px-4 text-gray-300">Tasker (freelancer)</td>
                      <td className="py-3 px-4 text-gray-300">On completion confirmation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Fees are deducted from the freelancer&apos;s payment upon release. Standalone escrow services typically charge 1&ndash;3% and may charge both parties.</p>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Pro Tip: Factor Escrow Fees Into Your Rate</p>
              <p className="text-gray-400 text-sm">
                If you earn $100/hour but Upwork takes 10%, your effective rate is <strong className="text-gray-200">$90/hour</strong>. When setting rates for platform work, add the platform fee on top of your target rate. If you want to net $100/hour on Upwork, quote <strong className="text-gray-200">$111/hour</strong> ($111 minus 10% = $100). Use the <Link href="/tools/rate-calculator" className="text-sky-400 hover:text-sky-300 underline">Rate Calculator</Link> to model the impact of platform fees on your take-home pay.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Escrow vs Other Payment Methods */}
        <section id="escrow-vs-other-payment-methods">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Escrow vs Other Payment Methods</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Escrow is not the only way to protect freelance payments. Understanding how it compares to other common payment structures helps you choose the right approach for each project. Here is a comprehensive comparison:
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Method</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Who Holds Funds</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">When Released</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Risk to Freelancer</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Risk to Client</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Escrow</td>
                      <td className="py-3 px-4 text-gray-300">Neutral third party</td>
                      <td className="py-3 px-4 text-gray-300">On approval of deliverables</td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                      <td className="py-3 px-4 text-gray-300">New clients, high-value projects, international work</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Deposit</td>
                      <td className="py-3 px-4 text-gray-300">Freelancer</td>
                      <td className="py-3 px-4 text-gray-300">Immediately on receipt</td>
                      <td className="py-3 px-4"><span className="text-yellow-400 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full">Medium</span></td>
                      <td className="py-3 px-4"><span className="text-yellow-400 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full">Medium</span></td>
                      <td className="py-3 px-4 text-gray-300">Standard freelance projects, trusted clients</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Milestone payments</td>
                      <td className="py-3 px-4 text-gray-300">Client (or escrow per milestone)</td>
                      <td className="py-3 px-4 text-gray-300">At each milestone completion</td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                      <td className="py-3 px-4 text-gray-300">Large or multi-phase projects (&gt;$5K)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Retainer</td>
                      <td className="py-3 px-4 text-gray-300">Freelancer (paid in advance)</td>
                      <td className="py-3 px-4 text-gray-300">Pre-paid monthly</td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                      <td className="py-3 px-4"><span className="text-yellow-400 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full">Medium</span></td>
                      <td className="py-3 px-4 text-gray-300">Ongoing monthly relationships</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Letter of credit</td>
                      <td className="py-3 px-4 text-gray-300">Bank</td>
                      <td className="py-3 px-4 text-gray-300">On presentation of compliant documents</td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Very low</span></td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                      <td className="py-3 px-4 text-gray-300">International trade, large contracts (&gt;$50K)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Bank guarantee</td>
                      <td className="py-3 px-4 text-gray-300">Bank</td>
                      <td className="py-3 px-4 text-gray-300">On default by the guaranteed party</td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Very low</span></td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                      <td className="py-3 px-4 text-gray-300">Construction, government tenders</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Full upfront</td>
                      <td className="py-3 px-4 text-gray-300">Freelancer</td>
                      <td className="py-3 px-4 text-gray-300">Before work begins</td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">None</span></td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">High</span></td>
                      <td className="py-3 px-4 text-gray-300">Small projects (&lt;$500), digital products</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Net 30 (post-delivery)</td>
                      <td className="py-3 px-4 text-gray-300">Client</td>
                      <td className="py-3 px-4 text-gray-300">30 days after invoice</td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">High</span></td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">None</span></td>
                      <td className="py-3 px-4 text-gray-300">Corporate clients, trusted relationships</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Risk ratings reflect the typical exposure for each party. Individual circumstances may vary based on contract terms, jurisdiction, and relationship history.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Escrow vs. Deposit: The Key Difference</h3>
            <p className="text-gray-300 leading-relaxed">
              Many freelancers confuse escrow with deposits, but they work differently. A <strong className="text-white">deposit</strong> is paid directly to the freelancer before work begins &mdash; the freelancer holds the money. An <strong className="text-white">escrow</strong> deposit goes to a neutral third party &mdash; neither the freelancer nor the client can access it until conditions are met. The practical difference matters: with a deposit, the client must trust the freelancer not to take the money and disappear. With escrow, neither party needs to trust the other, because the neutral intermediary controls the funds.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For established freelancers with strong reputations, <strong className="text-white">deposits are simpler and more cost-effective</strong> (no escrow fees). For new relationships or high-value projects, <strong className="text-white">escrow provides stronger protection</strong> for both sides.
            </p>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">When to Choose Escrow Over a Deposit</p>
              <p className="text-gray-400 text-sm">
                Use escrow when the client is <strong className="text-gray-200">unwilling to pay a direct deposit</strong> (often the case with new clients or larger companies with procurement policies) or when you are working on a project where <strong className="text-gray-200">acceptance criteria are complex or subjective</strong> (design work, branding, creative campaigns). In these scenarios, escrow gives the client confidence that their money is protected, making them more likely to commit to the project and pay a fair rate. Use a direct deposit when you have an established relationship and the project scope is clear.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: When Freelancers Should Use Escrow */}
        <section id="when-to-use-escrow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">When Freelancers Should Use Escrow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Escrow adds cost and complexity to the payment process, so it is not the right choice for every project. Here are the six scenarios where escrow provides the most value for freelancers:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">1. New Clients You Have Not Vetted</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The highest risk of non-payment comes from clients you have no history with. A client who agrees to fund an escrow account is demonstrating both <strong className="text-gray-200">ability to pay</strong> (they have the funds) and <strong className="text-gray-200">intent to pay</strong> (they have committed the money). Clients who refuse escrow for a first project are a red flag &mdash; ask yourself why they are unwilling to commit funds to a protected account. For first-time clients, escrow or a substantial deposit (50%+) should be non-negotiable.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">2. High-Value Projects (Over $5,000)</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The larger the project value, the more you stand to lose from non-payment. A $500 unpaid invoice is frustrating; a $15,000 unpaid invoice is financially devastating. For projects over $5,000, escrow (or milestone escrow) ensures you never have more than one milestone&apos;s worth of exposure at any time. Even the 1&ndash;3% escrow fee is a worthwhile insurance premium on high-value work.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">3. International Clients</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Cross-border payment disputes are exceptionally difficult to resolve. If an Australian client does not pay, you can pursue them through VCAT, NCAT, or small claims. If an overseas client does not pay, your legal options are limited and expensive. Escrow eliminates this problem entirely &mdash; the funds are held in a jurisdiction with clear rules, and the escrow agent handles the release regardless of where the client is located. For international work, <strong className="text-gray-200">always use escrow or require full payment upfront</strong>.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">4. Platform Work (Upwork, Freelancer.com, Airtasker)</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you are working through a freelance platform, their escrow system is built in and typically mandatory for fixed-price projects. Embrace it rather than trying to take work off-platform to avoid fees. The escrow protection, dispute resolution, and payment guarantee are often worth the 3&ndash;20% fee, especially for new client relationships. Once you have established trust with a platform client over several projects, transitioning to direct (off-platform) invoicing with deposits can reduce your costs.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1h12.76" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">5. Complex Deliverables with Subjective Acceptance</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Branding projects, creative campaigns, UX/UI design, and any work where &quot;done&quot; is subjective carry higher dispute risk. A website either works or it does not, but whether a logo &quot;captures the brand essence&quot; is a matter of opinion. Escrow protects you because it ensures there is a formal approval process. If the client cannot articulate why the work is unacceptable, the escrow agent can mediate based on the agreed criteria. <strong className="text-gray-200">Always define acceptance criteria in writing before the escrow is funded.</strong>
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">6. Dispute-Prone Industries</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Some industries have higher-than-average payment dispute rates. Construction, real estate marketing, event management, and any industry with long project timelines and multiple stakeholders are more likely to result in disagreements over deliverables. If you work in these sectors, escrow or milestone-based escrow should be your default payment structure, not an exception.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Escrow Risk Matrix</h3>
            <p className="text-gray-300 leading-relaxed">
              Use this matrix to decide whether escrow is worth the cost for a given project:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Factor</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Low Risk (Skip Escrow)</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Medium Risk (Consider Escrow)</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">High Risk (Use Escrow)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Client relationship</td>
                      <td className="py-3 px-4 text-gray-300">Repeat client, 3+ paid projects</td>
                      <td className="py-3 px-4 text-gray-300">1&ndash;2 prior projects, or referred by trusted contact</td>
                      <td className="py-3 px-4 text-gray-300">First project, no references, cold inquiry</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Project value</td>
                      <td className="py-3 px-4 text-gray-300">Under $1,000</td>
                      <td className="py-3 px-4 text-gray-300">$1,000&ndash;$5,000</td>
                      <td className="py-3 px-4 text-gray-300">Over $5,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Client location</td>
                      <td className="py-3 px-4 text-gray-300">Same city/state</td>
                      <td className="py-3 px-4 text-gray-300">Another Australian state</td>
                      <td className="py-3 px-4 text-gray-300">International</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Deliverable clarity</td>
                      <td className="py-3 px-4 text-gray-300">Objective (code, data, reports)</td>
                      <td className="py-3 px-4 text-gray-300">Mostly objective with some subjectivity</td>
                      <td className="py-3 px-4 text-gray-300">Subjective (design, creative, strategy)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Project duration</td>
                      <td className="py-3 px-4 text-gray-300">Under 1 week</td>
                      <td className="py-3 px-4 text-gray-300">1&ndash;4 weeks</td>
                      <td className="py-3 px-4 text-gray-300">Over 1 month</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Industry</td>
                      <td className="py-3 px-4 text-gray-300">Tech, SaaS, professional services</td>
                      <td className="py-3 px-4 text-gray-300">Marketing, consulting</td>
                      <td className="py-3 px-4 text-gray-300">Construction, events, real estate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">If 3 or more factors fall in the &quot;High Risk&quot; column, use escrow. If 3 or more fall in &quot;Low Risk,&quot; a deposit or direct invoicing is sufficient. For mixed results, use your judgement and default to more protection rather than less.</p>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">The 1% Rule</p>
              <p className="text-gray-400 text-sm">
                If the escrow fee is less than <strong className="text-gray-200">1% of the project value</strong> and you have any doubt about the client&apos;s reliability, use escrow. The cost of a $50 escrow fee on a $5,000 project is trivial compared to the cost of chasing or losing a $5,000 payment. Think of escrow fees as <strong className="text-gray-200">payment insurance</strong> &mdash; you hope you will never need it, but you are glad you have it when you do.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Escrow in Australia */}
        <section id="escrow-in-australia">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Escrow in Australia</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Australia does not have a single federal escrow law governing all transactions. Instead, escrow arrangements are regulated by a patchwork of state property laws, ASIC regulations, and general contract law. Here is what freelancers need to know about the legal and tax implications of using escrow in Australia:
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Legal Framework</h3>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">No specific federal escrow legislation:</strong> Unlike the United States, which has federal escrow regulations for real estate and financial transactions, Australia has no dedicated escrow statute. Escrow arrangements for freelance work are governed by general contract law &mdash; the terms of the escrow agreement are enforceable as a contract between the parties.</span></li>
              <li className="flex items-start gap-2"><span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">State Property Law Acts:</strong> Where escrow is used in property transactions, state legislation applies (e.g., the Property Law Act 1958 in Victoria, the Conveyancing Act 1919 in NSW). These laws require licensed conveyancers or solicitors to hold funds in trust accounts. While these laws do not directly apply to freelance escrow, they set the standard for how third-party funds should be managed.</span></li>
              <li className="flex items-start gap-2"><span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">ASIC regulations:</strong> Entities that hold client funds as part of a financial service may need to comply with Australian Securities and Investments Commission (ASIC) regulations. Freelance platform escrow services (Upwork, Freelancer.com) typically hold an Australian Financial Services Licence (AFSL) or operate under an exemption. Standalone escrow services must comply with anti-money laundering (AML) and counter-terrorism financing (CTF) obligations under the Anti-Money Laundering and Counter-Terrorism Financing Act 2006.</span></li>
              <li className="flex items-start gap-2"><span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Trust account requirements:</strong> If an escrow agent holds funds on behalf of clients, those funds must generally be held in a trust account separate from the agent&apos;s operating funds. This protects the escrowed funds if the escrow agent becomes insolvent. Always verify that your escrow service uses segregated trust accounts.</span></li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8">Escrow Costs in Australia</h3>
            <p className="text-gray-300 leading-relaxed">
              Standalone escrow services in Australia typically charge:
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">1&ndash;3%</span>
                <div>
                  <p className="text-white font-medium text-sm">Standard Transaction Fee</p>
                  <p className="text-gray-400 text-sm">Most Australian escrow services charge 1 to 3 percent of the transaction value. Some offer flat fees for transactions under $5,000 (typically $25 to $50). The fee may be paid by one party or split between both, as agreed in the escrow terms.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">$0&ndash;$200</span>
                <div>
                  <p className="text-white font-medium text-sm">Dispute Resolution Fee</p>
                  <p className="text-gray-400 text-sm">If a dispute arises and the escrow service needs to mediate, additional fees may apply. Some services include basic dispute resolution in their transaction fee; others charge separately. Platform escrow (Upwork, Freelancer.com) includes dispute mediation at no extra cost.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Tax Implications</h3>
            <p className="text-gray-300 leading-relaxed">
              The tax treatment of escrow payments is an area where many freelancers make mistakes. Here is how the ATO views escrow:
            </p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Income recognition:</strong> For tax purposes, income from escrow is generally recognised when the funds are <strong className="text-white">released to you</strong>, not when the client deposits them into escrow. This is because the funds are not yet &quot;derived&quot; (available to you) while they are held by the escrow agent. If you use cash basis accounting (most sole traders), you report the income in the financial year you receive the payment. If you use accrual accounting, you may recognise the income when you have a right to receive it (i.e., when the client approves the deliverable).</span></li>
              <li className="flex items-start gap-2"><span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">GST timing:</strong> If you are registered for GST, the GST is attributable to the tax period in which you receive the payment (cash basis) or the tax period in which the invoice is issued (accrual basis). For escrow transactions, this means GST is typically reported when the escrow funds are released to you, not when the client funds the escrow account.</span></li>
              <li className="flex items-start gap-2"><span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Escrow fees as deductions:</strong> Platform fees (Upwork&apos;s 10%, Freelancer.com&apos;s 3%) and standalone escrow service fees are <strong className="text-white">tax-deductible business expenses</strong>. Record them as &quot;commission and fees&quot; or &quot;platform fees&quot; in your bookkeeping. If the fee includes GST, claim the input tax credit on your BAS.</span></li>
              <li className="flex items-start gap-2"><span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Cross-border considerations:</strong> If you receive escrow payments from international clients through platforms like Upwork, the income is still assessable in Australia. You are taxed on your worldwide income. Currency conversion gains or losses may apply if the escrow is denominated in a foreign currency &mdash; report these as foreign exchange gains/losses.</span></li>
            </ul>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">ATO Record-Keeping Tip</p>
              <p className="text-gray-400 text-sm">
                Keep records of <strong className="text-gray-200">both the escrow deposit date and the release date</strong> for every transaction. The deposit date proves when the client committed the funds (useful for contract disputes), and the release date determines when you report the income for tax purposes. Download transaction statements from your escrow platform at least quarterly &mdash; do not rely on annual summaries, which may not capture dispute adjustments or partial releases. The ATO requires you to keep business records for <strong className="text-gray-200">5 years</strong> from the date you lodge your tax return.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-escrow-alternative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              While InvoiceFlow is not an escrow service, it provides freelancers with <strong className="text-white">escrow-like payment protection through milestone invoicing, deposit requests, and payment tracking</strong> &mdash; without the platform fees. For many freelancers, structured invoicing through InvoiceFlow is a more cost-effective alternative to formal escrow, especially for established client relationships.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Milestone Invoicing</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Break large projects into milestones and invoice for each phase as it is completed. A typical $10,000 project might be structured as: <strong className="text-gray-200">$3,000 deposit (30%) upfront</strong>, <strong className="text-gray-200">$4,000 (40%) at midpoint delivery</strong>, and <strong className="text-gray-200">$3,000 (30%) on final completion</strong>. InvoiceFlow lets you create linked milestone invoices with automatic due dates, so both you and the client can see the full payment schedule at a glance. This gives you the same incremental protection as milestone escrow without paying a 10% platform fee.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Deposit Invoicing</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Request deposits before starting work with a single click. InvoiceFlow generates a professional deposit invoice that clearly states the deposit amount, what it covers, the balance remaining, and when the balance is due. The deposit invoice is linked to the final invoice, so when you invoice for the balance, the deposit is automatically deducted. Deposits give you cash in hand before you start &mdash; a direct alternative to waiting for escrow to be funded and released.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Payment Tracking &amp; Visibility</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track every invoice status in real time: <strong className="text-gray-200">draft, sent, viewed, due soon, overdue, and paid</strong>. Unlike escrow, where you are waiting for the platform to release funds, InvoiceFlow gives you instant visibility into whether the client has opened your invoice, when they are likely to pay (based on their history), and exactly how much is outstanding across all your clients. Automated reminders go out at your chosen intervals so you never have to manually chase a payment.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Client Trust Building</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Professional, branded invoices with clear payment terms, detailed line items, and your ABN build client confidence &mdash; reducing the likelihood of disputes before they start. InvoiceFlow&apos;s polished invoices signal that you are a professional business, not a fly-by-night operator. When clients trust your professionalism, they are more willing to accept direct deposits and milestone payments instead of insisting on escrow, saving you the 1&ndash;10% platform fee.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Escrow for New Clients, InvoiceFlow for Everyone Else</p>
              <p className="text-gray-400 text-sm">
                The smartest payment strategy for freelancers combines both approaches: use <strong className="text-gray-200">platform escrow for new clients and high-risk projects</strong>, then transition to <strong className="text-gray-200">InvoiceFlow&apos;s milestone and deposit invoicing for established relationships</strong>. You get maximum protection when you need it most, and maximum efficiency (no platform fees) once trust is established. Use the <Link href="/tools/invoice-generator" className="text-sky-400 hover:text-sky-300 underline">Invoice Generator</Link> to create your first milestone invoice in under 2 minutes.
              </p>
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

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to structure payments, calculate rates, and protect your freelance income.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-sky-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on payment protection, invoicing, and freelancer contracts.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-sky-500/40 transition-all duration-300"
            >
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

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Protect Your Payments Without Platform Fees
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow gives Australian freelancers milestone invoicing, deposit requests, payment tracking, and automated reminders &mdash; escrow-level protection without the 3&ndash;20% platform cut. Keep more of what you earn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/invoice-generator">
              <Button variant="secondary">Create a Milestone Invoice</Button>
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
