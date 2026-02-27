import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Freelance Writers in Australia — InvoiceFlow',
  description:
    'Free invoicing tools built for Australian freelance writers. Word-rate billing, per-article invoicing, retainer management, and branded invoices for copywriters, content writers, technical writers and more.',
  alternates: { canonical: '/for/writers' },
  keywords: [
    'invoicing software freelance writers australia',
    'copywriter invoice template',
    'invoice app for content writers',
  ],
  openGraph: {
    title: 'InvoiceFlow for Writers — Invoice Clients, Get Paid Faster',
    description:
      'Stop chasing editors for payment. InvoiceFlow gives freelance writers word-rate billing, retainer invoicing, and kill fee tracking — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Writers', item: 'https://invoiceflow-teal.vercel.app/for/writers' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I invoice clients based on word rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow lets you create line items with custom units, so you can bill per word, per 100 words, or per 1,000 words. Simply add a line item like "Blog post — 2,500 words @ $0.30/word = $750" and InvoiceFlow calculates the total automatically. You can also save your common word rates as templates so every new invoice is pre-filled with your pricing. This works for any rate structure — per word, per article, per page, or per hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle kill fees and cancellation billing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Kill fees are common in freelance writing — when a publication commissions an article and then cancels it. InvoiceFlow lets you create kill fee invoices with custom terms that reference the original assignment. You can set up your standard kill fee percentage (typically 25-50% of the agreed fee) as a template, so when a client cancels, you can generate and send a kill fee invoice in seconds. Your payment terms and contract references are included automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I bill for revision rounds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow supports line-item invoicing, so you can include your base article fee and then add separate line items for additional revision rounds beyond what your contract covers. For example, your invoice might show "Feature article — $800" plus "Additional revision round 3 — $150" and "Additional revision round 4 — $150". You can also set up your contracts to specify how many revisions are included and bill extras automatically when the limit is exceeded.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I bill per article or set up a monthly retainer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the client relationship. Per-article billing works well for one-off assignments and irregular work. Monthly retainers are better for ongoing clients who need consistent content — typically 4-8 articles per month. InvoiceFlow supports both models. For retainers, set up a recurring monthly invoice (e.g., "$3,000/month for 6x blog posts"). For per-article work, create individual invoices as you submit. Many writers use a mix of both — retainers for anchor clients and per-article billing for everyone else.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I invoice international publications from Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow supports multi-currency invoicing, so you can bill US publications in USD, UK outlets in GBP, or any other currency. When invoicing internationally, GST does not apply to exported services (services provided to overseas clients), so InvoiceFlow automatically marks these invoices as GST-free. You should still include your ABN on the invoice. InvoiceFlow tracks your domestic and international revenue separately, making BAS reporting straightforward at the end of each quarter.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Confused about whether to bill per word, per article, or per hour',
    solution: 'Flexible rate templates — set up word-rate, per-article, hourly, or retainer billing and switch between them per client.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    problem: 'Losing money when publications cancel assignments with no kill fee process',
    solution: 'Kill fee invoice templates — generate a cancellation invoice in seconds with your standard kill fee percentage.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    problem: 'No way to track which revision rounds are billable',
    solution: 'Line-item revision tracking — bill your base fee plus each extra revision round as a separate line item.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    problem: 'Juggling per-article clients and monthly retainer clients in different spreadsheets',
    solution: 'One dashboard for everything — per-article invoices and recurring retainer billing side by side, with automatic payment reminders.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
];

const writerTypes = [
  { name: 'Copywriting', icon: '✍️' },
  { name: 'Content Writing', icon: '📝' },
  { name: 'Technical Writing', icon: '⚙️' },
  { name: 'Blog Writing', icon: '💻' },
  { name: 'SEO Writing', icon: '🔍' },
  { name: 'Ghostwriting', icon: '👻' },
  { name: 'Editing & Proofreading', icon: '📖' },
  { name: 'Grant Writing', icon: '📋' },
];

const popularTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional writing invoices instantly' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Calculate your per-word, per-article, or hourly rate' },
  { name: 'Contract Generator', href: '/tools/contract-generator', desc: 'Generate freelance writing contracts with kill fee clauses' },
  { name: 'Client Communication Templates', href: '/tools/email-templates', desc: 'Professional email templates for pitching and follow-ups' },
  { name: 'Payment Receipt Generator', href: '/tools/receipt-generator', desc: 'Send payment receipts to editors and publications' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on writing fees and retainers' },
];

