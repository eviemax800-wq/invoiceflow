import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectBriefGenerator from './ProjectBriefGenerator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title =
  'Client Project Brief Generator | Free Template for Freelancers — InvoiceFlow';
const description =
  'Free project brief generator for freelancers. Create professional project briefs with goals, scope, deliverables, timeline, and communication plan. Pre-populated templates for websites, apps, branding, and more. Copy or print — no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'project brief template freelancer',
    'client brief generator free',
    'creative brief template generator',
    'freelance project brief example',
    'how to write a project brief freelancer',
    'project scope document generator',
    'client project kickoff template',
    'freelance project planning template',
    'project brief template australia',
    'web design brief template free',
  ],
  openGraph: {
    title:
      'Client Project Brief Generator — Free Freelance Tool | InvoiceFlow',
    description:
      'Generate professional project briefs in minutes. Pre-populated templates for websites, apps, branding, and campaigns. Free for freelancers — no signup required.',
    url: 'https://www.invoiceflow.au/tools/project-brief-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Project Brief Generator — Free Freelance Tool | InvoiceFlow',
    description:
      'Create professional project briefs with scope, deliverables, timeline, and communication plan. Free tool for freelancers.',
  },
  alternates: { canonical: 'https://www.invoiceflow.au/tools/project-brief-generator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Client Project Brief Generator for Freelancers',
  description:
    'A 5-step project brief generator that helps freelancers create professional briefs for client projects. Covers project overview, goals, scope, deliverables, timeline, and communication plan. Includes pre-populated templates for website, mobile app, brand identity, marketing campaign, content strategy, software development, and consulting projects. Generates a formatted brief document ready to copy or print. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/project-brief-generator',
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

const faqs = [
  {
    question: "Is this tool free to use?",
    answer: "Yes, this tool is completely free with no signup required. Generate unlimited documents directly in your browser."
  },
  {
    question: "Are the generated documents legally compliant in Australia?",
    answer: "Templates follow Australian business standards and ATO invoicing requirements. For legally binding contracts or agreements, we recommend having a solicitor review important documents."
  },
  {
    question: "Can I customise the output?",
    answer: "Yes, all fields are fully customisable. You can modify the content, copy the output to your clipboard, or print it directly from your browser."
  }
];

export default function ProjectBriefGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQSchema faqs={faqs} />
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-400/10 border border-violet-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full" />
              <span className="text-violet-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Client Project Brief{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                Generator
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Create a professional project brief in minutes. Define goals, scope, deliverables,
              timeline, and communication plan — then copy or print a document ready to share
              with your client. Built for freelancers who want to start every project right.
            </p>
          </div>

          {/* Generator Tool */}
          <ProjectBriefGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Every Project Needs a Brief */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Every Freelance Project Needs a Brief
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The single biggest source of freelance project failure is not bad work — it is
                  misalignment. The client imagined one thing, you delivered another, and now
                  everyone is frustrated. A project brief eliminates this problem before a single
                  hour of work begins.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent text-sm font-bold">01</span>
                      Prevents Scope Creep
                    </h4>
                    <p className="text-sm text-slate-400">
                      When deliverables and boundaries are documented in writing, it becomes
                      dramatically easier to push back on requests that fall outside the agreed
                      scope. Without a brief, the conversation becomes &quot;I thought that was
                      included&quot; versus your word — a battle you will usually lose. With a brief,
                      you can point to the document and say &quot;that was listed as out of scope —
                      happy to add it as a change request with a revised quote.&quot; This single
                      shift protects your profitability on every project.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent text-sm font-bold">02</span>
                      Aligns Expectations Early
                    </h4>
                    <p className="text-sm text-slate-400">
                      Most project disputes happen because expectations were never explicitly
                      agreed. The client expected weekly updates — you planned to check in
                      fortnightly. They wanted three rounds of revisions — you budgeted for one.
                      A brief forces both parties to agree on success criteria, communication
                      cadence, review processes, and approval workflows before work begins. This
                      five-minute conversation up front saves hours of conflict later.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent text-sm font-bold">03</span>
                      Builds Professional Reputation
                    </h4>
                    <p className="text-sm text-slate-400">
                      Clients notice when a freelancer starts a project with a structured brief
                      rather than jumping straight into work. It signals that you operate as a
                      professional business, not just a hired pair of hands. This perception
                      directly impacts your ability to charge premium rates, attract higher-quality
                      clients, and earn referrals. The brief becomes a competitive advantage — most
                      freelancers skip it, which means the ones who do it stand out immediately.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-violet-400/10 to-purple-500/10 border border-violet-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-violet-400 font-medium mb-2">The Cost of Skipping the Brief</p>
                  <p className="text-sm">
                    Research by the Freelancers Union found that 71% of freelancers have
                    experienced non-payment or scope disputes at least once. In the vast majority
                    of cases, there was no written scope agreement beyond a verbal conversation or
                    a vague email thread. A brief takes 15–20 minutes to create and can save
                    weeks of unpaid revision work, difficult conversations, and damaged client
                    relationships. The return on that investment is enormous.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: What Makes a Great Project Brief */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Makes a Great Project Brief
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A project brief is only useful if it actually captures the information that
                  prevents problems. Vague briefs are worse than no brief at all because they
                  create a false sense of alignment. Here is what separates a brief that works
                  from one that collects dust.
                </p>
                <div className="space-y-4 mt-2">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      The Non-Negotiable Sections
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-sm font-medium mb-1">Clear Objectives</p>
                        <p className="text-xs text-slate-400">
                          Not &quot;redesign the website&quot; — but &quot;redesign the website to increase
                          lead conversions from 2% to 5% within 90 days.&quot; Measurable objectives
                          give you a finish line and give the client confidence that you understand
                          what success looks like for their business.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-sm font-medium mb-1">Specific Deliverables</p>
                        <p className="text-xs text-slate-400">
                          List every item you will hand over, with enough description that there
                          is no ambiguity. &quot;Design mockups&quot; is too vague. &quot;High-fidelity UI
                          designs for 8 pages at desktop and mobile breakpoints, delivered as
                          Figma files&quot; is clear and defensible.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-sm font-medium mb-1">Explicit Out of Scope</p>
                        <p className="text-xs text-slate-400">
                          This is the most overlooked section and arguably the most important. If
                          the client might reasonably assume something is included, and it is not,
                          state it here. &quot;Ongoing maintenance,&quot; &quot;content writing,&quot;
                          &quot;SEO optimisation&quot; — name the grey areas and put them on paper.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-sm font-medium mb-1">Communication Plan</p>
                        <p className="text-xs text-slate-400">
                          Define how you will work together: what channel, how often, what the
                          review process looks like, and how long the client has to provide
                          feedback. This prevents the &quot;I sent you feedback two weeks ago and
                          haven&apos;t heard back&quot; problem that derails timelines.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      Common Brief Mistakes to Avoid
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">x</span>
                        <p className="text-slate-400">
                          <span className="text-white font-medium">Being too vague on revisions.</span>{' '}
                          &quot;Revisions included&quot; means unlimited to the client and one round to you.
                          Always specify: &quot;One round of revisions per deliverable is included.
                          Additional rounds are billed at $X/hour.&quot;
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">x</span>
                        <p className="text-slate-400">
                          <span className="text-white font-medium">Skipping the assumptions section.</span>{' '}
                          Assumptions like &quot;client provides content within 5 business days&quot; and
                          &quot;access to staging environment is available by week 2&quot; are critical.
                          When assumptions break, timelines shift — and the brief makes it clear
                          that the delay is not your fault.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">x</span>
                        <p className="text-slate-400">
                          <span className="text-white font-medium">Writing for yourself, not the client.</span>{' '}
                          A brief full of technical jargon does not help a non-technical client
                          understand what they are agreeing to. Write in language the client
                          understands — save the technical detail for your internal project plan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-violet-400/10 to-purple-500/10 border border-violet-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-violet-400 font-medium mb-2">Brief by Project Type</p>
                  <p className="text-sm">
                    Different project types need different emphasis. A website brief should focus
                    heavily on responsive breakpoints, CMS requirements, and launch criteria. A
                    branding brief needs to capture personality, competitor positioning, and usage
                    scenarios. A software development brief requires technical specifications,
                    integration requirements, and data migration plans. This generator
                    pre-populates deliverables based on your project type so you start with a
                    relevant foundation — not a generic template.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: How InvoiceFlow Helps */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Helps Manage Freelance Projects
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A project brief defines the plan. InvoiceFlow helps you execute it — from
                  milestone invoicing to scope tracking and professional client communication.
                  When your brief, invoices, and project tracking all work together, you run a
                  tighter operation with fewer gaps.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Milestone Invoicing
                    </h4>
                    <p className="text-xs text-slate-400">
                      Tie your invoices directly to the deliverables in your brief. Invoice at
                      each project phase — deposit, midpoint, final delivery — so you are never
                      more than one milestone ahead of payment. This protects your cash flow and
                      reduces the risk of non-payment on large projects.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Scope Reference
                    </h4>
                    <p className="text-xs text-slate-400">
                      When a client requests something that was not in the original brief,
                      InvoiceFlow lets you flag it as a scope change and generate a change order
                      invoice. This keeps the project professional and ensures additional work is
                      compensated — no awkward conversations required.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Professional Client Experience
                    </h4>
                    <p className="text-xs text-slate-400">
                      Send branded invoices that match the professional tone of your project
                      brief. Consistent professionalism — from brief to invoice to delivery —
                      builds client confidence and makes referrals more likely. InvoiceFlow
                      handles the financial side so you can focus on the creative work.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Payment Tracking
                    </h4>
                    <p className="text-xs text-slate-400">
                      Track which milestones have been invoiced, which are paid, and which are
                      outstanding. When a client asks for the next phase of work to begin, you
                      can confirm that the previous milestone has been paid before proceeding —
                      a professional boundary that protects your business.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Project Revenue View
                    </h4>
                    <p className="text-xs text-slate-400">
                      See your total revenue per project at a glance. Compare the agreed budget
                      in your brief against actual invoiced and received amounts. This view helps
                      you understand which project types are most profitable and which clients
                      consistently pay on time.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Tax-Ready Records
                    </h4>
                    <p className="text-xs text-slate-400">
                      Every invoice InvoiceFlow generates is compliant with ATO requirements —
                      ABN, GST amounts, payment terms, and a clear description of services. At
                      tax time, your records are already organised by client, project, and
                      financial year. No scrambling, no missed deductions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Brief it. Build it.{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                Invoice it.
              </span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps Australian freelancers plan projects, invoice clients, and track
              payments — so every project starts with clarity and ends with cash in the bank.
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
        
        <RelatedTools currentSlug="project-brief-generator" category="Invoicing & Documents" />
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
