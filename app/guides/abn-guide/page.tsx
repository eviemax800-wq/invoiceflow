import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'ABN Guide: Everything Australian Freelancers Need to Know — InvoiceFlow',
  description:
    'The complete guide to Australian Business Numbers for freelancers. How to apply, when you need one, displaying on invoices, the 47% withholding rule, and managing your ABN.',
  alternates: { canonical: '/guides/abn-guide' },
  keywords: [
    'ABN for freelancers australia',
    'how to get an ABN',
    'ABN application',
    'do I need an ABN freelancer',
    '47% withholding no ABN',
    'ABN on invoices',
  ],
  openGraph: {
    title: 'ABN Guide: Everything Australian Freelancers Need to Know',
    description:
      'The complete guide to Australian Business Numbers for freelancers. How to apply, when you need one, displaying on invoices, the 47% withholding rule, and managing your ABN.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://invoiceflow-teal.vercel.app/guides' },
    { '@type': 'ListItem', position: 3, name: 'ABN Guide', item: 'https://invoiceflow-teal.vercel.app/guides/abn-guide' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it free to get an ABN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, applying for an ABN through the Australian Business Register (abr.gov.au) is completely free. Be wary of third-party sites that charge fees to "help" you apply — the process is straightforward and takes about 10 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get an ABN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most sole trader ABN applications are processed immediately — you\'ll receive your ABN on-screen at the end of the application. In rare cases where the ATO needs to verify information, it can take up to 28 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I have an ABN and still be employed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many Australians have both a regular job (using their TFN) and a side freelance business (using their ABN). Your employment income is reported separately from your business income on your tax return.',
      },
    },
    {
      '@type': 'Question',
      name: "What happens if I use someone else's ABN?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Using another person's or business's ABN is illegal. It constitutes fraud and can result in penalties for both parties. If you're doing business, you must have your own ABN.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to register a business name separately?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you\'re operating under your own legal name, no. But if you want to use a business name (e.g., "Smith Creative" instead of "John Smith"), you must register it with ASIC. This costs $39/year or $92/3 years and is separate from your ABN.',
      },
    },
  ],
};

const sections = [
  {
    id: 'what-is-abn',
    title: 'What Is an ABN?',
    content: `An Australian Business Number (ABN) is a unique 11-digit number that identifies your business to the government and community. It's administered by the Australian Business Register (ABR).

**An ABN is not the same as a TFN** — your Tax File Number is for personal tax, your ABN is for business activities. Having an ABN means you're operating a business, not just a hobby.

ABNs are public — anyone can look up your ABN on the ABR website and see your business name, state, and GST registration status. This transparency is by design and helps businesses verify each other before transacting.`,
  },
  {
    id: 'do-you-need-one',
    title: 'Do You Need an ABN?',
    content: `You need an ABN if you're carrying on an enterprise (business). The ATO looks at the "totality of circumstances" — there's no single test.

**Signs you're running a business:**
- You have regular clients
- You invoice for work
- You have a business plan or strategy
- You intend to make a profit
- You've set up a business bank account

**You DON'T need an ABN if:**
- You're doing occasional one-off work (hobby)
- You're an employee (even if paid as a "contractor")
- Your activity isn't profit-seeking

If in doubt, apply — it's free and having one doesn't commit you to anything major. You just need to lodge a tax return declaring any business income you earn.`,
  },
  {
    id: 'how-to-apply',
    title: 'How to Apply for an ABN',
    content: `The application is free and takes about 10 minutes. Here's the step-by-step process:

**1. Go to abr.gov.au/apply**
- This is the official Australian Business Register website

**2. Confirm your identity**
- You'll need your TFN, full name, date of birth, and residential address

**3. Select your business structure**
- Most freelancers choose "Sole Trader"

**4. Describe your main business activity**
- Use the closest ATO category to describe what you do

**5. Confirm your details and submit**
- You'll usually get your ABN immediately on-screen

**What you'll need:** your TFN, photo ID details, and a description of your business activity. For sole traders, the ABN is linked to your TFN. If you need an ABN for a company or partnership, the process is different and may require additional documents like incorporation certificates.`,
  },
  {
    id: 'withholding-rule',
    title: 'The 47% No-ABN Withholding Rule',
    content: `This is the big one. If you don't provide your ABN when invoicing a business, they **MUST withhold 47% of your payment** and send it to the ATO. This applies to payments of $75 or more.

The withheld amount counts as a prepayment of your tax — you get it back when you lodge your return, but your cash flow takes a massive hit in the meantime.

**Example:**
- You invoice $5,000 without an ABN
- Client withholds $2,350 (47%)
- You receive only $2,650
- You wait months to get the rest back via your tax return

**Always quote your ABN. There is no good reason not to.**

**Exemptions from the withholding rule:**
- Payments under $75
- Residential rent payments
- Interest and dividends (covered by the TFN system)
- Employment income (covered by PAYG withholding)`,
  },
  {
    id: 'abn-on-invoices',
    title: 'Using Your ABN on Invoices',
    content: `Your ABN must appear on all business invoices. For tax invoices (if you're GST registered), the ABN is a legal requirement under the GST system. For non-tax invoices, including your ABN avoids the 47% withholding and looks professional.

**Where to display it:** Near the top of your invoice, in your business details section — alongside your name, address, and contact information.

**Format:** Usually shown as "ABN: XX XXX XXX XXX" (spaced in groups of 2-3-3-3). This format isn't legally required, but it's the standard convention.

**If you're GST-registered:**
- Also include "GST Registered" on your invoices
- Issue "Tax Invoices" not just "Invoices"
- Show GST as a separate line item

**Common mistake:** Using a cancelled or outdated ABN. Verify yours is current at abr.gov.au before sending invoices to new clients.`,
  },
  {
    id: 'managing-abn',
    title: 'Managing Your ABN',
    content: `**Update your ABN details within 28 days of any change.** This is a legal requirement.

**Things you must update:**
- Business address
- Business name
- Main business activity
- Associated names
- GST registration status
- Authorised contacts

**How to update:** Visit abr.gov.au or contact your registered tax agent. Updates are free and processed quickly.

**Cancelling your ABN:** If you stop operating your business, cancel your ABN. An active ABN with no tax return lodged looks suspicious to the ATO and may trigger a review. Don't let it sit idle.

**Renewing:** ABNs don't expire, but the ATO conducts periodic reviews and may cancel inactive ABNs. You'll receive a letter before any cancellation — respond promptly to keep your ABN active.`,
  },
  {
    id: 'abn-vs-others',
    title: 'ABN vs Other Business Numbers',
    content: `Australia has several business identification numbers. Here's how they differ:

| Number | Full Name | Who Needs It | Cost |
|--------|-----------|-------------|------|
| ABN | Australian Business Number | Anyone carrying on a business | Free |
| TFN | Tax File Number | All individuals and businesses | Free |
| ACN | Australian Company Number | Registered companies only | Included with company registration |
| GST | GST Registration | Businesses with $75K+ turnover | Free (requires ABN first) |

**ABN vs TFN:** Your TFN is for personal tax identification. Your ABN is for business identification. You need both if you freelance.

**ABN vs ACN:** An ACN (Australian Company Number) is for registered companies only. Sole traders don't need an ACN — your ABN is sufficient.

**ABN vs GST registration:** Having an ABN does NOT mean you're registered for GST. GST is a separate registration that you apply for through the ATO.

**ABN vs business name:** Your ABN is a number, not a name. If you want to trade under a name other than your own legal name, you need to register a business name with ASIC ($39/year or $92/3 years).`,
  },
];

