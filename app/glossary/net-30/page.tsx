import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Net 30 Payment Terms: What It Means & How Freelancers Should Use It — InvoiceFlow',
  description:
    'What does Net 30 mean on an invoice? Learn how Net 30 payment terms work, compare Net 7/14/30/60/90, manage cash flow, enforce payment terms, and discover which terms Australian freelancers should actually use. Includes late payment interest rates and follow-up templates.',
  keywords: [
    'net 30 meaning',
    'net 30 payment terms',
    'net 30 days invoice',
    'payment terms net 30 60 90',
    'net 30 for freelancers',
    'invoice payment terms australia',
    'net 30 vs due on receipt',
    'how to enforce net 30 payment terms',
  ],
  alternates: { canonical: '/glossary/net-30' },
  openGraph: {
    title: 'Net 30 Payment Terms: What It Means & How Freelancers Should Use It — InvoiceFlow',
    description:
      'The complete guide to Net 30 payment terms for Australian freelancers. Understand what Net 30 means, compare all common payment terms, manage cash flow impact, and learn how to enforce payment terms professionally.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/net-30',
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
    { '@type': 'ListItem', position: 3, name: 'Net 30', item: `${BASE_URL}/glossary/net-30` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Net 30 mean on an invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Net 30 means the full invoice amount is due within 30 calendar days from the invoice date. "Net" refers to the total amount owed after any discounts or adjustments, and "30" is the number of days the client has to pay. For example, if you issue an invoice on 1 March with Net 30 terms, payment is due by 31 March. The term originates from trade credit, where suppliers would extend 30 days of credit to buyers. Net 30 is the most widely used payment term in Australian business, though freelancers are increasingly favouring shorter terms like Net 14 or Net 7 to improve cash flow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should freelancers offer Net 30 payment terms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your client type and cash flow position. Net 30 is appropriate when working with established corporate clients or government agencies that have rigid procurement and accounts payable cycles. However, for most freelancers, shorter terms like Net 14 or Net 7 are preferable because they accelerate cash flow and reduce the risk of late payment. A good rule of thumb: use Net 30 only for trusted, repeat clients with a proven payment track record. For new clients or one-off projects, request a deposit upfront (30 to 50 percent) with the balance due on completion, or use Net 7 terms. The average Australian business takes 34 days to pay, meaning Net 30 invoices often arrive late.',
      },
    },
    {
      '@type': 'Question',
      name: 'What&apos;s the difference between Net 30 and Due in 30 Days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Functionally, Net 30 and "Due in 30 Days" mean the same thing: payment is expected within 30 calendar days. However, "Net 30" is the standard business and accounting term used in formal invoicing, contracts, and trade credit agreements. "Due in 30 Days" is a plain-English equivalent that is clearer for clients unfamiliar with accounting terminology. The key difference is that "Net 30" can be combined with early payment discounts (for example, "2/10 Net 30" means a 2 percent discount if paid within 10 days, otherwise the full amount is due in 30 days). The "Due in 30 Days" phrasing does not support this convention. For freelancers invoicing small businesses or individuals, "Due in 30 Days" may be clearer and reduce confusion.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I enforce Net 30 payment terms as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enforcing Net 30 starts before you send the invoice. First, include your payment terms in your contract or terms of engagement, signed before work begins. Second, state the payment terms clearly on every invoice, including the exact due date (not just "Net 30"), your bank details, and any late payment penalties. Third, send a polite reminder 7 days before the due date. Fourth, on the due date, send a firm but professional follow-up. Fifth, if payment is 14 days overdue, send a formal notice referencing your late payment clause and stating the interest that will apply. In Victoria, the Penalty Interest Rates Act 1983 sets a benchmark rate (currently 10.5 percent per annum) that you can reference. For amounts over $100,000, consider a letter of demand from a solicitor. For smaller amounts, VCAT or your state tribunal can hear disputes up to $10,000 to $25,000 depending on the jurisdiction.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most common payment terms in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common payment terms in Australian business are Net 30 (payment due in 30 days), which is the default for most B2B transactions, followed by Net 14 (increasingly popular among freelancers and small businesses), Net 7 (common for small projects and new client relationships), Due on Receipt (payment expected immediately upon receiving the invoice), End of Month or EOM (payment due at the end of the month the invoice is issued), and Net 60 or Net 90 (used by large corporates and government agencies). The Australian Small Business and Family Enterprise Ombudsman reports that the average payment time for Australian SMBs is approximately 34 days. For large businesses, the average extends to 40 to 55 days. The Payment Times Reporting Register requires large businesses (over $100 million annual revenue) to publicly report their payment times to small business suppliers.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-does-net-30-mean', label: '1. What Does Net 30 Mean?' },
  { id: 'common-payment-terms-compared', label: '2. Common Payment Terms Compared' },
  { id: 'which-payment-terms-for-freelancers', label: '3. Which Payment Terms Should Freelancers Use?' },
  { id: 'managing-cash-flow-net-30', label: '4. Managing Cash Flow with Net 30' },
  { id: 'enforcing-payment-terms', label: '5. Enforcing Payment Terms' },
  { id: 'invoiceflow-payment-terms', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices with payment terms, due dates, and bank details built in.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/payment-terms-calculator',
    name: 'Payment Terms Generator',
    description: 'Model different payment terms and see how they affect your cash flow and annual revenue.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    href: '/tools/late-payment-calculator',
    name: 'Late Payment Calculator',
    description: 'Calculate interest and penalties on overdue invoices using Australian GIC and penalty rates.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Set hourly and project rates that account for payment delays, tax, super, and business costs.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'When to register for GST, how to calculate it, and how it interacts with your payment terms and invoices.',
  },
];

