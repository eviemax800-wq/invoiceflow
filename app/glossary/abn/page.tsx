import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'ABN (Australian Business Number): Complete Guide for Freelancers — InvoiceFlow',
  description:
    'What is an ABN? Your complete guide to the Australian Business Number for freelancers and sole traders. Learn how to apply, ABN on invoices, the 47% withholding rule, and more. Free, ATO-accurate for 2025-26.',
  keywords: [
    'what is ABN australia',
    'ABN for freelancers',
    'do I need an ABN',
    'australian business number',
    'ABN application',
    'ABN on invoices',
    'ABN withholding tax',
    '47% withholding rule',
    'ABN vs TFN',
    'ABN sole trader',
    'ABN freelancer australia',
    'how to get an ABN',
  ],
  alternates: { canonical: '/glossary/abn' },
  openGraph: {
    title: 'ABN (Australian Business Number): Complete Guide for Freelancers — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about ABNs — how to apply, invoicing requirements, the 47% withholding rule, and managing your ABN. Free, ATO-accurate guide.',
  },
};

const BASE_URL = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: `${BASE_URL}/glossary` },
    { '@type': 'ListItem', position: 3, name: 'ABN', item: `${BASE_URL}/glossary/abn` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it free to get an ABN in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, applying for an ABN is completely free. You can apply online at the Australian Business Register (abr.gov.au). Be wary of third-party websites that charge a fee for ABN applications — the official government process costs nothing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get an ABN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most ABN applications are processed immediately if you apply online through abr.gov.au. You will typically receive your ABN within minutes of completing the application. In some cases where the ATO needs to verify information, it can take up to 28 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I have an ABN and a regular job at the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, absolutely. Many Australians hold an ABN for freelance or side-business work while also being employed full-time or part-time. Your ABN is for your business activities, while your employer handles PAYG withholding for your employment income. You will need to declare both sources of income in your tax return.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an ABN as a freelancer in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are carrying on an enterprise (running a business), you are entitled to an ABN. As a freelancer, you almost certainly need one — without it, your clients are legally required to withhold 47% of your payment for tax. Having an ABN also allows you to issue proper tax invoices and claim business deductions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the 47% withholding rule for ABN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under Australian tax law, if a supplier (freelancer, contractor, or business) does not quote their ABN on an invoice, the payer is legally required to withhold 47% of the payment and send it to the ATO. This is known as "no ABN withholding" and is designed to ensure tax compliance. You can avoid this by simply quoting your ABN on every invoice.',
      },
    },
  ],
};

const sections = [
  { id: 'what-is-abn', title: 'What Is an ABN?' },
  { id: 'do-you-need-one', title: 'Do You Need One?' },
  { id: 'how-to-apply', title: 'How to Apply' },
  { id: 'abn-on-invoices', title: 'ABN on Invoices' },
  { id: 'withholding-rule', title: 'The 47% Withholding Rule' },
  { id: 'managing-your-abn', title: 'Managing Your ABN' },
];

const relatedTools = [
  {
    href: '/tools/abn-lookup',
    title: 'ABN Lookup Tool',
    description: 'Instantly verify any Australian Business Number against the official ABR register.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-generator',
    title: 'Invoice Generator',
    description: 'Create ATO-compliant invoices with your ABN automatically included.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    title: 'GST Calculator',
    description: 'Calculate GST-inclusive and exclusive amounts for your invoices instantly.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-invoice-compliance-checker',
    title: 'Tax Invoice Compliance Checker',
    description: 'Check if your invoices meet all ATO requirements including ABN display.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/abn-guide',
    title: 'The Complete ABN Guide',
    description: 'Everything you need to know about getting, using, and managing your ABN.',
  },
  {
    href: '/guides/gst-for-freelancers',
    title: 'GST for Freelancers',
    description: 'When to register, how to charge it, and how to lodge your BAS.',
  },
  {
    href: '/guides/invoicing-101',
    title: 'Invoicing 101',
    description: 'A beginner-friendly guide to creating professional, ATO-compliant invoices.',
  },
];

