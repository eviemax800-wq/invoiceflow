import Link from 'next/link';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Invoicing Software Alternatives for Australian Freelancers (2026) | InvoiceFlow',
  description:
    'Compare InvoiceFlow to Xero, QuickBooks, MYOB, FreshBooks, Wave, HoneyBook, Bonsai, and Zoho. See why Australian freelancers are switching to AI-powered invoicing from $0/mo.',
  alternates: { canonical: '/alternative-to' },
  keywords: [
    'invoicing software alternative australia',
    'xero alternative freelancers',
    'quickbooks alternative australia',
    'myob alternative small business',
    'best invoicing software australia 2026',
  ],
  openGraph: {
    title: 'InvoiceFlow — The #1 Alternative to Expensive Invoicing Software',
    description: 'See why Australian freelancers are switching from Xero, QuickBooks, MYOB, and more to InvoiceFlow. AI-powered, GST-compliant, from $0/mo.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Alternatives', item: 'https://invoiceflow-teal.vercel.app/alternative-to' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best alternative to Xero for Australian freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow is the best Xero alternative for Australian freelancers who primarily need invoicing. It offers AI-powered invoice management, native GST compliance, ABN validation, and 100+ free business tools — starting at $0/mo vs Xero\'s $35/mo minimum. If you need full accounting (payroll, BAS lodgement), Xero may still be needed alongside InvoiceFlow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a free invoicing software for Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including GST calculators, invoice generators, contract builders, and rate calculators. No credit card required, no trial period. Pro upgrades start at $19/mo for unlimited invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which invoicing software is cheapest in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow is the most affordable dedicated invoicing software for Australian freelancers: Free (5 invoices/mo), Pro $19/mo (unlimited), Premium $39/mo (advanced features). Compare: Xero starts at $35/mo, MYOB at $34/mo, QuickBooks at $20/mo (2 invoices only), FreshBooks at $24/mo (5 clients only). Zoho Invoice is free but locks you into the Zoho ecosystem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need accounting software or just invoicing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Australian freelancers and sole traders only need invoicing software, not full accounting. If you send invoices, track payments, and export data for your accountant — InvoiceFlow covers everything from $0/mo. Full accounting software (Xero, MYOB, QuickBooks) is only necessary if you manage payroll, need bank reconciliation, or do your own BAS lodgement without an accountant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow replace my current invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For invoicing — yes. InvoiceFlow handles invoice creation, payment tracking, GST compliance, ABN validation, BAS-ready exports, and client management. It includes 100+ free business tools (contracts, proposals, calculators) that other platforms charge extra for. Import your data via CSV, test on the free tier, and upgrade when you\'re ready.',
      },
    },
  ],
};

const competitors = [
  {
    name: 'Xero',
    slug: 'xero',
    price: '$35–$78/mo',
    trustpilot: '3.8/5',
    trustpilotColor: 'text-yellow-400',
    headline: 'Accounting bloat at $35/mo+',
    keyIssue: 'Prices up 169% since 2021. $78/mo for unlimited invoices.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    border: 'hover:border-blue-500/50',
  },
  {
    name: 'QuickBooks',
    slug: 'quickbooks',
    price: '$20–$275/mo',
    trustpilot: '1.1/5',
    trustpilotColor: 'text-red-400',
    headline: '$20/mo for 2 invoices. Seriously.',
    keyIssue: 'Lowest Trustpilot score of any major invoicing tool. Prices up 40-88%.',
    gradient: 'from-green-500/20 to-emerald-500/20',
    border: 'hover:border-green-500/50',
  },
  {
    name: 'MYOB',
    slug: 'myob',
    price: '$34–$65/mo',
    trustpilot: '2.1/5',
    trustpilotColor: 'text-red-400',
    headline: 'Legacy software, no AI, poor support',
    keyIssue: 'Taken private by KKR. Mar 2026 price increase confirmed. Zero AI features.',
    gradient: 'from-purple-500/20 to-violet-500/20',
    border: 'hover:border-purple-500/50',
  },
  {
    name: 'FreshBooks',
    slug: 'freshbooks',
    price: '$24–$68/mo',
    trustpilot: '4.5/5',
    trustpilotColor: 'text-green-400',
    headline: 'Client caps and Canadian DNA',
    keyIssue: '5-client limit on $24/mo plan. Not built for Australian GST compliance.',
    gradient: 'from-sky-500/20 to-blue-500/20',
    border: 'hover:border-sky-500/50',
  },
  {
    name: 'Wave',
    slug: 'wave',
    price: '$0–$16/mo',
    trustpilot: '3.8/5',
    trustpilotColor: 'text-yellow-400',
    headline: 'Free is ending under H&R Block',
    keyIssue: 'Acquired by H&R Block. Core features moving to $16/mo. Limited AU support.',
    gradient: 'from-indigo-500/20 to-purple-500/20',
    border: 'hover:border-indigo-500/50',
  },
  {
    name: 'HoneyBook',
    slug: 'honeybook',
    price: '$19–$79/mo',
    trustpilot: '4.1/5',
    trustpilotColor: 'text-green-400',
    headline: 'CRM overhead for simple invoicing',
    keyIssue: '1-project limit on Starter. US-first design. Overkill for invoice-only needs.',
    gradient: 'from-rose-500/20 to-pink-500/20',
    border: 'hover:border-rose-500/50',
  },
  {
    name: 'Bonsai',
    slug: 'bonsai',
    price: '$25–$79/mo',
    trustpilot: '3.4/5',
    trustpilotColor: 'text-yellow-400',
    headline: 'US platform, AU compliance gaps',
    keyIssue: 'No free tier. Banking and tax features US-only. $39/mo for contracts.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    border: 'hover:border-emerald-500/50',
  },
  {
    name: 'Zoho Invoice',
    slug: 'zoho',
    price: 'Free (ecosystem lock-in)',
    trustpilot: '4.3/5',
    trustpilotColor: 'text-green-400',
    headline: 'Free bait for the Zoho ecosystem',
    keyIssue: 'Designed to upsell you to Zoho Books ($15-50/mo), CRM ($14-52/mo), and more.',
    gradient: 'from-amber-500/20 to-orange-500/20',
    border: 'hover:border-amber-500/50',
  },
];

