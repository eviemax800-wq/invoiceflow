import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

const siteUrl = 'https://invoiceflow-teal.vercel.app';

export const metadata: Metadata = {
  title: 'Accept PayPal Payments on Your Invoices — InvoiceFlow',
  description:
    'Let clients pay invoices via PayPal — trusted by 430M+ users worldwide. InvoiceFlow integrates PayPal checkout so Australian freelancers get paid faster with buyer protection, cross-border support, and automatic payment matching.',
  keywords: [
    'paypal invoicing australia',
    'paypal invoice software',
    'accept paypal payments invoice',
    'paypal for freelancers australia',
    'paypal invoice integration',
    'paypal checkout invoicing',
    'paypal cross border payments australia',
    'freelancer paypal invoicing',
  ],
  alternates: {
    canonical: '/integrations/paypal',
  },
  openGraph: {
    title: 'Accept PayPal Payments on Your Invoices — InvoiceFlow',
    description:
      'Let clients pay invoices via PayPal — trusted by 430M+ users worldwide. Automatic matching, buyer protection, and cross-border payments for Australian freelancers.',
    url: `${siteUrl}/integrations/paypal`,
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Integrations', item: `${siteUrl}/integrations` },
    { '@type': 'ListItem', position: 3, name: 'PayPal', item: `${siteUrl}/integrations/paypal` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are PayPal fees for invoicing in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PayPal charges 2.6% + 30c per domestic transaction in Australia. For international payments, the fee is 3.6% plus a fixed fee based on the currency received. These fees are deducted from the payment before it reaches your PayPal balance. InvoiceFlow displays the net amount you will receive after PayPal fees so there are no surprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does PayPal invoicing work with InvoiceFlow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you enable the PayPal integration in InvoiceFlow, a PayPal checkout button is added to your invoices automatically. When your client clicks the button they are taken to a secure PayPal checkout page where they can pay with their PayPal balance, linked bank account, or credit/debit card. Once the payment is completed InvoiceFlow automatically marks the invoice as paid and sends you a notification.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does PayPal offer buyer protection for invoice payments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PayPal Purchase Protection covers eligible transactions, giving your clients confidence when paying invoices — especially for deposits or upfront payments. This protection means clients are more willing to pay promptly because they know PayPal has their back if something goes wrong. For freelancers this translates to faster payments and fewer disputes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly do PayPal payments settle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PayPal payments arrive in your PayPal balance instantly. From there you can transfer funds to your Australian bank account which typically takes 1-2 business days for a standard transfer, or you can use the funds immediately via your PayPal balance for other payments. There is no 7-day hold period for established accounts with a good transaction history.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can clients pay a PayPal invoice without a PayPal account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PayPal offers a guest checkout option that allows clients to pay with a credit or debit card without creating a PayPal account. This is especially useful for clients who prefer not to use PayPal directly — they still get a secure, trusted payment experience and you still receive the funds in your PayPal balance with automatic invoice matching in InvoiceFlow.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Clients don\'t want to share bank details for payment',
    solution: 'PayPal\'s trusted checkout — no bank details needed',
  },
  {
    problem: 'International clients face high wire transfer fees',
    solution: 'PayPal handles cross-border payments automatically',
  },
  {
    problem: 'No buyer protection makes clients hesitant to pay upfront',
    solution: 'PayPal Purchase Protection builds client confidence',
  },
  {
    problem: 'Manually tracking which PayPal payments match which invoice',
    solution: 'Automatic invoice-to-payment matching with instant notifications',
  },
];

const capabilities = [
  {
    title: 'Trusted Checkout',
    description: '430M+ users trust PayPal worldwide. Give your clients a payment method they already know and use.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Buyer Protection',
    description: 'PayPal Purchase Protection builds confidence for deposits and upfront payments, reducing payment hesitation.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: 'Cross-Border Payments',
    description: 'Accept payments from 200+ markets worldwide. PayPal handles currency conversion and international compliance.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Instant Balance',
    description: 'Funds land in your PayPal balance immediately. Transfer to your AU bank account in 1-2 business days.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'No PayPal Account Needed',
    description: 'Clients can pay with any credit or debit card via PayPal guest checkout — no account creation required.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: 'Automatic Matching',
    description: 'InvoiceFlow links PayPal payments to invoices in real time. No manual reconciliation, no missed payments.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

const keyNumbers = [
  { value: '430M+', label: 'PayPal users worldwide' },
  { value: '2.6% + 30c', label: 'AU domestic rate' },
  { value: '200+', label: 'Markets supported' },
  { value: '85%', label: 'Of online buyers trust PayPal' },
];

const comparisonFeatures = [
  { feature: 'PayPal checkout on invoices', invoiceflow: true, paypalInvoicing: true, xero: true, freshbooks: true },
  { feature: 'Guest card payment (no PayPal account)', invoiceflow: true, paypalInvoicing: true, xero: false, freshbooks: false },
  { feature: 'Cross-border payments', invoiceflow: true, paypalInvoicing: true, xero: true, freshbooks: true },
  { feature: 'AU GST + ABN compliance', invoiceflow: true, paypalInvoicing: false, xero: true, freshbooks: false },
  { feature: 'Free tier available', invoiceflow: true, paypalInvoicing: true, xero: false, freshbooks: false },
  { feature: 'Automatic payment matching', invoiceflow: true, paypalInvoicing: false, xero: true, freshbooks: true },
];

const personaLinks = [
  { name: 'Creatives', href: '/for/creatives' },
  { name: 'Photographers', href: '/for/photographers' },
  { name: 'Graphic Designers', href: '/for/graphic-designers' },
  { name: 'Writers', href: '/for/writers' },
  { name: 'Virtual Assistants', href: '/for/virtual-assistants' },
  { name: 'Consultants', href: '/for/consultants' },
];

const relatedTools = [
  { name: 'International Invoice Calculator', href: '/tools/international-invoice-calculator' },
  { name: 'Payment Receipt Generator', href: '/tools/receipt-generator' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator' },
  { name: 'Late Payment Calculator', href: '/tools/late-payment-calculator' },
  { name: 'Invoice Email Template Generator', href: '/tools/invoice-email-template' },
  { name: 'GST Calculator', href: '/tools/gst-calculator' },
];

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    description: 'For freelancers just getting started',
    features: ['5 invoices per month', 'PayPal checkout', 'GST compliant templates', 'Email support'],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/mo',
    description: 'For active freelancers who invoice regularly',
    features: ['Unlimited invoices', 'PayPal + Stripe checkout', 'Gemini AI extraction', 'Automatic payment matching', 'Priority support'],
    cta: 'Go Pro',
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$39',
    period: '/mo',
    description: 'For agencies and high-volume freelancers',
    features: ['Everything in Pro', 'Multi-currency invoicing', 'Team collaboration', 'Custom branding', 'API access', 'Dedicated support'],
    cta: 'Go Premium',
    highlighted: false,
  },
];

export default function PayPalIntegrationPage() {
  return (
    <div className="min-h-screen page-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Navigation */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">IF</span>
            </div>
            <span className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/tools" className="text-slate-400 hover:text-white text-sm transition-colors hidden sm:inline">
              Free Tools
            </Link>
            <Link href="/pricing">
              <Button variant="ghost">Pricing</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started Free</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400 pt-8 pb-4">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/integrations" className="hover:text-white transition-colors">Integrations</Link>
          <span>/</span>
          <span className="text-slate-200">PayPal</span>
        </div>

        {/* Hero */}
        <section className="py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-sm text-blue-400 mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
            PayPal Integration
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white heading-font mb-6 leading-tight">
            Accept <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">PayPal payments</span> on every invoice
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            430M+ people use PayPal worldwide. Give your clients the checkout they already trust — no bank details to share, built-in buyer protection, and cross-border payments handled automatically.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button size="lg">Start Sending PayPal Invoices</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="secondary" size="lg">View Pricing</Button>
            </Link>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white heading-font mb-4">
              Getting paid shouldn&apos;t be <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">this hard</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every friction point between you and payment costs you money. PayPal removes the most common blockers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((item, i) => (
              <div key={i} className="glass rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-slate-300 text-sm">{item.problem}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-white font-medium text-sm">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white heading-font mb-4">
              Everything PayPal brings to your <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">invoices</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              One integration. Six ways it makes getting paid easier for Australian freelancers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div key={i} className="glass rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/20 transition-colors">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cap.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Numbers */}
        <section className="py-16">
          <div className="glass rounded-3xl p-8 sm:p-12 border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-sky-900/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {keyNumbers.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white heading-font mb-4">
              How InvoiceFlow + PayPal <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">compares</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Side-by-side comparison of PayPal invoicing options available to Australian freelancers.
            </p>
          </div>
          <div className="glass rounded-3xl overflow-hidden border border-white/5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-slate-400 font-medium">Feature</th>
                    <th className="p-4 text-blue-400 font-semibold bg-blue-500/5">InvoiceFlow + PayPal</th>
                    <th className="p-4 text-slate-300 font-medium">PayPal Invoicing</th>
                    <th className="p-4 text-slate-300 font-medium">Xero + PayPal</th>
                    <th className="p-4 text-slate-300 font-medium">FreshBooks + PayPal</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-0">
                      <td className="p-4 text-slate-300">{row.feature}</td>
                      <td className="p-4 text-center bg-blue-500/5">
                        {row.invoiceflow ? (
                          <span className="text-emerald-400 font-bold">&#10003;</span>
                        ) : (
                          <span className="text-slate-500">&#10005;</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.paypalInvoicing ? (
                          <span className="text-emerald-400">&#10003;</span>
                        ) : (
                          <span className="text-slate-500">&#10005;</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.xero ? (
                          <span className="text-emerald-400">&#10003;</span>
                        ) : (
                          <span className="text-slate-500">&#10005;</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.freshbooks ? (
                          <span className="text-emerald-400">&#10003;</span>
                        ) : (
                          <span className="text-slate-500">&#10005;</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-white/5 text-center">
              <p className="text-xs text-slate-500">
                Comparison based on publicly available information as of March 2026. PayPal Invoicing refers to PayPal&apos;s native invoicing product.
              </p>
            </div>
          </div>
        </section>

        {/* Persona Links */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white heading-font mb-4">
              Built for every type of <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">freelancer</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Whether you are a photographer billing deposits or a consultant invoicing overseas clients, PayPal integration works for your workflow.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {personaLinks.map((persona) => (
              <Link
                key={persona.name}
                href={persona.href}
                className="glass rounded-xl p-4 text-center border border-white/5 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{persona.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white heading-font mb-4">
              Free tools to pair with <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">PayPal invoicing</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Calculators, generators, and templates built for Australian freelancers. All free, no signup required.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedTools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="glass rounded-xl p-5 border border-white/5 hover:border-blue-500/30 transition-all group flex items-center gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 21h18" />
                  </svg>
                </div>
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors font-medium">{tool.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Email Capture */}
        <EmailCapture />

        {/* Pricing */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white heading-font mb-4">
              Simple, transparent <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">pricing</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              PayPal integration is included on every plan. Start free, upgrade when you need unlimited invoices.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`glass rounded-2xl p-8 border transition-all ${
                  tier.highlighted
                    ? 'border-blue-500/40 bg-blue-500/5 scale-[1.02]'
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                {tier.highlighted && (
                  <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-4">Most Popular</div>
                )}
                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-slate-400">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/signup" className="block">
                  <Button
                    className="w-full"
                    variant={tier.highlighted ? 'primary' : 'secondary'}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white heading-font mb-4">
              Frequently asked <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">questions</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="glass rounded-2xl p-6 border border-white/5 hover:border-blue-500/20 transition-colors">
                <h3 className="text-white font-semibold mb-3 flex items-start gap-3">
                  <span className="text-blue-400 text-sm font-bold mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {faq.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed pl-8">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-24 text-center">
          <div className="glass rounded-3xl p-10 sm:p-16 border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-sky-900/20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white heading-font mb-6 leading-tight">
              Give clients the payment method{' '}
              <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">they trust</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
              430M+ people use PayPal. When you add it to your invoices, you remove the biggest friction point between you and getting paid. No credit card required to start.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/signup">
                <Button size="lg">Start Free with PayPal</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">See All Plans</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-8">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
          <span>&copy; 2026 InvoiceFlow. All rights reserved.</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/integrations" className="hover:text-white transition-colors">Integrations</Link>
            <Link href="/tools" className="hover:text-white transition-colors">Free Tools</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
