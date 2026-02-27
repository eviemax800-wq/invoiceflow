import type { Metadata } from 'next';
import Link from 'next/link';
import TaxInvoiceChecker from './TaxInvoiceChecker';
import RelatedTools from '../components/RelatedTools';

const title =
  'Tax Invoice Compliance Checker | Free ATO Tool — InvoiceFlow';
const description =
  'Free ATO tax invoice compliance checker for Australian freelancers. Enter your invoice details and instantly check if it meets all 7 ATO requirements for a valid tax invoice. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'tax invoice requirements australia',
    'ATO tax invoice checklist',
    'what must be on a tax invoice australia',
    'valid tax invoice requirements',
    'tax invoice vs regular invoice australia',
    'ABN on invoice requirement',
    'GST on tax invoice',
    'tax invoice compliance check',
    'ATO invoice rules freelancer',
    'is my invoice a valid tax invoice',
  ],
  openGraph: {
    title:
      'Tax Invoice Compliance Checker — Free ATO Tool | InvoiceFlow',
    description:
      'Check if your invoice meets all 7 ATO requirements for a valid tax invoice. Instant compliance report with actionable fix advice. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/tax-invoice-checker',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tax Invoice Compliance Checker — Free Freelance Tool | InvoiceFlow',
    description:
      'Check if your invoice meets all 7 ATO requirements for a valid tax invoice. Instant compliance report with pass/fail breakdown and fix advice. Free for Australian freelancers.',
  },
  alternates: { canonical: 'https://www.invoiceflow.au/tools/tax-invoice-checker' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Tax Invoice Compliance Checker for Australian Freelancers',
  description:
    'A 2-step tool that checks whether your invoice meets all ATO requirements for a valid Australian tax invoice. Enter your invoice details via a yes/no checklist, then receive an instant compliance report card showing pass/fail status for each ATO requirement under GST Act s29-70, with specific advice on how to fix any issues. Covers the $82.50 GST threshold, the $1,000 additional requirements, and ABN obligations. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/tax-invoice-checker',
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

export default function TaxInvoiceCheckerPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-400/10 border border-emerald-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full" />
              <span className="text-emerald-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Tax Invoice Compliance{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Checker
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Check whether your invoice meets all ATO requirements for a valid Australian tax
              invoice. Answer a few yes/no questions about your invoice and get an instant
              compliance report with pass/fail results and specific advice on how to fix any issues.
            </p>
          </div>

          {/* Checker Tool */}
          <TaxInvoiceChecker />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: What Makes a Valid Tax Invoice in Australia */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Makes a Valid Tax Invoice in Australia
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Under Australian tax law, a tax invoice is a specific type of document that must
                  meet requirements set out in the GST Act (A New Tax System (Goods and Services Tax)
                  Act 1999), particularly section 29-70. A tax invoice is not the same as a regular
                  invoice — it carries additional information that allows the recipient to claim GST
                  credits on their Business Activity Statement (BAS). If your invoice does not meet
                  all the ATO requirements, your client may not be able to claim the GST credit, which
                  creates friction in the business relationship and can lead to payment delays.
                </p>
                <div className="bg-white/5 rounded-xl p-5">
                  <h4 className="text-white font-semibold mb-3">The 7 ATO Requirements for a Valid Tax Invoice</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-bold flex-shrink-0">1.</span>
                      <p><span className="text-white font-medium">The document must be labelled &quot;Tax Invoice&quot;</span> — this is not optional. The words &quot;Tax Invoice&quot; must appear prominently on the document. An invoice that simply says &quot;Invoice&quot; is not a tax invoice, regardless of what other information it contains.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-bold flex-shrink-0">2.</span>
                      <p><span className="text-white font-medium">The seller&apos;s identity (your name or business name)</span> — the ATO requires the supplier&apos;s identity to be clearly stated. For sole traders, this is your legal name or registered business name.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-bold flex-shrink-0">3.</span>
                      <p><span className="text-white font-medium">The seller&apos;s Australian Business Number (ABN)</span> — every tax invoice must show the supplier&apos;s ABN. Without an ABN, the recipient is required to withhold 47% of the payment under the PAYG withholding rules, and the document cannot be treated as a valid tax invoice.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-bold flex-shrink-0">4.</span>
                      <p><span className="text-white font-medium">The date the invoice was issued</span> — the invoice date is essential for determining the tax period in which the GST is reported on your BAS, and when payment terms begin.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-bold flex-shrink-0">5.</span>
                      <p><span className="text-white font-medium">A description of the goods or services supplied</span> — enough detail for the recipient to understand what was provided. Vague descriptions like &quot;services rendered&quot; may not satisfy ATO requirements during an audit.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-bold flex-shrink-0">6.</span>
                      <p><span className="text-white font-medium">The GST amount (if any)</span> — for taxable supplies of $82.50 or more (GST-inclusive), the tax invoice must show the GST amount separately or state that the total price includes GST. This is a critical requirement — without it, the recipient cannot claim the GST credit.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-bold flex-shrink-0">7.</span>
                      <p><span className="text-white font-medium">The total price including or excluding GST</span> — the total amount must be clearly stated, and it must be clear whether that total is GST-inclusive or GST-exclusive.</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">When Do You Need a Tax Invoice?</h4>
                    <p className="text-sm text-slate-400">
                      You are required to issue a tax invoice when you make a taxable sale and the
                      purchaser requests one. If you are registered for GST, any sale that includes GST
                      is a taxable sale. Your client needs your tax invoice to claim a GST credit on
                      their BAS. You must provide a tax invoice within 28 days of a request. For sales
                      under $82.50 (GST-inclusive), a simplified tax invoice with fewer details is
                      acceptable — but for sales of $82.50 and above, the full requirements apply.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">Tax Invoice vs Regular Invoice</h4>
                    <p className="text-sm text-slate-400">
                      A regular invoice is simply a request for payment — it does not need to meet ATO
                      requirements and does not enable GST credit claims. A tax invoice must meet the
                      specific requirements under s29-70 of the GST Act. If you are not registered for
                      GST, you should issue a regular invoice (not a tax invoice) and must not charge
                      GST. Issuing a tax invoice when you are not GST-registered is misleading and may
                      attract ATO penalties. The key distinction: a tax invoice allows the buyer to
                      claim a GST credit, a regular invoice does not.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-emerald-400/10 to-teal-500/10 border border-emerald-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-emerald-400 font-medium mb-2">The $82.50 Threshold</p>
                  <p className="text-sm">
                    For taxable sales under $82.50 (GST-inclusive), the ATO allows a simplified tax
                    invoice — you do not need to show the buyer&apos;s identity or the GST amount
                    separately. However, for sales of $82.50 or more, the GST amount must be shown
                    separately or you must state that the total includes GST. For invoices over $1,000
                    (GST-inclusive), additional requirements apply: you must show the buyer&apos;s
                    identity (name or ABN) and provide individual line item pricing. Understanding
                    these thresholds is essential for maintaining ATO compliance as a freelancer.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Common Tax Invoice Mistakes */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Common Tax Invoice Mistakes Australian Freelancers Make
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Even experienced freelancers make tax invoice mistakes that can delay payments,
                  create problems at BAS time, or trigger issues during an ATO audit. Many of these
                  mistakes are simple to avoid once you know what to look for. Here are the most
                  common errors we see, and the real-world consequences of each.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent text-sm font-bold">01</span>
                      Missing ABN
                    </h4>
                    <p className="text-sm text-slate-400">
                      This is the single most common error. If your ABN is not on the invoice, the
                      recipient is legally required to withhold 47% of the payment amount under the
                      PAYG withholding &quot;no ABN&quot; rule. Many corporate clients have automated
                      systems that will flag or reject invoices without an ABN. Beyond the withholding
                      risk, the invoice cannot be treated as a valid tax invoice for GST credit
                      purposes.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent text-sm font-bold">02</span>
                      Not Showing GST Separately
                    </h4>
                    <p className="text-sm text-slate-400">
                      For invoices of $82.50 or more (GST-inclusive), the GST amount must be shown
                      separately or the invoice must clearly state that the total price includes GST.
                      Simply writing &quot;$1,100&quot; without indicating the GST component means
                      the document does not qualify as a valid tax invoice. Your client&apos;s
                      bookkeeper will likely send it back, delaying your payment by days or weeks.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent text-sm font-bold">03</span>
                      Wrong Date Format or Missing Date
                    </h4>
                    <p className="text-sm text-slate-400">
                      The invoice date determines which BAS period the GST is reported in — both for
                      you and your client. A missing date means the invoice is incomplete, and many
                      accounting systems will reject it entirely. Use the Australian date format
                      (DD/MM/YYYY) to avoid confusion with American formats. The date should be the
                      date you issue the invoice, not the date the work was completed.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent text-sm font-bold">04</span>
                      Missing &quot;Tax Invoice&quot; Label
                    </h4>
                    <p className="text-sm text-slate-400">
                      Your document must explicitly say &quot;Tax Invoice&quot; at the top. This is
                      a strict ATO requirement — a document titled &quot;Invoice&quot;,
                      &quot;Statement&quot;, or &quot;Bill&quot; is not a tax invoice, even if it
                      contains all the other required information. Many freelancers use generic
                      templates that say &quot;Invoice&quot; and never think to change it. This alone
                      can invalidate the entire document for GST credit purposes.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent text-sm font-bold">05</span>
                      Vague Descriptions
                    </h4>
                    <p className="text-sm text-slate-400">
                      &quot;Professional services&quot; or &quot;consulting work&quot; is not
                      sufficient. The ATO requires enough detail for the nature of the supply to be
                      understood. A good description includes the type of service, the date range it
                      covers, and the specific deliverables. For example: &quot;Website development
                      — homepage redesign and responsive implementation, 12-18 Feb 2026&quot; is
                      far better than &quot;web work&quot;. Detailed descriptions also protect you in
                      payment disputes.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent text-sm font-bold">06</span>
                      Not Distinguishing Taxable vs GST-Free Items
                    </h4>
                    <p className="text-sm text-slate-400">
                      If your invoice includes both taxable and GST-free items (for example, a mix
                      of standard consulting fees and GST-free exported services), each line item
                      must clearly show whether GST applies. The GST amount should only be calculated
                      on the taxable items. Lumping everything together with a single GST figure is
                      incorrect and will cause problems when your client lodges their BAS. Separate
                      your taxable supplies from GST-free supplies on every invoice.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Invoices Over $1,000: Additional Requirements</h4>
                  <p className="text-sm text-slate-400 mb-3">
                    Many freelancers are not aware that invoices over $1,000 (GST-inclusive) have
                    additional requirements beyond the standard 7. For these higher-value invoices,
                    you must also include the buyer&apos;s identity (their name or ABN) and show each
                    line item with its individual price. A single-line invoice for &quot;consulting
                    services — $2,200&quot; is technically non-compliant for amounts over $1,000. You
                    need to break the work down into individually priced line items and include the
                    client&apos;s business name or ABN on the invoice.
                  </p>
                  <p className="text-sm text-slate-400">
                    Failing to meet the $1,000+ requirements means your client cannot claim the GST
                    credit until the invoice is corrected. For a $5,500 invoice, that represents $500
                    in GST credits your client cannot access — they will notice, and they will ask you
                    to reissue. Save yourself the time and embarrassment by getting it right the first
                    time.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-emerald-400/10 to-teal-500/10 border border-emerald-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-emerald-400 font-medium mb-2">The Cost of Getting It Wrong</p>
                  <p className="text-sm">
                    Non-compliant tax invoices do not just create administrative headaches — they have
                    real financial consequences. Your clients cannot claim GST credits without a valid
                    tax invoice, which means they are effectively paying 10% more for your services.
                    In an ATO audit, invoices that do not meet the requirements may have their GST
                    credits denied retrospectively, potentially going back 4 years. The ATO can also
                    impose penalties for persistent non-compliance. For freelancers, the biggest risk
                    is reputational — clients who repeatedly receive non-compliant invoices will look
                    for contractors who make their accounting easier, not harder.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: How InvoiceFlow Ensures Compliance */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Ensures Every Invoice Is ATO-Compliant
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  InvoiceFlow was designed from the ground up for Australian freelancers and sole
                  traders who need every invoice to meet ATO requirements without thinking about it.
                  Instead of memorising compliance rules or checking each invoice manually, InvoiceFlow
                  builds compliance into the invoicing workflow so you can focus on your actual work.
                  Here is how the system handles each aspect of tax invoice compliance automatically.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Auto &quot;Tax Invoice&quot; Label
                    </h4>
                    <p className="text-xs text-slate-400">
                      When you are GST-registered in InvoiceFlow, every invoice is automatically
                      labelled &quot;Tax Invoice&quot; at the top. If you are not GST-registered, it
                      correctly labels as &quot;Invoice&quot; instead — preventing the common mistake
                      of issuing a tax invoice when you should not be. The label switches automatically
                      if your GST registration status changes.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      ABN Validation
                    </h4>
                    <p className="text-xs text-slate-400">
                      InvoiceFlow validates your ABN against the Australian Business Register when you
                      set up your account. Your ABN appears on every invoice automatically — you cannot
                      accidentally send an invoice without it. The system also validates client ABNs
                      when you add them, ensuring your records are correct for invoices over $1,000
                      that require the buyer&apos;s ABN.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Automatic GST Calculation
                    </h4>
                    <p className="text-xs text-slate-400">
                      Enter your prices and InvoiceFlow calculates the GST automatically — showing
                      it as a separate line item on the invoice. You can enter prices as GST-inclusive
                      or GST-exclusive and the system handles the math. For invoices with a mix of
                      taxable and GST-free items, each line item is individually flagged and the GST
                      is calculated only on the taxable portion.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Smart Date Handling
                    </h4>
                    <p className="text-xs text-slate-400">
                      The invoice date is set automatically when you create the invoice, formatted
                      in the Australian standard (DD/MM/YYYY). InvoiceFlow tracks which BAS period
                      each invoice falls into, so your quarterly reporting is always accurate. You
                      can adjust the date if needed, but it is never accidentally blank.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      $1,000+ Compliance
                    </h4>
                    <p className="text-xs text-slate-400">
                      When an invoice total exceeds $1,000 (GST-inclusive), InvoiceFlow automatically
                      checks that the client&apos;s identity is included and that line items are
                      individually priced. If anything is missing, the system alerts you before you
                      send — so you never issue a non-compliant high-value invoice.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      BAS-Ready Records
                    </h4>
                    <p className="text-xs text-slate-400">
                      Every invoice InvoiceFlow generates is stored with its GST data categorised
                      and ready for your BAS lodgement. At the end of each quarter, you can generate
                      a report showing total sales, total GST collected, and a breakdown by client —
                      making BAS preparation a 5-minute task instead of a half-day ordeal.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Compliance Without the Mental Load</h4>
                  <p className="text-sm text-slate-400">
                    The real value of automated compliance is not just avoiding ATO penalties — it is
                    the mental load you no longer carry. Instead of second-guessing every invoice
                    (&quot;Did I include my ABN? Is the GST shown correctly? Does this need the
                    client&apos;s ABN because it&apos;s over $1,000?&quot;), InvoiceFlow handles these
                    checks silently in the background. You type the description, set the amount, and
                    send — knowing every ATO requirement is met. For freelancers sending 10, 20, or
                    50 invoices a month, that compounds into hours of time saved and complete peace of
                    mind at BAS time. Your accountant will notice the difference immediately.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Never send a non-compliant invoice{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                again.
              </span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow builds ATO compliance into every invoice automatically — ABN validation,
              GST calculation, proper labelling, and $1,000+ requirements handled for you. Focus on
              your work, not your paperwork.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/invoice-generator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Invoice Generator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="tax-invoice-checker" category="Tax & Compliance" />
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
