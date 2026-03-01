import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Invoice Number: Numbering Systems, Formats & ATO Requirements (2025-26) — InvoiceFlow',
  description:
    'What is an invoice number? Learn invoice numbering systems, format examples, ATO requirements for tax invoices, and best practices for Australian freelancers. Sequential, date-based, and client-prefix systems explained.',
  keywords: [
    'invoice numbering system',
    'how to number invoices',
    'invoice number format',
    'invoice number example',
    'invoice numbering best practices australia',
    'invoice number ato requirements',
    'sequential invoice numbering',
    'invoice number template',
    'tax invoice number australia',
    'invoice numbering for freelancers',
  ],
  alternates: { canonical: '/glossary/invoice-number' },
  openGraph: {
    title: 'Invoice Number: Numbering Systems, Formats & ATO Requirements (2025-26) — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about invoice numbers: numbering systems, ATO requirements, format examples, common mistakes, and best practices for sole traders.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/invoice-number',
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
    { '@type': 'ListItem', position: 3, name: 'Invoice Number', item: `${BASE_URL}/glossary/invoice-number` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I start my invoice numbering at 1000 instead of 1?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can start at any number you like. Many freelancers start at a higher number (such as 1000 or 100) so that early invoices don\'t signal to clients that they are brand new. The ATO does not require you to start at 1 — only that your numbering is sequential and traceable from that point forward. Just pick a starting number and increment consistently.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I change my invoice numbering system mid-year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can change your numbering system at any time, but you should document the changeover clearly. For example, if you switch from sequential (INV-047) to date-based (2026-048), note the transition in your records so an auditor can follow the trail. Never reuse a number from the old system, and ensure the new sequence does not overlap with any previously issued numbers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if I accidentally skip an invoice number?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Do not go back and reuse the skipped number. Instead, make a note in your invoice register that the number was skipped (e.g., "INV-025: skipped in error"). This way, if the ATO queries the gap during an audit, you have a clear explanation. Gaps in sequence can trigger ATO scrutiny because they may suggest missing or unreported income, so documentation is key.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need separate invoice number sequences for different clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, the ATO does not require separate sequences per client. Most freelancers use a single sequential system across all clients. However, some freelancers prefer client-prefix numbering (e.g., ACME-001, SMITH-001) for easier organisation. If you use client prefixes, each prefix effectively creates its own sequence — just ensure no two invoices share the same full number.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I issue two invoices with the same number?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Duplicate invoice numbers create serious problems. They can cause confusion with clients, payment processing errors, and complications during an ATO audit. If you discover a duplicate, issue a credit note against one of them, void it, and reissue with a new unique number. Document the correction in your invoice register. Using invoicing software like InvoiceFlow prevents duplicates automatically.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-invoice-number', label: '1. What Is an Invoice Number?' },
  { id: 'numbering-systems', label: '2. Invoice Numbering Systems' },
  { id: 'ato-requirements', label: '3. ATO Requirements' },
  { id: 'best-practices', label: '4. Best Practices for Freelancers' },
  { id: 'common-mistakes', label: '5. Common Mistakes' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices with automatic sequential numbering and ATO-compliant formatting.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-invoice-generator',
    name: 'Tax Invoice Generator',
    description: 'Generate ATO-compliant tax invoices with all 7 required elements including unique identifying numbers.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-template-generator',
    name: 'Invoice Template Generator',
    description: 'Build custom invoice templates with your preferred numbering format and branding.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    href: '/tools/credit-note-generator',
    name: 'Credit Note Generator',
    description: 'Issue credit notes that reference original invoice numbers for proper audit trails.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/invoicing-guide',
    name: 'Invoicing Guide',
    description: 'Complete guide to invoicing as a freelancer in Australia, from numbering to payment terms.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Income tax, GST, BAS, and record-keeping obligations for Australian sole traders.',
  },
  {
    href: '/guides/getting-started',
    name: 'Getting Started with InvoiceFlow',
    description: 'Set up your account, configure invoice numbering, and send your first invoice in minutes.',
  },
];

