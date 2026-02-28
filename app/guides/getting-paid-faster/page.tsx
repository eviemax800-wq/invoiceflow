import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Getting Paid Faster: A Freelancer\'s Guide to On-Time Payments — InvoiceFlow',
  description:
    'Proven strategies for Australian freelancers to reduce late payments, set clear terms, handle overdue invoices, and protect cash flow. Includes follow-up templates and debt recovery advice.',
  alternates: { canonical: '/guides/getting-paid-faster' },
  keywords: [
    'getting paid faster freelancer',
    'late payment freelancer australia',
    'overdue invoice follow up',
    'freelancer cash flow tips',
    'how to chase invoices',
    'payment terms freelancer',
  ],
  openGraph: {
    title: 'Getting Paid Faster: A Freelancer\'s Guide',
    description: 'Reduce late payments by 80% with these proven strategies for Australian freelancers.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://invoiceflow-teal.vercel.app/guides' },
    { '@type': 'ListItem', position: 3, name: 'Getting Paid Faster', item: 'https://invoiceflow-teal.vercel.app/guides/getting-paid-faster' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should I do when a client doesn\'t pay on time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Follow a structured escalation: Day 1 overdue — send a friendly email reminder. Day 7 — send a firmer follow-up mentioning late payment terms. Day 14 — call the client directly. Day 21 — send a formal letter of demand. Day 30+ — consider a debt collection agency or small claims tribunal (VCAT, NCAT, etc.). The key is to act early — the longer you wait, the less likely you are to be paid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I charge interest on late payments in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can charge interest on late payments if this is stated in your contract or terms of service. The typical rate is 1.5-2% per month (18-24% per annum) or 2% above the RBA cash rate. You must inform the client of the interest terms before work begins — you cannot retroactively add interest charges. Our Late Payment Interest Calculator can help you calculate the exact amount.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I ask for a deposit before starting work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, deposits are standard practice for freelancers in Australia. A 30-50% upfront deposit is common for new clients, large projects ($2K+), or long-term engagements. It demonstrates client commitment, covers your initial costs, and reduces the risk of non-payment. Some freelancers charge 100% upfront for small jobs under $500.',
      },
    },
    {
      '@type': 'Question',
      name: 'What payment methods should I accept as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bank transfer (direct deposit) is the most common and cheapest method in Australia — no fees for domestic transfers. Also consider: PayID (instant transfers linked to your phone/email), Stripe or Square (for card payments, 1.75-2.9% fees), PayPal (2.6% + $0.30 per transaction), and Wise (for international clients, lowest forex fees). Offer at least 2 options to make it easy for clients to pay.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I write off a bad debt for tax purposes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can claim a tax deduction for bad debts if: the debt was included in your assessable income, you have taken reasonable steps to recover it, and you have genuinely written it off in your records during the financial year. Keep documentation of all recovery attempts. If you are GST-registered, you can also claim a GST adjustment for the unpaid amount. Consult your accountant for specific advice.',
      },
    },
  ],
};

