import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Automatic Bank Feed Payment Matching — InvoiceFlow',
  description:
    'Automatic bank feed reconciliation for Australian freelancers. Connect your bank, match payments to invoices instantly, and spend minutes on BAS — not hours. Free to start.',
  alternates: { canonical: '/integrations/bank-feeds' },
  keywords: [
    'bank feed invoicing software',
    'automatic payment matching invoices',
    'invoice reconciliation australia',
    'bank feed integration invoicing',
    'bank feed invoice matching',
    'automatic bank reconciliation freelancer',
    'australian bank feed software',
  ],
  openGraph: {
    title: 'Automatic Bank Feed Payment Matching — InvoiceFlow',
    description:
      'Connect your bank, match payments to invoices automatically, and stop manually checking transactions. Built for Australian freelancers. 50+ banks supported.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Integrations', item: 'https://invoiceflow-teal.vercel.app/integrations' },
    { '@type': 'ListItem', position: 3, name: 'Bank Feeds', item: 'https://invoiceflow-teal.vercel.app/integrations/bank-feeds' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do bank feeds work in InvoiceFlow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow connects to your bank account via secure, read-only API access. When a payment lands in your account, the bank feed pulls the transaction into InvoiceFlow automatically. Our AI engine then matches the transaction to your open invoices based on the amount, reference number, client name, and timing. You get a push notification confirming the match, and the invoice is marked as paid — no manual work required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Australian banks are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow supports 50+ Australian financial institutions including all Big 4 banks — Commonwealth Bank (CBA), ANZ, Westpac, and NAB. We also support Macquarie Bank, Bendigo Bank, Bank of Queensland, Suncorp, ING Australia, Bankwest, ME Bank, AMP Bank, and dozens of credit unions and regional banks. If your bank offers Open Banking or data sharing, we can connect to it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is connecting my bank account secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. InvoiceFlow uses bank-grade 256-bit AES encryption for all connections. We only request read-only access to your transaction data — we can never move money, make payments, or modify your account in any way. All connections comply with the Australian Consumer Data Right (CDR) framework and Open Banking standards. Your credentials are never stored on our servers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does automatic payment matching work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our AI matching engine analyses incoming bank transactions and compares them against your open invoices. It looks at the payment amount, bank reference or description, client name, and expected payment timing. When a high-confidence match is found (95% accuracy rate), the invoice is automatically marked as paid. For partial payments, overpayments, or split transactions, InvoiceFlow flags the match for your review and suggests the most likely allocation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when a client makes a partial payment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow handles partial payments intelligently. When a bank transaction amount doesn\'t match any open invoice exactly, the system checks for partial payment scenarios — deposits, installments, or split payments across multiple invoices. It automatically records the partial payment, updates the outstanding balance on the invoice, and notifies you of the remaining amount due. You can also set up invoices to expect partial payments upfront, so the system knows to match deposits against the full invoice amount.',
      },
    },
  ],
};

const painPoints = [
  {
    pain: 'Logging into your bank every morning to check if clients have paid',
    fix: 'Bank feeds auto-detect payments and match them to your invoices',
  },
  {
    pain: "Clients say 'I've paid' but you can't find the transaction",
    fix: 'Real-time payment detection with automatic invoice matching',
  },
  {
    pain: 'Spending hours each BAS quarter reconciling bank statements',
    fix: 'Automatic reconciliation means BAS prep takes minutes, not hours',
  },
  {
    pain: "Partial payments getting lost — unsure what's been paid on which invoice",
    fix: 'Smart matching handles partial payments, overpayments, and split transactions',
  },
];

