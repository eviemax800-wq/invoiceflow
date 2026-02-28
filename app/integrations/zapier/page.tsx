import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Automate Your Invoicing with Zapier — InvoiceFlow',
  description:
    'Connect InvoiceFlow to 6,000+ apps with Zapier. Automate invoice creation, payment notifications, client onboarding, and reporting workflows. Built for Australian freelancers.',
  alternates: { canonical: '/integrations/zapier' },
  keywords: [
    'Zapier invoicing automation',
    'automate invoicing Zapier',
    'Zapier invoice workflow',
    'invoice automation australia',
    'connect invoicing to CRM Zapier',
    'Zapier invoice trigger',
    'automated invoicing workflow freelancer',
  ],
  openGraph: {
    title: 'Automate Your Invoicing with Zapier — InvoiceFlow',
    description:
      'Connect InvoiceFlow to 6,000+ apps with Zapier. Automate invoice creation, payment notifications, client onboarding, and reporting workflows. Free tier available.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Integrations', item: 'https://invoiceflow-teal.vercel.app/integrations' },
    { '@type': 'ListItem', position: 3, name: 'Zapier', item: 'https://invoiceflow-teal.vercel.app/integrations/zapier' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What can I automate with InvoiceFlow and Zapier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common automations include: creating an invoice when a project is marked complete in your project management tool, sending a Slack notification when a payment is received, adding paid clients to your email list, logging invoice data to Google Sheets, creating follow-up tasks in Asana when invoices go overdue, and updating your CRM when new clients are invoiced. With 6,000+ connected apps, the possibilities are virtually unlimited.',
      },
    },
    {
      '@type': 'Question',
      name: 'What InvoiceFlow triggers are available in Zapier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow provides triggers for: New Invoice Created, Invoice Sent, Invoice Viewed, Payment Received, Invoice Overdue, Client Added, and Invoice Status Changed. Each trigger includes full invoice data (number, amounts, GST, client details, line items) so your Zaps have all the context they need.',
      },
    },
    {
      '@type': 'Question',
      name: 'What InvoiceFlow actions are available in Zapier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "InvoiceFlow actions include: Create Invoice, Send Invoice, Create Client, Update Invoice Status, Add Line Item, and Send Payment Reminder. You can trigger these actions from any of Zapier's 6,000+ connected apps — for example, automatically create an invoice when a deal is won in your CRM.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Zapier integration cost extra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "InvoiceFlow's Zapier integration is available on Pro ($19/month) and Premium ($39/month) plans at no additional cost. Zapier itself has a free tier (100 tasks/month, 5 Zaps) and paid plans starting at $19.99/month. Most freelancers find the Zapier free tier sufficient for basic invoice automations.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need coding skills to set up Zapier automations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Zapier's visual workflow builder lets you create automations by selecting triggers and actions from dropdown menus. InvoiceFlow provides pre-built Zap templates for common workflows — you can set up invoice automation in under 5 minutes with no code, no API knowledge, and no developer needed.",
      },
    },
  ],
};

const painPoints = [
  { pain: 'Manually creating invoices every time a project wraps up', fix: 'Auto-create invoices when projects complete in Asana, Trello, or ClickUp' },
  { pain: 'Checking your inbox constantly for payment notifications', fix: 'Get Slack, SMS, or email alerts the instant a payment comes in' },
  { pain: 'Forgetting to add new paying clients to your email list or CRM', fix: 'Automatically add clients to Mailchimp, HubSpot, or your CRM when they pay' },
  { pain: 'Manually logging invoice data into spreadsheets and trackers', fix: 'Auto-log every invoice to Google Sheets, Notion, or Airtable' },
];

const capabilities = [
  {
    title: 'Invoice Triggers',
    desc: 'New Invoice, Invoice Sent, Payment Received, Invoice Overdue — trigger any workflow from invoice events.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Invoice Actions',
    desc: 'Create Invoice, Send Invoice, Create Client — build invoices automatically from CRM deals, project completions, or form submissions.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: '6,000+ App Connections',
    desc: 'Connect InvoiceFlow to Slack, Google Sheets, Mailchimp, HubSpot, Asana, Trello, Notion, Airtable, and thousands more.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    title: 'Pre-Built Templates',
    desc: 'Ready-made Zap templates for common freelancer workflows — no configuration required, just connect and go.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
      </svg>
    ),
  },
  {
    title: 'Multi-Step Workflows',
    desc: 'Chain multiple actions together. Example: Payment received \u2192 log to Sheets \u2192 notify Slack \u2192 add to email list \u2192 create follow-up task.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: 'Conditional Logic',
    desc: 'Use Zapier Paths to create branching workflows. Example: If invoice > $5,000, notify you via SMS; otherwise, just log to Sheets.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
];

