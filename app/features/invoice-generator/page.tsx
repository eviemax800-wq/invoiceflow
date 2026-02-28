import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Free Invoice Generator for Australian Freelancers — InvoiceFlow',
  description:
    'Create professional invoices in 30 seconds. Free invoice generator with ABN, GST auto-calculation, and ATO-compliant templates built for Australian freelancers and sole traders.',
  keywords: [
    'free invoice generator australia',
    'create invoice online free',
    'invoice maker for freelancers',
    'australian invoice template',
    'tax invoice generator',
    'abn invoice creator',
    'gst invoice generator',
    'freelance invoice maker australia',
  ],
  alternates: { canonical: '/features/invoice-generator' },
  openGraph: {
    title: 'Free Invoice Generator — Create Professional Invoices in 30 Seconds',
    description:
      'Professional invoice generator for Australian freelancers. ABN and GST auto-filled, ATO-compliant templates, and PDF download. Free to start — no credit card required.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://invoiceflow-teal.vercel.app/features' },
    { '@type': 'ListItem', position: 3, name: 'Invoice Generator', item: 'https://invoiceflow-teal.vercel.app/features/invoice-generator' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need an ABN to create an invoice in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you\'re operating a business or providing services as a sole trader, you need an Australian Business Number (ABN) on your invoices. Without an ABN, the payer is legally required to withhold 47% of the payment amount under the no-ABN withholding rules. InvoiceFlow includes an ABN field on every invoice template to ensure you never forget it.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do I need to charge GST on my invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must register for GST and charge 10% GST on your invoices once your annual turnover reaches $75,000 (or $150,000 for non-profit organisations). Below that threshold, GST registration is optional. InvoiceFlow tracks your invoiced income and alerts you as you approach the $75K threshold so you can register on time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a tax invoice and a regular invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tax invoice is required when you charge GST. It must include the words "Tax Invoice", your ABN, the GST amount, the total price including GST, and the date of issue. For invoices over $1,000, you must also include the buyer\'s ABN and itemised GST amounts. A regular invoice (non-GST) still needs your ABN, date, description, and total — but without the GST breakdown. InvoiceFlow automatically generates the correct format based on your GST registration status.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I invoice without an ABN in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you don\'t include a valid ABN on your invoice, the payer must withhold 47% of the payment and send it to the ATO under the Pay As You Go (PAYG) withholding rules. This is a significant cash flow hit — on a $1,000 invoice, you\'d only receive $530. Always include your ABN to avoid this. InvoiceFlow makes your ABN a required field so you can never accidentally send an invoice without it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What information does the ATO require on an Australian invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO requires every tax invoice to include: your identity (business name), your ABN, the date of issue, a brief description of items or services supplied, the GST amount (if applicable), and the total price. For invoices totalling $1,000 or more (including GST), you must also show the buyer\'s identity or ABN and the GST amount for each line item. InvoiceFlow pre-fills all mandatory fields so every invoice you send is fully ATO-compliant.',
      },
    },
  ],
};

