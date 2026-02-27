import type { Metadata } from 'next';
import Link from 'next/link';
import InvoiceEmailTemplate from './InvoiceEmailTemplate';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const title = 'Free Invoice Email Template Generator | Professional Invoice Cover Emails — InvoiceFlow';
const description =
  'Generate professional invoice email templates for freelancers and small businesses in Australia. Cover emails for new invoices, overdue reminders, payment thank-yous, and more. Free tool — no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'invoice email template',
    'how to send an invoice email professionally',
    'invoice cover email template freelancer australia',
    'professional invoice email sample',
    'invoice email body text',
    'freelancer invoice email template',
    'send invoice email to client',
    'invoice payment email template',
    'overdue invoice email template',
    'invoice follow up email',
    'invoice reminder email',
    'professional invoice cover letter',
  ],
  openGraph: {
    title: 'Invoice Email Template Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional invoice email templates instantly. New invoices, overdue reminders, thank-you emails, and more. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/invoice-email-template',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invoice Email Template Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional invoice email templates instantly. Cover emails for new invoices, reminders, and more.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/invoice-email-template',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Invoice Email Template Generator',
  description:
    'Generate professional invoice email templates for freelancers and small businesses in Australia. Cover emails for new invoices, overdue reminders, payment thank-yous, and adjustments.',
  url: 'https://www.invoiceflow.au/tools/invoice-email-template',
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

export default function InvoiceEmailTemplatePage() {
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
              <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg flex items-center justify-center">
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
                className="px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-sky-400 hover:to-blue-400 transition-all"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-sky-400 rounded-full" />
              <span className="text-sky-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Invoice Email{' '}
              <span className="gradient-text">Template Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate professional, ready-to-send email templates for invoicing clients.
              Choose from 6 email types — new invoices, overdue reminders, thank-you emails,
              and more — tailored for Australian freelancers and small businesses.
            </p>
          </div>

          {/* Generator */}
          <InvoiceEmailTemplate />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* How to Write a Professional Invoice Email */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Write a Professional Invoice Email
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A well-written invoice email is the difference between getting paid on time and
                  chasing payments for weeks. Here&apos;s a step-by-step guide to writing invoice
                  emails that get results.
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Write a clear, specific subject line.</strong>{' '}
                    Your subject line should include the invoice number and your business name at
                    minimum. Avoid vague subjects like &quot;Invoice attached&quot; — instead, use
                    something like &quot;Invoice #INV-042 from Smith Design Studio — Due 15 March
                    2026&quot;. This makes it easy for clients to find and action your email.
                  </li>
                  <li>
                    <strong className="text-white">Open with context, not demands.</strong>{' '}
                    Start by referencing the work completed or the project name. This reminds the
                    client what the invoice is for and creates a natural lead-in. For example:
                    &quot;Please find attached the invoice for the website redesign project we
                    completed last week.&quot;
                  </li>
                  <li>
                    <strong className="text-white">Include all key details in the body.</strong>{' '}
                    Don&apos;t make clients open the attachment to find the basics. Include the
                    invoice number, total amount (including GST if applicable), due date, and
                    payment method directly in the email body. This reduces friction and speeds
                    up payment.
                  </li>
                  <li>
                    <strong className="text-white">State your payment terms clearly.</strong>{' '}
                    Remind the client of the agreed payment terms — whether it&apos;s 7 days,
                    14 days, or 30 days from the invoice date. In Australia, the standard for
                    freelancers is 14 days, while corporate contracts often default to 30 days.
                  </li>
                  <li>
                    <strong className="text-white">Close with a professional sign-off.</strong>{' '}
                    Thank the client for their business, invite them to reach out with questions,
                    and sign off with your name and contact details. A warm but professional close
                    encourages prompt payment and maintains the relationship.
                  </li>
                </ol>
                <p className="text-sm mt-2">
                  <strong className="text-white">Pro tip:</strong> Always attach the invoice as a
                  PDF — not a Word document or spreadsheet. PDFs look more professional, can&apos;t
                  be accidentally edited, and are universally viewable. If you&apos;re using{' '}
                  <Link
                    href="/signup"
                    className="text-sky-400 hover:text-sky-300 underline underline-offset-2"
                  >
                    InvoiceFlow
                  </Link>
                  , your invoices are automatically generated as branded PDFs with a payment link
                  built in.
                </p>
              </div>
            </div>

            {/* Invoice Email Templates by Situation */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Invoice Email Templates by Situation
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Different situations call for different email approaches. Here&apos;s when to
                  use each template type and what tone to strike.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 text-slate-400 font-medium">Template Type</th>
                        <th className="text-left py-3 text-slate-400 font-medium">When to Use</th>
                        <th className="text-left py-3 text-slate-400 font-medium">Recommended Tone</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 text-white">New Invoice</td>
                        <td className="py-3 text-slate-300">Sending a fresh invoice after completing work or at a billing milestone</td>
                        <td className="py-3"><span className="text-sky-400 text-xs font-medium bg-sky-500/10 px-2 py-0.5 rounded-full">Professional / Friendly</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">Overdue Reminder (7 days)</td>
                        <td className="py-3 text-slate-300">First follow-up when payment is 1-7 days past due</td>
                        <td className="py-3"><span className="text-sky-400 text-xs font-medium bg-sky-500/10 px-2 py-0.5 rounded-full">Friendly</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">Second Follow-up (14 days)</td>
                        <td className="py-3 text-slate-300">When the first reminder was ignored and payment is 7-14 days overdue</td>
                        <td className="py-3"><span className="text-blue-400 text-xs font-medium bg-blue-500/10 px-2 py-0.5 rounded-full">Professional</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">Final Notice (30+ days)</td>
                        <td className="py-3 text-slate-300">Last email before escalation — payment is 30+ days overdue</td>
                        <td className="py-3"><span className="text-rose-400 text-xs font-medium bg-rose-500/10 px-2 py-0.5 rounded-full">Firm</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">Thank You for Payment</td>
                        <td className="py-3 text-slate-300">After receiving payment — confirms receipt and maintains goodwill</td>
                        <td className="py-3"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Friendly / Warm</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">Invoice Adjustment</td>
                        <td className="py-3 text-slate-300">When you need to correct an amount, apply a credit, or issue a revised invoice</td>
                        <td className="py-3"><span className="text-amber-400 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">Professional</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-2">
                  <strong className="text-white">Australian context:</strong> If you&apos;re
                  registered for GST, your invoice email should mention that the amount includes
                  GST. Under ATO requirements, tax invoices for amounts over $82.50 (including GST)
                  must include your ABN, the GST amount, and specific line item details.
                </p>
              </div>
            </div>

            {/* Best Practices for Invoice Emails */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Best Practices for Invoice Emails
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Getting the email right is just as important as getting the invoice right.
                  Follow these best practices to maximise your chances of prompt payment.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Timing Matters</h4>
                    <p className="text-sm">
                      Send your invoice the same day you deliver the work — while the value is
                      fresh in your client&apos;s mind. For recurring work, invoice on the same
                      day each month so clients expect it. Avoid sending invoices on Friday
                      afternoons — Monday or Tuesday mornings get the fastest response.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Subject Line Strategy</h4>
                    <p className="text-sm">
                      Always include your invoice number and business name in the subject line.
                      Adding the due date creates urgency. For overdue reminders, include &quot;Overdue&quot;
                      or &quot;Payment Due&quot; — but avoid ALL CAPS except for final notices.
                      Keep it under 60 characters so it displays fully on mobile.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Attachment Best Practices</h4>
                    <p className="text-sm">
                      Always attach the invoice as a PDF with a clear filename like
                      &quot;INV-042-SmithDesign-March2026.pdf&quot;. Include a payment link in
                      the email body as well — the easier you make it to pay, the faster it
                      happens. Never send invoices as editable documents (Word, Excel).
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Follow-Up Cadence</h4>
                    <p className="text-sm">
                      If payment is overdue: send a friendly reminder at day 3, a professional
                      follow-up at day 7, a firm reminder at day 14, and a final notice at day
                      30. Always keep records of every email sent — you&apos;ll need them if
                      you escalate to a debt collection agency or small claims tribunal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cross-links to other tools */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                More Free Invoice Tools
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  This email template generator works great alongside our other free tools for
                  Australian freelancers and small businesses.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <Link
                    href="/tools/payment-reminder-generator"
                    className="block bg-white/5 rounded-xl p-4 border border-white/10 hover:border-sky-500/30 hover:bg-white/[0.07] transition-all group"
                  >
                    <h4 className="text-white font-semibold mb-2 group-hover:text-sky-400 transition-colors">
                      Payment Reminder Generator
                    </h4>
                    <p className="text-sm">
                      Generate escalating payment reminder emails with 4 tones — from friendly
                      nudge to final notice. Includes interest calculation and legal options.
                    </p>
                  </Link>
                  <Link
                    href="/tools/overdue-follow-up"
                    className="block bg-white/5 rounded-xl p-4 border border-white/10 hover:border-sky-500/30 hover:bg-white/[0.07] transition-all group"
                  >
                    <h4 className="text-white font-semibold mb-2 group-hover:text-sky-400 transition-colors">
                      Overdue Follow-Up Sequence
                    </h4>
                    <p className="text-sm">
                      Plan a complete follow-up sequence for overdue invoices with
                      recommended timing, escalation steps, and template emails for each stage.
                    </p>
                  </Link>
                  <Link
                    href="/tools/invoice-generator"
                    className="block bg-white/5 rounded-xl p-4 border border-white/10 hover:border-sky-500/30 hover:bg-white/[0.07] transition-all group"
                  >
                    <h4 className="text-white font-semibold mb-2 group-hover:text-sky-400 transition-colors">
                      Free Invoice Generator
                    </h4>
                    <p className="text-sm">
                      Create professional, ATO-compliant invoices with GST calculation,
                      ABN validation, and instant PDF download. No signup required.
                    </p>
                  </Link>
                  <Link
                    href="/tools/receipt-generator"
                    className="block bg-white/5 rounded-xl p-4 border border-white/10 hover:border-sky-500/30 hover:bg-white/[0.07] transition-all group"
                  >
                    <h4 className="text-white font-semibold mb-2 group-hover:text-sky-400 transition-colors">
                      Receipt Generator
                    </h4>
                    <p className="text-sm">
                      Generate professional payment receipts for your clients. Confirm payment
                      received with a branded, downloadable receipt document.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Send professional <span className="gradient-text">invoice emails</span> automatically
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow generates branded invoice emails with payment links, automatic reminders,
              and real-time payment tracking. Create invoices, send them, and get paid — all from
              one dashboard built for Australian freelancers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/payment-reminder-generator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Generate Payment Reminders
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="invoice-email-template" category="Invoicing & Documents" />
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