const sections = [
  {
    id: 'prevention',
    title: 'Prevention: Set Up for Success',
    content: `The best way to handle late payments is to prevent them. Here are the systems top-earning freelancers use:

**1. Written agreements before any work starts**
Never start work on a handshake. Even for small jobs, send a scope document or contract that includes: scope of work, payment amount, payment terms, late payment penalties, and cancellation terms.

**2. Invoice immediately**
Send your invoice the moment work is delivered — or even before delivery for milestone-based projects. Every day you delay invoicing adds a day to your payment timeline.

**3. Shorter payment terms for new clients**
New clients haven't earned Net 30 terms. Start with Net 7 or require a 50% deposit. Extend to Net 14 or Net 30 after they've proven reliable.

**4. Make payment stupidly easy**
Include bank details, PayID, and a payment link on every invoice. The more friction you add, the more excuses clients have. One-click payment through Stripe or a direct BSB/account number works best.

**5. Automate payment reminders**
Set up automatic reminders: 3 days before due, on due date, and 3 days after due. InvoiceFlow handles this automatically.`,
  },
  {
    id: 'deposits',
    title: 'The Deposit Strategy',
    content: `Deposits are your most powerful tool against non-payment. Here's how to implement them:

**When to require deposits:**
- New clients (always)
- Projects over $2,000
- Projects lasting more than 2 weeks
- Clients who have previously paid late
- Custom or non-transferable work

**How much to charge:**
- Small projects (under $1,000): 50-100% upfront
- Medium projects ($1,000-$5,000): 50% upfront, 50% on completion
- Large projects ($5,000+): 30% upfront, 30% at midpoint, 40% on completion
- Retainers: Full month upfront, billed monthly in advance

**How to frame it:**
Don't call it a "deposit" — call it a "project initiation fee" or "scheduling fee." This frames it as standard business practice rather than a trust issue.

**Script:** "To secure your project dates and begin work, we require a 50% project initiation fee. The remaining balance is due upon delivery. This is standard for all our clients."

Most clients expect deposits. Those who refuse are often the ones who won't pay the final invoice either.`,
  },
  {
    id: 'follow-up',
    title: 'The Follow-Up Framework',
    content: `When an invoice goes overdue, follow this escalation timeline:

**Day 1 overdue — Friendly reminder**
Subject: "Quick reminder: Invoice #2026-015 was due yesterday"
Tone: Light, assumes they forgot. Attach the invoice again.

**Day 7 overdue — Firm follow-up**
Subject: "Invoice #2026-015 is now 7 days overdue"
Tone: Professional but direct. Mention your late payment terms. Ask for a specific payment date.

**Day 14 overdue — Phone call**
Call the client directly. Email is easy to ignore; calls are not. Be professional: "I'm following up on Invoice #2026-015 which is now two weeks overdue. When can I expect payment?"

**Day 21 overdue — Formal letter of demand**
Send a written letter of demand (email is fine) stating the amount owed, that payment is overdue, your intent to pursue recovery if not paid within 7 days, and interest charges that have accrued.

**Day 30+ overdue — Escalation options**
- Debt collection agency (they take 10-25% of recovered amount)
- Small claims tribunal (VCAT, NCAT, QCAT depending on state — usually under $25,000)
- Formal legal demand letter from a solicitor ($300-$500)

**Key rule:** Never stop work on other projects to chase a single payment. Set your follow-up schedule and stick to it.

Use our free <a href="/tools/overdue-invoice-follow-up-generator" class="text-amber-400 hover:text-amber-300">Overdue Invoice Follow-Up Generator</a> for ready-to-send templates.`,
  },
  {
    id: 'payment-methods',
    title: 'Payment Methods Compared',
    content: `Choosing the right payment methods affects how quickly you get paid and how much you keep.

**Bank transfer (direct deposit)**
- Cost: Free for domestic transfers
- Speed: Same day or next business day
- Best for: All Australian clients
- Include BSB, account number, and account name on every invoice

**PayID**
- Cost: Free
- Speed: Instant (real-time)
- Best for: Quick payments, sole traders
- Link to your phone number or email — clients pay in seconds

**Stripe**
- Cost: 1.75% + $0.30 per transaction (domestic cards)
- Speed: 2 business days to your bank
- Best for: Online businesses, card payments, international clients
- Adds a "Pay Now" button to invoices

**PayPal**
- Cost: 2.6% + $0.30 per transaction
- Speed: Instant to PayPal, 1-3 days to withdraw
- Best for: International clients, quick transfers
- Higher fees than Stripe, but more widely used globally

**Wise (formerly TransferWise)**
- Cost: ~0.5-1.5% for currency conversion
- Speed: 1-3 business days
- Best for: International clients paying in foreign currency
- Best exchange rates of any transfer service

**Our recommendation:** Offer bank transfer (free, fast) as your primary method, plus one online option (Stripe for card payments or PayPal for international clients). Two options covers 95% of situations.`,
  },
  {
    id: 'contracts',
    title: 'Payment Protection in Contracts',
    content: `Your contract is your best defence against non-payment. Include these clauses:

**Payment terms clause**
"Payment is due within [14] days of invoice date. All amounts are in Australian Dollars and exclusive of GST (which will be added where applicable)."

**Late payment clause**
"Invoices not paid within [14] days of the due date will incur interest at a rate of [2%] per month on the outstanding balance. The Client is also responsible for any costs incurred in collecting overdue payments, including debt recovery fees and legal costs."

**Deposit clause**
"A non-refundable project initiation fee of [50%] of the total project fee is due before work commences. The remaining balance is due upon delivery of final deliverables."

**Scope change clause**
"Any work outside the agreed scope will be quoted separately and billed in addition to the original project fee. Work will not commence on out-of-scope items until the Client has approved the additional quote in writing."

**Kill fee clause**
"If the project is cancelled by the Client after commencement, the Client will be invoiced for: (a) all work completed to date at the agreed rates, plus (b) a cancellation fee of [25%] of the remaining project value."

Use our free <a href="/tools/freelance-contract-generator" class="text-amber-400 hover:text-amber-300">Freelance Contract Generator</a> to create a contract with all these clauses.`,
  },
  {
    id: 'cash-flow',
    title: 'Cash Flow Management',
    content: `Even with perfect invoicing, freelance income is irregular. Here's how to manage cash flow:

**The 3-account system:**
1. **Business account** — All income goes here. Pay business expenses from here.
2. **Tax account** — Transfer 30-35% of every payment for GST + income tax + super.
3. **Personal account** — Pay yourself a consistent monthly "salary" from the business account.

**Buffer rule:** Keep at least 3 months of expenses in your business account at all times. This protects you from late-paying clients, quiet periods, and unexpected costs.

**Invoice timing strategy:**
- Send invoices on Monday mornings (highest open rate)
- Avoid sending invoices on Fridays (they sit over the weekend)
- For recurring clients, invoice on the same date each month
- For project work, invoice on completion day (not the day after)

**Track everything:**
- Know your average days to payment per client
- Know which clients consistently pay late
- Know your monthly nut (minimum income needed)
- Review accounts receivable weekly

**When cash flow is tight:**
- Follow up on all outstanding invoices immediately
- Offer a small discount (2-3%) for immediate payment on large invoices
- Invoice for partial work completed rather than waiting for project completion
- Negotiate shorter payment terms with new clients`,
  },
];

