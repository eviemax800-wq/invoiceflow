import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Accounts Payable: What It Means, AP vs AR & How Freelancers Manage It in Australia — InvoiceFlow',
  description:
    'What is accounts payable? Learn the difference between accounts payable and accounts receivable, how to manage AP as a freelancer in Australia, GST input tax credits, BAS reporting, and common AP mistakes. ATO-accurate for 2025-26.',
  keywords: [
    'accounts payable meaning',
    'accounts payable vs accounts receivable',
    'AP management freelancer australia',
    'accounts payable process',
    'what is accounts payable',
    'accounts payable definition',
    'AP vs AR difference',
    'accounts payable GST credits',
    'accounts payable BAS reporting',
    'accounts payable sole trader',
    'managing bills freelancer australia',
    'accounts payable tax deduction',
  ],
  alternates: { canonical: '/glossary/accounts-payable' },
  openGraph: {
    title: 'Accounts Payable: What It Means, AP vs AR & How Freelancers Manage It in Australia — InvoiceFlow',
    description:
      'Everything you need to know about accounts payable: definition, AP vs AR comparison, managing AP as a freelancer, GST input tax credits, BAS reporting, common mistakes, and how InvoiceFlow helps you stay on top of expenses.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/accounts-payable',
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
    { '@type': 'ListItem', position: 3, name: 'Accounts Payable', item: `${BASE_URL}/glossary/accounts-payable` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between accounts payable and accounts receivable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Accounts payable (AP) is money you owe to suppliers, vendors, and service providers — it is a liability on your balance sheet. Accounts receivable (AR) is money owed to you by clients for work you have completed — it is an asset on your balance sheet. In simple terms: AP is what you pay out, AR is what you collect in. For freelancers, AR is typically the larger focus (getting paid by clients), but AP matters too — tracking your software subscriptions, subcontractor payments, insurance premiums, and other business expenses ensures you claim every tax deduction and GST credit you are entitled to.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do freelancers need to track accounts payable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. While freelancers often focus on accounts receivable (getting paid), tracking accounts payable is equally important for maintaining a healthy business. Most freelancers have recurring AP items including software subscriptions (Adobe, Canva, accounting tools), domain and hosting fees, professional development courses, insurance premiums, and subcontractor payments. Tracking these expenses ensures you claim all eligible tax deductions, recover GST input credits on your BAS, avoid paying for unused subscriptions, and have accurate financial records. The ATO requires you to keep records of all business expenses for at least 5 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I claim GST credits on accounts payable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if you are GST-registered (mandatory once your turnover exceeds $75,000, or voluntary below that threshold), you can claim GST input tax credits on business purchases that include GST. The credit is 1/11th of the GST-inclusive price. To claim, you must hold a valid tax invoice from the supplier, the purchase must be for business purposes (not personal), the supplier must be GST-registered, and you must report the credit on your BAS. For example, if you pay $110 (inc. GST) for a software subscription, you can claim a $10 GST input tax credit on your next BAS. Keep all tax invoices for at least 5 years as the ATO may request them during an audit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should I keep accounts payable records?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO requires you to keep records of all business transactions — including accounts payable records such as supplier invoices, receipts, and proof of payment — for a minimum of 5 years from the date you lodge your tax return for that financial year. Records can be kept digitally (scanned copies, cloud storage, accounting software) as long as they are legible and complete. For GST purposes, you must retain tax invoices to support any input tax credits you have claimed. If you are ever audited, the ATO will request these records as evidence of legitimate business deductions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I pay accounts payable late?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paying accounts payable late can have several consequences: suppliers may charge late payment fees or interest (typically 1-2% per month), you may lose access to early payment discounts (commonly 2% for payment within 10 days), your reputation with suppliers and subcontractors can be damaged making it harder to negotiate favourable terms in the future, some suppliers may suspend services or refuse future work, and for essential services like insurance or professional memberships, late payment could result in a lapse in coverage. For ATO obligations specifically (such as PAYG withholding, GST remittances, or superannuation), late payment incurs the General Interest Charge (GIC) of approximately 11.36% per annum plus potential penalties.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-accounts-payable', label: '1. What Is Accounts Payable?' },
  { id: 'ap-vs-ar', label: '2. Accounts Payable vs Accounts Receivable' },
  { id: 'managing-ap-freelancer', label: '3. Managing AP as a Freelancer' },
  { id: 'ap-bas-tax', label: '4. AP and Your BAS / Tax Return' },
  { id: 'common-ap-mistakes', label: '5. Common AP Mistakes Freelancers Make' },
  { id: 'invoiceflow-ap', label: '6. Managing AP with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST on purchases and expenses instantly. Work out input tax credits for your AP items.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-and-loss-generator',
    name: 'Profit & Loss Generator',
    description: 'Generate a P&L statement that shows your expenses (AP) against your revenue (AR) for any period.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-deduction-finder',
    name: 'Tax Deduction Finder',
    description: 'Discover tax deductions you may be missing from your accounts payable. Industry-specific suggestions.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/bas-preparation-checklist',
    name: 'BAS Preparation Checklist',
    description: 'Step-by-step checklist to prepare your BAS, including AP expense tracking and GST input credits.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'Understanding GST obligations including input tax credits on AP, BAS reporting, and registration thresholds.',
  },
  {
    href: '/guides/tax-guide-for-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'The complete guide to managing tax as a freelancer — deductions, obligations, quarterly payments, and EOFY prep.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide',
    description: 'End of financial year checklist for freelancers: reconcile AP, claim deductions, and prepare for tax time.',
  },
];

export default function AccountsPayableGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-indigo-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Accounts Payable</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Cash Flow &amp; Payments
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Accounts Payable:{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
              What It Means, AP vs AR &amp; How to Manage It
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Accounts payable (AP) is the money your business owes to suppliers, vendors, and service providers for goods or services you&apos;ve received but haven&apos;t yet paid for. For freelancers, AP includes everything from subcontractor invoices and software subscriptions to insurance premiums and professional development &mdash; and managing it properly is critical for cash flow, tax deductions, and GST credits.
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
              <span>ATO-Accurate 2025-26</span>
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
        <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 p-8">
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">30-45</span>
              <div>
                <p className="text-white font-medium text-sm">AP Turnover Days</p>
                <p className="text-gray-400 text-sm">Average days Australian small businesses take to pay their suppliers</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">$2K</span>
              <div>
                <p className="text-white font-medium text-sm">Avg Monthly AP</p>
                <p className="text-gray-400 text-sm">Typical freelancer monthly accounts payable ranges from $500 to $2,000</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">1/11</span>
              <div>
                <p className="text-white font-medium text-sm">GST Credits Recoverable</p>
                <p className="text-gray-400 text-sm">Claim 1/11th of GST-inclusive purchases back as input tax credits on your BAS</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">5yr</span>
              <div>
                <p className="text-white font-medium text-sm">ATO Record Requirement</p>
                <p className="text-gray-400 text-sm">Keep all AP records, receipts, and tax invoices for a minimum of 5 years</p>
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

        {/* Section 1: What Is Accounts Payable? */}
        <section id="what-is-accounts-payable">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Accounts Payable?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Accounts payable (AP) is the <strong className="text-white">money your business owes to other businesses or individuals for goods and services you have received but not yet paid for</strong>. It represents a short-term financial obligation &mdash; a promise to pay. On your balance sheet, accounts payable is classified as a <strong className="text-white">current liability</strong>, meaning it is expected to be settled within the normal operating cycle of your business (typically within 30 to 90 days).
            </p>
            <p className="text-gray-300 leading-relaxed">
              Think of accounts payable as the flip side of invoicing. When you send an invoice to a client, that creates an <strong className="text-white">accounts receivable</strong> for you &mdash; money owed to you. When a supplier sends an invoice to you, that creates an <strong className="text-white">accounts payable</strong> for your business &mdash; money you owe them. Every business transaction creates an AP for one party and an AR for the other.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Many freelancers assume accounts payable doesn&apos;t apply to them &mdash; they think of AP as something only &quot;real businesses&quot; need to worry about. In reality, almost every freelancer has accounts payable, even if they don&apos;t use that terminology. Every bill you receive, every subscription you pay, every subcontractor invoice that lands in your inbox &mdash; that&apos;s accounts payable.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Common AP Items for Freelancers</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Subcontractor payments</p>
                    <p className="text-gray-400 text-sm">Invoices from other freelancers or contractors you hire for parts of a project &mdash; a developer you subcontract frontend work to, a copywriter you bring in for content, or a virtual assistant handling admin tasks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Software subscriptions</p>
                    <p className="text-gray-400 text-sm">Adobe Creative Cloud (~$54/mo), Canva Pro (~$18/mo), Figma, Slack, Notion, project management tools, cloud storage, email marketing platforms, accounting software. The average freelancer runs 8-12 SaaS subscriptions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Domain &amp; hosting fees</p>
                    <p className="text-gray-400 text-sm">Domain registrations, web hosting, CDN services, SSL certificates, email hosting. Often billed annually, which makes them easy to forget about when tracking expenses.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Professional development</p>
                    <p className="text-gray-400 text-sm">Online courses, industry conferences, certifications, books, workshops. These are tax-deductible when directly related to your current business activities and are a legitimate AP item.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Insurance premiums</p>
                    <p className="text-gray-400 text-sm">Professional indemnity insurance, public liability insurance, income protection, cyber liability. Often paid monthly or annually and 100% tax-deductible as a business expense.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Co-working space &amp; office supplies</p>
                    <p className="text-gray-400 text-sm">Hot desk or dedicated desk memberships, printer ink and paper, stationery, equipment purchases under $300 (instantly deductible), phone and internet bills (business portion).</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">AP Is a Liability, Not an Expense</p>
              <p className="text-gray-400 text-sm">
                An important distinction: accounts payable is a <strong className="text-gray-200">liability</strong> on your balance sheet, not an expense on your profit &amp; loss statement. The expense is recorded when the goods or services are consumed (under accrual accounting) or when payment is made (under cash accounting). AP simply represents the obligation to pay &mdash; the gap between receiving a supplier&apos;s invoice and actually settling it. Once you pay the invoice, the AP liability decreases and your cash balance decreases by the same amount.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Accounts Payable vs Accounts Receivable */}
        <section id="ap-vs-ar">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Accounts Payable vs Accounts Receivable</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Accounts payable (AP) and accounts receivable (AR) are <strong className="text-white">two sides of the same coin</strong>. Understanding the difference is fundamental to managing your freelance business finances. In the simplest terms: <strong className="text-white">AR is money coming in, AP is money going out</strong>. Together, they determine your cash flow position &mdash; and cash flow is what keeps your business alive.
            </p>

            {/* Comparison Table */}
            <div className="rounded-xl bg-gray-900/50 border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="px-5 py-4 text-left text-sm font-semibold text-white">Factor</th>
                    <th className="px-5 py-4 text-left text-sm font-semibold text-indigo-400">Accounts Payable (AP)</th>
                    <th className="px-5 py-4 text-left text-sm font-semibold text-blue-400">Accounts Receivable (AR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30">
                    <td className="px-5 py-3 text-gray-300 text-sm font-medium">Definition</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Money you owe to suppliers</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Money clients owe to you</td>
                  </tr>
                  <tr className="bg-gray-800/30">
                    <td className="px-5 py-3 text-gray-300 text-sm font-medium">Balance sheet position</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Current liability</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Current asset</td>
                  </tr>
                  <tr className="bg-gray-800/30">
                    <td className="px-5 py-3 text-gray-300 text-sm font-medium">Who owes whom</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">You owe the supplier</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">The client owes you</td>
                  </tr>
                  <tr className="bg-gray-800/30">
                    <td className="px-5 py-3 text-gray-300 text-sm font-medium">Created when</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">You receive a supplier invoice</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">You send a client invoice</td>
                  </tr>
                  <tr className="bg-gray-800/30">
                    <td className="px-5 py-3 text-gray-300 text-sm font-medium">Freelancer examples</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Adobe subscription, subcontractor fee, insurance premium</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Client invoice for website build, design project, consulting</td>
                  </tr>
                  <tr className="bg-gray-800/30">
                    <td className="px-5 py-3 text-gray-300 text-sm font-medium">Impact on cash flow</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Cash outflow when paid</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Cash inflow when collected</td>
                  </tr>
                  <tr className="bg-gray-800/30">
                    <td className="px-5 py-3 text-gray-300 text-sm font-medium">Management priority</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Pay on time to maintain relationships &amp; capture discounts</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Collect fast to maintain cash flow</td>
                  </tr>
                  <tr className="bg-gray-800/30">
                    <td className="px-5 py-3 text-gray-300 text-sm font-medium">Aging direction</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Older = worse (late payment, fees, damaged relationships)</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Older = worse (risk of bad debt)</td>
                  </tr>
                  <tr className="bg-gray-800/30">
                    <td className="px-5 py-3 text-gray-300 text-sm font-medium">Tax treatment</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Business expenses are tax deductible</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Income is assessable for tax</td>
                  </tr>
                  <tr className="bg-gray-800/30">
                    <td className="px-5 py-3 text-gray-300 text-sm font-medium">GST implications</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Claim input tax credits (1/11th)</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Remit GST collected (1/11th)</td>
                  </tr>
                  <tr className="bg-gray-800/30">
                    <td className="px-5 py-3 text-gray-300 text-sm font-medium">InvoiceFlow role</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Track expenses, GST credits, BAS-ready reports</td>
                    <td className="px-5 py-3 text-gray-400 text-sm">Send invoices, track payments, chase overdue</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Visual Flow Concept */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-500/5 to-blue-500/5 border border-indigo-500/20 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
                The AP/AR Flow in Your Freelance Business
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex-1 min-w-[200px] p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                    <p className="text-blue-400 font-semibold text-sm mb-1">Your Clients</p>
                    <p className="text-gray-400 text-xs">Owe you money (your AR)</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    <span className="text-gray-500 text-xs mt-1">Payment</span>
                  </div>
                  <div className="flex-1 min-w-[200px] p-4 rounded-xl bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 text-center">
                    <p className="text-white font-semibold text-sm mb-1">Your Business</p>
                    <p className="text-gray-400 text-xs">Cash flow hub</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    <span className="text-gray-500 text-xs mt-1">Payment</span>
                  </div>
                  <div className="flex-1 min-w-[200px] p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-center">
                    <p className="text-indigo-400 font-semibold text-sm mb-1">Your Suppliers</p>
                    <p className="text-gray-400 text-xs">You owe them money (your AP)</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm text-center">
                  Healthy cash flow means collecting AR faster than you need to pay AP. When AR slows down but AP keeps coming, that&apos;s when cash flow problems start.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">The Cash Flow Equation</p>
              <p className="text-gray-400 text-sm">
                Your <strong className="text-gray-200">net cash position</strong> at any point in time is heavily influenced by the gap between AR and AP. If clients owe you $15,000 (AR) but you owe suppliers $3,000 (AP), your net receivable position is $12,000. The challenge for freelancers is that AR collection often takes 30-60 days while AP obligations (like subscriptions and rent) don&apos;t wait. Managing this timing gap is the essence of cash flow management.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Managing Accounts Payable as a Freelancer */}
        <section id="managing-ap-freelancer">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Managing Accounts Payable as a Freelancer</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Most freelancers obsess over getting paid (accounts receivable) and completely neglect tracking what they owe (accounts payable). This is a mistake. <strong className="text-white">Unmanaged AP leads to missed tax deductions, unclaimed GST credits, forgotten subscriptions silently draining your bank account, and inaccurate profit calculations.</strong> The freelancers who treat their AP with the same discipline as their AR consistently run more profitable businesses.
            </p>
            <p className="text-gray-300 leading-relaxed">
              A typical Australian freelancer has <strong className="text-white">$500 to $2,000 in monthly accounts payable</strong>, spread across 8-15 different suppliers and subscriptions. That&apos;s $6,000 to $24,000 per year in business expenses &mdash; and every dollar of it is potentially tax-deductible. Miss even 20% of those deductions and you&apos;re paying tax on income you didn&apos;t really earn.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Typical Monthly AP Breakdown for a Freelancer</h4>
              <div className="rounded-xl bg-gray-900/50 border border-gray-700/50 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="px-5 py-3 text-left text-sm font-semibold text-white">Expense Category</th>
                      <th className="px-5 py-3 text-right text-sm font-semibold text-white">Typical Monthly Cost</th>
                      <th className="px-5 py-3 text-right text-sm font-semibold text-white">GST Credit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30">
                      <td className="px-5 py-3 text-gray-300 text-sm">Software subscriptions (3-5 tools)</td>
                      <td className="px-5 py-3 text-white text-sm text-right">$150 &ndash; $350</td>
                      <td className="px-5 py-3 text-indigo-400 text-sm text-right">$14 &ndash; $32</td>
                    </tr>
                    <tr className="bg-gray-800/30">
                      <td className="px-5 py-3 text-gray-300 text-sm">Phone &amp; internet (business portion)</td>
                      <td className="px-5 py-3 text-white text-sm text-right">$50 &ndash; $120</td>
                      <td className="px-5 py-3 text-indigo-400 text-sm text-right">$5 &ndash; $11</td>
                    </tr>
                    <tr className="bg-gray-800/30">
                      <td className="px-5 py-3 text-gray-300 text-sm">Insurance premiums</td>
                      <td className="px-5 py-3 text-white text-sm text-right">$80 &ndash; $200</td>
                      <td className="px-5 py-3 text-gray-500 text-sm text-right">Varies*</td>
                    </tr>
                    <tr className="bg-gray-800/30">
                      <td className="px-5 py-3 text-gray-300 text-sm">Domain &amp; hosting</td>
                      <td className="px-5 py-3 text-white text-sm text-right">$20 &ndash; $80</td>
                      <td className="px-5 py-3 text-indigo-400 text-sm text-right">$2 &ndash; $7</td>
                    </tr>
                    <tr className="bg-gray-800/30">
                      <td className="px-5 py-3 text-gray-300 text-sm">Co-working / office costs</td>
                      <td className="px-5 py-3 text-white text-sm text-right">$0 &ndash; $500</td>
                      <td className="px-5 py-3 text-indigo-400 text-sm text-right">$0 &ndash; $45</td>
                    </tr>
                    <tr className="bg-gray-800/30">
                      <td className="px-5 py-3 text-gray-300 text-sm">Professional development</td>
                      <td className="px-5 py-3 text-white text-sm text-right">$50 &ndash; $200</td>
                      <td className="px-5 py-3 text-indigo-400 text-sm text-right">$5 &ndash; $18</td>
                    </tr>
                    <tr className="bg-gray-800/30">
                      <td className="px-5 py-3 text-gray-300 text-sm">Accounting software</td>
                      <td className="px-5 py-3 text-white text-sm text-right">$25 &ndash; $70</td>
                      <td className="px-5 py-3 text-indigo-400 text-sm text-right">$2 &ndash; $6</td>
                    </tr>
                    <tr className="bg-indigo-500/5">
                      <td className="px-5 py-3 text-indigo-400 text-sm font-medium">Estimated Monthly Total</td>
                      <td className="px-5 py-3 text-indigo-400 text-sm font-bold text-right">$375 &ndash; $1,520</td>
                      <td className="px-5 py-3 text-indigo-400 text-sm font-bold text-right">$28 &ndash; $119</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-xs mt-3">*Insurance GST treatment varies &mdash; some insurance products include GST, others (like income protection) may include stamp duty instead. Check with your insurer.</p>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">5 Best Practices for Managing AP</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5 sm:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <span className="text-indigo-400 font-bold text-xs">1</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Track Every Bill &mdash; No Exceptions</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every supplier invoice, receipt, and bill should be recorded the moment it arrives &mdash; not at tax time when you&apos;re scrambling through bank statements trying to remember what each transaction was for. Use accounting software or a dedicated expense tracker. Photograph paper receipts immediately (the ATO accepts digital copies). A $55 lunch receipt might not seem worth tracking, but over a year those small expenses add up to hundreds of dollars in tax deductions.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <span className="text-indigo-400 font-bold text-xs">2</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Match Invoices to Purchase Orders</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Before paying any supplier invoice, verify that the amount matches what was agreed. This is called &quot;three-way matching&quot; &mdash; the purchase order, the goods/services received, and the invoice should all align. It catches errors (and fraud) before money leaves your account.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <span className="text-indigo-400 font-bold text-xs">3</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Set a Payment Schedule</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Rather than paying bills as they arrive (which disrupts cash flow) or waiting until the last moment (which risks late fees), set a regular payment schedule &mdash; for example, process all AP payments every Wednesday. This creates predictability in your cash flow and ensures bills don&apos;t fall through the cracks.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <span className="text-indigo-400 font-bold text-xs">4</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Take Early Payment Discounts</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Some suppliers offer discounts for early payment &mdash; a common term is &quot;2/10 net 30&quot;, meaning a 2% discount if paid within 10 days, otherwise the full amount is due in 30 days. That 2% discount is equivalent to a <strong className="text-gray-200">36% annualised return</strong> on your money. If you have the cash, always take the early payment discount.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <span className="text-indigo-400 font-bold text-xs">5</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Separate Business &amp; Personal Expenses</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Use a dedicated business bank account and business credit card for all AP payments. Mixing personal and business expenses makes it nearly impossible to accurately track AP, creates headaches at tax time, and is a red flag for the ATO. A separate account also makes GST input tax credit claims much simpler to substantiate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: AP and Your BAS / Tax Return */}
        <section id="ap-bas-tax">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">AP and Your BAS / Tax Return</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Your accounts payable directly impacts two critical ATO obligations: your <strong className="text-white">Business Activity Statement (BAS)</strong> and your <strong className="text-white">annual income tax return</strong>. Getting AP right on these reports ensures you claim every GST credit and tax deduction you&apos;re entitled to &mdash; and avoid triggering an ATO audit by getting it wrong.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">GST Input Tax Credits on AP</h4>
              <div className="space-y-3">
                <p className="text-gray-400 text-sm leading-relaxed">
                  When you purchase goods or services for your business that include GST, you can claim back the GST component as an <strong className="text-gray-200">input tax credit</strong> on your BAS. This is one of the most significant financial benefits of being GST-registered &mdash; it effectively makes your business purchases <strong className="text-gray-200">10% cheaper</strong> (because you recover the GST).
                </p>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-indigo-400 font-bold flex-shrink-0 w-28">Credit amount</span>
                  <span className="text-gray-400">1/11th of the GST-inclusive purchase price</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-indigo-400 font-bold flex-shrink-0 w-28">Requirement</span>
                  <span className="text-gray-400">You must hold a valid tax invoice from the supplier</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-indigo-400 font-bold flex-shrink-0 w-28">Where to report</span>
                  <span className="text-gray-400">BAS labels 1B (GST on purchases) or specific labels for capital acquisitions</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-indigo-400 font-bold flex-shrink-0 w-28">Threshold</span>
                  <span className="text-gray-400">Tax invoices required for purchases over $82.50 (inc. GST)</span>
                </div>
              </div>
            </div>

            {/* Worked Example */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-500/5 to-blue-500/5 border border-indigo-500/20 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                </svg>
                Worked Example &mdash; Quarterly GST Credits from AP
              </h4>
              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  You are a GST-registered freelance graphic designer. In Q3 (January&ndash;March 2026), your business purchases included:
                </p>
                <div className="rounded-xl bg-gray-900/50 border border-gray-700/50 overflow-hidden">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-700/50">
                      <tr className="bg-gray-800/30">
                        <td className="px-5 py-3 text-gray-300 text-sm font-medium">Adobe Creative Cloud (3 months)</td>
                        <td className="px-5 py-3 text-white text-sm text-right">$162.00 inc. GST</td>
                        <td className="px-5 py-3 text-indigo-400 text-sm text-right">$14.73</td>
                      </tr>
                      <tr className="bg-gray-800/30">
                        <td className="px-5 py-3 text-gray-300 text-sm font-medium">Canva Pro (3 months)</td>
                        <td className="px-5 py-3 text-white text-sm text-right">$54.00 inc. GST</td>
                        <td className="px-5 py-3 text-indigo-400 text-sm text-right">$4.91</td>
                      </tr>
                      <tr className="bg-gray-800/30">
                        <td className="px-5 py-3 text-gray-300 text-sm font-medium">Subcontractor invoice (copywriter)</td>
                        <td className="px-5 py-3 text-white text-sm text-right">$1,100.00 inc. GST</td>
                        <td className="px-5 py-3 text-indigo-400 text-sm text-right">$100.00</td>
                      </tr>
                      <tr className="bg-gray-800/30">
                        <td className="px-5 py-3 text-gray-300 text-sm font-medium">Web hosting (quarterly)</td>
                        <td className="px-5 py-3 text-white text-sm text-right">$99.00 inc. GST</td>
                        <td className="px-5 py-3 text-indigo-400 text-sm text-right">$9.00</td>
                      </tr>
                      <tr className="bg-gray-800/30">
                        <td className="px-5 py-3 text-gray-300 text-sm font-medium">Co-working desk (3 months)</td>
                        <td className="px-5 py-3 text-white text-sm text-right">$990.00 inc. GST</td>
                        <td className="px-5 py-3 text-indigo-400 text-sm text-right">$90.00</td>
                      </tr>
                      <tr className="bg-indigo-500/5">
                        <td className="px-5 py-3 text-indigo-400 text-sm font-medium">Total AP &amp; GST Credits</td>
                        <td className="px-5 py-3 text-indigo-400 text-sm font-bold text-right">$2,405.00</td>
                        <td className="px-5 py-3 text-indigo-400 text-sm font-bold text-right">$218.64</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-400 text-sm">
                  In this quarter, you claim <strong className="text-gray-200">$218.64 in GST input tax credits</strong> on your BAS. This reduces the GST you owe the ATO. If you collected $1,200 in GST from clients, you would only remit $1,200 &minus; $218.64 = <strong className="text-gray-200">$981.36</strong> to the ATO. Without tracking AP properly, you would have paid $218.64 more than necessary.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">Cash vs Accrual Basis &mdash; When Do You Report AP?</p>
              <p className="text-gray-400 text-sm">
                Under <strong className="text-gray-200">cash-basis accounting</strong> (used by most freelancers and sole traders under $10M turnover), you report AP expenses when you actually pay them &mdash; not when you receive the invoice. This means your BAS GST credits and tax deductions are based on the payment date, not the invoice date. Under <strong className="text-gray-200">accrual-basis accounting</strong>, you report the expense when the invoice is received, regardless of when you pay. Cash basis is simpler for most freelancers but can result in timing differences between quarters if you receive a December invoice but pay it in January.
              </p>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">AP Items That Are Tax Deductible vs Not</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <p className="text-emerald-400 font-medium text-sm mb-3">Deductible AP Items</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Software subscriptions for business use
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Subcontractor payments
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Professional indemnity &amp; public liability insurance
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Phone &amp; internet (business portion)
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Industry-related training &amp; courses
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Equipment under $300 (instant write-off)
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Accounting &amp; legal fees
                    </li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                  <p className="text-red-400 font-medium text-sm mb-3">Not Deductible (or Limited)</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      Personal expenses paid from business account
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      Entertainment expenses (limited deductibility)
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      Fines &amp; penalties (e.g., traffic fines)
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      Non-business training (e.g., hobby courses)
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      Capital equipment over $300 (depreciated, not expensed)*
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      Private portion of mixed-use items
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      Income protection premiums (claimed differently)**
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-4">*Small businesses may be eligible for the instant asset write-off on equipment up to $20,000 (2025-26 threshold). **Income protection is deductible under Section 8-1, not as a business AP item &mdash; consult your tax agent for correct reporting.</p>
            </div>

            <div className="rounded-xl bg-blue-500/5 border border-blue-500/20 p-5 mt-6">
              <p className="text-blue-400 font-medium mb-2">ATO Record Keeping &mdash; 5 Years Minimum</p>
              <p className="text-gray-400 text-sm">
                The ATO requires you to keep all AP records &mdash; supplier invoices, tax invoices, receipts, proof of payment, and bank statements &mdash; for a minimum of <strong className="text-gray-200">5 years</strong> from the date you lodge your tax return for that financial year. Records can be digital (photos, scanned PDFs, cloud accounting software exports) as long as they are legible, complete, and in English (or can be easily converted). Failing to produce records when audited means the ATO can deny your deductions and GST credits entirely.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Common AP Mistakes Freelancers Make */}
        <section id="common-ap-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common AP Mistakes Freelancers Make</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Accounts payable management doesn&apos;t get the attention it deserves in the freelance world. Most guides focus on getting paid (AR), but the <strong className="text-white">money leaking out</strong> through poor AP management can be just as damaging. Here are the eight most common mistakes &mdash; and how to avoid them.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">1</span>
                  </div>
                  <h4 className="text-white font-semibold">Mixing Personal &amp; Business Expenses</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The number one AP mistake freelancers make is paying business expenses from personal accounts (and vice versa). This makes it almost impossible to accurately track AP, complicates tax deductions, invalidates GST credit claims, and is a major red flag in an ATO audit. Open a separate business bank account and use it exclusively for business transactions. It costs nothing with most banks and will save you hours of headaches at BAS and tax time.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">2</span>
                  </div>
                  <h4 className="text-white font-semibold">Not Tracking Subscriptions</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The average freelancer runs <strong className="text-gray-200">8-12 SaaS subscriptions</strong>, and studies show that people underestimate their subscription spending by up to 40%. That $12/month tool you signed up for last year but never use? It has quietly cost you $144. Multiply that across several forgotten subscriptions, and you could be losing $500-$1,000+ annually on software you don&apos;t even open. Audit your subscriptions quarterly &mdash; check every recurring charge on your bank statement and cancel anything you haven&apos;t used in 30 days.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">3</span>
                  </div>
                  <h4 className="text-white font-semibold">Paying Suppliers Late</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Just as you rely on clients paying you on time, your suppliers depend on you. Consistently paying late damages relationships with subcontractors (they&apos;ll prioritise other clients), may incur late payment fees, eliminates your ability to negotiate better terms, and closes the door on early payment discounts. In the freelance community, reputation spreads fast &mdash; being known as a slow payer can impact your ability to attract quality subcontractors when you need them.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">4</span>
                  </div>
                  <h4 className="text-white font-semibold">Not Claiming GST Credits</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you are GST-registered and not tracking input tax credits on your AP, you are effectively paying 10% more for everything. On $15,000 of annual business purchases, that&apos;s <strong className="text-gray-200">$1,363 in unclaimed GST credits</strong> per year. Many freelancers register for GST when they hit the $75,000 threshold but never bother to properly claim the credits on their purchases. The credit is automatic on your BAS &mdash; but only if you track and report it correctly.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">5</span>
                  </div>
                  <h4 className="text-white font-semibold">Losing Receipts &amp; Tax Invoices</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  No receipt, no deduction &mdash; it&apos;s that simple. The ATO requires you to have documentary evidence for every business expense you claim. Thermal paper receipts fade within months. Email receipts get buried. Bank statements alone are not sufficient for GST credit claims &mdash; you need the actual tax invoice. Photograph every paper receipt immediately and store it in a cloud-based system. Treat every receipt as a tiny tax deduction waiting to happen.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">6</span>
                  </div>
                  <h4 className="text-white font-semibold">Not Reviewing Recurring Charges</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Software companies love annual price increases. That $29/month tool you signed up for may now be $39/month, and you might not have noticed because it auto-charges your credit card. Review every recurring charge at least quarterly. Compare the value you&apos;re getting against the current price. Look for annual billing discounts (most SaaS companies offer 15-20% off for annual payments). If a tool has increased in price, research alternatives &mdash; the competitive landscape changes fast.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">7</span>
                  </div>
                  <h4 className="text-white font-semibold">Paying Without Checking Invoices</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Supplier invoices can contain errors &mdash; wrong quantities, incorrect rates, duplicate charges, or GST calculated incorrectly. Always review an invoice before paying it. Compare it against the agreed quote or purchase order. Check that the GST amount is correct (it should be exactly 1/11th of the total for GST-inclusive items). Paying incorrect invoices without review is money leaving your business unnecessarily.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">8</span>
                  </div>
                  <h4 className="text-white font-semibold">Not Negotiating Payment Terms</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Many freelancers accept whatever payment terms a supplier offers without negotiation. But payment terms are almost always negotiable &mdash; especially with suppliers who value your ongoing business. Ask for 30-day terms instead of upfront payment. Request volume discounts if you purchase regularly. Inquire about annual billing discounts for SaaS tools. Negotiate milestone-based payments for large subcontractor invoices. Even a small improvement in terms &mdash; like moving from 7-day to 30-day payment &mdash; can significantly improve your working capital position.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">The Hidden Cost of Poor AP Management</p>
              <p className="text-gray-400 text-sm">
                A freelancer earning $120,000 per year with $18,000 in annual business expenses who fails to properly track AP might miss <strong className="text-gray-200">$2,000-$3,000 in tax deductions</strong> and <strong className="text-gray-200">$800-$1,600 in GST credits</strong> annually. They might also be paying <strong className="text-gray-200">$500-$1,000 for unused subscriptions</strong>. Combined, that&apos;s $3,300-$5,600 in unnecessary costs &mdash; money that goes straight to the bottom line if you simply track what you owe and what you&apos;ve paid.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Managing Accounts Payable with InvoiceFlow */}
        <section id="invoiceflow-ap">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Managing Accounts Payable with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow isn&apos;t just about sending invoices and getting paid. It gives you <strong className="text-white">complete visibility over your expenses</strong>, ensuring you track every AP item, claim every GST credit, and never miss a tax deduction. Here&apos;s how InvoiceFlow helps you manage the money going out just as effectively as the money coming in.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-indigo-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Expense Tracking</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Log every business expense as it occurs &mdash; subcontractor invoices, software subscriptions, office supplies, insurance, travel. Categorise expenses automatically so your profit &amp; loss report is always up to date. See your total AP at a glance and understand exactly where your money is going each month.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-indigo-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">GST Credit Tracking</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow automatically calculates the GST input tax credit on every expense you log. At BAS time, your total GST credits are tallied and ready to report &mdash; no manual calculation needed. The system flags any expenses that are GST-free or input-taxed so your BAS reporting is accurate and ATO-compliant.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-indigo-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">BAS-Ready Reports</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Generate BAS-ready expense summaries that break down your AP by category, GST status, and reporting period. Export reports formatted for your accountant or import directly into your BAS lodgement. No more scrambling through bank statements at the end of each quarter trying to categorise three months of transactions.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-indigo-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Receipt Capture</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Snap a photo of any receipt and InvoiceFlow extracts the key details &mdash; vendor, amount, date, GST component. Receipts are stored digitally alongside the expense record, meeting ATO requirements for record retention. No more shoeboxes full of fading thermal paper receipts.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-indigo-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Subscription Monitoring</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow identifies and tracks recurring charges across your business expenses. Get alerts when subscription prices increase, when annual renewals are approaching, and when a subscription hasn&apos;t been used recently. Stop paying for tools you&apos;ve forgotten about and take control of your recurring AP.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-indigo-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Expense Analytics</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Visual dashboards showing your AP trends over time &mdash; where your money goes, how your expenses are growing, and which categories are taking the largest share of revenue. Spot cost blowouts before they become a problem and make data-driven decisions about which expenses to cut and which to invest in.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">Both Sides of the Ledger</p>
              <p className="text-gray-400 text-sm">
                InvoiceFlow is designed to manage <strong className="text-gray-200">both accounts receivable and accounts payable</strong> in one platform. Your invoices (AR) and your expenses (AP) feed into the same profit &amp; loss reports, cash flow forecasts, and BAS summaries. Instead of juggling separate tools for invoicing and expense tracking, you get a unified view of your business finances &mdash; exactly what you need to make smart financial decisions.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you track expenses, calculate GST credits, and prepare your BAS.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on GST obligations, tax deductions, and end-of-financial-year preparation.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-indigo-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-indigo-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Track Every Dollar In &amp; Out
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow manages both your accounts receivable and accounts payable &mdash; send invoices, track expenses, claim GST credits, and generate BAS-ready reports. One platform for both sides of your freelance finances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/gst-calculator">
              <Button variant="secondary">Try the GST Calculator</Button>
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
