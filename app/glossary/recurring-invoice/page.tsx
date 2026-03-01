import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Recurring Invoice: How to Automate Billing & Get Paid on Time (Australia) — InvoiceFlow',
  description:
    'What is a recurring invoice? Learn how to set up automatic invoicing for retainers, subscriptions, and ongoing services. Guide for Australian freelancers with templates and best practices. Updated 2025-26.',
  keywords: [
    'recurring invoice meaning',
    'automatic invoicing australia',
    'recurring billing freelancer',
    'subscription invoicing',
    'how to set up recurring invoices',
    'recurring invoice template',
    'automatic invoice generator',
    'retainer invoice template',
    'monthly invoicing automation',
    'recurring payment invoicing australia',
  ],
  alternates: { canonical: '/glossary/recurring-invoice' },
  openGraph: {
    title: 'Recurring Invoice: How to Automate Billing & Get Paid on Time (Australia) — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about recurring invoices: how to set them up, types, best practices, common problems, and how InvoiceFlow automates the entire process.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/recurring-invoice',
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
    { '@type': 'ListItem', position: 3, name: 'Recurring Invoice', item: `${BASE_URL}/glossary/recurring-invoice` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a recurring invoice and a subscription?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A recurring invoice is a billing document sent at regular intervals (weekly, monthly, quarterly) for ongoing services. A subscription is a business model where customers pay regularly for access to a product or service. Recurring invoices are the mechanism used to bill for subscriptions, retainers, and ongoing service agreements. In Australia, recurring invoices must still meet all ATO tax invoice requirements — each one needs a unique invoice number, ABN, GST details, and accurate dates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do recurring invoices need unique invoice numbers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, absolutely. The ATO requires every tax invoice to have a unique identifying number, regardless of whether it\'s a one-off or recurring invoice. Each recurring invoice in the series must have its own sequential number. For example, INV-2025-045 for January, INV-2025-046 for February, etc. InvoiceFlow automatically generates unique sequential numbers for each recurring invoice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I change the amount on a recurring invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Recurring invoices can have fixed amounts (same every period) or variable amounts (based on hours worked, usage, etc.). If you need to change the amount, update the recurring invoice template. For significant price increases, give clients notice as per your contract terms — typically 30 days for retainer agreements. Issue a new invoice with the updated amount; do not modify previously issued invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should I handle GST on recurring invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GST on recurring invoices follows the same rules as any other tax invoice in Australia. If you\'re GST-registered (mandatory over $75K turnover), add 10% GST to your recurring invoice amount. Each recurring invoice should clearly show the GST amount and total including GST. Whether you account for GST on a cash or accrual basis determines when you report it on your BAS — when issued (accrual) or when paid (cash).',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a recurring invoice goes unpaid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Follow the same overdue invoice process as any other invoice: send an automatic reminder at 7 days overdue, follow up at 14 and 30 days, then consider pausing services. For retainer clients, your contract should specify what happens when payment is late — typically services are paused until payment is received. InvoiceFlow can automatically send payment reminders and flag overdue recurring invoices.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-recurring-invoice', label: '1. What Is a Recurring Invoice?' },
  { id: 'types-of-recurring-invoices', label: '2. Types of Recurring Invoices' },
  { id: 'setting-up-recurring-invoices', label: '3. Setting Up Recurring Invoices' },
  { id: 'best-practices', label: '4. Best Practices for Recurring Billing' },
  { id: 'common-problems', label: '5. Common Problems & Solutions' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional recurring invoice templates with automatic numbering and GST calculations.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/late-payment-calculator',
    name: 'Late Payment Calculator',
    description: 'Calculate interest and fees on overdue recurring invoices to recover what you are owed.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/payment-receipt-generator',
    name: 'Payment Receipt Generator',
    description: 'Generate payment receipts for each recurring invoice payment to keep your records complete.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-email-template-generator',
    name: 'Invoice Email Generator',
    description: 'Create professional email templates for sending recurring invoices and payment reminders.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/invoicing-basics',
    name: 'Invoicing Basics',
    description: 'Everything you need to know about creating, sending, and managing invoices as an Australian freelancer.',
  },
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies and automation tips to reduce payment delays and improve your cash flow.',
  },
  {
    href: '/guides/retainer-guide',
    name: 'Retainer Agreements Guide',
    description: 'How to structure retainer agreements, set pricing, and bill recurring clients with confidence.',
  },
];

