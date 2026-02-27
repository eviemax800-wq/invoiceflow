import type { Metadata } from 'next';
import Link from 'next/link';
import ScopeChangeCalculator from './ScopeChangeCalculator';
import RelatedTools from '../components/RelatedTools';

const title = 'Free Scope Change Request Calculator for Freelancers — InvoiceFlow';
const description =
  'Calculate the cost and timeline impact of scope changes on freelance projects. Generate professional change order documents with cost breakdowns, deadline adjustments, and scope creep analysis.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'scope change calculator freelance',
    'scope creep calculator',
    'change order template freelancer',
    'project scope change cost',
    'freelance scope change request',
    'scope creep cost calculator',
    'change request template freelance',
    'project change order generator',
  ],
  openGraph: {
    title: 'Scope Change Request Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate scope change costs and generate professional change order documents. Free for freelancers.',
    url: 'https://www.invoiceflow.au/tools/scope-change-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scope Change Request Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate scope change costs and generate professional change order documents.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/scope-change-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Scope Change Request Calculator',
  description:
    'Calculate the cost and timeline impact of scope changes on freelance projects and generate professional change order documents.',
  url: 'https://www.invoiceflow.au/tools/scope-change-calculator',
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

export default function ScopeChangeCalculatorPage() {
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

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-teal-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Scope Change Request{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Calculate the true cost and timeline impact of scope changes on your freelance
              projects. Generate professional change order documents you can send to clients
              before starting any additional work.
            </p>
          </div>

          {/* Calculator */}
          <ScopeChangeCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Scope Changes Cost Freelancers Money */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Scope Changes Cost Freelancers Money
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">Scope changes are the single biggest
                  reason freelancers end up working for less than they quoted.</strong> A client
                  asks for &ldquo;just one small change,&rdquo; you agree because it seems
                  quick, and before you know it you&apos;ve added 20 hours of unbilled work to
                  a project that was already tight on margin.
                </p>
                <p>
                  The problem isn&apos;t the changes themselves — clients have legitimate
                  reasons to adjust requirements as a project evolves. The problem is that most
                  freelancers don&apos;t have a system for pricing and documenting those changes.
                  Without a formal process, every &ldquo;small tweak&rdquo; chips away at your
                  effective hourly rate.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-rose-400 mb-1">72%</p>
                    <p className="text-sm">of freelance projects experience scope creep, with an average of 3-5 unplanned changes per project</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400 mb-1">$6,200</p>
                    <p className="text-sm">average annual revenue lost by Australian freelancers to undocumented scope changes</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400 mb-1">35%</p>
                    <p className="text-sm">average effective rate reduction when scope changes go unbilled on fixed-price projects</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">The Real Cost of Free Changes</p>
                  <p className="text-sm">
                    A web developer charging $120/hr on a $6,000 project (50 hours) who absorbs
                    15 hours of scope changes drops their effective rate to $92/hr — a 23%
                    reduction. Over 10 projects a year, that&apos;s $4,200 in lost income. Use
                    the calculator above to see exactly how scope changes affect your bottom line.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: How to Handle Scope Changes Professionally */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Handle Scope Changes Professionally
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Handling scope changes well is a skill that separates professional freelancers
                  from amateurs. The goal isn&apos;t to say &ldquo;no&rdquo; to every change —
                  it&apos;s to have a clear, documented process that protects both you and your
                  client. Here&apos;s the six-step framework:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      Identify the Change
                    </h4>
                    <p className="text-sm">
                      When a client requests something not in the original scope, flag it
                      immediately. Don&apos;t start working on it and don&apos;t let it slide.
                      The sooner you identify a scope change, the easier it is to price it.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      Document It in Writing
                    </h4>
                    <p className="text-sm">
                      Write down exactly what the client is asking for. Include the specific
                      deliverables, any technical requirements, and how it differs from the
                      original scope. Use the calculator above to generate a formal change order.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Price the Impact
                    </h4>
                    <p className="text-sm">
                      Calculate the additional hours, cost, and timeline impact. Factor in
                      complexity — a change that touches multiple parts of a system costs more
                      than a simple addition. Include a rush fee if the timeline is tight.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Present to the Client
                    </h4>
                    <p className="text-sm">
                      Send the change order to your client with the cost and timeline impact
                      clearly stated. Frame it positively: &ldquo;I can absolutely do this —
                      here&apos;s what it involves.&rdquo; Most clients respect transparency.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">05</span>
                      Wait for Written Approval
                    </h4>
                    <p className="text-sm">
                      Never start work on a scope change until you have written approval. An
                      email reply saying &ldquo;go ahead&rdquo; is sufficient — you just need a
                      record. This protects you if there&apos;s a dispute later about what was
                      agreed.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">06</span>
                      Proceed and Invoice
                    </h4>
                    <p className="text-sm">
                      Once approved, complete the work and add the change to your next invoice.
                      Reference the change order number so the client can reconcile it. Update
                      the project deadline if needed.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Pro Tip: Set the Expectation Early</p>
                  <p className="text-sm">
                    Include a scope change clause in your original contract or{' '}
                    <Link href="/tools/scope-of-work-generator" className="text-teal-400 hover:underline">
                      scope of work
                    </Link>
                    {' '}that says: &ldquo;Changes to the agreed scope will be documented via a
                    change order and priced at the agreed hourly rate.&rdquo; When clients know
                    the process upfront, they rarely push back when you follow it.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: 5 Ways to Prevent Scope Creep */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Ways to Prevent Scope Creep Before It Starts
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The best scope change is the one that never happens. While you can&apos;t
                  eliminate all changes, you can dramatically reduce them with upfront planning.
                  Here are five proven strategies used by experienced Australian freelancers:
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Write a detailed scope of work before starting.</strong>{' '}
                    The most effective defence against scope creep is a comprehensive{' '}
                    <Link href="/tools/scope-of-work-generator" className="text-teal-400 hover:underline">
                      scope of work
                    </Link>
                    {' '}that lists every deliverable, timeline, and exclusion. When a client asks
                    for something not on the list, you have a clear reference point. Projects with
                    a written SOW experience 40% fewer scope disputes.
                  </li>
                  <li>
                    <strong className="text-white">Define what&apos;s NOT included, not just what is.</strong>{' '}
                    Exclusions are more powerful than inclusions. Instead of listing every feature
                    you will build, explicitly state what you won&apos;t do. &ldquo;This project
                    does not include mobile app development, ongoing maintenance, or content
                    writing.&rdquo; This eliminates the &ldquo;I assumed that was included&rdquo;
                    conversation.
                  </li>
                  <li>
                    <strong className="text-white">Cap revision rounds in your contract.</strong>{' '}
                    Unlimited revisions is an invitation for scope creep disguised as feedback.
                    Include 2-3 revision rounds in your scope, define what counts as a revision
                    versus a new request, and price additional rounds at your hourly rate. Use
                    the{' '}
                    <Link href="/tools/contract-clause-generator" className="text-teal-400 hover:underline">
                      Contract Clause Generator
                    </Link>
                    {' '}to create a revision clause.
                  </li>
                  <li>
                    <strong className="text-white">Use milestone-based payments tied to deliverables.</strong>{' '}
                    When clients pay upfront or at milestones, they&apos;re more invested in
                    keeping the project on track. A client who has paid 50% is far less likely to
                    derail the project with constant changes than one who hasn&apos;t paid anything
                    yet. Use our{' '}
                    <Link href="/tools/quote-calculator" className="text-teal-400 hover:underline">
                      Quote Calculator
                    </Link>
                    {' '}to structure milestone payments.
                  </li>
                  <li>
                    <strong className="text-white">Run a thorough discovery phase before quoting.</strong>{' '}
                    Many scope changes happen because the original requirements were poorly
                    understood. Spend 30-60 minutes asking detailed questions before you quote.
                    What are the must-haves versus nice-to-haves? What has the client tried before?
                    What does success look like? Better discovery means fewer surprises.
                  </li>
                </ol>
              </div>
            </div>

            {/* Section 4: Scope Change vs Scope Creep */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Scope Change vs Scope Creep — What&apos;s the Difference?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  These terms are often used interchangeably, but they describe very different
                  situations. Understanding the distinction is critical for managing client
                  expectations and protecting your income.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white font-semibold"></th>
                        <th className="text-left py-3 px-4 text-teal-400 font-semibold">Scope Change</th>
                        <th className="text-left py-3 px-4 text-rose-400 font-semibold">Scope Creep</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Definition</td>
                        <td className="py-3 px-4">A formal, documented change to the project scope</td>
                        <td className="py-3 px-4">Gradual, undocumented expansion of the project</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Visibility</td>
                        <td className="py-3 px-4">Both parties are aware and agree to the change</td>
                        <td className="py-3 px-4">Often goes unnoticed until the project is over budget</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Pricing</td>
                        <td className="py-3 px-4">Priced and approved before work begins</td>
                        <td className="py-3 px-4">Usually absorbed by the freelancer (unpaid)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Documentation</td>
                        <td className="py-3 px-4">Written change order with cost and timeline impact</td>
                        <td className="py-3 px-4">No documentation — &ldquo;Can you also...&rdquo; requests</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Impact on Project</td>
                        <td className="py-3 px-4">Controlled — budget and deadline adjusted accordingly</td>
                        <td className="py-3 px-4">Damaging — erodes profit margin and delays delivery</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Example</td>
                        <td className="py-3 px-4">&ldquo;We&apos;d like to add a blog section. What would that cost?&rdquo;</td>
                        <td className="py-3 px-4">&ldquo;Can you also fix the footer? And add a banner? And...&rdquo;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">The Key Takeaway</p>
                  <p className="text-sm">
                    Scope changes are healthy and expected on any project. Scope creep is the
                    problem. The difference is process: when you have a formal change request
                    system, every new request gets documented, priced, and approved. Nothing
                    slips through the cracks, and your effective rate stays intact. This
                    calculator helps you turn scope creep into scope changes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Track scope changes <span className="gradient-text">automatically</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps you manage project budgets, track time against scope, and
              generate change order invoices in seconds. Stop losing money to undocumented
              scope changes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/scope-of-work-generator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Scope of Work Generator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="scope-change-calculator" category="Business Analytics" />
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