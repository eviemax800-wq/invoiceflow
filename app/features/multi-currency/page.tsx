import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Multi-Currency Invoicing for Australian Freelancers — InvoiceFlow',
  description:
    'Invoice international clients in 50+ currencies with real-time exchange rates, automatic GST-free export treatment, and ATO-compliant AUD conversion for BAS reporting. Built for Australian freelancers working globally.',
  keywords: [
    'multi currency invoicing software australia',
    'international invoice software',
    'foreign currency invoice generator',
    'invoice international clients australia',
    'multi currency invoice generator',
    'international invoicing australia',
    'foreign currency invoicing freelancer',
    'invoice overseas clients GST free',
  ],
  alternates: { canonical: '/features/multi-currency' },
  openGraph: {
    title: 'Multi-Currency Invoicing for Australian Freelancers — InvoiceFlow',
    description:
      'Invoice in 50+ currencies with real-time exchange rates, automatic GST-free export detection, and AUD conversion for BAS reporting. Purpose-built for Australian freelancers with international clients.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://invoiceflow-teal.vercel.app/features' },
    { '@type': 'ListItem', position: 3, name: 'Multi-Currency', item: 'https://invoiceflow-teal.vercel.app/features/multi-currency' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow handle currency conversion for international clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow supports 50+ currencies including USD, GBP, EUR, NZD, SGD, and JPY. When you create an invoice for an international client, simply select their preferred currency and InvoiceFlow applies the real-time exchange rate automatically. The invoice is generated in the foreign currency while your dashboard tracks the AUD equivalent so you always know what you\'re earning in Australian dollars.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to charge GST when invoicing overseas clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally, no. Under Section 38-190 of the GST Act, exports of services from Australia are GST-free when the recipient is outside Australia and the service is not directly connected with real property or goods in Australia. InvoiceFlow automatically detects when you\'re invoicing an overseas client and applies GST-free treatment, so you won\'t accidentally charge 10% GST on international invoices. You can still claim GST credits on your Australian business expenses.',
      },
    },
    {
      '@type': 'Question',
      name: 'What exchange rate does InvoiceFlow use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow uses real-time exchange rates sourced from major financial data providers, updated throughout the business day. You can also lock the exchange rate at the time of invoicing so the amount doesn\'t change between when you send the invoice and when the client pays. For BAS reporting, InvoiceFlow uses the RBA (Reserve Bank of Australia) exchange rate to convert foreign currency amounts to AUD, as required by the ATO.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I include international payment details on my invoice (Wise, PayPal, etc.)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow lets you add multiple international payment methods to each invoice, including Wise (TransferWise) account details, PayPal email, Stripe payment links, and traditional SWIFT/BIC bank transfer details. You can set default payment methods per currency or per client, so your USD clients see your Wise USD details while your GBP clients see your UK bank details automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does multi-currency invoicing work for BAS reporting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow automatically converts all foreign currency invoices to AUD using the RBA exchange rate for BAS reporting purposes. GST-free export invoices are categorised as G3 (GST-free sales) on your BAS, while any domestic invoices remain under G1 (total sales). InvoiceFlow generates a BAS-ready summary showing your total sales, GST-free exports, and GST collected — all converted to AUD so your accountant or tax agent can lodge without manual currency conversions.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Manually converting currencies and hoping you got the rate right',
    solution: 'Real-time exchange rates auto-applied to every international invoice',
  },
  {
    problem: 'Accidentally charging GST to overseas clients and having to issue credits',
    solution: 'Automatic GST-free treatment for exported services',
  },
  {
    problem: 'Currency fluctuations eating into your margins between invoicing and payment',
    solution: 'Lock exchange rates at time of invoicing',
  },
  {
    problem: 'No idea how much you\'re actually earning across multiple currencies',
    solution: 'Multi-currency dashboard with everything converted to AUD',
  },
];

