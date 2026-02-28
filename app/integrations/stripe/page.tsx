import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Accept Card Payments with Stripe Integration — InvoiceFlow',
  description:
    'Add one-click card payments to your invoices with Stripe. Australian cards at 1.75% + 30c, automatic reconciliation, instant notifications. Built for Australian freelancers.',
  alternates: { canonical: '/integrations/stripe' },
  keywords: [
    'stripe invoicing integration',
    'stripe invoice payment',
    'accept card payments invoice australia',
    'stripe payment link invoice',
    'online invoice payment australia',
    'credit card payment freelancer invoice',
    'stripe connect invoicing',
  ],
  openGraph: {
    title: 'Accept Card Payments with Stripe Integration — InvoiceFlow',
    description:
      'Add one-click Stripe payments to your invoices. AU cards at 1.75% + 30c, 2-day settlement, automatic reconciliation. Free tier available.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Integrations', item: 'https://invoiceflow-teal.vercel.app/integrations' },
    { '@type': 'ListItem', position: 3, name: 'Stripe', item: 'https://invoiceflow-teal.vercel.app/integrations/stripe' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the Stripe fees for Australian card payments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stripe charges 1.75% + 30c per transaction for domestic Australian cards (Visa, Mastercard, eftpos). International cards are charged at 2.9% + 30c. These are Stripe\'s standard rates — InvoiceFlow does not add any additional platform fees on top. GST is included in Stripe\'s pricing for Australian accounts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do Stripe payments work on InvoiceFlow invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you enable Stripe on your InvoiceFlow account, every invoice you send includes a "Pay Now" button. Your client clicks it, enters their card details on a secure Stripe-hosted payment page, and the payment is processed instantly. You receive a real-time notification, the invoice is automatically marked as paid, and the funds are deposited into your linked bank account within 2 business days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Stripe take to settle payments in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stripe settles payments to Australian bank accounts within 2 business days on the standard payout schedule. You can also opt for daily automatic payouts once your account is established. Funds are deposited directly into your nominated Australian bank account — no manual withdrawal needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I issue refunds through InvoiceFlow with Stripe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports full and partial refunds directly from your dashboard. When you initiate a refund, it is processed through Stripe and returned to your client\'s original payment method. Full refunds return the Stripe processing fee. Partial refunds are useful for scope changes, early payment credits, or goodwill adjustments. The refund status is tracked on the invoice automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Stripe available in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Stripe has been fully available in Australia since 2014. It supports Australian dollars (AUD), local card schemes including eftpos, and settles directly to Australian bank accounts. Stripe is PCI DSS Level 1 certified and regulated by AUSTRAC for compliance. Over 100,000 Australian businesses use Stripe for payment processing.',
      },
    },
  ],
};

const painPoints = [
  { pain: 'Sending bank details and waiting days for payment', fix: 'One-click card payments — clients pay instantly from the invoice' },
  { pain: 'Chasing clients for payment when invoice is overdue', fix: 'Clients pay on the spot with a "Pay Now" button on every invoice' },
  { pain: 'No way to know if a client has even opened your invoice', fix: 'Real-time notifications when invoices are viewed, clicked, and paid' },
  { pain: 'Manually reconciling bank statements to match payments to invoices', fix: 'Automatic reconciliation — payments are matched to invoices instantly' },
];

const capabilities = [
  {
    title: 'One-Click Payments',
    desc: 'Every invoice includes a secure "Pay Now" button. Clients enter their card, pay in seconds, and you get notified instantly.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
      </svg>
    ),
  },
  {
    title: 'Instant Notifications',
    desc: 'Get notified the moment a payment is received. No more checking your bank account or refreshing Stripe — InvoiceFlow tells you immediately.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
  {
    title: 'Australian Cards (1.75% + 30c)',
    desc: 'Domestic Visa, Mastercard, and eftpos transactions at Stripe\'s lowest Australian rate. No additional InvoiceFlow fees on top.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: 'International Cards (2.9% + 30c)',
    desc: 'Accept payments from overseas clients with international Visa, Mastercard, and Amex. Multi-currency support with automatic conversion.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Automatic Reconciliation',
    desc: 'When a client pays, InvoiceFlow marks the invoice as paid automatically. No manual matching, no spreadsheet cross-referencing, no errors.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: 'Refund Management',
    desc: 'Issue full or partial refunds directly from your InvoiceFlow dashboard. Refunds are processed through Stripe and tracked on the invoice.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
      </svg>
    ),
  },
];

