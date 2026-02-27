import type { Metadata } from 'next';
import Link from 'next/link';
import SubcontractorAgreement from './SubcontractorAgreement';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title =
  'Subcontractor Agreement Generator Australia | Free Template for Freelancers — InvoiceFlow';
const description =
  'Free subcontractor agreement generator for Australian freelancers. Generate professional subcontractor agreements with payment terms, IP clauses, confidentiality, non-compete, insurance requirements, and GST handling — customised for your engagement.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'subcontractor agreement template australia',
    'subcontractor agreement generator',
    'freelance subcontractor contract template',
    'independent contractor agreement australia',
    'subcontractor agreement free template',
    'hire subcontractor agreement australia',
    'freelance subcontractor contract generator',
    'australian subcontractor agreement',
    'contractor agreement template ABN',
    'subcontractor engagement agreement',
  ],
  openGraph: {
    title: 'Subcontractor Agreement Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional subcontractor agreements for Australian freelancers. Payment terms, IP, confidentiality, non-compete, and GST handling included. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/subcontractor-agreement',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subcontractor Agreement Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional subcontractor agreements for Australian freelancers. Free — no signup required.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/subcontractor-agreement',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Subcontractor Agreement Generator Australia',
  description:
    'Generate professional subcontractor agreements for Australian freelancers and small businesses. Includes payment terms, IP assignment, confidentiality, non-compete clauses, insurance requirements, and GST calculations.',
  url: 'https://www.invoiceflow.au/tools/subcontractor-agreement',
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

export default function SubcontractorAgreementPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              <span className="text-cyan-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Subcontractor Agreement{' '}
              <span className="gradient-text">Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate a professional subcontractor agreement for hiring freelancers and contractors
              in Australia. Set payment terms, IP ownership, confidentiality, non-compete clauses,
              insurance requirements, and termination conditions — with ABN and GST handling built in.
            </p>
          </div>

          {/* Generator Tool */}
          <SubcontractorAgreement />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why You Need a Subcontractor Agreement */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why You Need a Subcontractor Agreement in Australia
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  When you hire another freelancer or contractor to help deliver a project, a verbal
                  agreement or casual email thread is not enough. A written subcontractor agreement
                  protects both parties and sets clear expectations from day one. Here&apos;s why it matters:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-cyan-400 text-sm font-bold">01</span>
                      ATO Compliance
                    </h4>
                    <p className="text-sm">
                      The Australian Taxation Office requires clear documentation of contractor relationships.
                      Without a written agreement, the ATO may reclassify your subcontractor as an employee —
                      triggering superannuation, PAYG withholding, and workers&apos; compensation obligations
                      that could cost you thousands. A well-drafted agreement reinforces the independent
                      contractor status.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-cyan-400 text-sm font-bold">02</span>
                      IP Protection
                    </h4>
                    <p className="text-sm">
                      Under Australian copyright law, the creator of original work owns the intellectual
                      property by default — even if you paid for it. Without an IP assignment clause in
                      your subcontractor agreement, the work your subcontractor creates may legally belong
                      to them, not you or your client. This can create serious problems when you need to
                      deliver work product to your end client.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-cyan-400 text-sm font-bold">03</span>
                      Payment Clarity
                    </h4>
                    <p className="text-sm">
                      Disputes over payment are the number one cause of breakdowns in subcontractor
                      relationships. A written agreement specifying the rate, payment schedule, invoicing
                      requirements, and GST handling eliminates ambiguity. Both parties know exactly what
                      to expect, when, and how — reducing the risk of conflict and unpaid work.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-cyan-400 text-sm font-bold">04</span>
                      Client Protection
                    </h4>
                    <p className="text-sm">
                      If you&apos;re subcontracting work on a client project, your client contract likely
                      includes confidentiality and IP provisions. Without a matching subcontractor agreement,
                      you&apos;re personally liable for any breaches by your subcontractor. A back-to-back
                      agreement ensures your subcontractor is bound by the same obligations you&apos;ve agreed
                      to with your client.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-cyan-400 font-medium mb-2">Bottom Line</p>
                  <p className="text-sm">
                    Every subcontractor engagement — whether it&apos;s a one-off project or an ongoing
                    arrangement — should start with a signed agreement. It takes minutes to create and
                    can save you from disputes, ATO issues, and IP complications down the line. Use
                    this generator to build one now.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Subcontractor vs Employee */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Subcontractor vs Employee — Know the Difference
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The distinction between a subcontractor and an employee is one of the most important
                  legal classifications in Australian business. Getting it wrong can result in
                  significant penalties from the ATO, Fair Work Commission, and state revenue offices.
                  Here are the key differences:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Factor</th>
                        <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Subcontractor</th>
                        <th className="text-left py-3 px-4 text-rose-400 font-semibold">Employee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Control</td>
                        <td className="py-3 px-4">Controls how, when, and where work is done</td>
                        <td className="py-3 px-4">Employer directs the work methods and schedule</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Tools</td>
                        <td className="py-3 px-4">Provides own equipment and tools</td>
                        <td className="py-3 px-4">Employer provides tools and equipment</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Risk</td>
                        <td className="py-3 px-4">Bears financial risk, can profit or lose</td>
                        <td className="py-3 px-4">No financial risk — guaranteed wage</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Tax</td>
                        <td className="py-3 px-4">Has own ABN, quotes on invoices, manages own tax</td>
                        <td className="py-3 px-4">PAYG withholding managed by employer</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Super</td>
                        <td className="py-3 px-4">Manages own superannuation (usually)</td>
                        <td className="py-3 px-4">Employer pays super guarantee (11.5%)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Leave</td>
                        <td className="py-3 px-4">No entitlement to paid leave</td>
                        <td className="py-3 px-4">Entitled to annual, sick, and long service leave</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Other clients</td>
                        <td className="py-3 px-4">Free to work for multiple clients simultaneously</td>
                        <td className="py-3 px-4">Typically works exclusively for one employer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-cyan-400 font-medium mb-2">Warning</p>
                  <p className="text-sm">
                    A written contract alone does not determine the relationship. The ATO looks at the
                    substance of the arrangement — how the work is actually performed in practice. If your
                    subcontractor works set hours, uses your equipment, and can&apos;t refuse work, the ATO
                    may reclassify them as an employee regardless of what the contract says. Use our{' '}
                    <a href="/tools/contractor-employee-calculator" className="text-cyan-400 hover:underline">
                      Contractor vs Employee Calculator
                    </a>{' '}
                    to assess your arrangement.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Key Clauses */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Key Clauses Every Subcontractor Agreement Needs
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A comprehensive subcontractor agreement covers more than just &ldquo;what&rdquo; and
                  &ldquo;how much.&rdquo; Each clause serves a specific protective function for both the
                  principal and the subcontractor. Here are the essential clauses:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Independent Contractor Status</h4>
                    <p className="text-sm text-slate-400">
                      This is the most critical clause in any subcontractor agreement. It explicitly
                      states that the subcontractor is not an employee, controls their own methods and
                      schedule, provides their own tools, and is responsible for their own taxation.
                      Without this clause, you risk an ATO reclassification that triggers superannuation,
                      PAYG withholding, and workers&apos; compensation obligations.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Scope of Services</h4>
                    <p className="text-sm text-slate-400">
                      Clearly define what services the subcontractor will deliver. Be specific about
                      deliverables, quality standards, and timelines. A vague scope leads to scope creep,
                      disputes, and extra costs. The more detailed your scope, the easier it is to hold
                      both parties accountable and resolve disagreements.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">IP Assignment</h4>
                    <p className="text-sm text-slate-400">
                      Under the Copyright Act 1968 (Cth), the creator of original work owns the copyright
                      by default. If you need to deliver the subcontractor&apos;s work to your end client, you
                      must include an IP assignment clause. This transfers ownership of the work product
                      to you (the principal) upon payment, ensuring you can fulfil your obligations to
                      your own client.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Confidentiality</h4>
                    <p className="text-sm text-slate-400">
                      Your subcontractor will likely access sensitive information — client data, business
                      strategies, pricing, and proprietary processes. A confidentiality clause binds them
                      to secrecy and defines what constitutes confidential information, how long the
                      obligation lasts, and the consequences of a breach. This is especially important
                      when your own client contract includes NDA provisions.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Payment &amp; GST</h4>
                    <p className="text-sm text-slate-400">
                      Specify the rate (fixed, hourly, daily, or milestone), payment terms (Net 7, 14, or
                      30), invoicing requirements, and GST handling. If the subcontractor is GST-registered,
                      they should charge GST on their invoices. If they&apos;re not registered, no GST
                      applies — but they must provide their ABN to avoid PAYG withholding at the top
                      marginal rate.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Termination</h4>
                    <p className="text-sm text-slate-400">
                      Both parties should have the right to end the agreement with reasonable notice.
                      Define the notice period, what happens to work in progress, how final payment is
                      calculated, and the conditions for immediate termination (material breach, insolvency,
                      misconduct). Without this, ending a subcontractor relationship becomes legally messy
                      and financially risky.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-cyan-400 font-medium mb-2">Pro Tip</p>
                  <p className="text-sm">
                    If your subcontractor will be working on a client project, review your client contract
                    first. Ensure your subcontractor agreement includes matching (or stricter) provisions
                    for confidentiality, IP assignment, and data protection. This &ldquo;back-to-back&rdquo;
                    approach protects you from being caught between your client&apos;s requirements and your
                    subcontractor&apos;s obligations.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Tools */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Related Tools for Managing Subcontractors
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A subcontractor agreement is just the starting point. These tools help you manage the
                  full lifecycle of subcontractor engagements — from classification to payment:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <Link
                    href="/tools/contract-generator"
                    className="bg-white/5 rounded-xl p-4 hover:bg-white/[0.08] transition-colors group"
                  >
                    <h4 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                      Contract Generator
                    </h4>
                    <p className="text-sm">
                      Generate client-facing service agreements. Pair with your subcontractor agreement
                      for back-to-back contract protection.
                    </p>
                  </Link>
                  <Link
                    href="/tools/contractor-employee-calculator"
                    className="bg-white/5 rounded-xl p-4 hover:bg-white/[0.08] transition-colors group"
                  >
                    <h4 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                      Contractor vs Employee Calculator
                    </h4>
                    <p className="text-sm">
                      Not sure if your arrangement qualifies as genuine contracting? Run the ATO&apos;s
                      key indicators through this calculator to assess your risk.
                    </p>
                  </Link>
                  <Link
                    href="/tools/scope-of-work-generator"
                    className="bg-white/5 rounded-xl p-4 hover:bg-white/[0.08] transition-colors group"
                  >
                    <h4 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                      Scope of Work Generator
                    </h4>
                    <p className="text-sm">
                      Define clear deliverables and boundaries for your subcontractor engagement. Attach
                      as a schedule to your agreement.
                    </p>
                  </Link>
                  <Link
                    href="/tools/invoice-generator"
                    className="bg-white/5 rounded-xl p-4 hover:bg-white/[0.08] transition-colors group"
                  >
                    <h4 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                      Invoice Generator
                    </h4>
                    <p className="text-sm">
                      Create professional invoices for subcontractor payments. Includes GST calculations,
                      ABN display, and ATO-compliant formatting.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Manage your team and{' '}
              <span className="gradient-text">get paid on time</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, subcontractor payments, GST calculations, and
              payment tracking — so you can focus on delivering great work to your clients.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
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
        
        <RelatedTools currentSlug="subcontractor-agreement" category="Invoicing & Documents" />
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