export default function RecurringInvoiceGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Recurring Invoice</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Billing &amp; Invoicing
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Recurring Invoice{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            An invoice automatically generated and sent at regular intervals for ongoing services, retainers, or subscriptions. Set it up once, and never miss a billing cycle again. Here&apos;s how Australian freelancers can automate their invoicing and get paid on time, every time.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">67%</span>
              <div>
                <p className="text-white font-medium text-sm">More Stable Income</p>
                <p className="text-gray-400 text-sm">Freelancers with at least one recurring client report more stable income</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">12x</span>
              <div>
                <p className="text-white font-medium text-sm">Predictable Revenue</p>
                <p className="text-gray-400 text-sm">Annual recurring invoices per monthly retainer &mdash; predictable revenue</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$0</span>
              <div>
                <p className="text-white font-medium text-sm">Cost of Forgotten Invoices</p>
                <p className="text-gray-400 text-sm">Automation means you never miss a billing cycle</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">7d</span>
              <div>
                <p className="text-white font-medium text-sm">Faster Payments</p>
                <p className="text-gray-400 text-sm">Average payment speed improvement with automated recurring invoicing</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm py-1"
              >
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

        {/* Section 1: What Is a Recurring Invoice? */}
        <section id="what-is-recurring-invoice">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Recurring Invoice?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A recurring invoice is a billing document that is <strong className="text-white">automatically generated and sent at regular intervals</strong> for ongoing services, retainers, or subscriptions. Unlike one-off invoices that are created manually for each project or deliverable, recurring invoices follow a set schedule &mdash; weekly, fortnightly, monthly, quarterly, or annually &mdash; and are issued automatically without manual intervention.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers, recurring invoices are critical when you have <strong className="text-white">retainer clients, ongoing maintenance contracts, or subscription-based services</strong>. Instead of remembering to create and send an invoice at the start of every month, you set up the recurring invoice once and let your invoicing software handle the rest. This eliminates forgotten invoices, reduces administrative overhead, and ensures consistent cash flow.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In Australia, recurring invoices must still comply with all <strong className="text-white">ATO tax invoice requirements</strong>. Each invoice in the recurring series needs a unique invoice number, your ABN, a clear description of the services provided, the GST amount (if registered), the billing period dates, and your standard payment terms. The fact that an invoice is automatically generated does not exempt it from any compliance obligations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The power of recurring invoices lies in <strong className="text-white">predictability</strong>. Both you and your client know exactly when the next invoice will arrive, what it will contain, and when payment is due. This predictability transforms the freelancer-client relationship from transactional (project-by-project) to ongoing (partnership-based), which typically leads to higher client retention and more stable revenue.
            </p>
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Key Distinction</p>
              <p className="text-gray-400 text-sm">
                A recurring invoice is not the same as a standing order or direct debit. A recurring invoice is a <strong className="text-gray-200">billing document you send to the client</strong>, who then makes payment. A direct debit automatically pulls payment from the client&apos;s account. Many freelancers combine both &mdash; sending a recurring invoice for records and compliance, while also having a direct debit arrangement for automatic payment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Types of Recurring Invoices */}
        <section id="types-of-recurring-invoices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of Recurring Invoices</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Not all recurring invoices are the same. The type you use depends on your service model, pricing structure, and client agreements. Here are the six most common types of recurring invoices used by Australian freelancers.
            </p>

            {/* Types Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Type</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Description</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Fixed-Amount Retainer</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Same amount billed every period for an agreed scope of work</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$2,000/month for website maintenance and support</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Variable / Time-Based</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Amount varies based on hours tracked or work completed each period</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">32 hours at $120/hr = $3,840 for March development work</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Milestone-Based</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Triggered by project phase completion rather than calendar dates</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$5,000 upon completion of design phase, $5,000 upon development</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Subscription</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Fixed price for ongoing access to a service or product</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$499/month for managed hosting and monitoring</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Deposit + Recurring</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Upfront deposit followed by regular monthly payments</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$3,000 deposit then $1,500/month for 6 months</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Usage-Based</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Metered billing based on consumption or usage metrics</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">$0.05 per API call, billed monthly based on actual usage</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Freelancer Tip</p>
              <p className="text-gray-400 text-sm">
                For most Australian freelancers, the <strong className="text-gray-200">fixed-amount retainer</strong> is the simplest and most predictable option. It reduces scope discussions each month and gives both you and your client certainty. If your workload genuinely varies, consider a <strong className="text-gray-200">hybrid approach</strong> &mdash; a base retainer fee plus variable hours billed at an agreed rate for work beyond the agreed scope.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Setting Up Recurring Invoices */}
        <section id="setting-up-recurring-invoices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Setting Up Recurring Invoices</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Setting up recurring invoices correctly from the start saves you hours of administrative work and prevents billing errors. Follow this step-by-step checklist to configure your recurring invoices for Australian compliance and maximum efficiency.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Define the Billing Schedule</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Choose the frequency that matches your service agreement: <strong className="text-gray-200">weekly, fortnightly, monthly, or quarterly</strong>. Monthly is the most common for retainer and subscription billing. Align your billing cycle with the start of the calendar month for simplicity &mdash; invoicing on the 1st for services rendered during that month, or on the last day for the preceding month.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Set the Correct Start and End Dates</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Specify when the recurring invoices should <strong className="text-gray-200">begin and when they should stop</strong>. For open-ended retainers, you can set an indefinite end date and cancel manually when the engagement ends. For fixed-term contracts, set the end date to match the contract term so invoices stop automatically.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Configure the Invoice Template</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Ensure your recurring invoice template includes all <strong className="text-gray-200">ATO-required fields</strong>: your ABN, the client&apos;s details, a unique sequential invoice number, GST amount (if registered), payment terms (e.g., Net 14), and your preferred payment methods. Set up your template once and every recurring invoice will inherit these details.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Include Clear Scope and Description</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Each recurring invoice should clearly describe <strong className="text-gray-200">what services are covered</strong> and the billing period. For example: &quot;Monthly website maintenance and support &mdash; March 2026&quot; rather than just &quot;Services rendered.&quot; This clarity prevents disputes and gives clients confidence in what they are paying for each period.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Set Up Automatic Sending</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Configure your invoicing software to <strong className="text-gray-200">automatically email invoices</strong> to your client on the scheduled date. This removes the manual step of remembering to send each invoice. InvoiceFlow can send invoices automatically with a professional email template, or you can choose to review each invoice before it is sent.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Configure Payment Reminders</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Set up <strong className="text-gray-200">automatic payment reminders</strong> for overdue recurring invoices. A typical reminder sequence is: a friendly nudge at 3 days overdue, a firmer reminder at 7 days, and a final notice at 14 days. Automated reminders dramatically improve payment speed without damaging client relationships.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">7</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Include Terms for Price Changes and Cancellation</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Your recurring invoice setup should reference your <strong className="text-gray-200">contract terms for price adjustments and cancellation</strong>. Include a note on the invoice template such as &quot;Rates subject to annual review with 30 days&apos; notice&quot; and ensure your contract specifies the notice period required to cancel the recurring arrangement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Essential Fields */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-3">Essential Fields for Every Recurring Invoice</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Unique invoice number (sequential)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Your ABN
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Service description
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Amount (ex-GST and inc-GST)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  GST amount
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Payment terms (e.g., Net 14)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Billing period dates
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Payment methods accepted
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Best Practices for Recurring Billing */}
        <section id="best-practices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Best Practices for Recurring Billing</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Following these best practices will help you maintain professional client relationships, minimise payment delays, and keep your recurring billing compliant with Australian regulations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  Use a Written Agreement
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Always have a <strong className="text-gray-200">signed contract or service agreement</strong> before starting recurring billing. The agreement should specify the scope of work, billing frequency, payment terms, price review process, and cancellation notice period. This protects both you and your client.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  Invoice on the Same Day
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Send invoices on the <strong className="text-gray-200">same day each period</strong> for consistency. If you invoice on the 1st of every month, your client knows exactly when to expect it and can plan their payments accordingly. Consistency builds trust and reduces payment friction.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                  Include the Billing Period
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Always specify <strong className="text-gray-200">which period the invoice covers</strong> (e.g., &quot;Services for March 2026&quot;). This prevents confusion about what work is being billed, makes it easier for clients to approve payment, and creates a clear audit trail for your records and BAS lodgement.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                  Offer Multiple Payment Methods
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Make it easy for clients to pay by accepting <strong className="text-gray-200">bank transfer, credit card, and PayID</strong>. The fewer barriers to payment, the faster you get paid. Include all payment details on every recurring invoice so clients do not have to look them up.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                  Automate Payment Reminders
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Set up automatic reminders at <strong className="text-gray-200">3, 7, and 14 days overdue</strong>. Automated reminders are polite, consistent, and remove the awkwardness of chasing payments manually. Most clients simply forget &mdash; a gentle nudge is all it takes.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Review Pricing Annually
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Schedule an <strong className="text-gray-200">annual pricing review</strong> for all recurring invoices. Costs increase over time &mdash; your rates should too. Give clients at least 30 days&apos; notice before any price change, and frame it as a value discussion rather than just a price increase.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                  </svg>
                  Keep Detailed Records
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Maintain <strong className="text-gray-200">complete records of all recurring invoices</strong> for BAS lodgement and tax time. The ATO requires you to keep business records for at least five years. Use invoicing software that automatically stores and organises your invoice history.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>
                  Have a Clear Cancellation Policy
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Define a clear <strong className="text-gray-200">cancellation and pause policy</strong> in your contract. Specify the notice period required (typically 30 days), how final invoices are handled, and whether partial-period billing applies. This prevents disputes when a retainer arrangement ends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Common Problems & Solutions */}
        <section id="common-problems">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Problems &amp; Solutions</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Even with automation, recurring invoicing can hit snags. Here are the most common problems freelancers face with recurring billing and practical solutions for each one.
            </p>

            <div className="space-y-4 mt-6">
              {/* Problem 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Client Forgets to Pay</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      <strong className="text-gray-200">Solution:</strong> Set up automatic payment reminders at 3, 7, and 14 days overdue. For repeat offenders, consider requiring a <strong className="text-gray-200">direct debit arrangement</strong> where payment is automatically pulled from their account on the due date. This eliminates the &quot;I forgot&quot; excuse entirely.
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Scope Creep on Retainers</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      <strong className="text-gray-200">Solution:</strong> Define a <strong className="text-gray-200">clear scope document</strong> that specifies exactly what is included in the retainer. Anything outside this scope requires a change request and additional billing. Review scope boundaries with the client quarterly and adjust the retainer amount if the workload has consistently exceeded the agreed scope.
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Price Increase Pushback</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      <strong className="text-gray-200">Solution:</strong> Give at least <strong className="text-gray-200">30 days&apos; notice</strong> before any price increase and frame it as a value conversation. Prepare a summary of the work delivered, results achieved, and market rate comparisons. Most clients accept reasonable increases when they can see the value they are receiving.
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">GST Calculation Errors</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      <strong className="text-gray-200">Solution:</strong> Use invoicing software that <strong className="text-gray-200">automatically calculates GST</strong> on every recurring invoice. Manual GST calculations across dozens of recurring invoices each quarter is a recipe for errors. InvoiceFlow handles GST automatically, ensuring every invoice shows the correct ex-GST amount, GST amount, and total including GST.
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Irregular Payment Schedules</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      <strong className="text-gray-200">Solution:</strong> Standardise all recurring invoices to <strong className="text-gray-200">calendar month billing</strong>. Avoid custom billing cycles (e.g., &quot;every 6 weeks&quot;) that create confusion and make reconciliation harder. If a client starts mid-month, pro-rate the first invoice and then switch to full calendar month billing from the following month.
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem 6 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Late Invoice Sending</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      <strong className="text-gray-200">Solution:</strong> Automate invoice generation and delivery entirely. If you are manually creating and sending recurring invoices, you will inevitably forget or send them late &mdash; which delays payment by the same number of days. <strong className="text-gray-200">Set up automation once</strong> and let your software handle the rest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built specifically for Australian freelancers who want to automate their recurring billing without losing control. Here&apos;s how it makes recurring invoicing effortless.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Automatic Invoice Generation</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Set up your recurring invoice once with the schedule, amount, and template. InvoiceFlow automatically creates and sends each invoice on the scheduled date with a unique sequential number, correct billing period, and all ATO-required fields. No manual intervention needed.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Smart Payment Reminders</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Automatic follow-ups at configurable intervals &mdash; 3, 7, and 14 days overdue by default. Each reminder escalates in tone while remaining professional. You can customise the reminder schedule, email templates, and even pause reminders for specific clients.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Recurring Revenue Dashboard</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Track your Monthly Recurring Revenue (MRR), client retention rates, and payment patterns at a glance. See which recurring clients are paying on time, which are consistently late, and identify trends in your recurring revenue over time.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">GST-Compliant Templates</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Every recurring invoice generated by InvoiceFlow meets ATO tax invoice requirements out of the box. Your ABN, GST calculations, unique invoice numbers, and billing period dates are all handled automatically &mdash; so you never have to worry about compliance.
                </p>
              </div>
            </div>

            {/* Bonus Feature */}
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Set It and Forget It</p>
              <p className="text-gray-400 text-sm">
                The biggest advantage of InvoiceFlow&apos;s recurring invoicing is that it <strong className="text-gray-200">eliminates administrative overhead entirely</strong>. Once you configure a recurring invoice, every aspect is handled automatically: creation, numbering, GST calculation, delivery, and payment reminders. You focus on the work &mdash; InvoiceFlow handles the billing.
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
              { href: '/glossary/retainer', label: 'Retainer' },
              { href: '/glossary/payment-terms', label: 'Payment Terms' },
              { href: '/glossary/overdue-invoice', label: 'Overdue Invoice' },
              { href: '/glossary/billing-cycle', label: 'Billing Cycle' },
              { href: '/glossary/accounts-receivable', label: 'Accounts Receivable' },
            ].map((term) => (
              <Link
                key={term.href}
                href={term.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-300 text-sm hover:border-amber-500/40 hover:text-amber-400 transition-all"
              >
                <svg className="w-3.5 h-3.5 text-amber-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <p className="text-gray-400 text-center mb-8">Free tools to help you create, manage, and automate your recurring invoices.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-amber-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on invoicing, payment strategies, and retainer agreements for freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-amber-500/40 transition-all duration-300"
            >
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
            Automate Your Recurring Invoices and Never Miss a Payment
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers set up recurring invoices, automate payment reminders, and track recurring revenue &mdash; all with ATO-compliant templates. Start for free and get paid on time, every time.
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
