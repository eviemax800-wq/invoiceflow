import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectHandoverGenerator from './ProjectHandoverGenerator';

const title =
  'Project Handover Document Generator | Free Freelance Handover Template — InvoiceFlow';
const description =
  'Free project handover document generator for freelancers. Create professional handover documents with deliverables inventory, access credentials register, maintenance notes, and knowledge transfer. Covers website, app, design, and consulting projects. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance project handover template',
    'project handover document generator',
    'client handover template freelancer',
    'project deliverables handover',
    'freelance project completion handover',
    'project handover checklist freelancer',
    'client deliverables document template',
    'freelance project closure document',
    'handover document generator free',
    'project sign-off document template',
    'knowledge transfer document freelancer',
    'project handover template australia',
  ],
  openGraph: {
    title: 'Project Handover Document Generator — Free Template for Freelancers | InvoiceFlow',
    description:
      'Generate professional project handover documents with deliverables inventory, access credentials register, support terms, and sign-off section. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/project-handover-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Handover Document Generator — Free Tool for Freelancers | InvoiceFlow',
    description:
      'Create professional project handover documents with deliverables, access credentials, and support terms. Free tool for freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/project-handover-generator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Project Handover Document Generator for Freelancers',
  description:
    'Multi-step generator that helps freelancers create professional project handover documents. Includes deliverables inventory with status tracking, access credentials register, hosting details, warranty and support terms, maintenance recommendations, third-party contacts, sign-off section, and a next-steps checklist. Supports presets for websites, apps, design, marketing, consulting, and more. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/project-handover-generator',
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

export default function ProjectHandoverGeneratorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-400/10 border border-teal-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-teal-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Project Handover{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Document Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate a professional project handover document to close out your freelance projects.
              Document every deliverable, credential, and support term so the client has everything
              they need — and you have a clean sign-off.
            </p>
          </div>

          {/* Generator Tool */}
          <ProjectHandoverGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Project Handovers Matter */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Project Handovers Matter for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A project handover document is one of the most important — and most frequently
                  skipped — steps in freelance project management. When you finish a project, your
                  client needs a clear record of what was delivered, where everything lives, and what
                  happens next. Without it, you end up fielding questions for months after the project
                  is supposedly &quot;done&quot;.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      Triggers Final Payment
                    </h4>
                    <p className="text-sm">
                      A formal handover document signals that the project is complete and creates a
                      clear trigger for the final invoice. When clients can see exactly what they are
                      receiving, they are far more likely to process payment promptly. It removes
                      ambiguity about whether everything has been delivered — there is a signed record
                      that says it has.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      Limits Your Liability
                    </h4>
                    <p className="text-sm">
                      Once a client signs a handover document, you have written proof that all
                      deliverables were accepted. If a dispute arises months later about what was or
                      was not included, the handover document is your evidence. It clearly defines what
                      was delivered, when, and in what condition — protecting you from scope creep
                      after the fact.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Professional Closure
                    </h4>
                    <p className="text-sm">
                      Projects that end with a handover document leave a professional impression.
                      Clients remember the freelancers who wrapped things up properly — not the ones
                      who just stopped replying. A clean handover increases the likelihood of repeat
                      business, referrals, and positive testimonials. It signals that you run a real
                      business.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Reduces Post-Project Questions
                    </h4>
                    <p className="text-sm">
                      Without a handover document, clients will email you for months asking where files
                      are, what the hosting login is, or how to update something. A comprehensive
                      handover document answers these questions upfront, saving you hours of unpaid
                      support. It is an investment of 30 minutes that saves you 30 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: What to Include */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What to Include in a Freelance Project Handover
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A good handover document is comprehensive enough to answer any question the client
                  might have after you have moved on to your next project. Here are the essential
                  sections every handover document should include.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-400/20 border border-teal-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Deliverables Inventory</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        A complete list of everything you are handing over — source code, design files,
                        documents, assets, accounts. Include the format (Figma, Git repo, PDF), the
                        location (URL or folder path), and the status (complete, pending revision).
                        This is the backbone of the handover.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-400/20 border border-teal-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Access &amp; Credentials Register</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Document every platform, service, and tool the client needs access to. Include
                        the access level (owner, admin, editor) and transfer status. Never put actual
                        passwords in the document — use a password manager or secure transfer method
                        and note it in the handover.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-400/20 border border-teal-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Hosting &amp; Infrastructure</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        If you set up hosting, domains, or other infrastructure, document the provider,
                        the renewal dates, and the monthly costs. The client needs to know when things
                        expire and how much they will be paying. Surprises here lead to angry emails.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-400/20 border border-teal-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-400 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Support Terms &amp; Warranty</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Clearly define what support you are providing after handover, for how long, and
                        what is excluded. This prevents scope creep disguised as &quot;support
                        requests&quot;. Be explicit: bug fixes are covered, new features are not.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-400/20 border border-teal-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-400 text-xs font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Knowledge Transfer &amp; Maintenance Notes</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Include any ongoing maintenance recommendations — update schedules, security
                        practices, backup procedures, and third-party service contacts. This is
                        especially important for technical projects where the client will need to
                        maintain the work after you are gone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Common Mistakes */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Common Handover Mistakes That Cost Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Most freelancers skip the handover entirely or do it poorly. These mistakes lead to
                  unpaid invoices, ongoing unpaid support, and damaged reputations. Here are the most
                  common ones to avoid.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-rose-400/5 border border-rose-400/15 rounded-xl p-5">
                    <h4 className="text-rose-400 font-semibold mb-2 text-sm">Missing Credentials</h4>
                    <p className="text-sm">
                      Forgetting to transfer hosting, domain, or CMS access is the number one source
                      of post-project friction. The client cannot manage their own project, so they
                      come back to you — and expect you to fix it for free. Document every credential
                      and confirm the transfer before you hand over the document.
                    </p>
                  </div>
                  <div className="bg-rose-400/5 border border-rose-400/15 rounded-xl p-5">
                    <h4 className="text-rose-400 font-semibold mb-2 text-sm">No Written Sign-off</h4>
                    <p className="text-sm">
                      If you do not get the client to formally accept the handover, you have no proof
                      the project is complete. Clients can claim months later that the project was
                      &quot;never finished&quot; and withhold payment. A signed handover document is your
                      strongest protection against this.
                    </p>
                  </div>
                  <div className="bg-rose-400/5 border border-rose-400/15 rounded-xl p-5">
                    <h4 className="text-rose-400 font-semibold mb-2 text-sm">Vague Deliverables</h4>
                    <p className="text-sm">
                      Listing &quot;website&quot; as a deliverable is not enough. What files? Where are they?
                      What format? If the client hires another developer later and cannot find the
                      source code, they will blame you. Be specific about every file, folder, and
                      access point.
                    </p>
                  </div>
                  <div className="bg-rose-400/5 border border-rose-400/15 rounded-xl p-5">
                    <h4 className="text-rose-400 font-semibold mb-2 text-sm">Unlimited Support Expectations</h4>
                    <p className="text-sm">
                      Without clear support terms, clients assume you are available forever. Six months
                      later they email asking you to &quot;fix a small thing&quot; — and when you quote for it,
                      they get upset. Define your support period, what it covers, and what costs extra
                      in the handover document.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-400/10 to-cyan-500/10 border border-teal-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">The 30-Minute Investment</p>
                  <p className="text-sm">
                    A proper handover document takes about 30 minutes to create but saves you hours of
                    unpaid support, protects you from disputes, and dramatically increases the chance of
                    getting your final payment on time. It is one of the highest-ROI activities in
                    freelancing — which is why we built this free tool to make it even faster.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: How InvoiceFlow Helps */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Helps Close Projects Professionally
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  InvoiceFlow is built for freelancers who want to run a professional operation from
                  start to finish. From the first quote to the final handover, every step is covered.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-lg">1.</span> Project Handover Documents
                    </h4>
                    <p className="text-xs text-slate-400">
                      Generate comprehensive handover documents with deliverables inventory, access
                      registers, and support terms. Smart presets for different project types save you
                      time. Copy the document in one click.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-lg">2.</span> Completion Certificates
                    </h4>
                    <p className="text-xs text-slate-400">
                      Pair your handover document with a formal project completion certificate for a
                      completely professional close-out. Both documents work together — the handover
                      covers the details, the certificate is the formal sign-off.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-lg">3.</span> Final Invoicing
                    </h4>
                    <p className="text-xs text-slate-400">
                      Once the handover is signed, generate your final invoice with one click.
                      InvoiceFlow tracks what has been paid and what is still owed, so the final
                      invoice is always accurate. Automatic payment reminders ensure it gets paid.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-lg">4.</span> Scope Documentation
                    </h4>
                    <p className="text-xs text-slate-400">
                      Start every project with a clear scope of work, contract, and payment schedule.
                      When the project ends, the handover document closes the loop — everything that
                      was promised has been delivered and documented.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-lg">5.</span> Client Communication
                    </h4>
                    <p className="text-xs text-slate-400">
                      Professional email templates for every stage — onboarding, progress updates,
                      scope changes, and project closure. Consistent, clear communication builds trust
                      and reduces disputes.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-lg">6.</span> Record Keeping
                    </h4>
                    <p className="text-xs text-slate-400">
                      Every document, invoice, and communication is logged and timestamped. If a
                      dispute arises months later, you have the complete paper trail — contracts,
                      invoices, handover documents, and payment records all in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Close projects like a{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">professional</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, project documentation, and payment tracking — so you
              can close every project with confidence. Professional handovers, completion certificates,
              and final invoices for Australian freelancers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/project-completion-certificate"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Completion Certificate
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
