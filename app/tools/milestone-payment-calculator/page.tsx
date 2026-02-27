import type { Metadata } from 'next';
import Link from 'next/link';
import MilestonePaymentCalculator from './MilestonePaymentCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title =
  'Free Milestone Payment Schedule Calculator for Freelancers — InvoiceFlow';
const description =
  'Generate a milestone payment schedule for freelance projects. Calculate deposit, phase payments, and final delivery amounts with GST. Free milestone billing calculator for Australian freelancers — no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'milestone payment schedule freelancer',
    'project milestone billing calculator',
    'payment schedule generator freelancer',
    'deposit and milestone billing australia',
    'freelance project payment plan',
    'milestone invoicing calculator',
    'project payment schedule generator',
    'freelance milestone billing template',
    'payment milestone calculator GST',
    'freelance deposit calculator australia',
  ],
  openGraph: {
    title: 'Milestone Payment Schedule Calculator — Free Tool | InvoiceFlow',
    description:
      'Generate milestone payment schedules for freelance projects. Calculate deposits, phase payments, and GST. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/milestone-payment-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milestone Payment Schedule Calculator — Free Tool | InvoiceFlow',
    description:
      'Generate milestone payment schedules for freelance projects. Calculate deposits, phase payments, and GST.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/milestone-payment-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Milestone Payment Schedule Calculator',
  description:
    'Generate milestone payment schedules for freelance projects. Calculate deposit amounts, phase payments, due dates, and GST for Australian freelancers and sole traders.',
  url: 'https://www.invoiceflow.au/tools/milestone-payment-calculator',
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
    answer: "Yes, this tool is completely free. No account or credit card needed — just enter your details and get instant results."
  },
  {
    question: "How reliable are the projections?",
    answer: "Projections use standard financial formulas and current ATO rates for the 2025-26 financial year. They're designed for planning purposes — consult a financial adviser for complex decisions."
  },
  {
    question: "Is my financial data stored anywhere?",
    answer: "No. All calculations happen locally in your browser. InvoiceFlow never sends, stores, or shares your financial information from free tools."
  }
];

