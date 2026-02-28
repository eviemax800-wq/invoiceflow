import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Free Business Guides for Australian Freelancers — InvoiceFlow',
  description:
    'Comprehensive guides on GST, tax, ABN, invoicing, superannuation, EOFY preparation, getting paid faster, and setting rates in Australia. Written for sole traders, contractors, and freelancers.',
  alternates: { canonical: '/guides' },
  openGraph: {
    title: 'Free Business Guides — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about invoicing, GST, tax deductions, and getting paid on time.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://invoiceflow-teal.vercel.app/guides' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are these business guides free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all our guides are completely free. No sign-up required. We also offer 100+ free business tools including a GST calculator, invoice generator, and rate calculator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are the guides specific to Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every guide uses current ATO rates, Australian tax law, and references specific to the 2025-26 financial year. We cover GST, BAS, ABN requirements, PAYG, superannuation, and state-specific rules.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who are these guides for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our guides are written for Australian sole traders, freelancers, contractors, and small business owners. Whether you are just starting out or have been freelancing for years, you will find actionable advice tailored to your situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often are the guides updated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We update our guides whenever ATO rates change, new legislation takes effect, or best practices evolve. All guides reflect current 2025-26 financial year rates and thresholds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use InvoiceFlow with these guides?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Our guides include links to relevant free tools and features within InvoiceFlow. You can start with our free tier (5 invoices/month) and upgrade to Pro ($19/month) as your business grows.',
      },
    },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Free Business Guides for Australian Freelancers',
  numberOfItems: 8,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Complete GST Guide for Australian Freelancers',
      url: 'https://invoiceflow-teal.vercel.app/guides/gst-for-freelancers',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Invoicing 101: The Complete Beginner\'s Guide',
      url: 'https://invoiceflow-teal.vercel.app/guides/invoicing-101',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Getting Paid Faster: A Freelancer\'s Guide',
      url: 'https://invoiceflow-teal.vercel.app/guides/getting-paid-faster',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'How to Set Your Freelance Rates in Australia',
      url: 'https://invoiceflow-teal.vercel.app/guides/setting-freelance-rates',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'The Complete Tax Guide for Australian Freelancers',
      url: 'https://invoiceflow-teal.vercel.app/guides/tax-guide-freelancers',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'ABN Guide: Everything Freelancers Need to Know',
      url: 'https://invoiceflow-teal.vercel.app/guides/abn-guide',
    },
    {
      '@type': 'ListItem',
      position: 7,
      name: 'Superannuation Guide for Australian Freelancers',
      url: 'https://invoiceflow-teal.vercel.app/guides/superannuation-for-freelancers',
    },
    {
      '@type': 'ListItem',
      position: 8,
      name: 'End of Financial Year Guide for Australian Freelancers',
      url: 'https://invoiceflow-teal.vercel.app/guides/eofy-guide',
    },
  ],
};

const guides = [
  {
    slug: 'gst-for-freelancers',
    title: 'Complete GST Guide for Freelancers',
    description: 'Everything you need to know about GST registration, BAS lodgement, the $75K threshold, and staying compliant with the ATO as a sole trader or freelancer.',
    keywords: ['GST', 'BAS', 'ATO', '$75K threshold', 'tax invoices'],
    readTime: '12 min read',
    color: 'emerald',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    slug: 'invoicing-101',
    title: 'Invoicing 101: Complete Beginner\'s Guide',
    description: 'How to create professional invoices, what to include on a tax invoice, payment terms, numbering systems, and common mistakes to avoid.',
    keywords: ['tax invoices', 'payment terms', 'invoice format', 'ABN', 'legal requirements'],
    readTime: '10 min read',
    color: 'blue',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    slug: 'getting-paid-faster',
    title: 'Getting Paid Faster: A Freelancer\'s Guide',
    description: 'Proven strategies to reduce late payments, set clear payment terms, handle overdue invoices, and protect your cash flow as an Australian freelancer.',
    keywords: ['late payments', 'payment terms', 'overdue invoices', 'cash flow', 'debt recovery'],
    readTime: '9 min read',
    color: 'amber',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    slug: 'setting-freelance-rates',
    title: 'How to Set Your Freelance Rates',
    description: 'Calculate your ideal hourly and project rates, understand market benchmarks, factor in tax and super, and confidently price your services in Australia.',
    keywords: ['hourly rates', 'project pricing', 'rate calculation', 'market rates', 'value pricing'],
    readTime: '11 min read',
    color: 'violet',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    slug: 'tax-guide-freelancers',
    title: 'The Complete Tax Guide for Freelancers',
    description: 'Income tax brackets, PAYG installments, tax deductions, superannuation, record keeping, and lodging your tax return — the full picture for Australian freelancers.',
    keywords: ['income tax', 'PAYG', 'tax brackets', 'deductions', 'tax return'],
    readTime: '14 min read',
    color: 'sky',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    slug: 'abn-guide',
    title: 'ABN Guide: Everything You Need to Know',
    description: 'How to apply for an ABN, when you need one, the 47% withholding rule, displaying your ABN on invoices, and managing your business number.',
    keywords: ['ABN', '47% withholding', 'ABN application', 'business number', 'invoices'],
    readTime: '10 min read',
    color: 'rose',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
  },
  {
    slug: 'superannuation-for-freelancers',
    title: 'Superannuation Guide for Freelancers',
    description: 'Voluntary contributions, tax deductions, government co-contribution, choosing a fund, and building retirement savings when nobody pays super for you.',
    keywords: ['superannuation', 'voluntary super', 'tax deduction', 'retirement', 'co-contribution'],
    readTime: '11 min read',
    color: 'teal',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    slug: 'eofy-guide',
    title: 'End of Financial Year Guide',
    description: 'The complete EOFY checklist: income reconciliation, deduction maximisation, super contributions, BAS preparation, and tax return lodging before June 30.',
    keywords: ['EOFY', 'financial year', 'tax return', 'deductions', 'BAS'],
    readTime: '12 min read',
    color: 'orange',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', badge: 'bg-blue-500/20 text-blue-300' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', badge: 'bg-amber-500/20 text-amber-300' },
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400', badge: 'bg-violet-500/20 text-violet-300' },
  sky: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-400', badge: 'bg-sky-500/20 text-sky-300' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400', badge: 'bg-rose-500/20 text-rose-300' },
  teal: { bg: 'bg-teal-500/10', border: 'border-teal-500/20', text: 'text-teal-400', badge: 'bg-teal-500/20 text-teal-300' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', badge: 'bg-orange-500/20 text-orange-300' },
};

