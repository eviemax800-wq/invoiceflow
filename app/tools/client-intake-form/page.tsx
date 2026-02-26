import type { Metadata } from 'next';
import Link from 'next/link';
import ClientIntakeFormGenerator from './ClientIntakeFormGenerator';

const title =
  'Client Intake Form Generator | Free Questionnaire Template for Freelancers — InvoiceFlow';
const description =
  'Free client intake form generator for freelancers. Create customised onboarding questionnaires with company info, project goals, brand guidelines, budget, and technical requirements. Copy, print, or email — no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'client intake form template freelancer',
    'client questionnaire generator free',
    'new client intake form template',
    'freelance client onboarding questionnaire',
    'project intake form generator',
    'client onboarding form template',
    'freelance intake questionnaire',
    'new client questionnaire template free',
    'client information form freelancer',
    'project intake questionnaire generator',
  ],
  openGraph: {
    title:
      'Client Intake Form Generator — Free Freelance Tool | InvoiceFlow',
    description:
      'Generate customised client intake questionnaires in minutes. Pre-built sections for company info, project goals, brand guidelines, and more. Free for freelancers — no signup required.',
    url: 'https://www.invoiceflow.au/tools/client-intake-form',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Intake Form Generator — Free Freelance Tool | InvoiceFlow',
    description:
      'Create professional client intake questionnaires with pre-built sections for every service type. Free tool for freelancers.',
  },
  alternates: { canonical: 'https://www.invoiceflow.au/tools/client-intake-form' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Client Intake Form Generator for Freelancers',
  description:
    'A 4-step intake form generator that helps freelancers create customised client onboarding questionnaires. Covers company info, project goals, brand guidelines, content and assets, technical requirements, budget and timeline, communication preferences, and competitor references. Includes custom question support and generates a formatted questionnaire ready to copy, print, or email. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/client-intake-form',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'AUD',
  },
  creator: {
    '@type': 'Organization',
    name: 'InvoiceFlow',
    url: 'https://www.invoiceflow.au',
  },
};

