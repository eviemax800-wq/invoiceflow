export const metadata = { title: 'Privacy Policy — InvoiceFlow' }

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: February 17, 2026</p>

      <div className="prose prose-sm max-w-none space-y-6 text-slate-600 dark:text-slate-300">
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">1. Information We Collect</h2>
          <p>When you use InvoiceFlow, we collect information you provide directly:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Account information:</strong> Email address and name when you create an account via Google OAuth.</li>
            <li><strong>Gmail data:</strong> With your explicit permission, we access your Gmail to identify and extract invoice emails. We only read emails matching invoice patterns — we never read personal emails.</li>
            <li><strong>Invoice data:</strong> Extracted invoice details (vendor, amount, date, category) are stored in your account.</li>
            <li><strong>Payment information:</strong> Processed securely through Stripe. We do not store credit card details.</li>
            <li><strong>Usage data:</strong> Pages visited, features used, and interaction patterns to improve the product.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To provide and maintain the InvoiceFlow service</li>
            <li>To extract, categorize, and organize your invoices</li>
            <li>To process payments and manage subscriptions</li>
            <li>To send product updates and important notices (you can opt out)</li>
            <li>To improve our AI categorization and product experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">3. Gmail Data Handling</h2>
          <p>InvoiceFlow&apos;s use of Google user data complies with the Google API Services User Data Policy, including the Limited Use requirements. Specifically:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>We only access Gmail data necessary to extract invoices</li>
            <li>We do not share Gmail data with third parties</li>
            <li>We do not use Gmail data for advertising</li>
            <li>You can revoke Gmail access at any time from your Google account settings</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">4. Data Storage & Security</h2>
          <p>Your data is stored securely using Supabase (PostgreSQL) with row-level security policies. All data transfers are encrypted via HTTPS. We use industry-standard security practices to protect your information.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">5. Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Supabase:</strong> Authentication and database</li>
            <li><strong>Google OAuth:</strong> Sign-in and Gmail access</li>
            <li><strong>Google Gemini:</strong> AI-powered invoice categorization</li>
            <li><strong>Stripe:</strong> Payment processing</li>
            <li><strong>Vercel:</strong> Hosting and analytics</li>
            <li><strong>Sentry:</strong> Error monitoring (no personal data collected)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">6. Data Retention</h2>
          <p>Your invoice data is retained for as long as your account is active. If you delete your account, all associated data will be permanently removed within 30 days.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">7. Your Rights</h2>
          <p>You can request access to, correction of, or deletion of your personal data at any time by contacting us at eviemax800@gmail.com.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">8. Contact</h2>
          <p>For privacy-related questions, contact us at eviemax800@gmail.com.</p>
        </section>
      </div>
    </div>
  )
}
