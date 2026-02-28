import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Credit Note: What It Is, When to Issue One & ATO Rules — InvoiceFlow',
  description:
    'What is a credit note in Australia? Learn when to issue one, ATO requirements for GST adjustments, how it differs from a refund, and how to create compliant credit notes. Free guide for 2025-26.',
  keywords: [
    'what is a credit note australia',
    'credit note vs refund',
    'credit note template',
    'when to issue a credit note',
    'credit note GST adjustment',
    'credit note for freelancers',
    'credit note ATO requirements',
    'credit note example australia',
    'credit note BAS adjustment',
    'credit note tax invoice',
  ],
  alternates: { canonical: '/glossary/credit-note' },
  openGraph: {
    title: 'Credit Note: What It Is, When to Issue One & ATO Rules — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about credit notes — when to issue one, ATO requirements, GST adjustments, and how to stay compliant.',
  },
};

const BASE_URL = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: `${BASE_URL}/glossary` },
    { '@type': 'ListItem', position: 3, name: 'Credit Note', item: `${BASE_URL}/glossary/credit-note` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a credit note and a refund?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A credit note is a document that reduces the amount a client owes you — it adjusts the balance on a previous invoice. A refund is the actual return of money already paid. You might issue a credit note that leads to a refund, but a credit note can also simply reduce the balance on a future invoice. In short: a credit note is the paperwork, a refund is the cash movement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to adjust my BAS when I issue a credit note?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you are GST-registered, a credit note creates an adjustment event under Section 19-10 of the GST Act. You must report the GST adjustment in your next BAS period. This reduces the amounts at labels G1 (total sales), 1A (GST on sales), and potentially 1B (GST on purchases) depending on the nature of the adjustment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What information must a credit note include under ATO rules?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An ATO-compliant credit note must include: the words "Credit Note" or "Adjustment Note" as the title, your ABN, the date of issue, the reason for the credit, a reference to the original tax invoice number, the credit amount (as a negative figure), and the GST adjustment amount. For credits over $1,000 (excl. GST), you must also include the buyer\'s identity or ABN.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I issue a credit note for a partial amount?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A credit note can be for a partial amount or the full amount of the original invoice. For example, if you invoiced $2,200 (incl. GST) but only overcharged by $550, your credit note would show -$550 with a GST adjustment of -$50. The original invoice remains on record — the credit note simply reduces the outstanding balance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I need to keep credit notes in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO requires you to keep credit notes and all related business records for at least 5 years from when you prepared or obtained them, or 5 years from when you completed the transactions they relate to — whichever is later. Store them alongside the original invoice they reference, either digitally or in hard copy.',
      },
    },
  ],
};

const sections = [
  { id: 'what-is-credit-note', title: 'What Is a Credit Note?' },
  { id: 'when-to-issue', title: 'When to Issue a Credit Note' },
  { id: 'credit-note-vs-others', title: 'Credit Note vs Other Documents' },
  { id: 'ato-gst-impact', title: 'ATO Requirements & GST Impact' },
  { id: 'how-to-create', title: 'How to Create a Credit Note' },
  { id: 'record-keeping', title: 'Record Keeping' },
];

const relatedTools = [
  {
    href: '/tools/credit-note-generator',
    title: 'Credit Note Generator',
    description: 'Create ATO-compliant credit notes with GST adjustments calculated automatically.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-generator',
    title: 'Invoice Generator',
    description: 'Create professional tax invoices that your credit notes can reference.',
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    title: 'GST Calculator',
    description: 'Calculate GST adjustments for your credit notes accurately.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-invoice-compliance-checker',
    title: 'Tax Invoice Compliance Checker',
    description: 'Verify your invoices and credit notes meet all ATO requirements.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
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
    href: '/glossary/tax-invoice',
    title: 'Tax Invoice',
    description: 'What a tax invoice is, ATO requirements, and how credit notes relate to them.',
  },
];

