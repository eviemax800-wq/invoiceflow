import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Professional Indemnity Insurance: Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
  description:
    'What is professional indemnity insurance? Learn about PI insurance costs ($300-$700/yr), what it covers, who needs it, and how Australian freelancers and sole traders can get covered. Updated for 2025-26.',
  keywords: [
    'professional indemnity insurance freelancer',
    'PI insurance sole trader australia',
    'do freelancers need professional indemnity',
    'professional indemnity insurance cost',
    'professional indemnity vs public liability',
    'errors and omissions insurance australia',
    'PI insurance for consultants',
    'professional indemnity insurance online',
    'freelancer insurance australia',
    'professional indemnity cover level',
    'PI insurance tax deductible',
    'professional indemnity insurance quote',
  ],
  alternates: { canonical: '/glossary/professional-indemnity' },
  openGraph: {
    title: 'Professional Indemnity Insurance: Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
    description:
      'Everything self-employed Australians need to know about PI insurance: typical costs $300-$700/yr, what it covers, who needs it, and how to get the right policy as a freelancer or sole trader.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/professional-indemnity',
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
    { '@type': 'ListItem', position: 3, name: 'Professional Indemnity Insurance', item: `${BASE_URL}/glossary/professional-indemnity` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is professional indemnity insurance mandatory for freelancers in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional indemnity insurance is not legally mandatory for all freelancers in Australia. However, certain regulated professions are required by law to hold PI insurance, including financial advisers (regulated by ASIC), lawyers (regulated by their state Law Society), accountants (CPA Australia and CA ANZ members), engineers, and architects. Even if your profession does not legally require it, many clients and platforms will require proof of PI insurance before awarding contracts. It is highly recommended for any freelancer who provides advice, designs, code, or professional services that a client relies on.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much professional indemnity insurance do I need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Australian freelancers should carry a minimum of $1 million in professional indemnity cover. The appropriate level depends on the size of your contracts, the nature of your work, and the potential financial impact of an error. If you work on large projects or with enterprise clients, you may need $2 million to $5 million or more. Some government contracts and corporate clients specify a minimum cover level in their procurement requirements. When choosing your cover level, consider the worst-case scenario: what is the maximum financial loss a client could suffer from an error in your work?',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I deduct PI insurance premiums on my tax return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, professional indemnity insurance premiums are 100% tax deductible as a business expense for Australian sole traders and freelancers. You claim the deduction in your individual tax return under business expenses. If you are registered for GST, you can also claim the GST component as an input tax credit on your BAS. Keep your premium notice, certificate of currency, and payment receipt as evidence for ATO audit purposes. The deduction reduces your taxable income, so the effective cost of PI insurance is reduced by your marginal tax rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between professional indemnity and public liability insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional indemnity (PI) insurance covers claims arising from your professional advice, services, or work product — such as errors, omissions, negligence, or breach of professional duty that causes a client financial loss. Public liability insurance covers claims for bodily injury or property damage that occurs as a result of your business activities — for example, a client trips over your equipment at their office, or you accidentally damage their property. PI protects against "pure economic loss" from professional errors, while public liability protects against physical harm or damage. Most freelancers who visit client sites or interact with the public need both types of cover.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need PI insurance if I have a contract with limitation of liability?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A limitation of liability clause in your contract can cap your financial exposure, but it does not eliminate the need for PI insurance. Limitation clauses can be challenged in court and may not hold up in all circumstances — particularly in cases of negligence or where consumer law applies. PI insurance covers your legal defence costs even if the claim is ultimately unsuccessful, which can easily exceed $50,000 to $100,000 in legal fees alone. Additionally, some clients will require proof of PI insurance regardless of contract terms. Think of limitation clauses and PI insurance as complementary protections, not alternatives.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-pi-insurance', label: '1. What Is Professional Indemnity Insurance?' },
  { id: 'do-freelancers-need-pi', label: '2. Do Freelancers Need PI Insurance?' },
  { id: 'what-does-pi-cover', label: '3. What Does PI Insurance Cover?' },
  { id: 'how-much-does-it-cost', label: '4. How Much Does It Cost?' },
  { id: 'pi-vs-other-insurance', label: '5. PI vs Public Liability vs Other Insurance' },
  { id: 'how-to-get-pi-insurance', label: '6. How to Get PI Insurance as a Freelancer' },
];