const keyStats = [
  { value: '$1.75T', label: 'Processed by Stripe globally each year' },
  { value: '1.75% + 30c', label: 'Australian domestic card transaction fee' },
  { value: '2 days', label: 'Standard settlement time to your bank account' },
  { value: '47%', label: 'Faster payment when invoices include card options' },
];

const comparisonFeatures = [
  { feature: 'One-click card payment', invoiceflow: true, xero: true, freshbooks: true, paypal: true },
  { feature: 'AU card rate', invoiceflow: '1.75% + 30c', xero: '1.75% + 30c', freshbooks: '2.9% + 30c', paypal: '2.6% + 30c' },
  { feature: 'International card rate', invoiceflow: '2.9% + 30c', xero: '2.9% + 30c', freshbooks: '3.5% + 30c', paypal: '3.6% + fixed' },
  { feature: 'Automatic matching', invoiceflow: true, xero: true, freshbooks: true, paypal: false },
  { feature: 'Free tier', invoiceflow: true, xero: false, freshbooks: false, paypal: true },
  { feature: 'Refund from dashboard', invoiceflow: true, xero: true, freshbooks: true, paypal: true },
];

const personaLinks = [
  { name: 'Consultants', href: '/for/consultants', desc: 'Retainer billing with instant card payments' },
  { name: 'Coaches', href: '/for/coaches', desc: 'Session fees and package payments via Stripe' },
  { name: 'Web Developers', href: '/for/web-developers', desc: 'Milestone payments with one-click checkout' },
  { name: 'IT Consultants', href: '/for/it-consultants', desc: 'Support contracts and project billing' },
  { name: 'Photographers', href: '/for/photographers', desc: 'Deposit and balance payments for shoots' },
  { name: 'Writers', href: '/for/writers', desc: 'Article fees and retainer payments' },
];

const relatedTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional invoices with payment links' },
  { name: 'Payment Receipt Generator', href: '/tools/receipt-generator', desc: 'Generate receipts for card payments' },
  { name: 'Late Payment Calculator', href: '/tools/late-payment-calculator', desc: 'Calculate interest on overdue invoices' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Find your ideal hourly or project rate' },
  { name: 'Payment Tracking', href: '/features/payment-tracking', desc: 'Track every invoice from sent to paid' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on payments and invoices' },
];

export default function StripeIntegrationPage() {
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
          Stripe Integration
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Get paid instantly with{' '}
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            Stripe
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Add one-click card payments to every invoice. Your clients click &quot;Pay Now,&quot; enter their card, and the money lands in your bank account within 2 business days. No more chasing bank transfers.
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
        <h2 className="text-3xl font-bold text-center mb-4">The payment collection problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Australian freelancers wait an average of 23 days past the due date to get paid. Most of that delay comes down to friction — bank transfers are slow, confusing, and easy to forget.
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

      {/* Capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Everything you need to accept card payments</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          InvoiceFlow connects directly with your Stripe account. No middleman, no platform fees, no surprises.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap) => (
            <div key={cap.title} className="rounded-2xl border border-violet-500/30 bg-violet-500/10 p-6 hover:bg-violet-500/[0.15] transition-colors">
              <div className="inline-flex items-center justify-center rounded-xl bg-violet-500/10 p-3 text-violet-400 mb-4">
                {cap.icon}
              </div>
              <h3 className="font-bold text-white mb-2">{cap.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Stripe by the numbers</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Stripe is the world&apos;s leading payment infrastructure. When you add it to your invoices, you&apos;re giving clients the fastest, most trusted way to pay.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyStats.map((stat, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">How InvoiceFlow + Stripe compares</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Every major invoicing tool supports Stripe. The difference is what you pay for the invoicing platform itself.
        </p>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-5 border-b border-white/5 bg-white/[0.03]">
            <div className="py-4 px-4 text-sm font-medium text-slate-400">Feature</div>
            <div className="py-4 px-4 text-sm font-medium text-violet-400">InvoiceFlow + Stripe</div>
            <div className="py-4 px-4 text-sm font-medium text-slate-400">Xero + Stripe</div>
            <div className="py-4 px-4 text-sm font-medium text-slate-400">FreshBooks + Stripe</div>
            <div className="py-4 px-4 text-sm font-medium text-slate-400">PayPal Invoicing</div>
          </div>
          {/* Table rows */}
          {comparisonFeatures.map((row, i) => (
            <div key={i} className="grid grid-cols-5 border-b border-white/5 last:border-0">
              <div className="py-3 px-4 text-sm text-slate-400">{row.feature}</div>
              <div className="py-3 px-4 text-sm font-medium text-violet-300 bg-violet-500/5">
                {typeof row.invoiceflow === 'boolean' ? (
                  row.invoiceflow ? (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )
                ) : (
                  row.invoiceflow
                )}
              </div>
              <div className="py-3 px-4 text-sm text-slate-400">
                {typeof row.xero === 'boolean' ? (
                  row.xero ? (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )
                ) : (
                  row.xero
                )}
              </div>
              <div className="py-3 px-4 text-sm text-slate-400">
                {typeof row.freshbooks === 'boolean' ? (
                  row.freshbooks ? (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )
                ) : (
                  row.freshbooks
                )}
              </div>
              <div className="py-3 px-4 text-sm text-slate-400">
                {typeof row.paypal === 'boolean' ? (
                  row.paypal ? (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )
                ) : (
                  row.paypal
                )}
              </div>
            </div>
          ))}
          {/* Platform cost row */}
          <div className="grid grid-cols-5 bg-white/[0.03] border-t border-white/10">
            <div className="py-4 px-4 text-sm font-medium text-white">Platform cost</div>
            <div className="py-4 px-4 text-sm font-bold text-violet-400 bg-violet-500/5">From $0/mo</div>
            <div className="py-4 px-4 text-sm text-slate-400">From $35/mo</div>
            <div className="py-4 px-4 text-sm text-slate-400">From $24/mo</div>
            <div className="py-4 px-4 text-sm text-slate-400">Free (limited)</div>
          </div>
        </div>
      </section>

      {/* Persona Links */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Stripe payments for every profession</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Whether you bill hourly, per project, or on retainer — adding card payments to your invoices means faster cash flow.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personaLinks.map((persona) => (
            <Link
              key={persona.name}
              href={persona.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-violet-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors mb-1">
                {persona.name}
              </h3>
              <p className="text-xs text-slate-500">{persona.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free tools for getting paid faster</h2>
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
        <h2 className="text-3xl font-bold mb-4">Simple pricing — Stripe integration included on every plan</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free. Upgrade when you need unlimited invoices and advanced payment features.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, Stripe payments, manual reminders, basic tracking</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-6 ring-1 ring-violet-500/20">
            <div className="text-xs text-violet-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, auto reminders, payment analytics, refund management</p>
            <Link href="/signup"><Button size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Premium</h3>
            <div className="text-3xl font-bold text-white mb-3">$39<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Multi-business, API access, white-label invoices, priority support</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Stripe integration FAQ</h2>
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

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Stop chasing payments,{' '}
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            start accepting cards
          </span>
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Every invoice you send without a &quot;Pay Now&quot; button is money left on the table. Add Stripe to InvoiceFlow and let clients pay you in seconds — not days.
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
