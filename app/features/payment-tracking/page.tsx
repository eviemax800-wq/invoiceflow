import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Payment Tracking for Freelancers — Know Who Owes You — InvoiceFlow',
  description:
    'Track invoice payments in real time. See who owes you, send automatic reminders, and get paid faster. Built for Australian freelancers. Free to start.',
  alternates: { canonical: '/features/payment-tracking' },
  keywords: [
    'invoice payment tracking',
    'track invoice payments',
    'payment tracking software freelancer',
    'accounts receivable freelancer',
    'invoice status tracking australia',
    'payment reminder software',
    'overdue invoice tracker',
  ],
  openGraph: {
    title: 'Payment Tracking for Freelancers — Know Who Owes You',
    description:
      'Real-time invoice payment tracking with automatic reminders. See who owes you, what&apos;s overdue, and get paid faster. Free tier available.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://invoiceflow-teal.vercel.app/features' },
    { '@type': 'ListItem', position: 3, name: 'Payment Tracking', item: 'https://invoiceflow-teal.vercel.app/features/payment-tracking' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow track payments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow provides real-time status updates for every invoice you send. Each invoice moves through a clear lifecycle — Draft, Sent, Viewed, and Paid — so you always know exactly where your money stands. The dashboard gives you an instant accounts receivable view with filters for overdue, upcoming, and paid invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I send automatic payment reminders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow lets you set up a customisable reminder schedule for each client or invoice. You can send gentle nudges before the due date, on the due date, and escalating follow-ups after it passes. Reminders are professional and branded, so you maintain good client relationships while getting paid on time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What payment methods does InvoiceFlow support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow supports bank transfer (BSB/account number), PayID, Stripe (credit/debit cards), and PayPal. You can add your preferred payment details to every invoice so clients can pay using whatever method suits them. Multiple payment options reduce friction and help you get paid faster.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do Australian freelancers wait to get paid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On average, Australian freelancers wait 23 days past the due date to receive payment. Across the small business sector, approximately $26 billion is owed in unpaid invoices at any given time. InvoiceFlow\'s automated payment tracking and reminders help reduce this wait by up to 50%, getting cash into your account weeks earlier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I see payment history for each client?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow maintains a full audit trail for every client — every invoice sent, every reminder triggered, every payment received, and the exact date it was marked as paid. This history helps you identify slow-paying clients, negotiate better terms, and maintain accurate records for tax time.',
      },
    },
  ],
};

const painPoints = [
  { pain: 'Using spreadsheets to track who has paid', fix: 'Real-time payment dashboard — see every invoice status at a glance' },
  { pain: 'Forgetting to follow up on overdue invoices', fix: 'Automated payment reminders on a schedule you control' },
  { pain: 'No idea what&apos;s outstanding at any given time', fix: 'Instant accounts receivable view with totals and ageing' },
  { pain: 'Awkward emails chasing clients for money', fix: 'Professional, branded follow-ups sent automatically' },
];

const invoiceStatuses = [
  {
    status: 'Draft',
    color: 'text-slate-400',
    borderColor: 'border-slate-500/30',
    bgColor: 'bg-slate-500/10',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    desc: 'Invoice created but not yet sent. Edit line items, check GST, and review before sending.',
  },
  {
    status: 'Sent',
    color: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    bgColor: 'bg-blue-500/10',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    desc: 'Invoice delivered to your client&apos;s inbox. The clock starts ticking on payment terms.',
  },
  {
    status: 'Viewed',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    bgColor: 'bg-amber-500/10',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    desc: 'Your client has opened the invoice. They know what they owe — reminders can kick in if needed.',
  },
  {
    status: 'Paid',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    bgColor: 'bg-emerald-500/10',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    desc: 'Payment received and recorded. Automatically updates your accounts receivable and cash flow.',
  },
];

const keyStats = [
  { value: '$26B', label: 'Owed to Australian small businesses in unpaid invoices' },
  { value: '23 days', label: 'Average time freelancers wait past the due date' },
  { value: '50%', label: 'Reduction in late payments with automated reminders' },
  { value: '$0', label: 'To start tracking your invoices with InvoiceFlow' },
];