const relatedTools = [
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate your ideal hourly or daily rate factoring in insurance, super, and overheads.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-benefits-cost-calculator',
    name: 'Benefits Cost Calculator',
    description: 'See the true cost of insurance, super, leave, and other benefits you need to fund yourself.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-deduction-finder',
    name: 'Tax Deduction Finder',
    description: 'Discover all the tax deductions you can claim as a freelancer, including insurance premiums.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices that protect your business with proper terms and conditions.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'How to price your services to cover insurance, super, tax, and still earn what you deserve.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Income tax, deductions, BAS, and everything else you need to know as an Australian sole trader.',
  },
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays and protect your cash flow as a freelancer.',
  },
];

export default function ProfessionalIndemnityGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Professional Indemnity Insurance</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Business Protection
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Professional Indemnity Insurance{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
              for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Professional indemnity (PI) insurance protects you against claims of negligence, errors, or bad advice. If a client sues because your work caused them a financial loss, PI covers your legal costs and any damages awarded. For Australian freelancers and sole traders, it&apos;s one of the most important investments you can make to protect your personal assets.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Australia-Focused 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$300</span>
              <div>
                <p className="text-white font-medium text-sm">$300&ndash;$700 Typical Annual Cost</p>
                <p className="text-gray-400 text-sm">What most Australian freelancers pay for $1M&ndash;$2M of PI cover per year</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$1M+</span>
              <div>
                <p className="text-white font-medium text-sm">Recommended Minimum Cover</p>
                <p className="text-gray-400 text-sm">$1 million minimum cover level recommended for most freelancers</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">100%</span>
              <div>
                <p className="text-white font-medium text-sm">Tax Deductible</p>
                <p className="text-gray-400 text-sm">PI insurance premiums are fully deductible as a business expense</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$0</span>
              <div>
                <p className="text-white font-medium text-sm">Cost of an Uninsured Claim</p>
                <p className="text-gray-400 text-sm">Without PI, a single claim could wipe out your personal assets entirely</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-emerald-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Professional Indemnity Insurance? */}
        <section id="what-is-pi-insurance">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Professional Indemnity Insurance?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Professional indemnity (PI) insurance is a type of business insurance that <strong className="text-white">protects professionals against claims of negligence, errors, omissions, or bad advice</strong>. If a client alleges that your professional services caused them a financial loss, PI insurance covers your legal defence costs and any damages or settlement amounts awarded against you.
            </p>
            <p className="text-gray-300 leading-relaxed">
              PI insurance is also known as <strong className="text-white">&quot;errors and omissions&quot; (E&amp;O) insurance</strong> in the United States, or simply &quot;professional liability insurance.&quot; In Australia, the term professional indemnity is standard across the insurance industry and regulatory bodies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              It is important to understand that PI insurance is <strong className="text-white">different from public liability insurance</strong>. Public liability covers claims for physical injury to people or damage to property caused by your business activities &mdash; for example, a client tripping over your laptop bag at their office. PI insurance, on the other hand, covers <strong className="text-white">pure economic loss</strong> arising from your professional advice, designs, code, writing, or other work product.
            </p>
            <p className="text-gray-300 leading-relaxed">
              PI insurance is designed for <strong className="text-white">service-based businesses</strong> &mdash; anyone who provides advice, creates work product, or delivers services that a client relies on to make decisions or run their business. This includes developers, designers, consultants, marketers, accountants, engineers, architects, and many other professional disciplines.
            </p>
            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Key Point</p>
              <p className="text-gray-400 text-sm">
                PI insurance is a <strong className="text-gray-200">&quot;claims made&quot; policy</strong>, meaning it covers claims made during the policy period, regardless of when the alleged error occurred (subject to the retroactive date). This is different from &quot;occurrence-based&quot; policies like public liability. It means you need to maintain continuous cover &mdash; if you let your policy lapse, you lose protection for past work as well.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Do Freelancers Need PI Insurance? */}
        <section id="do-freelancers-need-pi">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Do Freelancers Need PI Insurance?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              PI insurance is <strong className="text-white">not legally required for all freelancers</strong> in Australia. Unlike some regulated professions, there is no blanket law that requires every self-employed person to carry PI cover. However, it is <strong className="text-white">highly recommended</strong> for anyone who provides professional services, and in many cases it is effectively mandatory due to client or industry requirements.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Some professions <strong className="text-white">must</strong> hold PI insurance by law or as a condition of their professional registration. If you work in any of these fields, PI insurance is non-negotiable:
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <h4 className="text-white font-semibold mb-4">Professions Where PI Insurance Is Mandatory</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-gray-200">Financial advisers</strong> &mdash; regulated by ASIC</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-gray-200">Lawyers</strong> &mdash; regulated by state Law Societies</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-gray-200">Accountants</strong> &mdash; CA ANZ and CPA members</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-gray-200">Engineers</strong> &mdash; state registration boards</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-gray-200">Architects</strong> &mdash; state registration boards</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-gray-200">Real estate agents</strong> &mdash; state licensing</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mt-6">
              Even if your profession does not legally require PI insurance, there are compelling reasons to carry it. Many clients and platforms <strong className="text-white">require proof of PI insurance before awarding contracts</strong>, especially government agencies and enterprise clients. As a sole trader, you have <strong className="text-white">unlimited personal liability</strong> &mdash; your home, car, savings, and other personal assets are all at risk if a client sues and wins.
            </p>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Real-World Risk Scenarios</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><strong className="text-gray-200">Developer:</strong> A bug in your code causes a client&apos;s e-commerce site to go down for 3 days, costing them $50,000 in lost sales.</li>
                <li><strong className="text-gray-200">Designer:</strong> A logo you created infringes on another company&apos;s trademark, and your client gets sued.</li>
                <li><strong className="text-gray-200">Consultant:</strong> Your strategic advice leads a client to invest in a market segment that fails, and they blame your analysis.</li>
                <li><strong className="text-gray-200">Marketer:</strong> A campaign you manage breaches advertising standards, and the client faces regulatory fines.</li>
                <li><strong className="text-gray-200">Any freelancer:</strong> You deliver a project late, and the client claims the delay caused them financial loss.</li>
              </ul>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Bottom Line</p>
              <p className="text-gray-400 text-sm">
                If you provide any form of professional service, advice, or work product that a client relies on, <strong className="text-gray-200">you should have PI insurance</strong>. At $300&ndash;$700 per year, the cost is trivial compared to the financial devastation of an uninsured claim. It is also 100% tax deductible, reducing the effective cost further.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: What Does PI Insurance Cover? */}
        <section id="what-does-pi-cover">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Does PI Insurance Cover?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A standard professional indemnity insurance policy covers a range of claims that can arise from your professional services. Understanding what is and isn&apos;t covered is essential for making sure you have the right protection in place.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What PI Insurance Covers
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Claims of negligence in professional services</li>
                  <li>Errors or omissions in your work product</li>
                  <li>Breach of professional duty or duty of care</li>
                  <li>Unintentional breach of confidentiality</li>
                  <li>Loss of documents or data entrusted to you</li>
                  <li>Unintentional defamation (libel or slander)</li>
                  <li>Unintentional intellectual property infringement</li>
                  <li>Legal defence costs (even if the claim fails)</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  What PI Insurance Does NOT Cover
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Deliberate wrongdoing, fraud, or dishonesty</li>
                  <li>Criminal acts or intentional breaches</li>
                  <li>Bodily injury or property damage (that&apos;s public liability)</li>
                  <li>Pre-existing issues known before the policy started</li>
                  <li>Fines, penalties, or punitive damages</li>
                  <li>Contractual guarantees or warranties of results</li>
                  <li>Claims made after the policy has lapsed without run-off cover</li>
                  <li>Trading insolvency or inability to pay debts</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Important: Claims-Made Basis</p>
              <p className="text-gray-400 text-sm">
                PI insurance operates on a <strong className="text-gray-200">&quot;claims-made&quot; basis</strong>. This means the policy that responds to a claim is the policy in force when the claim is made (or when you first become aware of circumstances that could give rise to a claim), not the policy that was in force when the work was performed. This is why you need to maintain <strong className="text-gray-200">continuous cover</strong> and consider <strong className="text-gray-200">run-off cover</strong> if you cease trading.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: How Much Does It Cost? */}
        <section id="how-much-does-it-cost">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How Much Does It Cost?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The cost of PI insurance varies depending on your profession, annual revenue, cover level, and claims history. For most Australian freelancers, PI insurance is surprisingly affordable &mdash; <strong className="text-white">most pay between $300 and $700 per year</strong> for $1M to $2M of cover.
            </p>

            {/* Cost Table by Profession */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Profession</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Typical Annual Cost</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden sm:table-cell">Risk Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">IT / Developers</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">$300&ndash;$800</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Medium</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Designers</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">$250&ndash;$600</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Low&ndash;Medium</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Consultants</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">$400&ndash;$1,200</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Medium&ndash;High</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Photographers</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">$200&ndash;$500</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Low</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Writers / Marketers</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">$200&ndash;$500</td>
                    <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Factors That Affect Your Premium</h3>
            <p className="text-gray-300 leading-relaxed">
              Insurers assess your premium based on a combination of factors. Understanding these can help you find the best rate and avoid overpaying:
            </p>

            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$</span>
                <div>
                  <p className="text-white font-medium text-sm">Annual Turnover</p>
                  <p className="text-gray-400 text-sm">Higher revenue generally means higher premiums, as the potential for larger claims increases.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">!</span>
                <div>
                  <p className="text-white font-medium text-sm">Profession &amp; Risk Profile</p>
                  <p className="text-gray-400 text-sm">Some professions carry higher risk (e.g., financial advice vs photography), which affects the premium.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">^</span>
                <div>
                  <p className="text-white font-medium text-sm">Cover Limit ($1M&ndash;$20M)</p>
                  <p className="text-gray-400 text-sm">The maximum amount the insurer will pay per claim or per year. Higher limits cost more but provide greater protection.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">%</span>
                <div>
                  <p className="text-white font-medium text-sm">Excess / Deductible</p>
                  <p className="text-gray-400 text-sm">The amount you pay out of pocket per claim. A higher excess lowers your premium but increases your per-claim cost.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">~</span>
                <div>
                  <p className="text-white font-medium text-sm">Claims History &amp; Retroactive Date</p>
                  <p className="text-gray-400 text-sm">Prior claims increase your premium. The retroactive date determines how far back in time you&apos;re covered for past work.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Tax Deduction Bonus</p>
              <p className="text-gray-400 text-sm">
                PI insurance premiums are <strong className="text-gray-200">100% tax deductible</strong> as a business expense. If you&apos;re in the 32.5% tax bracket, a $500 premium effectively costs you just <strong className="text-gray-200">$337.50</strong> after the tax benefit. If you&apos;re GST-registered, you also claim the GST on the premium as an input tax credit, reducing the cost further.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: PI vs Public Liability vs Other Insurance */}
        <section id="pi-vs-other-insurance">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">PI vs Public Liability vs Other Insurance</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Freelancers often confuse the different types of business insurance. Each covers a different category of risk, and most freelancers need <strong className="text-white">at least PI and public liability</strong> as a minimum. Here is a comparison of the key types:
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Insurance Type</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">What It Covers</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden md:table-cell">Example Scenario</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Professional Indemnity</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Professional errors, negligence, bad advice causing financial loss</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">Your code has a bug that causes the client to lose $20K in revenue</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Public Liability</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Physical injury to people or damage to property at your workplace</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">A client trips over your equipment at a meeting and breaks their wrist</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Cyber Liability</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Data breaches, hacking, ransomware, and privacy violations</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">Your laptop is stolen with client data and they suffer a breach</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Business Insurance</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Equipment theft, fire, natural disaster, business interruption</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">Your home office is flooded and you lose $10K of equipment</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Income Protection</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Your income if you are injured or ill and cannot work</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">You break your arm and can&apos;t type for 3 months, losing $30K income</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3">Minimum Recommended Cover</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Professional Indemnity</strong> &mdash; essential for all service-based freelancers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-200">Public Liability</strong> &mdash; essential if you visit client sites or meet in person</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-gray-300 font-semibold mb-3">Worth Considering</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span><strong className="text-gray-200">Cyber Liability</strong> &mdash; if you handle client data or work with sensitive systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span><strong className="text-gray-200">Income Protection</strong> &mdash; if you have no sick leave or income safety net</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Combined Packages</p>
              <p className="text-gray-400 text-sm">
                Many Australian insurers offer <strong className="text-gray-200">combined PI + Public Liability packages</strong> at a discounted rate. Companies like BizCover, Insurance Market, and industry-specific providers often bundle these together, which can save you 10&ndash;20% compared to buying them separately. Always compare the combined price against individual policies to make sure you&apos;re getting the best deal.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How to Get PI Insurance as a Freelancer */}
        <section id="how-to-get-pi-insurance">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Get PI Insurance as a Freelancer</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Getting PI insurance as an Australian freelancer is straightforward. You can typically get a quote online in under 10 minutes and be covered the same day. Here are the main channels and steps:
            </p>

            <div className="space-y-4 mt-6">
              {/* Step 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Choose Where to Buy</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  You have three main options for purchasing PI insurance in Australia:
                </p>
                <ul className="space-y-2 text-sm text-gray-400 ml-4">
                  <li><strong className="text-gray-200">Online comparison sites</strong> &mdash; BizCover, Insurance Market, Compare Club. Fastest option, instant quotes from multiple insurers.</li>
                  <li><strong className="text-gray-200">Industry associations</strong> &mdash; Many professional associations (e.g., ACS for IT, AIGA for designers) negotiate group rates for their members, often 10&ndash;20% cheaper than retail.</li>
                  <li><strong className="text-gray-200">Insurance brokers</strong> &mdash; Best for complex needs, high cover levels, or if you&apos;ve had prior claims. A broker can advocate on your behalf and find specialist underwriters.</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Decide on Your Cover Level</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">$1 million is the recommended minimum</strong> for most freelancers. Consider the maximum potential loss a client could suffer from an error in your work. If you work with enterprise clients or on high-value projects, you may need $2M, $5M, or even $10M of cover. Many government and corporate procurement processes specify a minimum cover level in their requirements &mdash; check before you apply for contracts.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Understand Key Policy Terms</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold text-xs flex-shrink-0 mt-1">EXCESS</span>
                    <p>The amount you pay out of pocket per claim before the insurer pays. Typical excess for freelancers is $500&ndash;$2,500. A higher excess lowers your premium.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold text-xs flex-shrink-0 mt-1">RETRO DATE</span>
                    <p>The retroactive date determines how far back your policy covers. If set to &quot;unlimited,&quot; you&apos;re covered for all past work. If set to a specific date, only work performed after that date is covered.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold text-xs flex-shrink-0 mt-1">RUN-OFF</span>
                    <p>Run-off cover protects you after you stop trading or retire. Since PI is claims-made, you could face a claim years after completing work. Most policies offer run-off as an add-on.</p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Read the PDS</h3>
                  <span className="text-xs text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">Critical</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Always read the <strong className="text-gray-200">Product Disclosure Statement (PDS)</strong> before purchasing. The PDS contains the full terms, conditions, exclusions, and claims process. Pay particular attention to the exclusions section &mdash; make sure your specific type of work is covered. Some policies exclude certain activities (e.g., financial advice, legal work) unless you have the relevant professional qualifications.
                </p>
              </div>

              {/* Step 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Protect Yourself Proactively</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  PI insurance is your safety net, but prevention is better than a claim. Keep detailed records of all <strong className="text-gray-200">client briefs, contracts, scope documents, email communications, and deliverable sign-offs</strong>. These records serve as evidence in case of a dispute and can be the difference between a claim succeeding or being dismissed. Use written contracts for every engagement, confirm scope changes in writing, and get sign-off on milestones.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Pro Tip: Certificate of Currency</p>
              <p className="text-gray-400 text-sm">
                Once you have PI insurance, your insurer will provide a <strong className="text-gray-200">Certificate of Currency</strong>. This is a one-page document confirming your cover level, policy number, and expiry date. Keep a digital copy ready to share with clients &mdash; many will request it before signing a contract. It is also useful to mention your PI cover on your invoices and proposals to demonstrate professionalism and build client confidence.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free calculators to help you price your services and manage business costs.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on pricing, tax, and business management for freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-emerald-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-emerald-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Protect Your Business, Focus on Your Work
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps freelancers create professional invoices, track expenses, and manage their business finances. Build your insurance costs into your rates and get paid what you&apos;re worth. Start for free &mdash; no accountant required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/rate-calculator">
              <Button variant="secondary">Try the Rate Calculator</Button>
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
