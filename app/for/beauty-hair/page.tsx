import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Hairdressers & Beauty Professionals in Australia — InvoiceFlow',
  description:
    'Free invoicing tools built for Australian beauty and hair professionals. Salon billing, mobile hairdresser invoicing, product sales tracking, and branded invoices for hairdressers, beauticians, lash techs, barbers and more.',
  alternates: { canonical: '/for/beauty-hair' },
  keywords: [
    'invoicing software hairdressers australia',
    'beauty salon invoicing',
    'beautician invoice template australia',
    'hairdresser invoice software',
    'beauty professional invoicing',
  ],
  openGraph: {
    title: 'InvoiceFlow for Beauty & Hair Professionals — Bill Your Clients, Build Your Brand',
    description:
      'Stop losing track of payments between appointments. InvoiceFlow gives beauty and hair professionals automated billing, product sales tracking, and branded invoices — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Beauty & Hair Professionals', item: 'https://invoiceflow-teal.vercel.app/for/beauty-hair' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do hairdressers and beauticians need invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Whether you run a salon, rent a chair, or do mobile hairdressing, professional invoicing software helps you keep accurate tax records, process insurance claims, and track chair rental payments. Sending text messages with your bank details or relying on cash payments looks unprofessional and makes it impossible to track who has paid. Invoicing software automates payment reminders, separates service income from retail product sales, and generates tax-ready reports — so you can focus on your clients, not paperwork.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle product sales and service billing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow lets you add separate line items for services (cuts, colours, treatments, lash extensions) and retail products (shampoos, styling tools, skincare) on the same invoice. This makes it easy to track which revenue comes from services and which comes from product sales — critical for stock management, tax reporting, and understanding your profit margins. You can also set up different GST treatments for services and products if needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for beauty professionals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including a GST calculator, invoice generator, and ABN lookup. Most solo beauticians and mobile hairdressers just starting out can run on the free tier. Paid plans start at $19/month for unlimited invoices, recurring billing, product sales tracking, and client management features.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I invoice for chair rental or salon booth fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports recurring invoices, so salon owners can set up automatic weekly or monthly chair rental invoices for each stylist renting a station. Stylists can also use InvoiceFlow to track their chair rental expenses as a cost of doing business. Set the recurring schedule once — weekly, fortnightly, or monthly — and InvoiceFlow handles the rest, including automatic payment reminders if a rental fee goes overdue.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow help beauty professionals with GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow automatically adds 10% GST to every invoice, tracks your annual turnover against the $75,000 GST registration threshold, and generates BAS-ready reports at the end of each quarter. Many beauty professionals earn under $75,000 and may not need to register for GST, but InvoiceFlow tracks your revenue so you know exactly when you cross that threshold. For registered beauty businesses, GST is calculated automatically on every invoice — covering both services and product sales — with no manual maths required.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Tracking chair rentals and product costs in a salon',
    solution: 'Automatic chair rental invoicing and separate product vs service tracking — know exactly where your money comes from.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 15.75h7.5" />
      </svg>
    ),
  },
  {
    problem: 'Managing mobile booking payments with no system',
    solution: 'Send professional invoices from your phone after every appointment — get paid before you leave the client.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    problem: 'Losing track of retail product sales vs service income',
    solution: 'Separate line items for services and retail — see exactly what drives your revenue at a glance.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    problem: 'No professional invoices for insurance or rental clients',
    solution: 'Branded invoices that match your salon or brand — your logo, your colours, your payment terms.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const specialtyTypes = [
  { name: 'Hairdresser', icon: '✂️' },
  { name: 'Barber', icon: '💈' },
  { name: 'Beauty Therapist', icon: '💆' },
  { name: 'Lash Technician', icon: '👁️' },
  { name: 'Nail Technician', icon: '💅' },
  { name: 'Makeup Artist', icon: '💄' },
  { name: 'Brow Specialist', icon: '✨' },
  { name: 'Skin Care Therapist', icon: '🧴' },
];

const popularTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on salon services and retail products' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional beauty and hair invoices instantly' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Work out your ideal hourly or per-service rate' },
  { name: 'Service Package Builder', href: '/tools/invoice-generator', desc: 'Bundle services into packages with clear pricing' },
  { name: 'Client Intake Form', href: '/tools/invoice-generator', desc: 'Collect client details and allergy information' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify client and supplier ABNs' },
];

