import type { Metadata } from 'next';
import Link from 'next/link';
import InvoiceGenerator from './InvoiceGenerator';
import RelatedTools from '../components/RelatedTools';

export const metadata: Metadata = {
  title: 'Free Invoice Generator Australia — Create GST-Compliant Invoices | InvoiceFlow',
  description:
    'Create professional, GST-compliant invoices for free. Add your ABN, line items, GST, and download as PDF. Perfect for Australian freelancers and contractors.',
  keywords: [
    'free invoice generator',
    'invoice template Australia',
    'GST invoice template',
    'freelance invoice generator',
    'ABN invoice',
    'tax invoice template',
    'invoice maker free',
    'Australian invoice template',
    'contractor invoice',
  ],
  openGraph: {
    title: 'Free Invoice Generator Australia | InvoiceFlow',
    description:
      'Create professional, GST-compliant invoices and download as PDF. Free for Australian freelancers.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Invoice Generator Australia | InvoiceFlow',
    description:
      'Create professional, GST-compliant invoices and download as PDF. Free for Australian freelancers.',
  },
  alternates: {
    canonical: '/tools/invoice-generator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'InvoiceFlow Invoice Generator',
  description: 'Free Australian invoice generator with GST support',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  creator: {
    '@type': 'Organization',
    name: 'InvoiceFlow',
    url: 'https://invoiceflow.app',
  },
};

export default function InvoiceGeneratorPage() {
  return (
    <div className="min-h-screen page-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <h1 className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</h1>
          </Link>
          <div className="flex gap-3">
            <Link
              href="/tools"
              className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2"
            >
              Free Tools
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2"
            >
              Pricing
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            100% free — no signup required
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white heading-font mb-4">
            Free <span className="gradient-text">Invoice Generator</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Create professional, GST-compliant invoices in seconds. Add your ABN, line items,
            and download as PDF. Built for Australian freelancers and contractors.
          </p>
        </div>

        <InvoiceGenerator />

        {/* SEO content */}
        <section className="mt-16 space-y-12">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              What Makes a Valid Australian Tax Invoice?
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                Under Australian tax law, a valid tax invoice for sales of <strong className="text-white">$1,000
                or more (including GST)</strong> must include:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-teal-400 font-semibold mb-2">Required elements:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• The words &ldquo;Tax Invoice&rdquo; prominently displayed</li>
                    <li>• Your identity (name or business name)</li>
                    <li>• Your Australian Business Number (ABN)</li>
                    <li>• Invoice date</li>
                    <li>• Description of items or services</li>
                    <li>• GST amount (or that total includes GST)</li>
                    <li>• Buyer&apos;s identity and ABN (for $1,000+)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-cyan-400 font-semibold mb-2">Good practice:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• Unique invoice number</li>
                    <li>• Payment terms (e.g. Net 14, Net 30)</li>
                    <li>• Your bank details for EFT payment</li>
                    <li>• Purchase order number (if provided)</li>
                    <li>• Late payment terms</li>
                    <li>• Contact details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              When to Issue an Invoice
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                If you&apos;re registered for GST, you must issue a tax invoice within <strong className="text-white">28
                days</strong> of the buyer requesting one. For sales under $82.50 (including GST), a
                simplified tax invoice is acceptable — it doesn&apos;t need to show the buyer&apos;s details.
              </p>
              <p>
                Freelancers typically invoice at project milestones or upon completion. For ongoing
                retainers, monthly invoicing on a set date keeps your cash flow predictable.
              </p>
            </div>
          </div>
        </section>

        <RelatedTools currentSlug="invoice-generator" category="Invoicing & Documents" />

        {/* CTA */}
        <section className="mt-16 text-center glass rounded-2xl p-10">
          <h3 className="text-3xl font-bold text-white heading-font mb-4">
            Need More Than a <span className="gradient-text">Template</span>?
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-6">
            InvoiceFlow automates the whole process — create invoices from Gmail threads, track
            payments, send reminders, and get BAS-ready reports. All with AI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-lg glass text-white font-medium hover:bg-white/10 transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-20 py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} InvoiceFlow. Built in Melbourne.</p>
          <div className="flex gap-6">
            <Link href="/tools" className="hover:text-white transition-colors">
              Free Tools
            </Link>
            <Link href="/compare" className="hover:text-white transition-colors">
              Compare
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
  );
}