export default function GuidesHub() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="min-h-screen bg-gray-950">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 pt-6">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Guides</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden pt-16 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              Free Business Guides
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Everything Australian Freelancers<br />Need to Know
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Comprehensive, ATO-accurate guides on GST, invoicing, getting paid, and pricing your services.
              Written specifically for Australian sole traders, freelancers, and contractors.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500">
              <span className="px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700/50">ATO 2025-26 rates</span>
              <span className="px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700/50">Free forever</span>
              <span className="px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700/50">No sign-up required</span>
              <span className="px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700/50">Updated regularly</span>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide) => {
              const colors = colorMap[guide.color];
              return (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className={`group relative ${colors.bg} border ${colors.border} rounded-2xl p-8 hover:border-opacity-50 transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${colors.text} flex-shrink-0 mt-1`}>{guide.icon}</div>
                    <div>
                      <h2 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors mb-2">
                        {guide.title}
                      </h2>
                      <span className="text-sm text-gray-500">{guide.readTime}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{guide.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {guide.keywords.map((kw) => (
                      <span key={kw} className={`text-xs px-2 py-1 rounded-full ${colors.badge}`}>
                        {kw}
                      </span>
                    ))}
                  </div>
                  <div className={`mt-4 ${colors.text} text-sm font-medium flex items-center gap-1`}>
                    Read guide
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Key Numbers */}
        <section className="border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-2xl font-bold text-white text-center mb-10">Key Numbers Every Freelancer Should Know</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '$75,000', label: 'GST registration threshold', detail: 'Must register if turnover exceeds this' },
                { number: '10%', label: 'GST rate', detail: 'Added to most goods and services' },
                { number: '11.5%', label: 'Super guarantee rate', detail: '2025-26 financial year' },
                { number: '47%', label: 'No-ABN withholding', detail: 'Withheld if you don\'t quote ABN' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm font-medium text-gray-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="border-t border-gray-800 bg-gray-900/30">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-2xl font-bold text-white text-center mb-4">More Free Resources</h2>
            <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
              Beyond guides, we offer 100+ free tools, 125+ articles, and templates to help you run your freelance business.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/tools" className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors group">
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-lg font-semibold text-gray-200 mb-1">Free Business Tools</div>
                <p className="text-sm text-gray-500">GST calculator, invoice generator, rate calculator, ABN lookup, and more.</p>
                <span className="text-blue-400 text-sm mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">Browse tools <span>&rarr;</span></span>
              </Link>
              <Link href="/blog" className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors group">
                <div className="text-3xl font-bold text-white mb-2">125+</div>
                <div className="text-lg font-semibold text-gray-200 mb-1">Expert Articles</div>
                <p className="text-sm text-gray-500">Tax tips, invoicing best practices, pricing strategies, and profession-specific advice.</p>
                <span className="text-blue-400 text-sm mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read articles <span>&rarr;</span></span>
              </Link>
              <Link href="/templates" className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors group">
                <div className="text-3xl font-bold text-white mb-2">28</div>
                <div className="text-lg font-semibold text-gray-200 mb-1">Professional Templates</div>
                <p className="text-sm text-gray-500">Invoice templates, contracts, NDAs, proposals, and business documents.</p>
                <span className="text-blue-400 text-sm mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">Get templates <span>&rarr;</span></span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-gray-800">
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
                  <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </div>
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
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Simplify Your Invoicing?</h2>
            <p className="text-gray-400 mb-8">
              Start sending professional, GST-compliant invoices in minutes. Free forever with our starter plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">Start Free — No Credit Card</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">View Pricing</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