export default function InvoiceNumberGlossaryPage() {
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
            <span className="text-white">Invoice Number</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Invoicing &amp; Documents
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Invoice Number{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
              for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A unique identifier assigned to each invoice you issue. Required by the ATO for every tax invoice, it must be sequential, traceable, and never duplicated &mdash; your numbering system is one of the first things auditors check.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">7</span>
              <div>
                <p className="text-white font-medium text-sm">Tax Invoice Requirements</p>
                <p className="text-gray-400 text-sm">The &quot;identifying number&quot; is one of 7 mandatory elements under GST Act Section 29-70</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">5yr</span>
              <div>
                <p className="text-white font-medium text-sm">Record Retention</p>
                <p className="text-gray-400 text-sm">ATO requires you to keep all invoices and your numbering register for at least 5 years</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">0</span>
              <div>
                <p className="text-white font-medium text-sm">Duplicates Allowed</p>
                <p className="text-gray-400 text-sm">Every invoice number must be unique &mdash; no two invoices can share the same identifier</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">5+</span>
              <div>
                <p className="text-white font-medium text-sm">Numbering Systems</p>
                <p className="text-gray-400 text-sm">Sequential, date-based, client-prefix, project-based, and hybrid formats available</p>
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

        {/* Section 1: What Is an Invoice Number? */}
        <section id="what-is-invoice-number">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is an Invoice Number?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              An invoice number is a <strong className="text-white">unique identifier assigned to each invoice</strong> you issue. It serves as the primary reference point for tracking payments, resolving disputes, and maintaining your financial records. No two invoices should ever share the same number &mdash; each must be distinct and traceable back to a specific transaction.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Under Australian tax law, the ATO requires every tax invoice to include an <strong className="text-white">&quot;identifying number&quot;</strong> &mdash; this is one of the 7 mandatory elements for a valid tax invoice as specified in the GST Act Section 29-70. While the legislation doesn&apos;t specifically mandate the term &quot;invoice number,&quot; the identifying number must be unique and allow the ATO to trace it during an audit.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Your invoice numbers must be <strong className="text-white">sequential or logically ordered</strong>, but they don&apos;t need to start at 1. You can begin at any number &mdash; many freelancers start at 100 or 1000 to appear more established. What matters is that from your chosen starting point, the sequence is consistent and unbroken. Gaps or duplicates in your numbering can raise red flags during an ATO audit.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Think of your invoice number as the serial number of a financial transaction. It connects the invoice to your accounting records, your bank statements, your BAS reporting, and ultimately your tax return. Without a proper numbering system, your entire record-keeping framework falls apart.
            </p>
            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">The 7 Tax Invoice Requirements (GST Act Section 29-70)</p>
              <p className="text-gray-400 text-sm">
                A valid tax invoice must include: (1) the words &quot;tax invoice&quot;, (2) the seller&apos;s identity, (3) the seller&apos;s ABN, (4) the date of issue, (5) a brief description of items sold, (6) the GST amount (or that the price includes GST), and (7) <strong className="text-gray-200">an identifying number</strong> &mdash; your invoice number. For invoices of $1,000 or more (GST-inclusive), you must also include the buyer&apos;s identity or ABN.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Invoice Numbering Systems */}
        <section id="numbering-systems">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Invoice Numbering Systems</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              There is no single &quot;correct&quot; way to number your invoices &mdash; the ATO simply requires a unique, traceable identifying number. However, some systems work better than others depending on your business size, number of clients, and personal preference. Here are the five most common approaches used by Australian freelancers.
            </p>

            {/* Numbering Systems Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">System</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Example</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden sm:table-cell">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Sequential</td>
                    <td className="px-6 py-4 text-sky-400 font-medium font-mono">INV-001, INV-002, INV-003</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Simple, most freelancers starting out</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Date-based</td>
                    <td className="px-6 py-4 text-sky-400 font-medium font-mono">2026-001, 2026-002, 2026-003</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Easy year-end filing, multi-year businesses</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Client-prefix</td>
                    <td className="px-6 py-4 text-sky-400 font-medium font-mono">ACME-001, SMITH-001</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Freelancers with a few recurring clients</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Project-based</td>
                    <td className="px-6 py-4 text-sky-400 font-medium font-mono">PRJ001-01, PRJ001-02</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Multi-phase projects, agencies</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Hybrid</td>
                    <td className="px-6 py-4 text-sky-400 font-medium font-mono">2026-ACME-001</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Larger operations needing year + client context</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pros/Cons Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3">Sequential (Recommended for Most)</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400"><strong className="text-emerald-400">Pros:</strong> Simple to implement, easy to track gaps, immediately shows total invoice count, universally understood by accountants and the ATO.</p>
                  <p className="text-gray-400"><strong className="text-red-400">Cons:</strong> Doesn&apos;t indicate year or client at a glance, new freelancers may not want clients seeing low numbers like INV-001.</p>
                </div>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3">Date-Based (Best for Filing)</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400"><strong className="text-emerald-400">Pros:</strong> Instantly shows financial year, natural separation between years, makes EOFY reconciliation faster, prevents cross-year duplicates.</p>
                  <p className="text-gray-400"><strong className="text-red-400">Cons:</strong> Slightly longer numbers, requires resetting the counter each year (or financial year), can confuse clients if you switch mid-year.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Our Recommendation</p>
              <p className="text-gray-400 text-sm">
                For most Australian freelancers, start with <strong className="text-gray-200">simple sequential numbering with a year prefix</strong> &mdash; for example, <strong className="text-gray-200">2026-001</strong>. This gives you the simplicity of sequential numbering with the filing benefit of knowing the year at a glance. Use leading zeros (001, not 1) so your invoices sort correctly in spreadsheets and file systems.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: ATO Requirements */}
        <section id="ato-requirements">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">ATO Requirements</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO&apos;s requirements for invoice numbering are straightforward but non-negotiable. Understanding exactly what the law requires &mdash; and what it doesn&apos;t &mdash; will help you set up a compliant system from day one and avoid problems during an audit.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mandatory: Identifying Number
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Every tax invoice must include an <strong className="text-gray-200">&quot;identifying number&quot;</strong> per GST Act Section 29-70. The ATO doesn&apos;t prescribe a specific format &mdash; it doesn&apos;t need to be called &quot;Invoice Number&quot; &mdash; but it must be present, unique, and traceable. This applies to invoices you issue and invoices you receive.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  Sequential or Logically Ordered
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Numbers must follow a <strong className="text-gray-200">logical, traceable sequence</strong>. They don&apos;t have to be strictly sequential (e.g., 1, 2, 3), but the ordering must make sense. Date-based or client-prefix systems are acceptable as long as each prefix maintains its own logical order and no numbers are reused.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                  Invoices $1,000+ (GST-Inclusive)
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  For tax invoices of <strong className="text-gray-200">$1,000 or more</strong> (GST-inclusive), additional requirements apply: you must include the buyer&apos;s ABN or identity, a description of each item, the quantity, and the price. The identifying number requirement remains the same, but the bar for overall invoice detail is higher.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                  5-Year Retention
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The ATO requires you to <strong className="text-gray-200">keep all invoices for at least 5 years</strong> from the date of the transaction (or the date you lodged your tax return, whichever is later). This includes your invoice register or numbering log. If your records are inadequate, the ATO may issue default assessments based on their own estimates.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Audit Warning</p>
              <p className="text-gray-400 text-sm">
                During an audit, the ATO will review your invoice numbering sequence for gaps, duplicates, and inconsistencies. <strong className="text-gray-200">Unexplained gaps may suggest unreported income</strong> &mdash; for example, if you have INV-045 and INV-047 but no INV-046, the ATO may ask where that invoice went. Always document skipped or voided numbers in your register. Maintaining a clean, complete numbering trail is one of the simplest ways to reduce your audit risk.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Best Practices for Freelancers */}
        <section id="best-practices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Best Practices for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A good invoice numbering system is simple, consistent, and audit-proof. Follow these best practices to keep your records clean and avoid headaches at tax time or during an ATO review.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  Never Reuse Numbers
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Even for cancelled invoices, <strong className="text-gray-200">never reuse the number</strong>. If you cancel INV-023, mark it as VOID in your register and move on to INV-024. Reusing numbers creates confusion, breaks your audit trail, and can cause duplicate payment issues with clients.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  Avoid Gaps in Sequence
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Gaps in your invoice numbering can <strong className="text-gray-200">trigger ATO audit flags</strong> because they may suggest missing or unreported income. If you must skip a number, document it clearly in your invoice register with the reason (e.g., &quot;skipped in error&quot; or &quot;test invoice deleted&quot;).
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  Include a Year Prefix
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Adding a year prefix (e.g., <strong className="text-gray-200">2026-001</strong>) makes EOFY reconciliation much faster and prevents cross-year duplicate numbers. Use the calendar year or financial year &mdash; just be consistent. This is especially important if you issue hundreds of invoices per year.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                  </svg>
                  Use Leading Zeros
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Use <strong className="text-gray-200">INV-0001, not INV-1</strong>. Leading zeros ensure correct sorting in spreadsheets, file managers, and accounting software. Without them, INV-10 sorts before INV-2 in most systems. Plan for growth: if you expect over 999 invoices, use four-digit padding from the start.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                  Keep an Invoice Register
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Maintain a <strong className="text-gray-200">master register or log</strong> that records every invoice number, date, client, amount, and status (paid, outstanding, void). This is your single source of truth for all invoicing activity and the document auditors will ask for first. A simple spreadsheet works, but dedicated software is better.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  Separate Sequences for Multiple ABNs
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  If you are registered for <strong className="text-gray-200">multiple ABNs</strong> or operate different business activities, consider maintaining separate invoice number sequences for each. This keeps your records clean and makes BAS reporting simpler. Use distinct prefixes (e.g., DESIGN-001, DEV-001) to avoid cross-contamination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Common Mistakes */}
        <section id="common-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Mistakes</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Most invoice numbering problems are easy to prevent but painful to fix retroactively. Here are the six most common mistakes freelancers make &mdash; and how to avoid them.
            </p>

            {/* Mistakes Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Mistake</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Why It&apos;s a Problem</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden sm:table-cell">Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Restarting each year without a year prefix</td>
                    <td className="px-6 py-4 text-sm text-gray-400">Creates duplicate numbers across years (INV-001 in 2025 and INV-001 in 2026)</td>
                    <td className="px-6 py-4 text-sm text-sky-400 hidden sm:table-cell">Always include a year prefix</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Reusing cancelled invoice numbers</td>
                    <td className="px-6 py-4 text-sm text-gray-400">Breaks audit trail, confuses payment reconciliation, may trigger ATO queries</td>
                    <td className="px-6 py-4 text-sm text-sky-400 hidden sm:table-cell">Mark as VOID, never reuse</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Random or non-sequential numbering</td>
                    <td className="px-6 py-4 text-sm text-gray-400">Makes it impossible for auditors to verify completeness of records</td>
                    <td className="px-6 py-4 text-sm text-sky-400 hidden sm:table-cell">Use a logical, traceable system</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Very long or complex numbers</td>
                    <td className="px-6 py-4 text-sm text-gray-400">Hard to reference verbally, error-prone when clients quote them in payments</td>
                    <td className="px-6 py-4 text-sm text-sky-400 hidden sm:table-cell">Keep it short and memorable</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Using dates as the only identifier</td>
                    <td className="px-6 py-4 text-sm text-gray-400">Multiple invoices on the same day create duplicates (e.g., two invoices both &quot;01-03-2026&quot;)</td>
                    <td className="px-6 py-4 text-sm text-sky-400 hidden sm:table-cell">Combine date with a sequential counter</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">No master register</td>
                    <td className="px-6 py-4 text-sm text-gray-400">No single source of truth, impossible to detect gaps or duplicates until an audit finds them</td>
                    <td className="px-6 py-4 text-sm text-sky-400 hidden sm:table-cell">Maintain a register from day one</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">The Costliest Mistake</p>
              <p className="text-gray-400 text-sm">
                The most common mistake we see is freelancers who use <strong className="text-gray-200">no system at all</strong> &mdash; they create invoice numbers ad hoc, sometimes including the client name, sometimes a date, sometimes just a random number. By the time they need to file their tax return or face an audit, reconstructing a coherent trail is nearly impossible. Start with a system on day one, even if it is as simple as INV-001, INV-002, INV-003.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow eliminates invoice numbering headaches entirely. Here&apos;s how our platform handles numbering so you never have to worry about duplicates, gaps, or ATO compliance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Automatic Sequential Numbering</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Every invoice is automatically assigned the next number in your sequence. No manual tracking, no spreadsheets, no risk of human error. The system handles it silently in the background.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Customisable Prefix &amp; Format</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Choose your preferred format: sequential (INV-0001), date-based (2026-001), client-prefix (ACME-001), or any custom combination. Set it once and InvoiceFlow maintains your format consistently across every invoice.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Duplicate Prevention</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  InvoiceFlow enforces unique numbers at the database level. It is physically impossible to create two invoices with the same number. This eliminates one of the most common and damaging invoicing mistakes.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Void &amp; Cancel Without Reuse</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  When you cancel an invoice, InvoiceFlow marks it as VOID but preserves the number in your sequence. The next invoice gets the next number &mdash; no gaps, no reuse, and a clear audit trail showing what happened.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Searchable Invoice Register</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Every invoice is logged in a searchable, filterable register. Find any invoice by number, client, date, amount, or status in seconds. Export your full register at any time for your accountant or for ATO audit purposes.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">ATO-Compliant Format Built In</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Every invoice generated by InvoiceFlow includes all 7 ATO tax invoice requirements out of the box &mdash; including the identifying number. No configuration needed, no compliance guesswork.
                </p>
              </div>
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
              { href: '/glossary/tax-invoice', label: 'Tax Invoice' },
              { href: '/glossary/invoice-template', label: 'Invoice Template' },
              { href: '/glossary/credit-note', label: 'Credit Note' },
              { href: '/glossary/abn', label: 'ABN' },
              { href: '/glossary/record-keeping', label: 'Record Keeping' },
            ].map((term) => (
              <Link
                key={term.href}
                href={term.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-300 text-sm hover:border-sky-500/40 hover:text-sky-400 transition-all"
              >
                <svg className="w-3.5 h-3.5 text-sky-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <p className="text-gray-400 text-center mb-8">Free tools to help you create professional, correctly numbered invoices.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on invoicing, tax compliance, and getting started as a freelancer.</p>
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

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture />
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Worry About Invoice Numbers Again
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow handles sequential numbering, duplicate prevention, and ATO compliance automatically. Create professional invoices with the right format from your very first invoice. Start for free &mdash; no accountant required.
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
