import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Credit Note Software for Australian Freelancers — InvoiceFlow',
  description:
    'Issue professional credit notes for refunds, adjustments, and corrections. ATO-compliant, GST-aware, linked to original invoices. Generate credit notes in 30 seconds. Free to start.',
  alternates: { canonical: '/use-cases/credit-notes' },
  keywords: ['credit note software australia', 'credit note template freelancer', 'how to issue credit note', 'ATO credit note requirements', 'adjustment note GST'],
  openGraph: {
    title: 'Credit Notes & Adjustments — Handle Refunds Professionally',
    description:
      'Issue ATO-compliant credit notes for refunds, corrections, and adjustments. InvoiceFlow links credit notes to original invoices and adjusts GST automatically.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Use Cases', item: 'https://invoiceflow-teal.vercel.app/use-cases' },
    { '@type': 'ListItem', position: 3, name: 'Credit Notes', item: 'https://invoiceflow-teal.vercel.app/use-cases/credit-notes' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a credit note in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A credit note (also called an adjustment note for GST purposes) is a document issued to correct or cancel all or part of a previously issued tax invoice. Under Australian GST law, if you reduce the price of a taxable supply by $75 or more (GST-inclusive), you must issue an adjustment note within 28 days. Credit notes adjust both the amount owed and the GST reported on your BAS.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do I need to issue a credit note?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need to issue a credit note when: (1) You overcharged a client and need to correct the amount, (2) A client returns goods or cancels a service, (3) You agreed to a discount after the invoice was sent, (4) Work scope was reduced mid-project, or (5) An invoice contained errors. For GST-registered businesses, the ATO requires an adjustment note for any price reduction of $75 or more (GST-inclusive).',
      },
    },
    {
      '@type': 'Question',
      name: 'What must a credit note include for ATO compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An ATO-compliant credit note (adjustment note) must include: your identity (business name and ABN), the date issued, a brief description of the adjustment, the reference to the original tax invoice, the difference in GST amount, and whether the GST is increasing or decreasing. InvoiceFlow automatically includes all required fields and links to the original invoice.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do credit notes affect my BAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Credit notes reduce the GST you report on your BAS. If you issued a $1,100 (inc. GST) invoice and later issue a $550 credit note, you only report $50 GST instead of $100. The adjustment is reported in the BAS period when the credit note is issued, not when the original invoice was raised. InvoiceFlow tracks this automatically for accurate BAS reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I issue a partial credit note?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Partial credit notes are common when only part of a service was delivered, a partial refund is agreed, or there\'s a pricing dispute on specific line items. InvoiceFlow lets you credit specific line items or a custom amount against any invoice, with GST automatically recalculated on the adjusted amount.',
      },
    },
  ],
};

const creditNoteTypes = [
  { name: 'Full Credit', desc: 'Cancel an entire invoice — full refund for cancelled projects or services', example: 'Project cancelled before work began', color: 'border-violet-500/20' },
  { name: 'Partial Credit', desc: 'Adjust specific line items or reduce the invoice by a partial amount', example: 'Scope reduced mid-project, 2 of 5 deliverables removed', color: 'border-purple-500/20' },
  { name: 'Pricing Adjustment', desc: 'Correct overcharges or apply agreed discounts after invoicing', example: 'Agreed to 10% discount after invoice was sent', color: 'border-fuchsia-500/20' },
  { name: 'Error Correction', desc: 'Fix mistakes on the original invoice — wrong quantities, rates, or descriptions', example: 'Billed 20 hours instead of 18 hours', color: 'border-pink-500/20' },
];

const whoNeedsIt = [
  { profession: 'Web Developers', reason: 'Scope changes and cancelled features require partial credits', link: '/for/web-developers' },
  { profession: 'Designers', reason: 'Revision disputes and project cancellations need clean documentation', link: '/for/graphic-designers' },
  { profession: 'Consultants', reason: 'Retainer adjustments and service level changes', link: '/for/consultants' },
  { profession: 'Photographers', reason: 'Event cancellations and reduced package credits', link: '/for/photographers' },
  { profession: 'Accountants', reason: 'Client fee adjustments and scope reductions', link: '/for/accountants' },
  { profession: 'Event Planners', reason: 'Vendor cancellations and budget adjustments', link: '/for/event-planners' },
];

const relatedTools = [
  { name: 'Credit Note Generator', href: '/tools/credit-note-generator', desc: 'Create credit notes instantly' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create the original invoice' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST adjustments' },
  { name: 'Tax Invoice Checker', href: '/tools/tax-invoice-compliance-checker', desc: 'Verify ATO compliance' },
  { name: 'Payment Receipt Generator', href: '/tools/payment-receipt-generator', desc: 'Receipt for refund payments' },
  { name: 'Contract Generator', href: '/tools/contract-generator', desc: 'Include refund terms upfront' },
];

