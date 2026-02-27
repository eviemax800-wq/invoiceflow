import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About InvoiceFlow — Built for Australian Freelancers',
  description:
    'InvoiceFlow is an Australian-built AI invoice management platform for freelancers and sole traders. Simple invoicing without accounting bloat, starting free.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About InvoiceFlow — Built for Australian Freelancers',
    description:
      'AI-powered invoice management built in Australia for freelancers who want simple invoicing without the complexity of full accounting software.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://invoiceflow-teal.vercel.app/about' },
  ],
};

const stats = [
  { value: '100+', label: 'Free Business Tools' },
  { value: '125+', label: 'Educational Articles' },
  { value: '$0', label: 'Free Tier Forever' },
  { value: '10%', label: 'GST — We Handle It' },
];

const values = [
  {
    title: 'Built for Australia',
    description:
      'GST calculations, ABN validation, BAS-ready exports, and ATO-compliant workflows. Not a US product with a currency toggle — genuinely Australian.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-400',
  },
  {
    title: 'Simple by Design',
    description:
      'You\'re a freelancer, not an accountant. InvoiceFlow gives you what you actually need — invoice tracking, categorisation, and exports — without forcing you to learn double-entry bookkeeping.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-400',
  },
  {
    title: 'AI That Works for You',
    description:
      'Our AI reads your Gmail, finds invoices, extracts vendor details, amounts, and GST — then presents everything for your review. No manual data entry, no missed invoices.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-400',
  },
  {
    title: 'Free Tools, No Strings',
    description:
      'Over 100 free business tools — GST calculators, invoice generators, contract templates, tax estimators — available to everyone, no account required. We believe in giving value first.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    color: 'from-sky-500 to-blue-400',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen page-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <span className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</span>
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="/features" className="text-sm text-slate-300 hover:text-white transition-colors hidden sm:inline">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-slate-300 hover:text-white transition-colors hidden sm:inline">
              Pricing
            </Link>
            <Link href="/tools" className="text-sm text-slate-300 hover:text-white transition-colors hidden sm:inline">
              Free Tools
            </Link>
            <Link href="/signup">
              <Button>Get Started Free</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Australian-built, freelancer-focused
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white heading-font leading-tight max-w-4xl mx-auto">
            Invoicing should be
            <span className="gradient-text"> simple</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-6">
            We built InvoiceFlow because Australian freelancers deserve invoice management
            that actually fits how they work — not bloated accounting software designed for
            enterprises.
          </p>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="text-3xl font-bold gradient-text heading-font mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white heading-font text-center mb-8">
              Why We Built InvoiceFlow
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                Australian freelancers have two options for managing invoices: spreadsheets
                (error-prone, no GST automation) or full accounting software like Xero or MYOB
                ($35-$50/month, designed for businesses with employees and inventory).
              </p>
              <p>
                Neither works well for a sole trader who just needs to track incoming invoices,
                calculate GST, and produce clean exports for their accountant at tax time.
              </p>
              <p>
                InvoiceFlow fills that gap. We connect to your Gmail, use AI to find and extract
                invoice data automatically, handle GST calculations, and export everything in
                formats your accountant can use. No chart of accounts. No bank reconciliation.
                No payroll modules you&apos;ll never touch.
              </p>
              <p>
                We also built over 100 free business tools — calculators, generators, and
                templates — because we believe freelancers shouldn&apos;t have to pay for basic
                business utilities. The tools are free, no account required, and always will be.
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white heading-font text-center mb-4">
            What We Stand For
          </h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-12">
            Every decision we make comes back to one question: does this help Australian freelancers do less admin?
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-teal-500/30 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who It's For */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white heading-font text-center mb-12">
            Built For
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Sole Traders',
                description: 'Graphic designers, developers, writers, consultants — anyone running a one-person business in Australia.',
                color: 'from-teal-500/20 to-blue-500/20',
                border: 'border-teal-500/20',
              },
              {
                title: 'Freelancers',
                description: 'Side hustlers, contract workers, and independent professionals who invoice multiple clients.',
                color: 'from-purple-500/20 to-pink-500/20',
                border: 'border-purple-500/20',
              },
              {
                title: 'Micro-businesses',
                description: 'Small teams of 1-3 people who need invoicing without the overhead of enterprise accounting.',
                color: 'from-amber-500/20 to-orange-500/20',
                border: 'border-amber-500/20',
              },
            ].map((persona) => (
              <div
                key={persona.title}
                className={`rounded-2xl bg-gradient-to-br ${persona.color} border ${persona.border} p-6 text-center`}
              >
                <h3 className="text-lg font-semibold text-white mb-2">{persona.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{persona.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 p-12">
            <h2 className="text-3xl font-bold text-white heading-font mb-4">
              Try InvoiceFlow free
            </h2>
            <p className="text-slate-400 mb-8">
              5 invoices per month, forever free. No credit card, no commitment.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/signup">
                <Button size="lg">Start Free</Button>
              </Link>
              <Link href="/tools">
                <Button variant="secondary" size="lg">Browse Free Tools</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <Link href="/features" className="hover:text-slate-300 transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-slate-300 transition-colors">Pricing</Link>
            <Link href="/compare" className="hover:text-slate-300 transition-colors">Compare</Link>
            <Link href="/tools" className="hover:text-slate-300 transition-colors">Free Tools</Link>
            <Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
