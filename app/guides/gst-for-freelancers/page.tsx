import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Complete GST Guide for Australian Freelancers (2025-26) — InvoiceFlow',
  description:
    'Everything Australian freelancers need to know about GST: registration threshold ($75K), BAS lodgement, tax invoices, claiming credits, and staying ATO-compliant. Updated for 2025-26.',
  alternates: { canonical: '/guides/gst-for-freelancers' },
  keywords: [
    'GST for freelancers australia',
    'GST registration threshold',
    'BAS lodgement freelancer',
    'GST tax invoice requirements',
    'freelancer GST guide australia 2026',
    'sole trader GST obligations',
  ],
  openGraph: {
    title: 'Complete GST Guide for Australian Freelancers (2025-26)',
    description:
      'Registration, BAS, tax invoices, credits — everything you need to know about GST as an Australian freelancer.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://invoiceflow-teal.vercel.app/guides' },
    { '@type': 'ListItem', position: 3, name: 'GST for Freelancers', item: 'https://invoiceflow-teal.vercel.app/guides/gst-for-freelancers' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need to register for GST as a freelancer in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must register for GST if your GST turnover (gross income minus GST) is $75,000 or more in the current financial year, or you expect it to reach $75,000. If you provide taxi or ride-sharing services, you must register regardless of turnover. Registration is optional if you earn less than $75,000, but voluntary registration lets you claim GST credits on business purchases.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the GST rate in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The GST rate in Australia is 10%. It applies to most goods and services. Some items are GST-free including basic food, medical services, education, and exports. When you charge GST, you add 10% to your price. For example, a $1,000 service becomes $1,100 including GST.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often do I need to lodge a BAS as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most freelancers lodge BAS quarterly. Quarterly BAS is due 28 days after the end of each quarter: Q1 (Jul-Sep) due 28 Oct, Q2 (Oct-Dec) due 28 Feb, Q3 (Jan-Mar) due 28 Apr, Q4 (Apr-Jun) due 28 Jul. If your GST turnover exceeds $20 million, you must lodge monthly. You can also choose to lodge monthly voluntarily.',
      },
    },
    {
      '@type': 'Question',
      name: 'What must be on a tax invoice for it to be valid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A valid tax invoice must include: the words "tax invoice", your ABN, the date of issue, a description of items/services, the GST amount (or that the total includes GST), and your identity (name or business name). For invoices over $1,000, you also need the buyer\'s ABN and address. Without a valid tax invoice, your client cannot claim GST credits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I claim GST credits on business expenses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if you are registered for GST, you can claim credits (called input tax credits) on GST included in the price of business purchases. This includes equipment, software subscriptions, office supplies, professional development, and business travel. You need a valid tax invoice from the supplier to claim. Personal expenses and GST-free items cannot be claimed.',
      },
    },
  ],
};

