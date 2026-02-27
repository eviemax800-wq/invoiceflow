import type { Metadata } from 'next';
import Link from 'next/link';
import PaymentReminderGenerator from './PaymentReminderGenerator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title = 'Free Payment Reminder Email Generator | Overdue Invoice Templates — InvoiceFlow';
const description =
  'Generate professional payment reminder emails for overdue invoices. 4 tones from friendly to final notice. Free templates for Australian freelancers and small businesses.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'payment reminder email template',
    'overdue invoice reminder',
    'payment reminder email generator',
    'how to chase overdue invoices australia',
    'late payment reminder template',
    'invoice payment reminder',
    'overdue payment email template',
    'debt collection email template australia',
    'overdue invoice email template',
    'payment follow up email',
    'chasing invoices politely',
    'freelancer payment reminder',
  ],
  openGraph: {
    title: 'Payment Reminder Email Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional payment reminder emails for overdue invoices. 4 tones from friendly nudge to final notice. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/payment-reminder-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payment Reminder Email Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional payment reminder emails for overdue invoices. 4 tones from friendly to final notice.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/payment-reminder-generator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Payment Reminder Email Generator',
  description:
    'Generate professional payment reminder emails for overdue invoices. 4 tones from friendly nudge to final notice. Free templates for Australian freelancers and small businesses.',
  url: 'https://www.invoiceflow.au/tools/payment-reminder-generator',
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

export default function PaymentReminderGeneratorPage() {
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
              Payment Reminder{' '}
              <span className="gradient-text">Email Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate professional, polite payment reminder emails for overdue invoices. Choose
              from 4 tones — friendly nudge to final notice — and get a ready-to-send email you
              can copy in seconds.
            </p>
          </div>

          {/* Generator */}
          <PaymentReminderGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* When to Send Payment Reminders */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                When to Send Payment Reminders (Australian Guide)
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Knowing when to send each reminder is just as important as what you say. Follow
                  this timeline to maximise your chances of getting paid while maintaining the
                  client relationship.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 text-slate-400 font-medium">Timing</th>
                        <th className="text-left py-3 text-slate-400 font-medium">Action</th>
                        <th className="text-left py-3 text-slate-400 font-medium">Tone</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 text-white">3 days before due date</td>
                        <td className="py-3 text-slate-300">Courtesy reminder — heads-up that payment is coming due</td>
                        <td className="py-3"><span className="text-teal-400 text-xs font-medium bg-teal-500/10 px-2 py-0.5 rounded-full">Friendly</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">1-3 days overdue</td>
                        <td className="py-3 text-slate-300">Gentle nudge — assume it was an oversight</td>
                        <td className="py-3"><span className="text-teal-400 text-xs font-medium bg-teal-500/10 px-2 py-0.5 rounded-full">Friendly</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">7 days overdue</td>
                        <td className="py-3 text-slate-300">Follow-up email — request payment at earliest convenience</td>
                        <td className="py-3"><span className="text-blue-400 text-xs font-medium bg-blue-500/10 px-2 py-0.5 rounded-full">Professional</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">14 days overdue</td>
                        <td className="py-3 text-slate-300">Firm reminder — emphasise impact on your business</td>
                        <td className="py-3"><span className="text-amber-400 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">Firm</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">30 days overdue</td>
                        <td className="py-3 text-slate-300">Final notice — mention consequences and next steps</td>
                        <td className="py-3"><span className="text-rose-400 text-xs font-medium bg-rose-500/10 px-2 py-0.5 rounded-full">Final Notice</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white">60+ days overdue</td>
                        <td className="py-3 text-slate-300">Consider formal letter of demand or debt collection</td>
                        <td className="py-3"><span className="text-rose-400 text-xs font-medium bg-rose-500/10 px-2 py-0.5 rounded-full">Legal</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-2">
                  Under the{' '}
                  <strong className="text-white">Australian Consumer Law</strong>, you have the
                  right to pursue unpaid invoices. Payment terms should be clearly stated on your
                  invoice — the standard in Australia is 14 or 30 days from the invoice date.
                </p>
              </div>
            </div>

            {/* 5 Tips for Getting Paid Faster */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Tips for Getting Paid Faster
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Set clear payment terms upfront.</strong> Before
                    you start any work, agree on payment terms in writing. Include the due date,
                    accepted payment methods, and any late payment penalties in your contract. The
                    clearer you are upfront, the fewer surprises later.
                  </li>
                  <li>
                    <strong className="text-white">Invoice immediately after delivery.</strong> The
                    longer you wait to send an invoice, the longer you wait to get paid. Send your
                    invoice the same day you deliver the work — while the value is still fresh in
                    your client&apos;s mind.
                  </li>
                  <li>
                    <strong className="text-white">Offer multiple payment options.</strong> Make it
                    as easy as possible for clients to pay. Offer bank transfer, credit card, and
                    online payment links. The fewer friction points, the faster the money arrives.
                  </li>
                  <li>
                    <strong className="text-white">Follow up promptly.</strong> Don&apos;t wait
                    weeks to chase an overdue invoice. A friendly reminder 1-3 days after the due
                    date shows you take your business seriously and keeps the invoice top of mind.
                  </li>
                  <li>
                    <strong className="text-white">Use automated reminders.</strong> Manual
                    follow-ups are time-consuming and easy to forget.{' '}
                    <Link
                      href="/signup"
                      className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
                    >
                      InvoiceFlow sends automatic payment reminders
                    </Link>{' '}
                    at configurable intervals — so you never have to write these emails manually
                    again.
                  </li>
                </ol>
              </div>
            </div>

            {/* Legal Options */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Are Your Legal Options for Unpaid Invoices in Australia?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  If reminders aren&apos;t working and your invoice is significantly overdue, you
                  have several legal options available in Australia. Here&apos;s a brief overview
                  of what you can do.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Letter of Demand</h4>
                    <p className="text-sm">
                      A formal written demand for payment, usually giving 7-14 days to pay. It
                      signals you&apos;re serious and is often the first step before legal action.
                      You can write one yourself or have a solicitor draft it for more weight.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Small Claims Tribunal</h4>
                    <p className="text-sm">
                      Each Australian state has a tribunal for small claims:{' '}
                      <strong className="text-white">VCAT</strong> (Victoria),{' '}
                      <strong className="text-white">NCAT</strong> (NSW),{' '}
                      <strong className="text-white">QCAT</strong> (Queensland). Claims under
                      $10,000-$25,000 (varies by state) can be filed without a lawyer.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Debt Collection Agency</h4>
                    <p className="text-sm">
                      You can engage a licensed debt collector to pursue the payment on your behalf.
                      They typically charge a percentage of the recovered amount (15-25%). This is
                      more hands-off but reduces your recovery.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Statutory Demand (Companies)</h4>
                    <p className="text-sm">
                      If the debtor is a company and owes you more than $4,000, you can issue a
                      statutory demand under the Corporations Act. They have 21 days to pay or
                      dispute — failure to respond can lead to winding-up proceedings.
                    </p>
                  </div>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mt-4">
                  <p className="text-sm text-amber-300">
                    <strong>Disclaimer:</strong> This is general information only and does not
                    constitute legal advice. For advice specific to your situation, consult a
                    qualified legal professional. Laws and thresholds may change — always check
                    the latest figures for your state or territory.
                  </p>
                </div>
              </div>
            </div>

            {/* How InvoiceFlow Automates Payment Reminders */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Automates Payment Reminders
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Writing payment reminder emails manually works — but it&apos;s time-consuming,
                  easy to forget, and honestly, a bit uncomfortable. InvoiceFlow takes the awkward
                  out of getting paid.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Automatic Reminders</h4>
                    <p className="text-sm">
                      Set your preferred reminder schedule — 3 days, 7 days, 14 days after due
                      date — and InvoiceFlow sends professional, branded reminders automatically.
                      No manual effort required.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Payment Status Tracking</h4>
                    <p className="text-sm">
                      See which invoices are paid, pending, or overdue at a glance. InvoiceFlow
                      flags overdue invoices instantly so nothing slips through the cracks.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">One-Click Payment Links</h4>
                    <p className="text-sm">
                      Every invoice includes a payment link. Clients can pay by card or bank
                      transfer directly from the invoice — reducing friction and excuses.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Escalation Logic</h4>
                    <p className="text-sm">
                      InvoiceFlow automatically adjusts the tone of reminders as invoices age —
                      from friendly nudge to firm follow-up — so you don&apos;t have to.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm">
                  Stop spending time writing payment reminder emails. Let InvoiceFlow handle the
                  follow-ups while you focus on delivering great work.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Never write a <span className="gradient-text">payment reminder</span> again
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow sends automatic payment reminders at the right time, in the right tone.
              Create professional invoices, track payments, and get paid faster — with Australian
              tax compliance built in.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/late-payment-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Calculate Late Payment Interest
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="payment-reminder-generator" category="Invoicing & Documents" />
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
