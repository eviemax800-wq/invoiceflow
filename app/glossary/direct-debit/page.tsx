import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Direct Debit: How It Works for Freelancers & Invoices in Australia — InvoiceFlow',
  description:
    'What is direct debit and how does it work in Australia? Learn about BECS direct debit, how to set up direct debit for invoices, costs per transaction, DDR agreements, and the best direct debit providers for Australian freelancers. Includes comparison with bank transfers, credit cards, and PayID.',
  keywords: [
    'direct debit meaning',
    'direct debit for invoices australia',
    'direct debit vs bank transfer',
    'how to set up direct debit australia',
    'direct debit for freelancers',
    'BECS direct debit',
    'direct debit agreement',
    'auto payment invoices',
  ],
  alternates: { canonical: '/glossary/direct-debit' },
  openGraph: {
    title: 'Direct Debit: How It Works for Freelancers & Invoices in Australia — InvoiceFlow',
    description:
      'The complete guide to direct debit for Australian freelancers. Understand BECS rules, compare providers like GoCardless and Stripe, learn setup requirements, and discover how direct debit can reduce late payments by up to 70%.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/direct-debit',
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
    { '@type': 'ListItem', position: 3, name: 'Direct Debit', item: `${BASE_URL}/glossary/direct-debit` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is direct debit and how does it work in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Direct debit is an automated payment method where you authorise a business or individual to withdraw funds directly from your bank account on an agreed schedule. In Australia, direct debit is governed by the Bulk Electronic Clearing System (BECS) rules, set and maintained by the Australian Payments Network (AusPayNet). The process involves four key participants: the payer (the person whose account is debited), the payee (the business or freelancer receiving the funds), the sponsoring bank or payment processor (which submits the debit request), and the clearing house (which facilitates the transfer between banks). When a client signs a Direct Debit Request (DDR) form, they authorise you to pull payments from their account on specified dates. The funds are withdrawn on the due date, settled within T+2 business days, and reconciled against your invoices. BECS processes over 4.5 billion transactions per year in Australia, making it one of the most widely used payment methods in the country.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can freelancers set up direct debit for clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, freelancers can absolutely set up direct debit for their clients, and it is one of the most effective ways to ensure timely payment on recurring invoices. You do not need a special business structure — sole traders, partnerships, and companies can all use direct debit. To get started, you need an ABN, a business bank account (BSB and account number), and an account with a direct debit provider such as GoCardless, Ezidebit, or Stripe. Your client must sign a Direct Debit Request (DDR) form that authorises you to debit their account. Most modern providers offer digital DDR forms that clients can complete online in under two minutes. Direct debit is particularly well-suited for freelancers with retainer clients, recurring monthly invoices, or subscription-based services. The setup friction is a one-time cost — once the DDR is in place, every subsequent payment is automatic.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does direct debit cost per transaction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Direct debit transaction costs in Australia vary by provider but are significantly cheaper than credit card processing. GoCardless charges 0.9% plus $0.20 per transaction (capped at $3.00). Ezidebit charges a flat fee of $0.25 to $0.55 per transaction depending on your plan. Stripe BECS Direct Debit charges a flat $0.30 per successful transaction. PayChoice and BPoint offer volume-based pricing starting around $0.30 per transaction. Compare this to credit card fees of 1.5% to 3.0% per transaction — on a $5,000 invoice, direct debit via Stripe costs $0.30 versus $75 to $150 for a credit card. Most providers also charge a monthly platform fee of $0 to $49 per month, and some charge for failed transactions (typically $0.25 to $1.00 per failed debit). For freelancers processing even a handful of invoices per month, direct debit is consistently the cheapest automated payment method available.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a direct debit fails?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a direct debit fails, the funds are not withdrawn from the client\'s account and you are notified by your payment provider. Common reasons for failure include insufficient funds in the client\'s account, the account being closed or frozen, incorrect BSB or account number details, or the client having cancelled the direct debit authority with their bank. Your payment provider will typically charge a dishonour fee of $0.25 to $1.00, and the client\'s bank may charge them a dishonour fee of $10 to $35. Most providers offer automatic retry functionality — the failed debit is retried after 3 to 5 business days. If the retry also fails, you will need to contact the client directly. Under BECS rules, clients have the right to request a refund of any direct debit within 7 years if they believe it was unauthorised, though in practice legitimate disputes are resolved within 28 days. InvoiceFlow detects failed direct debits automatically and triggers payment reminder sequences so you do not have to manually track failures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is direct debit safe for freelancers and clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Direct debit is one of the safest payment methods available in Australia, protected by robust BECS rules and the Direct Debit Guarantee. For clients, the protections include the right to cancel a direct debit authority at any time by contacting their bank, the right to dispute any unauthorised transaction, and the ability to set transaction limits on their direct debit authority. For freelancers, direct debit provides guaranteed payment timing (you know exactly when funds will arrive), lower fraud risk compared to credit cards (chargebacks are far less common), and a professional payment process that reduces invoice disputes. The key risk for freelancers is failed payments due to insufficient funds, but this is easily managed with automatic retry and notification systems. All direct debit providers operating in Australia must comply with AusPayNet\'s BECS rules, hold an Australian Financial Services Licence (AFSL) or be authorised by an AFSL holder, and maintain PCI DSS compliance for data security. The system processes over 4.5 billion transactions per year with an extremely low dispute rate.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-direct-debit', label: '1. What Is Direct Debit?' },
  { id: 'how-direct-debit-works-australia', label: '2. How Direct Debit Works in Australia' },
  { id: 'direct-debit-vs-other-payment-methods', label: '3. Direct Debit vs Other Payment Methods' },
  { id: 'direct-debit-for-freelancers', label: '4. Direct Debit for Freelancers' },
  { id: 'setting-up-direct-debit', label: '5. Setting Up Direct Debit' },
  { id: 'invoiceflow-direct-debit', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices with automated payment terms, bank details, and direct debit references built in.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/payment-terms-calculator',
    name: 'Payment Terms Generator',
    description: 'Model different payment terms and see how direct debit vs manual payments affect your cash flow.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    href: '/tools/late-payment-calculator',
    name: 'Late Payment Calculator',
    description: 'Calculate interest and penalties on overdue invoices when direct debit fails or clients dispute payments.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Set hourly and project rates that factor in payment processing costs, tax, super, and business expenses.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment times, automate collections, and stop chasing overdue invoices.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'The complete beginner guide to invoicing in Australia &mdash; what to include, when to send, and how to follow up.',
  },
  {
    href: '/guides/cash-flow-management',
    name: 'Cash Flow Management',
    description: 'How to forecast cash flow, manage payment timing, and build a financial buffer as a freelancer in Australia.',
  },
];

