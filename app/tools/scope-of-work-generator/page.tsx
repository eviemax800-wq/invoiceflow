import type { Metadata } from 'next';
import Link from 'next/link';
import ScopeOfWorkGenerator from './ScopeOfWorkGenerator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title = 'Free Scope of Work Generator Australia | SOW Template Builder — InvoiceFlow';
const description =
  'Generate professional scope of work documents for freelance projects. Define deliverables, timelines, payment milestones, and revision policies. Free for Australian freelancers.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'scope of work template freelance',
    'SOW generator',
    'freelance scope of work australia',
    'project scope template',
    'statement of work generator',
    'freelance project scope builder',
  ],
  openGraph: {
    title: 'Scope of Work Generator — Free Tool | InvoiceFlow',
    description:
      'Create professional SOW documents in minutes. Free freelance project scope builder.',
    url: 'https://www.invoiceflow.au/tools/scope-of-work-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scope of Work Generator — Free Tool | InvoiceFlow',
    description:
      'Build professional scope of work documents for freelance projects. 100% free.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/scope-of-work-generator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Scope of Work Generator Australia',
  description:
    'Generate professional scope of work documents for freelance projects with deliverables, timelines, payment milestones, and revision policies.',
  url: 'https://www.invoiceflow.au/tools/scope-of-work-generator',
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

export default function ScopeOfWorkGeneratorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-teal-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Scope of Work <span className="gradient-text">Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Build professional SOW documents in minutes. Define deliverables, set timelines,
              structure payment milestones, and protect yourself with clear revision policies.
            </p>
          </div>

          {/* Generator */}
          <ScopeOfWorkGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Why Every Freelancer Needs a Scope of Work */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Every Freelancer Needs a Scope of Work
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A scope of work is your first line of defence against scope creep, payment
                  disputes, and miscommunication. It sets clear expectations for both you and your
                  client before any work begins — and gives you something concrete to point to when
                  &ldquo;just one more thing&rdquo; turns into three extra weeks of unpaid work.
                </p>
                <p>
                  Without a SOW, you&apos;re relying on verbal agreements and good faith. That works
                  until it doesn&apos;t. When a client remembers the project differently than you do,
                  or when requirements expand mid-project with no budget adjustment, a written scope
                  of work is the only thing that protects your time and income.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400 mb-1">72%</p>
                    <p className="text-sm">of freelancers have experienced scope creep on a project</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400 mb-1">3.2x</p>
                    <p className="text-sm">less likely to have payment disputes with a written SOW</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-rose-400 mb-1">$4,800</p>
                    <p className="text-sm">average revenue lost per year to undocumented scope changes</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Legal Protection</p>
                  <p className="text-sm">
                    In Australia, a written scope of work can serve as evidence in a contract dispute.
                    Under the Australian Consumer Law, clearly documenting what was agreed protects
                    both parties. While a SOW isn&apos;t a full contract, it&apos;s a critical
                    supporting document that courts and mediators take seriously.
                  </p>
                </div>
              </div>
            </div>

            {/* What to Include in a Freelance SOW */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What to Include in a Freelance SOW
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A comprehensive scope of work doesn&apos;t need to be 20 pages long — but it does
                  need to cover these eight essential elements. Miss any one of them and you leave
                  yourself open to misunderstandings.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      Project Overview
                    </h4>
                    <p className="text-sm">
                      A concise description of the project, its goals, and the problem it solves for
                      the client. Sets the context for everything that follows.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      Deliverables
                    </h4>
                    <p className="text-sm">
                      A specific, numbered list of what you will deliver. Be precise — &ldquo;5-page
                      website&rdquo; not &ldquo;a website.&rdquo; This is what you&apos;ll be held to.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Timeline &amp; Milestones
                    </h4>
                    <p className="text-sm">
                      When each deliverable is due, broken into phases or milestones. Include start
                      date, key checkpoints, and final delivery date.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Payment Schedule
                    </h4>
                    <p className="text-sm">
                      How much, when, and how you&apos;ll be paid. Tie payments to milestones — never
                      agree to 100% on completion. Use the{' '}
                      <Link href="/tools/payment-terms-calculator" className="text-teal-400 hover:underline">
                        Payment Terms Calculator
                      </Link>{' '}
                      to optimise this.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">05</span>
                      What&apos;s Included
                    </h4>
                    <p className="text-sm">
                      Explicitly list what&apos;s in scope. If it&apos;s not on this list, it&apos;s
                      not included. This prevents the &ldquo;I assumed that was included&rdquo;
                      conversation.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">06</span>
                      What&apos;s NOT Included
                    </h4>
                    <p className="text-sm">
                      Just as important as inclusions. Call out common assumptions — ongoing maintenance,
                      content writing, hosting, additional pages — so there are no surprises.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">07</span>
                      Revision Policy
                    </h4>
                    <p className="text-sm">
                      How many rounds of revisions are included, what counts as a revision vs a new
                      request, and what additional revisions cost. This alone can save you dozens of
                      hours per year.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">08</span>
                      Terms &amp; Conditions
                    </h4>
                    <p className="text-sm">
                      Cancellation policy, IP ownership, confidentiality, and communication
                      expectations. Keep it simple but cover the essentials.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOW vs Contract */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Scope of Work vs Contract: What&apos;s the Difference?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Freelancers often confuse a scope of work with a contract, or assume one replaces
                  the other. They serve different purposes — and ideally, you should have both.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white font-semibold"></th>
                        <th className="text-left py-3 px-4 text-teal-400 font-semibold">Scope of Work (SOW)</th>
                        <th className="text-left py-3 px-4 text-blue-400 font-semibold">Contract / Agreement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Purpose</td>
                        <td className="py-3 px-4">Defines what will be delivered and when</td>
                        <td className="py-3 px-4">Defines legal rights and obligations</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Focus</td>
                        <td className="py-3 px-4">Deliverables, timelines, milestones</td>
                        <td className="py-3 px-4">Payment terms, liability, IP, disputes</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Tone</td>
                        <td className="py-3 px-4">Project-specific, practical, collaborative</td>
                        <td className="py-3 px-4">Legal, formal, protective</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Changes</td>
                        <td className="py-3 px-4">Updated when scope changes (with mutual agreement)</td>
                        <td className="py-3 px-4">Requires formal amendment</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Created By</td>
                        <td className="py-3 px-4">Freelancer (this tool helps)</td>
                        <td className="py-3 px-4">Usually a lawyer or template</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Legally Binding?</td>
                        <td className="py-3 px-4">Supporting evidence in disputes</td>
                        <td className="py-3 px-4">Yes, fully enforceable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Best Practice</p>
                  <p className="text-sm">
                    Attach your SOW as an appendix to your contract. The contract handles the legal
                    framework; the SOW handles the project specifics. When scope changes, you update
                    the SOW (with a signed change order) without needing to rewrite the entire
                    contract.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Ready to <span className="gradient-text">professionalise your projects?</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps you send professional invoices, track payments, and manage client
              projects — all from one place. Pair your SOW with automated invoicing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/quote-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Quote Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="scope-of-work-generator" category="Invoicing & Documents" />
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