const capabilities = [
  {
    title: '50+ Currencies',
    description: 'Invoice in USD, GBP, EUR, NZD, SGD, JPY, and 40+ more with real-time exchange rates sourced from major financial data providers.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'GST-Free Exports',
    description: 'Automatically applies GST-free treatment for international services under Section 38-190 of the GST Act. No more accidental GST charges on overseas invoices.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Exchange Rate Locking',
    description: 'Lock the exchange rate at time of invoicing for consistent billing. Protect your margins from currency fluctuations between invoicing and payment.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Currency Reports',
    description: 'See revenue breakdown by currency with AUD equivalent totals. Know exactly what you\'re earning across every market you serve.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'International Payment Methods',
    description: 'Include bank details for Wise, PayPal, Stripe, and SWIFT transfers on each invoice. Set default payment methods per currency or per client.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: 'ATO Compliance',
    description: 'Automatic AUD conversion for BAS reporting at the RBA exchange rate. GST-free exports correctly categorised as G3 on your BAS summary.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    ),
  },
];

const comparisonRows = [
  { feature: 'Multi-currency support', invoiceflow: true, xero: true, freshbooks: true, wave: false },
  { feature: 'GST-free export detection', invoiceflow: true, xero: false, freshbooks: false, wave: false },
  { feature: 'Exchange rate locking', invoiceflow: true, xero: true, freshbooks: false, wave: false },
  { feature: 'Free tier available', invoiceflow: true, xero: false, freshbooks: false, wave: true },
  { feature: 'International payment methods', invoiceflow: true, xero: true, freshbooks: true, wave: false },
  { feature: 'Australian compliance', invoiceflow: true, xero: true, freshbooks: false, wave: false },
];

const keyNumbers = [
  { value: '50+', label: 'Currencies supported', description: 'With real-time exchange rates updated throughout the day' },
  { value: '$0 GST', label: 'On exported services', description: 'Section 38-190 GST Act — automatic GST-free treatment' },
  { value: '35%', label: 'Of AU freelancers work internationally', description: 'And need multi-currency invoicing that handles compliance' },
  { value: '$2,100', label: 'Average savings', description: 'From correct GST-free export treatment per financial year' },
];

const personaPages = [
  { name: 'Web Developers', href: '/for/web-developers', desc: 'Invoice international dev clients in their local currency' },
  { name: 'IT Consultants', href: '/for/it-consultants', desc: 'Bill global tech companies with compliant multi-currency invoices' },
  { name: 'Writers', href: '/for/writers', desc: 'Get paid by international publishers and content platforms' },
  { name: 'Graphic Designers', href: '/for/graphic-designers', desc: 'Invoice overseas creative agencies without currency headaches' },
  { name: 'Marketing Professionals', href: '/for/marketing-professionals', desc: 'Bill global clients for campaigns in their local currency' },
  { name: 'Consultants', href: '/for/consultants', desc: 'Professional multi-currency invoicing for international advisory work' },
];