const relatedTools = [
  { name: 'ABN Lookup Tool', href: '/tools/abn-lookup', desc: 'Verify ABNs and check GST registration' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional invoices with your ABN' },
  { name: 'Business Registration Checklist', href: '/tools/business-registration-checklist', desc: 'Complete setup checklist for new freelancers' },
  { name: 'Tax Invoice Compliance Checker', href: '/tools/tax-invoice-compliance-checker', desc: 'Check your invoices meet ATO requirements' },
  { name: 'Invoice Numbering System', href: '/tools/invoice-numbering-system', desc: 'Design a professional numbering scheme' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on any amount' },
];

const relatedArticles = [
  { title: 'Do Freelancers Need an ABN in Australia?', href: '/blog/do-freelancers-need-abn' },
  { title: 'Tax Invoice vs Regular Invoice', href: '/blog/tax-invoice-vs-regular-invoice' },
  { title: 'Setting Up Your Freelance Business', href: '/blog/setting-up-freelance-business' },
  { title: 'Common Invoicing Mistakes to Avoid', href: '/blog/common-invoicing-mistakes' },
];

export default function ABNGuide() {
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
            <span className="text-gray-300">ABN Guide</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden pt-12 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-6">
              Updated for 2025-26 Financial Year
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              ABN Guide: Everything Australian Freelancers Need to Know
            </h1>
            <p className="text-lg text-gray-400 mb-6">
              The complete guide to Australian Business Numbers for freelancers. How to apply, when you need one,
              displaying on invoices, the 47% withholding rule, and managing your ABN.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>10 min read</span>
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
                <a key={s.id} href={`#${s.id}`} className="text-gray-400 hover:text-rose-400 transition-colors text-sm py-1">
                  &rarr; {s.title}
                </a>
              ))}
              <a href="#faq" className="text-gray-400 hover:text-rose-400 transition-colors text-sm py-1">&rarr; FAQs</a>
              <a href="#tools" className="text-gray-400 hover:text-rose-400 transition-colors text-sm py-1">&rarr; Related Tools</a>
            </nav>
          </div>
        </section>

        {/* Key Numbers Banner */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '47%', label: 'No-ABN withholding rate' },
              { num: '$0', label: 'ABN application cost' },
              { num: '10 min', label: 'Application time' },
              { num: '28 days', label: 'Must quote ABN within' },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl bg-rose-500/5 border border-rose-500/10">
                <div className="text-xl md:text-2xl font-bold text-rose-400">{s.num}</div>
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
                    .replace(/\n- /g, '</p><p class="pl-4 text-gray-400 my-1 before:content-[\'•\'] before:mr-2 before:text-rose-500">');
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
                <Link key={tool.href} href={tool.href} className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-rose-500/30 transition-colors group">
                  <div className="font-semibold text-gray-200 group-hover:text-rose-400 transition-colors">{tool.name}</div>
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
                <Link key={article.href} href={article.href} className="text-gray-400 hover:text-rose-400 transition-colors text-sm py-2 flex items-center gap-2">
                  <span className="text-rose-500">&rarr;</span> {article.title}
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
            <h2 className="text-2xl font-bold text-white mb-4">Professional Invoices with Your ABN</h2>
            <p className="text-gray-400 mb-8">
              InvoiceFlow displays your ABN on every invoice, ensures compliance,
              and eliminates the 47% withholding risk. Start free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">Start Free — No Credit Card</Button>
              </Link>
              <Link href="/tools/abn-lookup">
                <Button variant="secondary" size="lg">Try ABN Lookup</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