export default function ForWritersPage() {
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
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </div>
          <Link href="/signup">
            <Button size="sm">Start Free</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <div className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400 mb-8">
          Built for Australian Writers
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Write the words.{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Get paid for them.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop chasing editors and clients for payment. InvoiceFlow lets freelance writers, copywriters, and content creators
          invoice per word, per article, or per retainer — in 30 seconds. GST sorted automatically.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/invoice-generator">
            <Button variant="secondary" size="lg">Try the Invoice Generator</Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Free tier: 5 invoices/month, Gmail sync, CSV export, 100+ free tools
        </p>
      </section>

      {/* Writer Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by writers across every specialty</p>
        <div className="flex flex-wrap justify-center gap-3">
          {writerTypes.map((writer) => (
            <span
              key={writer.name}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
            >
              {writer.icon} {writer.name}
            </span>
          ))}
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Writing invoices shouldn&apos;t be harder than writing articles
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re a writer, not an accountant. You need to bill clients quickly, track revision rounds, and get back to the words that pay.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-amber-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-amber-300 font-semibold">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: '40K+', label: 'Freelance writers in AU', detail: 'A growing creative workforce' },
            { number: '$75K', label: 'GST registration threshold', detail: 'We track it for you' },
            { number: '$19/mo', label: 'Pro plan', detail: 'Unlimited invoices & clients' },
            { number: '100+', label: 'Free tools', detail: 'No sign-up required' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                {stat.number}
              </p>
              <p className="text-white font-medium mt-2">{stat.label}</p>
              <p className="text-slate-500 text-sm mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          How InvoiceFlow compares for writers
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need bloated accounting software. You need fast invoicing, flexible rates, and a tool that understands how writers bill.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-amber-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">FreshBooks ($24/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Wave (Free but limited)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-amber-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
                <td className="py-3 px-4 text-amber-400">Free (ads + limited)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-amber-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$24/mo</td>
                <td className="py-3 px-4">Free</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Per-word / per-article billing</td>
                <td className="py-3 px-4 text-amber-400">Custom unit rates</td>
                <td className="py-3 px-4 text-amber-400">Custom line items</td>
                <td className="py-3 px-4 text-slate-500">Basic line items only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Recurring retainer billing</td>
                <td className="py-3 px-4 text-amber-400">One-click setup</td>
                <td className="py-3 px-4 text-amber-400">Supported</td>
                <td className="py-3 px-4 text-slate-500">Not supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Multi-currency (USD, GBP)</td>
                <td className="py-3 px-4 text-amber-400">Built-in</td>
                <td className="py-3 px-4 text-amber-400">Supported</td>
                <td className="py-3 px-4 text-slate-500">Limited</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Setup time</td>
                <td className="py-3 px-4 text-amber-400">30 seconds</td>
                <td className="py-3 px-4">15-30 minutes</td>
                <td className="py-3 px-4">10-20 minutes</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-amber-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$288/yr</td>
                <td className="py-3 px-4">$0 (with limitations)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools every writer needs
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-amber-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Guides for writers</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, GST, and running a freelance writing business in Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'GST Guide for Australian Freelancers', href: '/blog/gst-guide-australian-freelancers' },
            { title: 'How Much Tax Do Freelancers Pay?', href: '/blog/how-much-tax-freelancers-pay-australia' },
            { title: 'BAS Guide for Sole Traders', href: '/blog/bas-guide-australian-freelancers' },
            { title: 'Tax Deductions for Freelancers', href: '/blog/tax-deductions-australian-freelancers' },
            { title: 'Late Payment Interest Guide', href: '/blog/late-payment-interest-australia' },
            { title: 'How to Start Freelancing in Australia', href: '/blog/how-to-start-freelancing-australia' },
          ].map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-amber-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
            Read all 125+ articles &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from writers
        </h2>
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to get paid for your words?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian freelance writers who invoice clients in seconds, track retainers automatically, and never chase a late payment again. Start free today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — 5 Invoices/Month</Button>
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