export default function ABNGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">ABN</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Compliance
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ABN{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              (Australian Business Number)
            </span>
          </h1>

          {/* One-line summary */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Your unique 11-digit identifier that tells the ATO and your clients that you&apos;re a legitimate business. Every freelancer needs one.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>2025-26 FY</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-emerald-500/5 border border-emerald-500/20 p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300">
                <strong className="text-white">11-digit unique identifier</strong> issued by the Australian Business Register (ABR) to businesses and sole traders operating in Australia.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300">
                <strong className="text-white">Completely free to apply for</strong> at{' '}
                <a href="https://www.abr.gov.au" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
                  abr.gov.au
                </a>
                {' '}&mdash; takes about 10 minutes online.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300">
                <strong className="text-white">Required on every invoice</strong> you send &mdash; without it, clients must withhold 47% of your payment for tax.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300">
                <strong className="text-white">Applied for via abr.gov.au</strong> &mdash; you&apos;ll need your Tax File Number (TFN) and identity documents to apply.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-8">
          <h2 className="text-lg font-bold text-white mb-4">Table of Contents</h2>
          <nav className="grid sm:grid-cols-2 gap-2">
            {sections.map((section, i) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-700/40 transition-colors group"
              >
                <span className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm font-medium text-emerald-400 flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                  {section.title}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-16">

        {/* Section 1: What Is an ABN? */}
        <section id="what-is-abn">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-400">
              1
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is an ABN?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              An <strong className="text-white">Australian Business Number (ABN)</strong> is a unique <strong className="text-white">11-digit identifier</strong> issued by the Australian Business Register (ABR) to all businesses operating in Australia. Think of it as your business&apos;s ID number &mdash; it&apos;s how the government, other businesses, and the public identify your enterprise.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Your ABN is <strong className="text-white">publicly searchable</strong> on the ABR website. Anyone can look up an ABN to verify that a business is legitimate, check its GST registration status, and see its registered business name. This transparency is one of the key purposes of the ABN system &mdash; it builds trust between businesses and their clients.
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-3">ABN vs TFN: What&apos;s the Difference?</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Many people confuse the ABN with the <strong className="text-white">Tax File Number (TFN)</strong>. They serve very different purposes:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-900/50 p-4">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2">ABN (Australian Business Number)</h4>
                  <ul className="text-sm text-gray-400 space-y-1.5">
                    <li>&bull; Identifies your <strong className="text-gray-200">business</strong></li>
                    <li>&bull; 11 digits</li>
                    <li>&bull; Publicly searchable</li>
                    <li>&bull; Used for invoicing and business dealings</li>
                    <li>&bull; Required for GST registration</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4">
                  <h4 className="text-sm font-semibold text-teal-400 mb-2">TFN (Tax File Number)</h4>
                  <ul className="text-sm text-gray-400 space-y-1.5">
                    <li>&bull; Identifies <strong className="text-gray-200">you</strong> as a taxpayer</li>
                    <li>&bull; 8 or 9 digits</li>
                    <li>&bull; Strictly confidential</li>
                    <li>&bull; Used for tax returns and employment</li>
                    <li>&bull; Issued to all individuals</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              The ABN system was introduced on 1 July 2000 as part of <strong className="text-white">A New Tax System (ANTS)</strong> alongside the GST. It replaced the various state and federal business identification numbers that existed before, creating one unified national system. Today, over 10 million active ABNs are registered in Australia.
            </p>
          </div>
        </section>

        {/* Section 2: Do You Need One? */}
        <section id="do-you-need-one">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-400">
              2
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Do You Need One?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO uses the <strong className="text-white">&ldquo;carrying on an enterprise&rdquo;</strong> test to determine whether you&apos;re entitled to an ABN. You don&apos;t technically <em>have</em> to get one, but if you&apos;re freelancing or running any kind of business, you almost certainly <em>should</em>. Without an ABN, clients must withhold 47% of every payment they make to you.
            </p>
            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Signs You Need an ABN</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'You invoice clients for your work',
                  'You have repeat clients or ongoing contracts',
                  'You control how, when, and where you work',
                  'You supply your own tools and equipment',
                  'You can accept or reject work',
                  'You operate under a business name',
                  'You expect to earn $75K+ (for GST purposes)',
                  'You want to claim business deductions',
                ].map((sign) => (
                  <div key={sign} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-300">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-3">Hobby vs Business: Where&apos;s the Line?</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                The ATO distinguishes between a <strong className="text-white">hobby</strong> (which doesn&apos;t need an ABN) and a <strong className="text-white">business</strong> (which does). Key differences:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-900/50 p-4">
                  <h4 className="text-sm font-semibold text-amber-400 mb-2">Hobby (No ABN Needed)</h4>
                  <ul className="text-sm text-gray-400 space-y-1.5">
                    <li>&bull; Done primarily for pleasure or recreation</li>
                    <li>&bull; No intention of profit</li>
                    <li>&bull; Sporadic and irregular</li>
                    <li>&bull; No business plan or structure</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2">Business (ABN Required)</h4>
                  <ul className="text-sm text-gray-400 space-y-1.5">
                    <li>&bull; Intention to make a profit</li>
                    <li>&bull; Regular and repeated activity</li>
                    <li>&bull; Business plan or growth strategy</li>
                    <li>&bull; Issued invoices or has clients</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              If you&apos;re a <strong className="text-white">freelancer, contractor, or sole trader</strong> in Australia doing paid work for clients, the answer is almost always yes &mdash; you need an ABN. The process is free and fast, and the consequences of not having one (47% withholding) far outweigh the effort of applying.
            </p>
          </div>
        </section>

        {/* Section 3: How to Apply */}
        <section id="how-to-apply">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-400">
              3
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Apply</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Getting an ABN is <strong className="text-white">free and takes about 10 minutes</strong>. You apply online through the official Australian Business Register at{' '}
              <a href="https://www.abr.gov.au" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
                abr.gov.au
              </a>
              . Most applications are processed instantly.
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Step-by-Step Application Process</h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Go to abr.gov.au', desc: 'Visit the Australian Business Register website and click "Apply for an ABN". This is the only official, free way to apply.' },
                  { step: '2', title: 'Confirm your identity', desc: 'You\'ll need your Tax File Number (TFN) and identity details. If you\'re an Australian citizen, your name, date of birth, and TFN are usually enough.' },
                  { step: '3', title: 'Choose your business structure', desc: 'For most freelancers, this will be "Sole Trader". You\'ll also enter your business activity — for example, "Graphic Design Services" or "Software Development".' },
                  { step: '4', title: 'Provide business details', desc: 'Enter your business address, expected start date, and estimated annual turnover. You can also register a business name or for GST at the same time.' },
                  { step: '5', title: 'Submit and receive your ABN', desc: 'Most applications receive an ABN immediately. In some cases, the ATO may need additional verification (up to 28 days). You\'ll receive confirmation by email.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-400 flex-shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-6 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div>
                  <h4 className="text-amber-400 font-semibold mb-1">Watch Out for Paid ABN Services</h4>
                  <p className="text-sm text-gray-300">
                    Some third-party websites charge $50&ndash;$150 to &ldquo;apply for your ABN&rdquo;. These are unnecessary &mdash; the official application at{' '}
                    <strong className="text-white">abr.gov.au is 100% free</strong>. Always apply directly through the government website.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">What you need to apply:</strong> Your Tax File Number (TFN), your full legal name and date of birth, your residential address, and details about your business activity. If you&apos;re a non-resident, you&apos;ll also need your passport details.
            </p>
          </div>
        </section>

        {/* Section 4: ABN on Invoices */}
        <section id="abn-on-invoices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-400">
              4
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">ABN on Invoices</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Under Australian tax law, you are <strong className="text-white">legally required to quote your ABN</strong> on every invoice you issue. This isn&apos;t optional &mdash; if you don&apos;t include it, the client receiving the invoice must withhold 47% of your payment and remit it to the ATO.
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Tax Invoice Requirements (ATO)</h3>
              <p className="text-sm text-gray-400 mb-4">
                For invoices <strong className="text-gray-200">under $1,000</strong>, the ATO requires:
              </p>
              <ul className="space-y-2">
                {[
                  'Your identity (business name or legal name)',
                  'Your ABN — prominently displayed',
                  'The date of the invoice',
                  'A brief description of the goods or services provided',
                  'The total amount payable (GST-inclusive if registered)',
                  'If GST-registered: the amount of GST included and the words "Tax Invoice"',
                ].map((req) => (
                  <li key={req} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                For invoices <strong className="text-gray-200">$1,000 and over</strong>, you also need the buyer&apos;s identity or ABN, and itemised descriptions with individual GST amounts.
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your ABN should be <strong className="text-white">clearly visible</strong> on the invoice &mdash; typically in the header area near your business name and contact details. It&apos;s common practice to format it with spaces for readability, e.g., <span className="font-mono text-emerald-400">51 824 753 556</span> rather than <span className="font-mono text-gray-400">51824753556</span>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If you&apos;re registered for <strong className="text-white">GST</strong>, your invoice must also include the words &ldquo;Tax Invoice&rdquo; at the top, show GST as a separate line item or state that the total includes GST, and display the total amount including GST. InvoiceFlow handles all of this formatting automatically.
            </p>
          </div>
        </section>

        {/* Section 5: The 47% Withholding Rule */}
        <section id="withholding-rule">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-400">
              5
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The 47% Withholding Rule</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              This is the single biggest reason to get an ABN. Under <strong className="text-white">Section 12-190 of Schedule 1 of the Taxation Administration Act 1953</strong>, if a supplier does not quote their ABN to a payer, the payer must <strong className="text-white">withhold 47% of the total payment</strong> (the top marginal tax rate plus Medicare levy) and remit it to the ATO.
            </p>
            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-3">What 47% Withholding Looks Like</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-900/50 p-4">
                  <h4 className="text-sm font-semibold text-red-400 mb-2">Without ABN</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Invoice amount</span>
                      <span className="text-white">$5,000</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>47% withheld</span>
                      <span className="text-red-400">-$2,350</span>
                    </div>
                    <div className="border-t border-gray-700 pt-2 flex justify-between font-medium">
                      <span className="text-gray-300">You receive</span>
                      <span className="text-red-400">$2,650</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2">With ABN Quoted</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Invoice amount</span>
                      <span className="text-white">$5,000</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Tax withheld</span>
                      <span className="text-emerald-400">$0</span>
                    </div>
                    <div className="border-t border-gray-700 pt-2 flex justify-between font-medium">
                      <span className="text-gray-300">You receive</span>
                      <span className="text-emerald-400">$5,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                While you can claim back over-withheld tax through your annual tax return, it means <strong className="text-gray-200">waiting months</strong> to get your money back. Getting an ABN avoids this entirely.
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">How to avoid the 47% withholding:</strong> Simply quote your ABN on every invoice you issue. Make sure it&apos;s clearly displayed &mdash; not buried in fine print. If a client asks for your ABN before paying, provide it immediately. It&apos;s also good practice to include your ABN in your email signature and any contracts you sign.
            </p>
            <p className="text-gray-300 leading-relaxed">
              There are some <strong className="text-white">exceptions</strong> to the no-ABN withholding rule. Withholding is not required if the total payment is $75 or less (excluding GST), if the supplier is under 18 and the payment is $350 or less per week, or if the payment is for a domestic or private nature (e.g., hiring a babysitter). However, for all professional freelancing and contracting work, the rule applies.
            </p>
          </div>
        </section>

        {/* Section 6: Managing Your ABN */}
        <section id="managing-your-abn">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-400">
              6
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Managing Your ABN</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Once you have your ABN, you need to keep your details <strong className="text-white">up to date</strong> with the Australian Business Register. This is a legal obligation &mdash; you must update your details within 28 days of any changes.
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Keeping Your ABN Current</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-1">Updating Your Details</h4>
                  <p className="text-sm text-gray-400">
                    Log into the ABR portal to update your <strong className="text-gray-200">business address, contact details, business activity, or authorised contacts</strong>. You can also update details through your registered tax agent or by calling the ATO. Changes like a new address or adding a business name are common for growing freelancers.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Cancelling Your ABN</h4>
                  <p className="text-sm text-gray-400">
                    If you stop running your business, you should <strong className="text-gray-200">cancel your ABN</strong> through the ABR. This prevents misuse and ensures the public register is accurate. You can reapply for a new ABN if you restart your business later. Before cancelling, make sure all outstanding BAS and tax returns are lodged.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">GST Registration</h4>
                  <p className="text-sm text-gray-400">
                    <strong className="text-gray-200">GST registration is separate from your ABN</strong> but linked to it. You must register for GST once your annual turnover reaches <strong className="text-gray-200">$75,000</strong> (or $150,000 for non-profit organisations). You can voluntarily register below this threshold if it benefits your business (e.g., to claim GST credits on purchases). GST registration can be done through the ABR portal at the same time as your ABN application.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">ABN Entitlement Review</h4>
                  <p className="text-sm text-gray-400">
                    The ATO periodically reviews ABN holders to ensure they&apos;re still <strong className="text-gray-200">entitled to hold an ABN</strong>. If you receive a review notice, respond within the specified timeframe. Failure to respond may result in your ABN being cancelled. This is routine and nothing to worry about &mdash; just confirm you&apos;re still carrying on an enterprise.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Pro tip:</strong> Set a calendar reminder to review your ABR details annually. Check that your business address, activity description, and contact information are all current. This takes two minutes and keeps you compliant with ATO requirements.
            </p>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage your ABN and invoicing</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/40 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-emerald-400 transition-colors">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-emerald-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth resources for Australian freelancers</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-teal-500/40 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-teal-400 transition-colors">
                {guide.title}
              </h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-teal-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
          {(faqSchema.mainEntity as Array<{ '@type': string; name: string; acceptedAnswer: { '@type': string; text: string } }>).map((faq, i) => (
            <details key={i} className="group rounded-xl bg-gray-800/40 border border-gray-700/40">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-emerald-400 transition-colors">
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

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Got Your ABN? Start Invoicing Like a Pro.
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          InvoiceFlow automatically displays your ABN, formats ATO-compliant tax invoices, and calculates GST. Start sending professional invoices in under 2 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button>Start Free &mdash; No Card Required</Button>
          </Link>
          <Link href="/tools">
            <Button variant="secondary">Browse 100+ Free Tools</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
