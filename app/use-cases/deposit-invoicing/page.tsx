import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Deposit & Upfront Invoicing for Australian Freelancers — InvoiceFlow',
  description:
    'Create professional deposit invoices and collect upfront payments before starting work. Split projects into milestones, calculate GST on partial payments, and protect your cash flow. Free to start.',
  alternates: { canonical: '/use-cases/deposit-invoicing' },
  keywords: ['deposit invoice template australia', 'upfront payment invoice freelancer', 'how to invoice a deposit', 'progress payment invoice', 'deposit invoice generator'],
  openGraph: {
    title: 'Deposit & Upfront Invoicing — Get Paid Before You Start',
    description:
      'Collect deposits and upfront payments with professional invoices. InvoiceFlow handles payment splits, GST on partial payments, and milestone tracking. Free tier available.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Use Cases', item: 'https://invoiceflow-teal.vercel.app/use-cases' },
    { '@type': 'ListItem', position: 3, name: 'Deposit Invoicing', item: 'https://invoiceflow-teal.vercel.app/use-cases/deposit-invoicing' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much deposit should freelancers charge upfront?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Australian freelancers charge 25-50% upfront depending on the project size. Under $5K: 50% is standard. $5K-$20K: 30% deposit is common. Over $20K: 20-25% deposit with milestone payments. Australian Consumer Law allows reasonable deposits, and the amount should reflect the risk and upfront costs involved in the project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to issue a tax invoice for a deposit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you\'re GST-registered, you must issue a valid tax invoice for the deposit amount including GST. The ATO requires this even for partial payments. The invoice should clearly state it\'s a deposit or progress payment, reference the total project value, and include your ABN. InvoiceFlow generates ATO-compliant deposit invoices automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a deposit refundable in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Deposits can be non-refundable if clearly stated in your contract. Under Australian Consumer Law, businesses can retain reasonable deposits if the client cancels. Always specify deposit terms in your service agreement — including whether the deposit is refundable, partially refundable, or non-refundable. InvoiceFlow lets you include deposit terms directly on your invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I handle GST on deposit invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GST is calculated on the deposit amount, not the total project value. If your total project is $10,000 + GST, a 50% deposit invoice would be $5,000 + $500 GST = $5,500. Each subsequent invoice calculates GST on that payment portion only. InvoiceFlow calculates this automatically and tracks the remaining balance across all invoices in a project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I start work before receiving the deposit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Professional freelancers never start work until the deposit clears. This protects your time, covers initial costs like materials and software, and demonstrates the client\'s commitment to the project. A deposit also reduces the risk of scope creep and non-payment. InvoiceFlow tracks deposit status so you know exactly when funds have cleared.',
      },
    },
  ],
};

const depositStructures = [
  { name: 'Standard (50/50)', desc: '50% upfront, 50% on completion. Best for small projects under $5K', example: '$2,500 deposit on a $5,000 project' },
  { name: 'Three-Stage (30/40/30)', desc: '30% deposit, 40% midpoint, 30% delivery. Best for web/design projects', example: '$3,000 / $4,000 / $3,000 on $10K build' },
  { name: 'Progressive (25/25/25/25)', desc: 'Quarterly payments. Best for long-term retainers', example: '$5,000 per quarter on $20K annual retainer' },
  { name: 'Deposit + Milestones', desc: '20% upfront, then milestone-based. Best for complex/large projects', example: '$10K deposit + milestone payments on $50K project' },
];

const whoNeedsIt = [
  { profession: 'Web Developers', reason: 'Deposit before coding starts, milestone payments at sprint reviews', link: '/for/web-developers' },
  { profession: 'Graphic Designers', reason: 'Upfront payment for concept work, balance on final delivery', link: '/for/graphic-designers' },
  { profession: 'Photographers', reason: 'Booking deposit secures the date, balance after the shoot', link: '/for/photographers' },
  { profession: 'Event Planners', reason: 'Non-refundable deposit to cover venue and vendor bookings', link: '/for/event-planners' },
  { profession: 'Architects', reason: 'Stage-based payments aligned with design phases', link: '/for/architects' },
  { profession: 'Tradies', reason: 'Materials deposit before starting the job', link: '/for/tradies' },
];

const relatedTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create your deposit invoice' },
  { name: 'Contract Generator', href: '/tools/contract-generator', desc: 'Include deposit terms in your contract' },
  { name: 'Milestone Payment Calculator', href: '/tools/milestone-payment-calculator', desc: 'Calculate payment splits' },
  { name: 'Late Payment Calculator', href: '/tools/late-payment-calculator', desc: 'Calculate interest on overdue balances' },
  { name: 'Quote to Invoice', href: '/tools/quote-to-invoice-converter', desc: 'Convert accepted quotes to deposit invoices' },
  { name: 'Payment Receipt Generator', href: '/tools/payment-receipt-generator', desc: 'Issue receipts for deposits received' },
];

export default function DepositInvoicingPage() {
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
        <div className="inline-block rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-sm font-medium text-rose-400 mb-8">
          Deposit &amp; Upfront Invoicing
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Get paid upfront,{' '}
          <span className="bg-gradient-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent">
            deliver with confidence
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Deposits protect freelancers from scope creep, non-payment, and cash flow gaps. InvoiceFlow makes it easy to invoice upfront payments, track partial balances, and keep every dollar accounted for with proper tax invoices.
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
        <h2 className="text-3xl font-bold text-center mb-4">The deposit invoicing problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Starting work without a deposit is the fastest way to lose money as a freelancer. Here&apos;s what proper deposit invoicing solves.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { pain: 'Starting work without payment guarantee', fix: 'Collect deposits before starting any project' },
            { pain: 'Clients disputing amounts after delivery', fix: 'Clear deposit terms agreed and invoiced upfront' },
            { pain: 'Cash flow gaps at project start', fix: 'Deposit covers initial costs and materials' },
            { pain: 'No paper trail for partial payments', fix: 'Every payment tracked with proper tax invoices' },
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
                <span className="text-rose-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-rose-300 font-medium">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deposit Structures */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Common deposit structures</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Choose the payment structure that fits your project size and client relationship.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {depositStructures.map((structure) => (
            <div key={structure.name} className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-rose-500/20 transition-colors">
              <h3 className="font-bold text-white mb-2">{structure.name}</h3>
              <p className="text-xs text-slate-400 mb-3">{structure.desc}</p>
              <div className="text-xs text-rose-400/80 font-medium">{structure.example}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Needs It */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Who benefits from deposit invoicing?</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Any freelancer who invests time or money before getting paid should be collecting deposits.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoNeedsIt.map((item) => (
            <Link
              key={item.profession}
              href={item.link}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-rose-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-rose-400 transition-colors mb-1">
                {item.profession}
              </h3>
              <p className="text-xs text-slate-500">{item.reason}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free tools for deposit invoicing</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required. Use them right now.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-rose-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-rose-400 transition-colors">{tool.name}</h3>
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
        <h2 className="text-3xl font-bold mb-4">Simple pricing for deposit invoicing</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free, upgrade when your project volume grows.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, basic deposit tracking</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-6 ring-1 ring-rose-500/20">
            <div className="text-xs text-rose-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, milestone tracking, auto-GST</p>
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
        <h2 className="text-3xl font-bold text-center mb-10">Deposit invoicing FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-rose-400 transition-colors list-none flex justify-between items-center">
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stop starting work without getting paid first</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Create professional deposit invoices in seconds. InvoiceFlow tracks partial payments, calculates GST on every instalment, and keeps your cash flow healthy from day one.
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