const keyStats = [
  { value: '6,000+', label: 'Apps connected through Zapier' },
  { value: '< 5 min', label: 'Setup time for most invoice automations' },
  { value: '100', label: 'Free Zapier tasks per month' },
  { value: '7', label: 'InvoiceFlow triggers available in Zapier' },
];

const comparisonFeatures = [
  { feature: 'Invoice triggers', invoiceflow: '7 triggers', xero: '5 triggers', freshbooks: '4 triggers', myob: '2 triggers' },
  { feature: 'Invoice actions', invoiceflow: '6 actions', xero: '4 actions', freshbooks: '3 actions', myob: '1 action' },
  { feature: 'Pre-built templates', invoiceflow: true, xero: true, freshbooks: true, myob: false },
  { feature: 'Multi-step workflows', invoiceflow: true, xero: true, freshbooks: true, myob: true },
  { feature: 'Free invoicing tier', invoiceflow: true, xero: false, freshbooks: false, myob: false },
  { feature: 'Custom webhooks', invoiceflow: true, xero: true, freshbooks: 'Pro only', myob: false },
];

const personaLinks = [
  { name: 'Consultants', href: '/for/consultants', desc: 'Auto-invoice when retainer periods end' },
  { name: 'Web Developers', href: '/for/web-developers', desc: 'Create invoices from completed GitHub milestones' },
  { name: 'Marketing Professionals', href: '/for/marketing-professionals', desc: 'Auto-bill when campaigns deliver results' },
  { name: 'Coaches', href: '/for/coaches', desc: 'Trigger invoices from Calendly session bookings' },
  { name: 'Virtual Assistants', href: '/for/virtual-assistants', desc: 'Auto-log hours and create weekly invoices' },
  { name: 'IT Consultants', href: '/for/it-consultants', desc: 'Support ticket resolution triggers invoicing' },
];

const relatedTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create invoices to automate with Zapier' },
  { name: 'Client Onboarding Checklist', href: '/tools/client-onboarding-checklist', desc: 'Automate onboarding workflows' },
  { name: 'Invoice Email Templates', href: '/tools/invoice-email-template', desc: 'Templates for automated communications' },
  { name: 'Meeting Agenda Generator', href: '/tools/meeting-agenda-generator', desc: 'Auto-generate agendas from invoice milestones' },
  { name: 'Payment Tracking', href: '/features/payment-tracking', desc: 'Track payments that trigger automations' },
  { name: 'Recurring Invoicing', href: '/features/recurring-invoicing', desc: 'Automate recurring billing workflows' },
];