export default function InvoiceGeneratorFeaturePage() {
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
        <div className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 mb-8">
          Professional Invoicing
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Create professional invoices in{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            30 seconds
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop wrestling with Word templates and spreadsheets. InvoiceFlow&apos;s free invoice generator creates ATO-compliant invoices with your ABN, GST auto-calculated, and professional branding — ready to send or download as PDF.
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
        <h2 className="text-3xl font-bold text-center mb-4">The invoicing problems you know too well</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Australian freelancers waste 5+ hours a month on invoicing admin. Here&apos;s what InvoiceFlow fixes.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { pain: 'Manually editing Word or Excel invoice templates every time', fix: 'Professional templates that auto-fill your business details and line items' },
            { pain: 'Forgetting to include your ABN or GST on invoices', fix: 'Auto-compliance — ABN required, GST calculated automatically based on your registration' },
            { pain: 'Chasing consistent formatting and professional branding', fix: 'Consistent branded invoices every time with your logo, colours, and payment terms' },
            { pain: 'Losing track of sent invoices buried in email threads', fix: 'Cloud storage with full invoice history, payment status tracking, and search' },
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
                <span className="text-blue-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-blue-300 font-medium">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">How it works</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Four steps. Thirty seconds. One professional invoice ready to send.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: '1', title: 'Add client details', desc: 'Enter your client&apos;s name, email, and ABN. Save them for next time — one click to reuse.' },
            { step: '2', title: 'Add line items + GST', desc: 'Describe your services, set quantities and rates. GST is calculated automatically if you&apos;re registered.' },
            { step: '3', title: 'Preview + customise', desc: 'See your invoice in real-time. Add your logo, adjust payment terms, and choose your template.' },
            { step: '4', title: 'Send or download PDF', desc: 'Email directly to your client or download a polished PDF. InvoiceFlow tracks everything.' },
          ].map((item) => (
            <div key={item.step} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-white font-bold text-lg mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The numbers that matter</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { stat: '30sec', label: 'to create an invoice', desc: 'From blank to sent in under a minute' },
            { stat: '$0', label: 'to start', desc: 'Free tier with 5 invoices per month' },
            { stat: '100%', label: 'ATO compliant', desc: 'ABN, GST, and tax invoice requirements built in' },
            { stat: '5 free', label: 'invoices per month', desc: 'No credit card, no trial expiry, no tricks' },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                {item.stat}
              </div>
              <div className="text-sm font-medium text-white mb-2">{item.label}</div>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who Creates Invoices */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Who creates invoices with InvoiceFlow?</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Thousands of Australian professionals use InvoiceFlow to get paid faster and look more professional.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { profession: 'Sole Traders', desc: 'ABN invoicing, GST tracking, and BAS-ready exports for every sole trader in Australia', link: '/for/sole-traders' },
            { profession: 'Freelancers', desc: 'Project-based invoicing with rate calculators, time tracking, and payment reminders', link: '/for/freelancers' },
            { profession: 'Contractors', desc: 'Milestone billing, contract-linked invoices, and automatic payment schedules', link: '/for/contractors' },
            { profession: 'Tradies', desc: 'Quote-to-invoice conversion, materials markup, and on-site mobile invoicing', link: '/for/tradies' },
            { profession: 'Consultants', desc: 'Retainer billing, hourly rate tracking, and professional consulting invoice templates', link: '/for/consultants' },
            { profession: 'Photographers', desc: 'Session packages, deposit invoicing, and usage licensing built into every invoice', link: '/for/photographers' },
          ].map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-1">
                {item.profession}
              </h3>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free invoicing tools</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required. Use them right now.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create and download professional invoices' },
            { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST inclusive and exclusive amounts' },
            { name: 'Quote Generator', href: '/tools/quote-generator', desc: 'Send professional quotes to win more work' },
            { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Find the right hourly or project rate' },
            { name: 'Invoice Numbering System', href: '/tools/invoice-numbering-system', desc: 'Generate consistent, professional invoice numbers' },
            { name: 'Payment Receipt Generator', href: '/tools/payment-receipt-generator', desc: 'Create receipts when clients pay' },
          ].map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{tool.name}</h3>
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

      {/* Pricing */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Simple pricing for invoice creation</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free, upgrade when your business grows. No hidden fees.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, GST auto-calc, PDF download</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6 ring-1 ring-blue-500/20">
            <div className="text-xs text-blue-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, custom branding, payment tracking</p>
            <Link href="/signup"><Button size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Premium</h3>
            <div className="text-3xl font-bold text-white mb-3">$39<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Multi-business, API access, white-label invoices</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Invoice generator FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-blue-400 transition-colors list-none flex justify-between items-center">
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start creating professional invoices today</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian freelancers who&apos;ve ditched Word templates and spreadsheets for InvoiceFlow. ATO-compliant invoices in 30 seconds, every time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup"><Button size="lg">Start Free — 5 Invoices/Month</Button></Link>
          <Link href="/tools/invoice-generator" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors">
            Try the free invoice generator &rarr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 gap-4">
          <p>&copy; 2026 InvoiceFlow. Built in Melbourne, Australia.</p>
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
