import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Batch & Bulk Invoicing Software for Australian Freelancers — InvoiceFlow',
  description:
    'Send all your invoices in one go. Batch create and send invoices to multiple clients at month-end with GST calculated automatically. Free to start.',
  alternates: { canonical: '/use-cases/batch-invoicing' },
  keywords: ['batch invoicing software', 'bulk invoice generator australia', 'send multiple invoices at once', 'end of month invoicing', 'batch billing software'],
  openGraph: {
    title: 'Batch & Bulk Invoicing — Send All Your Invoices in One Go',
    description:
      'Stop creating invoices one by one. InvoiceFlow lets you batch create and send invoices to all your clients in minutes, with GST calculated automatically. Free tier available.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Use Cases', item: 'https://invoiceflow-teal.vercel.app/use-cases' },
    { '@type': 'ListItem', position: 3, name: 'Batch Invoicing', item: 'https://invoiceflow-teal.vercel.app/use-cases/batch-invoicing' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many invoices can I send at once with InvoiceFlow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On the Pro plan ($19/mo), you can send unlimited invoices in a single batch. The Free plan supports up to 5 invoices per month. Most freelancers send 10-30 invoices per batch at month-end. InvoiceFlow processes each invoice individually — separate emails, unique invoice numbers, personalised amounts — so every client receives a professional, standalone tax invoice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I customise each invoice in a batch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. While batch invoicing uses a consistent template, each invoice is personalised with the client\'s name, ABN, specific line items, amounts, and payment terms. You can edit any individual invoice before sending the batch. This gives you the speed of bulk processing with the flexibility of individual invoicing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a batch invoice email bounces?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow tracks delivery status for each invoice in the batch. If an email bounces, you\'ll see it flagged in your dashboard so you can resend to an updated address. Failed deliveries don\'t affect other invoices in the batch. You\'ll get a complete delivery report showing which invoices were sent, delivered, opened, and paid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is batch invoicing compliant with ATO requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Every invoice in the batch is a standalone ATO-compliant tax invoice with unique invoice number, your ABN, GST calculation, and all required fields. Batch processing is just the delivery method — each invoice meets the same compliance standards as individually created ones. InvoiceFlow ensures sequential numbering and proper GST treatment across the entire batch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I schedule batch invoices to send at a specific time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Set up your batch and schedule it for any date and time. Many freelancers prepare invoices on the last working day and schedule them to send on the 1st of the month. This separates preparation time from billing day, so you can review everything without pressure and ensure your clients receive invoices right on schedule.',
      },
    },
  ],
};

const batchScenarios = [
  { name: 'End-of-Month Billing', desc: 'Send all monthly invoices to 5-50+ clients in one session. Most common for service businesses.', example: 'Monthly billing run for all active clients' },
  { name: 'Project Completion Run', desc: 'Multiple projects finishing around the same time. Batch final invoices with delivery notes.', example: 'Closing out 3-5 projects in a single week' },
  { name: 'Seasonal Billing', desc: 'Quarterly BAS prep, EOFY reconciliation, seasonal service contracts.', example: 'Quarterly invoices for seasonal clients' },
  { name: 'Multi-Client Retainers', desc: 'Same amount, different clients. Clone and personalise in seconds.', example: '$500/month retainer across 15 clients' },
];

const whoNeedsIt = [
  { profession: 'Accountants', reason: 'Monthly bookkeeping invoices to 20+ clients at once', link: '/for/accountants' },
  { profession: 'Cleaners', reason: 'Weekly billing runs for all residential and commercial clients', link: '/for/cleaners' },
  { profession: 'Virtual Assistants', reason: 'End-of-month billing across 5-10 regular clients', link: '/for/virtual-assistants' },
  { profession: 'Personal Trainers', reason: 'Monthly session invoices for all PT clients', link: '/for/personal-trainers' },
  { profession: 'Tutors', reason: 'Fortnightly billing for all students/parents', link: '/for/tutors' },
  { profession: 'Beauty & Hair', reason: 'Monthly invoices for salon chair rental and wholesale clients', link: '/for/beauty-hair' },
];

const relatedTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create your first invoice' },
  { name: 'Client Onboarding Checklist', href: '/tools/client-onboarding-checklist', desc: 'Set up new clients for batch billing' },
  { name: 'Invoice Numbering System', href: '/tools/invoice-numbering-system', desc: 'Organise sequential invoice numbers' },
  { name: 'Payment Receipt Generator', href: '/tools/payment-receipt-generator', desc: 'Issue batch receipts' },
  { name: 'Invoice Email Template', href: '/tools/invoice-email-template-generator', desc: 'Professional email for bulk sends' },
  { name: 'Financial Year Planner', href: '/tools/financial-year-planner', desc: 'Plan your billing schedule' },
];

export default function BatchInvoicingPage() {
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
        <div className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400 mb-8">
          Batch & Bulk Invoicing
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Send all your invoices{' '}
          <span className="bg-gradient-to-r from-indigo-500 to-violet-400 bg-clip-text text-transparent">
            in one go
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop creating invoices one by one at month-end. InvoiceFlow lets you batch create and send invoices to all your clients in minutes — with GST calculated, sequential numbering, and delivery tracking built in.
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
        <h2 className="text-3xl font-bold text-center mb-4">The batch invoicing problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          If you&apos;re billing multiple clients at month-end, you know the pain of creating invoices one by one.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { pain: 'Spending a whole day at month-end creating invoices one by one', fix: 'Batch create and send all invoices in minutes' },
            { pain: 'Missing clients in your billing run', fix: 'Client checklist ensures every active client gets invoiced' },
            { pain: 'Inconsistent invoice formatting across clients', fix: 'Same professional template, automatically personalised per client' },
            { pain: 'Losing track of which invoices went out', fix: 'Batch send confirmation with delivery status for each' },
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
                <span className="text-indigo-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-indigo-300 font-medium">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Batch Scenarios */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Common batch invoicing scenarios</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Whether it&apos;s month-end billing or closing out projects, InvoiceFlow handles every batch scenario.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {batchScenarios.map((scenario) => (
            <div key={scenario.name} className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-indigo-500/20 transition-colors">
              <h3 className="font-bold text-white mb-2">{scenario.name}</h3>
              <p className="text-xs text-slate-400 mb-3">{scenario.desc}</p>
              <div className="text-xs text-indigo-400/80 font-medium">{scenario.example}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Needs It */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Who benefits from batch invoicing?</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Any freelancer billing multiple clients saves hours every month by sending invoices in bulk.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoNeedsIt.map((item) => (
            <Link
              key={item.profession}
              href={item.link}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors mb-1">
                {item.profession}
              </h3>
              <p className="text-xs text-slate-500">{item.reason}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free tools for batch billing</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required. Use them right now.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">{tool.name}</h3>
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
        <h2 className="text-3xl font-bold mb-4">Simple pricing for batch invoicing</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free, upgrade when your client base grows.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, basic batch sending</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/5 p-6 ring-1 ring-indigo-500/20">
            <div className="text-xs text-indigo-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, unlimited batch sending</p>
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
        <h2 className="text-3xl font-bold text-center mb-10">Batch invoicing FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-indigo-400 transition-colors list-none flex justify-between items-center">
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stop creating invoices one by one</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Batch create and send all your invoices in minutes. InvoiceFlow handles the GST, numbering, and delivery — you just hit send.
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
