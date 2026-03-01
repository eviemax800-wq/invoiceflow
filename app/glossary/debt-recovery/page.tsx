import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Debt Recovery Australia: How to Recover Unpaid Invoices as a Freelancer — InvoiceFlow',
  description:
    'Learn the debt recovery process in Australia for freelancers. From friendly reminders to letters of demand, small claims tribunals by state, and prevention strategies. Step-by-step guide to recovering unpaid invoices.',
  keywords: [
    'debt recovery australia',
    'how to recover unpaid invoices',
    'debt recovery freelancer',
    'small claims tribunal australia',
    'debt collection process australia',
    'letter of demand australia',
    'unpaid invoice recovery',
    'debt recovery process',
    'freelancer unpaid invoices',
    'small claims court australia',
  ],
  alternates: { canonical: '/glossary/debt-recovery' },
  openGraph: {
    title: 'Debt Recovery Australia: How to Recover Unpaid Invoices as a Freelancer — InvoiceFlow',
    description:
      'Complete guide to debt recovery for Australian freelancers. Escalation timelines, letters of demand, small claims tribunals by state, prevention strategies, and how to get paid what you are owed.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/debt-recovery',
    type: 'article',
  },
};

const BASE_URL = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: `${BASE_URL}/glossary` },
    { '@type': 'ListItem', position: 3, name: 'Debt Recovery', item: `${BASE_URL}/glossary/debt-recovery` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I charge interest on overdue invoices in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but only if your contract or payment terms explicitly state that interest will be charged on overdue invoices. In Victoria, the Penalty Interest Rates Act 1983 sets a default rate (currently around 10% above the RBA cash rate) that can apply to court judgments and contractual debts. Other states have similar provisions. Without a contractual clause, you cannot unilaterally add interest to an overdue invoice. Always include a late payment interest clause in your terms of trade and on every invoice.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I use a debt collection agency instead of recovering the debt myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Consider engaging a debt collection agency when: the debt is more than 90 days overdue, you have exhausted all direct communication (reminders, calls, letters of demand), the debtor is unresponsive or disputing without merit, or the amount owed is significant enough to justify the agency fee (typically 10-25% of the recovered amount). For debts under $5,000, self-recovery through small claims tribunals is often more cost-effective. Debt collectors must comply with the ACCC and ASIC Debt Collection Guideline — they cannot harass, threaten, or mislead debtors.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to file a small claims case in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Filing fees vary by state and claim amount. In NSW (NCAT), fees range from $53 to $535 depending on the amount claimed. In VIC (VCAT), fees start around $65 for claims under $500 and go up to $500+ for larger claims. QLD (QCAT) fees range from $80 to $600. Most states allow you to include the filing fee in your claim amount, so the respondent pays if you win. You do not need a lawyer for small claims — tribunals are designed for self-representation, which keeps costs low for freelancers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the statute of limitations for debt recovery in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The limitation period for recovering a debt in Australia is generally 6 years from the date the debt became due (i.e., the invoice due date). This applies in NSW, VIC, QLD, SA, WA, and TAS under their respective Limitation Acts. In the NT it is also 6 years, and in the ACT it is 6 years for simple contracts. The clock resets if the debtor makes a written acknowledgment of the debt or a part payment. After the limitation period expires, you lose the right to pursue the debt through the courts, so act promptly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I report an unpaid debt to a credit reporting agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As an individual freelancer, you generally cannot directly list a default on someone\'s credit report — only licensed credit providers, debt collection agencies, and certain utilities can do this under the Privacy Act 1988 and the Credit Reporting Code. However, if you engage a licensed debt collection agency, they may be able to list the default (for debts over $150 that are at least 60 days overdue). Mentioning the possibility of credit reporting in your letter of demand can be a powerful motivator, but be careful not to make threats you cannot follow through on.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-debt-recovery', label: '1. What Is Debt Recovery?' },
  { id: 'debt-recovery-process', label: '2. The Debt Recovery Process' },
  { id: 'small-claims-tribunals', label: '3. Small Claims & Tribunals by State' },
  { id: 'letter-of-demand', label: '4. Letter of Demand' },
  { id: 'prevention-strategies', label: '5. Prevention Strategies' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/overdue-invoice-follow-up-generator',
    name: 'Overdue Invoice Follow-Up Generator',
    description: 'Generate professional follow-up emails for overdue invoices at every escalation stage.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    href: '/tools/late-payment-interest-calculator',
    name: 'Late Payment Interest Calculator',
    description: 'Calculate interest owed on overdue invoices using Australian penalty interest rates.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/letter-of-demand-generator',
    name: 'Letter of Demand Generator',
    description: 'Create a legally structured letter of demand with your ABN, invoice details, and deadline.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-aging-report',
    name: 'Invoice Aging Report',
    description: 'Visualise outstanding invoices by 30/60/90/120+ day aging buckets with client breakdown.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid',
    name: 'Getting Paid Guide',
    description: 'Complete strategies for ensuring you get paid on time as an Australian freelancer.',
  },
  {
    href: '/guides/invoicing-guide',
    name: 'Invoicing Guide',
    description: 'How to create professional invoices with the right terms to minimise late payments.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Tax obligations, deductions, and financial planning for Australian sole traders.',
  },
];

