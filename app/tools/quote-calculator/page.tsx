import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteCalculator from './QuoteCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title = 'Freelance Quote & Estimate Calculator Australia | Free Tool — InvoiceFlow';
const description =
  'Free project quote builder for Australian freelancers. Create itemised estimates with line items, expenses, contingency buffer, and GST. Copy your quote summary instantly.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance quote calculator',
    'project estimate calculator australia',
    'freelance estimate template',
    'how to quote freelance work',
    'freelancer project quote builder',
    'freelance pricing calculator',
    'project cost estimate tool',
    'sole trader quote generator',
    'freelance proposal calculator',
    'gst quote calculator australia',
    'how much to charge freelance project',
    'freelance project costing tool',
  ],
  openGraph: {
    title: 'Freelance Quote & Estimate Calculator — Free Tool | InvoiceFlow',
    description:
      'Build professional project quotes with line items, expenses, contingency, and GST. Free calculator for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/quote-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Quote & Estimate Calculator — Free Tool | InvoiceFlow',
    description:
      'Build professional project quotes with line items, expenses, and GST. Free for Australian freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/quote-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Quote & Estimate Calculator',
  description:
    'Build professional project quotes with itemised line items, expenses, contingency buffer, and GST for Australian freelancers and sole traders.',
  url: 'https://www.invoiceflow.au/tools/quote-calculator',
  applicationCategory: 'FinanceApplication',
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

export default function QuoteCalculatorPage() {
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
              Freelance Quote &{' '}
              <span className="gradient-text">Estimate Builder</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Build professional project quotes with itemised line items, expenses, contingency
              buffer, and GST. Copy and send to clients in seconds. Built for Australian freelancers
              and sole traders.
            </p>
          </div>

          {/* Calculator */}
          <QuoteCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* How to Quote */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Quote a Freelance Project
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Quoting correctly is one of the most important skills a freelancer can develop. Quote
                  too low and you&apos;ll burn out. Quote too high without justification and you&apos;ll
                  lose the job. The key is building a <strong className="text-white">structured,
                  transparent estimate</strong> that shows the client exactly what they&apos;re paying for.
                </p>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Break the project into phases.</strong> Discovery,
                    design, development, testing, revisions — each phase has its own time estimate.
                  </li>
                  <li>
                    <strong className="text-white">Estimate hours conservatively.</strong> Add 20-30%
                    more time than you think. Scope creep is inevitable.
                  </li>
                  <li>
                    <strong className="text-white">Include all costs.</strong> Software licenses, stock
                    images, hosting, domain registration — pass-through costs should be itemised
                    separately.
                  </li>
                  <li>
                    <strong className="text-white">Add a contingency buffer.</strong> Industry standard
                    is 10-20%. This protects both you and the client from surprises.
                  </li>
                  <li>
                    <strong className="text-white">Include GST if registered.</strong> If your turnover
                    exceeds $75,000, you must charge 10% GST on all invoices.
                  </li>
                </ol>
              </div>
            </div>

            {/* Contingency Guide */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Contingency Buffer Guide
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A contingency buffer protects you from scope creep, unexpected technical challenges,
                  and client change requests. Here&apos;s how much to add based on project type:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Project Type</th>
                        <th className="text-right py-2 text-slate-400 font-medium">Recommended %</th>
                        <th className="text-left py-2 text-slate-400 font-medium pl-4">Why</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-2 text-white">Repeat / Template Work</td>
                        <td className="py-2 text-right text-emerald-400">5-10%</td>
                        <td className="py-2 text-sm text-slate-400 pl-4">Predictable scope, familiar work</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Standard Website / Design</td>
                        <td className="py-2 text-right text-teal-400">10-15%</td>
                        <td className="py-2 text-sm text-slate-400 pl-4">Client feedback rounds, minor scope changes</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Custom Web App / API</td>
                        <td className="py-2 text-right text-amber-400">15-20%</td>
                        <td className="py-2 text-sm text-slate-400 pl-4">Technical unknowns, integration complexity</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">New Technology / R&D</td>
                        <td className="py-2 text-right text-rose-400">20-30%</td>
                        <td className="py-2 text-sm text-slate-400 pl-4">High uncertainty, learning curve</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Common Quoting Mistakes */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Common Quoting Mistakes Freelancers Make
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Forgetting unbillable time.</strong> Admin, emails,
                    meetings, revisions — they all eat into your effective rate. Factor in at least
                    20-30% unbillable time when quoting.
                  </li>
                  <li>
                    <strong className="text-white">Not itemising the quote.</strong> A single lump sum
                    feels arbitrary. Breaking it into line items builds trust and makes it easier for
                    clients to approve.
                  </li>
                  <li>
                    <strong className="text-white">Quoting before understanding scope.</strong> Always
                    do a discovery phase (even a quick 30-minute call) before quoting. Assumptions lead
                    to underquoting.
                  </li>
                  <li>
                    <strong className="text-white">Ignoring revision limits.</strong> Specify how many
                    rounds of revisions are included. &quot;Unlimited revisions&quot; is a recipe for
                    scope creep and resentment.
                  </li>
                  <li>
                    <strong className="text-white">Not including payment terms.</strong> Your quote
                    should specify when payment is due (e.g., 50% upfront, 50% on completion) and what
                    happens with late payments.
                  </li>
                </ol>
              </div>
            </div>

            {/* Quote vs Invoice */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Quote vs Estimate vs Invoice — What&apos;s the Difference?
              </h2>
              <div className="space-y-4 text-slate-300">
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Quote</h4>
                    <p className="text-sm">
                      A <strong className="text-white">fixed price commitment</strong>. Once accepted,
                      the price doesn&apos;t change (unless scope changes). Valid for a set period
                      (typically 30 days).
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Estimate</h4>
                    <p className="text-sm">
                      An <strong className="text-white">approximate price</strong> based on current
                      understanding. Can change as the project progresses. More flexible but less
                      binding.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Invoice</h4>
                    <p className="text-sm">
                      A <strong className="text-white">request for payment</strong> after work is
                      completed (or at milestones). Must include ABN, GST, and meet ATO requirements.
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Use quotes for fixed-scope projects and estimates for ongoing or exploratory work.
                  Once the client approves, convert your quote into an invoice with{' '}
                  <Link href="/signup" className="text-teal-400 hover:text-teal-300 underline">
                    InvoiceFlow
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Turn quotes into <span className="gradient-text">paid invoices</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow converts your quotes into professional, GST-compliant invoices with one
              click. Track when clients view and pay, with automated reminders for overdue invoices.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="quote-calculator" category="Invoicing & Documents" />
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
