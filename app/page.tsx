import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'InvoiceFlow — Free Invoicing Tools & AI Invoice Management for Australian Freelancers',
  description:
    'Free GST calculator, invoice generator, and 100+ business tools for Australian freelancers. Plus AI-powered Gmail invoice extraction, categorization, and CSV export.',
  alternates: { canonical: '/' },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'InvoiceFlow',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'AI-powered invoice management for Australian freelancers. Auto-detect invoices from Gmail, extract key fields with AI, and export to CSV or QuickBooks.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Free',
      price: '0',
      priceCurrency: 'AUD',
      description: '5 invoices per month, Gmail sync, CSV export',
    },
    {
      '@type': 'Offer',
      name: 'Pro',
      price: '19',
      priceCurrency: 'AUD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '19',
        priceCurrency: 'AUD',
        billingDuration: 'P1M',
      },
      description: 'Unlimited invoices, AI categorization, priority support',
    },
    {
      '@type': 'Offer',
      name: 'Premium',
      price: '39',
      priceCurrency: 'AUD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '39',
        priceCurrency: 'AUD',
        billingDuration: 'P1M',
      },
      description: 'Everything in Pro plus QuickBooks export, team access, API',
    },
  ],
  featureList: [
    'Gmail invoice auto-detection',
    'AI-powered field extraction',
    'Vendor categorization',
    'CSV and QuickBooks export',
    'GST-compliant invoicing',
    '100+ free business tools',
  ],
  screenshot: 'https://invoiceflow-teal.vercel.app/opengraph-image',
  creator: {
    '@type': 'Organization',
    name: 'InvoiceFlow',
    url: 'https://invoiceflow-teal.vercel.app',
  },
};