const sections = [
  {
    id: 'what-is-gst',
    title: 'What Is GST?',
    content: `The Goods and Services Tax (GST) is a 10% tax on most goods and services sold in Australia. It was introduced on 1 July 2000 and is administered by the Australian Taxation Office (ATO).

As a freelancer, GST affects you in two ways:
- **Collecting GST** — you add 10% to your invoices and collect it from clients
- **Paying GST** — you remit the collected GST to the ATO (minus any credits you can claim)

GST is not your money — you're collecting it on behalf of the government. Think of it as holding it in trust until your next BAS lodgement.`,
  },
  {
    id: 'registration',
    title: 'Do You Need to Register?',
    content: `**You MUST register for GST if:**
- Your GST turnover is $75,000 or more in the current financial year
- You reasonably expect your turnover to reach $75,000
- You provide taxi or ride-sharing services (any turnover)

**GST turnover** = your gross business income minus any GST you've already charged. It does NOT include hobby income, salary/wages, or input-taxed sales.

**Voluntary registration** — If you earn under $75,000, registration is optional but can be beneficial:
- You can claim GST credits on business purchases (equipment, software, supplies)
- Your invoices look more professional
- Clients who are GST-registered prefer suppliers who are also registered

**The catch:** Once registered, you must charge GST on all taxable sales and lodge BAS returns — even in quarters with no income.`,
  },
  {
    id: 'how-to-register',
    title: 'How to Register for GST',
    content: `Registration is free and takes about 10 minutes:

1. **Get an ABN** — You need an Australian Business Number first. Apply at abr.gov.au
2. **Register for GST** — Through your myGov account linked to ATO, or via the Business Registration Service at register.business.gov.au
3. **Choose your reporting period** — Monthly or quarterly (quarterly is standard for most freelancers)
4. **Choose your accounting method:**
   - **Cash basis** — Report GST when you receive/make payment (recommended for freelancers)
   - **Accrual basis** — Report GST when you issue/receive invoices

**Cash basis is almost always better for freelancers** because you only owe GST when you actually get paid, not when you send the invoice.

Your GST registration takes effect from the date you specify (can be backdated up to 4 years in some cases).`,
  },
  {
    id: 'tax-invoices',
    title: 'Tax Invoice Requirements',
    content: `When you're GST-registered, your invoices must meet specific ATO requirements. These are called "tax invoices" — regular invoices don't allow your clients to claim GST credits.

**Required on ALL tax invoices:**
- The words "Tax Invoice" (prominently displayed)
- Your name or business name
- Your ABN
- Date of issue
- Brief description of goods/services
- GST amount for each item (or a statement that the total price includes GST)
- Total price including GST

**Additionally required for invoices over $1,000:**
- The buyer's name or business name
- The buyer's ABN (if they have one)
- The buyer's address
- Quantity of each item

**Common mistakes:**
- Forgetting to include "Tax Invoice" at the top
- Not showing GST as a separate line item
- Using an expired or cancelled ABN
- Issuing a tax invoice when you're not GST-registered (this is illegal)`,
  },
  {
    id: 'bas-lodgement',
    title: 'BAS Lodgement',
    content: `The Business Activity Statement (BAS) is how you report and pay GST to the ATO each quarter.

**Quarterly due dates:**
| Quarter | Period | Due Date |
|---------|--------|----------|
| Q1 | July – September | 28 October |
| Q2 | October – December | 28 February |
| Q3 | January – March | 28 April |
| Q4 | April – June | 28 July |

**What you report on BAS:**
- **1A** — GST on sales (what you collected from clients)
- **1B** — GST on purchases (what you paid on business expenses)
- **Difference** = what you owe (or what the ATO owes you)

**Example:** You invoiced $11,000 (inc. $1,000 GST) and spent $3,300 on business expenses (inc. $300 GST).
- GST collected: $1,000
- GST credits: $300
- You owe: $700

**Pro tip:** Set aside GST as you earn it. Transfer 10% of each payment to a separate bank account so BAS time doesn't hurt.`,
  },
  {
    id: 'gst-credits',
    title: 'Claiming GST Credits',
    content: `GST credits (input tax credits) reduce the amount of GST you owe. You can claim credits on GST included in business purchases.

**You CAN claim credits on:**
- Computer equipment and software
- Office furniture and supplies
- Professional development and courses
- Business insurance
- Accounting and legal fees
- Marketing and advertising costs
- Business travel and accommodation
- Internet and phone (business portion)
- Co-working space or home office expenses
- Vehicle expenses (business use portion)

**You CANNOT claim credits on:**
- Personal expenses
- GST-free items (basic food, medical)
- Input-taxed items (residential rent, bank fees)
- Purchases from non-GST-registered suppliers
- Expenses without a valid tax invoice

**Record keeping:** You must keep tax invoices for all business purchases for 5 years. Without a valid tax invoice, you cannot claim the GST credit.`,
  },
  {
    id: 'common-mistakes',
    title: 'Common GST Mistakes to Avoid',
    content: `**1. Not registering on time**
If your turnover hits $75K and you don't register within 21 days, the ATO can backdate your registration and charge GST on sales you've already made — without having collected it.

**2. Mixing personal and business**
Keep separate bank accounts. The ATO can audit your personal accounts if they suspect business income is flowing through them.

**3. Forgetting to charge GST to overseas clients**
Exports of services are generally GST-free. But if your client is in Australia, you must charge GST — even if they're a foreign-owned company with an Australian presence.

**4. Not issuing proper tax invoices**
If your invoices don't meet ATO requirements, your clients can't claim GST credits. This makes you harder to work with.

**5. Late BAS lodgement**
Late lodgement attracts penalties: $313 per 28-day period, up to $1,565. Plus interest on unpaid GST. Set calendar reminders.

**6. Not keeping records for 5 years**
The ATO requires you to keep all business records for 5 years. Use cloud-based software to ensure nothing gets lost.`,
  },
];

const relatedTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on any amount' },
  { name: 'BAS Preparation Checklist', href: '/tools/bas-preparation-checklist', desc: 'Never miss a BAS deadline' },
  { name: 'Tax Invoice Compliance Checker', href: '/tools/tax-invoice-compliance-checker', desc: 'Verify your invoices meet ATO requirements' },
  { name: 'PAYG Installment Calculator', href: '/tools/payg-installment-calculator', desc: 'Calculate quarterly tax payments' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional tax invoices' },
  { name: 'ABN Lookup Tool', href: '/tools/abn-lookup', desc: 'Verify ABNs and GST registration' },
];