export default function ForBeautyHairPage() {
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

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-6 pt-4">
        <nav className="text-sm text-slate-500">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-slate-300">For Beauty &amp; Hair Professionals</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-16 text-center">
        <div className="inline-block rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-sm font-medium text-pink-400 mb-8">
          Built for Australian Beauty &amp; Hair Professionals
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Bill your clients.{' '}
          <span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
            Build your brand.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop losing track of payments between appointments. InvoiceFlow lets salons, mobile hairdressers, beauticians,
          and lash techs invoice clients for services, products, and chair rentals — in 30 seconds. GST sorted automatically.
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

      {/* Specialty Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by beauty and hair professionals across every specialty</p>
        <div className="flex flex-wrap justify-center gap-3">
          {specialtyTypes.map((type) => (
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
          Beauty invoicing shouldn&apos;t be this painful
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re a beauty professional, not a bookkeeper. You need to bill clients quickly, track product sales vs services, and get back to doing what you love.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-pink-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-pink-300 font-semibold">{item.solution}</p>
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
            { number: '85K+', label: 'Beauty & hair workers in Australia', detail: 'A massive industry' },
            { number: '$6.5B', label: 'Australian beauty industry', detail: 'And growing every year' },
            { number: '30s', label: 'To create an invoice', detail: 'Between appointments' },
            { number: '$0', label: 'To start', detail: 'Free tier, forever' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
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
          How InvoiceFlow compares for beauty professionals
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need a bloated salon management suite. You need invoices that look professional, product and service tracking, and billing that just works.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-pink-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Square ($60/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Fresha ($0 + 2.19%/txn)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-pink-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">Free POS, paid features $60/mo</td>
                <td className="py-3 px-4 text-slate-500">Free but 2.19% per transaction</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-pink-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$60/mo</td>
                <td className="py-3 px-4">$0 + 2.19% per txn</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Product sales tracking</td>
                <td className="py-3 px-4 text-pink-400">Separate line items</td>
                <td className="py-3 px-4 text-pink-400">Built-in POS</td>
                <td className="py-3 px-4 text-slate-500">Limited</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Appointment-based billing</td>
                <td className="py-3 px-4 text-pink-400">Per-service invoicing</td>
                <td className="py-3 px-4 text-pink-400">Supported</td>
                <td className="py-3 px-4 text-pink-400">Supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Client management</td>
                <td className="py-3 px-4 text-pink-400">Built-in</td>
                <td className="py-3 px-4 text-pink-400">Built-in</td>
                <td className="py-3 px-4 text-pink-400">Built-in</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">GST handling</td>
                <td className="py-3 px-4 text-pink-400">Automatic + BAS reports</td>
                <td className="py-3 px-4 text-pink-400">Supported</td>
                <td className="py-3 px-4 text-slate-500">Basic</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-pink-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$720/yr</td>
                <td className="py-3 px-4 text-red-300">2.19% of all revenue</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-pink-400 hover:text-pink-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools every beauty professional needs
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-pink-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-pink-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-pink-400 hover:text-pink-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Guides for beauty professionals</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, GST, and running a beauty business in Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'GST Guide for Australian Freelancers', href: '/blog/gst-guide-australian-freelancers' },
            { title: 'How Much Tax Do Freelancers Pay?', href: '/blog/how-much-tax-freelancers-pay-australia' },
            { title: 'Tax Deductions for Freelancers', href: '/blog/tax-deductions-australian-freelancers' },
            { title: 'How to Start Freelancing in Australia', href: '/blog/how-to-start-freelancing-australia' },
            { title: 'BAS Guide for Sole Traders', href: '/blog/bas-guide-australian-freelancers' },
            { title: 'Superannuation Guide for Freelancers', href: '/blog/superannuation-guide-australian-freelancers' },
          ].map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-pink-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-pink-400 hover:text-pink-300 text-sm font-medium">
            Read all 125+ articles &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from beauty professionals
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-pink-400 transition-colors list-none flex justify-between items-center">
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
          Ready to professionalise your beauty invoices?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian beauty and hair professionals who bill clients automatically, track product sales alongside services, and never chase a late payer again. Start free today.
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
