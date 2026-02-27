import type { Metadata } from 'next';
import Link from 'next/link';
import ReceiptGenerator from './ReceiptGenerator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title =
  'Free Receipt Generator for Australian Freelancers — Create Payment Receipts | InvoiceFlow';
const description =
  'Generate professional payment receipts for your freelance business. GST-compliant templates with automatic calculations, ABN, payment method tracking, and ATO-aligned formatting. Free — no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'receipt generator free australia',
    'freelance receipt template',
    'payment receipt generator',
    'receipt template sole trader',
    'gst receipt template australia',
    'payment confirmation template',
    'freelance payment receipt',
    'receipt for services rendered',
    'australian receipt template free',
    'ato receipt requirements',
  ],
  openGraph: {
    title: 'Receipt Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional, GST-compliant payment receipts for your Australian freelance business. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/receipt-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Receipt Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional payment receipts for Australian freelancers. GST-compliant, ABN-ready, free.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/receipt-generator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Payment Receipt Generator',
  description:
    'Generate professional payment receipts for Australian freelancers and sole traders. GST-compliant templates with automatic calculations, ABN, payment method tracking, and line items.',
  url: 'https://www.invoiceflow.au/tools/receipt-generator',
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

export default function ReceiptGeneratorPage() {
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
              Payment Receipt{' '}
              <span className="gradient-text">Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Create professional payment receipts for your freelance business. Confirm payments
              received, track payment methods, and maintain ATO-compliant records — with automatic
              GST calculations and ABN formatting.
            </p>
          </div>

          {/* Generator Tool */}
          <ReceiptGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Should Issue Payment Receipts
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A <strong className="text-white">payment receipt</strong> confirms that you&apos;ve
                  received payment from a client. While not always legally required for every
                  transaction, issuing receipts is a best practice that protects both you and your
                  client — and the ATO expects GST-registered businesses to provide them on request.
                </p>
                <p>
                  For Australian freelancers, payment receipts serve three critical purposes: they
                  create a paper trail for your tax records, they provide clients with proof of
                  payment for their own deductions, and they reduce payment disputes by clearly
                  documenting what was paid, when, and for what services.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">5 years</p>
                    <p className="text-xs text-slate-500 mt-1">
                      ATO requirement: keep payment records for at least 5 years
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">28 days</p>
                    <p className="text-xs text-slate-500 mt-1">
                      GST-registered businesses must provide receipts within 28 days of request
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400">$82.50</p>
                    <p className="text-xs text-slate-500 mt-1">
                      ATO threshold for requiring GST details on receipts (incl. GST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What to Include on a Freelance Payment Receipt
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A professional payment receipt should include enough detail for both your records
                  and your client&apos;s. For GST-registered freelancers, the ATO has specific
                  requirements for what constitutes a valid receipt.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Essential Information</h4>
                    <ul className="text-sm space-y-1.5 text-slate-400">
                      <li>Your business name and ABN</li>
                      <li>Client name or company</li>
                      <li>Receipt number (unique identifier)</li>
                      <li>Date payment was received</li>
                      <li>Description of goods or services</li>
                      <li>Amount paid (including GST breakdown)</li>
                      <li>Payment method and reference</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">GST-Registered Requirements</h4>
                    <ul className="text-sm space-y-1.5 text-slate-400">
                      <li>Your ABN must be displayed</li>
                      <li>Show GST amount separately</li>
                      <li>Indicate if price includes GST</li>
                      <li>Issue within 28 days if requested</li>
                      <li>Keep copies for 5 years minimum</li>
                      <li>Link to original invoice if applicable</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-amber-400">Pro tip:</strong> Always include the payment
                    method and reference number (bank transfer reference, card transaction ID, etc.).
                    This makes reconciliation faster at tax time and provides clear evidence if a
                    payment is ever disputed. Use a consistent numbering system (like REC-YYMM-001)
                    so receipts are easy to find and reference.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Receipt vs Invoice vs Tax Invoice — Understanding the Difference
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Freelancers sometimes confuse receipts, invoices, and tax invoices. Each document
                  serves a different purpose in the payment lifecycle.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Document</th>
                        <th className="text-left py-2 text-slate-400 font-medium">Issued</th>
                        <th className="text-left py-2 text-slate-400 font-medium">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 text-white font-medium">Invoice</td>
                        <td className="py-3">Before payment</td>
                        <td className="py-3">Requests payment for goods or services provided</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Tax Invoice</td>
                        <td className="py-3">Before or at payment</td>
                        <td className="py-3">Invoice that meets ATO GST requirements (shows ABN, GST amount)</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Receipt</td>
                        <td className="py-3">After payment</td>
                        <td className="py-3">Confirms payment has been received in full</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-4">
                  The typical workflow is: you send an <strong className="text-white">invoice</strong> to
                  request payment, the client pays, and you issue a <strong className="text-white">receipt</strong> to
                  confirm. If you&apos;re GST-registered, your invoice should already be a tax invoice — and the
                  receipt should also show the GST breakdown so your client can claim their input tax credits.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Automate your entire{' '}
              <span className="gradient-text">payment workflow</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles invoices, payment tracking, and receipts in one place. Send
              invoices, get paid, and automatically issue receipts — all with GST handled for you.
              Pair it with our{' '}
              <Link
                href="/tools/invoice-generator"
                className="text-teal-400 hover:text-teal-300 underline transition-colors"
              >
                Invoice Generator
              </Link>{' '}
              to complete the payment cycle.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="receipt-generator" category="Invoicing & Documents" />
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