const capabilities = [
  {
    name: 'Big 4 Banks',
    desc: 'CBA, ANZ, Westpac, NAB plus 50+ more Australian banks, credit unions, and financial institutions.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    name: 'AI Matching',
    desc: 'Intelligent transaction-to-invoice matching using amount, reference, client name, and payment timing.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    name: 'Real-Time Alerts',
    desc: 'Push notifications the moment a payment clears. Know you got paid before your client tells you.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
  {
    name: 'Partial Payment Tracking',
    desc: 'Handles deposits, installments, and split transactions. Always know the outstanding balance.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    name: 'BAS-Ready',
    desc: 'Auto-reconciled transaction data feeds directly into your BAS preparation. Quarterly lodgement in minutes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    name: 'Bank-Grade Security',
    desc: 'Read-only access, 256-bit AES encryption, CDR-compliant. We never touch your money.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const keyStats = [
  { value: '50+', label: 'Australian banks supported' },
  { value: '95%', label: 'Auto-match accuracy' },
  { value: '4hrs', label: 'Saved per month on reconciliation' },
  { value: '$0', label: 'Bank feed included on Pro+ plans' },
];

const comparisonFeatures = [
  { feature: 'Bank feed integration', invoiceflow: true, xero: true, myob: true, freshbooks: false },
  { feature: 'AI payment matching', invoiceflow: true, xero: false, myob: false, freshbooks: false },
  { feature: 'AU bank support (50+)', invoiceflow: true, xero: true, myob: true, freshbooks: false },
  { feature: 'Partial payment tracking', invoiceflow: true, xero: true, myob: true, freshbooks: true },
  { feature: 'Free tier available', invoiceflow: true, xero: false, myob: false, freshbooks: false },
  { feature: 'Real-time payment alerts', invoiceflow: true, xero: false, myob: false, freshbooks: false },
];

const personaLinks = [
  { name: 'Sole Traders', link: '/for/sole-traders' },
  { name: 'Freelancers', link: '/for/freelancers' },
  { name: 'Contractors', link: '/for/contractors' },
  { name: 'Tradies', link: '/for/tradies' },
  { name: 'Cleaners', link: '/for/cleaners' },
  { name: 'Personal Trainers', link: '/for/personal-trainers' },
];

const relatedTools = [
  { name: 'Payment Tracking', href: '/tools/payment-tracking', desc: 'Track every invoice from sent to paid' },
  { name: 'BAS Preparation Checklist', href: '/tools/bas-preparation', desc: 'Get your quarterly BAS done faster' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional invoices instantly' },
  { name: 'Late Payment Calculator', href: '/tools/late-payment-calculator', desc: 'Calculate interest on overdue invoices' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST-inclusive and exclusive amounts' },
  { name: 'Payment Receipt Generator', href: '/tools/receipt-generator', desc: 'Generate receipts for client payments' },
];

export default function BankFeedsPage() {
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
          Bank Feeds
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Know instantly{' '}
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            when you get paid
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Connect your bank account and let InvoiceFlow match payments to invoices automatically. No more logging in to check your balance, no more guessing which client paid what. Your invoices update themselves.
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
        <h2 className="text-3xl font-bold text-center mb-4">The reconciliation headache</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Every freelancer knows the drill: log into your bank, scroll through transactions, try to match them to invoices, update your records. It&apos;s tedious, error-prone, and eats hours every month.
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

      {/* Capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">How bank feeds work in InvoiceFlow</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Connect once, then forget about it. Your bank transactions flow in automatically and match to your invoices using AI.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap) => (
            <div key={cap.name} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-amber-500/20 hover:bg-white/[0.04] transition-all">
              <div className="inline-flex items-center justify-center rounded-xl bg-amber-500/10 p-3 text-amber-400 mb-4">
                {cap.icon}
              </div>
              <h3 className="font-bold text-white mb-2">{cap.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Bank feeds by the numbers</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Automatic reconciliation saves you time every single month and eliminates the errors that come from manual matching.
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

      {/* Comparison Table */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">How InvoiceFlow compares</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Bank feeds aren&apos;t unique — but AI-powered matching with a free tier is. See how InvoiceFlow stacks up against the big names.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="text-left p-4 font-medium text-slate-400">Feature</th>
                <th className="p-4 font-bold text-amber-400 text-center">InvoiceFlow</th>
                <th className="p-4 font-medium text-slate-400 text-center">Xero</th>
                <th className="p-4 font-medium text-slate-400 text-center">MYOB</th>
                <th className="p-4 font-medium text-slate-400 text-center">FreshBooks</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0">
                  <td className="p-4 text-slate-300">{row.feature}</td>
                  <td className="p-4 text-center">
                    {row.invoiceflow ? (
                      <svg className="w-5 h-5 text-emerald-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {row.xero ? (
                      <svg className="w-5 h-5 text-emerald-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {row.myob ? (
                      <svg className="w-5 h-5 text-emerald-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {row.freshbooks ? (
                      <svg className="w-5 h-5 text-emerald-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Persona Links */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Bank feeds for every profession</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Whether you send 5 invoices a month or 50, bank feeds eliminate the manual work of chasing payments and reconciling accounts.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personaLinks.map((persona) => (
            <Link
              key={persona.name}
              href={persona.link}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-amber-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                {persona.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">See how InvoiceFlow works for {persona.name.toLowerCase()}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free tools that work with bank feeds</h2>
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
        <h2 className="text-3xl font-bold mb-4">Simple pricing with bank feeds included</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free. Bank feeds are included on Pro and Premium plans at no extra cost.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, manual payment tracking, no bank feeds</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 ring-1 ring-amber-500/20">
            <div className="text-xs text-amber-400 font-medium mb-2">BANK FEEDS INCLUDED</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, bank feeds, AI matching, auto reminders</p>
            <Link href="/signup"><Button size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <div className="text-xs text-amber-400 font-medium mb-2">BANK FEEDS INCLUDED</div>
            <h3 className="font-bold text-white mb-1">Premium</h3>
            <div className="text-3xl font-bold text-white mb-3">$39<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Multi-business, priority matching, API access, white-label</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Bank feeds FAQ</h2>
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

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Stop checking your bank —{' '}
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            let your invoices tell you
          </span>
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Connect your bank once and never manually reconcile again. InvoiceFlow matches payments to invoices automatically, so you always know exactly who has paid and who hasn&apos;t.
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
