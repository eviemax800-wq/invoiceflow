import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Integrations — Connect Stripe, PayPal, Xero & Bank Feeds | InvoiceFlow',
  description:
    'Connect InvoiceFlow to Stripe, PayPal, Xero, and your bank feeds. Accept payments, sync accounting data, and match payments automatically. Built for Australian freelancers and sole traders.',
  keywords: [
    'invoicing software integrations australia',
    'invoice payment integrations',
    'connect invoicing to accounting software',
    'stripe invoicing integration',
    'paypal invoice payments',
    'xero invoice sync',
    'bank feed invoice matching',
    'freelancer invoicing integrations',
  ],
  alternates: { canonical: '/integrations' },
  openGraph: {
    title: 'Integrations — Connect Stripe, PayPal, Xero & Bank Feeds | InvoiceFlow',
    description:
      'Connect InvoiceFlow to the tools you already use. Accept card payments with Stripe, offer PayPal checkout, sync to Xero, and match bank feed payments automatically. Free tier available.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Integrations', item: 'https://invoiceflow-teal.vercel.app/integrations' },
  ],
};

const integrations = [
  {
    name: 'Stripe',
    slug: 'stripe',
    description: 'Accept card payments directly on your invoices with Stripe integration. Clients pay with one click.',
    color: 'from-violet-500 to-indigo-500',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    name: 'PayPal',
    slug: 'paypal',
    description: 'Let clients pay via PayPal. Global reach, buyer protection, instant notifications.',
    color: 'from-blue-500 to-cyan-500',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    name: 'Xero',
    slug: 'xero',
    description: 'Export invoices to Xero seamlessly. Keep your accountant happy without double-entry.',
    color: 'from-emerald-500 to-teal-500',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    name: 'Bank Feeds',
    slug: 'bank-feeds',
    description: 'Automatic payment matching. Know instantly when invoices are paid.',
    color: 'from-amber-500 to-orange-500',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
];

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'InvoiceFlow Integrations',
  description: 'Connect InvoiceFlow to Stripe, PayPal, Xero, and bank feeds for seamless invoicing and payments.',
  numberOfItems: integrations.length,
  itemListElement: integrations.map((integration, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: `${integration.name} Integration`,
    url: `https://invoiceflow-teal.vercel.app/integrations/${integration.slug}`,
  })),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What payment integrations does InvoiceFlow support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow integrates with Stripe for card payments, PayPal for global payments, Xero for accounting sync, and Australian bank feeds for automatic payment matching. Each integration can be enabled in your account settings with a few clicks. All payment data is encrypted and PCI-compliant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there an extra cost for using integrations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow does not charge extra for integrations. Stripe and PayPal are available on all plans including Free. Xero sync and bank feed matching are available on Pro ($19/month) and Premium ($39/month) plans. The third-party services themselves may charge their standard transaction fees (e.g. Stripe charges 1.75% + 30c per transaction in Australia).',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Xero integration work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Connect your Xero account via OAuth in one click. InvoiceFlow automatically exports your invoices, payments, and client data to Xero in real time. No double-entry, no CSV imports, no copy-pasting. Your accountant sees everything in Xero exactly as they expect, with GST correctly allocated and all ATO-required fields included.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow automatically match bank payments to invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. With the bank feeds integration, InvoiceFlow connects to your Australian business bank account and automatically matches incoming payments to outstanding invoices using amount, reference number, and client details. When a match is found, the invoice is marked as paid automatically. You can review suggested matches before confirming, or enable auto-confirm for trusted clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need technical knowledge to set up integrations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No technical knowledge is required. Each integration takes under two minutes to set up. For Stripe and PayPal, you connect your existing accounts with a secure OAuth flow — no API keys, no code, no developer needed. For Xero, it is a one-click connection through the Xero app marketplace. Bank feeds are connected through your bank\'s secure open banking portal. InvoiceFlow guides you through every step.',
      },
    },
  ],
};

