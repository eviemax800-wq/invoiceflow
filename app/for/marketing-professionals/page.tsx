import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Marketing Professionals in Australia — InvoiceFlow',
  description:
    'Free invoicing tools built for Australian marketing professionals. Retainer billing, ad spend pass-through invoicing, campaign-based billing, and branded invoices for freelance marketers, social media managers, SEO specialists and digital marketing consultants.',
  alternates: { canonical: '/for/marketing-professionals' },
  keywords: [
    'invoicing software freelance marketers australia',
    'social media manager invoice template',
    'invoice app for digital marketing consultants',
  ],
  openGraph: {
    title: 'InvoiceFlow for Marketing Professionals — Bill Campaigns, Grow Your Agency',
    description:
      'Stop losing revenue to messy retainer tracking and ad spend reconciliation. InvoiceFlow gives marketing professionals automated billing, campaign-based invoicing, and retainer management — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Marketing Professionals', item: 'https://invoiceflow-teal.vercel.app/for/marketing-professionals' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I invoice retainer clients for ongoing marketing campaigns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow makes retainer billing effortless. Set up a recurring invoice for your monthly retainer amount — whether it is $2,000/month for social media management or $5,000/month for a full-service marketing retainer — and InvoiceFlow automatically sends it on your chosen schedule. You can include a breakdown of services covered under the retainer, track hours against the retainer if needed, and automatically bill for any overage. Clients get a professional, consistent invoice every month without you lifting a finger.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I invoice clients for ad spend pass-through costs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow lets you add separate line items for your management fee and the actual ad spend. For example, you might bill $1,500 for PPC management plus $3,200 in Google Ads spend as a pass-through cost. You can mark ad spend as a reimbursable expense so it is clearly separated from your service fees. This keeps your invoices transparent, makes it easy for clients to see exactly where their money goes, and simplifies your own bookkeeping when reconciling ad platform charges against client payments.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I handle performance bonuses and results-based pricing on invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow supports flexible line items so you can structure performance-based invoices however your contract requires. Bill a base retainer fee plus a performance bonus as a separate line item — for example, $2,000 base fee plus $500 bonus for exceeding 50 qualified leads. You can add notes to each line item explaining the performance metrics achieved, attach campaign reports as supporting documents, and create invoice templates for different performance tiers so billing is fast and consistent each month.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I create invoices for multi-service marketing packages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Most marketing professionals offer bundled services — SEO plus content marketing, or social media management plus paid ads plus email marketing. InvoiceFlow lets you create package-based invoices with itemised breakdowns for each service. You can save package templates so a "Growth Package" invoice with SEO, content, and social media line items is created in one click. Clients see exactly what they are paying for, and you can easily adjust individual service prices without rebuilding the entire invoice.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow handle campaign-based billing with different timelines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marketing campaigns often have different billing milestones — a website launch project might be billed 50% upfront and 50% on completion, while an ongoing SEO engagement is billed monthly. InvoiceFlow supports milestone billing, recurring billing, and one-off invoicing all within the same client account. You can set up deposit invoices for new campaigns, schedule milestone payments tied to deliverables, and run monthly retainers simultaneously. Every invoice is tracked in one dashboard so you always know what has been paid across all your active campaigns.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Losing track of retainer billing across multiple ongoing campaigns',
    solution: 'Automated recurring invoices for every retainer client — set the schedule once and get paid on time, every month.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    problem: 'Spending hours reconciling ad spend pass-through costs manually',
    solution: 'Separate line items for management fees and ad spend — transparent invoices that clients trust and you can reconcile in seconds.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    problem: 'Complex performance-based pricing that is impossible to template',
    solution: 'Flexible line items with base fees, performance bonuses, and campaign notes — build any pricing structure in minutes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    problem: 'Managing invoices across 10+ clients on different platforms',
    solution: 'One dashboard for every client, campaign, and invoice — stop juggling spreadsheets, emails, and accounting apps.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
];

