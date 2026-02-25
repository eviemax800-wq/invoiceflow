import type { Metadata } from 'next';
import Link from 'next/link';
import CreditNoteGenerator from './CreditNoteGenerator';

const title =
  'Free Credit Note Generator for Australian Freelancers — Create Professional Credit Notes | InvoiceFlow';
const description =
  'Generate professional credit notes for your freelance business. GST-compliant templates with automatic calculations, ABN, and ATO-aligned formatting. Free — no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'credit note template australia',
    'credit note generator free',
    'how to write a credit note freelancer',
    'credit note template sole trader',
    'gst credit note australia',
    'credit note for overcharge',
    'australian credit note requirements',
    'credit note vs refund',
    'freelance credit note template',
    'ato credit note requirements',
  ],
  openGraph: {
    title: 'Credit Note Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional, GST-compliant credit notes for your Australian freelance business. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/credit-note-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Note Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional credit notes for Australian freelancers. GST-compliant, ABN-ready, free.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/credit-note-generator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Credit Note Generator',
  description:
    'Generate professional credit notes for Australian freelancers and sole traders. GST-compliant templates with automatic calculations, ABN, line items, and ATO-aligned formatting.',
  url: 'https://www.invoiceflow.au/tools/credit-note-generator',
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

export default function CreditNoteGeneratorPage() {
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
              Credit Note{' '}
              <span className="gradient-text">Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Create professional, GST-compliant credit notes for your freelance business.
              Adjust overcharges, issue refunds, or correct invoicing errors — with proper
              ATO-aligned formatting and automatic GST calculations.
            </p>
          </div>

          {/* Generator Tool */}
          <CreditNoteGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Is a Credit Note and When Do Freelancers Need One?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A <strong className="text-white">credit note</strong> (also called a credit memo)
                  is a formal document that reduces the amount a client owes you. It references an
                  original invoice and specifies the adjustment — whether that&apos;s a full reversal,
                  partial refund, pricing correction, or goodwill discount.
                </p>
                <p>
                  For Australian freelancers and sole traders, credit notes are essential for
                  maintaining accurate records with the ATO. If you&apos;re GST-registered, you
                  <strong className="text-white"> must</strong> issue a credit note (called an
                  &quot;adjustment note&quot; under GST law) whenever you reduce the GST payable on
                  a previous taxable supply. This ensures your BAS reporting is accurate and your
                  client can adjust their own GST credits.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">When to Issue a Credit Note</h4>
                    <ul className="text-sm space-y-1.5 text-slate-400">
                      <li>You overcharged on the original invoice</li>
                      <li>Work scope was reduced after invoicing</li>
                      <li>Client returned goods or materials</li>
                      <li>A pricing error needs correcting</li>
                      <li>You issued a duplicate invoice</li>
                      <li>Offering a goodwill discount to retain a client</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">ATO Requirements</h4>
                    <ul className="text-sm space-y-1.5 text-slate-400">
                      <li>Must reference the original invoice number</li>
                      <li>Include your ABN and business name</li>
                      <li>Show the GST adjustment amount (if GST-registered)</li>
                      <li>State the reason for the credit</li>
                      <li>Clearly identify it as a &quot;Credit Note&quot;</li>
                      <li>Keep records for at least 5 years</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Credit Note vs Refund vs Revised Invoice — What&apos;s the Difference?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Freelancers often confuse credit notes with refunds or revised invoices. While they
                  all involve adjusting amounts, they serve different purposes and have different
                  implications for your accounting and GST reporting.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Document</th>
                        <th className="text-left py-2 text-slate-400 font-medium">Purpose</th>
                        <th className="text-left py-2 text-slate-400 font-medium">When to Use</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 text-white font-medium">Credit Note</td>
                        <td className="py-3">Reduces the amount owed on a previous invoice</td>
                        <td className="py-3">Overcharges, partial refunds, scope reductions, goodwill discounts</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Refund</td>
                        <td className="py-3">Returns money already paid by the client</td>
                        <td className="py-3">Client has already paid and you need to return funds</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Revised Invoice</td>
                        <td className="py-3">Replaces the original invoice entirely</td>
                        <td className="py-3">Major errors where the whole invoice needs reissuing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-amber-400">Pro tip:</strong> Never delete or modify an
                    original invoice. Instead, issue a credit note that references it. This maintains
                    a clean audit trail that the ATO expects — and protects you if you&apos;re ever
                    audited. A credit note + original invoice together tell the complete story.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                GST and Credit Notes — What the ATO Requires
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  If you&apos;re registered for GST, the ATO treats credit notes as &quot;adjustment
                  notes&quot; under GST law. When you reduce the price of a previous taxable supply,
                  you must issue an adjustment note within 28 days of the client becoming aware of
                  the adjustment.
                </p>
                <p>
                  The adjustment note must show the GST adjustment amount, your ABN, and reference
                  the original tax invoice. You report the GST adjustment in the BAS period when the
                  credit note is issued — not when the original invoice was issued.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">28 days</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Maximum time to issue an adjustment note after the client knows about the change
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">$82.50</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Threshold — adjustment notes required for GST adjustments over $82.50 (incl. GST)
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">5 years</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Minimum retention period for credit notes and supporting documentation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Manage invoices and credit notes in{' '}
              <span className="gradient-text">one place</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow automatically tracks credit notes against invoices, adjusts GST
              calculations, and keeps your records ATO-ready. Pair it with our{' '}
              <Link
                href="/tools/invoice-generator"
                className="text-teal-400 hover:text-teal-300 underline transition-colors"
              >
                Invoice Generator
              </Link>{' '}
              and{' '}
              <Link
                href="/tools/gst-calculator"
                className="text-teal-400 hover:text-teal-300 underline transition-colors"
              >
                GST Calculator
              </Link>{' '}
              for a complete invoicing workflow.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
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