const relatedArticles = [
  { title: 'When Should Freelancers Register for GST?', href: '/blog/when-to-register-for-gst' },
  { title: 'BAS Lodgement Guide for Sole Traders', href: '/blog/bas-lodgement-guide' },
  { title: 'Tax Invoice vs Regular Invoice', href: '/blog/tax-invoice-vs-regular-invoice' },
  { title: 'Top Tax Deductions for Australian Freelancers', href: '/blog/top-tax-deductions-freelancers' },
];

export default function GSTGuide() {
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
            <span className="text-gray-300">GST for Freelancers</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden pt-12 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              Updated for 2025-26 Financial Year
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Complete GST Guide for Australian Freelancers
            </h1>
            <p className="text-lg text-gray-400 mb-6">
              Everything you need to know about GST registration, BAS lodgement, tax invoices,
              and claiming credits — written specifically for sole traders and freelancers.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>12 min read</span>
              <span>&bull;</span>
              <span>Last updated: February 2026</span>
              <span>&bull;</span>
              <span>ATO-accurate</span>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">In This Guide</h2>
            <nav className="grid md:grid-cols-2 gap-2">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm py-1">
                  &rarr; {s.title}
                </a>
              ))}
              <a href="#faq" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm py-1">&rarr; FAQs</a>
              <a href="#tools" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm py-1">&rarr; Related Tools</a>
            </nav>
          </div>
        </section>

        {/* Key Numbers Banner */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '$75K', label: 'Registration threshold' },
              { num: '10%', label: 'GST rate' },
              { num: '28 days', label: 'BAS due after quarter end' },
              { num: '5 years', label: 'Record keeping requirement' },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                <div className="text-xl md:text-2xl font-bold text-emerald-400">{s.num}</div>
                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Content Sections */}
        <article className="max-w-4xl mx-auto px-4 pb-16">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-12 scroll-mt-8">
              <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-gray-800">{section.title}</h2>
              <div className="prose prose-invert prose-gray max-w-none text-gray-300 leading-relaxed">
                {section.content.split('\n\n').map((para, i) => {
                  if (para.startsWith('|')) {
                    const rows = para.split('\n').filter(r => r.trim() && !r.includes('---'));
                    const header = rows[0].split('|').filter(c => c.trim()).map(c => c.trim());
                    const body = rows.slice(1).map(r => r.split('|').filter(c => c.trim()).map(c => c.trim()));
                    return (
                      <div key={i} className="overflow-x-auto my-4">
                        <table className="w-full text-sm">
                          <thead>
                            <tr>{header.map((h, j) => <th key={j} className="text-left py-2 px-3 text-gray-300 font-semibold border-b border-gray-700">{h}</th>)}</tr>
                          </thead>
                          <tbody>
                            {body.map((row, ri) => (
                              <tr key={ri} className="border-b border-gray-800/50">
                                {row.map((cell, ci) => <td key={ci} className="py-2 px-3 text-gray-400">{cell}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  const formatted = para
                    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                    .replace(/\n- /g, '</p><p class="pl-4 text-gray-400 my-1 before:content-[\'•\'] before:mr-2 before:text-emerald-500">');
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
            <p className="text-gray-400 mb-8">Use these tools alongside this guide — all free, no sign-up required.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedTools.map((tool) => (
                <Link key={tool.href} href={tool.href} className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-emerald-500/30 transition-colors group">
                  <div className="font-semibold text-gray-200 group-hover:text-emerald-400 transition-colors">{tool.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t border-gray-800 bg-gray-900/30">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {relatedArticles.map((article) => (
                <Link key={article.href} href={article.href} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm py-2 flex items-center gap-2">
                  <span className="text-emerald-500">&rarr;</span> {article.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-gray-800">
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
        <section className="border-t border-gray-800 bg-gray-900/30">
          <div className="max-w-xl mx-auto px-4 py-16 text-center">
            <EmailCapture />
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-gray-800">
          <div className="max-w-3xl mx-auto px-4 py-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Stop Wrestling with GST</h2>
            <p className="text-gray-400 mb-8">
              InvoiceFlow automatically handles GST calculations, generates ATO-compliant tax invoices,
              and prepares your BAS data. Start free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">Start Free — No Credit Card</Button>
              </Link>
              <Link href="/tools/gst-calculator">
                <Button variant="secondary" size="lg">Try GST Calculator</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
