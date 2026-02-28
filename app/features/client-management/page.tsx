import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Client Management for Freelancers — Your Entire Client Base, One Place — InvoiceFlow',
  description:
    'Free client management software for Australian freelancers. Centralised client directory, payment history, rate tracking, AI health scores, and smart reminders. Built for sole traders and independent professionals.',
  keywords: [
    'client management software freelancer',
    'CRM for freelancers australia',
    'freelance client database',
    'client tracking software sole trader',
    'freelance CRM',
    'client management tool',
    'freelancer client directory',
    'manage freelance clients',
  ],
  alternates: { canonical: '/features/client-management' },
  openGraph: {
    title: 'Client Management for Freelancers — Your Entire Client Base, One Place',
    description:
      'Centralised client directory with payment history, rate tracking, AI health scores, and smart reminders. Purpose-built for Australian freelancers. Free to start.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://invoiceflow-teal.vercel.app/features' },
    { '@type': 'ListItem', position: 3, name: 'Client Management', item: 'https://invoiceflow-teal.vercel.app/features/client-management' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow help manage freelance clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow gives you a centralised client directory where every client\'s contact details, ABN, payment terms, billing history, and communication notes live in one place. Instead of switching between spreadsheets, emails, and sticky notes, you get a single hub that connects directly to your invoicing workflow. Every invoice you send automatically updates the client\'s payment history and health score.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the client health score and how does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The client health score is an AI-powered rating that evaluates each client based on three factors: payment reliability (how quickly and consistently they pay), project frequency (how often they send you work), and relationship strength (engagement, communication responsiveness, and tenure). The score updates automatically after every invoice and interaction, helping you identify your best clients and flag those who may not be worth your time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I import existing client data into InvoiceFlow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports CSV import, so you can bring in client data from spreadsheets, other invoicing tools, or CRM platforms. The importer maps common fields like name, email, ABN, address, and payment terms automatically. You can also add clients manually one at a time, or InvoiceFlow will create client profiles automatically when you send your first invoice to a new contact.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow compare to a CRM like HubSpot or HoneyBook?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HubSpot and HoneyBook are full CRM platforms designed for sales teams and agencies — they include pipelines, proposals, contracts, and marketing automation that most freelancers never use. InvoiceFlow is purpose-built for freelancers and sole traders, focusing on what matters: client details, billing history, payment tracking, and getting paid. It\'s simpler, cheaper (starts free), and directly connected to your invoicing workflow rather than being a separate tool you need to maintain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is client data secure and private?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. InvoiceFlow encrypts all client data in transit and at rest using AES-256 encryption. Your data is stored in Australia and never shared with third parties or used to train AI models. We follow Australian Privacy Principles (APPs) and are GDPR-ready. You retain full ownership of your data and can export or delete it at any time.',
      },
    },
  ],
};

const painPoints = [
  { pain: 'Scattered client info across emails, spreadsheets, and sticky notes', fix: 'Centralised client hub with all details in one place' },
  { pain: 'Forgetting client preferences and project history', fix: 'Full communication and billing history per client' },
  { pain: 'Underselling yourself with outdated rates for loyal clients', fix: 'Rate tracking with smart increase suggestions' },
  { pain: 'No idea which clients are worth keeping vs. dropping', fix: 'AI health score showing payment reliability and project value' },
];

