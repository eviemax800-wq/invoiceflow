import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Invoicing 101: Complete Beginner\'s Guide for Australian Freelancers — InvoiceFlow',
  description:
    'Learn how to create professional invoices in Australia. Tax invoice requirements, payment terms, numbering systems, ABN rules, and common mistakes to avoid. Free guide for freelancers.',
  alternates: { canonical: '/guides/invoicing-101' },
  keywords: [
    'how to invoice clients australia',
    'tax invoice requirements australia',
    'freelance invoice guide',
    'invoice template australia',
    'how to create an invoice',
    'invoicing for beginners freelancer',
  ],
  openGraph: {
    title: 'Invoicing 101: Complete Guide for Australian Freelancers',
    description: 'Everything you need to know about creating professional, ATO-compliant invoices.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://invoiceflow-teal.vercel.app/guides' },
    { '@type': 'ListItem', position: 3, name: 'Invoicing 101', item: 'https://invoiceflow-teal.vercel.app/guides/invoicing-101' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should I include on an invoice in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every Australian invoice should include: your business name and ABN, the date of issue, a unique invoice number, the client\'s name and details, a clear description of services provided, the amount for each item, the total amount, payment terms (e.g. Net 14), and your preferred payment method. If you are GST-registered, it must also say "Tax Invoice" and show the GST amount.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an ABN to invoice in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While you can technically invoice without an ABN, your clients are required to withhold 47% of the payment (the no-ABN withholding rate) if you don\'t provide one. Getting an ABN is free, takes about 10 minutes at abr.gov.au, and is essential for any freelancer or sole trader in Australia.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are standard payment terms for freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common payment terms for Australian freelancers are: Net 7 (due in 7 days) for small projects, Net 14 (due in 14 days) which is the most popular, and Net 30 (due in 30 days) for larger corporate clients. Some freelancers require 50% upfront deposit for new clients or large projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a tax invoice and a regular invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tax invoice is issued by GST-registered businesses and includes the words "Tax Invoice", your ABN, and the GST amount. It allows your client to claim GST credits. A regular invoice doesn\'t include GST details and is used by freelancers who aren\'t GST-registered. If you\'re registered for GST, you must issue tax invoices — a regular invoice won\'t satisfy ATO requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should I number my invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use a consistent, sequential numbering system. Common formats include: simple sequential (INV-001, INV-002), date-based (2026-001, 2026-002), or client-coded (ABC-001 for client ABC). Never reuse or skip numbers, as the ATO expects a continuous sequence. The system you choose doesn\'t matter, but consistency does.',
      },
    },
  ],
};

