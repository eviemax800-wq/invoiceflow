export const metadata = { title: 'Terms of Service — InvoiceFlow' }

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: February 17, 2026</p>

      <div className="prose prose-sm max-w-none space-y-6 text-slate-600 dark:text-slate-300">
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
          <p>By accessing or using InvoiceFlow (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">2. Description of Service</h2>
          <p>InvoiceFlow is an AI-powered invoice management platform that extracts invoices from your Gmail, categorizes them using artificial intelligence, and provides tools for organization and export. The Service is provided by ASDES.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">3. Accounts</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>You must provide accurate information when creating an account</li>
            <li>You are responsible for maintaining the security of your account</li>
            <li>You must be at least 18 years old to use the Service</li>
            <li>One person or entity may not maintain more than one account</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">4. Pricing & Payments</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Free tier:</strong> Up to 5 invoices per month at no cost</li>
            <li><strong>Pro ($19/mo):</strong> Unlimited invoices, AI categorization, CSV/PDF export</li>
            <li><strong>Premium ($39/mo):</strong> Everything in Pro plus priority support and advanced analytics</li>
          </ul>
          <p>Prices are in USD and may change with 30 days notice. Subscriptions renew automatically unless cancelled.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">5. Refund Policy</h2>
          <p>We offer a <strong>30-day money-back guarantee</strong> on all paid plans. If you&apos;re not satisfied within the first 30 days of your subscription, contact us for a full refund. After 30 days, refunds are issued at our discretion on a prorated basis.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">6. Gmail Access</h2>
          <p>By connecting your Gmail account, you authorize InvoiceFlow to access your email for the sole purpose of identifying and extracting invoice-related emails. You can revoke this access at any time through your Google account settings or by disconnecting Gmail within InvoiceFlow.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">7. Data Accuracy</h2>
          <p>InvoiceFlow uses AI to extract and categorize invoice data. While we strive for accuracy, AI-generated categorizations may contain errors. You are responsible for reviewing and verifying extracted data before using it for financial reporting or tax purposes.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">8. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use the Service for any illegal purpose</li>
            <li>Attempt to reverse engineer or compromise the Service</li>
            <li>Share your account credentials with others</li>
            <li>Use automated systems to access the Service beyond normal use</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">9. Limitation of Liability</h2>
          <p>InvoiceFlow is provided &quot;as is&quot; without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Service. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">10. Changes to Terms</h2>
          <p>We may update these Terms from time to time. We will notify you of material changes via email or in-app notification. Continued use after changes constitutes acceptance.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">11. Contact</h2>
          <p>For questions about these terms, contact us at eviemax800@gmail.com.</p>
        </section>
      </div>
    </div>
  )
}