const whoNeedsIt = [
  { profession: 'Freelancers', reason: 'Track payments across multiple clients and projects', link: '/for/freelancers' },
  { profession: 'Consultants', reason: 'Monitor retainer payments and milestone billing', link: '/for/consultants' },
  { profession: 'Contractors', reason: 'Keep tabs on progress claims and staged payments', link: '/for/contractors' },
  { profession: 'Tradies', reason: 'Chase deposit and completion payments on every job', link: '/for/tradies' },
  { profession: 'Creatives', reason: 'Track project fees, licensing payments, and royalties', link: '/for/creatives' },
  { profession: 'IT Consultants', reason: 'Manage support contract and project billing cycles', link: '/for/it-consultants' },
];

const relatedTools = [
  { name: 'Late Payment Calculator', href: '/tools/late-payment-calculator', desc: 'Calculate interest on overdue invoices' },
  { name: 'Overdue Invoice Follow-Up Generator', href: '/tools/overdue-invoice-follow-up-generator', desc: 'Write professional chaser emails' },
  { name: 'Letter of Demand Generator', href: '/tools/letter-of-demand-generator', desc: 'Escalate unpaid invoices formally' },
  { name: 'Debt Recovery Cost Calculator', href: '/tools/debt-recovery-cost-calculator', desc: 'Estimate recovery costs vs write-off' },
  { name: 'Emergency Fund Calculator', href: '/tools/emergency-fund-calculator', desc: 'Plan your cash flow buffer' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional invoices instantly' },
];

export default function PaymentTrackingPage() {
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
          Payment Tracking
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Know exactly{' '}
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            who owes you
          </span>{' '}
          and when
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop guessing which invoices have been paid. InvoiceFlow tracks every invoice from sent to paid, sends automatic reminders, and gives you a real-time view of your accounts receivable.
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
        <h2 className="text-3xl font-bold text-center mb-4">The payment tracking problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Australian freelancers are owed $26 billion in unpaid invoices. Most don&apos;t even know exactly how much they&apos;re owed right now.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
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

      {/* Invoice Status Lifecycle */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Payment status at a glance</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Every invoice moves through a clear lifecycle. You&apos;ll always know exactly where each payment stands.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {invoiceStatuses.map((s) => (
            <div key={s.status} className={`rounded-2xl border ${s.borderColor} bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors`}>
              <div className={`inline-flex items-center justify-center rounded-xl ${s.bgColor} p-3 ${s.color} mb-4`}>
                {s.icon}
              </div>
              <h3 className={`font-bold ${s.color} mb-2`}>{s.status}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">The numbers behind late payments</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Late payments aren&apos;t just annoying — they&apos;re a systemic problem for Australian freelancers and small businesses.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyStats.map((stat, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who Needs Payment Tracking */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Who needs payment tracking?</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          If you send invoices, you need to track payments. Here&apos;s how different professionals use InvoiceFlow.
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
        <h2 className="text-3xl font-bold text-center mb-4">Free payment tracking tools</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required. Use them right now.</p>
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

      {/* Pricing */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Simple pricing for payment tracking</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free. Upgrade when you need unlimited tracking and automated reminders.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, basic status tracking, manual reminders</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 ring-1 ring-amber-500/20">
            <div className="text-xs text-amber-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, auto reminders, payment analytics</p>
            <Link href="/signup"><Button size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Premium</h3>
            <div className="text-3xl font-bold text-white mb-3">$39<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Multi-business tracking, API access, white-label reports</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Payment tracking FAQ</h2>
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stop guessing. Start tracking.</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Know exactly who owes you, how much, and how long it&apos;s been. InvoiceFlow gives you the visibility you need to get paid on time, every time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup"><Button size="lg">Start Free — 5 Invoices/Month</Button></Link>
          <Link href="/features" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors">
            View all features &rarr;
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
