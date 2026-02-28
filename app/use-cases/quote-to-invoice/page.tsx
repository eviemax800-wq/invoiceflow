import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Quote to Invoice Software — Convert Quotes Instantly — InvoiceFlow',
  description:
    'Send professional quotes, get client approval, and convert to ATO-compliant tax invoices in one click. No re-entering data. Built for Australian freelancers and tradies.',
  alternates: { canonical: '/use-cases/quote-to-invoice' },
  keywords: ['quote to invoice software', 'quoting software australia', 'estimate to invoice', 'quote generator freelancer', 'convert quote to invoice'],
  openGraph: {
    title: 'Quote to Invoice — One Click Conversion, Zero Re-Entry',
    description:
      'Create quotes, get approval, convert to tax invoices instantly. All details carry over — line items, rates, GST. Built for Australian freelancers and tradies.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Use Cases', item: 'https://invoiceflow-teal.vercel.app/use-cases' },
    { '@type': 'ListItem', position: 3, name: 'Quote to Invoice', item: 'https://invoiceflow-teal.vercel.app/use-cases/quote-to-invoice' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a quote and an invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A quote (or estimate) is a proposed price for work before it begins — it\'s not a request for payment. An invoice (specifically a tax invoice in Australia) is a legal request for payment for work already completed or in progress. A quote becomes binding once accepted by the client. InvoiceFlow lets you convert an accepted quote into a tax invoice with one click, carrying over all details.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to include GST on quotes in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you\'re GST-registered, you should show GST on your quotes so clients know the total cost. Best practice is to show the subtotal, GST amount, and total including GST. When the quote converts to an invoice, InvoiceFlow automatically includes all GST details required for a valid tax invoice under ATO rules.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should a quote be valid for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard quote validity in Australia is 14-30 days. For volatile industries (construction, materials-dependent work), 7-14 days is more appropriate. InvoiceFlow lets you set an expiry date on each quote and tracks which quotes have been accepted, expired, or are pending. This protects you from price changes eating into your margin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I change a quote after sending it to the client?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Before acceptance, you can revise a quote and resend it with updated line items, quantities, or rates. InvoiceFlow tracks quote versions so you have a record of what was originally proposed and what was revised. Once a client accepts a quote, it should only change with mutual agreement — documented via a variation or change order.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should be included in a professional quote?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A professional quote should include: your business name and ABN, client details, quote date and number, validity period, detailed scope of work with line items, quantities and unit prices, GST breakdown (if registered), total amount, payment terms (e.g., 50% deposit on acceptance), and any terms and conditions. InvoiceFlow\'s quote generator includes all these fields.',
      },
    },
  ],
};

const workflow = [
  { step: '1', title: 'Create your quote', desc: 'Build a professional quote with line items, quantities, rates, and GST. Add your scope of work, payment terms, and validity period.', color: 'from-amber-500 to-orange-500' },
  { step: '2', title: 'Send to your client', desc: 'Email the quote directly from InvoiceFlow or download as a branded PDF. Your client reviews and can approve online.', color: 'from-amber-500 to-orange-500' },
  { step: '3', title: 'Client accepts', desc: 'Client accepts the quote with one click. InvoiceFlow notifies you and marks the quote as accepted with a timestamp.', color: 'from-amber-500 to-orange-500' },
  { step: '4', title: 'Convert to invoice', desc: 'One click converts the quote to a tax invoice. All line items, rates, GST, and client details carry over. No re-entry.', color: 'from-amber-500 to-orange-500' },
];

const whoNeedsIt = [
  { profession: 'Tradies', reason: 'Quote jobs on-site, convert to invoices after completion', link: '/for/tradies' },
  { profession: 'Creatives', reason: 'Scope creative projects with revision limits and usage rights', link: '/for/creatives' },
  { profession: 'Web Developers', reason: 'Detailed project quotes with hourly or fixed-price options', link: '/for/web-developers' },
  { profession: 'Cleaners', reason: 'Quote regular cleaning schedules, convert to recurring invoices', link: '/for/cleaners' },
  { profession: 'Event Planners', reason: 'Multi-item event quotes with deposits and milestone payments', link: '/for/event-planners' },
  { profession: 'Photographers', reason: 'Package quotes with add-ons and usage licensing', link: '/for/photographers' },
];

const relatedTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional invoices' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Price your services right' },
  { name: 'Service Package Builder', href: '/tools/service-package-builder', desc: 'Build quote packages' },
  { name: 'Contract Generator', href: '/tools/contract-generator', desc: 'Create service agreements' },
  { name: 'Client Red Flag Checker', href: '/tools/client-red-flag-checker', desc: 'Vet clients before quoting' },
  { name: 'Scope Change Calculator', href: '/tools/scope-change-calculator', desc: 'Handle scope creep' },
];

export default function QuoteToInvoicePage() {
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
        <div className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400 mb-8">
          Quote to Invoice
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Quote it, win it,{' '}
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            invoice it — one click
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Send professional quotes, track approvals, and convert to ATO-compliant tax invoices instantly. All details carry over — zero re-entry, zero mistakes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/invoice-generator">
            <Button variant="secondary" size="lg">Try the Invoice Generator</Button>
          </Link>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '1-click', label: 'Quote to invoice' },
            { num: '14-30', label: 'Days quote validity' },
            { num: '100%', label: 'Data carried over' },
            { num: '$0', label: 'To start' },
          ].map((stat) => (
            <div key={stat.label} className="text-center rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                {stat.num}
              </div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How quote-to-invoice works</h2>
        <div className="space-y-8">
          {workflow.map((s) => (
            <div key={s.step} className="flex gap-6 items-start">
              <div className={`shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-white font-bold text-sm`}>
                {s.step}
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{s.title}</h3>
                <p className="text-sm text-slate-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote vs Invoice Comparison */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Quote vs Invoice — what&apos;s the difference?</h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Understanding the difference matters for ATO compliance and client trust.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 font-medium text-slate-400">Feature</th>
                <th className="text-left py-3 px-4 font-medium text-amber-400">Quote</th>
                <th className="text-left py-3 px-4 font-medium text-teal-400">Tax Invoice</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Purpose', quote: 'Proposed price for work', invoice: 'Request for payment' },
                { feature: 'Legally binding?', quote: 'Only once accepted', invoice: 'Yes — legal payment demand' },
                { feature: 'When sent', quote: 'Before work begins', invoice: 'During or after work' },
                { feature: 'GST required?', quote: 'Recommended but optional', invoice: 'Required if GST-registered' },
                { feature: 'ABN required?', quote: 'Best practice', invoice: 'Mandatory' },
                { feature: 'Validity', quote: '14-30 days typical', invoice: 'Payment terms (7-30 days)' },
                { feature: 'Can be revised?', quote: 'Yes, before acceptance', invoice: 'Via credit note only' },
              ].map((row) => (
                <tr key={row.feature} className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-medium">{row.feature}</td>
                  <td className="py-3 px-4 text-slate-400">{row.quote}</td>
                  <td className="py-3 px-4 text-slate-400">{row.invoice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">The quoting problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Most freelancers waste time re-creating information that already exists in their quotes.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { pain: 'Re-typing line items from the quote into the invoice', fix: 'One-click conversion — everything carries over automatically' },
            { pain: 'Quotes in Word docs with no tracking or expiry', fix: 'Professional branded quotes with approval tracking and expiry dates' },
            { pain: 'Losing track of which quotes were accepted', fix: 'Dashboard shows pending, accepted, expired, and converted quotes' },
            { pain: 'Inconsistent pricing between quote and invoice', fix: 'Exact figures carry over — no rounding errors or missed line items' },
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
                <span className="text-amber-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-amber-300 font-medium">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Needs It */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Who uses quote-to-invoice?</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Any freelancer who provides estimates or quotes before starting work.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoNeedsIt.map((item) => (
            <Link
              key={item.profession}
              href={item.link}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-amber-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors mb-1">
                {item.profession}
              </h3>
              <p className="text-xs text-slate-500">{item.reason}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free tools for quoting</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-amber-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-teal-400 hover:text-teal-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Email Capture */}
      <section className="mx-auto max-w-2xl px-6 py-12">
        <EmailCapture />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Quote to invoice FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-amber-400 transition-colors list-none flex justify-between items-center">
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stop re-typing quotes into invoices</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Create professional quotes, track approvals, and convert to tax invoices in one click. All with automatic GST.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup"><Button size="lg">Start Free — 5 Invoices/Month</Button></Link>
          <Link href="/use-cases" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors">
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