const relatedTools = [
  { name: 'International Invoice Calculator', href: '/tools/international-invoice-calculator', desc: 'Calculate invoice amounts in any currency' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Add, remove, or extract GST instantly' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Find your ideal hourly rate in any currency' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional invoices in seconds' },
  { name: 'Currency Conversion Tool', href: '/tools/currency-converter', desc: 'Convert between 50+ currencies at live rates' },
  { name: 'Business Trip Expense Calculator', href: '/tools/business-trip-expense-calculator', desc: 'Track international travel expenses in AUD' },
];

export default function MultiCurrencyPage() {
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
            <Link href="/blog" className="hover:text-white transition-colors">Guides</Link>
          </div>
          <Link href="/signup">
            <Button size="sm">Start Free</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <div className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-400 mb-8">
          Multi-Currency
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Invoice international clients{' '}
          <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
            in their currency
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop wrestling with exchange rates and GST rules for overseas clients. InvoiceFlow handles 50+ currencies
          with real-time rates, automatic GST-free export treatment, and AUD conversion for BAS reporting — so you
          can focus on the work, not the paperwork.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/international-invoice-calculator">
            <Button variant="secondary" size="lg">Try the Currency Calculator</Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Free tier: 5 invoices/month, 50+ currencies, automatic GST-free exports
        </p>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          International invoicing shouldn&apos;t be this painful
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re great at your craft — you shouldn&apos;t need to become a currency expert too. InvoiceFlow handles the complexity so you can bill globally with confidence.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-sky-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-2 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sky-300 font-semibold">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Everything you need for international invoicing
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          From real-time exchange rates to ATO-compliant BAS reporting — InvoiceFlow covers every aspect of multi-currency invoicing for Australian freelancers.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-sky-500/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-sky-400 to-blue-400 p-3 text-white shrink-0">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{cap.title}</h3>
                  <p className="text-sm text-slate-400">{cap.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Multi-currency invoicing by the numbers
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          The figures that matter when you&apos;re invoicing international clients from Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyNumbers.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center hover:border-sky-500/20 transition-colors"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="font-semibold text-white text-sm mb-1">{stat.label}</p>
              <p className="text-xs text-slate-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Competitor Comparison Table */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          How InvoiceFlow compares for multi-currency
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Most invoicing tools bolt on multi-currency as an afterthought. InvoiceFlow was built for Australian freelancers billing globally — with compliance baked in.
        </p>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-slate-400 font-medium">Feature</th>
                  <th className="p-4 text-center">
                    <span className="text-sky-400 font-bold">InvoiceFlow</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Free / $19</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">Xero</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$35/mo</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">FreshBooks</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$24/mo</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">Wave</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Free</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0">
                    <td className="p-4 text-slate-300">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.invoiceflow ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sky-500/20 text-sky-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.xero ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.freshbooks ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.wave ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Persona Pages */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Who needs multi-currency invoicing?
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          If you work with clients outside Australia — even occasionally — multi-currency invoicing saves you time, money, and compliance headaches.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personaPages.map((persona) => (
            <Link
              key={persona.href}
              href={persona.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-sky-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-sky-400 transition-colors mb-1">
                {persona.name}
              </h3>
              <p className="text-xs text-slate-500">{persona.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free international invoicing tools
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-sky-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-sky-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-sky-400 hover:text-sky-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Email Capture */}
      <div className="mx-auto max-w-6xl px-6">
        <EmailCapture />
      </div>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Start free. Upgrade when your international client base grows. Every plan includes multi-currency support.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="text-lg font-bold text-white mb-1">Free</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$0</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Perfect for freelancers starting to work with international clients.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                5 invoices per month
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                50+ currencies with live rates
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Automatic GST-free exports
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                CSV export
              </li>
            </ul>
            <Link href="/signup">
              <Button variant="secondary" size="md" className="w-full">Start Free</Button>
            </Link>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-sky-500/30 bg-sky-500/[0.05] p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400 to-blue-400 px-3 py-0.5 text-xs font-bold text-slate-900">
              Most Popular
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Pro</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$19</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Unlimited multi-currency invoicing with exchange rate locking and BAS exports.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited invoices
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Exchange rate locking
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Multi-currency reporting
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                BAS-ready GST exports
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Payment reminders
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
            <p className="text-sm text-slate-400 mb-6">Multi-business international invoicing with advanced currency management.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Everything in Pro
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Multiple business profiles
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Per-currency payment accounts
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                QuickBooks &amp; Xero export
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
          Multi-currency invoicing FAQ
        </h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-sky-400 transition-colors list-none flex justify-between items-center">
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
          Bill the world,{' '}
          <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
            stay compliant at home
          </span>
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join Australian freelancers who invoice international clients in 50+ currencies with automatic GST-free treatment, exchange rate locking, and BAS-ready reporting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — 50+ Currencies Included</Button>
          </Link>
          <Link href="/pricing">
            <Button variant="secondary" size="lg">View Pricing</Button>
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
