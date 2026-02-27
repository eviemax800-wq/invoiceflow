import type { Metadata } from 'next';
import Link from 'next/link';
import PrivacyPolicyGenerator from './PrivacyPolicyGenerator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import FAQSchema from '../components/FAQSchema';

const title =
  'Privacy Policy Generator Australia | Free Template for Freelancers — InvoiceFlow';
const description =
  'Free privacy policy generator for Australian freelancers and small businesses. Generate a professional, Australian Privacy Act compliant privacy policy — customised to your business. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'privacy policy generator australia free',
    'privacy policy template freelancer',
    'website privacy policy template australia',
    'privacy policy generator small business',
    'australian privacy policy template',
    'privacy policy template sole trader',
    'APP compliant privacy policy',
    'privacy act 1988 template',
    'freelance privacy policy generator',
    'small business privacy policy australia',
  ],
  openGraph: {
    title: 'Privacy Policy Generator — Free Australian Template for Freelancers | InvoiceFlow',
    description:
      'Generate a professional, Australian Privacy Act compliant privacy policy for your freelance business or small business. Customised to your data collection practices. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/privacy-policy-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy Generator — Free Australian Template for Freelancers | InvoiceFlow',
    description:
      'Generate a professional, Australian Privacy Act compliant privacy policy for your freelance business. Free — no signup required.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/privacy-policy-generator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Privacy Policy Generator Australia',
  description:
    'Generate a professional, Australian Privacy Act 1988 compliant privacy policy for freelancers and small businesses. Covers data collection, usage, storage, third-party sharing, cookies, GDPR, and Australian Privacy Principles. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/privacy-policy-generator',
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
    question: 'Do freelancers need a privacy policy in Australia?',
    answer:
      'If you collect any personal information from clients or website visitors, even just a name and email address, you should have a privacy policy. While the Australian Privacy Act 1988 technically only applies to businesses with annual turnover above $3 million, having a privacy policy is best practice, increasingly expected by clients, and required by platforms like Google Analytics, Stripe, and Mailchimp.',
  },
  {
    question: 'What does the Australian Privacy Act require?',
    answer:
      'The Privacy Act 1988 (Cth) establishes 13 Australian Privacy Principles (APPs) that regulate how personal information is collected, used, stored, and disclosed. APP 1 requires a clearly expressed, up-to-date privacy policy. APP 5 requires individuals to be notified about how their information will be handled. Penalties for serious breaches can reach up to $50 million for corporations or $2.5 million for individuals.',
  },
  {
    question: 'What are the Australian Privacy Principles (APPs)?',
    answer:
      'The 13 APPs cover the full lifecycle of personal information: open and transparent management (APP 1), anonymity options (APP 2), collection rules (APP 3-5), use and disclosure (APP 6), direct marketing restrictions (APP 7), cross-border data transfers (APP 8), government identifiers (APP 9), data quality (APP 10), security (APP 11), and individual access and correction rights (APP 12-13).',
  },
  {
    question: 'Do small businesses need to comply with the Privacy Act?',
    answer:
      'The Privacy Act generally applies to organisations with annual turnover above $3 million. However, smaller businesses must comply if they trade in personal information, provide health services, are government contractors, or have opted in to coverage. The Australian Government has flagged potential reforms to extend the Act to all businesses regardless of turnover, so compliance is strongly recommended.',
  },
  {
    question: 'What happens if you don\'t have a privacy policy?',
    answer:
      'Without a privacy policy, you risk breaching platform terms of service (Google, Stripe, and Mailchimp all require one), losing client trust (enterprise and government clients increasingly check for privacy policies), and having no documented framework if a data handling dispute arises. You may also face claims of misleading conduct under the Australian Consumer Law for not disclosing your data practices.',
  },
];

export default function PrivacyPolicyGeneratorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-400/10 border border-teal-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-teal-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Privacy Policy{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate a professional, Australian Privacy Act compliant privacy policy for your
              freelance business or small business. Customised to your data collection practices,
              third-party sharing, and compliance requirements — ready to publish on your website.
            </p>
          </div>

          {/* Generator Tool */}
          <PrivacyPolicyGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Freelancers Need a Privacy Policy */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Need a Privacy Policy
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  If you collect any personal information from clients, website visitors, or
                  customers — even just a name and email address — you should have a privacy policy.
                  For Australian freelancers, this is not just good practice; it is increasingly a
                  legal and commercial necessity. Here is why:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      Australian Privacy Principles (APPs)
                    </h4>
                    <p className="text-sm">
                      The Australian Privacy Act 1988 establishes 13 Australian Privacy Principles
                      that regulate how personal information is collected, used, stored, and
                      disclosed. APP 1 requires organisations covered by the Act to have a clearly
                      expressed and up-to-date privacy policy. APP 5 requires that individuals are
                      notified about how their information will be handled at or before the time of
                      collection. Even if you are not technically required to comply (revenue under
                      $3 million), following the APPs is best practice and increasingly expected by
                      clients and platforms.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      Client Trust and Professionalism
                    </h4>
                    <p className="text-sm">
                      Enterprise clients, government agencies, and savvy small businesses
                      increasingly check whether their suppliers have a privacy policy before
                      engaging. A visible, well-written privacy policy on your website signals that
                      you take data protection seriously. It removes friction during client onboarding
                      and positions you as a professional who understands compliance obligations.
                      For freelancers working with international clients, it is often a prerequisite.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Website and Platform Compliance
                    </h4>
                    <p className="text-sm">
                      If you use Google Analytics, run Google Ads, accept payments through Stripe or
                      PayPal, use email marketing tools like Mailchimp, or have a contact form on
                      your website, you are collecting personal information. Most of these platforms
                      require you to have a privacy policy in their terms of service. Google
                      Analytics specifically requires a privacy policy disclosing the use of cookies
                      and data collection. Without one, you risk having your accounts suspended.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Legal Protection for Your Business
                    </h4>
                    <p className="text-sm">
                      A privacy policy sets clear expectations about what data you collect, how you
                      use it, and what rights individuals have. If a dispute arises about how you
                      handled someone&apos;s personal information, your published privacy policy is
                      evidence that you disclosed your practices transparently. Without one, you have
                      no documented framework to fall back on. It also protects you from claims of
                      deceptive or misleading conduct under the Australian Consumer Law.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-400/10 to-cyan-500/10 border border-teal-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Bottom Line</p>
                  <p className="text-sm">
                    Every freelancer who has a website, sends invoices, collects client details, or
                    uses third-party tools should have a privacy policy. It takes minutes to generate
                    one with this tool, and it protects both you and the people whose data you handle.
                    Publish it on your website and link to it from your email footer, invoices, and
                    client onboarding documents.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Australian Privacy Act 1988 */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Australian Privacy Act 1988: What Freelancers Need to Know
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The Privacy Act 1988 (Cth) is Australia&apos;s primary legislation for protecting
                  personal information. It establishes the Australian Privacy Principles (APPs) and
                  gives the Office of the Australian Information Commissioner (OAIC) the power to
                  investigate complaints and enforce compliance. Here is what freelancers need to
                  understand:
                </p>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">When Does the Privacy Act Apply to Freelancers?</h4>
                  <p className="text-sm mb-3">
                    The Privacy Act generally applies to organisations with annual turnover of more
                    than $3 million. However, it also applies to smaller businesses that:
                  </p>
                  <ul className="text-sm space-y-2 ml-4 list-disc list-outside">
                    <li>Trade in personal information (e.g., selling mailing lists)</li>
                    <li>Provide health services and hold health information</li>
                    <li>Are related to an organisation covered by the Act</li>
                    <li>Are contracted service providers to the Australian Government</li>
                    <li>Operate a residential tenancy database</li>
                    <li>Have opted in to be covered by the Act</li>
                  </ul>
                  <p className="text-sm mt-3 text-slate-400">
                    Even if you are not legally required to comply, following the APPs is considered
                    best practice and is increasingly expected by clients, especially enterprise and
                    government clients. The Australian Government has also flagged potential reforms
                    to extend the Act to all businesses regardless of turnover.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">The 13 Australian Privacy Principles (APPs)</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-teal-400 font-semibold mb-1">APP 1</p>
                      <p className="text-sm font-medium text-white">Open and transparent management</p>
                      <p className="text-xs text-slate-500 mt-1">Requires a clearly expressed, up-to-date privacy policy</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-teal-400 font-semibold mb-1">APP 2</p>
                      <p className="text-sm font-medium text-white">Anonymity and pseudonymity</p>
                      <p className="text-xs text-slate-500 mt-1">Individuals can deal with you anonymously where practicable</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-teal-400 font-semibold mb-1">APP 3</p>
                      <p className="text-sm font-medium text-white">Collection of solicited information</p>
                      <p className="text-xs text-slate-500 mt-1">Only collect information reasonably necessary for your functions</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-teal-400 font-semibold mb-1">APP 4</p>
                      <p className="text-sm font-medium text-white">Dealing with unsolicited information</p>
                      <p className="text-xs text-slate-500 mt-1">Destroy or de-identify unsolicited information you do not need</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-teal-400 font-semibold mb-1">APP 5</p>
                      <p className="text-sm font-medium text-white">Notification of collection</p>
                      <p className="text-xs text-slate-500 mt-1">Tell individuals what information you collect and why</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-teal-400 font-semibold mb-1">APP 6</p>
                      <p className="text-sm font-medium text-white">Use or disclosure</p>
                      <p className="text-xs text-slate-500 mt-1">Only use information for the purpose it was collected</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-teal-400 font-semibold mb-1">APP 7</p>
                      <p className="text-sm font-medium text-white">Direct marketing</p>
                      <p className="text-xs text-slate-500 mt-1">Restrictions on using personal information for marketing</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-teal-400 font-semibold mb-1">APP 8</p>
                      <p className="text-sm font-medium text-white">Cross-border disclosure</p>
                      <p className="text-xs text-slate-500 mt-1">Requirements for transferring data overseas</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-teal-400 font-semibold mb-1">APP 9</p>
                      <p className="text-sm font-medium text-white">Adoption of government identifiers</p>
                      <p className="text-xs text-slate-500 mt-1">Do not adopt government identifiers as your own</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-teal-400 font-semibold mb-1">APP 10</p>
                      <p className="text-sm font-medium text-white">Quality of personal information</p>
                      <p className="text-xs text-slate-500 mt-1">Take reasonable steps to ensure data is accurate and current</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-teal-400 font-semibold mb-1">APP 11</p>
                      <p className="text-sm font-medium text-white">Security of personal information</p>
                      <p className="text-xs text-slate-500 mt-1">Protect information from misuse, loss, and unauthorised access</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-teal-400 font-semibold mb-1">APP 12</p>
                      <p className="text-sm font-medium text-white">Access to personal information</p>
                      <p className="text-xs text-slate-500 mt-1">Individuals can request access to their information</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 sm:col-span-2">
                      <p className="text-xs text-teal-400 font-semibold mb-1">APP 13</p>
                      <p className="text-sm font-medium text-white">Correction of personal information</p>
                      <p className="text-xs text-slate-500 mt-1">Individuals can request correction of inaccurate information</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Penalties for Non-Compliance</h4>
                  <p className="text-sm">
                    The OAIC can investigate complaints and take enforcement action for serious or
                    repeated breaches of the APPs. Penalties for serious or repeated interferences
                    with privacy can reach up to $50 million for bodies corporate, three times the
                    value of any benefit obtained from the breach, or 30% of adjusted turnover during
                    the breach period (whichever is greatest). For individuals, the maximum penalty
                    is $2.5 million. Even for smaller breaches, the reputational damage from an OAIC
                    investigation can be significant. The Notifiable Data Breaches (NDB) scheme also
                    requires organisations to notify affected individuals and the OAIC when a data
                    breach is likely to result in serious harm.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Key Elements of a Privacy Policy */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Key Elements of a Privacy Policy
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A comprehensive privacy policy should cover all aspects of how you handle personal
                  information. Missing key elements can leave gaps in your compliance and erode
                  client trust. Here is what must be included:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      What Information You Collect
                    </h4>
                    <p className="text-sm">
                      List every type of personal information you collect — names, email addresses,
                      phone numbers, payment details, IP addresses, website analytics data, and any
                      other categories relevant to your business. Be specific. Vague statements like
                      &ldquo;we may collect some personal information&rdquo; do not satisfy APP 1 or
                      APP 5 requirements and undermine trust.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      How You Collect Information
                    </h4>
                    <p className="text-sm">
                      Explain the methods you use to collect data — directly from individuals via
                      forms, emails, or phone calls; through cookies and website analytics; from
                      third-party sources; via payment processors; or through social media
                      interactions. APP 3 requires that you only collect information by lawful and
                      fair means, and APP 5 requires transparency about your collection methods.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      How You Use and Disclose Information
                    </h4>
                    <p className="text-sm">
                      Under APP 6, you must explain the purposes for which you use personal
                      information — providing services, processing payments, marketing, improving
                      your services, legal compliance. Also disclose who you share data with:
                      payment processors, cloud providers, email marketing tools, analytics services,
                      government bodies (ATO), and professional advisors. If you do not share data
                      with anyone, say so explicitly.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Data Security and Retention
                    </h4>
                    <p className="text-sm">
                      APP 11 requires you to take reasonable steps to protect personal information
                      from misuse, interference, loss, and unauthorised access. Describe your
                      security measures — encryption, secure hosting, access controls, regular
                      reviews. Also state how long you retain data and why. For example, the ATO
                      requires financial records to be kept for 7 years, which affects how long you
                      retain client billing information.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">05</span>
                      Individual Rights
                    </h4>
                    <p className="text-sm">
                      Under APP 12 and APP 13, individuals have the right to access their personal
                      information and request corrections. Your privacy policy must explain how
                      individuals can exercise these rights, including how to make a request and your
                      expected response timeframe. Also include information about how to make a
                      complaint to the OAIC if they are unsatisfied with your handling of their data.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">06</span>
                      Contact Information and Updates
                    </h4>
                    <p className="text-sm">
                      Include clear contact details for privacy enquiries — a dedicated email
                      address is ideal. State how you will notify individuals of changes to the
                      privacy policy (e.g., updating the policy on your website with a revised
                      date). APP 1 requires that your privacy policy is up to date, so commit to
                      reviewing it regularly and updating it whenever your data practices change.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-400/10 to-cyan-500/10 border border-teal-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Common Mistakes to Avoid</p>
                  <ul className="text-sm space-y-2">
                    <li><strong>Copying another business&apos;s policy:</strong> Your privacy policy should reflect your actual practices, not someone else&apos;s. A copied policy that does not match your business is worse than no policy.</li>
                    <li><strong>Using overly legal language:</strong> The OAIC recommends that privacy policies be written in plain, clear language that is easy to understand. Avoid unnecessary jargon.</li>
                    <li><strong>Not updating after changes:</strong> If you add a new analytics tool, switch payment providers, or start a newsletter, update your privacy policy to reflect these changes.</li>
                    <li><strong>Forgetting cookies and analytics:</strong> If your website uses cookies (including Google Analytics), you must disclose this in your privacy policy.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Privacy Compliance Checklist */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Privacy Compliance Checklist for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Having a privacy policy is step one. Actual compliance requires ongoing attention
                  to how you handle personal information in practice. Use this checklist to audit
                  your data practices and ensure you are meeting your obligations:
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-400/20 border border-teal-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Publish a Privacy Policy on Your Website</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Make it easily accessible — link from your footer, contact page, and any
                        forms that collect personal information. Include the date it was last updated.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-400/20 border border-teal-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Audit Your Data Collection</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Map out every point where you collect personal information — website forms,
                        email sign-ups, payment processing, invoicing, social media, phone calls.
                        Know exactly what data you hold and where it is stored.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-400/20 border border-teal-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Minimise Data Collection</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Only collect information you actually need for your business functions (APP 3).
                        If you do not need a phone number, do not ask for one. Less data means less
                        risk and fewer compliance obligations.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-400/20 border border-teal-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-400 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Secure Your Data</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Use strong passwords, enable two-factor authentication on all accounts, use
                        encrypted storage, and ensure your website uses HTTPS. If you use cloud
                        services, verify they have appropriate security certifications. Review access
                        regularly — only you (and necessary subcontractors under appropriate
                        agreements) should have access to client data.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-400/20 border border-teal-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-400 text-xs font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Set Up a Data Breach Response Plan</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Know what to do if data is compromised. Under the Notifiable Data Breaches
                        scheme, organisations covered by the Privacy Act must notify affected
                        individuals and the OAIC when a breach is likely to result in serious harm.
                        Even if you are not covered, having a plan demonstrates professionalism.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-400/20 border border-teal-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-400 text-xs font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Review Third-Party Services</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Check the privacy practices of every tool and service you use — payment
                        processors, email marketing tools, analytics platforms, cloud storage. Ensure
                        they handle data appropriately. If any transfer data overseas, document the
                        countries involved and ensure adequate protections are in place (APP 8).
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-400/20 border border-teal-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-400 text-xs font-bold">7</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Handle Access and Correction Requests</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Have a process for responding when someone asks to see or correct their data
                        (APP 12, APP 13). Respond within 30 days. If you refuse a request, provide
                        a written explanation. Keep records of all requests and your responses.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-400/20 border border-teal-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-400 text-xs font-bold">8</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Review and Update Annually</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Review your privacy policy at least once a year or whenever your data
                        practices change. New tools, new services, new marketing channels — any
                        change in how you collect, use, or share data should trigger a policy update.
                        Record the date of each review.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-400/10 to-cyan-500/10 border border-teal-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Start Today</p>
                  <p className="text-sm">
                    Use this generator to create your privacy policy in minutes, then work through
                    the checklist above to ensure your actual practices match what you have published.
                    Privacy compliance is not a one-time task — it is an ongoing commitment to
                    handling personal information responsibly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <EmailCapture />
          <RelatedTools currentSlug="privacy-policy-generator" category="Invoicing & Documents" />

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Protect client data and{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">get paid with confidence</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, GST calculations, and payment tracking — with
              built-in privacy and compliance features. Professional invoices, on time, every time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/contract-generator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Contract Generator
              </Link>
            </div>
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
