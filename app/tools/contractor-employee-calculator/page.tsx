import type { Metadata } from 'next';
import Link from 'next/link';
import ContractorEmployeeCalculator from './ContractorEmployeeCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title = 'Contractor vs Employee Calculator Australia | ATO Multi-Factor Test — InvoiceFlow';
const description =
  'Free contractor vs employee classification tool based on the ATO multi-factor test. Determine if a worker is an independent contractor or employee under Australian tax law. 15 key indicators across control, financial, and independence factors.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'contractor vs employee calculator australia',
    'contractor or employee test',
    'ATO contractor employee',
    'independent contractor test australia',
    'employee vs contractor australia',
    'worker classification australia',
    'sham contracting test',
    'contractor employee difference australia',
    'ABN employee test',
    'are you a contractor or employee',
    'ATO multi factor test',
    'independent contractor checklist',
  ],
  openGraph: {
    title: 'Contractor vs Employee Calculator — Free ATO Test | InvoiceFlow',
    description:
      'Determine if a worker is an independent contractor or employee under Australian tax law. Based on the official ATO multi-factor test.',
    url: 'https://www.invoiceflow.au/tools/contractor-employee-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contractor vs Employee Calculator — Free ATO Test | InvoiceFlow',
    description:
      'Are you a contractor or employee? Free tool based on the ATO multi-factor test.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/contractor-employee-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Contractor vs Employee Calculator',
  description:
    'Determine if a worker is an independent contractor or employee under Australian tax law using the ATO multi-factor test.',
  url: 'https://www.invoiceflow.au/tools/contractor-employee-calculator',
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

export default function ContractorEmployeeCalculatorPage() {
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
              Contractor vs Employee{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Are you an independent contractor or an employee? Use this tool based on the ATO
              multi-factor test to assess your working arrangement. Answer 15 key questions across
              control, financial, and independence indicators.
            </p>
          </div>

          {/* Calculator */}
          <ContractorEmployeeCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Why It Matters */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Contractor vs Employee Classification Matters
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Getting worker classification right isn&apos;t just a technicality — it has
                  significant financial and legal consequences for both workers and businesses in
                  Australia. The ATO, Fair Work Ombudsman, and state revenue offices all take
                  misclassification seriously.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">For Workers</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Employees get super, leave, and workers&apos; comp</li>
                      <li>Contractors can claim business deductions</li>
                      <li>Tax obligations differ significantly</li>
                      <li>Unfair dismissal protections (employees only)</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">For Businesses</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Must pay super for employees (11.5%)</li>
                      <li>PAYG withholding obligations</li>
                      <li>Payroll tax and WorkCover premiums</li>
                      <li>Sham contracting penalties up to $93,900/breach</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* The ATO Multi-Factor Test */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                The ATO Multi-Factor Test Explained
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Unlike some countries with simple tests, Australia uses a{' '}
                  <strong className="text-white">multi-factor approach</strong> to determine worker
                  classification. No single factor is decisive — the ATO looks at the totality of the
                  working arrangement. Key areas include:
                </p>
                <div className="space-y-3 mt-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-white font-medium">Control & Direction</p>
                      <p className="text-sm text-slate-400">
                        Who controls how, when, and where the work is done? Employees are typically
                        directed by the employer. Contractors control their own methods.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-white font-medium">Financial Arrangements</p>
                      <p className="text-sm text-slate-400">
                        Who bears the financial risk? Contractors invoice for work, provide their own
                        tools, and risk making a loss. Employees receive regular pay.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-white font-medium">Independence & Structure</p>
                      <p className="text-sm text-slate-400">
                        Does the worker operate independently? Contractors typically have their own ABN,
                        work for multiple clients, and don&apos;t receive employee benefits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sham Contracting */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Sham Contracting in Australia
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">Sham contracting</strong> occurs when an employer
                  disguises an employment relationship as an independent contracting arrangement to
                  avoid paying entitlements like super, leave, and workers&apos; compensation.
                </p>
                <p>
                  Under the <em>Fair Work Act 2009</em>, sham contracting is illegal. Penalties
                  include up to <strong className="text-white">$93,900 per contravention</strong> for
                  individuals and <strong className="text-white">$469,500 for corporations</strong>.
                  The ATO can also backdate superannuation obligations with interest and penalties.
                </p>
                <p>
                  Recent High Court decisions (<em>ZG Operations v Jamsek</em> and{' '}
                  <em>CFMMEU v Personnel Contracting</em>, 2022) have reinforced that the{' '}
                  <strong className="text-white">written contract</strong> is the primary consideration
                  — but only if it reflects the true nature of the relationship.
                </p>
              </div>
            </div>

            {/* Common Scenarios */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Common Scenarios
              </h2>
              <div className="space-y-4 text-slate-300">
                <div className="grid gap-4">
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                    <p className="text-emerald-400 font-semibold text-sm mb-1">Likely Contractor</p>
                    <p className="text-sm">
                      A web developer who works from their own home office, uses their own laptop and
                      software, invoices multiple clients monthly, sets their own schedule, and can
                      subcontract parts of the work. They have their own ABN and professional indemnity
                      insurance.
                    </p>
                  </div>
                  <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
                    <p className="text-blue-400 font-semibold text-sm mb-1">Likely Employee</p>
                    <p className="text-sm">
                      A &quot;contractor&quot; who works exclusively for one company, at their office,
                      during set hours, using the company&apos;s equipment. They receive regular
                      weekly payments, can&apos;t subcontract the work, and the company directs how
                      tasks are performed.
                    </p>
                  </div>
                  <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
                    <p className="text-amber-400 font-semibold text-sm mb-1">Borderline / Seek Advice</p>
                    <p className="text-sm">
                      A graphic designer who works mainly for one agency but occasionally takes other
                      clients. They use the agency&apos;s project management tools but their own design
                      software. They invoice monthly and set their own hours, but can&apos;t delegate
                      the creative work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Ready to start <span className="gradient-text">invoicing</span> as a contractor?
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              If you&apos;re an independent contractor, you need professional invoices.
              InvoiceFlow makes it simple — create GST-compliant invoices, track payments,
              and manage your freelance finances in one place.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="contractor-employee-calculator" category="Tax & Compliance" />
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
