import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'International Invoicing Software for Australian Freelancers — InvoiceFlow',
  description:
    'Invoice overseas clients with correct GST-free treatment, automatic currency conversion, and ATO-compliant export invoices. Handle USD, GBP, EUR payments and get paid in AUD. Free to start.',
  alternates: { canonical: '/use-cases/international-invoicing' },
  keywords: ['international invoicing software australia', 'how to invoice overseas clients australia', 'invoice foreign clients GST', 'export invoice template australia'],
  openGraph: {
    title: 'International Invoicing — Invoice Globally, Get Paid in AUD',
    description:
      'Invoice overseas clients with correct GST-free treatment, automatic currency conversion, and ATO-compliant export invoices. Free tier available.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Use Cases', item: 'https://invoiceflow-teal.vercel.app/use-cases' },
    { '@type': 'ListItem', position: 3, name: 'International Invoicing', item: 'https://invoiceflow-teal.vercel.app/use-cases/international-invoicing' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I charge GST on invoices to overseas clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally no. Under GST Act Division 38, services provided to overseas recipients are GST-free exports. The service must be provided to a non-resident who is outside Australia when it\'s performed. You still include your ABN and write \'GST-Free — Export\' on the invoice. InvoiceFlow automatically applies the correct GST-free treatment when you mark a client as international, so you never accidentally charge GST on an export invoice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What currency should I invoice in — AUD or foreign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can invoice in either, but you must report income in AUD for tax purposes. If invoicing in foreign currency, record the AUD equivalent using the RBA exchange rate on the invoice date. InvoiceFlow handles this conversion automatically, showing both the foreign currency amount and AUD equivalent on every international invoice so your records are always ATO-ready.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the cheapest way to receive international payments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wise (TransferWise) typically offers the best rates at 0.4-0.7% with mid-market exchange rates. PayPal charges 2.5-3.5% plus currency conversion markup. Bank wire transfers cost $15-30 per transaction. For amounts over $5K, Wise or direct bank transfer is most cost-effective. InvoiceFlow includes a fee comparison on each international invoice so you and your client can choose the cheapest option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I still need an ABN for international invoicing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Your ABN must appear on all invoices, including those to overseas clients. The ATO requires it for income reporting. Without an ABN, your client may withhold 47% of the payment under the no-ABN withholding rules. InvoiceFlow automatically includes your ABN and GST-free export declaration on every international invoice.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I handle withholding tax from overseas clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some countries withhold tax on payments to foreign contractors (e.g., US 30% withholding). Australia has Double Tax Agreements (DTAs) with many countries that reduce or eliminate this. Lodge a W-8BEN form for US clients to reduce withholding to 5-15%. InvoiceFlow tracks withholding amounts and provides the documentation you need for your Australian tax return to claim foreign income tax offsets.',
      },
    },
  ],
};

const markets = [
  { name: 'United States (USD)', desc: 'Largest market for AU tech freelancers, US/AUD conversion, Wise recommended', example: 'USD → AUD at mid-market rates' },
  { name: 'United Kingdom (GBP)', desc: 'Strong demand for AU creative/marketing talent, GBP/AUD conversion', example: 'GBP → AUD with low-fee transfers' },
  { name: 'European Union (EUR)', desc: 'Growing market, SEPA transfers, EUR/AUD conversion', example: 'EUR → AUD via SEPA or Wise' },
  { name: 'Asia-Pacific (SGD/JPY)', desc: 'Regional proximity, time zone advantage, multiple currencies', example: 'SGD/JPY → AUD same-day settlement' },
];

const whoNeedsIt = [
  { profession: 'Web Developers', reason: 'Remote coding for US/UK startups is the #1 AU freelance export', link: '/for/web-developers' },
  { profession: 'IT Consultants', reason: 'International IT contracts often require special invoicing formats', link: '/for/it-consultants' },
  { profession: 'Writers', reason: 'Content writing for overseas agencies and publications', link: '/for/writers' },
  { profession: 'Graphic Designers', reason: 'Design work for international brands and agencies', link: '/for/graphic-designers' },
  { profession: 'Consultants', reason: 'Advisory services for multinational clients', link: '/for/consultants' },
  { profession: 'Marketing Pros', reason: 'Digital marketing for international e-commerce brands', link: '/for/marketing-professionals' },
];

const relatedTools = [
  { name: 'International Invoice Calculator', href: '/tools/international-invoice-calculator', desc: 'Convert currencies and compare payment fees' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create GST-free export invoices' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Set competitive international rates' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify your ABN for export invoices' },
  { name: 'Tax Deduction Finder', href: '/tools/tax-deduction-finder', desc: 'Claim export-related deductions' },
  { name: 'Payment Receipt Generator', href: '/tools/payment-receipt-generator', desc: 'Issue receipts in AUD' },
];

export default function InternationalInvoicingPage() {
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
        <div className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-400 mb-8">
          International Invoicing
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Invoice globally,{' '}
          <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
            get paid in AUD
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Invoice international clients with correct GST-free treatment, automatic currency conversion, and full ATO compliance. InvoiceFlow handles the complexity so you can focus on the work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/international-invoice-calculator">
            <Button variant="secondary" size="lg">Try the Currency Calculator</Button>
          </Link>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">The international invoicing problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Invoicing overseas clients from Australia shouldn&apos;t mean guessing about GST, losing money on exchange rates, or spending hours on compliance.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { pain: 'Unsure if GST applies to overseas clients', fix: 'GST-free for exported services under GST Act Division 38 — applied automatically' },
            { pain: 'Currency conversion confusion on every invoice', fix: 'Auto-convert foreign amounts to AUD at current RBA exchange rates' },
            { pain: 'High international payment fees eating into profits', fix: 'Fee comparison helps you choose the cheapest payment method for each client' },
            { pain: 'No proper export invoice template with ABN and declarations', fix: 'Professional invoices with ABN, GST-free declaration, and dual currency display' },
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
                <span className="text-sky-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-sky-300 font-medium">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Currency / Regions */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Key international markets for AU freelancers</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          InvoiceFlow supports every major currency. Invoice in your client&apos;s currency, get paid in AUD.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {markets.map((market) => (
            <div key={market.name} className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-sky-500/20 transition-colors">
              <h3 className="font-bold text-white mb-2">{market.name}</h3>
              <p className="text-xs text-slate-400 mb-3">{market.desc}</p>
              <div className="text-xs text-sky-400/80 font-medium">{market.example}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Needs It */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Who needs international invoicing?</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          If you work with overseas clients, you need invoices that handle GST-free exports, currency conversion, and compliance automatically.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoNeedsIt.map((item) => (
            <Link
              key={item.profession}
              href={item.link}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-sky-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-sky-400 transition-colors mb-1">
                {item.profession}
              </h3>
              <p className="text-xs text-slate-500">{item.reason}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free tools for international invoicing</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required. Use them right now.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-sky-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-sky-400 transition-colors">{tool.name}</h3>
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
        <h2 className="text-3xl font-bold mb-4">Simple pricing for international invoicing</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free, upgrade when your international client base grows.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, 1 currency</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-6 ring-1 ring-sky-500/20">
            <div className="text-xs text-sky-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, all currencies, auto-conversion</p>
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
        <h2 className="text-3xl font-bold text-center mb-10">International invoicing FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
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

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stop losing money on international invoices</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Get the GST treatment right, convert currencies automatically, and choose the cheapest payment method — all in one invoice.
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