export default function CreditNoteGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-fuchsia-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Credit Note</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Invoicing &amp; Documents
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Credit Note{' '}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            The adjustment document that reduces or cancels the amount on a previous invoice. Here&apos;s when you need one, what the ATO requires, and how it affects your GST and BAS.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>2025-26 FY</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-rose-500/5 border border-rose-500/20 p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <ul className="space-y-3">
            {[
              { bold: 'A credit note reduces what a client owes', text: ' — it\'s a formal document that adjusts (partially or fully) the amount on a previous invoice. Think of it as a "negative invoice".' },
              { bold: 'It is NOT a new invoice', text: ' — a credit note always references an existing invoice and corrects it. You never issue a credit note in isolation.' },
              { bold: 'GST-registered? It adjusts your GST', text: ' — under Section 19-10 of the GST Act, a credit note is an adjustment event. You must report the GST change in your next BAS.' },
              { bold: 'Keep it for 5 years', text: ' — the ATO requires you to retain credit notes alongside the original invoices they reference for at least 5 years.' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                <span className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-sm font-medium text-rose-400 flex-shrink-0">{i + 1}</span>
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm">{section.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-16">

        {/* Section 1 — What Is a Credit Note? */}
        <section id="what-is-credit-note">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-sm font-bold text-rose-400">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Credit Note?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A <strong className="text-white">credit note</strong> (sometimes called a <strong className="text-white">credit memo</strong> or <strong className="text-white">adjustment note</strong>) is a formal document issued by a seller that <strong className="text-white">reduces or cancels the amount owed on a previously issued invoice</strong>. It is not a standalone document &mdash; it always references an existing tax invoice and acts as a negative adjustment against it.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In practical terms, a credit note tells your client: &ldquo;You owe me less than what the original invoice stated.&rdquo; The reasons can range from a simple overcharge to returned goods, a cancelled service, or an error on the original invoice. Whatever the cause, the credit note creates a formal paper trail that both you and the ATO can follow.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For GST-registered freelancers and sole traders, credit notes carry additional weight. Under the <em>A New Tax System (Goods and Services Tax) Act 1999</em>, a credit note is classified as an <strong className="text-white">adjustment note</strong> &mdash; a document that triggers a GST adjustment event. This means the GST you originally reported on the sale must be corrected in your next Business Activity Statement (BAS).
            </p>
            <p className="text-gray-300 leading-relaxed">
              Think of it this way: if a tax invoice is a &ldquo;positive&rdquo; record of what&apos;s owed, a credit note is the &ldquo;negative&rdquo; counterpart. Together, they give you &mdash; and the ATO &mdash; an accurate picture of the actual transaction value.
            </p>
            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-6 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-rose-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <div>
                  <h4 className="text-rose-400 font-semibold mb-1">Key Point</h4>
                  <p className="text-sm text-gray-300">
                    A credit note is <strong className="text-white">not</strong> a new invoice. You never &ldquo;replace&rdquo; an original invoice by issuing a new one with a lower amount. The correct process is: keep the original invoice on record, then issue a credit note that references it. This maintains a complete audit trail for your records and the ATO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — When to Issue a Credit Note */}
        <section id="when-to-issue">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-sm font-bold text-rose-400">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">When to Issue a Credit Note</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              As a freelancer or sole trader, you&apos;ll encounter several situations where issuing a credit note is the correct course of action. Here are the most common scenarios:
            </p>
            <div className="space-y-4 my-6">
              {[
                {
                  title: 'Overcharging a Client',
                  desc: 'You invoiced $2,200 (incl. GST) for a project, but later realised the agreed price was $1,650. A credit note for $550 (including $50 GST adjustment) corrects the record.',
                  icon: (
                    <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Returned Goods or Rejected Deliverables',
                  desc: 'If a client returns products or rejects part of a deliverable, a credit note formally acknowledges the return and reduces the amount owed.',
                  icon: (
                    <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                  ),
                },
                {
                  title: 'Discount Applied After Invoice Was Sent',
                  desc: 'You agreed to a 10% discount after issuing the invoice. Rather than voiding and re-issuing, you create a credit note for the discount amount.',
                  icon: (
                    <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>
                  ),
                },
                {
                  title: 'Cancelled Service or Project',
                  desc: 'A client cancels a project after you\'ve invoiced but before (or during) delivery. A credit note for the full or partial amount clears the outstanding balance.',
                  icon: (
                    <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  ),
                },
                {
                  title: 'Invoice Error (Wrong Amount, Wrong Details)',
                  desc: 'A typo, calculation error, or wrong description on the invoice. Issue a credit note to correct the error, then issue a new corrected invoice if needed.',
                  icon: (
                    <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  ),
                },
              ].map((scenario, i) => (
                <div key={i} className="rounded-xl bg-gray-800/40 border border-gray-700/40 p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <h4 className="text-amber-400 font-semibold mb-1">Important Rule</h4>
                  <p className="text-sm text-gray-300">
                    Never delete or alter an original invoice to correct it. The ATO requires a complete audit trail. Always keep the original invoice as-is and issue a separate credit note to make corrections. If a corrected invoice is needed, issue a brand new invoice <strong className="text-white">after</strong> the credit note.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Credit Note vs Other Documents */}
        <section id="credit-note-vs-others">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-sm font-bold text-rose-400">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Credit Note vs Other Documents</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Credit notes are often confused with refunds, adjustment notes, and debit notes. While related, each serves a distinct purpose. Understanding the differences keeps your records clean and your ATO reporting accurate.
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Side-by-Side Comparison</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-900/50 p-4">
                  <h4 className="text-sm font-semibold text-rose-400 mb-2">Credit Note</h4>
                  <ul className="text-sm text-gray-400 space-y-1.5">
                    <li>&bull; Issued by the <strong className="text-gray-200">seller</strong></li>
                    <li>&bull; <strong className="text-gray-200">Reduces</strong> the amount a buyer owes</li>
                    <li>&bull; References a specific original invoice</li>
                    <li>&bull; Adjusts GST on the original sale</li>
                    <li>&bull; Is a <strong className="text-gray-200">document</strong>, not a payment</li>
                    <li>&bull; Can lead to a refund or offset future invoices</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4">
                  <h4 className="text-sm font-semibold text-pink-400 mb-2">Refund</h4>
                  <ul className="text-sm text-gray-400 space-y-1.5">
                    <li>&bull; A <strong className="text-gray-200">movement of money</strong> back to the buyer</li>
                    <li>&bull; Can follow a credit note, but doesn&apos;t have to</li>
                    <li>&bull; Doesn&apos;t replace the need for a credit note</li>
                    <li>&bull; Recorded as a payment transaction, not a document</li>
                    <li>&bull; The credit note is the <strong className="text-gray-200">paperwork</strong>; the refund is the <strong className="text-gray-200">cash</strong></li>
                    <li>&bull; Both are needed for a full audit trail</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4">
                  <h4 className="text-sm font-semibold text-fuchsia-400 mb-2">Adjustment Note</h4>
                  <ul className="text-sm text-gray-400 space-y-1.5">
                    <li>&bull; The ATO&apos;s formal term under the GST Act</li>
                    <li>&bull; Functionally <strong className="text-gray-200">identical</strong> to a credit note</li>
                    <li>&bull; Must be issued within 28 days of an adjustment event</li>
                    <li>&bull; Required for GST adjustments over $75</li>
                    <li>&bull; Can be titled &ldquo;Credit Note&rdquo; or &ldquo;Adjustment Note&rdquo;</li>
                    <li>&bull; Same document, different name</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4">
                  <h4 className="text-sm font-semibold text-violet-400 mb-2">Debit Note</h4>
                  <ul className="text-sm text-gray-400 space-y-1.5">
                    <li>&bull; Issued by the <strong className="text-gray-200">buyer</strong> (not the seller)</li>
                    <li>&bull; Requests a credit or reduction from the seller</li>
                    <li>&bull; The <strong className="text-gray-200">opposite</strong> of a credit note in terms of who issues it</li>
                    <li>&bull; Less common for freelancers</li>
                    <li>&bull; Seller may respond with a credit note</li>
                    <li>&bull; Also called a &ldquo;debit memo&rdquo;</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-6 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-rose-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <div>
                  <h4 className="text-rose-400 font-semibold mb-1">Common Confusion</h4>
                  <p className="text-sm text-gray-300">
                    Many freelancers issue a refund without first creating a credit note. This is a record-keeping gap. Even if you transfer money back to a client, you still need the credit note as the formal document that explains <strong className="text-white">why</strong> the adjustment was made and adjusts the GST accordingly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — ATO Requirements & GST Impact */}
        <section id="ato-gst-impact">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-sm font-bold text-rose-400">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">ATO Requirements &amp; GST Impact</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Under <strong className="text-white">Section 19-10 of the GST Act</strong>, issuing a credit note creates an <strong className="text-white">adjustment event</strong>. This has direct consequences for your GST reporting and BAS lodgement.
            </p>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">What the ATO Requires on a Credit Note</h3>
              <div className="space-y-3">
                {[
                  { num: '1', text: 'The words "Credit Note" or "Adjustment Note" — prominently displayed as the document title' },
                  { num: '2', text: 'Your ABN — the seller\'s 11-digit Australian Business Number' },
                  { num: '3', text: 'The date of issue — when the credit note was created' },
                  { num: '4', text: 'The reason for the credit — why the adjustment is being made (overcharge, cancellation, error, etc.)' },
                  { num: '5', text: 'Reference to the original tax invoice — the invoice number being adjusted' },
                  { num: '6', text: 'The credit amount — shown as a negative figure (e.g., -$1,100.00)' },
                  { num: '7', text: 'The GST adjustment amount — the GST being reversed (e.g., -$100.00)' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-3">
                    <span className="w-7 h-7 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-xs font-bold text-rose-400 flex-shrink-0 mt-0.5">{item.num}</span>
                    <p className="text-sm text-gray-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-pink-500/5 border border-pink-500/20 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">How a Credit Note Affects Your BAS</h3>
              <p className="text-sm text-gray-300 mb-4">
                When you issue a credit note, the GST adjustment must be reported in your <strong className="text-white">next BAS period</strong>. Here&apos;s exactly what changes:
              </p>
              <div className="space-y-3">
                {[
                  { label: 'G1 — Total Sales', desc: 'Reduced by the credit note amount (excl. GST). If you credited $1,000 + $100 GST, G1 decreases by $1,000.' },
                  { label: '1A — GST on Sales', desc: 'Reduced by the GST adjustment amount. In the above example, 1A decreases by $100.' },
                  { label: '1B — GST on Purchases', desc: 'May be affected if the credit note relates to a purchase you made (e.g., you received a credit note from a supplier).' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                    <div>
                      <span className="text-sm text-white font-medium">{item.label}</span>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Worked Example: Overcharge with GST</h3>
              <div className="space-y-4 text-sm">
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-rose-400">
                  <p className="text-rose-400 font-semibold mb-1">Original Invoice (INV-0042)</p>
                  <p className="text-gray-400">Web design project: $1,000.00 + $100.00 GST = <strong className="text-gray-200">$1,100.00 total</strong></p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-pink-400">
                  <p className="text-pink-400 font-semibold mb-1">Problem Discovered</p>
                  <p className="text-gray-400">You overcharged by $550.00 (incl. GST). The agreed price was actually $550.00 (incl. GST).</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-fuchsia-400">
                  <p className="text-fuchsia-400 font-semibold mb-1">Credit Note (CN-0042)</p>
                  <p className="text-gray-400">References INV-0042. Credit amount: <strong className="text-gray-200">-$500.00</strong> + GST adjustment: <strong className="text-gray-200">-$50.00</strong> = <strong className="text-gray-200">-$550.00 total</strong></p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-violet-400">
                  <p className="text-violet-400 font-semibold mb-1">BAS Impact (Next Period)</p>
                  <p className="text-gray-400">G1 decreases by $500.00 &bull; 1A decreases by $50.00 &bull; Net effect: $550.00 less revenue reported</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-6 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div>
                  <h4 className="text-amber-400 font-semibold mb-1">Timing Rule</h4>
                  <p className="text-sm text-gray-300">
                    If the GST adjustment is more than <strong className="text-white">$75</strong>, you (or your client) must issue an adjustment note within <strong className="text-white">28 days</strong> of the adjustment event. Either party can issue it &mdash; but as the seller, it&apos;s usually your responsibility. Don&apos;t delay &mdash; late adjustments can trigger ATO scrutiny.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — How to Create a Credit Note */}
        <section id="how-to-create">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-sm font-bold text-rose-400">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Create a Credit Note</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A well-structured credit note contains specific fields that satisfy both ATO requirements and good accounting practice. Here is the anatomy of a compliant credit note:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Required Fields</h3>
              <div className="space-y-4 text-sm">
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-rose-400">
                  <p className="text-rose-400 font-semibold mb-1">Document Title</p>
                  <p className="text-gray-400">Must clearly state <strong className="text-gray-200">&ldquo;Credit Note&rdquo;</strong> or <strong className="text-gray-200">&ldquo;Adjustment Note&rdquo;</strong> at the top. Never label it as an invoice.</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-pink-400">
                  <p className="text-pink-400 font-semibold mb-1">Reference to Original Invoice</p>
                  <p className="text-gray-400">Include the original tax invoice number (e.g., &ldquo;Adjusting INV-0042&rdquo;). This links the two documents in your records and the ATO&apos;s.</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-fuchsia-400">
                  <p className="text-fuchsia-400 font-semibold mb-1">Credit Note Number</p>
                  <p className="text-gray-400">A unique sequential number (e.g., CN-0001, CN-0002). Keep a separate numbering sequence from your invoices for clarity.</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-violet-400">
                  <p className="text-violet-400 font-semibold mb-1">Date of Issue</p>
                  <p className="text-gray-400">The date the credit note is created. This determines which BAS period the GST adjustment falls into.</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-purple-400">
                  <p className="text-purple-400 font-semibold mb-1">Reason / Description</p>
                  <p className="text-gray-400">A clear explanation of why the credit is being issued (e.g., &ldquo;Overcharge on web design project — correcting agreed price&rdquo;).</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-rose-300">
                  <p className="text-rose-300 font-semibold mb-1">Credit Amount</p>
                  <p className="text-gray-400">The amount being credited, shown as a negative figure. Include the subtotal (excl. GST) and the total (incl. GST).</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-l-4 border-pink-300">
                  <p className="text-pink-300 font-semibold mb-1">GST Adjustment Amount</p>
                  <p className="text-gray-400">The GST being reversed, shown separately. For a credit of $1,000 (excl. GST), the GST adjustment is -$100.00.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Credit Note Template Layout</h3>
              <div className="rounded-lg bg-gray-900/70 p-6 font-mono text-xs text-gray-400 space-y-3 overflow-x-auto">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-rose-400 font-bold text-sm">CREDIT NOTE</p>
                    <p className="text-gray-500 mt-1">Your Business Name</p>
                    <p className="text-gray-500">ABN: 12 345 678 901</p>
                    <p className="text-gray-500">your@email.com</p>
                  </div>
                  <div className="text-right">
                    <p>CN Number: <span className="text-gray-200">CN-0042</span></p>
                    <p>Date: <span className="text-gray-200">1 March 2026</span></p>
                    <p>Ref Invoice: <span className="text-gray-200">INV-0042</span></p>
                  </div>
                </div>
                <hr className="border-gray-700" />
                <div>
                  <p className="text-gray-500 mb-1">Bill To:</p>
                  <p className="text-gray-200">Client Business Pty Ltd</p>
                  <p className="text-gray-500">ABN: 98 765 432 109</p>
                </div>
                <hr className="border-gray-700" />
                <div>
                  <p className="text-gray-500 mb-1">Reason for Credit:</p>
                  <p className="text-gray-200">Overcharge on web design project — correcting to agreed price</p>
                </div>
                <hr className="border-gray-700" />
                <div className="grid grid-cols-3 gap-2 text-right">
                  <p className="text-left text-gray-500">Description</p>
                  <p className="text-gray-500">Amount</p>
                  <p className="text-gray-500">GST</p>
                  <p className="text-left text-gray-200">Price adjustment — web design</p>
                  <p className="text-rose-400">-$500.00</p>
                  <p className="text-rose-400">-$50.00</p>
                </div>
                <hr className="border-gray-700" />
                <div className="text-right space-y-1">
                  <p>Subtotal: <span className="text-rose-400">-$500.00</span></p>
                  <p>GST Adjustment: <span className="text-rose-400">-$50.00</span></p>
                  <p className="text-gray-200 font-bold">Total Credit: <span className="text-rose-400">-$550.00</span></p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Pro tip:</strong> Use invoicing software like InvoiceFlow that automatically links credit notes to original invoices, calculates the GST adjustment, and includes all ATO-required fields. This eliminates manual errors and ensures every credit note is fully compliant.
            </p>
          </div>
        </section>

        {/* Section 6 — Record Keeping */}
        <section id="record-keeping">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-sm font-bold text-rose-400">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Record Keeping</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO takes record keeping seriously, and credit notes are no exception. As a formal adjustment document, a credit note carries the same retention requirements as the invoices it references.
            </p>
            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Credit Note Record Keeping Rules</h3>
              <div className="space-y-3">
                {[
                  { bold: 'Keep for at least 5 years', text: ' — from when you prepared the credit note or completed the related transaction, whichever is later.' },
                  { bold: 'Store alongside the original invoice', text: ' — the credit note and the invoice it references should be linked in your records. Anyone reviewing your accounts should be able to trace the adjustment back to the original sale.' },
                  { bold: 'Include in your BAS calculations', text: ' — ensure the GST adjustment from every credit note is captured in the correct BAS period. Missing an adjustment means you\'re over-reporting GST.' },
                  { bold: 'Digital records are fine', text: ' — the ATO accepts electronic records as long as they are readable, complete, and accessible. Cloud-based invoicing software satisfies this requirement automatically.' },
                  { bold: 'Maintain a credit note register', text: ' — keep a log of all credit notes issued, including the CN number, date, referenced invoice, amount, and reason. This makes BAS lodgement and audits significantly easier.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300"><strong className="text-white">{item.bold}</strong>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Common Record-Keeping Mistakes</h3>
              <div className="space-y-4">
                {[
                  { title: 'Issuing a refund without a credit note', desc: 'A bank transfer or PayPal refund is not a credit note. You need both: the credit note (document) and the refund (cash movement). Without the credit note, your GST isn\'t adjusted and your records are incomplete.' },
                  { title: 'Not linking the credit note to the original invoice', desc: 'A credit note that doesn\'t reference a specific invoice number is effectively incomplete. The ATO needs to see the connection between the two documents.' },
                  { title: 'Forgetting to adjust the BAS', desc: 'Issuing a credit note without reporting the GST adjustment in your next BAS means you\'re over-paying GST. Review all credit notes before lodging each BAS.' },
                  { title: 'Deleting the original invoice after issuing a credit note', desc: 'Both documents must exist in your records. The credit note adjusts the original invoice — it does not replace or void it. Keep both for the full 5-year retention period.' },
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
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to create and manage credit notes and invoices</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-rose-500/40 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">{tool.icon}</div>
              <h3 className="text-white font-medium mb-2 group-hover:text-rose-400 transition-colors">{tool.title}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-rose-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">Dive deeper into invoicing, GST, and compliance</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-pink-500/40 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-pink-400 transition-colors">{guide.title}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-pink-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-rose-400 transition-colors">
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
        <h2 className="text-3xl font-bold text-white mb-4">Create ATO-Compliant Credit Notes in Seconds</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">InvoiceFlow automatically links credit notes to original invoices, calculates GST adjustments, and includes every ATO-required field. Start free.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup"><Button>Start Free &mdash; No Card Required</Button></Link>
          <Link href="/tools/credit-note-generator"><Button variant="secondary">Try Credit Note Generator</Button></Link>
        </div>
      </section>
    </div>
  );
}
