import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectCompletionCertificate from './ProjectCompletionCertificate';

const title =
  'Free Project Completion Certificate Generator — Freelance Sign-Off Template | InvoiceFlow';
const description =
  'Generate a professional project completion certificate for freelance projects. Confirm deliverables, trigger final payment, and create a formal sign-off record. Free project handover template for Australian freelancers — no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'project completion certificate template',
    'certificate of completion freelancer',
    'freelance project handover template',
    'project sign-off template australia',
    'project completion form freelancer',
    'freelance deliverables sign-off',
    'project handover document template',
    'certificate of project completion',
    'freelance project close-out template',
    'project sign-off form australia',
    'freelance completion certificate generator',
    'project deliverables confirmation template',
  ],
  openGraph: {
    title: 'Project Completion Certificate Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional project completion certificates for freelance projects. Confirm deliverables, trigger final payment, and create a formal sign-off record. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/project-completion-certificate',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Completion Certificate Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional project completion certificates for freelance projects. Confirm deliverables and trigger final payment.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/project-completion-certificate',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Project Completion Certificate Generator',
  description:
    'Generate professional project completion certificates for freelance projects. Confirm deliverables, trigger final payment, and create a formal sign-off record for Australian freelancers and sole traders.',
  url: 'https://www.invoiceflow.au/tools/project-completion-certificate',
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

export default function ProjectCompletionCertificatePage() {
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
              Project Completion{' '}
              <span className="gradient-text">Certificate Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate a professional project completion and sign-off certificate. Confirm
              deliverables, document financial terms, and trigger final payment — then copy
              and share with your client to formally close out the project.
            </p>
          </div>

          {/* Generator Tool */}
          <ProjectCompletionCertificate />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Use a Project Completion Certificate? */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Use a Project Completion Certificate?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A <strong className="text-white">project completion certificate</strong> is a
                  formal document that confirms all agreed deliverables have been completed to the
                  client&apos;s satisfaction. It serves as a mutual sign-off between the freelancer
                  and the client, officially closing the project and triggering the final payment.
                </p>
                <p>
                  Without a formal completion certificate, projects can drag on indefinitely with
                  last-minute changes, scope creep after handover, and disputes about what was
                  actually delivered. A signed certificate creates a clean break and protects both
                  parties.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Protects Both Parties</h4>
                    <p className="text-sm text-slate-400">
                      The freelancer gets confirmation that the work is accepted, and the client
                      gets a documented record of exactly what was delivered. Both parties have a
                      reference point if any disputes arise later.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Triggers Final Payment</h4>
                    <p className="text-sm text-slate-400">
                      A signed completion certificate is the standard trigger for releasing the
                      final milestone payment. It removes ambiguity about when the final invoice
                      becomes payable and shortens your payment cycle.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Prevents Scope Creep</h4>
                    <p className="text-sm text-slate-400">
                      Once both parties sign the certificate, the project is formally closed. Any
                      additional work after this point is a new engagement — preventing the
                      &ldquo;just one more thing&rdquo; problem that erodes freelancer profitability.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Creates a Legal Record</p>
                  <p className="text-sm">
                    A completion certificate serves as evidence in any future dispute. It documents
                    what was delivered, when it was accepted, and the financial terms agreed upon.
                    If a client later claims the work was incomplete, you have a signed document
                    proving otherwise. Keep a copy with your project files and financial records.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: What to Include in a Completion Certificate */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What to Include in a Completion Certificate
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A thorough completion certificate should leave no room for ambiguity. It needs to
                  clearly identify the project, the parties involved, what was delivered, and the
                  financial settlement. Here are the essential elements:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      Project Identification
                    </h4>
                    <p className="text-sm">
                      Project name, a unique certificate number, project start and completion dates,
                      and a brief description of the project scope. This establishes exactly which
                      engagement the certificate refers to.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      Party Details
                    </h4>
                    <p className="text-sm">
                      Full names, business names, ABN (for the freelancer), and contact details for
                      both the freelancer and the client. This ensures the certificate is legally
                      attributable to the correct entities.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Deliverables Checklist
                    </h4>
                    <p className="text-sm">
                      A complete list of all deliverables with descriptions, each marked as
                      completed. This is the most important section — it confirms exactly what
                      the client received and accepted.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Financial Summary
                    </h4>
                    <p className="text-sm">
                      Total project value, amounts already paid, the final balance due, GST
                      breakdown (if applicable), and payment terms for the final payment. This
                      prevents any confusion about what is owed at project close.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">05</span>
                      Warranty &amp; Support Period
                    </h4>
                    <p className="text-sm">
                      If you offer a bug-fix or support period after handover, specify the duration
                      and what it covers. This sets clear expectations about post-project support
                      and when it ends.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">06</span>
                      Sign-Off Section
                    </h4>
                    <p className="text-sm">
                      Signature lines for both the freelancer and the client, with date fields. Both
                      parties signing confirms mutual acceptance of the project as complete and the
                      financial terms as agreed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Best Practices for Australian Freelancers */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Project Handover Best Practices for Australian Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Closing out a project properly is just as important as onboarding well. Australian
                  freelancers and sole traders should follow these best practices to ensure a smooth
                  handover and protect their business:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      Document Everything Before Handover
                    </h4>
                    <p className="text-sm">
                      Before sending the completion certificate, ensure all project files,
                      credentials, documentation, and assets have been transferred. Create a
                      handover document listing everything the client needs to maintain or
                      continue the project independently.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      Get Written Confirmation
                    </h4>
                    <p className="text-sm">
                      Never rely on verbal agreement that a project is complete. Always get the
                      client to sign the completion certificate — even if it&apos;s just a reply
                      email saying &ldquo;I confirm the project is complete as described.&rdquo;
                      Written confirmation is essential if disputes arise later.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Retain Copies for Your Records
                    </h4>
                    <p className="text-sm">
                      Keep a signed copy of every completion certificate in your project archive.
                      The ATO requires you to retain business records for at least five years. Store
                      digital copies alongside the project contract, invoices, and correspondence.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Include Your ABN on All Documents
                    </h4>
                    <p className="text-sm">
                      As an Australian sole trader or business, your ABN should appear on all
                      professional documents — including completion certificates. Without your ABN,
                      clients are required to withhold 47% of any payment as PAYG tax under the
                      no-ABN withholding rules.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">ATO Record-Keeping Tip</p>
                  <p className="text-sm">
                    The ATO expects freelancers and sole traders to maintain professional records
                    of all business transactions. A completion certificate paired with your final
                    invoice creates a complete audit trail from project start to final payment. This
                    is especially important at tax time and if you are ever audited. Use our{' '}
                    <a href="/tools/invoice-generator" className="text-teal-400 hover:underline">
                      Invoice Generator
                    </a>{' '}
                    to create a matching final invoice for the outstanding balance.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: CTA */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Streamlines Project Close-Out
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Manually tracking deliverables, generating final invoices, and chasing sign-offs
                  is time-consuming. InvoiceFlow automates the entire project close-out workflow for
                  Australian freelancers:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Final Milestone Invoicing</h4>
                    <p className="text-xs text-slate-400">
                      When a project is marked complete, InvoiceFlow automatically generates the
                      final milestone invoice with the correct balance, GST, and payment terms.
                      No manual calculations or duplicate data entry needed.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Project Archiving</h4>
                    <p className="text-xs text-slate-400">
                      Completed projects are automatically archived with all invoices, payments,
                      contracts, and correspondence. Access your full project history anytime for
                      tax, audits, or future reference.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Completion Certificates</h4>
                    <p className="text-xs text-slate-400">
                      Generate branded, professional completion certificates directly from your
                      project data. All deliverables, financial summaries, and sign-off fields are
                      pre-populated — ready to send to your client in seconds.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Payment Tracking</h4>
                    <p className="text-xs text-slate-400">
                      Track the final payment from invoice to receipt. Automated reminders ensure
                      you get paid promptly after sign-off, and payment receipts are generated
                      automatically when funds are received.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Close projects professionally,{' '}
              <span className="gradient-text">get paid faster</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles project close-out from final invoicing to payment collection.
              Stop chasing sign-offs manually and start closing projects with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/milestone-payment-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Milestone Calculator
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