export default function CreditNotesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Navigation */}
      <nav className="border-b border-white/5 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            InvoiceFlow
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-400">
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/tools" className="hover:text-white transition-colors">Free Tools</Link>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
          </div>
          <Link href="/signup">
            <Button size="sm">Start Free</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <div className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400 mb-8">
          Credit Notes & Adjustments
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Handle refunds{' '}
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            professionally
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Issue ATO-compliant credit notes for refunds, adjustments, and corrections. Linked to original invoices, GST auto-adjusted, BAS-ready. Done in 30 seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/credit-note-generator">
            <Button variant="secondary" size="lg">Try the Credit Note Generator</Button>
          </Link>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">The credit note problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          When things change mid-project, your invoicing needs to keep up — professionally and compliantly.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { pain: 'Not sure what a credit note needs for ATO compliance', fix: 'InvoiceFlow auto-includes all required fields — ABN, adjustment amount, GST, original reference' },
            { pain: 'Manually recalculating GST when issuing partial refunds', fix: 'GST automatically adjusted on credit notes and reflected in BAS reporting' },
            { pain: 'Losing track of which invoices have been credited', fix: 'Credit notes linked to original invoices with full audit trail' },
            { pain: 'Creating credit notes from scratch in Word or Excel', fix: 'One-click credit note generation from any existing invoice' },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-red-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <p className="text-sm text-slate-400">{item.pain}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-violet-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-violet-300 font-medium">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Credit Note Types */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Types of credit notes</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          InvoiceFlow handles every credit note scenario — from full cancellations to minor corrections.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {creditNoteTypes.map((type) => (
            <div key={type.name} className={`rounded-xl border ${type.color} bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors`}>
              <h3 className="font-bold text-white mb-2">{type.name}</h3>
              <p className="text-sm text-slate-400 mb-3">{type.desc}</p>
              <div className="text-xs text-violet-400/80 font-medium italic">&ldquo;{type.example}&rdquo;</div>
            </div>
          ))}
        </div>
      </section>

      {/* ATO Requirements */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">ATO credit note requirements</h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          InvoiceFlow automatically includes everything the ATO requires on an adjustment note.
        </p>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left p-4 text-slate-400 font-medium">Requirement</th>
                <th className="text-center p-4 text-slate-400 font-medium w-32">InvoiceFlow</th>
              </tr>
            </thead>
            <tbody>
              {[
                'Your business name and ABN',
                'Date of issue',
                'Reference to original tax invoice',
                'Description of adjustment',
                'GST amount difference',
                'Whether GST is increasing or decreasing',
                '$75+ threshold tracking',
                '28-day issuance deadline alerts',
              ].map((req) => (
                <tr key={req} className="border-b border-white/5 last:border-0">
                  <td className="p-4 text-slate-300">{req}</td>
                  <td className="p-4 text-center">
                    <span className="text-violet-400">
                      <svg className="w-5 h-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Who Needs It */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Who issues credit notes?</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Any freelancer who&apos;s ever had a scope change, cancellation, or pricing adjustment.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoNeedsIt.map((item) => (
            <Link
              key={item.profession}
              href={item.link}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-violet-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors mb-1">
                {item.profession}
              </h3>
              <p className="text-xs text-slate-500">{item.reason}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free tools for credit notes</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required. Use them right now.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-violet-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-violet-400 hover:text-violet-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Email Capture */}
      <section className="mx-auto max-w-2xl px-6 py-12">
        <EmailCapture />
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Simple pricing for credit notes</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free, upgrade for unlimited invoicing and credit notes.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, basic credit notes</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-6 ring-1 ring-violet-500/20">
            <div className="text-xs text-violet-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, credit notes, BAS tracking</p>
            <Link href="/signup"><Button size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Premium</h3>
            <div className="text-3xl font-bold text-white mb-3">$39<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Multi-business, API access, white-label</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Credit note FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-violet-400 transition-colors list-none flex justify-between items-center">
                {faq.name}
                <svg className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Issue credit notes in 30 seconds</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          ATO-compliant, linked to original invoices, GST auto-adjusted. Handle refunds and adjustments like a professional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup"><Button size="lg">Start Free — 5 Invoices/Month</Button></Link>
          <Link href="/use-cases" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors">
            View all use cases &rarr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} InvoiceFlow. Built in Melbourne, Australia.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