export const dynamic = 'force-dynamic';
export default function HomePage() {
  return (
    <div className="min-h-screen page-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <h1 className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</h1>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/features" className="text-sm text-slate-300 hover:text-white transition-colors hidden sm:inline">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-slate-300 hover:text-white transition-colors hidden sm:inline">
              Pricing
            </Link>
            <Link href="/templates" className="text-sm text-slate-300 hover:text-white transition-colors hidden sm:inline">
              Templates
            </Link>
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Gmail invoice automation for SMBs
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white heading-font leading-tight">
              Stop sorting invoices.
              <span className="gradient-text"> Let AI do it.</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-xl">
              InvoiceFlow connects to Gmail, detects invoices, extracts key fields, and
              organizes everything into a clean dashboard. Export to CSV or QuickBooks-ready
              formats in minutes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/signup">
                <Button size="lg">Connect Gmail</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">See Pricing</Button>
              </Link>
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
              <div>✅ Free tier: 5 invoices/mo</div>
              <div>✅ Pro: $19/mo unlimited</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-teal-500/20 to-blue-500/10 blur-2xl" />
            <div className="relative glass rounded-3xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-slate-400">InvoiceFlow Dashboard</div>
                  <div className="text-2xl font-semibold text-white heading-font">July Invoices</div>
                </div>
                <div className="text-emerald-400 text-sm">Synced 12 min ago</div>
              </div>
              <div className="space-y-4">
                {sampleInvoices.map((invoice) => (
                  <div
                    key={invoice.vendor}
                    className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3"
                  >
                    <div>
                      <div className="text-white font-medium">{invoice.vendor}</div>
                      <div className="text-xs text-slate-400">{invoice.date} · {invoice.category}</div>
                    </div>
                    <div className="text-white">{invoice.amount}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
                <span>Export ready</span>
                <span className="text-emerald-400">CSV · QuickBooks</span>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-28 grid lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="glass rounded-2xl p-6">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2 heading-font">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-white heading-font">How it works</h3>
            <p className="text-slate-400">From Gmail to clean records in 3 steps.</p>
          </div>
          <div className="grid gap-4">
            {steps.map((step) => (
              <div key={step.title} className="glass rounded-2xl p-5 flex gap-4">
                <div className="text-teal-300 text-lg font-semibold">{step.number}</div>
                <div>
                  <div className="text-white font-medium">{step.title}</div>
                  <div className="text-slate-400 text-sm">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-28 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {[
            { title: 'For Sole Traders', desc: 'Simple invoicing without the Xero price tag. GST tracking, BAS exports, and tools built for one-person businesses.', href: '/for/sole-traders', color: 'from-emerald-500/10 to-teal-500/10', border: 'hover:border-emerald-500/30' },
            { title: 'For Freelancers', desc: 'Invoice generator, rate calculator, and 30+ profession guides. Get paid faster with less admin.', href: '/for/freelancers', color: 'from-purple-500/10 to-pink-500/10', border: 'hover:border-purple-500/30' },
            { title: 'For Contractors', desc: 'Milestone payments, ABN compliance, PAYG calculator, and subcontractor agreement generator.', href: '/for/contractors', color: 'from-amber-500/10 to-orange-500/10', border: 'hover:border-amber-500/30' },
            { title: 'For Tradies', desc: 'Mobile invoicing for plumbers, sparkies, and builders. Invoice on-site, get paid faster, GST sorted.', href: '/for/tradies', color: 'from-amber-500/10 to-yellow-500/10', border: 'hover:border-amber-500/30' },
            { title: 'For Consultants', desc: 'Retainer tracking, time-based billing, and professional invoicing. Stop trading billable hours for admin.', href: '/for/consultants', color: 'from-violet-500/10 to-indigo-500/10', border: 'hover:border-violet-500/30' },
            { title: 'For Creatives', desc: 'Project-based billing, deposit tracking, and usage rights documentation for designers and photographers.', href: '/for/creatives', color: 'from-rose-500/10 to-pink-500/10', border: 'hover:border-rose-500/30' },
            { title: 'For Coaches', desc: 'Session billing, package invoicing, and recurring payments for business, life, and executive coaches.', href: '/for/coaches', color: 'from-emerald-500/10 to-green-500/10', border: 'hover:border-emerald-500/30' },
            { title: 'For Photographers', desc: 'Deposit tracking, milestone payments, and usage rights invoicing for wedding, portrait, and commercial photographers.', href: '/for/photographers', color: 'from-cyan-500/10 to-sky-500/10', border: 'hover:border-cyan-500/30' },
            { title: 'For Virtual Assistants', desc: 'Multi-client billing, hourly rate tracking, and professional invoicing for VAs and online business managers.', href: '/for/virtual-assistants', color: 'from-indigo-500/10 to-violet-500/10', border: 'hover:border-indigo-500/30' },
            { title: 'For Personal Trainers', desc: 'Session tracking, package billing, and tax invoices for PTs, yoga teachers, and fitness professionals.', href: '/for/personal-trainers', color: 'from-red-500/10 to-rose-500/10', border: 'hover:border-red-500/30' },
            { title: 'For Web Developers', desc: 'Project-based billing, milestone payments, and scope change invoicing for freelance developers and designers.', href: '/for/web-developers', color: 'from-blue-500/10 to-cyan-500/10', border: 'hover:border-blue-500/30' },
            { title: 'For Writers', desc: 'Per-word and per-article invoicing, kill fees, and retainer billing for copywriters and content writers.', href: '/for/writers', color: 'from-amber-500/10 to-yellow-500/10', border: 'hover:border-amber-500/30' },
            { title: 'For Marketing Pros', desc: 'Retainer invoicing, ad spend pass-through billing, and campaign-based packages for digital marketers.', href: '/for/marketing-professionals', color: 'from-fuchsia-500/10 to-pink-500/10', border: 'hover:border-fuchsia-500/30' },
            { title: 'For Accountants', desc: 'Hourly billing, retainer management, and BAS-ready invoicing for accountants, bookkeepers, and tax agents.', href: '/for/accountants', color: 'from-sky-500/10 to-blue-500/10', border: 'hover:border-sky-500/30' },
            { title: 'For Beauty & Hair', desc: 'Salon invoicing, chair rental tracking, and product sales billing for hairdressers, barbers, and beauty therapists.', href: '/for/beauty-hair', color: 'from-pink-500/10 to-fuchsia-500/10', border: 'hover:border-pink-500/30' },
            { title: 'For Cleaners', desc: 'Quote-to-invoice, recurring billing for regular clients, and income proof for loan applications.', href: '/for/cleaners', color: 'from-teal-500/10 to-cyan-500/10', border: 'hover:border-teal-500/30' },
            { title: 'For Event Planners', desc: 'Deposit tracking, milestone payments, and vendor reimbursement invoicing for wedding and corporate events.', href: '/for/event-planners', color: 'from-amber-500/10 to-orange-500/10', border: 'hover:border-amber-500/30' },
            { title: 'For Real Estate Agents', desc: 'Commission invoicing, VPA tracking, and property management billing for sales agents, PMs, and auctioneers.', href: '/for/real-estate-agents', color: 'from-amber-500/10 to-yellow-500/10', border: 'hover:border-amber-500/30' },
            { title: 'For Tutors', desc: 'Session tracking, parent invoicing, NDIS-compliant billing, and term package invoicing for private tutors.', href: '/for/tutors', color: 'from-green-500/10 to-emerald-500/10', border: 'hover:border-green-500/30' },
            { title: 'For Graphic Designers', desc: 'Project billing, deposit tracking, revision invoicing, and usage rights documentation for freelance designers.', href: '/for/graphic-designers', color: 'from-violet-500/10 to-purple-500/10', border: 'hover:border-violet-500/30' },
            { title: 'For Allied Health', desc: 'NDIS invoicing, Medicare rebate billing, and multi-source payment tracking for physios, psychologists, and more.', href: '/for/allied-health', color: 'from-teal-500/10 to-cyan-500/10', border: 'hover:border-teal-500/30' },
          ].map((persona) => (
            <Link key={persona.href} href={persona.href} className={`glass rounded-2xl p-6 border border-white/5 ${persona.border} transition-colors bg-gradient-to-br ${persona.color}`}>
              <h3 className="text-lg font-semibold text-white mb-2">{persona.title}</h3>
              <p className="text-sm text-slate-400">{persona.desc}</p>
              <span className="inline-block mt-3 text-sm text-teal-400">Learn more &rarr;</span>
            </Link>
          ))}
        </section>

        <section className="mt-28 glass rounded-3xl p-10 text-center">
          <h3 className="text-4xl font-semibold text-white heading-font mb-4">
            Your bookkeeping prep, automated.
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Connect Gmail once. We handle invoice detection, extraction, categorization,
            and exports. No more manual downloads.
          </p>
          <Link href="/signup">
            <Button size="lg">Start Free</Button>
          </Link>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
          <span>© 2026 InvoiceFlow. All rights reserved.</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <Link href="/templates" className="hover:text-white">Templates</Link>
            <Link href="/tools" className="hover:text-white">Free Tools</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/compare" className="hover:text-white">Compare</Link>
            <Link href="/for/sole-traders" className="hover:text-white">Sole Traders</Link>
            <Link href="/for/freelancers" className="hover:text-white">Freelancers</Link>
            <Link href="/for/contractors" className="hover:text-white">Contractors</Link>
            <Link href="/for/tradies" className="hover:text-white">Tradies</Link>
            <Link href="/for/consultants" className="hover:text-white">Consultants</Link>
            <Link href="/for/creatives" className="hover:text-white">Creatives</Link>
            <Link href="/for/coaches" className="hover:text-white">Coaches</Link>
            <Link href="/for/photographers" className="hover:text-white">Photographers</Link>
            <Link href="/for/virtual-assistants" className="hover:text-white">VAs</Link>
            <Link href="/for/personal-trainers" className="hover:text-white">Personal Trainers</Link>
            <Link href="/for/web-developers" className="hover:text-white">Web Developers</Link>
            <Link href="/for/writers" className="hover:text-white">Writers</Link>
            <Link href="/for/marketing-professionals" className="hover:text-white">Marketing Pros</Link>
            <Link href="/for/accountants" className="hover:text-white">Accountants</Link>
            <Link href="/for/beauty-hair" className="hover:text-white">Beauty & Hair</Link>
            <Link href="/for/cleaners" className="hover:text-white">Cleaners</Link>
            <Link href="/for/event-planners" className="hover:text-white">Event Planners</Link>
            <Link href="/for/real-estate-agents" className="hover:text-white">Real Estate Agents</Link>
            <Link href="/for/tutors" className="hover:text-white">Tutors</Link>
            <Link href="/for/graphic-designers" className="hover:text-white">Graphic Designers</Link>
            <Link href="/for/allied-health" className="hover:text-white">Allied Health</Link>
            <Link href="/in/melbourne" className="hover:text-white">Melbourne</Link>
            <Link href="/in/sydney" className="hover:text-white">Sydney</Link>
            <Link href="/in/brisbane" className="hover:text-white">Brisbane</Link>
            <Link href="/in/perth" className="hover:text-white">Perth</Link>
            <Link href="/in/adelaide" className="hover:text-white">Adelaide</Link>
            <Link href="/in/gold-coast" className="hover:text-white">Gold Coast</Link>
            <Link href="/in/canberra" className="hover:text-white">Canberra</Link>
            <Link href="/in/hobart" className="hover:text-white">Hobart</Link>
            <Link href="/in/darwin" className="hover:text-white">Darwin</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

const sampleInvoices = [
  { vendor: 'Canva', amount: '$12.99', date: 'Jul 14', category: 'Marketing' },
  { vendor: 'AWS', amount: '$83.24', date: 'Jul 13', category: 'Infrastructure' },
  { vendor: 'Uber', amount: '$18.70', date: 'Jul 10', category: 'Travel' },
];

const features = [
  {
    icon: '📥',
    title: 'Auto-detect invoices',
    description: 'Scans Gmail and finds invoices, receipts, and statements automatically.',
  },
  {
    icon: '🧠',
    title: 'AI extraction',
    description: 'Pulls vendor, amount, date, and category with Gemini-based parsing.',
  },
  {
    icon: '📊',
    title: 'Clean dashboard',
    description: 'Search, filter, and export by vendor, category, or date range.',
  },
  {
    icon: '⚡',
    title: 'CSV + QuickBooks ready',
    description: 'One-click CSV export and QuickBooks-compatible formats.',
  },
  {
    icon: '🔒',
    title: 'Secure by design',
    description: 'OAuth-based access with Supabase auth and scoped Gmail permissions.',
  },
  {
    icon: '💳',
    title: 'Simple pricing',
    description: 'Free tier for 5 invoices/month. Pro is $19/month unlimited.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Connect Gmail',
    description: 'OAuth-based access with read-only scope. You stay in control.',
  },
  {
    number: '02',
    title: 'Sync invoices',
    description: 'InvoiceFlow detects invoices and extracts vendor, amount, date, category.',
  },
  {
    number: '03',
    title: 'Export & share',
    description: 'Download clean CSVs or send to your bookkeeper in minutes.',
  },
];
