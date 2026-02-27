import type { Metadata } from 'next';
import Link from 'next/link';
import ClientCommunicationTemplates from './ClientCommunicationTemplates';
import RelatedTools from '../components/RelatedTools';

const title =
  'Free Client Communication Templates for Freelancers | Email Templates for Delays, Rate Increases & More — InvoiceFlow';
const description =
  'Generate professional email templates for common freelancer-client scenarios. Project delays, scope changes, rate increases, firing clients, boundary setting, and more. Free tool for Australian freelancers — no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'client communication templates freelancer',
    'how to tell client about delay email',
    'freelance client email templates australia',
    'rate increase email template freelancer',
    'scope change email client template',
    'how to fire a client professionally email',
    'freelancer boundary setting email',
    'project delay notification email template',
    'client onboarding email freelancer',
    'milestone update email template',
    'professional client email templates free',
    'freelance business communication templates',
  ],
  openGraph: {
    title: 'Client Communication Template Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional email templates for freelancer-client scenarios. Delays, scope changes, rate increases, firing clients, and more. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/client-communication-templates',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Communication Template Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional email templates for every freelancer-client scenario. Delays, rate increases, scope changes, and more.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/client-communication-templates',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Client Communication Template Generator',
  description:
    'Generate professional email templates for common freelancer-client scenarios including project delays, scope changes, rate increases, ending client relationships, boundary setting, milestone updates, and client onboarding. Tailored for Australian freelancers and sole traders.',
  url: 'https://www.invoiceflow.au/tools/client-communication-templates',
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

export default function ClientCommunicationTemplatesPage() {
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
              <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg flex items-center justify-center">
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
                className="px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-medium rounded-lg hover:from-rose-400 hover:to-pink-400 transition-all"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-rose-400 rounded-full" />
              <span className="text-rose-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Client Communication{' '}
              <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Template Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate professional, ready-to-send email templates for the trickiest freelancer-client
              conversations. Project delays, scope changes, rate increases, firing clients,
              boundary setting, and more — tailored for Australian freelancers.
            </p>
          </div>

          {/* Generator Tool */}
          <ClientCommunicationTemplates />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Professional Client Communication Matters */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Professional Client Communication Matters for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  As a freelancer, your communication is your brand. Every email you send shapes
                  how clients perceive your professionalism, reliability, and value. Unlike employees
                  who have HR departments and managers to handle difficult conversations, freelancers
                  are responsible for every interaction — from the initial welcome email to the
                  uncomfortable rate increase notice. Getting these communications right is not
                  optional; it directly impacts your income, reputation, and mental health.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-rose-400 text-sm font-bold">01</span>
                      Cash Flow Depends on Communication
                    </h4>
                    <p className="text-sm">
                      Research from the Australian Small Business and Family Enterprise Ombudsman
                      shows that poor communication is the number one cause of payment disputes
                      between freelancers and clients. When expectations are unclear, scope creeps
                      unmanaged, or delays go uncommunicated, clients withhold payment. A well-written
                      delay notification or scope change email does not just protect the relationship
                      — it protects your cash flow. Freelancers who communicate proactively about
                      timeline changes get paid an average of 11 days faster than those who stay silent.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-rose-400 text-sm font-bold">02</span>
                      Reputation Is Everything
                    </h4>
                    <p className="text-sm">
                      In the freelance world, referrals and repeat clients are your lifeblood. A single
                      poorly handled conversation — a passive-aggressive scope change email, a vague
                      delay notification, or a clumsy attempt to end a client relationship — can undo
                      months of excellent work. Professional communication during difficult moments
                      is what separates freelancers who build six-figure practices from those who
                      constantly chase new leads. Your response during adversity defines your brand
                      more than your portfolio ever will.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-rose-400 text-sm font-bold">03</span>
                      Legal Protection
                    </h4>
                    <p className="text-sm">
                      Written communication creates a paper trail. When a client disputes a scope
                      change, denies agreeing to a rate increase, or claims they never received a
                      milestone update, your emails are your evidence. Under Australian contract law,
                      email correspondence can form part of a binding agreement — particularly when
                      it documents changes to scope, timelines, or pricing. The templates in this
                      tool are designed to be clear and specific enough to serve as documentation
                      if a dispute ever escalates to VCAT, NCAT, or another tribunal.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-rose-400 text-sm font-bold">04</span>
                      Mental Health and Boundaries
                    </h4>
                    <p className="text-sm">
                      Many freelancers avoid difficult conversations because they do not know what to
                      say. This leads to resentment, burnout, and accepting work or behaviour that
                      would never be tolerated in traditional employment. Having professional templates
                      ready for boundary setting, rate increases, and ending client relationships
                      removes the emotional weight of drafting these messages from scratch. When the
                      hard part — finding the right words — is already done, you are far more likely
                      to have the conversation you need to have, when you need to have it.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-rose-400 font-medium mb-2">The Bottom Line</p>
                  <p className="text-sm">
                    Professional communication is not a soft skill — it is a revenue skill. Every
                    email you send either strengthens or weakens the client relationship, your
                    payment timeline, and your legal position. These templates give you a head start
                    on the conversations that matter most.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: How to Handle Difficult Client Conversations */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Handle Difficult Client Conversations
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Difficult conversations are inevitable in freelancing. Projects get delayed, scopes
                  change, rates need adjusting, and sometimes relationships need to end. The difference
                  between a conversation that destroys a relationship and one that strengthens it
                  comes down to framework, timing, and tone. Here is a practical approach that works
                  for every scenario.
                </p>
                <div className="bg-white/5 rounded-xl p-6 mt-4">
                  <h4 className="text-white font-semibold mb-4 text-lg">The CLEAR Framework for Client Communication</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 shrink-0 bg-rose-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-rose-400 font-bold text-sm">C</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold mb-1">Context First</p>
                        <p className="text-sm">
                          Start with context, not the problem. Reference the project, the relationship,
                          or the positive progress before introducing the difficult topic. This frames
                          the conversation constructively and prevents the client from becoming
                          immediately defensive. For example: &ldquo;The website redesign has been
                          progressing well — we completed the homepage and about page ahead of
                          schedule&rdquo; before &ldquo;However, I need to flag a delay on the
                          e-commerce section.&rdquo;
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 shrink-0 bg-rose-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-rose-400 font-bold text-sm">L</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold mb-1">Lead with Facts</p>
                        <p className="text-sm">
                          State what happened factually, without emotion or blame. &ldquo;The scope
                          has expanded beyond the original brief&rdquo; is better than &ldquo;You
                          keep adding more work.&rdquo; Facts are harder to argue with than
                          interpretations. When you lead with facts, the client is more likely to
                          engage rationally rather than emotionally.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 shrink-0 bg-rose-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-rose-400 font-bold text-sm">E</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold mb-1">Explain the Impact</p>
                        <p className="text-sm">
                          Tell the client what the situation means for them — not just for you. &ldquo;This
                          means the launch date will shift from March 15 to March 29&rdquo; is clearer and
                          more actionable than &ldquo;I need more time.&rdquo; Clients care about outcomes.
                          Frame the impact in terms of timelines, costs, and deliverables.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 shrink-0 bg-rose-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-rose-400 font-bold text-sm">A</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold mb-1">Action Plan</p>
                        <p className="text-sm">
                          Always present a solution alongside the problem. Never send an email that
                          says &ldquo;there is a problem&rdquo; without also saying &ldquo;here is what
                          I recommend.&rdquo; Clients hire freelancers who solve problems, not create
                          them. Propose a revised timeline, a phased approach, or an alternative that
                          keeps the project moving forward.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 shrink-0 bg-rose-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-rose-400 font-bold text-sm">R</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold mb-1">Request a Response</p>
                        <p className="text-sm">
                          End with a clear call to action. Ask the client to confirm the revised
                          timeline, approve the scope change, or schedule a call to discuss. Open-ended
                          emails get open-ended responses (or no response at all). A specific request
                          like &ldquo;Could you confirm by Friday whether you would like to proceed
                          with Option A or Option B?&rdquo; drives the conversation forward.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-rose-400 font-medium mb-2">Timing Matters</p>
                  <p className="text-sm">
                    Send difficult emails on Tuesday, Wednesday, or Thursday mornings. Avoid Friday
                    afternoons (clients stew over weekends), Monday mornings (they are already
                    overwhelmed), and never send a difficult message after 5pm. If you are emotional,
                    draft the email and sleep on it — but do not delay more than 24 hours. The longer
                    you wait, the harder the conversation becomes and the more trust erodes.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Setting Boundaries as a Freelancer */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Setting Boundaries as a Freelancer
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Boundary setting is one of the most difficult — and most important — skills for
                  freelancers to develop. Without clear boundaries, scope creeps, working hours
                  expand, and rates stagnate. Research from the Freelancers Union found that 71% of
                  freelancers have had difficulty collecting payment at least once, and in most cases,
                  the root cause was unclear boundaries set at the beginning of the engagement.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Working Hours</h4>
                    <p className="text-sm">
                      State your working hours in your welcome email and contract. When a client
                      messages you at 10pm expecting an immediate response, you do not need to
                      apologise — you need to refer back to your stated hours. A boundary-setting
                      email that says &ldquo;I am available Monday to Friday, 9am to 5pm AEST.
                      Messages received outside these hours will be actioned the next business
                      day&rdquo; is not rude — it is professional. Clients who respect your
                      boundaries are clients worth keeping.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Scope Boundaries</h4>
                    <p className="text-sm">
                      Scope creep is the silent killer of freelance profitability. Every &ldquo;quick
                      favour&rdquo; and &ldquo;small tweak&rdquo; that falls outside the original
                      brief erodes your effective hourly rate. The fix is not to say no — it is to
                      say &ldquo;yes, and here is the cost.&rdquo; A scope change email that
                      acknowledges the request, explains why it falls outside the original scope,
                      and provides a quote for the additional work is the professional standard.
                      Never absorb out-of-scope work silently.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Communication Channels</h4>
                    <p className="text-sm">
                      Define which channels are for what. Email for formal requests, project
                      management tools for task updates, and a single messaging platform for quick
                      questions. When clients text your personal phone, DM you on social media, and
                      email your personal address, boundaries are already broken. Set this expectation
                      in your onboarding email: &ldquo;All project-related communication should go
                      through [platform]. This ensures nothing gets lost and everything is
                      documented.&rdquo;
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Payment Boundaries</h4>
                    <p className="text-sm">
                      Never start work without a signed contract and deposit. Never continue work
                      when invoices are overdue. These are non-negotiable boundaries that protect
                      your business. In Australia, the Independent Contractors Act 2006 provides
                      certain protections, but the best protection is clear payment terms communicated
                      upfront. If a client is consistently late on payments, a project pause email
                      — not continued work — is the appropriate response.
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Boundary Type</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">When to Set It</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">How to Communicate It</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Working Hours</td>
                        <td className="py-3 px-4">In the onboarding email and contract</td>
                        <td className="py-3 px-4">Welcome email, auto-responder, contract clause</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Scope</td>
                        <td className="py-3 px-4">When a request falls outside the original brief</td>
                        <td className="py-3 px-4">Scope change email with quote</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Payment</td>
                        <td className="py-3 px-4">Before work starts and when payments are late</td>
                        <td className="py-3 px-4">Contract terms, project pause email</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Revisions</td>
                        <td className="py-3 px-4">In the contract and when the revision limit is reached</td>
                        <td className="py-3 px-4">Contract clause, scope change email</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Availability</td>
                        <td className="py-3 px-4">When a client expects immediate responses</td>
                        <td className="py-3 px-4">Boundary-setting email, response time SLA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-rose-400 font-medium mb-2">Golden Rule</p>
                  <p className="text-sm">
                    The best time to set a boundary is before it is needed. The second best time
                    is right now. Use the boundary-setting template in this tool to address scope
                    creep, out-of-hours messaging, or unreasonable demands before they become
                    normalised. A boundary that is set calmly and professionally is almost always
                    respected. One that is set reactively, after resentment has built up, rarely is.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: When to Walk Away from a Client */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                When to Walk Away from a Client
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Not every client relationship is worth saving. Sometimes the most professional
                  thing you can do — for your business, your mental health, and your other clients
                  — is end a relationship cleanly and move on. Knowing when to walk away is as
                  important as knowing how to do it well. Here are the red flags that indicate
                  it is time to use the &ldquo;Ending a Client Relationship&rdquo; template.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-rose-400 text-sm font-bold">01</span>
                      Consistent Late Payments
                    </h4>
                    <p className="text-sm">
                      Every freelancer deals with the occasional late payment. But when a client is
                      consistently 30, 60, or 90 days late despite reminders, it is a pattern — not
                      an oversight. Late-paying clients cost you more than the invoice amount: they
                      consume time in follow-ups, disrupt your cash flow forecasting, and create
                      stress that affects your other work. In Australia, you can claim interest on
                      overdue invoices, but the administrative burden often outweighs the recovery.
                      A client who does not pay on time does not value your work.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-rose-400 text-sm font-bold">02</span>
                      Repeated Boundary Violations
                    </h4>
                    <p className="text-sm">
                      You sent the boundary-setting email. They acknowledged it. Then they continued
                      messaging at midnight, demanding weekend turnarounds, and adding scope without
                      approval. When a client repeatedly violates boundaries after being clearly
                      informed, they are demonstrating a fundamental lack of respect for your
                      business. No amount of good communication fixes a client who does not see
                      you as an equal professional. End the relationship before it erodes your
                      confidence and sets a precedent for other clients.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-rose-400 text-sm font-bold">03</span>
                      Unprofitable After Scope Adjustments
                    </h4>
                    <p className="text-sm">
                      Some clients are structurally unprofitable. They require excessive meetings,
                      unlimited revisions, constant hand-holding, and more administrative overhead
                      than the project revenue justifies. If you have attempted to address this
                      through scope change emails and rate adjustments and the client has not budged,
                      the mathematics will not change. Calculate your effective hourly rate for this
                      client. If it is below your minimum acceptable rate after accounting for all
                      communication time, it is time to walk away and replace them with a better-fit
                      client.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-rose-400 text-sm font-bold">04</span>
                      Abusive or Disrespectful Behaviour
                    </h4>
                    <p className="text-sm">
                      This one is non-negotiable. Clients who are verbally abusive, personally
                      insulting, or consistently disrespectful do not deserve a second chance. No
                      amount of revenue justifies tolerating abuse. In Australia, the Fair Work Act
                      does not directly protect independent contractors from workplace bullying, but
                      you have the ultimate protection: the right to end the engagement. Use the
                      firm-tone &ldquo;Ending a Client Relationship&rdquo; template, fulfil your
                      contractual obligations, and move on with your dignity intact.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-rose-400 font-medium mb-2">How to Exit Professionally</p>
                  <p className="text-sm">
                    Regardless of the reason, always end a client relationship professionally.
                    Complete any work in progress (or arrange a handover), provide reasonable
                    notice, offer to recommend alternatives, and send a final invoice for all
                    outstanding work. Never ghost a client, no matter how difficult they are.
                    Your reputation follows you, and the freelance community in Australia is
                    smaller than you think. Use the templates in this tool to find the right
                    words — then move on to clients who deserve your best work.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Communicate professionally,{' '}
              <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">get paid on time</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, payment tracking, and automated reminders —
              so every client interaction, from onboarding to final invoice, is professional,
              consistent, and on time. Built for Australian freelancers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/contract-generator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Contract Generator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="client-communication-templates" category="Invoicing & Documents" />
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