export default function Net30GlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Net 30</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Pricing &amp; Billing
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Net 30:{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
              Payment Terms Explained for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Net 30 is the most common payment term in Australian business &mdash; but is it the right choice for your freelance invoices? This guide explains what Net 30 means, compares all standard payment terms (Net 7 through Net 90), shows you how to manage cash flow when clients take 30+ days to pay, and gives you the exact strategies to enforce your payment terms professionally.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
              </svg>
              <span>Payment Terms</span>
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
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 p-8">
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">30</span>
              <div>
                <p className="text-white font-medium text-sm">Net 30</p>
                <p className="text-gray-400 text-sm">30 calendar days from the invoice date to pay the full amount owed</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">34d</span>
              <div>
                <p className="text-white font-medium text-sm">Average AU Business Payment Time</p>
                <p className="text-gray-400 text-sm">Australian SMBs take an average of 34 days to pay &mdash; already past Net 30</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">62%</span>
              <div>
                <p className="text-white font-medium text-sm">Late Payment on Net 30</p>
                <p className="text-gray-400 text-sm">62% of Australian freelancers have experienced late payment on Net 30 invoices</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-green-400 text-xs font-bold">2%</span>
              <div>
                <p className="text-white font-medium text-sm">Typical Late Payment Interest</p>
                <p className="text-gray-400 text-sm">2% per month (24% p.a.) is the most common late payment interest charge for freelancers</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm py-1"
              >
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

        {/* Section 1: What Does Net 30 Mean? */}
        <section id="what-does-net-30-mean">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Does Net 30 Mean?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Net 30 means the full invoice amount is due within 30 calendar days from the invoice date.</strong> The word &quot;Net&quot; refers to the total amount owed after any discounts, credits, or adjustments have been applied. The number &quot;30&quot; specifies the payment window in days. So if you issue an invoice on 1 March with Net 30 terms, payment is due by 31 March.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This is not a new concept. Net 30 originates from <strong className="text-white">trade credit</strong> &mdash; the practice of suppliers extending short-term credit to buyers so they can receive goods immediately and pay later. In the pre-digital era, 30 days was considered a reasonable window for a business to receive an invoice by post, process it through their accounts payable department, approve it, and issue a cheque. While the mechanics of payment have changed dramatically (bank transfers now settle in 1&ndash;2 business days), the 30-day convention has persisted as the default in most industries.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">How Net 30 Works in Practice</h3>
            <p className="text-gray-300 leading-relaxed">
              When you write &quot;Net 30&quot; on your invoice, you are telling the client: <em className="text-gray-200">&quot;You have 30 calendar days from the date on this invoice to pay the full amount.&quot;</em> Here is how the timeline typically plays out:
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">Day 0</span>
                <div>
                  <p className="text-white font-medium text-sm">Invoice Issued</p>
                  <p className="text-gray-400 text-sm">You send the invoice with &quot;Payment Terms: Net 30&quot; and the specific due date (e.g., &quot;Due: 31 March 2026&quot;). Always include the exact due date &mdash; do not rely on the client calculating it.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">Day 1&ndash;7</span>
                <div>
                  <p className="text-white font-medium text-sm">Invoice Received &amp; Logged</p>
                  <p className="text-gray-400 text-sm">The client receives the invoice, verifies the work was completed, and enters it into their accounting system. For larger businesses, this may involve multiple approvers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">Day 23</span>
                <div>
                  <p className="text-white font-medium text-sm">Courtesy Reminder (Recommended)</p>
                  <p className="text-gray-400 text-sm">Send a polite payment reminder 7 days before the due date. This is not pestering &mdash; it is professional. Many invoices are paid late simply because they were forgotten or buried in an inbox.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">Day 30</span>
                <div>
                  <p className="text-white font-medium text-sm">Payment Due</p>
                  <p className="text-gray-400 text-sm">The invoice is now due. In an ideal world, payment lands in your account today. In practice, many clients will initiate the payment on Day 30, meaning it may take an additional 1&ndash;2 business days to clear.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Invoice Date vs. Receipt Date</h3>
            <p className="text-gray-300 leading-relaxed">
              An important distinction: Net 30 is calculated from the <strong className="text-white">invoice date</strong>, not the date the client receives or opens the invoice. This matters because some clients will argue they did not receive the invoice until several days after it was sent, effectively extending their payment window. To avoid this dispute:
            </p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span>Send invoices via email with a clear subject line (e.g., &quot;Invoice #1042 &mdash; Due 31 March 2026&quot;)</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span>Request a read receipt or use an invoicing tool that tracks when invoices are viewed</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span>Send invoices on the day the invoice date is set &mdash; do not back-date or forward-date</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span>Include both the invoice date and the due date prominently on every invoice</span></li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8">Calendar Days vs. Business Days</h3>
            <p className="text-gray-300 leading-relaxed">
              Unless explicitly stated otherwise, <strong className="text-white">Net 30 means 30 calendar days</strong>, not 30 business days. This is the universal interpretation in Australian business. If you meant business days, you would need to specify &quot;Net 30 Business Days&quot; (which equals approximately 6 calendar weeks). Weekends and public holidays count towards the 30 days. If the due date falls on a weekend or public holiday, payment is generally expected on the next business day.
            </p>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Key Takeaway</p>
              <p className="text-gray-400 text-sm">
                Net 30 is a <strong className="text-gray-200">credit arrangement</strong>, not just a payment deadline. When you offer Net 30 terms, you are essentially giving your client 30 days of interest-free credit. For freelancers, this means you have completed the work, delivered the value, and are now waiting to be compensated. Understanding this dynamic is essential for deciding whether Net 30 is appropriate for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Common Payment Terms Compared */}
        <section id="common-payment-terms-compared">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Payment Terms Compared</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Net 30 is just one of many standard payment terms. Understanding the full spectrum helps you choose the right terms for each client and project. Here is a comprehensive comparison of every common payment term you will encounter in Australian business:
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Term</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Meaning</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Best Use Case</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Freelancer Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">CIA</td>
                      <td className="py-3 px-4 text-gray-300">Cash in Advance &mdash; full payment before work begins</td>
                      <td className="py-3 px-4 text-gray-300">New clients, small one-off projects, high-risk clients</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Excellent</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">COD</td>
                      <td className="py-3 px-4 text-gray-300">Cash on Delivery &mdash; payment due upon delivery of completed work</td>
                      <td className="py-3 px-4 text-gray-300">Small projects, deliverable-based work, graphic design</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Excellent</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Due on Receipt</td>
                      <td className="py-3 px-4 text-gray-300">Payment expected immediately upon receiving the invoice</td>
                      <td className="py-3 px-4 text-gray-300">Completed projects, final milestone payments, urgent work</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Excellent</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Net 7</td>
                      <td className="py-3 px-4 text-gray-300">Payment due within 7 calendar days</td>
                      <td className="py-3 px-4 text-gray-300">Small projects, new clients, recurring weekly billing</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Very Good</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Net 14</td>
                      <td className="py-3 px-4 text-gray-300">Payment due within 14 calendar days</td>
                      <td className="py-3 px-4 text-gray-300">Freelance default &mdash; balances cash flow and client convenience</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Very Good</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Net 30</td>
                      <td className="py-3 px-4 text-gray-300">Payment due within 30 calendar days</td>
                      <td className="py-3 px-4 text-gray-300">B2B standard, corporate clients, government contracts</td>
                      <td className="py-3 px-4"><span className="text-yellow-400 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full">Acceptable</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Net 45</td>
                      <td className="py-3 px-4 text-gray-300">Payment due within 45 calendar days</td>
                      <td className="py-3 px-4 text-gray-300">Mid-size corporate clients, construction, manufacturing</td>
                      <td className="py-3 px-4"><span className="text-yellow-400 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full">Caution</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Net 60</td>
                      <td className="py-3 px-4 text-gray-300">Payment due within 60 calendar days</td>
                      <td className="py-3 px-4 text-gray-300">Large corporates, government, enterprise procurement</td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">Avoid</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Net 90</td>
                      <td className="py-3 px-4 text-gray-300">Payment due within 90 calendar days</td>
                      <td className="py-3 px-4 text-gray-300">Enterprise clients, large government projects only</td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">Avoid</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">EOM</td>
                      <td className="py-3 px-4 text-gray-300">End of Month &mdash; payment due at the end of the month invoice is issued</td>
                      <td className="py-3 px-4 text-gray-300">Retainer clients, monthly billing cycles, bookkeeping alignment</td>
                      <td className="py-3 px-4"><span className="text-yellow-400 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full">Acceptable</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Freelancer ratings reflect the impact on cash flow, late payment risk, and practical enforceability for solo operators. Corporate clients may require Net 30+ as a non-negotiable procurement policy.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">The 2/10 Net 30 Variation</h3>
            <p className="text-gray-300 leading-relaxed">
              You may encounter the notation <strong className="text-white">&quot;2/10 Net 30&quot;</strong> (also written as 2/10, n/30). This means the client receives a <strong className="text-white">2% discount if they pay within 10 days</strong>, otherwise the full amount is due in 30 days. While common in wholesale and manufacturing, this is less typical in freelance invoicing. The 2% discount for paying 20 days early works out to an annualised rate of approximately <strong className="text-white">37%</strong> &mdash; a significant cost. Most freelancers are better off setting shorter payment terms outright rather than incentivising early payment with expensive discounts.
            </p>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Pro Tip: Anchor High, Negotiate Down</p>
              <p className="text-gray-400 text-sm">
                Start by quoting <strong className="text-gray-200">Net 14 or Due on Receipt</strong> in your contracts. If the client pushes back and requests Net 30, you are negotiating from a position of strength. You can &quot;agree&quot; to Net 30 as a concession &mdash; rather than starting at Net 30 and having the client push for Net 60. The same anchoring psychology used in pricing applies to payment terms.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Which Payment Terms Should Freelancers Use? */}
        <section id="which-payment-terms-for-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Which Payment Terms Should Freelancers Use?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              There is no single &quot;best&quot; payment term for all situations. The right choice depends on <strong className="text-white">project size, client type, your cash flow position, and industry norms</strong>. Here is a decision framework to help you choose the right terms every time:
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">By Project Size</h3>
            <div className="space-y-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Under $1,000 &mdash; Due on Receipt or Net 7</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For small projects, the administrative overhead of chasing a late $500 invoice is disproportionate. Use <strong className="text-gray-200">Due on Receipt</strong> or <strong className="text-gray-200">Net 7</strong> to keep cash flowing. Better yet, require <strong className="text-gray-200">full payment upfront (CIA)</strong> for projects under $500. Small project clients who balk at immediate payment terms are often the same clients who take 60+ days to pay Net 30 invoices. Set the expectation early.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">$1,000&ndash;$5,000 &mdash; Net 14 or Net 30</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This is the sweet spot for most freelance projects. <strong className="text-gray-200">Net 14</strong> is the ideal default &mdash; it is professional, gives the client enough time to process payment, and keeps your cash cycle tight. Use <strong className="text-gray-200">Net 30</strong> only for established clients with a track record of paying on time, or when the client&apos;s procurement policy requires it. For projects at the higher end of this range, consider a <strong className="text-gray-200">50% deposit upfront</strong> with the balance on Net 14 upon completion.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">$5,000+ &mdash; Milestone Payments</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For large projects, <strong className="text-gray-200">never wait until the end to invoice the full amount</strong>. Structure milestone payments to spread the cash flow throughout the project. A typical structure is <strong className="text-gray-200">30% upfront, 40% at midpoint, 30% on completion</strong>. Each milestone invoice can use Net 14 terms. This protects you from scope creep (client has invested money so they have skin in the game), reduces your financial exposure (you are never owed more than 30&ndash;40% of the total at any point), and ensures consistent cash flow during multi-month projects.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">By Client Type</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">C</span>
                <div>
                  <p className="text-white font-medium text-sm">Corporate Clients (ASX-listed, multinationals)</p>
                  <p className="text-gray-400 text-sm">Expect Net 30 minimum. Many will insist on Net 45 or Net 60. Their accounts payable systems are rigid and slow. Price this into your rate &mdash; add 10&ndash;15% to your standard rate for extended payment terms. Always negotiate: some corporates will agree to Net 30 if you ask, even though their standard template says Net 60.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">S</span>
                <div>
                  <p className="text-white font-medium text-sm">SMBs and Small Businesses</p>
                  <p className="text-gray-400 text-sm">Net 14 is the sweet spot. SMBs typically have simpler approval processes and can pay faster than corporates. Many small business owners are freelancers themselves and understand cash flow pressure. Be firm on Net 14 &mdash; most SMBs will accept it without pushback.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">I</span>
                <div>
                  <p className="text-white font-medium text-sm">Individuals and Sole Traders</p>
                  <p className="text-gray-400 text-sm">Due on Receipt or Net 7. Individual clients do not have accounts payable departments &mdash; the decision-maker is the payer. There is no reason to wait 30 days. For individuals, a 50% deposit before starting work is strongly recommended to protect against non-payment.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Industry Norms in Australia</h3>
            <p className="text-gray-300 leading-relaxed">
              While you should set terms that work for <em className="text-gray-200">your</em> business, it helps to understand what is standard in your industry so you can negotiate effectively:
            </p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Web development and software:</strong> Net 14&ndash;30 with 30&ndash;50% deposit upfront. Milestone billing for projects over $5K.</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Graphic design and creative:</strong> 50% deposit, balance Due on Receipt or Net 7. Deliverables withheld until payment.</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Consulting and advisory:</strong> Net 14&ndash;30 for retainers, milestone payments for projects. Upfront day-rate billing is common.</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Writing and copywriting:</strong> 50% deposit, balance on delivery. Net 14 for ongoing retainer clients.</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Photography and videography:</strong> 30&ndash;50% deposit on booking, balance due before final files are delivered.</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Government contracts:</strong> Net 30&ndash;60 is standard. The Australian Government&apos;s Payment Times Reporting Register tracks large business payment behaviour.</span></li>
            </ul>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The Golden Rule</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Shorter payment terms for new clients, longer terms for trusted clients.</strong> You earn the privilege of extended credit through consistent on-time payment. Do not extend Net 30 to a client you have never worked with before. Start with Net 7 or Net 14, and if they pay reliably over 3&ndash;6 months, you can offer Net 30 as a sign of trust.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Managing Cash Flow with Net 30 */}
        <section id="managing-cash-flow-net-30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Managing Cash Flow with Net 30</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The biggest practical impact of Net 30 on freelancers is <strong className="text-white">cash flow</strong>. You have already done the work, but the money has not arrived yet. If multiple clients are on Net 30 terms, you can easily find yourself in a situation where you have tens of thousands of dollars in outstanding invoices but not enough cash in the bank to cover next week&apos;s expenses.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">The Cash Flow Impact: A Real Example</h3>
            <p className="text-gray-300 leading-relaxed">
              Consider a freelance developer earning $10,000 per month across 3 clients, all on Net 30 terms:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Month</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Work Done</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Invoiced</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Cash Received</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Cash Gap</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">January</td>
                      <td className="py-3 px-4 text-gray-300">$10,000</td>
                      <td className="py-3 px-4 text-gray-300">$10,000 (31 Jan)</td>
                      <td className="py-3 px-4 text-gray-300">$0</td>
                      <td className="py-3 px-4 text-red-400">-$10,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">February</td>
                      <td className="py-3 px-4 text-gray-300">$10,000</td>
                      <td className="py-3 px-4 text-gray-300">$10,000 (28 Feb)</td>
                      <td className="py-3 px-4 text-gray-300">$10,000 (Jan invoices)</td>
                      <td className="py-3 px-4 text-yellow-400">-$10,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">March</td>
                      <td className="py-3 px-4 text-gray-300">$10,000</td>
                      <td className="py-3 px-4 text-gray-300">$10,000 (31 Mar)</td>
                      <td className="py-3 px-4 text-gray-300">$10,000 (Feb invoices)</td>
                      <td className="py-3 px-4 text-yellow-400">-$10,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Even with perfect Net 30 payment, you always have ~$10,000 in outstanding receivables. If any client pays late, the gap widens quickly. With 3 clients on Net 30, one late payer can leave you $15,000&ndash;$20,000 short.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Strategies to Manage Cash Flow</h3>
            <div className="space-y-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">1. Require Deposits on All New Projects</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A <strong className="text-gray-200">30&ndash;50% deposit before starting work</strong> is the single most effective cash flow strategy for freelancers. It immediately reduces your exposure, confirms the client is serious, and provides working capital while you complete the project. Frame it as standard practice: &quot;A 50% deposit secures your project start date, with the balance invoiced on completion.&quot; Most clients expect this. Those who refuse are waving a red flag.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">2. Use Milestone Billing for Large Projects</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Break large projects into <strong className="text-gray-200">3&ndash;5 milestones with an invoice at each stage</strong>. A $15,000 project billed as a single Net 30 invoice means you wait up to 60+ days for full payment (project duration plus payment terms). The same project with milestones at $4,500 (upfront), $6,000 (midpoint), and $4,500 (completion) spreads the cash across the project timeline. Each milestone invoice uses your standard payment terms.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">3. Offer Early Payment Discounts Strategically</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The <strong className="text-gray-200">2/10 Net 30</strong> structure (2% discount for payment within 10 days) can be effective with corporate clients who have the cash but slow accounts payable processes. The discount gives the finance team an incentive to prioritise your invoice. However, the 2% cost is significant over time &mdash; on $120,000 annual revenue, that is $2,400 per year. Use this selectively, not as your default. An alternative: offer a 1% discount for same-week payment on large invoices where the cash flow benefit justifies the cost.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">4. Invoice Factoring as a Last Resort</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <Link href="/glossary/invoice-factoring" className="text-emerald-400 hover:text-emerald-300 underline">Invoice factoring</Link> means selling your unpaid invoices to a third party (factor) at a discount in exchange for immediate cash. The factor pays you 80&ndash;90% of the invoice value upfront, then collects from your client and pays you the remainder minus their fee (typically 1&ndash;5% of the invoice value). While this solves the immediate cash flow problem, it is expensive and can affect your client relationship. Consider factoring only if you have significant outstanding receivables and urgent cash needs &mdash; and only with established factoring providers (not predatory lenders).
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The Cash Flow Buffer Rule</p>
              <p className="text-gray-400 text-sm">
                As a freelancer on Net 30 terms, aim to maintain a <strong className="text-gray-200">cash buffer equal to at least 2 months of expenses</strong> in your business account. This covers you if a major client pays late, if you have a quiet month, or if unexpected expenses arise. With a $10,000/month expense base, that means keeping $20,000 in reserve. Build this buffer gradually &mdash; set aside 10&ndash;15% of every payment until you reach your target.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Enforcing Payment Terms */}
        <section id="enforcing-payment-terms">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Enforcing Payment Terms</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Setting Net 30 terms on your invoice is only half the battle. The other half is <strong className="text-white">enforcing those terms consistently</strong>. Enforcement starts before the invoice is sent and requires a systematic approach. Here is everything you need to know about getting paid on time &mdash; and what to do when you are not.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">1. Clear Contract Clauses</h3>
            <p className="text-gray-300 leading-relaxed">
              Your payment terms should be agreed in writing <strong className="text-white">before work begins</strong>. Include the following in your contract or terms of engagement:
            </p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Payment terms:</strong> &quot;All invoices are payable within 30 calendar days of the invoice date (Net 30).&quot;</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Late payment interest:</strong> &quot;A late payment fee of 2% per month (24% per annum) will be charged on overdue amounts, calculated from the due date.&quot;</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Suspension clause:</strong> &quot;Work will be suspended if any invoice remains unpaid for more than 14 days past the due date. Work will resume upon receipt of all outstanding payments.&quot;</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Recovery costs:</strong> &quot;The client agrees to pay all reasonable costs incurred in recovering overdue payments, including collection agency fees and legal costs.&quot;</span></li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8">2. Late Payment Interest in Australia</h3>
            <p className="text-gray-300 leading-relaxed">
              In Australia, you can charge interest on late payments <strong className="text-white">only if your contract or invoice explicitly states the rate</strong>. There is no automatic right to charge interest. Common reference rates include:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Rate</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Current (2025&ndash;26)</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Penalty Interest Rates Act 1983 (VIC)</td>
                      <td className="py-3 px-4 text-gray-300">10.5% p.a.</td>
                      <td className="py-3 px-4 text-gray-300">Penalty rate set by Victorian Government, reviewed every 6 months. Commonly referenced by Victorian freelancers.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">ATO General Interest Charge (GIC)</td>
                      <td className="py-3 px-4 text-gray-300">~11.36% p.a.</td>
                      <td className="py-3 px-4 text-gray-300">Updated quarterly based on the 90-day Bank Bill rate + 7%. The ATO uses this for overdue tax debts.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Custom Rate (Common)</td>
                      <td className="py-3 px-4 text-gray-300">2% per month (24% p.a.)</td>
                      <td className="py-3 px-4 text-gray-300">The most common rate used by freelancers and small businesses. Must be stated in your contract to be enforceable.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">RBA Cash Rate + Margin</td>
                      <td className="py-3 px-4 text-gray-300">~12&ndash;14% p.a.</td>
                      <td className="py-3 px-4 text-gray-300">Some contracts reference the RBA cash rate plus a fixed margin (e.g., cash rate + 8%). Adjusts automatically with rate changes.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">While you can set your own rate, courts may reduce excessive rates to a reasonable level. 2% per month (24% p.a.) is widely accepted as reasonable for commercial transactions in Australia.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">3. The Follow-Up Timeline</h3>
            <p className="text-gray-300 leading-relaxed">
              A systematic follow-up process is essential. Here is the timeline professional freelancers use to chase overdue Net 30 invoices:
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">D&ndash;7</span>
                <div>
                  <p className="text-white font-medium text-sm">7 Days Before Due Date &mdash; Courtesy Reminder</p>
                  <p className="text-gray-400 text-sm">&quot;Hi [Name], just a friendly reminder that Invoice #1042 for $3,500 is due on [date]. Please let me know if you need any clarification or updated bank details. Thank you!&quot; Tone: warm, professional, helpful.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-xs font-bold">D+1</span>
                <div>
                  <p className="text-white font-medium text-sm">Day After Due Date &mdash; Payment Confirmation</p>
                  <p className="text-gray-400 text-sm">&quot;Hi [Name], Invoice #1042 was due yesterday. If you have already made the payment, please disregard this message. If not, I would appreciate payment at your earliest convenience. Bank details are attached.&quot; Tone: firm, polite.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-xs font-bold">D+7</span>
                <div>
                  <p className="text-white font-medium text-sm">7 Days Overdue &mdash; Second Follow-Up</p>
                  <p className="text-gray-400 text-sm">&quot;Hi [Name], I am following up on Invoice #1042 for $3,500, which is now 7 days overdue. Could you confirm when I can expect payment? As per our agreement, late payment fees will apply to overdue amounts.&quot; Tone: direct, references contract.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">D+14</span>
                <div>
                  <p className="text-white font-medium text-sm">14 Days Overdue &mdash; Formal Notice</p>
                  <p className="text-gray-400 text-sm">&quot;Dear [Name], Invoice #1042 for $3,500 is now 14 days overdue. Late payment interest of 2% per month ($70.00) has been applied as per our agreement dated [date]. Please remit payment of $3,570.00 within 7 days. If I do not receive payment by [date], I will suspend all current work and consider further action.&quot; Tone: formal, assertive.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">D+30</span>
                <div>
                  <p className="text-white font-medium text-sm">30 Days Overdue &mdash; Final Demand</p>
                  <p className="text-gray-400 text-sm">Issue a formal <strong className="text-gray-200">letter of demand</strong> via email and registered post. State the total amount owing (including interest), a final payment deadline (typically 14 days), and the consequences of non-payment (debt collection, legal action, reporting to credit agencies). Consider having a solicitor draft this &mdash; a letter on legal letterhead often triggers immediate payment.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">4. Debt Recovery Options</h3>
            <p className="text-gray-300 leading-relaxed">
              If professional follow-up does not work, you have several options in Australia:
            </p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Small claims tribunal:</strong> VCAT (Victoria), NCAT (NSW), QCAT (Queensland), and equivalent state tribunals handle disputes up to $10,000&ndash;$25,000. The process is relatively inexpensive ($50&ndash;$500 filing fee) and does not require a lawyer.</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Debt collection agency:</strong> Third-party agencies charge 10&ndash;25% of the recovered amount. They handle all communication and can report non-payment to credit agencies. Use for amounts over $1,000 where direct follow-up has failed.</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Solicitor&apos;s letter of demand:</strong> A formal legal demand letter costs $200&ndash;$500 but often triggers immediate payment. The implied threat of legal action is powerful.</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Statutory demand (companies):</strong> For debts over $4,000 owed by a company (Pty Ltd), you can issue a statutory demand under the Corporations Act 2001. If the company does not pay or dispute within 21 days, you can apply to wind up the company. This is a serious tool &mdash; use only with legal advice.</span></li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8">5. Protecting Professional Relationships</h3>
            <p className="text-gray-300 leading-relaxed">
              The tension between getting paid and maintaining client relationships is real. Here is how to navigate it:
            </p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Always separate the person from the payment.</strong> Be warm in your communication but firm on the financial obligation. &quot;I really enjoy working with you, and I want to continue our partnership. To do that, I need invoices to be paid on time.&quot;</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Offer a payment plan if genuinely needed.</strong> If the client is having cash flow issues (not just being negligent), offering to split the overdue amount into 2&ndash;3 payments shows goodwill while still getting you paid.</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Document everything.</strong> Keep a record of all invoices, reminders, and communications. If the relationship breaks down and you need to pursue formal recovery, documentation is essential.</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Know when to walk away.</strong> A client who consistently pays late despite clear terms and follow-up is not a good client, regardless of the project value. The cost of chasing payment, the stress, and the cash flow disruption often exceed the revenue. Replace them with clients who respect your terms.</span></li>
            </ul>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Prevention is Better Than Recovery</p>
              <p className="text-gray-400 text-sm">
                The best debt recovery strategy is <strong className="text-gray-200">never needing it</strong>. Vet new clients before starting work (check their ABN on the ABR, look for reviews, ask for references). Require deposits upfront. Set clear terms in writing. Send reminders proactively. The vast majority of late payments are caused by disorganisation, not malice &mdash; a simple reminder 7 days before the due date prevents most overdue invoices before they happen.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-payment-terms">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Managing payment terms manually &mdash; tracking due dates, sending reminders, calculating interest, monitoring who has paid and who has not &mdash; is tedious and error-prone. InvoiceFlow automates the entire process so you can <strong className="text-white">focus on your work, not chasing invoices</strong>:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Automated Payment Terms</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set your <strong className="text-gray-200">default payment terms per client</strong> (Net 7, Net 14, Net 30, or custom) and InvoiceFlow automatically calculates the due date for every invoice. You can set different terms for different clients &mdash; Net 14 for your SMB clients, Net 30 for corporates &mdash; and the correct terms apply automatically when you create an invoice. The due date is displayed prominently on every invoice, with the exact calendar date (not just &quot;Net 30&quot;) so there is zero ambiguity.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Overdue Tracking &amp; Automated Reminders</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow tracks every invoice status in real time: <strong className="text-gray-200">draft, sent, viewed, due soon, overdue, and paid</strong>. Automated email reminders go out at your chosen intervals (7 days before due, on the due date, 7 days after, 14 days after) with professional, customisable templates. You see the full aging report at a glance &mdash; how much is current, how much is 1&ndash;30 days overdue, 31&ndash;60 days overdue, and 60+ days overdue. No more spreadsheets or manual tracking.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Late Payment Interest Calculation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When an invoice is overdue, InvoiceFlow <strong className="text-gray-200">automatically calculates interest based on your chosen rate</strong> (2% per month, ATO GIC rate, Penalty Interest Act rate, or custom). The interest is itemised on the overdue notice sent to the client, with a clear breakdown showing the original amount, the number of days overdue, the daily interest charge, and the total amount now owing. This removes the awkwardness of manually calculating and communicating interest charges &mdash; InvoiceFlow handles it professionally and consistently.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Cash Flow Forecasting</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow uses your outstanding invoices, payment terms, and each client&apos;s historical payment behaviour to <strong className="text-gray-200">forecast your cash flow for the next 30, 60, and 90 days</strong>. If a client who usually pays on Day 25 has an outstanding Net 30 invoice, InvoiceFlow predicts when that payment is likely to arrive &mdash; not just when it is due. This gives you a realistic picture of your incoming cash, helping you plan expenses, make investment decisions, and identify potential shortfalls before they happen. The forecast updates in real time as invoices are sent, viewed, and paid.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">From Manual to Automated</p>
              <p className="text-gray-400 text-sm">
                The average freelancer spends <strong className="text-gray-200">5&ndash;8 hours per month</strong> on invoice administration: creating invoices, tracking payments, sending reminders, and reconciling accounts. InvoiceFlow reduces this to under an hour. Set your payment terms once, and the system handles due date calculation, automated reminders, overdue tracking, interest calculation, and cash flow forecasting &mdash; all from a single dashboard. Use the <Link href="/tools/invoice-generator" className="text-emerald-400 hover:text-emerald-300 underline">Invoice Generator</Link> to see how it works.
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

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to manage payment terms, calculate interest, and get paid faster.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on payment terms, invoicing, and getting paid as a freelancer.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-emerald-500/40 transition-all duration-300"
            >
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

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Chasing Late Payments
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow gives Australian freelancers automated payment terms, overdue tracking, late payment interest calculation, and cash flow forecasting &mdash; so you spend less time chasing invoices and more time doing your best work.
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