export default function DirectDebitGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Direct Debit</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Cash Flow &amp; Payments
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Direct Debit:{' '}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Automated Payments for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Direct debit lets you pull payments directly from your client&apos;s bank account on the invoice due date &mdash; no chasing, no reminders, no excuses. This guide explains how BECS direct debit works in Australia, compares it to every other payment method, breaks down the costs and providers, and shows you exactly how to set it up for your freelance business. 83% of Australian businesses already use direct debit. Here is how you can too.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>16 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
              </svg>
              <span>Cash Flow &amp; Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">83%</span>
              <div>
                <p className="text-white font-medium text-sm">Australian Business Adoption</p>
                <p className="text-gray-400 text-sm">83% of Australian businesses use direct debit for regular payments and collections</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">70%</span>
              <div>
                <p className="text-white font-medium text-sm">Late Payment Reduction</p>
                <p className="text-gray-400 text-sm">Direct debit reduces late payments by up to 70% compared to manual invoicing</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">$0.30</span>
              <div>
                <p className="text-white font-medium text-sm">Average Cost per Transaction</p>
                <p className="text-gray-400 text-sm">$0.25&ndash;$1.50 per transaction vs 1.5&ndash;3% for credit cards &mdash; dramatically cheaper</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">T+2</span>
              <div>
                <p className="text-white font-medium text-sm">Settlement Time</p>
                <p className="text-gray-400 text-sm">Funds settle within T+2 business days via the BECS clearing system</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-teal-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Direct Debit? */}
        <section id="what-is-direct-debit">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Direct Debit?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Direct debit is an automated payment method where a client authorises you (the payee) to withdraw funds directly from their bank account on an agreed schedule.</strong> Unlike a bank transfer where the payer initiates the payment, direct debit is a &quot;pull&quot; mechanism &mdash; you pull the money from the client&apos;s account on the due date, rather than waiting for them to push it to you.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In Australia, direct debit is governed by the <strong className="text-white">Bulk Electronic Clearing System (BECS)</strong>, a set of rules and procedures maintained by the <strong className="text-white">Australian Payments Network (AusPayNet)</strong>. BECS is the backbone of Australia&apos;s direct entry payment system, processing over <strong className="text-white">4.5 billion transactions per year</strong> across direct debits, direct credits, salary payments, and government benefits. Any business or individual wanting to initiate direct debits must comply with the BECS Direct Entry rules.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Key Participants in Direct Debit</h3>
            <p className="text-gray-300 leading-relaxed">
              Every direct debit transaction involves four parties working together:
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">1</span>
                <div>
                  <p className="text-white font-medium text-sm">Payer (Debtor)</p>
                  <p className="text-gray-400 text-sm">Your client &mdash; the person or business whose bank account is being debited. They must provide written authorisation (a DDR) before any funds can be withdrawn.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">2</span>
                <div>
                  <p className="text-white font-medium text-sm">Payee (Creditor)</p>
                  <p className="text-gray-400 text-sm">You &mdash; the freelancer or business receiving the payment. You initiate the debit request through your payment processor or sponsoring bank.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">3</span>
                <div>
                  <p className="text-white font-medium text-sm">Sponsoring Bank / Payment Processor</p>
                  <p className="text-gray-400 text-sm">The financial institution or third-party provider (GoCardless, Ezidebit, Stripe) that submits the direct debit request to the clearing system on your behalf. They hold the BECS sponsorship agreement.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">4</span>
                <div>
                  <p className="text-white font-medium text-sm">Clearing House</p>
                  <p className="text-gray-400 text-sm">The Reserve Bank of Australia&apos;s RITS (Reserve Bank Information and Transfer System) and BECS infrastructure that facilitates the transfer of funds between the payer&apos;s bank and the payee&apos;s bank.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Direct Debit vs Direct Credit</h3>
            <p className="text-gray-300 leading-relaxed">
              Do not confuse direct debit with direct credit. <strong className="text-white">Direct debit</strong> is a &quot;pull&quot; payment &mdash; you pull money from the client&apos;s account. <strong className="text-white">Direct credit</strong> is a &quot;push&quot; payment &mdash; the payer pushes money to your account (this is how salary payments and standard bank transfers work). Both use the BECS system, but the authorisation flow and control are fundamentally different. With direct debit, you are in control of when the payment is collected. With direct credit, the payer is in control.
            </p>

            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">Key Takeaway</p>
              <p className="text-gray-400 text-sm">
                Direct debit shifts the <strong className="text-gray-200">payment control from the client to you</strong>. Instead of hoping your client remembers to pay on the due date, you collect the payment automatically. For freelancers tired of chasing invoices, this is a fundamental shift in how you get paid &mdash; from reactive (waiting for payment) to proactive (collecting payment).
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: How Direct Debit Works in Australia */}
        <section id="how-direct-debit-works-australia">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How Direct Debit Works in Australia</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The Australian direct debit process follows a structured five-step flow, governed by BECS rules. Understanding each step helps you set up direct debit correctly and handle issues when they arise.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">The 5-Step Direct Debit Process</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">1</span>
                <div>
                  <p className="text-white font-medium text-sm">Client Signs the DDR (Direct Debit Request)</p>
                  <p className="text-gray-400 text-sm">Your client completes and signs a Direct Debit Request form, providing their BSB, account number, account name, and authorisation for you to debit their account. Modern providers like GoCardless and Stripe offer digital DDR forms that clients can sign online in under two minutes. The DDR must include all mandatory clauses specified by AusPayNet, including the client&apos;s right to cancel and dispute.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">2</span>
                <div>
                  <p className="text-white font-medium text-sm">Freelancer Submits to Bank / Payment Processor</p>
                  <p className="text-gray-400 text-sm">You (or your invoicing software) submit the DDR details and the debit instruction to your payment processor. The processor validates the BSB and account number, stores the mandate securely, and queues the debit for the agreed date. If you are using a platform like GoCardless or Stripe, this step is handled automatically through their API or dashboard.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">3</span>
                <div>
                  <p className="text-white font-medium text-sm">Funds Withdrawn on Due Date</p>
                  <p className="text-gray-400 text-sm">On the scheduled debit date, your payment processor submits the debit file to the BECS clearing system. The payer&apos;s bank receives the instruction, checks for sufficient funds, and processes the withdrawal. BECS processing files are typically submitted in batches, with cut-off times varying by provider (usually 4:00 PM AEST for same-day processing).</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">4</span>
                <div>
                  <p className="text-white font-medium text-sm">Settlement T+2 Business Days</p>
                  <p className="text-gray-400 text-sm">Funds are settled (transferred to your account) within <strong className="text-gray-200">T+2 business days</strong> &mdash; meaning two business days after the debit date. For example, if the debit is processed on Monday, you receive the funds by Wednesday. If processed on Thursday, settlement is the following Monday (weekends are excluded). Some providers offer T+1 settlement for an additional fee.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">5</span>
                <div>
                  <p className="text-white font-medium text-sm">Reconciliation</p>
                  <p className="text-gray-400 text-sm">Once the funds arrive, you reconcile the payment against the original invoice. Your payment processor provides a settlement report showing which debits succeeded, which failed (dishonoured), and the net amount deposited. InvoiceFlow can automatically match direct debit payments to invoices, marking them as paid without manual intervention.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">BECS Rules You Need to Know</h3>
            <p className="text-gray-300 leading-relaxed">
              The BECS Direct Debit rules set by AusPayNet include several important requirements that apply to anyone initiating direct debits in Australia:
            </p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">10 business days advance notice:</strong> For new direct debit arrangements, you must give the payer at least 10 business days notice before the first debit is processed. This notice must include the debit amount (or how it is calculated), the debit date, and your contact details.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Right to cancel at any time:</strong> The payer can cancel the direct debit authority at any time by contacting either you or their bank. You must process the cancellation promptly and confirm it in writing.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Dispute and refund rights:</strong> Under the Direct Debit Guarantee, payers can dispute a transaction and request a refund through their bank. The bank will investigate and, if the debit was unauthorised, process a reversal.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">DDR Service Agreement:</strong> You must provide the payer with a DDR Service Agreement (a separate document from the DDR itself) that explains the terms and conditions of the arrangement, how disputes are handled, and how to cancel.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Changes to debit amount or schedule:</strong> If the debit amount or schedule changes, you must give the payer at least 14 calendar days written notice before the change takes effect.</span></li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8">Processing Times and Cut-Off Times</h3>
            <p className="text-gray-300 leading-relaxed">
              BECS direct debit files are processed in batches, not in real time. Each provider has specific cut-off times for submitting debit files. Typically, files submitted before <strong className="text-white">4:00 PM AEST</strong> are processed on the same business day. Files submitted after the cut-off are processed on the next business day. Direct debits cannot be processed on weekends or public holidays &mdash; if a scheduled debit falls on a non-business day, it is processed on the next business day. This means a debit scheduled for Saturday will not be processed until Monday, with settlement on Wednesday.
            </p>

            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">Pro Tip: Account for Settlement Lag</p>
              <p className="text-gray-400 text-sm">
                When planning your cash flow around direct debit, always factor in the <strong className="text-gray-200">T+2 settlement period</strong>. If your rent is due on the 1st of the month, schedule client direct debits for the 27th or 28th of the previous month &mdash; giving two business days for settlement plus a buffer for any failures. Do not schedule critical expenses on the same day as your expected direct debit settlement.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Direct Debit vs Other Payment Methods */}
        <section id="direct-debit-vs-other-payment-methods">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Direct Debit vs Other Payment Methods</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              How does direct debit stack up against every other way your clients can pay you? Here is a comprehensive comparison across speed, cost, automation, and client friction &mdash; the four factors that matter most to freelancers.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Method</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Speed</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Cost/Txn</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Automatic</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Recurring</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Client Friction</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr className="bg-teal-500/5">
                      <td className="py-3 px-4 text-white font-medium">Direct Debit</td>
                      <td className="py-3 px-4 text-gray-300">T+2 days</td>
                      <td className="py-3 px-4 text-gray-300">$0.25&ndash;$1.50</td>
                      <td className="py-3 px-4"><span className="text-teal-400 text-xs font-medium bg-teal-500/10 px-2 py-0.5 rounded-full">Yes</span></td>
                      <td className="py-3 px-4"><span className="text-teal-400 text-xs font-medium bg-teal-500/10 px-2 py-0.5 rounded-full">Yes</span></td>
                      <td className="py-3 px-4"><span className="text-yellow-400 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full">Medium</span></td>
                      <td className="py-3 px-4 text-gray-300">Retainers, recurring invoices</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Bank Transfer</td>
                      <td className="py-3 px-4 text-gray-300">1&ndash;2 days</td>
                      <td className="py-3 px-4 text-gray-300">$0</td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">No</span></td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">No</span></td>
                      <td className="py-3 px-4"><span className="text-teal-400 text-xs font-medium bg-teal-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                      <td className="py-3 px-4 text-gray-300">One-off invoices, large amounts</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Credit Card</td>
                      <td className="py-3 px-4 text-gray-300">Instant&ndash;2 days</td>
                      <td className="py-3 px-4 text-gray-300">1.5&ndash;3.0%</td>
                      <td className="py-3 px-4"><span className="text-teal-400 text-xs font-medium bg-teal-500/10 px-2 py-0.5 rounded-full">Yes</span></td>
                      <td className="py-3 px-4"><span className="text-teal-400 text-xs font-medium bg-teal-500/10 px-2 py-0.5 rounded-full">Yes</span></td>
                      <td className="py-3 px-4"><span className="text-teal-400 text-xs font-medium bg-teal-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                      <td className="py-3 px-4 text-gray-300">Small amounts, international clients</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">PayPal</td>
                      <td className="py-3 px-4 text-gray-300">Instant&ndash;3 days</td>
                      <td className="py-3 px-4 text-gray-300">2.6% + $0.30</td>
                      <td className="py-3 px-4"><span className="text-yellow-400 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full">Partial</span></td>
                      <td className="py-3 px-4"><span className="text-teal-400 text-xs font-medium bg-teal-500/10 px-2 py-0.5 rounded-full">Yes</span></td>
                      <td className="py-3 px-4"><span className="text-yellow-400 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full">Medium</span></td>
                      <td className="py-3 px-4 text-gray-300">International clients, digital services</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">BPAY</td>
                      <td className="py-3 px-4 text-gray-300">1&ndash;3 days</td>
                      <td className="py-3 px-4 text-gray-300">$0&ndash;$0.65</td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">No</span></td>
                      <td className="py-3 px-4"><span className="text-yellow-400 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full">Limited</span></td>
                      <td className="py-3 px-4"><span className="text-yellow-400 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full">Medium</span></td>
                      <td className="py-3 px-4 text-gray-300">Utility-style billing, larger businesses</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">PayID / Osko</td>
                      <td className="py-3 px-4 text-gray-300">Instant</td>
                      <td className="py-3 px-4 text-gray-300">$0</td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">No</span></td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">No</span></td>
                      <td className="py-3 px-4"><span className="text-teal-400 text-xs font-medium bg-teal-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                      <td className="py-3 px-4 text-gray-300">Instant payments, personal clients</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Cheque</td>
                      <td className="py-3 px-4 text-gray-300">3&ndash;5 days</td>
                      <td className="py-3 px-4 text-gray-300">$0&ndash;$2.00</td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">No</span></td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">No</span></td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">High</span></td>
                      <td className="py-3 px-4 text-gray-300">Legacy clients, government</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Stripe</td>
                      <td className="py-3 px-4 text-gray-300">2&ndash;7 days</td>
                      <td className="py-3 px-4 text-gray-300">1.75% + $0.30</td>
                      <td className="py-3 px-4"><span className="text-teal-400 text-xs font-medium bg-teal-500/10 px-2 py-0.5 rounded-full">Yes</span></td>
                      <td className="py-3 px-4"><span className="text-teal-400 text-xs font-medium bg-teal-500/10 px-2 py-0.5 rounded-full">Yes</span></td>
                      <td className="py-3 px-4"><span className="text-teal-400 text-xs font-medium bg-teal-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                      <td className="py-3 px-4 text-gray-300">Online payments, SaaS, subscriptions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Costs are indicative for Australian domestic transactions as of March 2026. Stripe BECS Direct Debit ($0.30 flat) is listed separately from Stripe card payments (1.75% + $0.30). PayPal rates reflect standard Australian merchant pricing.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">When Direct Debit Wins</h3>
            <p className="text-gray-300 leading-relaxed">
              Direct debit is the clear winner when you need <strong className="text-white">recurring, automated payments at the lowest possible cost</strong>. On a $3,000 monthly retainer invoice, the cost comparison is stark:
            </p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Direct debit (Stripe BECS):</strong> $0.30 per month = $3.60 per year</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Credit card (1.75% + $0.30):</strong> $52.80 per month = $633.60 per year</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">PayPal (2.6% + $0.30):</strong> $78.30 per month = $939.60 per year</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Bank transfer:</strong> $0 per month &mdash; but zero automation, zero guarantee of on-time payment</span></li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8">When Direct Debit Loses</h3>
            <p className="text-gray-300 leading-relaxed">
              Direct debit is not ideal for every situation. It falls short when:
            </p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">One-off invoices:</strong> The setup friction (DDR form, bank details) is not worth it for a single payment. Use PayID or bank transfer instead.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">International clients:</strong> BECS direct debit only works with Australian bank accounts. For international clients, use Stripe card payments, PayPal, or Wise.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Clients who want instant confirmation:</strong> T+2 settlement means the client cannot see an instant &quot;paid&quot; confirmation. Credit card or PayID are better for time-sensitive transactions.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Very small amounts:</strong> The flat per-transaction fee makes direct debit proportionally expensive for payments under $20&ndash;$30.</span></li>
            </ul>

            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">The Hybrid Approach</p>
              <p className="text-gray-400 text-sm">
                Most successful freelancers use <strong className="text-gray-200">direct debit for retainer and recurring clients</strong>, <strong className="text-gray-200">bank transfer or PayID for one-off invoices</strong>, and <strong className="text-gray-200">credit card for international clients</strong>. Match the payment method to the relationship type, not to your preference. InvoiceFlow supports all three approaches from a single dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Direct Debit for Freelancers */}
        <section id="direct-debit-for-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Direct Debit for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Direct debit is not just for big businesses and utilities. It is increasingly accessible to sole traders, freelancers, and small agencies &mdash; and it solves the single biggest problem in freelancing: <strong className="text-white">getting paid on time</strong>.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">When to Use Direct Debit</h3>
            <div className="space-y-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Retainer Clients</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you have clients paying a fixed monthly retainer &mdash; say $2,000/month for ongoing web development, social media management, or consulting &mdash; direct debit is the ideal payment method. Set it up once and the payment collects automatically every month. No invoices to chase, no &quot;I forgot to pay&quot; emails, no cash flow surprises. The client knows the amount, you know the timing. Both parties benefit.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Recurring Invoices</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Any recurring invoice pattern &mdash; weekly, fortnightly, or monthly &mdash; is a candidate for direct debit. If you are billing the same client the same (or similar) amount on a regular schedule, you are both wasting time with manual bank transfers. Direct debit automates the collection. Even if the amount varies each month (e.g., hourly billing), many providers support variable-amount direct debits where you specify the debit amount each cycle.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Subscription Services</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you offer productised services with subscription pricing &mdash; e.g., a monthly SEO package, hosting and maintenance plan, or bookkeeping service &mdash; direct debit is the standard payment method. It mirrors how your clients already pay for Netflix, gym memberships, and SaaS tools. The familiarity reduces friction and normalises automatic payments for your services.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Setup Requirements</h3>
            <p className="text-gray-300 leading-relaxed">
              To start collecting direct debit payments as a freelancer in Australia, you need:
            </p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">ABN (Australian Business Number):</strong> Required by all direct debit providers. You cannot set up direct debit as an individual without an ABN.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Business bank account:</strong> Your BSB and account number where debited funds will be settled. Most providers accept standard business transaction accounts from any Australian bank.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">DDR form:</strong> A Direct Debit Request form for each client, containing their BSB, account number, account name, and signed authorisation. Your provider typically supplies a template (digital or paper).</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Payment processor account:</strong> An account with GoCardless, Ezidebit, Stripe, or another BECS-authorised provider. Setup typically takes 1&ndash;3 business days including identity verification.</span></li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8">Costs Breakdown</h3>
            <p className="text-gray-300 leading-relaxed">
              Direct debit is the cheapest automated payment method available to Australian freelancers. Typical per-transaction costs range from <strong className="text-white">$0.25 to $1.50</strong>, depending on your provider:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Provider</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Per Transaction</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Monthly Fee</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Cost on $3K Invoice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">GoCardless</td>
                      <td className="py-3 px-4 text-gray-300">0.9% + $0.20 (cap $3.00)</td>
                      <td className="py-3 px-4 text-gray-300">$0</td>
                      <td className="py-3 px-4 text-gray-300">$3.00</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Ezidebit</td>
                      <td className="py-3 px-4 text-gray-300">$0.25&ndash;$0.55 flat</td>
                      <td className="py-3 px-4 text-gray-300">$0&ndash;$49</td>
                      <td className="py-3 px-4 text-gray-300">$0.25&ndash;$0.55</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Stripe BECS</td>
                      <td className="py-3 px-4 text-gray-300">$0.30 flat</td>
                      <td className="py-3 px-4 text-gray-300">$0</td>
                      <td className="py-3 px-4 text-gray-300">$0.30</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">PayChoice</td>
                      <td className="py-3 px-4 text-gray-300">$0.30&ndash;$0.50</td>
                      <td className="py-3 px-4 text-gray-300">From $29</td>
                      <td className="py-3 px-4 text-gray-300">$0.30&ndash;$0.50</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">BPoint</td>
                      <td className="py-3 px-4 text-gray-300">$0.30&ndash;$0.45</td>
                      <td className="py-3 px-4 text-gray-300">Custom</td>
                      <td className="py-3 px-4 text-gray-300">$0.30&ndash;$0.45</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Pricing as of March 2026. Some providers offer volume discounts. Failed transactions may incur additional fees of $0.25&ndash;$1.00 per dishonour.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Pros and Cons for Freelancers</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h4 className="text-teal-400 font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pros
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-gray-300"><span className="text-teal-400 mt-0.5 flex-shrink-0">&bull;</span><span><strong className="text-white">Guaranteed payment timing</strong> &mdash; you know exactly when money will arrive in your account</span></li>
                  <li className="flex items-start gap-2 text-gray-300"><span className="text-teal-400 mt-0.5 flex-shrink-0">&bull;</span><span><strong className="text-white">Reduced invoice chasing</strong> &mdash; no more reminder emails, phone calls, or awkward follow-ups</span></li>
                  <li className="flex items-start gap-2 text-gray-300"><span className="text-teal-400 mt-0.5 flex-shrink-0">&bull;</span><span><strong className="text-white">Professional image</strong> &mdash; direct debit signals a mature, established business</span></li>
                  <li className="flex items-start gap-2 text-gray-300"><span className="text-teal-400 mt-0.5 flex-shrink-0">&bull;</span><span><strong className="text-white">Lowest cost</strong> &mdash; $0.30 per transaction vs $45&ndash;$90+ for credit card on a $3K invoice</span></li>
                  <li className="flex items-start gap-2 text-gray-300"><span className="text-teal-400 mt-0.5 flex-shrink-0">&bull;</span><span><strong className="text-white">Cash flow predictability</strong> &mdash; consistent, scheduled deposits make financial planning easier</span></li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h4 className="text-red-400 font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  Cons
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-gray-300"><span className="text-red-400 mt-0.5 flex-shrink-0">&bull;</span><span><strong className="text-white">Setup friction</strong> &mdash; clients must complete a DDR form and share bank details (one-time)</span></li>
                  <li className="flex items-start gap-2 text-gray-300"><span className="text-red-400 mt-0.5 flex-shrink-0">&bull;</span><span><strong className="text-white">Failed payments</strong> &mdash; insufficient funds, closed accounts, or incorrect details cause dishonours</span></li>
                  <li className="flex items-start gap-2 text-gray-300"><span className="text-red-400 mt-0.5 flex-shrink-0">&bull;</span><span><strong className="text-white">Chargeback risk</strong> &mdash; clients can dispute debits, though this is rare for legitimate transactions</span></li>
                  <li className="flex items-start gap-2 text-gray-300"><span className="text-red-400 mt-0.5 flex-shrink-0">&bull;</span><span><strong className="text-white">T+2 settlement</strong> &mdash; not instant; you need to plan around the 2-day settlement lag</span></li>
                  <li className="flex items-start gap-2 text-gray-300"><span className="text-red-400 mt-0.5 flex-shrink-0">&bull;</span><span><strong className="text-white">Australia only</strong> &mdash; BECS direct debit does not work with international bank accounts</span></li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">The Real Cost of Not Using Direct Debit</p>
              <p className="text-gray-400 text-sm">
                The average Australian freelancer spends <strong className="text-gray-200">3&ndash;5 hours per month chasing late payments</strong>. At a billable rate of $150/hour, that is $450&ndash;$750 of lost income every month &mdash; just on admin. Direct debit eliminates this almost entirely. Even with provider fees, the ROI is overwhelming. For a freelancer billing $10K/month across 4 retainer clients, the total direct debit cost is around $1.20/month (Stripe BECS) while saving $500+ in recovered billable time.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Setting Up Direct Debit */}
        <section id="setting-up-direct-debit">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Setting Up Direct Debit</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Setting up direct debit as a freelancer is simpler than most people think. Here is a step-by-step guide, including provider comparisons, DDR requirements, and how to handle failures.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Choosing a Provider</h3>
            <p className="text-gray-300 leading-relaxed">
              Five main providers serve Australian freelancers and small businesses. Each has different strengths:
            </p>
            <div className="space-y-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <span className="text-teal-400 text-xs font-bold">GC</span>
                  </div>
                  <h4 className="text-white font-semibold">GoCardless &mdash; 0.9% + $0.20 (capped at $3.00)</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The global leader in direct debit, with strong Australian support. Best for freelancers who also have international clients (supports SEPA in Europe and ACH in the US). Excellent API, dashboard, and Xero/MYOB integrations. No monthly fees &mdash; you only pay per transaction. The $3.00 cap means invoices over $311 cost the same $3.00 regardless of amount. Ideal for mid-to-high value invoices.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <span className="text-teal-400 text-xs font-bold">EZ</span>
                  </div>
                  <h4 className="text-white font-semibold">Ezidebit &mdash; $0.25&ndash;$0.55 per transaction</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Australian-founded, now owned by Global Payments. Strong in the fitness, childcare, and professional services sectors. Offers both direct debit and real-time payments. Flat per-transaction pricing makes costs predictable regardless of invoice amount. Higher-tier plans reduce the per-transaction cost but add a monthly fee. Good choice for high-volume, lower-value transactions.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <span className="text-teal-400 text-xs font-bold">ST</span>
                  </div>
                  <h4 className="text-white font-semibold">Stripe BECS Direct Debit &mdash; $0.30 flat</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The cheapest option for most freelancers. Stripe&apos;s BECS Direct Debit charges a flat $0.30 per successful transaction with no monthly fees and no percentage-based component. If you are already using Stripe for card payments, adding BECS Direct Debit is trivial &mdash; it uses the same dashboard, API, and reporting. Best for freelancers who want the simplest, cheapest direct debit setup with world-class developer tools.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <span className="text-teal-400 text-xs font-bold">PC</span>
                  </div>
                  <h4 className="text-white font-semibold">PayChoice &mdash; $0.30&ndash;$0.50 per transaction</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Australian provider offering direct debit alongside card processing and BPAY. Strong compliance support and dedicated account management for small businesses. Monthly platform fee starting at $29 but competitive per-transaction rates for businesses processing more than 50 transactions per month. Good for freelancers who want Australian-based support and a single provider for all payment types.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <span className="text-teal-400 text-xs font-bold">BP</span>
                  </div>
                  <h4 className="text-white font-semibold">BPoint (Commonwealth Bank) &mdash; $0.30&ndash;$0.45 per transaction</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  BPoint is Commonwealth Bank&apos;s business payment platform. If you already bank with CommBank, BPoint integrates seamlessly with your existing accounts. Custom pricing based on volume &mdash; competitive for businesses processing high volumes. Direct debit, BPAY, and card payments from a single platform. Best for CBA customers who want everything under one banking relationship.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">DDR Agreement Requirements</h3>
            <p className="text-gray-300 leading-relaxed">
              Every direct debit arrangement requires two documents, as mandated by AusPayNet&apos;s BECS rules:
            </p>
            <div className="space-y-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h4 className="text-white font-semibold mb-3">1. Direct Debit Request (DDR)</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  The DDR is the authorisation form signed by your client. It must include:
                </p>
                <ul className="space-y-1 text-gray-400 text-sm ml-4">
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5 flex-shrink-0">&bull;</span><span>Your business name and ABN</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5 flex-shrink-0">&bull;</span><span>Client&apos;s account name, BSB, and account number</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5 flex-shrink-0">&bull;</span><span>Debit amount (fixed or variable) and frequency</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5 flex-shrink-0">&bull;</span><span>Start date and duration of the arrangement</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5 flex-shrink-0">&bull;</span><span>Client&apos;s signature (digital signatures are accepted)</span></li>
                </ul>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h4 className="text-white font-semibold mb-3">2. DDR Service Agreement</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  A separate document (often provided as part of the DDR form) that must include AusPayNet mandatory clauses:
                </p>
                <ul className="space-y-1 text-gray-400 text-sm ml-4">
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5 flex-shrink-0">&bull;</span><span>How debits will be processed (dates, amounts, frequency)</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5 flex-shrink-0">&bull;</span><span>How the client will be notified of changes</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5 flex-shrink-0">&bull;</span><span>How to cancel or pause the arrangement</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5 flex-shrink-0">&bull;</span><span>Dispute resolution process</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5 flex-shrink-0">&bull;</span><span>Your obligation to keep their bank details confidential</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5 flex-shrink-0">&bull;</span><span>The client&apos;s right to request a refund for unauthorised transactions</span></li>
                </ul>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Most providers (GoCardless, Stripe, Ezidebit) supply compliant DDR templates that include all mandatory AusPayNet clauses. You do not need to draft these from scratch &mdash; but you should read the template to ensure you understand your obligations.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Failed Payment Handling</h3>
            <p className="text-gray-300 leading-relaxed">
              Failed direct debits (dishonours) are an inevitable part of the system. Here is how to handle them:
            </p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Dishonour fees:</strong> The client&apos;s bank typically charges a dishonour fee of $10&ndash;$35 for a failed direct debit (insufficient funds, account closed, etc.). Your provider may also charge $0.25&ndash;$1.00 per failed debit. Check whether your DDR Service Agreement allows you to pass these fees on to the client.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Automatic retry:</strong> Most providers automatically retry a failed debit after 3&ndash;5 business days. Configure your provider&apos;s retry settings to match your preference (1 retry, 2 retries, or manual-only).</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Client notification:</strong> When a debit fails, immediately notify the client with a professional email explaining the failure, the reason (if known), and next steps. Do not wait for the retry to fail as well.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Escalation:</strong> If retries fail, fall back to your standard collections process: manual invoice, payment reminder sequence, late payment interest, and ultimately formal demand if necessary.</span></li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8">Dispute Resolution (Direct Debit Guarantee)</h3>
            <p className="text-gray-300 leading-relaxed">
              The <strong className="text-white">Direct Debit Guarantee</strong> protects payers by allowing them to dispute any direct debit they believe was unauthorised. If a client disputes a debit through their bank:
            </p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span>The bank will contact you (via your provider) requesting evidence that the debit was authorised</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span>You must provide the signed DDR and any supporting documentation (invoice, contract, delivery proof)</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span>If you cannot prove authorisation, the funds are reversed from your account</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-1 flex-shrink-0">&bull;</span><span>Disputes are typically resolved within 28 days</span></li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              The best protection against disputes is a properly completed DDR, clear invoices, and a good relationship with your client. In practice, disputes on legitimate freelancer direct debits are extremely rare.
            </p>

            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">Recommendation for Most Freelancers</p>
              <p className="text-gray-400 text-sm">
                Start with <strong className="text-gray-200">Stripe BECS Direct Debit</strong>. It has the lowest per-transaction cost ($0.30 flat), no monthly fees, instant setup if you already have a Stripe account, and the most developer-friendly API if you want to integrate it with your invoicing workflow. For freelancers processing more than $30K/month, GoCardless&apos;s $3.00 cap makes it more cost-effective for large invoices.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-direct-debit">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built for Australian freelancers who want to <strong className="text-white">automate their invoicing and payment collection</strong>. Here is how it works alongside direct debit to eliminate late payments and streamline your cash flow.
            </p>

            <div className="grid gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Recurring Invoice Automation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set up <strong className="text-gray-200">recurring invoices on any schedule</strong> &mdash; weekly, fortnightly, monthly, or custom. InvoiceFlow automatically generates the invoice, applies the correct amount and payment terms, and sends it to your client. When paired with direct debit, the payment is collected automatically on the due date. Zero manual work after the initial setup. You can set different recurring schedules for different clients, adjust amounts as retainer scopes change, and pause or cancel recurring invoices at any time.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Payment Tracking Dashboard</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track every invoice and payment in real time: <strong className="text-gray-200">draft, sent, viewed, due soon, overdue, paid, and failed</strong>. See at a glance how much is outstanding, which clients have upcoming direct debit pulls, and which payments have been successfully collected. The aging report breaks down your receivables by current, 1&ndash;30 days, 31&ndash;60 days, and 60+ days overdue &mdash; with direct debit statuses clearly flagged alongside manual payments.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Pre-Debit Payment Reminders</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow sends <strong className="text-gray-200">automatic courtesy reminders before each direct debit pull</strong>, giving your client advance notice that funds will be withdrawn. This is not just good practice &mdash; it is a BECS compliance requirement for new arrangements. Reminders are sent 7 days before the debit date by default (customisable), ensuring clients have sufficient funds in their account and reducing the chance of failed payments. The reminder includes the amount, date, and your contact details.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Bank Feed Reconciliation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When direct debit payments settle in your bank account, InvoiceFlow <strong className="text-gray-200">automatically matches the deposit to the corresponding invoice</strong> using bank feed data. No more manually checking your bank statement and marking invoices as paid one by one. The system reconciles based on amount, date, and reference number, flagging any discrepancies for your review. This closes the loop from invoice creation to payment confirmation without manual intervention.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Late Payment Detection</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Even with direct debit, payments can fail. InvoiceFlow <strong className="text-gray-200">detects failed direct debits within hours</strong> and triggers your configured response: automatic retry notification, client email with alternative payment options, or escalation to your collections workflow. Failed payments are flagged on your dashboard with the failure reason (insufficient funds, account closed, etc.), so you can take targeted action. The system also tracks failure patterns &mdash; if a client&apos;s debit has failed twice in the last three months, InvoiceFlow alerts you to a potential cash flow risk.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">End-to-End Automation</p>
              <p className="text-gray-400 text-sm">
                With InvoiceFlow and direct debit combined, the entire invoicing cycle is automated: <strong className="text-gray-200">invoice creation &rarr; delivery &rarr; pre-debit reminder &rarr; payment collection &rarr; settlement &rarr; reconciliation &rarr; reporting</strong>. The average freelancer using InvoiceFlow with direct debit spends less than 30 minutes per month on invoice administration &mdash; down from 5&ndash;8 hours with manual processes. Use the <Link href="/tools/invoice-generator" className="text-teal-400 hover:text-teal-300 underline">Invoice Generator</Link> to create your first automated invoice today.
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-teal-400 transition-colors">
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
        <p className="text-gray-400 text-center mb-8">Free tools to automate payments, track invoices, and manage your freelance cash flow.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-teal-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-teal-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-teal-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on payment automation, invoicing, and cash flow management for freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-teal-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-teal-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-teal-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <div className="rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Chasing Payments. Start Collecting Them.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow gives Australian freelancers recurring invoice automation, direct debit integration, payment tracking, and bank feed reconciliation &mdash; so every invoice gets paid on time, every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/invoice-generator">
              <Button variant="secondary">Create Your First Invoice</Button>
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