const capabilities = [
  {
    title: 'Client Directory',
    description: 'Centralised client database with contact details, ABN, payment terms, and notes. Every client in one searchable, filterable hub.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Payment History',
    description: 'Complete billing history per client with payment patterns and average turnaround. Know exactly who pays on time and who doesn\'t.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Smart Rate Tracking',
    description: 'Track different rates per client and project type, with rate increase history. Never forget what you charged or when you last raised your prices.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Communication Log',
    description: 'Keep notes on every interaction, preference, and project discussion. Pick up any client conversation exactly where you left off.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: 'Automatic Reminders',
    description: 'AI-timed payment reminders based on each client\'s payment behaviour. The right nudge, at the right time, without the awkwardness.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
  {
    title: 'Client Health Score',
    description: 'AI-powered score showing payment reliability, project frequency, and relationship strength. Know which clients deserve your best work.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const comparisonRows = [
  { feature: 'Client directory', invoiceflow: true, honeybook: true, freshbooks: true, dubsado: true },
  { feature: 'Payment history', invoiceflow: true, honeybook: true, freshbooks: true, dubsado: true },
  { feature: 'AI client scoring', invoiceflow: true, honeybook: false, freshbooks: false, dubsado: false },
  { feature: 'Free tier available', invoiceflow: true, honeybook: false, freshbooks: false, dubsado: false },
  { feature: 'Invoicing-focused', invoiceflow: true, honeybook: false, freshbooks: true, dubsado: false },
  { feature: 'Australian compliance', invoiceflow: true, honeybook: false, freshbooks: false, dubsado: false },
];

const keyStats = [
  { value: '78%', label: 'Of freelancers use 3+ separate tools to manage clients' },
  { value: '$4,200', label: 'Average revenue lost per year from poor client tracking' },
  { value: '40%', label: 'Faster payment when personalised reminders are used' },
  { value: '5x', label: 'Cheaper to retain a client than find a new one' },
];

const personaPages = [
  { name: 'Consultants', href: '/for/consultants', desc: 'Advisory and professional services client management' },
  { name: 'Coaches', href: '/for/coaches', desc: 'Session tracking and client progress management' },
  { name: 'IT Consultants', href: '/for/it-consultants', desc: 'Retainer and support contract client tracking' },
  { name: 'Photographers', href: '/for/photographers', desc: 'Booking, shoot, and delivery client management' },
  { name: 'Virtual Assistants', href: '/for/virtual-assistants', desc: 'Multi-client task and billing management' },
  { name: 'Lawyers', href: '/for/lawyers', desc: 'Matter-based client and billing management' },
];

const relatedTools = [
  { name: 'Client Red Flag Checker', href: '/tools/client-red-flag-checker', desc: 'Spot problem clients before they cost you' },
  { name: 'Client Onboarding Checklist', href: '/tools/client-onboarding-checklist', desc: 'Never miss a step with new clients' },
  { name: 'Client Intake Form Generator', href: '/tools/client-intake-form-generator', desc: 'Collect the right info upfront' },
  { name: 'Client Feedback Survey Generator', href: '/tools/client-feedback-survey-generator', desc: 'Get actionable feedback after every project' },
  { name: 'Client Communication Template Generator', href: '/tools/client-communication-template-generator', desc: 'Professional templates for every situation' },
  { name: 'Service Package Builder', href: '/tools/service-package-builder', desc: 'Structure and price your services clearly' },
];

export default function ClientManagementPage() {
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
        <div className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400 mb-8">
          Client Management
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Your entire client base,{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            one place
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop juggling spreadsheets, email threads, and scattered notes. InvoiceFlow gives you a centralised client hub with billing history,
          rate tracking, AI health scores, and smart reminders — all connected to your invoicing workflow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/client-red-flag-checker">
            <Button variant="secondary" size="lg">Try the Client Red Flag Checker</Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Free tier: 5 invoices/month, client directory, payment history, 100+ free tools
        </p>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">The client management problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          78% of freelancers use three or more separate tools to manage their clients. That fragmentation costs real money in lost context, missed follow-ups, and underpriced work.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
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
                <span className="text-emerald-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-emerald-300 font-medium">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Six ways to know your clients better
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Every feature connects to your invoicing workflow. The more invoices you send, the smarter your client insights become.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-emerald-500/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400 p-3 text-white shrink-0">
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
        <h2 className="text-3xl font-bold text-center mb-4">The cost of poor client management</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Disorganised client management doesn&apos;t just waste time — it directly impacts your revenue and professional reputation.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyStats.map((stat, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Built for freelancers, not agencies
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Most CRMs are designed for sales teams with dozens of features you&apos;ll never use. InvoiceFlow focuses on what freelancers actually need.
        </p>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-slate-400 font-medium">Feature</th>
                  <th className="p-4 text-center">
                    <span className="text-emerald-400 font-bold">InvoiceFlow</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Free / $19</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">HoneyBook</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$16/mo</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">FreshBooks</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$24/mo</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">Dubsado</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$20/mo</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0">
                    <td className="p-4 text-slate-300">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.invoiceflow ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.honeybook ? (
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
                      {row.dubsado ? (
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
          Client management for every profession
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Whether you&apos;re juggling five clients or fifty, InvoiceFlow adapts to how you work.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personaPages.map((persona) => (
            <Link
              key={persona.href}
              href={persona.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1">
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
          Free client management tools
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Email Capture */}
      <div className="mx-auto max-w-6xl px-6">
        <EmailCapture />
      </div>

      {/* Pricing */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Simple pricing for client management</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          Start free. Upgrade when you need unlimited clients, AI scoring, and automated reminders.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, client directory, payment history, 100+ tools</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 ring-1 ring-emerald-500/20">
            <div className="text-xs text-emerald-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited clients, AI health scores, smart reminders, rate tracking</p>
            <Link href="/signup"><Button size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Premium</h3>
            <div className="text-3xl font-bold text-white mb-3">$39<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Everything in Pro + multi-business, API access, white-label reports</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/pricing" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
            Compare plans in detail &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Client management FAQ
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

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Stop losing clients to disorganisation
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Every client detail, every invoice, every payment — in one place. InvoiceFlow gives you the clarity to nurture your best relationships and let go of the rest.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — Unlimited Clients</Button>
          </Link>
          <Link href="/tools" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
            Or try our free tools first &rarr;
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