export default function ClientIntakeFormPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="page-bg min-h-screen">
        {/* Header */}
        <header className="border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IF</span>
              </div>
              <span className="text-white font-semibold text-lg heading-font">InvoiceFlow</span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link
                href="/tools"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Free Tools
              </Link>
              <Link
                href="/pricing"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-teal-400 hover:to-blue-400 transition-all"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full" />
              <span className="text-cyan-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Client Intake Form{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Generator
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Build a customised client intake questionnaire in minutes. Collect the information you
              need before starting any project — company details, goals, brand guidelines, budget,
              and more. Copy, print, or email it to your client. No signup required.
            </p>
          </div>

          {/* Generator Tool */}
          <ClientIntakeFormGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Client Intake Forms Matter */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Client Intake Forms Matter for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Starting a project without a proper intake form is like building a house without
                  blueprints. You might get something standing, but it will not be what the client
                  expected — and you will spend twice the time getting there. A structured intake
                  questionnaire transforms the messy back-and-forth of early project conversations
                  into a single, organised document that both parties can reference throughout the
                  engagement.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent text-sm font-bold">01</span>
                      Reduces Back-and-Forth
                    </h4>
                    <p className="text-sm text-slate-400">
                      Without an intake form, project kickoffs become a scattered series of emails,
                      messages, and phone calls where you ask questions as they come to mind — and
                      the client answers them across different channels over days or weeks. An intake
                      form consolidates every question into one document. The client fills it out
                      once, you get everything you need in a single response, and the project can
                      begin immediately. Freelancers who use intake forms report saving an average of
                      3-5 hours per project on pre-work communication alone.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent text-sm font-bold">02</span>
                      Sets a Professional Tone
                    </h4>
                    <p className="text-sm text-slate-400">
                      When a client receives a polished intake questionnaire, it signals that you run
                      a structured operation — not a casual side hustle. This first impression
                      carries through the entire project. Clients who receive a professional intake
                      form are more likely to respect your process, respond promptly to requests, and
                      trust your recommendations. It establishes the dynamic from day one: you are
                      the expert guiding the process, not a vendor waiting for instructions. This
                      perception directly impacts your ability to charge premium rates and maintain
                      healthy project boundaries.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent text-sm font-bold">03</span>
                      Filters Serious Clients
                    </h4>
                    <p className="text-sm text-slate-400">
                      An intake form is a natural filter for client quality. Serious clients who are
                      ready to invest in a project will take 15 minutes to complete a thoughtful
                      questionnaire. Tyre-kickers and price-shoppers will either skip it entirely or
                      rush through with one-word answers. This tells you everything you need to know
                      before you invest hours writing a proposal. If a prospective client cannot be
                      bothered to fill out an intake form, they are unlikely to be responsive during
                      the project itself — saving you from a painful engagement before it begins.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-400/10 to-teal-500/10 border border-cyan-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-cyan-400 font-medium mb-2">The Hidden Cost of Skipping Intake</p>
                  <p className="text-sm">
                    Projects that begin without a structured intake process are 3x more likely to
                    experience scope creep and revision overruns. The information gap at the start
                    compounds through every phase — unclear goals lead to wrong assumptions, which
                    lead to misaligned deliverables, which lead to revision cycles that eat your
                    profit margin. A 15-minute intake form prevents weeks of rework. For freelancers
                    billing between $75-$200/hour, that translates to thousands of dollars saved per
                    project.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: What to Include */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What to Include in Your Client Intake Form
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The best intake forms are tailored to your specific service. A web developer needs
                  different information than a copywriter or a brand designer. The key is asking the
                  right questions for your craft without overwhelming the client with irrelevant
                  sections.
                </p>
                <div className="space-y-4 mt-2">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      Customise by Service Type
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-sm font-medium mb-1">Web Design & Development</p>
                        <p className="text-xs text-slate-400">
                          Focus on technical requirements, platform preferences, existing systems to
                          integrate with, and mobile/accessibility needs. Include questions about
                          hosting, domain ownership, and CMS preferences. Ask about analytics tools
                          they already use and whether they need e-commerce functionality.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-sm font-medium mb-1">Copywriting & Content</p>
                        <p className="text-xs text-slate-400">
                          Emphasise brand voice, target audience, competitor references, and content
                          assets they already have. Ask about their preferred tone, existing style
                          guides, and how content will be published. Include questions about SEO
                          keywords they want to target and their content approval process.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-sm font-medium mb-1">Graphic Design & Branding</p>
                        <p className="text-xs text-slate-400">
                          Prioritise brand guidelines, colour preferences, existing assets, and
                          examples of brands they admire. Ask about file format requirements, print
                          vs. digital usage, and how many concepts they expect. Include questions
                          about their target market demographics and brand personality.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-sm font-medium mb-1">Video & Photography</p>
                        <p className="text-xs text-slate-400">
                          Focus on production logistics, shot lists, location details, and delivery
                          format preferences. Ask about usage rights, editing style references, and
                          turnaround expectations. Include questions about talent, props, wardrobe,
                          and whether they need raw footage or only edited deliverables.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      Keep It Concise but Complete
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="text-cyan-400 font-bold flex-shrink-0 mt-0.5">+</span>
                        <p className="text-slate-400">
                          <span className="text-white font-medium">Aim for 15-20 minutes to complete.</span>{' '}
                          If your form takes longer than 20 minutes, clients will abandon it halfway
                          through or rush to finish. Be strategic about which questions are truly
                          necessary at the intake stage versus information you can gather during the
                          kickoff meeting.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-cyan-400 font-bold flex-shrink-0 mt-0.5">+</span>
                        <p className="text-slate-400">
                          <span className="text-white font-medium">Use multiple choice where possible.</span>{' '}
                          Clients find it easier to select from options than to write long-form
                          answers. For questions like budget range, timeline, and communication
                          preferences, predefined choices reduce friction and give you standardised
                          data you can work with immediately.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-cyan-400 font-bold flex-shrink-0 mt-0.5">+</span>
                        <p className="text-slate-400">
                          <span className="text-white font-medium">Send it before the first meeting.</span>{' '}
                          The best time to send an intake form is immediately after a prospective
                          client expresses interest — before your discovery call or kickoff meeting.
                          This means you walk into the first conversation already informed, which
                          makes the meeting more productive and demonstrates that you value their
                          time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-400/10 to-teal-500/10 border border-cyan-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-cyan-400 font-medium mb-2">Pro Tip: Use Intake Responses to Qualify Leads</p>
                  <p className="text-sm">
                    Review intake form responses before committing to a project. Clients who provide
                    detailed, thoughtful answers are signalling that they take the project seriously
                    and will be collaborative partners. Sparse or dismissive responses are an early
                    warning sign. Some freelancers even use the quality of intake form responses as
                    part of their client scoring system — it is one of the most reliable predictors
                    of project success.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: How InvoiceFlow Helps */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Helps Manage New Client Projects
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  An intake form captures the information. InvoiceFlow turns it into a well-managed
                  project — from the first invoice to the final payment. When client details, scope
                  agreements, and payment tracking all live in one system, nothing falls through the
                  cracks.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Client Records
                    </h4>
                    <p className="text-xs text-slate-400">
                      Store all client details from your intake form — business name, ABN, contact
                      information, and billing preferences — in one place. When it is time to send
                      the first invoice, everything is already populated. No re-entering data, no
                      chasing details, no delays.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Deposit Invoicing
                    </h4>
                    <p className="text-xs text-slate-400">
                      Once the intake form confirms budget and payment terms, generate a deposit
                      invoice immediately. InvoiceFlow supports percentage-based deposits, milestone
                      payments, and custom schedules — so you can start every project with cash flow
                      secured, not promised.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Scope Documentation
                    </h4>
                    <p className="text-xs text-slate-400">
                      The project goals and requirements captured in your intake form become the
                      reference point for scope management. When a client requests changes mid-project,
                      InvoiceFlow lets you create change order invoices that reference the original
                      scope — keeping the conversation professional and the project profitable.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Branded Experience
                    </h4>
                    <p className="text-xs text-slate-400">
                      From intake form to final invoice, maintain a consistent professional image.
                      InvoiceFlow generates branded invoices that match the quality of your intake
                      process — reinforcing client confidence and making referrals more likely.
                      Consistency across every touchpoint builds trust.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Payment Tracking
                    </h4>
                    <p className="text-xs text-slate-400">
                      Track deposits, milestone payments, and final invoices across every project.
                      See at a glance which clients have paid, which are outstanding, and which need
                      a follow-up. Automated payment reminders mean you never have to send an awkward
                      &quot;just checking in on that invoice&quot; email again.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Tax-Ready Records
                    </h4>
                    <p className="text-xs text-slate-400">
                      Every invoice InvoiceFlow generates is compliant with ATO requirements — ABN,
                      GST amounts, payment terms, and clear descriptions. At tax time, your records
                      are already organised by client, project, and financial year. No scrambling, no
                      missed deductions, no last-minute bookkeeper panic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Ask the right questions.{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Start projects right.
              </span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps Australian freelancers onboard clients, manage projects, and track
              payments — so every engagement starts with clarity and ends with cash in the bank.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/client-onboarding-checklist"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Client Onboarding Checklist
              </Link>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 mt-20 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} InvoiceFlow. Built in Melbourne.</p>
            <div className="flex gap-6">
              <Link href="/tools" className="hover:text-white transition-colors">
                Free Tools
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