const benefits = [
  {
    title: 'Get Paid Faster',
    description: 'Clients pay directly from the invoice with one click. No bank transfers, no cheques, no delays. Average payment time drops from 14 days to 2 days with online payment options.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Eliminate Double Entry',
    description: 'Every invoice, payment, and client record flows automatically between InvoiceFlow and your accounting software. No more re-typing data into Xero or spreadsheets at tax time.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: 'Automatic Reconciliation',
    description: 'Bank feed integration matches incoming payments to outstanding invoices automatically. No more checking your bank statement line by line to figure out who has paid.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: 'Global Payment Options',
    description: 'Offer your clients the payment method they prefer — credit card via Stripe, PayPal for international clients, or direct bank transfer with automatic matching. More options means fewer excuses for late payment.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
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
          Integrations Hub
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Connect your{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            favourite tools
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          InvoiceFlow plugs into the payment and accounting tools you already use. Accept payments, sync data,
          and reconcile automatically — so you spend less time on admin and more time earning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/features">
            <Button variant="secondary" size="lg">View All Features</Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Free tier: Stripe + PayPal included. Xero + Bank Feeds on Pro and Premium.
        </p>
      </section>

      {/* Integration Cards */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Available integrations
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Each integration takes under two minutes to set up. No code, no API keys, no developer required.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {integrations.map((integration) => (
            <Link
              key={integration.slug}
              href={`/integrations/${integration.slug}`}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className={`rounded-xl bg-gradient-to-br ${integration.color} p-3 text-white shrink-0 group-hover:scale-110 transition-transform`}>
                  {integration.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {integration.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-emerald-400 group-hover:text-emerald-300 transition-colors font-medium">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Integrations Matter */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why integrations matter
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Disconnected tools cost you hours every week in manual data entry, missed payments, and reconciliation headaches. Integrations fix all of it.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-emerald-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400 p-3 text-white shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          How integrations work
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { step: '1', title: 'Choose Integration', desc: 'Pick Stripe, PayPal, Xero, or Bank Feeds from your settings.' },
            { step: '2', title: 'Connect in Seconds', desc: 'Secure OAuth login. No API keys or passwords to manage.' },
            { step: '3', title: 'Send Invoices', desc: 'Payment buttons appear automatically on your invoices.' },
            { step: '4', title: 'Auto Reconcile', desc: 'Payments are matched and marked paid in real time.' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <div className="mx-auto max-w-6xl px-6">
        <EmailCapture />
      </div>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Simple pricing, integrations included
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Start free with Stripe and PayPal. Upgrade to unlock Xero sync and bank feed matching.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="text-lg font-bold text-white mb-1">Free</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$0</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Get started with payment integrations on your invoices.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                5 invoices per month
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Stripe payment links
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                PayPal payment links
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Automatic GST calculation
              </li>
            </ul>
            <Link href="/signup">
              <Button variant="secondary" size="md" className="w-full">Start Free</Button>
            </Link>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.05] p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-3 py-0.5 text-xs font-bold text-slate-900">
              Most Popular
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Pro</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$19</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Full integration suite with Xero sync and bank feeds.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited invoices
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Stripe + PayPal payments
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Xero two-way sync
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Bank feed matching
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Auto payment reminders
              </li>
            </ul>
            <Link href="/signup">
              <Button size="md" className="w-full">Start Pro — 14-Day Trial</Button>
            </Link>
          </div>

          {/* Premium */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="text-lg font-bold text-white mb-1">Premium</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$39</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Advanced integrations with multi-business support and API access.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Everything in Pro
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Multiple business profiles
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Multi-currency payments
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                API access for custom workflows
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
            </ul>
            <Link href="/signup">
              <Button variant="secondary" size="md" className="w-full">Start Premium</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Integrations FAQ
        </h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
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

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Stop juggling tools.{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Connect them.
          </span>
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Link your payment providers and accounting software in minutes. InvoiceFlow handles the data flow
          so you never have to copy-paste an invoice number again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — 5 Invoices/Month</Button>
          </Link>
          <Link href="/features" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
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
