import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Proforma Invoice Software for Australian Freelancers — InvoiceFlow',
  description:
    'Create professional proforma invoices before work begins. Outline scope, costs, and terms upfront. Convert to tax invoices on acceptance. GST-compliant. Free to start.',
  alternates: { canonical: '/use-cases/proforma-invoicing' },
  keywords: ['proforma invoice software australia', 'proforma invoice template freelancer', 'preliminary invoice generator', 'proforma invoice vs tax invoice', 'proforma invoice GST australia'],
  openGraph: {
    title: 'Proforma Invoicing — Set Expectations Before Work Begins',
    description:
      'Create proforma invoices that outline scope, costs, and payment terms. Convert to ATO-compliant tax invoices with one click when work is approved.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Use Cases', item: 'https://invoiceflow-teal.vercel.app/use-cases' },
    { '@type': 'ListItem', position: 3, name: 'Proforma Invoicing', item: 'https://invoiceflow-teal.vercel.app/use-cases/proforma-invoicing' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a proforma invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A proforma invoice is a preliminary bill of sale sent before work is performed or goods are delivered. It outlines the scope of work, costs, payment terms, and conditions — essentially a "good faith" estimate that the client can review before committing. Unlike a tax invoice, a proforma invoice is not a demand for payment and doesn\'t create a tax obligation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a proforma invoice and a tax invoice in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tax invoice is a legal document required by the ATO for GST-registered businesses. It creates a payment obligation and must include your ABN, GST amount, and other mandatory details. A proforma invoice is NOT a tax invoice — it\'s a preliminary document showing expected costs. You cannot claim GST credits on a proforma invoice. Once work is completed and accepted, you convert the proforma to a proper tax invoice.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should a freelancer use a proforma invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use proforma invoices when: (1) A new client wants to see costs before committing, (2) The project scope needs formal approval before work begins, (3) You need pre-payment or a deposit before starting, (4) International clients need the document for import/customs purposes, or (5) You want to formalise a quote with more detail than a simple estimate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GST apply to proforma invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Proforma invoices are not tax invoices and do not create a GST obligation. However, it\'s good practice to show the estimated GST amount so clients know the total expected cost. When you convert the proforma to a tax invoice (after the client accepts and work begins), that\'s when GST applies and must be reported on your BAS.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I convert a proforma invoice to a tax invoice in InvoiceFlow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow lets you create a proforma invoice, send it for client review, and convert it to a full ATO-compliant tax invoice with one click once approved. All details carry over — line items, quantities, rates, and notes. The tax invoice gets a new invoice number, date, and proper GST calculation. No re-entering data.',
      },
    },
  ],
};

const proformaVsTax = [
  { feature: 'Legal status', proforma: 'Preliminary estimate', tax: 'Legal demand for payment' },
  { feature: 'GST obligation', proforma: 'No (informational only)', tax: 'Yes (must report on BAS)' },
  { feature: 'ABN required', proforma: 'Recommended', tax: 'Mandatory if GST-registered' },
  { feature: 'Payment obligation', proforma: 'None', tax: 'Client must pay by due date' },
  { feature: 'GST credits', proforma: 'Cannot be claimed', tax: 'Can be claimed by recipient' },
  { feature: 'When issued', proforma: 'Before work begins', tax: 'After goods/services supplied' },
  { feature: 'Numbering', proforma: 'Prefixed (PF-001)', tax: 'Sequential (INV-001)' },
];

const whoNeedsIt = [
  { profession: 'Web Developers', reason: 'Scope and cost approval before starting builds', link: '/for/web-developers' },
  { profession: 'Architects', reason: 'Stage-based fee proposals for construction projects', link: '/for/architects' },
  { profession: 'Consultants', reason: 'Formal cost estimates for advisory engagements', link: '/for/consultants' },
  { profession: 'Photographers', reason: 'Package pricing approval before booking shoots', link: '/for/photographers' },
  { profession: 'Tradies', reason: 'Detailed job quotes with material and labour breakdowns', link: '/for/tradies' },
  { profession: 'Event Planners', reason: 'Full event cost proposals before booking vendors', link: '/for/event-planners' },
];

const relatedTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create proforma and tax invoices' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate estimated GST' },
  { name: 'Service Package Builder', href: '/tools/service-package-builder', desc: 'Structure your service packages' },
  { name: 'Project Brief Generator', href: '/tools/project-brief-generator', desc: 'Define scope before invoicing' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Calculate your project rate' },
  { name: 'Contract Generator', href: '/tools/contract-generator', desc: 'Formalise terms with the proforma' },
];

export default function ProformaInvoicingPage() {
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
        <div className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400 mb-8">
          Proforma Invoicing
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Set expectations{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            before work begins
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Create professional proforma invoices that outline scope, costs, and terms. Get client approval first, then convert to a tax invoice with one click. No surprises, no disputes.
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

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">The scope creep problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Without a proforma, you&apos;re starting work on a handshake. When scope changes, you&apos;re stuck.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { pain: 'Starting work without formal cost approval', fix: 'Proforma invoice gets written approval before you commit a single hour' },
            { pain: 'Clients shocked by the final invoice amount', fix: 'No surprises — they approved the proforma with all costs itemised' },
            { pain: 'Scope creep with no paper trail', fix: 'Proforma documents the agreed scope — changes require a new proforma' },
            { pain: 'Creating tax invoices from scratch after the fact', fix: 'One-click conversion from proforma to ATO-compliant tax invoice' },
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
                <span className="text-emerald-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-emerald-300 font-medium">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proforma vs Tax Invoice Comparison */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Proforma invoice vs tax invoice</h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Understanding the difference is crucial for ATO compliance and client management.
        </p>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left p-4 text-slate-400 font-medium">Feature</th>
                <th className="text-center p-4 text-emerald-400 font-medium">Proforma</th>
                <th className="text-center p-4 text-teal-400 font-medium">Tax Invoice</th>
              </tr>
            </thead>
            <tbody>
              {proformaVsTax.map((row) => (
                <tr key={row.feature} className="border-b border-white/5 last:border-0">
                  <td className="p-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className="p-4 text-center text-slate-400 text-xs">{row.proforma}</td>
                  <td className="p-4 text-center text-slate-400 text-xs">{row.tax}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How proforma invoicing works</h2>
        <div className="space-y-8">
          {[
            { step: '1', title: 'Create the proforma', desc: 'Itemise scope, costs, payment terms, and timeline. InvoiceFlow marks it clearly as a proforma — not a tax invoice.' },
            { step: '2', title: 'Send for approval', desc: 'Email the proforma to your client. They review scope, costs, and terms before any work begins.' },
            { step: '3', title: 'Get sign-off', desc: 'Client approves (or requests changes). Either way, you have a documented agreement before starting.' },
            { step: '4', title: 'Convert to tax invoice', desc: 'One click converts the approved proforma to an ATO-compliant tax invoice with GST calculated and a proper invoice number.' },
          ].map((s) => (
            <div key={s.step} className="flex gap-6 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm">
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

      {/* Who Needs It */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Who uses proforma invoices?</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Any freelancer who wants to eliminate scope creep and get paid without disputes.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoNeedsIt.map((item) => (
            <Link
              key={item.profession}
              href={item.link}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1">
                {item.profession}
              </h3>
              <p className="text-xs text-slate-500">{item.reason}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free tools for proforma invoicing</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required. Use them right now.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
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
        <h2 className="text-3xl font-bold mb-4">Simple pricing for proforma invoicing</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free, upgrade for unlimited proformas and one-click conversion.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, basic proformas</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 ring-1 ring-emerald-500/20">
            <div className="text-xs text-emerald-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, proforma conversion, tracking</p>
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
        <h2 className="text-3xl font-bold text-center mb-10">Proforma invoicing FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors list-none flex justify-between items-center">
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stop starting work without approval</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Proforma invoices protect you from scope creep, payment disputes, and unhappy clients. Get everything in writing before the first hour is billed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup"><Button size="lg">Start Free — 5 Invoices/Month</Button></Link>
          <Link href="/use-cases" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
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