const relatedTools = [
  { name: 'Late Payment Interest Calculator', href: '/tools/late-payment-calculator', desc: 'Calculate interest on overdue invoices' },
  { name: 'Overdue Invoice Follow-Up Generator', href: '/tools/overdue-invoice-follow-up-generator', desc: 'Professional follow-up email templates' },
  { name: 'Letter of Demand Generator', href: '/tools/letter-of-demand-generator', desc: 'Formal payment demand letters' },
  { name: 'Debt Recovery Cost Calculator', href: '/tools/debt-recovery-cost-calculator', desc: 'Compare recovery options and costs' },
  { name: 'Emergency Fund Calculator', href: '/tools/emergency-fund-calculator', desc: 'Calculate your safety buffer' },
  { name: 'Freelance Contract Generator', href: '/tools/freelance-contract-generator', desc: 'Contracts with payment protection' },
];

export default function GettingPaidFaster() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-gray-950">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 pt-6">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-gray-300 transition-colors">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Getting Paid Faster</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden pt-12 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
              Cash Flow Protection
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Getting Paid Faster: A Freelancer&apos;s Guide
            </h1>
            <p className="text-lg text-gray-400 mb-6">
              Proven strategies to reduce late payments, protect your cash flow, and handle
              overdue invoices professionally. Australian freelancers lose an average of $10,000/year
              to late payments — here&apos;s how to fix that.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>9 min read</span>
              <span>&bull;</span>
              <span>Last updated: February 2026</span>
              <span>&bull;</span>
              <span>Includes follow-up templates</span>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '29%', label: 'of freelancer invoices are paid late', color: 'text-red-400' },
              { num: '14 days', label: 'average overdue period', color: 'text-amber-400' },
              { num: '$10K+', label: 'lost annually to late payments', color: 'text-red-400' },
              { num: '80%', label: 'reduction with proper systems', color: 'text-emerald-400' },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl bg-amber-500/5 border border-amber-500/10">
                <div className={`text-xl md:text-2xl font-bold ${s.color}`}>{s.num}</div>
                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Table of Contents */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">In This Guide</h2>
            <nav className="grid md:grid-cols-2 gap-2">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="text-gray-400 hover:text-amber-400 transition-colors text-sm py-1">
                  &rarr; {s.title}
                </a>
              ))}
              <a href="#faq" className="text-gray-400 hover:text-amber-400 transition-colors text-sm py-1">&rarr; FAQs</a>
              <a href="#tools" className="text-gray-400 hover:text-amber-400 transition-colors text-sm py-1">&rarr; Related Tools</a>
            </nav>
          </div>
        </section>

        {/* Content Sections */}
        <article className="max-w-4xl mx-auto px-4 pb-16">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-12 scroll-mt-8">
              <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-gray-800">{section.title}</h2>
              <div className="prose prose-invert prose-gray max-w-none text-gray-300 leading-relaxed">
                {section.content.split('\n\n').map((para, i) => {
                  const formatted = para
                    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                    .replace(/<a /g, '<a ')
                    .replace(/\n- /g, '</p><p class="pl-4 text-gray-400 my-1 before:content-[\'•\'] before:mr-2 before:text-amber-500">');
                  return <div key={i} className="mb-4" dangerouslySetInnerHTML={{ __html: `<p>${formatted}</p>` }} />;
                })}
              </div>
            </section>
          ))}
        </article>

        {/* Related Tools */}
        <section id="tools" className="border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-2xl font-bold text-white mb-2">Related Free Tools</h2>
            <p className="text-gray-400 mb-8">Use these tools to implement the strategies in this guide.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedTools.map((tool) => (
                <Link key={tool.href} href={tool.href} className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-amber-500/30 transition-colors group">
                  <div className="font-semibold text-gray-200 group-hover:text-amber-400 transition-colors">{tool.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-gray-800 bg-gray-900/30">
          <div className="max-w-3xl mx-auto px-4 py-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq) => (
                <details key={faq.name} className="group bg-gray-900/50 border border-gray-800 rounded-xl">
                  <summary className="px-6 py-4 cursor-pointer text-gray-200 font-medium hover:text-white transition-colors list-none flex items-center justify-between">
                    {faq.name}
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">{faq.acceptedAnswer.text}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Email Capture */}
        <section className="border-t border-gray-800">
          <div className="max-w-xl mx-auto px-4 py-16 text-center">
            <EmailCapture />
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-gray-800 bg-gray-900/30">
          <div className="max-w-3xl mx-auto px-4 py-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Automate Your Payment Collection</h2>
            <p className="text-gray-400 mb-8">
              InvoiceFlow sends automatic payment reminders, tracks overdue invoices,
              and calculates late fees — so you can focus on the work, not chasing money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">Start Free — No Credit Card</Button>
              </Link>
              <Link href="/tools/late-payment-calculator">
                <Button variant="secondary" size="lg">Try Late Payment Calculator</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
