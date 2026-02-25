import type { Metadata } from 'next';
import Link from 'next/link';
import ProposalGenerator from './ProposalGenerator';

const title = 'Free Freelance Proposal Template Generator Australia | Project Proposal Builder — InvoiceFlow';
const description =
  'Generate professional freelance project proposals with customisable sections, deliverables, pricing, and terms. Free proposal template for Australian freelancers and contractors.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance proposal template australia',
    'project proposal generator',
    'how to write a freelance proposal',
    'freelance proposal template free',
    'freelance project proposal builder',
    'proposal template for contractors',
  ],
  openGraph: {
    title: 'Freelance Proposal Template Generator — Free Tool | InvoiceFlow',
    description:
      'Create professional freelance proposals in minutes. Customise deliverables, pricing, terms, and more. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/proposal-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Proposal Template Generator — Free Tool | InvoiceFlow',
    description:
      'Build professional freelance proposals with deliverables, pricing, and terms. 100% free.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/proposal-generator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Proposal Template Generator Australia',
  description:
    'Generate professional freelance project proposals with customisable deliverables, pricing, payment terms, selling points, and terms and conditions. Free for Australian freelancers.',
  url: 'https://www.invoiceflow.au/tools/proposal-generator',
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

export default function ProposalGeneratorPage() {
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
              Freelance Proposal <span className="gradient-text">Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Create professional project proposals in minutes. Fill in your details, add
              deliverables and pricing, customise your terms, and copy a ready-to-send proposal
              that wins clients.
            </p>
          </div>

          {/* Generator */}
          <ProposalGenerator />

          {/* Cross-links */}
          <section className="mt-12">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-semibold text-sm mb-3">Related Free Tools</h3>
              <div className="grid sm:grid-cols-3 gap-3">
                <Link
                  href="/tools/scope-of-work-generator"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all group"
                >
                  <p className="text-white text-sm font-medium group-hover:text-teal-400 transition-colors">
                    Scope of Work Generator
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Define deliverables, timelines, and revision policies
                  </p>
                </Link>
                <Link
                  href="/tools/contract-clause-generator"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all group"
                >
                  <p className="text-white text-sm font-medium group-hover:text-teal-400 transition-colors">
                    Contract Clause Generator
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Build freelance contracts with customisable clauses
                  </p>
                </Link>
                <Link
                  href="/tools/quote-calculator"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all group"
                >
                  <p className="text-white text-sm font-medium group-hover:text-teal-400 transition-colors">
                    Quote &amp; Estimate Builder
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Generate professional quotes with line items and GST
                  </p>
                </Link>
              </div>
            </div>
          </section>

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* How to Write a Winning Freelance Proposal */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Write a Winning Freelance Proposal
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A freelance proposal is your chance to show a potential client that you understand
                  their problem, have a clear plan to solve it, and are the right person for the
                  job. Unlike a quote (which is just numbers) or a contract (which is legal terms),
                  a proposal is a persuasive document that sells your expertise and approach.
                </p>
                <p>
                  In Australia, where the freelance market is competitive and clients often evaluate
                  multiple proposals simultaneously, a well-structured proposal can be the difference
                  between winning a $10,000 project and never hearing back.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      Lead with the Client&apos;s Problem
                    </h4>
                    <p className="text-sm">
                      Don&apos;t start with your bio. Start with what the client needs and why it
                      matters. Show that you&apos;ve listened and understood their goals before
                      pitching your solution.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      Be Specific About Deliverables
                    </h4>
                    <p className="text-sm">
                      &ldquo;I&apos;ll build your website&rdquo; is vague. &ldquo;I&apos;ll design
                      and develop a 5-page responsive website with a contact form, blog, and CMS
                      integration&rdquo; is concrete and reassuring.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Include a Clear Timeline
                    </h4>
                    <p className="text-sm">
                      Clients need to know when they&apos;ll get results. Break the project into
                      phases with estimated dates. This shows organisation and sets realistic
                      expectations from day one.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Show Social Proof
                    </h4>
                    <p className="text-sm">
                      Include a testimonial, portfolio link, or brief case study. Clients want
                      evidence that you&apos;ve done this before and delivered great results. One
                      strong testimonial is worth a page of self-promotion.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">05</span>
                      Make the Next Step Obvious
                    </h4>
                    <p className="text-sm">
                      End with a clear call to action: &ldquo;Reply to this email to confirm&rdquo;
                      or &ldquo;Book a call to discuss next steps.&rdquo; Don&apos;t leave the
                      client wondering what to do after reading your proposal.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">06</span>
                      Set an Expiry Date
                    </h4>
                    <p className="text-sm">
                      Proposals should have a validity period (14 days is standard). This creates
                      urgency and protects you from a client accepting three months later when
                      your schedule and rates have changed.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Australian Business Context</p>
                  <p className="text-sm">
                    If you&apos;re registered for GST (required when your annual turnover exceeds
                    $75,000), make sure your proposal clearly shows whether prices include or exclude
                    GST. Use the GST toggle in the generator above to handle this automatically. Also
                    consider including your ABN — it adds credibility and is expected for business-to-business
                    engagements in Australia.
                  </p>
                </div>
              </div>
            </div>

            {/* Proposal vs Quote vs Scope of Work */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Proposal vs Quote vs Scope of Work
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Freelancers often blur the lines between these three documents. While they can
                  overlap, each serves a different purpose at a different stage of the client
                  relationship. Understanding when to use each one helps you look professional
                  and avoid miscommunication.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-medium"></th>
                        <th className="text-left py-3 px-4 text-teal-400 font-semibold">Proposal</th>
                        <th className="text-left py-3 px-4 text-blue-400 font-semibold">Quote / Estimate</th>
                        <th className="text-left py-3 px-4 text-purple-400 font-semibold">Scope of Work</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Purpose</td>
                        <td className="py-3 px-4">Persuade the client to hire you</td>
                        <td className="py-3 px-4">Provide a price for specific work</td>
                        <td className="py-3 px-4">Define exactly what will be delivered</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Tone</td>
                        <td className="py-3 px-4">Persuasive, professional, sales-oriented</td>
                        <td className="py-3 px-4">Factual, numbers-focused</td>
                        <td className="py-3 px-4">Technical, detailed, project-focused</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Includes Pricing</td>
                        <td className="py-3 px-4 text-teal-400">Yes, with context</td>
                        <td className="py-3 px-4 text-teal-400">Yes, line-by-line</td>
                        <td className="py-3 px-4 text-slate-500">Sometimes</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Includes Your Approach</td>
                        <td className="py-3 px-4 text-teal-400">Yes</td>
                        <td className="py-3 px-4 text-slate-500">No</td>
                        <td className="py-3 px-4 text-slate-500">No</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Social Proof</td>
                        <td className="py-3 px-4 text-teal-400">Yes</td>
                        <td className="py-3 px-4 text-slate-500">No</td>
                        <td className="py-3 px-4 text-slate-500">No</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Formality Level</td>
                        <td className="py-3 px-4">Medium — professional but persuasive</td>
                        <td className="py-3 px-4">Low — just the numbers</td>
                        <td className="py-3 px-4">High — detailed and precise</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">When to Send</td>
                        <td className="py-3 px-4">Before the client commits</td>
                        <td className="py-3 px-4">When asked &ldquo;how much?&rdquo;</td>
                        <td className="py-3 px-4">After agreement, before work starts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">The Winning Workflow</p>
                  <p className="text-sm">
                    Send a proposal to win the project, follow with a scope of work to align on
                    details, then formalise with a contract before starting. Need the other documents?
                    Use our{' '}
                    <Link href="/tools/scope-of-work-generator" className="text-teal-400 hover:underline">
                      Scope of Work Generator
                    </Link>{' '}
                    and{' '}
                    <Link href="/tools/contract-clause-generator" className="text-teal-400 hover:underline">
                      Contract Clause Generator
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* 5 Proposal Mistakes That Cost Freelancers Jobs */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Proposal Mistakes That Cost Freelancers Jobs
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Most freelancers lose projects not because they&apos;re unqualified, but because
                  their proposal fails to communicate their value effectively. These five mistakes
                  are the most common — and the most costly.
                </p>
                <div className="space-y-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 text-sm font-bold flex items-center justify-center">1</span>
                      <h4 className="text-white font-semibold">Under-Pricing to Win the Job</h4>
                    </div>
                    <p className="text-sm">
                      Racing to the bottom on price attracts budget clients and signals low quality.
                      Serious clients are willing to pay for expertise — they want to know you can
                      deliver, not that you&apos;re the cheapest option. Price your work based on
                      the value you deliver, not just the hours you spend. A $5,000 website that
                      generates $50,000 in revenue is a bargain.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 text-sm font-bold flex items-center justify-center">2</span>
                      <h4 className="text-white font-semibold">Being Too Generic</h4>
                    </div>
                    <p className="text-sm">
                      Copy-pasting the same proposal for every client is obvious and off-putting.
                      Reference the client&apos;s specific situation, industry, or challenges.
                      &ldquo;I noticed your current website doesn&apos;t have a mobile-responsive
                      design, which is costing you an estimated 40% of traffic&rdquo; beats
                      &ldquo;I build great websites.&rdquo;
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 text-sm font-bold flex items-center justify-center">3</span>
                      <h4 className="text-white font-semibold">No Clear Timeline</h4>
                    </div>
                    <p className="text-sm">
                      &ldquo;I&apos;ll get it done as soon as possible&rdquo; tells the client
                      nothing. A proposal without dates creates anxiety — clients need to plan
                      around your delivery. Break the project into phases with specific week
                      numbers or dates so the client can see exactly when they&apos;ll have
                      results.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 text-sm font-bold flex items-center justify-center">4</span>
                      <h4 className="text-white font-semibold">No Social Proof</h4>
                    </div>
                    <p className="text-sm">
                      Claims without evidence are just opinions. Including even one client
                      testimonial, a relevant portfolio link, or a brief case study dramatically
                      increases your credibility. If you&apos;re just starting out, offer a
                      relevant personal project or a discounted pilot project to build your
                      evidence base.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 text-sm font-bold flex items-center justify-center">5</span>
                      <h4 className="text-white font-semibold">No Clear Next Steps</h4>
                    </div>
                    <p className="text-sm">
                      A proposal without a call to action is like a sales pitch without an ask.
                      Tell the client exactly what to do next: &ldquo;Reply to confirm and I&apos;ll
                      send over the contract&rdquo; or &ldquo;Book a 15-minute call to discuss.&rdquo;
                      Make it frictionless to say yes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Proposal Follow-Up Strategy */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Proposal Follow-Up Strategy
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Sending a proposal and waiting in silence is the default for most freelancers —
                  and it&apos;s costing them projects. Studies show that 80% of sales require five
                  follow-ups, but 44% of freelancers give up after one. A structured follow-up
                  cadence is the difference between &ldquo;I never heard back&rdquo; and
                  &ldquo;When can you start?&rdquo;
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400 mb-1">3 Days</p>
                    <p className="text-sm font-medium text-white mb-2">First Follow-Up</p>
                    <p className="text-xs">
                      A brief, friendly check-in. &ldquo;Just wanted to make sure you received my
                      proposal. Happy to answer any questions or hop on a quick call to discuss.&rdquo;
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400 mb-1">7 Days</p>
                    <p className="text-sm font-medium text-white mb-2">Second Follow-Up</p>
                    <p className="text-xs">
                      Add value. Share a relevant article, case study, or insight related to their
                      project. &ldquo;I came across this and thought of your project — it reinforces
                      the approach I proposed.&rdquo;
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-rose-400 mb-1">14 Days</p>
                    <p className="text-sm font-medium text-white mb-2">Final Follow-Up</p>
                    <p className="text-xs">
                      A respectful close. &ldquo;My proposal is valid for another few days. If the
                      timing isn&apos;t right, no worries — I&apos;m here whenever you&apos;re
                      ready to move forward.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">When to Move On</p>
                  <p className="text-sm">
                    If you&apos;ve sent three follow-ups over two weeks with no response, it&apos;s
                    time to move on. Don&apos;t take it personally — clients get busy, budgets
                    change, and projects get shelved. Keep the door open with a graceful final
                    message, and focus your energy on the next opportunity. The best freelancers
                    always have more proposals in the pipeline than they need.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400 mb-1">80%</p>
                    <p className="text-sm">of won projects require at least one follow-up</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400 mb-1">44%</p>
                    <p className="text-sm">of freelancers never follow up after sending a proposal</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Ready to <span className="gradient-text">win more clients?</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps you go from proposal to payment. Send professional invoices,
              track payments, and manage client projects — all from one place.
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
