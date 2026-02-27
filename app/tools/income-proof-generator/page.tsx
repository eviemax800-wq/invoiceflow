import type { Metadata } from 'next';
import Link from 'next/link';
import IncomeProofGenerator from './IncomeProofGenerator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title =
  'Freelance Income Proof Generator | Free Self-Employed Income Verification Letter for Australia — InvoiceFlow';
const description =
  'Free income proof letter generator for Australian freelancers and sole traders. Generate professional income declaration letters for rental applications, mortgage applications, car finance and more. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance income proof letter',
    'self employed income verification australia',
    'sole trader income proof rental application',
    'income declaration letter freelancer',
    'self employed proof of income for mortgage australia',
    'freelance income verification letter template',
    'sole trader income proof letter',
    'self employed rental application australia',
    'freelancer proof of income for landlord',
    'contractor income declaration letter',
    'abn income proof letter',
    'self employed proof of income car finance australia',
  ],
  openGraph: {
    title: 'Freelance Income Proof Generator — Free Income Verification Letter for Australian Freelancers | InvoiceFlow',
    description:
      'Generate professional income declaration letters for rental applications, mortgages, car finance and more. Built for Australian freelancers and sole traders. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/income-proof-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Income Proof Generator — Free Tool for Australian Freelancers | InvoiceFlow',
    description:
      'Generate professional income declaration letters for rental applications, mortgages, and financial applications. Free tool for Australian freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/income-proof-generator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Income Proof Generator for Australian Freelancers',
  description:
    'Multi-step wizard that generates professional income declaration letters for self-employed Australians. Supports rental applications, mortgage applications, car finance, personal loans, and other financial applications where freelancers need to prove their income. Includes supporting document checklists and purpose-specific tips. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/income-proof-generator',
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

export default function IncomeProofGeneratorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-400/10 border border-purple-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span className="text-purple-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Freelance Income Proof{' '}
              <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
                Generator
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate a professional income declaration letter for rental applications, mortgage
              applications, car finance, and any situation where you need to prove your
              self-employed income. Tailored for Australian freelancers and sole traders.
            </p>
          </div>

          {/* Generator Tool */}
          <IncomeProofGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Freelancers Need Income Proof Letters */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Need Income Proof Letters
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  When you are employed full-time, proving your income is straightforward — a
                  payslip or a letter from your employer is usually enough. But when you are
                  self-employed, freelancing, or operating as a sole trader, the process becomes
                  significantly more complex. Landlords, banks, and lenders often struggle to assess
                  the financial reliability of freelancers because there is no single employer to
                  vouch for your income.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-sm font-bold">01</span>
                      No Standard Payslip
                    </h4>
                    <p className="text-sm">
                      Unlike employees who receive fortnightly or monthly payslips from an employer,
                      freelancers have no standardised income document. Your income comes from
                      multiple clients, invoices, and projects — making it harder to present a clean,
                      simple proof of income that institutions recognise immediately.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-sm font-bold">02</span>
                      Variable Income Patterns
                    </h4>
                    <p className="text-sm">
                      Freelance income is inherently variable — some months are strong, others are
                      lean. This variability makes landlords and lenders nervous, even when your
                      annual average is solid. A well-structured income declaration letter with
                      supporting documents helps bridge this confidence gap by showing the bigger
                      picture.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-sm font-bold">03</span>
                      Tax Deductions Distort Income
                    </h4>
                    <p className="text-sm">
                      Self-employed Australians legitimately claim business deductions that reduce
                      their taxable income. While this is good for tax, it can make your official
                      income look lower than what you actually earn and spend. Your income proof
                      letter should present both gross and net figures to give the full picture.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-sm font-bold">04</span>
                      Institutional Bias Toward Employment
                    </h4>
                    <p className="text-sm">
                      Many application forms and assessment processes are designed for employees.
                      Fields for &quot;employer name&quot; and &quot;annual salary&quot; do not map cleanly to
                      freelance work. A proactive income declaration letter gets ahead of this by
                      presenting your financial situation in a format that assessors can easily
                      understand and verify.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-400/10 to-violet-500/10 border border-purple-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-purple-400 font-medium mb-2">
                    The Self-Employed Tax Gap
                  </p>
                  <p className="text-sm">
                    According to the ATO, there are over 2.4 million sole traders in Australia. Yet
                    most financial institutions still treat self-employment as a risk factor rather
                    than an income type. The key to overcoming this bias is documentation —
                    specifically, a professional income declaration letter backed by tax returns, BAS
                    statements, and bank records. The more organised and transparent your
                    documentation, the more likely you are to be assessed on the merits of your
                    actual income rather than penalised for your employment structure.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: What Landlords, Banks, and Lenders Want to See */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Landlords, Banks, and Lenders Want to See
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Different institutions look for different things when assessing self-employed
                  income. Understanding what each type of assessor prioritises helps you tailor your
                  application and provide the right supporting documents upfront.
                </p>
                <div className="space-y-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-purple-400/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-400 text-xs font-bold">R</span>
                      </span>
                      Rental Applications — What Agents and Landlords Want
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Primary concern:</span> Can you
                          pay the rent consistently every month? Agents care about regularity more
                          than total annual income.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Key documents:</span> Bank
                          statements showing regular deposits, BAS statements, rental ledger from
                          current landlord, and an income declaration letter.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Income threshold:</span> Most
                          agents want to see monthly income of at least 3x the monthly rent. If your
                          rent is $2,000/month, they want to see $6,000+ monthly income.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Pro tip:</span> Offering to pay
                          3-6 months rent in advance is the single most effective strategy for
                          self-employed rental applicants.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-purple-400/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-400 text-xs font-bold">M</span>
                      </span>
                      Mortgage Applications — What Banks and Brokers Want
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Primary concern:</span> Can you
                          sustain mortgage repayments over 25-30 years? Banks assess long-term
                          earning capacity and stability.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Key documents:</span> 2 full
                          years of tax returns, Notices of Assessment from the ATO, 6 months of
                          business bank statements, and BAS statements.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Income calculation:</span> Banks
                          use your net income (after expenses) averaged over 2 years. They may add
                          back certain non-cash deductions like depreciation.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Pro tip:</span> Use a mortgage
                          broker who specialises in self-employed borrowers — they know which lenders
                          have the most flexible self-employed assessment policies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-purple-400/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-400 text-xs font-bold">F</span>
                      </span>
                      Car Finance &amp; Personal Loans — What Lenders Want
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Primary concern:</span> Can you
                          make the monthly repayments for the term of the loan? Car finance lenders
                          assess affordability over 3-7 years.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Key documents:</span> 1-2 years
                          of tax returns or BAS statements, recent bank statements, and an income
                          declaration letter. Less stringent than mortgage requirements.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Income threshold:</span> Most
                          lenders want your total monthly debt commitments (including the new loan)
                          to be under 40% of your net monthly income.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-slate-400">
                          <span className="text-white font-medium">Pro tip:</span> If the vehicle
                          is for business use, a chattel mortgage may be more tax-effective than a
                          standard car loan, and specialist lenders may be more flexible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Tips for Strengthening Your Income Verification */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Tips for Strengthening Your Income Verification
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A well-prepared income verification package can be the difference between
                  approval and rejection. Here are practical strategies to strengthen your
                  application as a self-employed Australian.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-lg">1.</span> Lodge Your Tax Returns
                      Early
                    </h4>
                    <p className="text-sm">
                      Lodged and assessed tax returns are the gold standard for income proof.
                      If your returns are outstanding, lodge them before applying. A Notice of
                      Assessment from the ATO carries more weight than any self-declaration. Use a
                      registered tax agent who understands freelance income structures.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-lg">2.</span> Keep Business and
                      Personal Separate
                    </h4>
                    <p className="text-sm">
                      Use a dedicated business bank account for all client payments and business
                      expenses. This creates a clean paper trail that assessors can follow easily.
                      Mixing personal and business transactions makes it harder to verify your
                      income and raises red flags with lenders and agents.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-lg">3.</span> Get an Accountant&apos;s
                      Letter
                    </h4>
                    <p className="text-sm">
                      A letter from a registered tax agent or CPA-qualified accountant verifying
                      your income is one of the most powerful supporting documents you can provide.
                      It costs $100-$300 and carries significant weight because it is a third-party
                      verification from a regulated professional.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-lg">4.</span> Provide More Than What
                      Is Asked
                    </h4>
                    <p className="text-sm">
                      Always over-document. If an agent asks for 3 months of bank statements,
                      provide 6. If a lender asks for 1 year of tax returns, provide 2. Providing
                      more evidence than requested signals transparency and confidence — it shows
                      you have nothing to hide and your income is genuinely as declared.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-lg">5.</span> Use Consistent Numbers
                    </h4>
                    <p className="text-sm">
                      Ensure the income figures in your declaration letter match your tax returns,
                      BAS statements, and bank statements. Discrepancies — even honest ones — trigger
                      scrutiny and can delay or derail your application. Cross-check all figures
                      before submitting.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-lg">6.</span> Show Income Stability
                    </h4>
                    <p className="text-sm">
                      If your income varies month to month, highlight the consistency of your
                      annual average rather than individual months. Show multiple years of stable
                      annual income and note any upward trend. Long-term client contracts also
                      demonstrate income stability to assessors.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-400/10 to-violet-500/10 border border-purple-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-purple-400 font-medium mb-2">
                    The Preparation Advantage
                  </p>
                  <p className="text-sm">
                    Self-employed applicants who submit a complete, well-organised income
                    verification package upfront are significantly more likely to be approved —
                    and approved faster. Assessors process hundreds of applications. The easier
                    you make it for them to verify your income, the more favourably your
                    application will be viewed. Preparation is not just about having the right
                    documents — it is about presenting them in a way that tells a clear, credible
                    financial story.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: How InvoiceFlow Helps */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Helps Build Your Financial Paper Trail
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The best income verification strategy starts long before you need to apply for
                  anything. InvoiceFlow helps Australian freelancers build the ongoing financial
                  documentation that makes income proof effortless when the time comes.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-lg">1.</span> Professional Invoices
                    </h4>
                    <p className="text-xs text-slate-400">
                      Every invoice you send through InvoiceFlow is a documented record of income
                      earned. Professional invoices with ABN, GST details, and clear payment terms
                      create the paper trail that landlords and lenders want to see.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-lg">2.</span> Income Tracking
                    </h4>
                    <p className="text-xs text-slate-400">
                      Track your income in real-time with dashboards showing monthly, quarterly,
                      and annual totals. When an agent asks &quot;what is your average monthly
                      income?&quot; you will have an accurate, data-backed answer ready instantly.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-lg">3.</span> Payment Records
                    </h4>
                    <p className="text-xs text-slate-400">
                      Every payment received is logged with date, amount, and client details. This
                      creates a clean payment history that supplements your bank statements and
                      demonstrates consistent income flow from genuine business activity.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-lg">4.</span> Client Documentation
                    </h4>
                    <p className="text-xs text-slate-400">
                      Maintain records of client contracts, project details, and ongoing
                      relationships. Active client contracts demonstrate future income potential —
                      something that is particularly valuable for mortgage and loan applications.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-lg">5.</span> BAS-Ready Reports
                    </h4>
                    <p className="text-xs text-slate-400">
                      Generate reports that align with your BAS lodgements. When your invoicing
                      data, bank statements, and BAS all tell the same consistent story, assessors
                      gain confidence in your declared income.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="text-purple-400 text-lg">6.</span> Export &amp; Share
                    </h4>
                    <p className="text-xs text-slate-400">
                      Export your income reports, invoice history, and payment records as clean
                      PDFs to include with any application. Having professional, branded financial
                      documents signals that you run a legitimate, well-organised business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Build your financial paper trail{' '}
              <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
                before you need it
              </span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, payment tracking, and income documentation — so
              when it is time to apply for a rental, mortgage, or loan, your income proof is already
              built. Professional invoices and real-time income tracking for Australian freelancers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/letter-of-demand"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Letter of Demand Generator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="income-proof-generator" category="Invoicing & Documents" />
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