export default function ZapierIntegrationPage() {
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
        <div className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 mb-8">
          Zapier Integration
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Automate your invoicing with{' '}
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Zapier
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Connect InvoiceFlow to 6,000+ apps and put your invoicing on autopilot. Auto-create invoices, send payment alerts, sync client data, and log everything — without writing a single line of code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/invoice-generator">
            <Button variant="secondary" size="lg">Try the Invoice Generator</Button>
          </Link>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">The manual invoicing problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Australian freelancers spend an average of 5 hours per week on admin tasks that could be automated. Invoicing shouldn&apos;t be one of them.
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
                <span className="text-orange-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-orange-300 font-medium">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Everything you need to automate invoicing</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          InvoiceFlow connects directly with Zapier. Set up triggers and actions in minutes — no API keys, no webhooks, no developer needed.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap) => (
            <div key={cap.title} className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-6 hover:bg-orange-500/[0.15] transition-colors">
              <div className="inline-flex items-center justify-center rounded-xl bg-orange-500/10 p-3 text-orange-400 mb-4">
                {cap.icon}
              </div>
              <h3 className="font-bold text-white mb-2">{cap.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Zapier by the numbers</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Zapier is the world&apos;s leading automation platform. When you connect it to InvoiceFlow, your invoicing runs itself.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyStats.map((stat, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">How InvoiceFlow + Zapier compares</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Not all Zapier integrations are created equal. InvoiceFlow offers the most triggers, the most actions, and a free invoicing tier.
        </p>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-5 border-b border-white/5 bg-white/[0.03]">
            <div className="py-4 px-4 text-sm font-medium text-slate-400">Feature</div>
            <div className="py-4 px-4 text-sm font-medium text-orange-400">InvoiceFlow + Zapier</div>
            <div className="py-4 px-4 text-sm font-medium text-slate-400">Xero + Zapier</div>
            <div className="py-4 px-4 text-sm font-medium text-slate-400">FreshBooks + Zapier</div>
            <div className="py-4 px-4 text-sm font-medium text-slate-400">MYOB + Zapier</div>
          </div>
          {/* Table rows */}
          {comparisonFeatures.map((row, i) => (
            <div key={i} className="grid grid-cols-5 border-b border-white/5 last:border-0">
              <div className="py-3 px-4 text-sm text-slate-400">{row.feature}</div>
              <div className="py-3 px-4 text-sm font-medium text-orange-300 bg-orange-500/5">
                {typeof row.invoiceflow === 'boolean' ? (
                  row.invoiceflow ? (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )
                ) : (
                  row.invoiceflow
                )}
              </div>
              <div className="py-3 px-4 text-sm text-slate-400">
                {typeof row.xero === 'boolean' ? (
                  row.xero ? (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )
                ) : (
                  row.xero
                )}
              </div>
              <div className="py-3 px-4 text-sm text-slate-400">
                {typeof row.freshbooks === 'boolean' ? (
                  row.freshbooks ? (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )
                ) : (
                  row.freshbooks
                )}
              </div>
              <div className="py-3 px-4 text-sm text-slate-400">
                {typeof row.myob === 'boolean' ? (
                  row.myob ? (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )
                ) : (
                  row.myob
                )}
              </div>
            </div>
          ))}
          {/* Platform cost row */}
          <div className="grid grid-cols-5 bg-white/[0.03] border-t border-white/10">
            <div className="py-4 px-4 text-sm font-medium text-white">Platform cost</div>
            <div className="py-4 px-4 text-sm font-bold text-orange-400 bg-orange-500/5">From $19/mo</div>
            <div className="py-4 px-4 text-sm text-slate-400">From $35/mo</div>
            <div className="py-4 px-4 text-sm text-slate-400">From $24/mo</div>
            <div className="py-4 px-4 text-sm text-slate-400">From $34/mo</div>
          </div>
        </div>
      </section>

      {/* Persona Links */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Zapier automations for every profession</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Whether you bill hourly, per project, or on retainer — automating your invoicing with Zapier means less admin and more revenue.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personaLinks.map((persona) => (
            <Link
              key={persona.name}
              href={persona.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-orange-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors mb-1">
                {persona.name}
              </h3>
              <p className="text-xs text-slate-500">{persona.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free tools to power your automations</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required. Use them right now.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-orange-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">{tool.name}</h3>
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
        <h2 className="text-3xl font-bold mb-4">Simple pricing — Zapier integration included on Pro and Premium</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free. Upgrade when you need automation, unlimited invoices, and advanced workflows.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, manual workflows, basic tracking, email support</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-6 ring-1 ring-orange-500/20">
            <div className="text-xs text-orange-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, Zapier integration, auto reminders, payment analytics</p>
            <Link href="/signup"><Button size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Premium</h3>
            <div className="text-3xl font-bold text-white mb-3">$39<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Multi-business, API access, custom webhooks, white-label, priority support</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Zapier integration FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-orange-400 transition-colors list-none flex justify-between items-center">
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
          Stop doing invoicing manually,{' '}
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            start automating with Zapier
          </span>
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Every hour you spend on manual invoicing tasks is an hour you could spend on billable work. Connect InvoiceFlow to Zapier and let your invoicing run itself.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup"><Button size="lg">Start Free — 5 Invoices/Month</Button></Link>
          <Link href="/features" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors">
            View all features &rarr;
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