const sections = [
  {
    id: 'why-invoicing-matters',
    title: 'Why Proper Invoicing Matters',
    content: `Invoicing isn't just about getting paid — it's a legal requirement. The ATO requires all businesses to maintain records of income for at least 5 years. A proper invoice is your proof of what you charged, when, and to whom.

**Good invoicing protects you:**
- Creates a legal record of the agreement
- Ensures you get paid the correct amount
- Satisfies ATO record-keeping requirements
- Makes BAS and tax time significantly easier
- Projects professionalism to clients

**Bad invoicing costs you:**
- Late or missing payments
- Disputes over amounts owed
- ATO compliance issues
- Lost GST credits for your clients
- Unprofessional reputation`,
  },
  {
    id: 'anatomy',
    title: 'Anatomy of a Professional Invoice',
    content: `Every invoice should contain these elements, presented clearly and professionally:

**1. Header**
- The word "Invoice" or "Tax Invoice" (if GST-registered)
- Your business name or trading name
- Your logo (optional but professional)
- Your contact details

**2. Invoice Details**
- Unique invoice number (sequential, never reused)
- Date of issue
- Due date (based on your payment terms)
- Purchase order number (if the client provided one)

**3. Parties**
- Your name, ABN, and address
- Client's name, ABN (if applicable), and address

**4. Line Items**
- Description of each service or product
- Quantity and rate (hourly, per project, etc.)
- Amount for each line
- GST per line (if GST-registered)

**5. Totals**
- Subtotal (before GST)
- GST amount
- Total amount due

**6. Payment Information**
- Bank details (BSB, account number, account name)
- Alternative payment methods (PayPal, Stripe, etc.)
- Payment terms (Net 7, Net 14, Net 30)
- Late payment policy (if applicable)`,
  },
  {
    id: 'payment-terms',
    title: 'Setting Payment Terms',
    content: `Payment terms define when and how you expect to be paid. Get this right and you'll have fewer late payment issues.

**Common payment terms in Australia:**

- **Due on receipt** — Payment expected immediately. Use for small, one-off jobs.
- **Net 7** — Due within 7 days. Good for regular clients with small invoices.
- **Net 14** — Due within 14 days. The most popular for Australian freelancers.
- **Net 30** — Due within 30 days. Standard for corporate and government clients.
- **50% upfront, 50% on completion** — Common for project-based work. Protects both parties.

**Tips for choosing terms:**
- New clients: shorter terms (Net 7 or 50% deposit)
- Established clients: standard terms (Net 14 or Net 30)
- Large projects ($5K+): milestone payments (30/30/40 or 50/50)
- Government/enterprise: they usually dictate terms (often Net 30+)

**Always state terms clearly** on every invoice and in your contract. Verbal agreements are harder to enforce.

**Late payment interest:** You can charge interest on overdue invoices if it's in your terms. The standard rate is 2% above the RBA cash rate per annum. Include this in your contract.`,
  },
  {
    id: 'numbering',
    title: 'Invoice Numbering Systems',
    content: `The ATO requires invoices to be numbered sequentially. You should never reuse a number, skip numbers, or use random numbers.

**Popular formats:**

**Simple sequential:** INV-001, INV-002, INV-003
- Pros: Simple, easy to implement
- Cons: No date context, reaches high numbers quickly

**Year-based:** 2026-001, 2026-002
- Pros: Resets each year, easy to identify period
- Cons: Could confuse clients across years

**Client-coded:** ACME-001, ACME-002
- Pros: Easy to find client invoices
- Cons: Multiple sequences to track

**Date + sequential:** 20260228-01, 20260228-02
- Pros: Self-dating, very organised
- Cons: Longer numbers

**Our recommendation:** Year-based (2026-001) is the best balance of simplicity and utility for most freelancers. It resets each financial year and makes tax time easy.

Use our free <a href="/tools/invoice-numbering-system" class="text-blue-400 hover:text-blue-300">Invoice Numbering System Generator</a> to design your system.`,
  },
  {
    id: 'abn-rules',
    title: 'ABN Rules and the 47% Withholding',
    content: `If you don't quote your ABN on an invoice, the payer is legally required to withhold 47% of the payment and send it to the ATO. This is called "no-ABN withholding."

**Key rules:**
- Always include your ABN on every invoice
- If a client doesn't provide their ABN, you don't need to withhold (that obligation is on the payer, not the supplier)
- Verify ABNs using our free <a href="/tools/abn-lookup" class="text-blue-400 hover:text-blue-300">ABN Lookup Tool</a>
- Your ABN must be current and active — check at abr.gov.au

**Getting an ABN:**
1. Go to abr.gov.au
2. Apply online (free, ~10 minutes)
3. You'll need your TFN, identity details, and business activity description
4. Most applications are approved instantly
5. Some may take up to 28 days if manual review is needed

**An ABN is different from an ACN.** An ACN (Australian Company Number) is for registered companies. Sole traders and freelancers only need an ABN.`,
  },
  {
    id: 'mistakes',
    title: 'Common Invoicing Mistakes',
    content: `**1. Invoicing late**
Send invoices immediately when work is completed. Every day you delay is a day added to your payment timeline. If payment terms are Net 14, and you invoice 5 days late, you're really looking at 19+ days to get paid.

**2. Vague descriptions**
"Consulting services — $2,000" tells the client nothing. Be specific: "Website redesign — homepage mockup, 3 revision rounds, final Figma delivery (8 hours @ $250/hr) — $2,000."

**3. No payment terms stated**
If you don't specify when payment is due, the client decides. Always include explicit payment terms.

**4. Wrong or missing ABN**
Results in 47% withholding. Double-check your ABN is correct on every invoice.

**5. Not following up**
If an invoice is overdue, follow up immediately. Day 1 overdue: friendly reminder. Day 7: firm follow-up. Day 14: formal demand. Day 30+: consider debt recovery.

**6. Inconsistent numbering**
The ATO expects sequential, consistent numbering. Random or duplicate numbers create audit risk.

**7. No record keeping**
Keep copies of every invoice sent for at least 5 years. Cloud-based invoicing software handles this automatically.

**8. Forgetting GST**
If you're registered for GST, every invoice must include GST. Not charging it doesn't mean you don't owe it — the ATO considers the total price as GST-inclusive.`,
  },
];

const relatedTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional invoices instantly' },
  { name: 'Invoice Numbering System', href: '/tools/invoice-numbering-system', desc: 'Design your numbering system' },
  { name: 'Invoice Email Templates', href: '/tools/invoice-email-template-generator', desc: 'Professional email templates' },
  { name: 'Tax Invoice Compliance Checker', href: '/tools/tax-invoice-compliance-checker', desc: 'Verify ATO compliance' },
  { name: 'Late Payment Calculator', href: '/tools/late-payment-calculator', desc: 'Calculate overdue interest' },
  { name: 'Payment Terms Generator', href: '/tools/freelance-contract-generator', desc: 'Generate contracts with terms' },
];

export default function Invoicing101() {
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
            <span className="text-gray-300">Invoicing 101</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden pt-12 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              Beginner-Friendly Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Invoicing 101: The Complete Beginner&apos;s Guide
            </h1>
            <p className="text-lg text-gray-400 mb-6">
              How to create professional, ATO-compliant invoices that get you paid faster.
              Payment terms, numbering, ABN rules, and common mistakes to avoid.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>10 min read</span>
              <span>&bull;</span>
              <span>Last updated: February 2026</span>
              <span>&bull;</span>
              <span>Perfect for new freelancers</span>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">In This Guide</h2>
            <nav className="grid md:grid-cols-2 gap-2">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="text-gray-400 hover:text-blue-400 transition-colors text-sm py-1">
                  &rarr; {s.title}
                </a>
              ))}
              <a href="#faq" className="text-gray-400 hover:text-blue-400 transition-colors text-sm py-1">&rarr; FAQs</a>
              <a href="#tools" className="text-gray-400 hover:text-blue-400 transition-colors text-sm py-1">&rarr; Related Tools</a>
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
                    .replace(/\n- /g, '</p><p class="pl-4 text-gray-400 my-1 before:content-[\'•\'] before:mr-2 before:text-blue-500">');
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
            <p className="text-gray-400 mb-8">Put this guide into practice with these free tools.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedTools.map((tool) => (
                <Link key={tool.href} href={tool.href} className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-colors group">
                  <div className="font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">{tool.name}</div>
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
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Send Your First Invoice?</h2>
            <p className="text-gray-400 mb-8">
              Create professional, ATO-compliant invoices in under 30 seconds. Free forever with our starter plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">Start Free — No Credit Card</Button>
              </Link>
              <Link href="/tools/invoice-generator">
                <Button variant="secondary" size="lg">Try Invoice Generator</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