export default function AlternativesHubPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900" />
        <div className="relative max-w-4xl mx-auto text-center">
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-teal-400">Alternatives</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-display)]">
            The Best Invoicing Software<br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Alternatives for Australia
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stop overpaying for accounting software when you just need invoicing. See how InvoiceFlow compares to the 8 most popular tools — and why Australian freelancers are making the switch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white px-8 py-3 text-lg rounded-lg font-semibold transition-all">
                Try InvoiceFlow Free
              </Button>
            </Link>
            <Link href="/compare">
              <Button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 text-lg rounded-lg font-semibold transition-all bg-transparent">
                Detailed Comparisons →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-10 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-teal-400 font-[family-name:var(--font-display)]">$0</div>
            <div className="text-gray-400 text-sm">Free forever tier</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-400 font-[family-name:var(--font-display)]">$19/mo</div>
            <div className="text-gray-400 text-sm">Unlimited invoices</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-400 font-[family-name:var(--font-display)]">100+</div>
            <div className="text-gray-400 text-sm">Free business tools</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-400 font-[family-name:var(--font-display)]">🇦🇺</div>
            <div className="text-gray-400 text-sm">Built for Australia</div>
          </div>
        </div>
      </section>

      {/* Competitor Cards */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 font-[family-name:var(--font-display)]">
            Choose Your Current Software
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            See exactly why freelancers are switching and how much you can save.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {competitors.map((comp) => (
              <Link
                key={comp.slug}
                href={`/alternative-to/${comp.slug}`}
                className={`group bg-gradient-to-br ${comp.gradient} rounded-xl p-6 border border-gray-700/50 ${comp.border} transition-all hover:scale-[1.02]`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    {comp.name}
                  </h3>
                  <span className={`text-xs font-medium ${comp.trustpilotColor}`}>
                    ★ {comp.trustpilot}
                  </span>
                </div>
                <p className="text-sm text-gray-300 font-medium mb-2">{comp.headline}</p>
                <p className="text-xs text-gray-400 mb-4">{comp.keyIssue}</p>
                <div className="flex items-center justify-between">
                  <span className="text-red-400 text-sm font-medium">{comp.price}</span>
                  <span className="text-teal-400 text-sm group-hover:translate-x-1 transition-transform">
                    See alternative →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Price Comparison Table */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 font-[family-name:var(--font-display)]">
            Price Comparison — All 8 vs InvoiceFlow
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-3 text-gray-400 font-medium">Software</th>
                  <th className="text-center py-3 px-3 text-gray-400 font-medium">Starting Price</th>
                  <th className="text-center py-3 px-3 text-gray-400 font-medium">Unlimited Invoices</th>
                  <th className="text-center py-3 px-3 text-gray-400 font-medium">Free Tools</th>
                  <th className="text-center py-3 px-3 text-gray-400 font-medium">AU Native</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-teal-500/30 bg-teal-500/5">
                  <td className="py-3 px-3 font-semibold text-teal-400">InvoiceFlow</td>
                  <td className="py-3 px-3 text-center text-teal-400">$0/mo</td>
                  <td className="py-3 px-3 text-center text-teal-400">$19/mo</td>
                  <td className="py-3 px-3 text-center text-teal-400">100+</td>
                  <td className="py-3 px-3 text-center text-teal-400">✓</td>
                </tr>
                {[
                  { name: 'Xero', start: '$35/mo', unlimited: '$78/mo', tools: '0', au: '✓' },
                  { name: 'QuickBooks', start: '$20/mo', unlimited: '$35/mo', tools: '0', au: '✗' },
                  { name: 'MYOB', start: '$34/mo', unlimited: '$34/mo', tools: '0', au: '✓' },
                  { name: 'FreshBooks', start: '$24/mo', unlimited: '$44/mo', tools: '0', au: '✗' },
                  { name: 'Wave', start: '$0→$16/mo', unlimited: '$16/mo', tools: '0', au: '✗' },
                  { name: 'HoneyBook', start: '$19/mo', unlimited: '$39/mo', tools: '0', au: '✗' },
                  { name: 'Bonsai', start: '$25/mo', unlimited: '$25/mo', tools: '0', au: '✗' },
                  { name: 'Zoho Invoice', start: '$0 (lock-in)', unlimited: '$0 (lock-in)', tools: '0', au: '✗' },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-gray-800/50">
                    <td className="py-3 px-3 text-gray-300">{row.name}</td>
                    <td className="py-3 px-3 text-center text-red-400">{row.start}</td>
                    <td className="py-3 px-3 text-center text-red-400">{row.unlimited}</td>
                    <td className="py-3 px-3 text-center text-gray-500">{row.tools}</td>
                    <td className="py-3 px-3 text-center text-gray-400">{row.au}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-display)]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              { q: 'What is the best alternative to Xero for Australian freelancers?', a: 'InvoiceFlow is the best Xero alternative for Australian freelancers who primarily need invoicing. It offers AI-powered invoice management, native GST compliance, ABN validation, and 100+ free business tools — starting at $0/mo vs Xero\'s $35/mo minimum.' },
              { q: 'Is there a free invoicing software for Australia?', a: 'Yes. InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools. No credit card required, no trial period.' },
              { q: 'Which invoicing software is cheapest in Australia?', a: 'InvoiceFlow: Free (5 invoices/mo), Pro $19/mo (unlimited). Compare: Xero $35/mo, MYOB $34/mo, QuickBooks $20/mo (2 invoices), FreshBooks $24/mo (5 clients).' },
              { q: 'Do I need accounting software or just invoicing?', a: 'Most Australian freelancers only need invoicing software. Full accounting (Xero, MYOB) is only necessary for payroll, bank reconciliation, or self-managed BAS lodgement.' },
              { q: 'Can InvoiceFlow replace my current invoicing software?', a: 'For invoicing — yes. InvoiceFlow handles invoice creation, payment tracking, GST compliance, ABN validation, BAS-ready exports, and includes 100+ free business tools.' },
            ].map((faq, i) => (
              <details key={i} className="group bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800/80 transition-colors">
                  <h3 className="font-semibold text-white pr-4">{faq.q}</h3>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform text-xl flex-shrink-0">▾</span>
                </summary>
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-display)]">
            Stop Overpaying for Software You Don&apos;t Fully Use
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            InvoiceFlow gives Australian freelancers AI-powered invoicing, GST compliance, and 100+ free tools — from $0/month.
          </p>
          <Link href="/signup">
            <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white px-10 py-4 text-lg rounded-lg font-semibold transition-all">
              Start Free — No Credit Card Required
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <Link href="/tools" className="group">
            <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors">100+ Free Tools</h3>
            <p className="text-gray-400 text-sm mt-1">GST calculators, contract generators, rate calculators and more</p>
          </Link>
          <Link href="/blog" className="group">
            <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors">125+ Guides</h3>
            <p className="text-gray-400 text-sm mt-1">Australian freelancing guides, tax tips, and invoicing advice</p>
          </Link>
          <Link href="/for/freelancers" className="group">
            <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors">25+ Industry Pages</h3>
            <p className="text-gray-400 text-sm mt-1">Tailored invoicing for tradies, consultants, photographers and more</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