const marketingTypes = [
  { name: 'Social Media Management', icon: '📱' },
  { name: 'SEO & SEM', icon: '🔍' },
  { name: 'Content Marketing', icon: '✍️' },
  { name: 'Email Marketing', icon: '📧' },
  { name: 'PPC & Ads', icon: '📊' },
  { name: 'Brand Strategy', icon: '🎨' },
  { name: 'Marketing Analytics', icon: '📈' },
  { name: 'Influencer Marketing', icon: '🤝' },
];

const popularTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional marketing invoices instantly' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Calculate your ideal hourly or project rate' },
  { name: 'Marketing Budget Calculator', href: '/tools/marketing-budget-calculator', desc: 'Plan and allocate campaign budgets for clients' },
  { name: 'Client Acquisition Cost Calculator', href: '/tools/client-acquisition-cost-calculator', desc: 'Track your cost to acquire each new client' },
  { name: 'Service Package Builder', href: '/tools/service-package-builder', desc: 'Build tiered marketing service packages' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on retainers, campaigns, and ad spend' },
];

export default function ForMarketingProfessionalsPage() {
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
        <div className="inline-block rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-sm font-medium text-fuchsia-400 mb-8">
          Built for Australian Marketing Professionals
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Bill your campaigns.{' '}
          <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            Grow your agency.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop losing revenue to messy retainer tracking and ad spend reconciliation. InvoiceFlow lets freelance marketers,
          social media managers, and digital marketing consultants invoice clients for retainers, campaigns, and ad spend
          pass-through — in 30 seconds. GST sorted automatically.
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

      {/* Marketing Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by marketing professionals across every specialty</p>
        <div className="flex flex-wrap justify-center gap-3">
          {marketingTypes.map((type) => (
            <span
              key={type.name}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
            >
              {type.icon} {type.name}
            </span>
          ))}
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Marketing invoicing shouldn&apos;t be this painful
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re a marketer, not an accountant. You need to bill retainers quickly, pass through ad spend transparently, and get back to driving results for clients.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-fuchsia-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-fuchsia-300 font-semibold">{item.solution}</p>
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
            { number: '55K+', label: 'AU marketing freelancers', detail: 'And growing every year' },
            { number: '$75K', label: 'GST threshold', detail: 'We track it automatically' },
            { number: '$19/mo', label: 'Pro plan', detail: 'Unlimited invoices & clients' },
            { number: '100+', label: 'Free tools', detail: 'No sign-up required' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
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
          How InvoiceFlow compares for marketers
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need a bloated project management suite. You need invoices that handle retainers, ad spend pass-through, and multi-service packages without the overhead.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-fuchsia-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">FreshBooks ($24/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">HoneyBook ($19/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-fuchsia-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
                <td className="py-3 px-4 text-slate-500">7-day trial only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-fuchsia-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$24/mo</td>
                <td className="py-3 px-4">$19/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Retainer billing</td>
                <td className="py-3 px-4 text-fuchsia-400">One-click recurring</td>
                <td className="py-3 px-4 text-fuchsia-400">Supported</td>
                <td className="py-3 px-4 text-fuchsia-400">Supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Ad spend pass-through</td>
                <td className="py-3 px-4 text-fuchsia-400">Native line items</td>
                <td className="py-3 px-4 text-slate-500">Manual workaround</td>
                <td className="py-3 px-4 text-slate-500">Not supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Multi-service packages</td>
                <td className="py-3 px-4 text-fuchsia-400">Template support</td>
                <td className="py-3 px-4 text-slate-500">Manual setup</td>
                <td className="py-3 px-4 text-fuchsia-400">Supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Setup time</td>
                <td className="py-3 px-4 text-fuchsia-400">30 seconds</td>
                <td className="py-3 px-4">15-30 minutes</td>
                <td className="py-3 px-4">15-30 minutes</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-fuchsia-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$288/yr</td>
                <td className="py-3 px-4 text-red-300">$228/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools every marketer needs
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-fuchsia-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-fuchsia-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Guides for marketing professionals</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, GST, and running a marketing business in Australia.
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
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-fuchsia-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-medium">
            Read all 125+ articles &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from marketing professionals
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-fuchsia-400 transition-colors list-none flex justify-between items-center">
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
          Ready to professionalise your marketing invoices?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian marketing professionals who bill retainers automatically, track ad spend pass-through, and never chase a late payer again. Start free today.
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
