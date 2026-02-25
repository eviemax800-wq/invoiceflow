import type { Metadata } from 'next';
import Link from 'next/link';
import ClientOnboardingChecklist from './ClientOnboardingChecklist';

const title = 'Free Client Onboarding Checklist Generator for Freelancers — InvoiceFlow';
const description =
  'Generate a professional client onboarding checklist for your freelance business. Customized by project type with contract, payment, kickoff, and technical setup tasks. Free — no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'client onboarding checklist freelance',
    'freelance client onboarding template',
    'new client checklist freelancer',
    'client onboarding process freelance',
    'freelance project kickoff checklist',
    'client welcome checklist template',
    'freelance client intake form',
    'new project checklist freelancer australia',
  ],
  openGraph: {
    title: 'Client Onboarding Checklist Generator — Free Tool | InvoiceFlow',
    description:
      'Generate a professional client onboarding checklist customized to your project type. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/client-onboarding-checklist',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Onboarding Checklist Generator — Free Tool | InvoiceFlow',
    description:
      'Generate a professional client onboarding checklist customized to your project type.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/client-onboarding-checklist',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Client Onboarding Checklist Generator',
  description:
    'Generate a professional client onboarding checklist for freelancers. Customized by project type with contract, payment, kickoff, and technical setup sections.',
  url: 'https://www.invoiceflow.au/tools/client-onboarding-checklist',
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

export default function ClientOnboardingChecklistPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-teal-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Client Onboarding{' '}
              <span className="gradient-text">Checklist Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Never miss a step when onboarding a new client. Generate a professional checklist
              customised to your project type — covering contracts, payments, kickoff tasks, and
              technical setup. Built for Australian freelancers.
            </p>
          </div>

          {/* Calculator */}
          <ClientOnboardingChecklist />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Freelancers Need an Onboarding Checklist */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Need an Onboarding Checklist
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">
                    The first 48 hours of a new client relationship set the tone for the entire project.
                  </strong>{' '}
                  A structured onboarding process communicates professionalism, reduces misunderstandings,
                  and protects both you and your client from the scope creep, payment disputes, and
                  communication breakdowns that plague disorganised freelancers.
                </p>
                <p>
                  Research from the Freelancers Union found that 71% of freelancers have struggled to
                  collect payment at least once in their career. A proper onboarding process — with signed
                  contracts, clear payment terms, and documented scope — dramatically reduces the risk of
                  non-payment and protects your legal position if disputes arise.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-3">Key Benefits of Structured Onboarding</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 font-bold">1.</span>
                      <span>
                        <strong className="text-white">Fewer payment disputes.</strong> When payment
                        terms, deposit requirements, and late fees are agreed before work starts, clients
                        are far more likely to pay on time. Written confirmation eliminates the
                        &ldquo;but I thought&rdquo; arguments.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 font-bold">2.</span>
                      <span>
                        <strong className="text-white">Reduced scope creep.</strong> A signed scope of
                        work and clear inclusions/exclusions list gives you grounds to push back when
                        clients ask for &ldquo;just one more thing.&rdquo; Without documentation, saying
                        no becomes much harder.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 font-bold">3.</span>
                      <span>
                        <strong className="text-white">Faster project starts.</strong> Collecting all
                        logins, brand assets, and briefs upfront means you can start productive work
                        immediately — instead of chasing down credentials halfway through week two.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 font-bold">4.</span>
                      <span>
                        <strong className="text-white">Professional reputation.</strong> Clients notice
                        when a freelancer has systems. A polished onboarding process signals that you
                        take your business seriously — making clients more confident in their decision
                        to hire you, and more likely to refer you.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 font-bold">5.</span>
                      <span>
                        <strong className="text-white">Legal protection.</strong> Signed contracts, NDA
                        agreements, and IP terms aren&apos;t just paperwork — they&apos;re your safety
                        net. In Australia, verbal agreements are harder to enforce than written ones, and
                        the Australian Consumer Law (ACL) expects service providers to be clear about
                        what they&apos;re delivering.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: What to Include in Your Client Onboarding Process */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What to Include in Your Client Onboarding Process
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A complete client onboarding process covers seven key areas. The specific items within
                  each area vary by project type — a web developer needs hosting credentials while a
                  photographer needs location details — but the framework stays the same.
                </p>
                <div className="space-y-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 font-bold">1.</span>
                      Client Information Gathering
                    </h4>
                    <p className="text-sm">
                      Collect the client&apos;s legal business name, ABN, primary contact details, and
                      billing information. For Australian clients, confirming their ABN and GST
                      registration status upfront ensures your invoices are correct from the start.
                      Also collect brand assets, style preferences, and any existing materials that
                      will inform your work.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 font-bold">2.</span>
                      Contract and Legal Documents
                    </h4>
                    <p className="text-sm">
                      Never start work without a signed agreement. At minimum, your contract should
                      cover scope of work, payment terms, intellectual property ownership, revision
                      limits, cancellation terms, and confidentiality. For Australian freelancers,
                      the contract should reference whether GST is included or excluded in your pricing.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 font-bold">3.</span>
                      Payment Setup
                    </h4>
                    <p className="text-sm">
                      Send your deposit invoice immediately after the contract is signed. Confirm the
                      client&apos;s preferred payment method, and make sure they understand your payment
                      schedule. For larger projects, milestone-based payments (such as 50/50 or three
                      milestone splits) protect your cash flow and reduce exposure.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 font-bold">4.</span>
                      Project Kickoff
                    </h4>
                    <p className="text-sm">
                      Schedule a kickoff meeting or call to align on the brief, timeline, and
                      communication expectations. Set up your shared tools (Slack channel, project
                      board, file sharing), confirm key milestones, and explain your feedback and
                      revision process. This is also the time to clarify response times and
                      availability.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 font-bold">5.</span>
                      Technical, Brand, or Content Requirements
                    </h4>
                    <p className="text-sm">
                      Depending on your service type, collect the specific assets and access you need.
                      Web developers need hosting and CMS credentials. Designers need logo files, fonts,
                      and colour codes. Content writers need tone of voice guidelines and audience
                      personas. Collecting everything upfront prevents the back-and-forth that delays
                      projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Onboarding Mistakes That Cost Freelancers Money */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Onboarding Mistakes That Cost Freelancers Money
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Most freelancer-client conflicts can be traced back to a rushed or incomplete
                  onboarding process. Here are the five most expensive mistakes and how to avoid them.
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Starting work before the contract is signed.</strong>{' '}
                    This is the single most common and most expensive mistake. Without a signed
                    agreement, you have minimal legal recourse if the client refuses to pay, disputes
                    the scope, or claims ownership of your work. In Australia, verbal agreements are
                    technically enforceable but extremely difficult to prove. A signed contract takes
                    10 minutes to set up and can save you thousands.
                  </li>
                  <li>
                    <strong className="text-white">Skipping the deposit.</strong>{' '}
                    A deposit serves two purposes: it provides immediate cash flow, and it filters out
                    clients who aren&apos;t serious. Industry standard for Australian freelancers is
                    25-50% upfront. If a client pushes back on a deposit, that&apos;s a red flag — not
                    a negotiation point. Clients who resist paying deposits are statistically more likely
                    to be late or default on final payments.
                  </li>
                  <li>
                    <strong className="text-white">Vague scope documentation.</strong>{' '}
                    &ldquo;Build a website&rdquo; is not a scope of work. &ldquo;Build a 5-page
                    responsive website including homepage, about, services, portfolio, and contact pages
                    with a WordPress CMS, mobile responsive design, and basic SEO setup — excluding
                    content writing, photography, and ongoing maintenance&rdquo; is. The more specific
                    your scope, the stronger your position when clients ask for extras.
                  </li>
                  <li>
                    <strong className="text-white">Not collecting assets upfront.</strong>{' '}
                    Every hour you spend chasing down login credentials, brand guidelines, or content
                    briefs is an hour you&apos;re not doing billable work. Create a client intake form
                    or asset collection checklist and send it alongside your contract. Make it clear
                    that project timelines don&apos;t start until all required materials are received.
                  </li>
                  <li>
                    <strong className="text-white">Unclear communication expectations.</strong>{' '}
                    If you don&apos;t set boundaries, clients will call you at 9pm on a Saturday.
                    During onboarding, specify your working hours, preferred communication channel
                    (email, Slack, not text messages), response time expectations, and how feedback
                    should be submitted. Written expectations prevent 90% of communication frustrations.
                  </li>
                </ol>
              </div>
            </div>

            {/* Section 4: Client Onboarding vs Project Kickoff */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Client Onboarding vs Project Kickoff — What&apos;s the Difference?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  These terms are often used interchangeably, but they cover different stages of the
                  client relationship. Understanding the distinction helps you build a more robust
                  process.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-teal-400 font-semibold mb-2">Client Onboarding</h4>
                    <p className="text-sm mb-3">
                      The <strong className="text-white">administrative and legal setup</strong> that
                      happens before productive work begins.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">-</span>
                        <span>Collecting client contact and billing details</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">-</span>
                        <span>Signing contracts and NDAs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">-</span>
                        <span>Processing deposits and confirming payment terms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">-</span>
                        <span>Gathering logins, assets, and access credentials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">-</span>
                        <span>Setting up communication and project tools</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Project Kickoff</h4>
                    <p className="text-sm mb-3">
                      The <strong className="text-white">strategic and creative alignment</strong> that
                      happens when work is about to begin.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">-</span>
                        <span>Reviewing and confirming the project brief in detail</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">-</span>
                        <span>Walking through the timeline, milestones, and deadlines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">-</span>
                        <span>Discussing creative direction and preferences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">-</span>
                        <span>Identifying risks, dependencies, and blockers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">-</span>
                        <span>Agreeing on feedback cycles and approval workflows</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">The Right Order</h4>
                  <p className="text-sm">
                    Onboarding comes first. You should never schedule a project kickoff until the
                    contract is signed, the deposit is paid, and all required assets are collected.
                    Mixing these stages together leads to situations where you&apos;re deep into
                    creative work with no signed contract — the most vulnerable position a freelancer
                    can be in. Complete onboarding fully, then schedule the kickoff as a separate
                    milestone. This also gives you a natural project start date for your timeline.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Onboard clients. <span className="gradient-text">Get paid faster.</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps Australian freelancers send professional invoices, track payments,
              and manage client relationships — from onboarding to final payment. Stop chasing
              invoices and start getting paid on time.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
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