export default function MilestonePaymentCalculatorPage() {
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

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-teal-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Milestone Payment{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Break your freelance projects into structured milestone payments. Calculate
              deposit amounts, phase billing, due dates, and GST — then copy a professional
              payment schedule to share with your client.
            </p>
          </div>

          {/* Calculator */}
          <MilestonePaymentCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: What Is Milestone-Based Billing? */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Is Milestone-Based Billing?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">Milestone-based billing</strong> is a payment
                  structure where the total project fee is divided into smaller payments tied to
                  specific deliverables or project phases. Instead of billing everything at the
                  start or the end, freelancers collect payment as they complete each agreed
                  milestone — giving both parties security and accountability throughout the
                  project lifecycle.
                </p>
                <p>
                  This approach protects the freelancer from doing weeks of unpaid work, and
                  reassures the client that they only pay as real progress is delivered. It is
                  the industry standard for web development, design, copywriting, and consulting
                  projects in Australia and worldwide.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Typical Structure</h4>
                    <p className="text-sm text-slate-400">
                      Most milestone schedules follow a <strong className="text-white">Deposit
                      + Milestones + Final Delivery</strong> pattern. The deposit secures
                      commitment, milestones fund ongoing work, and the final payment is released
                      on project completion and sign-off.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Why It Works</h4>
                    <p className="text-sm text-slate-400">
                      Regular cash flow keeps the freelancer motivated and solvent.
                      Clients maintain leverage because they approve each phase before the next
                      payment is due. Disputes are easier to resolve when the scope is broken into
                      clear deliverables.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">When to Use It</h4>
                    <p className="text-sm text-slate-400">
                      Any project worth over $2,000 or lasting more than two weeks should use
                      milestone billing. For smaller projects, a simple 50/50 split (deposit +
                      final) is usually sufficient. For large engagements ($10,000+), use 4-6
                      milestones.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Real-World Example</p>
                  <p className="text-sm">
                    A web developer quoting $12,000 for a business website might structure it as:
                    30% deposit ($3,600) to start → 30% after design approval ($3,600) → 40%
                    on launch and handover ($4,800). Each milestone has clear deliverables and
                    the client reviews work before the next phase begins.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: How to Structure Milestone Payments */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Structure Milestone Payments
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The right milestone structure depends on project size, complexity, and your
                  relationship with the client. Here are the most common splits used by
                  Australian freelancers, along with when to use each one:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">50/50</span>
                      Small Projects
                    </h4>
                    <p className="text-sm">
                      50% deposit upfront, 50% on completion. Best for projects under $5,000 with
                      a short timeline (1-2 weeks). Simple, minimal admin overhead, and the
                      deposit covers your costs if the client disappears.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">30/30/40</span>
                      Standard 3 Milestones
                    </h4>
                    <p className="text-sm">
                      30% deposit, 30% at midpoint, 40% on delivery. The most popular structure
                      for medium projects ($5,000-$15,000). The slightly larger final payment
                      incentivises a quality handover and keeps the client engaged until the end.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">25/25/25/25</span>
                      Equal Quarters
                    </h4>
                    <p className="text-sm">
                      Four equal payments at project start, 25%, 50%, 75%, and 100% completion.
                      Works well for longer projects ($10,000+) where you want predictable cash
                      flow. Each quarter should map to a specific deliverable.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">40/30/30</span>
                      Front-Loaded
                    </h4>
                    <p className="text-sm">
                      40% deposit, 30% midpoint, 30% on delivery. Ideal for new clients or
                      projects with high upfront costs (e.g., buying stock imagery, third-party
                      licenses). The larger deposit covers your risk and initial investment.
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">GST Consideration</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Rule</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">When to charge GST</td>
                        <td className="py-3 px-4">If you&apos;re registered for GST (turnover $75,000+), add 10% to every milestone invoice</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">When GST is payable</td>
                        <td className="py-3 px-4">GST is payable when the invoice is issued, not when it&apos;s paid — report in the BAS period you invoice</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Invoice per milestone</td>
                        <td className="py-3 px-4">Issue a separate tax invoice for each milestone — this creates a clear audit trail for BAS</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">ABN requirement</td>
                        <td className="py-3 px-4">Every milestone invoice must include your ABN — without it, the client must withhold 47% tax</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section 3: Milestone Payment Best Practices */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Milestone Payment Best Practices for Australian Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Getting the structure right is only half the battle. Here are the operational
                  best practices that ensure milestone billing actually works in practice and
                  keeps your cash flow healthy:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      Always Collect a Deposit (20-50%)
                    </h4>
                    <p className="text-sm">
                      Never start work without a deposit. A 20-50% upfront payment confirms the
                      client is serious, covers your initial costs, and protects you if the
                      project is cancelled early. New clients should pay closer to 50%; established
                      relationships can go as low as 20%.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      Tie Milestones to Deliverables, Not Dates
                    </h4>
                    <p className="text-sm">
                      &ldquo;Payment due when homepage design is approved&rdquo; is far better
                      than &ldquo;Payment due March 15.&rdquo; Date-based milestones create
                      arguments when timelines shift. Deliverable-based milestones are objective
                      and verifiable by both parties.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Include Milestone Definitions in Your Contract
                    </h4>
                    <p className="text-sm">
                      Your contract or{' '}
                      <a href="/tools/scope-of-work-generator" className="text-teal-400 hover:underline">
                        scope of work
                      </a>{' '}
                      should list every milestone, its deliverables, percentage of total, and
                      approval process. This eliminates the &ldquo;I didn&apos;t know that was a
                      separate payment&rdquo; conversation.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Use Short Payment Terms (Net 7)
                    </h4>
                    <p className="text-sm">
                      For milestone payments, Net 7 is the standard. You&apos;ve already completed
                      the work — the client shouldn&apos;t need 30 days to pay. Make it clear:
                      work on the next phase does not begin until the current milestone invoice
                      is paid.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">05</span>
                      GST Is Payable When Invoiced
                    </h4>
                    <p className="text-sm">
                      Under Australian tax law, GST is payable in the BAS period you issue the
                      invoice — not when the client pays it. If you invoice a $5,000 milestone
                      in March but get paid in April, you report the GST in your March quarter BAS.
                      Plan your cash flow accordingly.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">06</span>
                      Handle Client Approval Delays
                    </h4>
                    <p className="text-sm">
                      Include a clause: &ldquo;If the client does not approve or provide feedback
                      within 10 business days of milestone delivery, the milestone is deemed
                      approved and the invoice becomes payable.&rdquo; This prevents projects
                      from stalling indefinitely at the review stage.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">ATO Compliance Tip</p>
                  <p className="text-sm">
                    If you&apos;re GST-registered, each milestone invoice must be a valid tax
                    invoice: include your ABN, the words &ldquo;Tax Invoice,&rdquo; the GST
                    amount or a statement that the total includes GST, and the date of issue. Use
                    our{' '}
                    <a href="/tools/invoice-generator" className="text-teal-400 hover:underline">
                      Invoice Generator
                    </a>{' '}
                    to create compliant milestone invoices in seconds.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: CTA */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Handles Milestone Invoicing
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Manually tracking milestones, generating invoices for each phase, and chasing
                  payments across multiple stages is tedious and error-prone. InvoiceFlow
                  automates the entire milestone invoicing workflow for Australian freelancers:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Automatic Milestone Invoices</h4>
                    <p className="text-xs text-slate-400">
                      Set up your milestone schedule once and InvoiceFlow generates a separate
                      tax invoice for each phase — with correct GST calculations, your ABN,
                      and professional formatting.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Payment Tracking per Milestone</h4>
                    <p className="text-xs text-slate-400">
                      See at a glance which milestones are paid, pending, or overdue. Get
                      automatic reminders when a milestone invoice goes past its due date —
                      no more manual follow-ups.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">GST-Ready for BAS</h4>
                    <p className="text-xs text-slate-400">
                      Every milestone invoice is a valid ATO-compliant tax invoice. At BAS time,
                      export your milestone invoices and know exactly how much GST to report —
                      no manual calculations needed.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Client Portal</h4>
                    <p className="text-xs text-slate-400">
                      Clients can view their project milestones, approve deliverables, and pay
                      invoices online. Reduces email back-and-forth and creates a clear record
                      of approvals for your files.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Automate milestone invoicing{' '}
              <span className="gradient-text">from start to finish</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow generates milestone invoices, tracks payments per phase, and sends
              automatic reminders — so you get paid on time at every stage of the project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/payment-plan-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Payment Plan Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="milestone-payment-calculator" category="Financial Planning" />
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