export default function DebtRecoveryGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-rose-500/10 to-red-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Debt Recovery</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Cash Flow &amp; Collections
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Debt Recovery{' '}
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
              for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            The process of pursuing and collecting unpaid invoices and outstanding debts. In Australia, unpaid invoices total approximately $26 billion at any given time &mdash; and the average freelancer is owed $8,000 to $15,000 in late payments. Know your rights, follow the escalation process, and get paid what you&apos;re owed.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Australian Law Referenced</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">$26B</span>
              <div>
                <p className="text-white font-medium text-sm">Unpaid Invoices in Australia</p>
                <p className="text-gray-400 text-sm">Approximately $26 billion in outstanding invoices at any given time</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">70%</span>
              <div>
                <p className="text-white font-medium text-sm">Resolved at Letter of Demand</p>
                <p className="text-gray-400 text-sm">70&ndash;80% of debts are paid after receiving a formal letter of demand</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">6yr</span>
              <div>
                <p className="text-white font-medium text-sm">Statute of Limitations</p>
                <p className="text-gray-400 text-sm">You have 6 years from the invoice due date to pursue the debt in court</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">$15K</span>
              <div>
                <p className="text-white font-medium text-sm">Average Owed to Freelancers</p>
                <p className="text-gray-400 text-sm">The average freelancer is owed $8,000&ndash;$15,000 in late payments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-8">
          <h2 className="text-lg font-bold text-white mb-4">Table of Contents</h2>
          <nav className="grid sm:grid-cols-2 gap-2">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-red-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-16">

        {/* Section 1: What Is Debt Recovery? */}
        <section id="what-is-debt-recovery">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Debt Recovery?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Debt recovery is the <strong className="text-white">process of pursuing payment for unpaid invoices and outstanding debts</strong>. For freelancers and sole traders in Australia, it is an unfortunate but common reality &mdash; clients miss payment deadlines, ignore follow-ups, or dispute invoices without legitimate cause. Knowing how to recover what you&apos;re owed is not optional; it is a core business skill.
            </p>
            <p className="text-gray-300 leading-relaxed">
              At any given time, unpaid invoices in Australia total approximately <strong className="text-white">$26 billion</strong>. The average Australian freelancer is owed between <strong className="text-white">$8,000 and $15,000</strong> in late payments. For a sole trader with tight cash flow, even a single unpaid $5,000 invoice can mean missing rent, deferring tax payments, or turning down new work because you cannot afford the upfront costs.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The debt recovery process in Australia follows a general principle of <strong className="text-white">self-recovery first, then formal escalation</strong>. You start with friendly reminders and direct communication. If that fails, you escalate to formal letters of demand, mediation, small claims tribunals, and ultimately debt collection agencies or legal action. Each step increases pressure on the debtor while maintaining your professional reputation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Debt recovery in Australia is governed by a combination of <strong className="text-white">state and territory laws</strong> (each jurisdiction has its own tribunal and limitations legislation) and <strong className="text-white">Australian Consumer Law</strong> under the Competition and Consumer Act 2010. Debt collectors must also comply with the ACCC/ASIC Debt Collection Guideline, which sets out what is and is not acceptable conduct when pursuing debts.
            </p>
            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Key Principle</p>
              <p className="text-gray-400 text-sm">
                Always <strong className="text-gray-200">document everything</strong>. Save every email, text message, and phone call note. If a debt recovery matter goes to a tribunal or court, your paper trail is your evidence. An undocumented verbal agreement is nearly impossible to enforce &mdash; a signed contract with clear payment terms and a trail of follow-up communications is almost always enforceable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The Debt Recovery Process */}
        <section id="debt-recovery-process">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Debt Recovery Process</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Effective debt recovery follows a <strong className="text-white">structured escalation timeline</strong>. Each stage increases the formality and pressure, giving the debtor clear opportunities to pay before you incur the time and cost of formal proceedings. Here is the recommended seven-step process for Australian freelancers.
            </p>

            {/* Escalation Timeline */}
            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">1</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Friendly Reminder &mdash; 1&ndash;7 Days Overdue</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Send a polite email or message reminding the client that payment is overdue. Assume it was an oversight &mdash; most late payments are. Reference the invoice number, amount, and original due date. Keep the tone professional and friendly: <em className="text-gray-300">&quot;Hi [Name], just a quick reminder that Invoice #1234 for $3,500 was due on [date]. Could you let me know when I can expect payment?&quot;</em> This resolves roughly 30&ndash;40% of overdue invoices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm font-bold">2</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Formal Follow-Up &mdash; 14 Days Overdue</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      If the friendly reminder goes unanswered, send a more formal follow-up. Restate the invoice details, attach a copy of the original invoice, and clearly state that payment is now overdue. Mention any late payment terms from your contract. Request a specific response date: <em className="text-gray-300">&quot;Please arrange payment within 7 days or contact me to discuss.&quot;</em> Consider a phone call at this stage &mdash; sometimes a direct conversation uncovers a genuine issue (cash flow problems, invoice lost in their system, etc.).
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold">3</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Final Notice &mdash; 30 Days Overdue</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Issue a formal &quot;final notice&quot; email or letter. Use clear, firm language: the invoice is now 30 days overdue, you expect payment within 7 days, and failure to pay will result in further action. If your contract includes late payment interest, notify the client that interest has begun accruing. Mark the invoice as &quot;OVERDUE&quot; in your records and stop any ongoing work for the client until payment is received.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold">4</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Payment Plan Offer &mdash; 45 Days Overdue</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      If the debtor has communicated financial difficulty, consider offering a structured payment plan. This shows good faith and often recovers more than aggressive tactics. Set clear terms: specific amounts, specific dates, and consequences for missing a payment. Get the payment plan in writing &mdash; even a simple email exchange confirming the terms is sufficient. For example: <em className="text-gray-300">&quot;I understand cash flow is tight. I&apos;m willing to accept $1,750 by [date] and $1,750 by [date]. Please confirm in writing.&quot;</em>
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">5</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Formal Letter of Demand &mdash; 60 Days Overdue</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Issue a formal letter of demand citing the relevant state legislation. This is the critical escalation point &mdash; it signals you are serious about pursuing legal remedies. The letter should include all required elements (see Section 4 below). You can write it yourself or have a solicitor send it on their letterhead for additional weight. A solicitor&apos;s letter typically costs $200&ndash;$500 but significantly increases the response rate. <strong className="text-gray-200">70&ndash;80% of debts are resolved at this stage.</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">6</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Small Claims / Mediation &mdash; 90 Days Overdue</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      If the letter of demand fails, file a claim with your state&apos;s small claims tribunal (see Section 3 for details by state). Many tribunals offer mediation before a hearing &mdash; this is a cost-effective way to reach a resolution without a formal decision. Filing fees are generally low ($50&ndash;$600 depending on the state and claim amount), and you can represent yourself. Most matters are resolved within 2&ndash;4 months of filing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/30 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">7</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Debt Collection Agency or Legal Action &mdash; 120+ Days Overdue</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      For debts that remain unpaid after tribunal or for larger amounts, consider engaging a licensed debt collection agency or pursuing formal legal action through the courts. Debt collectors typically charge 10&ndash;25% of the recovered amount (no win, no fee arrangements are common). For debts above tribunal limits, you may need to engage a solicitor and pursue action through the Magistrates&apos; or District Court. Weigh the cost of recovery against the debt amount &mdash; chasing a $500 debt through court rarely makes financial sense.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Escalation Tip</p>
              <p className="text-gray-400 text-sm">
                At every stage, <strong className="text-gray-200">keep the door open for resolution</strong>. Even in your letter of demand, include a line like: <em className="text-gray-300">&quot;I would prefer to resolve this matter directly with you without involving third parties.&quot;</em> Aggressive, threatening language can backfire &mdash; it may harden the debtor&apos;s position and could even be used against you if the matter goes to a tribunal.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Small Claims & Tribunals by State */}
        <section id="small-claims-tribunals">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Small Claims &amp; Tribunals by State</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Every Australian state and territory has a <strong className="text-white">civil and administrative tribunal</strong> (or equivalent) that handles small claims for unpaid debts. These tribunals are designed to be accessible, affordable, and user-friendly &mdash; you do not need a lawyer, and the processes are far simpler than formal court proceedings. Here is a comparison across all eight jurisdictions.
            </p>

            {/* State Tribunal Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">State</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Tribunal</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Max Claim</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden sm:table-cell">Filing Fee</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden md:table-cell">Timeframe</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">NSW</td>
                      <td className="px-6 py-4 text-red-400 font-medium">NCAT</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">$100,000</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">$53 &ndash; $535</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">2&ndash;4 months</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">VIC</td>
                      <td className="px-6 py-4 text-red-400 font-medium">VCAT</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">$100,000</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">$65 &ndash; $500+</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">2&ndash;3 months</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">QLD</td>
                      <td className="px-6 py-4 text-red-400 font-medium">QCAT</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">$25,000</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">$80 &ndash; $600</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">2&ndash;4 months</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">SA</td>
                      <td className="px-6 py-4 text-red-400 font-medium">SACAT</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">$12,000</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">$75 &ndash; $300</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">1&ndash;3 months</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">WA</td>
                      <td className="px-6 py-4 text-red-400 font-medium">SAT</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">$75,000</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">$90 &ndash; $450</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">2&ndash;4 months</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">TAS</td>
                      <td className="px-6 py-4 text-red-400 font-medium">Magistrates Court</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">$50,000</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">$80 &ndash; $350</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">2&ndash;3 months</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">NT</td>
                      <td className="px-6 py-4 text-red-400 font-medium">NTCAT</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">$25,000</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">$60 &ndash; $250</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">1&ndash;3 months</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">ACT</td>
                      <td className="px-6 py-4 text-red-400 font-medium">ACAT</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">$25,000</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">$70 &ndash; $300</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">1&ndash;3 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Self-Representation</p>
              <p className="text-gray-400 text-sm">
                All Australian small claims tribunals are designed for <strong className="text-gray-200">self-representation</strong>. You do not need a lawyer, and in many tribunals legal representation is not permitted for small claims without leave (permission) from the tribunal. This keeps costs low and ensures the process is accessible for freelancers and small businesses. Bring your contract, invoices, all correspondence, and a clear summary of the debt.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Letter of Demand */}
        <section id="letter-of-demand">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Letter of Demand</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A letter of demand is a <strong className="text-white">formal written notice requiring payment of an outstanding debt</strong>. It is the most powerful tool in your self-recovery arsenal &mdash; <strong className="text-white">70&ndash;80% of debts are resolved</strong> after the debtor receives one. The letter demonstrates that you are serious, legally informed, and prepared to take further action. It also serves as critical evidence if the matter progresses to a tribunal.
            </p>

            {/* What to Include */}
            <div className="rounded-2xl border border-gray-700/50 bg-gray-800/30 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">What to Include in Your Letter of Demand</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded bg-red-500/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400"><strong className="text-gray-200">Your details:</strong> Full name (or business name), ABN, postal address, email, and phone number.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded bg-red-500/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400"><strong className="text-gray-200">Debtor details:</strong> Full name or company name, ABN/ACN (if known), and address.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded bg-red-500/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400"><strong className="text-gray-200">Invoice reference:</strong> Invoice number, date issued, original due date, and exact amount owed (including any accrued interest).</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded bg-red-500/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400"><strong className="text-gray-200">Description of services:</strong> A brief summary of the work completed or goods supplied.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded bg-red-500/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400"><strong className="text-gray-200">Payment deadline:</strong> A specific date, typically 14&ndash;21 days from the date of the letter.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded bg-red-500/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400"><strong className="text-gray-200">Consequences of non-payment:</strong> State clearly what will happen if payment is not received &mdash; e.g., tribunal claim, debt collection agency, credit reporting, additional interest, and legal costs.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded bg-red-500/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400"><strong className="text-gray-200">Legal reference:</strong> Cite the relevant legislation for your state (e.g., Civil Procedure Act 2005 in NSW, VCAT Act 1998 in VIC).</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3">DIY Letter of Demand</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Free to write yourself. Use a professional tone, include all required elements, and send via email with read receipt AND registered post. A physical letter adds weight. Keep a copy of everything. Most effective for debts under $10,000 where the debtor is a small business or individual.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3">Solicitor&apos;s Letter</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Costs $200&ndash;$500 but sent on the solicitor&apos;s letterhead, which significantly increases the response rate. The solicitor ensures all legal requirements are met for your state. Recommended for debts over $10,000, corporate debtors, or when your DIY letter has been ignored. The cost can often be claimed back in tribunal proceedings.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Important</p>
              <p className="text-gray-400 text-sm">
                Only threaten actions you are <strong className="text-gray-200">prepared to follow through on</strong>. Stating you will &quot;commence legal proceedings&quot; and then doing nothing undermines your credibility. If you say you will file with the tribunal in 21 days, file on day 22 if payment has not been received. Empty threats teach debtors they can ignore you.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Prevention Strategies */}
        <section id="prevention-strategies">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Prevention Strategies</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The best debt recovery strategy is <strong className="text-white">prevention</strong>. Structuring your business practices to minimise the risk of non-payment saves you time, stress, and money. Here are the most effective prevention strategies for Australian freelancers.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                  Require Deposits
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Request <strong className="text-gray-200">30&ndash;50% upfront</strong> before starting any work. This reduces your exposure, confirms the client&apos;s ability to pay, and creates psychological commitment. For projects over $5,000, consider 50% upfront, 25% at midpoint, and 25% on completion. Never start work on a new client&apos;s project without a deposit.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  Clear Payment Terms
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Include explicit payment terms on <strong className="text-gray-200">every invoice</strong> &mdash; Net 14 or Net 30 at most. Avoid Net 60 or Net 90 for freelance work. State the due date clearly, not just the payment terms. Include your bank details or payment link directly on the invoice to remove friction. Make paying you as easy as possible.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  Milestone Billing
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  For larger projects, break invoicing into <strong className="text-gray-200">milestones</strong> rather than billing everything at the end. This limits your risk at any single point, gives you early warning if a client is slow to pay, and provides natural &quot;stop-work&quot; points if payment is not forthcoming. Bill at project kickoff, design approval, development completion, and final delivery.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Late Payment Interest
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Include a <strong className="text-gray-200">late payment interest clause</strong> in your contract and on your invoices. In Victoria, the Penalty Interest Rates Act 1983 sets a benchmark rate (typically around 10% above the RBA cash rate). Even if you never charge the interest, having the clause in your terms creates a financial incentive for timely payment and strengthens your position in any dispute.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  Written Contracts
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-gray-200">Never work without a written contract.</strong> It does not need to be a 20-page legal document &mdash; even a simple scope of work email confirmed in writing by the client is enforceable. Include: scope, deliverables, timeline, payment terms, late payment interest, stop-work clause, and dispute resolution process. An email chain clearly confirming terms is legally binding in Australia.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  Stop-Work Clauses
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Include a clause in your contract that allows you to <strong className="text-gray-200">cease work immediately</strong> if any invoice becomes overdue. This protects you from continuing to deliver value while accumulating more unpaid debt. Typical wording: <em className="text-gray-300">&quot;Work will be paused if any invoice remains unpaid 14 days past the due date, and will resume upon full payment.&quot;</em> Also consider personal guarantees for company clients to ensure a director is personally liable.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Credit Checks for Large Projects</p>
              <p className="text-gray-400 text-sm">
                For projects valued at <strong className="text-gray-200">$10,000 or more</strong>, consider running a credit check on the client before commencing work. Services like CreditorWatch, Equifax, and Dun &amp; Bradstreet provide business credit reports showing payment history, court actions, and credit scores. A $30&ndash;$50 credit report can save you from taking on a client with a history of non-payment. If the report raises red flags, require a larger deposit or full prepayment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built specifically for Australian freelancers and sole traders. Here&apos;s how it helps you prevent late payments and recover unpaid invoices faster.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Automatic Payment Reminders</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Set up automated email reminders at 1, 7, 14, and 30 days overdue. InvoiceFlow sends professional follow-up emails on your behalf, so you never miss an escalation window and your clients receive consistent, timely reminders.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Overdue Tracking Dashboard</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  See all overdue invoices at a glance with real-time status tracking. Filter by client, amount, or days overdue. Instantly identify your biggest cash flow risks and prioritise your recovery efforts where they matter most.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Late Payment Interest Calculations</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Automatically calculate interest on overdue invoices using Australian penalty interest rates. Add interest to follow-up invoices or letters of demand with accurate, legally referenced figures that strengthen your recovery position.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Letter of Demand Templates</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Generate professionally formatted letters of demand pre-filled with your ABN, invoice details, accrued interest, and state-specific legal references. Download as PDF and send via email or registered post in minutes.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Payment History per Client</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Track each client&apos;s full payment history &mdash; average days to pay, late payment frequency, and total outstanding. Identify high-risk clients before taking on new work and adjust your terms (larger deposits, shorter payment windows) accordingly.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Aging Reports (30/60/90 Days)</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Generate aging reports that bucket your outstanding invoices into 30, 60, 90, and 120+ day categories. See your total exposure at each aging bracket, identify trends, and trigger escalation actions at the right time. Includes cease-work triggers for clients exceeding your risk tolerance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Related Glossary Terms */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-8">
          <h2 className="text-lg font-bold text-white mb-4">Related Glossary Terms</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/glossary/bad-debt', label: 'Bad Debt' },
              { href: '/glossary/overdue-invoice', label: 'Overdue Invoice' },
              { href: '/glossary/late-payment-interest', label: 'Late Payment Interest' },
              { href: '/glossary/payment-terms', label: 'Payment Terms' },
              { href: '/glossary/invoice-aging', label: 'Invoice Aging' },
              { href: '/glossary/cash-flow', label: 'Cash Flow' },
            ].map((term) => (
              <Link
                key={term.href}
                href={term.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-300 text-sm hover:border-red-500/40 hover:text-red-400 transition-all"
              >
                <svg className="w-3.5 h-3.5 text-red-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                {term.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you chase overdue invoices and recover unpaid debts.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-red-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-red-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-red-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Use tool
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Guides</h2>
        <p className="text-gray-400 text-center mb-8">In-depth guides on getting paid, invoicing, and financial planning for freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-red-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-red-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-red-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read guide
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {(faqSchema.mainEntity as Array<{ '@type': string; name: string; acceptedAnswer: { text: string } }>).map((faq, i) => (
            <details key={i} className="group rounded-xl bg-gray-800/40 border border-gray-700/40">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-red-400 transition-colors">
                {faq.name}
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture />
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Chasing Payments. Start Getting Paid.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers send automatic payment reminders, track overdue invoices, calculate late payment interest, and generate letters of demand. Start for free &mdash; protect your cash flow today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/overdue-invoice-follow-up-generator">
              <Button variant="secondary">Generate a Follow-Up Email</Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Free plan includes 5 invoices per month. No credit card required.
          </p>
        </div>
      </section>
    </div>
  );
}
