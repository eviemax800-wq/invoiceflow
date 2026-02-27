import type { Metadata } from 'next';
import Link from 'next/link';
import InvoiceNumberingSystem from './InvoiceNumberingSystem';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title =
  'Invoice Numbering System Generator | Design Professional Invoice Numbers — InvoiceFlow';
const description =
  'Free invoice numbering system generator for freelancers. Design a professional numbering format with custom prefixes, date codes, sequential digits, and client codes. Generate a printable reference card with examples and best practices for consistent invoicing.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'invoice numbering system',
    'how to number invoices freelancer',
    'invoice number format australia',
    'sequential invoice numbering',
    'invoice numbering best practices',
    'invoice number generator free',
    'invoice number format examples',
    'freelance invoice numbering scheme',
    'professional invoice number system',
    'small business invoice numbering',
    'invoice number prefix format',
    'ATO invoice numbering requirements',
  ],
  openGraph: {
    title:
      'Invoice Numbering System Generator — Design Professional Invoice Numbers | InvoiceFlow',
    description:
      'Design a professional invoice numbering system with custom prefixes, date codes, and sequential numbering. Free tool for freelancers and sole traders.',
    url: 'https://www.invoiceflow.au/tools/invoice-numbering-system',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invoice Numbering System Generator — Free Freelance Tool | InvoiceFlow',
    description:
      'Design a professional invoice numbering system with prefixes, date codes, and sequential digits. Free for Australian freelancers.',
  },
  alternates: { canonical: 'https://www.invoiceflow.au/tools/invoice-numbering-system' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Invoice Numbering System Generator for Freelancers',
  description:
    'A 4-step wizard that helps freelancers and sole traders design a professional invoice numbering system. Configure business prefix, date codes, separators, sequential digits, and optional client codes with a live preview. Set advanced options including reset periods, starting numbers, reserved ranges for quotes, and credit note prefixes. Generates a complete numbering scheme with real examples, format explanation, best practice tips, and a printable reference card. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/invoice-numbering-system',
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

export default function InvoiceNumberingSystemPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              <span className="text-cyan-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Invoice Numbering{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                System Generator
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Design a professional invoice numbering system tailored to your business. Choose your
              format, preview real examples, and generate a printable reference card — so every
              invoice is consistent, trackable, and tax-ready.
            </p>
          </div>

          {/* Generator Tool */}
          <InvoiceNumberingSystem />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Invoice Numbering Matters */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Invoice Numbering Matters for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A consistent invoice numbering system is not just good organisation — it is a legal
                  and financial requirement for Australian businesses. The ATO requires that every tax
                  invoice includes a unique identifying number, and your numbering system is what
                  ensures no two invoices share the same number, no numbers are skipped without
                  explanation, and your financial records can be audited in sequence.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="text-cyan-400 text-sm font-bold">ATO</span>
                      Tax Compliance
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-400">
                        Under the GST Act, a valid tax invoice must include a document identification
                        number. The ATO does not prescribe a specific format, but the number must be
                        unique and sequential. A well-designed numbering system makes compliance
                        automatic — you never have to think about whether a number has been used before.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="text-cyan-400 text-sm font-bold">BIZ</span>
                      Professional Image
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-400">
                        Clients notice when your invoices are numbered INV-001, INV-002, INV-003. It
                        signals that you run a structured business, not a side hustle. For corporate
                        clients with accounts payable departments, a consistent numbering format makes
                        your invoices easier to process and pay on time.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="text-cyan-400 text-sm font-bold">REC</span>
                      Record Keeping
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-400">
                        When tax time arrives, your accountant needs to reconcile every invoice against
                        your bank statements. A sequential numbering system makes gaps immediately
                        visible — if INV-047 and INV-049 exist but INV-048 does not, that discrepancy
                        needs explaining. Good numbering prevents these problems entirely.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-400/10 to-teal-500/10 border border-cyan-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-cyan-400 font-medium mb-2">The Hidden Cost of Bad Numbering</p>
                  <p className="text-sm">
                    Freelancers who use random or inconsistent invoice numbers spend an average of 2-3
                    extra hours per quarter reconciling their books. Over a year, that is 8-12 hours of
                    unbillable time — which at a $100/hr rate represents $800-$1,200 in lost
                    productivity. A proper numbering system takes 10 minutes to set up and saves you
                    time every single month.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Invoice Number Format Best Practices */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Invoice Number Format Best Practices (Australian Context)
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  There is no single correct invoice numbering format, but there are principles that
                  make some systems far more practical than others. The best systems balance
                  readability, uniqueness, and information density — giving you useful data at a
                  glance without creating numbers that are difficult to reference over the phone or
                  in emails.
                </p>
                <div className="space-y-4 mt-2">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      Recommended Components
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-cyan-400 font-medium mb-1">Business Prefix (2-4 characters)</p>
                        <p className="text-xs text-slate-400">
                          Use an abbreviation of your business name or initials. Example: &quot;WD&quot;
                          for Web Design Co, &quot;JK&quot; for Jane Kim Consulting. This makes your
                          invoices immediately identifiable in a client&apos;s system and prevents
                          numbering conflicts if you operate multiple business entities.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-cyan-400 font-medium mb-1">Date Component (YYYY or YYMM)</p>
                        <p className="text-xs text-slate-400">
                          Including the year (or year-month) in your invoice number lets you instantly
                          identify when an invoice was issued. For Australian financial year alignment,
                          YYMM is particularly useful — &quot;2507&quot; immediately tells you the invoice
                          belongs to the FY2025-26 period starting July 2025.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-cyan-400 font-medium mb-1">Sequential Number (3-5 digits)</p>
                        <p className="text-xs text-slate-400">
                          Start with at least 3 digits (001, not 1) to keep your numbers uniform length.
                          If you invoice more than 20 times per month, use 4 digits. Most freelancers
                          will never need more than 4 digits (9,999 invoices per reset period), but
                          high-volume businesses should use 5.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-cyan-400 font-medium mb-1">Separator (dash recommended)</p>
                        <p className="text-xs text-slate-400">
                          Dashes (-) are the most universally readable separator. Slashes (/) can cause
                          issues in file systems and URLs. Dots (.) can be confused with decimal points.
                          No separator works for short formats but reduces readability for longer numbers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      Common Formats Used by Australian Freelancers
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-white font-mono mb-1">INV-001, INV-002, INV-003</p>
                        <p className="text-xs text-slate-400">
                          Simple sequential. Easy to understand but provides no date context. You will
                          need to look up the invoice to know when it was issued. Best for freelancers
                          with very low volume (under 5 invoices per month).
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-white font-mono mb-1">INV-2526-001, INV-2526-002</p>
                        <p className="text-xs text-slate-400">
                          Financial year prefix. &quot;2526&quot; = FY2025-26. Resets to 001 each
                          financial year. Excellent for Australian tax compliance — you can immediately
                          see which financial year an invoice belongs to.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-white font-mono mb-1">WD-2507-001, WD-2508-001</p>
                        <p className="text-xs text-slate-400">
                          Business prefix + year-month + sequence. Resets monthly. The most
                          information-dense format — tells you the business, the month, and the
                          invoice position in one glance. Ideal for freelancers invoicing weekly or more.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-white font-mono mb-1">JK-ACME-001, JK-ACME-002</p>
                        <p className="text-xs text-slate-400">
                          Business prefix + client code. Useful when you have long-running retainer
                          clients and want separate numbering per client. However, this can create gaps
                          in your overall sequence — use with care if your accountant expects continuous
                          numbering.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-400/10 to-teal-500/10 border border-cyan-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-cyan-400 font-medium mb-2">Australian Financial Year Tip</p>
                  <p className="text-sm">
                    The Australian financial year runs from 1 July to 30 June. If you reset your
                    invoice numbers yearly, align the reset with 1 July — not 1 January. This makes
                    your numbering match BAS quarters (Q1 = Jul-Sep, Q2 = Oct-Dec, Q3 = Jan-Mar,
                    Q4 = Apr-Jun) and simplifies end-of-year reconciliation with your tax agent.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: How InvoiceFlow Helps */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Automates Your Invoice Numbering
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Once you have designed your numbering system, the next challenge is applying it
                  consistently across every invoice — without manual tracking, without duplicates,
                  and without errors. InvoiceFlow handles this automatically so you never have to
                  think about invoice numbers again.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Auto-Incrementing Numbers
                    </h4>
                    <p className="text-xs text-slate-400">
                      Set your numbering format once and InvoiceFlow assigns the next number
                      automatically every time you create an invoice. No spreadsheets, no mental
                      tracking, no accidental duplicates.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Custom Format Builder
                    </h4>
                    <p className="text-xs text-slate-400">
                      Configure your prefix, date codes, separator, and digit count directly in
                      InvoiceFlow settings. The same system you design with this free tool can be
                      applied to all your invoices automatically.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Automatic Resets
                    </h4>
                    <p className="text-xs text-slate-400">
                      Choose to reset your sequence numbers yearly (aligned to the Australian
                      financial year), monthly, or never. InvoiceFlow handles the reset
                      automatically — your first July invoice is always 001.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Credit Note Numbering
                    </h4>
                    <p className="text-xs text-slate-400">
                      Credit notes get their own prefix and sequence (e.g., CN-2526-001) so they
                      are clearly distinguished from standard invoices in your records and your
                      client&apos;s accounts payable system.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Gap Detection
                    </h4>
                    <p className="text-xs text-slate-400">
                      If a draft invoice is deleted or a number is skipped for any reason,
                      InvoiceFlow flags the gap in your invoice register. This means your records
                      are always audit-ready and your accountant will never have to chase missing
                      numbers.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Multi-Entity Support
                    </h4>
                    <p className="text-xs text-slate-400">
                      If you operate multiple businesses or ABNs, InvoiceFlow lets you configure
                      separate numbering systems for each entity — each with its own prefix, format,
                      and sequence counter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Professional numbers.{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Automatic invoicing.
              </span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow auto-numbers every invoice using the format you choose. Create invoices,
              track payments, and manage your freelance finances — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:opacity-90 transition-opacity"
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
        
        <RelatedTools currentSlug="invoice-numbering-system" category="Invoicing & Documents" />
      </main>

        <footer className="border-t border-white/10 mt-20 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; 2025 InvoiceFlow. Built in Melbourne.</p>
            <div className="flex gap-6">
              <Link href="/tools" className="hover:text-white transition-colors">
                Free Tools
              </Link>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/pricing" className="hover:text-white transition-colors">
                Pricing
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
