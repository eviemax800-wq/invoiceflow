import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Intellectual Property (IP): Rights Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What is intellectual property? Learn about IP rights for freelancers in Australia, including copyright ownership under Section 35(6), IP clauses in contracts, licensing vs assignment, and how to protect your creative work. Updated for 2025-26.',
  keywords: [
    'intellectual property freelancer australia',
    'who owns the work freelancer',
    'IP rights freelancer',
    'copyright freelance work australia',
    'IP clause freelance contract',
    'copyright assignment vs licensing',
    'moral rights australia freelancer',
    'intellectual property protection sole trader',
  ],
  alternates: { canonical: '/glossary/intellectual-property' },
  openGraph: {
    title: 'Intellectual Property (IP): Rights Guide for Australian Freelancers — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about IP rights: copyright ownership under Section 35(6), contract clauses, licensing vs assignment, moral rights, and how to protect your creative work.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/intellectual-property',
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
    { '@type': 'ListItem', position: 3, name: 'Intellectual Property', item: `${BASE_URL}/glossary/intellectual-property` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who owns the intellectual property when a freelancer creates work for a client?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under Australian law (Copyright Act 1968, Section 35(6)), the freelancer or independent contractor owns the copyright in any work they create by default. This is fundamentally different from employment, where the employer owns copyright in work created during the course of employment. The key distinction is the nature of the relationship: if you are engaged as a contractor (not an employee), you retain copyright unless you have signed a written agreement assigning it to the client. Simply being paid for the work does not transfer ownership. The client receives an implied licence to use the work for its intended purpose, but the freelancer retains the underlying copyright. This is one of the most misunderstood aspects of IP law in Australia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do freelancers automatically own copyright in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, freelancers automatically own copyright in the work they create in Australia. Copyright arises automatically upon creation of an original work — there is no registration requirement. Under Section 35(6) of the Copyright Act 1968, the author of a work is the first owner of copyright, with the exception of works created under a contract of employment (where the employer owns it). Since freelancers and independent contractors are not employees, they retain copyright ownership by default. This applies to all forms of creative work: code, designs, writing, photography, illustrations, video, music, and more. The only way for a client to own the copyright is through a written assignment agreement signed by the freelancer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What IP clause should I include in my freelance contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your freelance contract should clearly state what happens to the intellectual property in the work you create. There are four common approaches: (1) Full assignment — the client owns all IP upon payment, and you charge a premium for this. (2) Licence grant — you retain ownership but grant the client a licence to use the work for specific purposes. (3) Shared IP — your pre-existing background IP remains yours, while new foreground IP created specifically for the project is assigned to the client. (4) Portfolio rights — the client owns the IP but you retain the right to display the work in your portfolio. Whichever model you choose, the clause must be in writing to be enforceable. Also include a moral rights consent clause, as moral rights cannot be assigned under Australian law but can be consented to.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I reuse work I created for a client in my portfolio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your contract. If you have not assigned copyright to the client, you generally retain the right to display the work in your portfolio as the copyright owner. However, if you have assigned copyright, you need the client\'s permission unless your contract includes a specific portfolio rights clause. Best practice is to always include a portfolio rights clause in your contract that explicitly states: "The Contractor retains the right to display the work in their portfolio, website, and marketing materials for the purpose of showcasing their capabilities." Many clients are happy to agree to this, and it costs them nothing. If the work involves confidential information, you may need to wait until the project is public or anonymise certain details.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the difference between copyright assignment and licensing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Copyright assignment transfers full ownership of the copyright from the creator (freelancer) to the client permanently. Once assigned, the freelancer no longer has any copyright in the work and cannot use, modify, or license it without the new owner\'s permission. Assignment must be in writing to be valid under Australian law. Copyright licensing, on the other hand, grants the client permission to use the work in specific ways while the freelancer retains ownership. Licences can be exclusive (only the client can use it) or non-exclusive (the freelancer can license it to others too), limited by time, geography, or purpose, and revocable or irrevocable. For freelancers, licensing is generally more advantageous because you retain the underlying asset and can negotiate different licence terms for different uses. Assignment should command a higher fee because the client is acquiring full ownership of the IP asset.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-intellectual-property', label: '1. What Is Intellectual Property?' },
  { id: 'types-of-ip-australia', label: '2. Types of IP in Australia' },
  { id: 'ip-ownership-freelancers', label: '3. IP Ownership Rules for Freelancers' },
  { id: 'ip-clauses-contracts', label: '4. IP Clauses in Freelance Contracts' },
  { id: 'protecting-your-ip', label: '5. Protecting Your IP' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/contract-generator',
    name: 'Contract Generator',
    description: 'Create freelance contracts with built-in IP ownership and licensing clauses.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/nda-generator',
    name: 'NDA Generator',
    description: 'Generate non-disclosure agreements to protect confidential IP and trade secrets.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/project-brief-generator',
    name: 'Project Brief Generator',
    description: 'Document project scope and deliverables with clear IP ownership terms.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/service-package-builder',
    name: 'Service Package Builder',
    description: 'Build service packages with IP pricing tiers for assignment vs licensing.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'How to create professional invoices that reference IP terms and protect your rights.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'Price your services to reflect IP value — charge more for assignment, less for licensing.',
  },
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Tie IP transfer to payment milestones so you never assign rights before getting paid.',
  },
];

export default function IntellectualPropertyGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-violet-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Intellectual Property</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Business Protection
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Intellectual Property:{' '}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              IP Rights for Freelancers in Australia
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Intellectual property (IP) is the legal framework that protects the creative and innovative work you produce as a freelancer. In Australia, freelancers own copyright by default under the Copyright Act 1968 &mdash; but most don&apos;t know it. This guide covers the types of IP, who owns what, how to structure contracts, and how to protect the work that IS your business.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>16 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>IP Rights Guide</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">4</span>
              <div>
                <p className="text-white font-medium text-sm">4 Types of IP</p>
                <p className="text-gray-400 text-sm">Copyright, trademarks, patents, designs &mdash; the 4 main IP types in Australia</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">70</span>
              <div>
                <p className="text-white font-medium text-sm">70 Years of Protection</p>
                <p className="text-gray-400 text-sm">Copyright lasts 70 years after creator&apos;s death in Australia (Copyright Act 1968)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">$150K+</span>
              <div>
                <p className="text-white font-medium text-sm">Maximum Penalty Per Work</p>
                <p className="text-gray-400 text-sm">Maximum penalty for IP infringement per work under the Copyright Act</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-purple-400 text-xs font-bold">IPA</span>
              <div>
                <p className="text-white font-medium text-sm">IP Australia</p>
                <p className="text-gray-400 text-sm">The federal agency that administers trademarks, patents, and designs</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-violet-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Intellectual Property? */}
        <section id="what-is-intellectual-property">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Intellectual Property?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Intellectual property (IP) refers to <strong className="text-white">creations of the mind that are legally protected</strong> &mdash; including inventions, literary and artistic works, designs, symbols, names, and images used in commerce. IP law gives creators exclusive rights to use, sell, licence, and profit from their creative and innovative work.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers, IP is not an abstract legal concept &mdash; it is the <strong className="text-white">foundation of your entire business</strong>. As a freelancer, you do not sell products off a shelf. You sell your creative output: code, designs, copy, photography, strategy, illustrations, video, music. Every deliverable you create is a piece of intellectual property. Understanding who owns it, how to protect it, and how to price it is one of the most important business skills a freelancer can develop.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In Australia, intellectual property is governed by a combination of <strong className="text-white">federal legislation</strong> (Copyright Act 1968, Trade Marks Act 1995, Patents Act 1990, Designs Act 2003) and <strong className="text-white">common law</strong> (passing off, confidential information). The federal agency responsible for administering trademarks, patents, and designs is <strong className="text-white">IP Australia</strong> (ipaustralia.gov.au). Copyright, notably, does not require registration &mdash; it arises automatically upon creation of an original work.
            </p>
            <p className="text-gray-300 leading-relaxed">
              IP is also a <strong className="text-white">balance-sheet asset</strong>. If you build a template library, a code framework, a design system, or a methodology, those are IP assets that have real economic value. They can be licensed repeatedly to multiple clients, increasing your revenue without increasing your hours. Thinking of your work as IP &mdash; not just &quot;deliverables&quot; &mdash; fundamentally changes how you price, contract, and grow your freelance business.
            </p>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Why This Matters for You</p>
              <p className="text-gray-400 text-sm">
                In the digital economy, <strong className="text-gray-200">your work IS your product</strong>. Every line of code, every design file, every piece of content you create has legal protections attached to it. The freelancer who understands IP can charge more, negotiate better contracts, and build a portfolio of assets that generate value long after the project is complete. The freelancer who does not understand IP gives away rights they did not know they had &mdash; often for free.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Types of IP in Australia */}
        <section id="types-of-ip-australia">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of IP in Australia</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Australia recognises several distinct categories of intellectual property, each with its own rules for creation, protection, duration, and enforcement. As a freelancer, you will primarily deal with <strong className="text-white">copyright</strong> (which covers most creative work), but understanding all the types helps you advise clients and protect your own business assets.
            </p>

            {/* IP Types Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">IP Type</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Registration</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Duration</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden md:table-cell">What It Protects</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Copyright</td>
                      <td className="px-6 py-4 text-violet-400 font-medium">Automatic</td>
                      <td className="px-6 py-4 text-sm text-gray-400">70 years after death</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">Creative works: code, designs, writing, photos, music, video</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Trademarks</td>
                      <td className="px-6 py-4 text-violet-400 font-medium">Registered</td>
                      <td className="px-6 py-4 text-sm text-gray-400">10 years, renewable</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">Brands, logos, business names, slogans, sounds</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Patents</td>
                      <td className="px-6 py-4 text-violet-400 font-medium">Registered</td>
                      <td className="px-6 py-4 text-sm text-gray-400">20 years (standard)</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">Inventions, processes, methods, technical innovations</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Registered Designs</td>
                      <td className="px-6 py-4 text-violet-400 font-medium">Registered</td>
                      <td className="px-6 py-4 text-sm text-gray-400">10 years</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">Visual appearance: shape, configuration, pattern, ornamentation</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Trade Secrets</td>
                      <td className="px-6 py-4 text-violet-400 font-medium">Unregistered</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Indefinite</td>
                      <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">Confidential business information, formulas, processes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Freelancer-Relevant Examples</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-3">Copyright (Most Common for Freelancers)</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Developers:</strong> Source code, software, databases, documentation</li>
                  <li><strong className="text-gray-200">Designers:</strong> Graphics, UI/UX designs, illustrations, layouts</li>
                  <li><strong className="text-gray-200">Writers:</strong> Articles, copy, scripts, marketing content</li>
                  <li><strong className="text-gray-200">Photographers:</strong> Photos, edited images, presets</li>
                  <li><strong className="text-gray-200">Videographers:</strong> Video content, animations, motion graphics</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-purple-500/20 p-5">
                <h4 className="text-purple-400 font-semibold mb-3">Other IP Types for Freelancers</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Trademarks:</strong> Your business name, logo, brand identity</li>
                  <li><strong className="text-gray-200">Trade Secrets:</strong> Your pricing methodology, client list, processes</li>
                  <li><strong className="text-gray-200">Designs:</strong> Product packaging, physical product appearance</li>
                  <li><strong className="text-gray-200">Patents:</strong> Rare for freelancers, but possible for SaaS tools or inventions</li>
                  <li><strong className="text-gray-200">Know-how:</strong> Your expertise, frameworks, and proprietary methods</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Key Distinction: Automatic vs Registered</p>
              <p className="text-gray-400 text-sm">
                Copyright is <strong className="text-gray-200">automatic</strong> &mdash; it exists the moment you create an original work. No registration, no application, no fee. Trademarks, patents, and designs must be <strong className="text-gray-200">registered</strong> through IP Australia to receive formal protection. This means most of the work you create as a freelancer is already protected by copyright from the instant you save the file. However, proving copyright ownership later can be challenging without proper documentation, which is why keeping records of your creative process matters.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: IP Ownership Rules for Freelancers — KEY SECTION */}
        <section id="ip-ownership-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">IP Ownership Rules for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              This is the <strong className="text-white">most important section of this guide</strong>. Understanding who owns the intellectual property in work created by a freelancer is critical &mdash; and it is one of the most misunderstood areas of Australian law. The rules are clear, but most people (including many clients and even some lawyers) get them wrong.
            </p>

            {/* The Key Law */}
            <div className="rounded-xl bg-violet-500/10 border border-violet-500/30 p-6 mt-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">Critical Law</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Copyright Act 1968 &mdash; Section 35(6)</h3>
              <p className="text-gray-300 leading-relaxed">
                Under the Copyright Act 1968, the <strong className="text-white">author of a work is the first owner of copyright</strong>. For works created under a &quot;contract of service&quot; (employment), the employer owns the copyright. However, for works created under a &quot;contract for services&quot; (independent contracting/freelancing), the <strong className="text-white">contractor retains copyright ownership by default</strong>.
              </p>
              <div className="rounded-lg bg-gray-900/60 p-4 mt-4 text-sm font-mono text-violet-300">
                Freelancer/Contractor = Owns Copyright by Default<br />
                Employee = Employer Owns Copyright by Default
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Contractor vs Employee: The Critical Distinction</h3>
            <p className="text-gray-300 leading-relaxed">
              The entire IP ownership question hinges on whether you are a <strong className="text-white">contractor</strong> (contract for services) or an <strong className="text-white">employee</strong> (contract of service). If you are a genuine independent contractor &mdash; you set your own hours, use your own equipment, work for multiple clients, and control how the work is performed &mdash; then you own the copyright in everything you create, regardless of who is paying for it.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-3">Contractor (You Own IP)</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>You control how and when the work is done</li>
                  <li>You use your own tools and equipment</li>
                  <li>You can work for multiple clients simultaneously</li>
                  <li>You issue invoices and manage your own tax</li>
                  <li>You have your own ABN</li>
                  <li>You can delegate or subcontract the work</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-gray-300 font-semibold mb-3">Employee (Employer Owns IP)</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>The employer controls how and when work is done</li>
                  <li>The employer provides tools and equipment</li>
                  <li>You work exclusively or primarily for one employer</li>
                  <li>You receive a salary with PAYG tax withheld</li>
                  <li>You receive leave entitlements and superannuation</li>
                  <li>You cannot delegate or subcontract your duties</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">When Does Ownership Transfer?</h3>
            <p className="text-gray-300 leading-relaxed">
              Copyright ownership can only transfer from a freelancer to a client through a <strong className="text-white">written assignment agreement</strong>. Verbal agreements, handshake deals, or the mere act of paying for the work do NOT transfer copyright. The Copyright Act requires that assignments of copyright must be in writing and signed by the copyright owner (the freelancer). Without this, the client receives at most an <strong className="text-white">implied licence</strong> to use the work for its intended purpose &mdash; but the freelancer retains full copyright ownership.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Moral Rights: The Rights You Cannot Assign</h3>
            <p className="text-gray-300 leading-relaxed">
              Even if you assign copyright to a client, you retain <strong className="text-white">moral rights</strong> under Australian law. Moral rights are personal rights that exist independently of copyright and <strong className="text-white">cannot be transferred or assigned</strong>. They can only be <strong className="text-white">consented to</strong> (waived) by the creator. The three moral rights under Australian law are:
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">1</span>
                <div>
                  <p className="text-white font-medium text-sm">Right of Attribution</p>
                  <p className="text-gray-400 text-sm">The right to be identified as the author of the work. You can require that your name appears on or in connection with the work.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">2</span>
                <div>
                  <p className="text-white font-medium text-sm">Right Against False Attribution</p>
                  <p className="text-gray-400 text-sm">The right not to have someone else&apos;s work attributed to you, and not to have your work attributed to someone else.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">3</span>
                <div>
                  <p className="text-white font-medium text-sm">Right of Integrity</p>
                  <p className="text-gray-400 text-sm">The right not to have your work subjected to derogatory treatment that would prejudice your honour or reputation. This prevents clients from modifying your work in ways that damage your professional standing.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Common Misconceptions</h3>
            <div className="space-y-3 mt-4">
              <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <div>
                    <p className="text-red-400 font-medium mb-1">&quot;I paid for it, so I own it&quot; &mdash; WRONG</p>
                    <p className="text-gray-400 text-sm">Payment alone does not transfer copyright from a contractor. The client receives an implied licence to use the work for its intended purpose, but the freelancer retains copyright ownership unless there is a written assignment.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <div>
                    <p className="text-red-400 font-medium mb-1">&quot;The contract says I&apos;m a contractor, but I work like an employee&quot; &mdash; RISKY</p>
                    <p className="text-gray-400 text-sm">Courts look at the substance of the relationship, not just the label. If the working arrangement resembles employment, a court may determine you are an employee regardless of what the contract says &mdash; which would change the IP ownership default.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <div>
                    <p className="text-red-400 font-medium mb-1">&quot;Copyright needs to be registered to be valid&quot; &mdash; WRONG</p>
                    <p className="text-gray-400 text-sm">Unlike trademarks and patents, copyright in Australia arises automatically upon creation of an original work. There is no registration system for copyright in Australia. You own it from the moment you create it.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <div>
                    <p className="text-red-400 font-medium mb-1">&quot;I can assign my moral rights in the contract&quot; &mdash; WRONG</p>
                    <p className="text-gray-400 text-sm">Moral rights cannot be assigned or transferred under Australian law. You can provide written consent for a client to do things that would otherwise infringe your moral rights, but the rights themselves always remain with you.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">The Bottom Line on Ownership</p>
              <p className="text-gray-400 text-sm">
                As an Australian freelancer, <strong className="text-gray-200">you own the copyright in everything you create by default</strong>. This is a powerful legal position. Do not give it away without understanding the value. If a client wants to own the IP outright, that is a premium service &mdash; and it should be priced accordingly. If they only need to use the work, a licence may be more appropriate for both parties.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: IP Clauses in Freelance Contracts */}
        <section id="ip-clauses-contracts">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">IP Clauses in Freelance Contracts</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Every freelance contract should include a clear IP clause that defines what happens to the intellectual property in the work you create. There are <strong className="text-white">four common models</strong>, each with different implications for you and your client. The right choice depends on the nature of the work, the client relationship, and your pricing strategy.
            </p>

            {/* Model A: Full Assignment */}
            <div className="rounded-xl bg-gray-800/50 border border-violet-500/30 p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">Model A</span>
                <h3 className="text-lg font-semibold text-white">Full Assignment</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The client owns all IP in the deliverables upon full payment. The freelancer transfers copyright and all other IP rights to the client permanently. This is the model most clients expect and the most common in enterprise contracts.
              </p>
              <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono mb-4">
                <p className="font-bold text-violet-300">SAMPLE CLAUSE &mdash; Full Assignment</p>
                <p className="mt-2">&quot;Upon receipt of full payment for each Deliverable, the Contractor hereby assigns to the Client all right, title, and interest in and to the intellectual property in the Deliverables, including copyright. The Contractor agrees to execute any documents reasonably required to give effect to this assignment. The Contractor provides unconditional and irrevocable consent to any acts or omissions that might otherwise infringe the Contractor&apos;s moral rights in the Deliverables.&quot;</p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-violet-400 font-medium">Pricing Impact:</span>
                <span className="text-gray-400">Charge a <strong className="text-gray-200">premium</strong> (typically 20&ndash;50% more) because you are permanently giving up an asset.</span>
              </div>
            </div>

            {/* Model B: Licence Grant */}
            <div className="rounded-xl bg-gray-800/50 border border-purple-500/30 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">Model B</span>
                <h3 className="text-lg font-semibold text-white">Licence Grant</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                You retain ownership of the IP but grant the client a licence to use the work for specific purposes. The licence can be exclusive or non-exclusive, perpetual or time-limited, and can restrict usage to specific media, territories, or applications.
              </p>
              <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono mb-4">
                <p className="font-bold text-purple-300">SAMPLE CLAUSE &mdash; Licence Grant</p>
                <p className="mt-2">&quot;The Contractor retains all intellectual property rights in the Deliverables. Upon receipt of full payment, the Contractor grants to the Client a perpetual, non-exclusive, worldwide licence to use, reproduce, display, and modify the Deliverables for the Client&apos;s internal business purposes. The Contractor may licence the Deliverables to third parties and use them in their portfolio and marketing materials.&quot;</p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-purple-400 font-medium">Pricing Impact:</span>
                <span className="text-gray-400">Standard pricing. You retain the asset and can licence it to others.</span>
              </div>
            </div>

            {/* Model C: Shared IP */}
            <div className="rounded-xl bg-gray-800/50 border border-violet-500/30 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">Model C</span>
                <h3 className="text-lg font-semibold text-white">Shared IP (Background + Foreground)</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The most sophisticated model. Your pre-existing IP (templates, frameworks, libraries, methodologies) &mdash; called <strong className="text-gray-200">&quot;background IP&quot;</strong> &mdash; remains yours. New IP created specifically for the client&apos;s project &mdash; called <strong className="text-gray-200">&quot;foreground IP&quot;</strong> &mdash; is assigned to the client. This is ideal for developers and designers who build on their own tools.
              </p>
              <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono mb-4">
                <p className="font-bold text-violet-300">SAMPLE CLAUSE &mdash; Shared IP</p>
                <p className="mt-2">&quot;Background IP: The Contractor retains all intellectual property rights in any pre-existing materials, tools, frameworks, templates, and methodologies used in the creation of the Deliverables. The Client is granted a non-exclusive, perpetual licence to use the Background IP solely as incorporated in the Deliverables. Foreground IP: Upon receipt of full payment, all new intellectual property created specifically for the Client&apos;s project shall be assigned to the Client.&quot;</p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-violet-400 font-medium">Pricing Impact:</span>
                <span className="text-gray-400">Moderate premium. Protects your reusable assets while giving the client what they need.</span>
              </div>
            </div>

            {/* Model D: Portfolio Rights */}
            <div className="rounded-xl bg-gray-800/50 border border-purple-500/30 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">Model D</span>
                <h3 className="text-lg font-semibold text-white">Portfolio Rights</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The client owns the IP, but you retain the right to display the work in your portfolio, website, and marketing materials. This is a practical compromise that gives the client full ownership while preserving your ability to showcase your work and win new clients.
              </p>
              <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono mb-4">
                <p className="font-bold text-purple-300">SAMPLE CLAUSE &mdash; Portfolio Rights</p>
                <p className="mt-2">&quot;Upon receipt of full payment, all intellectual property in the Deliverables shall be assigned to the Client. Notwithstanding this assignment, the Client grants the Contractor a non-exclusive, perpetual, irrevocable licence to display the Deliverables (or screenshots/excerpts thereof) in the Contractor&apos;s portfolio, website, social media accounts, and marketing materials for the purpose of showcasing the Contractor&apos;s professional capabilities.&quot;</p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-purple-400 font-medium">Pricing Impact:</span>
                <span className="text-gray-400">Full assignment pricing, minus a small discount since you retain display rights.</span>
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Pricing Your IP: The General Rule</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Assignment = Higher Fee. Licensing = Standard Fee.</strong> When a client buys full assignment, they are acquiring an asset. When they buy a licence, they are renting usage rights. Your pricing should reflect this. A logo design with full copyright assignment might be $5,000, while the same logo with a non-exclusive licence might be $3,000. The quality of work is identical &mdash; the difference is in the rights being transferred.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Protecting Your IP */}
        <section id="protecting-your-ip">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Protecting Your IP</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Owning IP is one thing. <strong className="text-white">Protecting it is another.</strong> Without proactive measures, your intellectual property can be copied, misused, or stolen &mdash; and recovering it after the fact is expensive and time-consuming. Here are the practical steps every freelancer should take to protect their creative work.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Copyright Notices</h3>
            <p className="text-gray-300 leading-relaxed">
              While not legally required in Australia (copyright exists automatically), including a <strong className="text-white">copyright notice</strong> on your work serves as a visible reminder of your ownership. It deters casual infringement and strengthens your position in any dispute. Use the standard format:
            </p>
            <div className="rounded-lg bg-gray-900/60 p-4 text-sm font-mono text-violet-300 mt-3">
              &copy; 2026 [Your Name / Business Name]. All rights reserved.
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Trademark Registration</h3>
            <p className="text-gray-300 leading-relaxed">
              If you have a distinctive business name, logo, or tagline, consider registering it as a trademark through <strong className="text-white">IP Australia</strong>. Registration costs approximately <strong className="text-white">$250 per class</strong> (each class covers a category of goods or services) and gives you exclusive rights to use the mark across Australia for 10 years (renewable). Without registration, your only protection is the common law tort of &quot;passing off,&quot; which is much harder to enforce.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">NDAs and Confidentiality Agreements</h3>
            <p className="text-gray-300 leading-relaxed">
              Use <strong className="text-white">Non-Disclosure Agreements (NDAs)</strong> to protect confidential information and trade secrets. NDAs are particularly important when you are sharing proprietary methodologies, pricing strategies, or unreleased work with potential clients or collaborators. A well-drafted NDA prevents the other party from using or disclosing your confidential information without permission.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Practical Protection Measures</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-3">Before Delivery</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Watermark deliverables</strong> during review phases until final payment is received</li>
                  <li><strong className="text-gray-200">Use low-resolution previews</strong> for design work &mdash; send full-resolution files only after payment</li>
                  <li><strong className="text-gray-200">Staged file delivery</strong> &mdash; provide source files only at the final milestone</li>
                  <li><strong className="text-gray-200">Password-protect documents</strong> during review &mdash; remove protection upon payment</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-purple-500/20 p-5">
                <h4 className="text-purple-400 font-semibold mb-3">Ongoing Documentation</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Version control</strong> &mdash; use Git or similar tools to document your creative process with timestamps</li>
                  <li><strong className="text-gray-200">Keep original files</strong> &mdash; retain PSD, Figma, AI, source code files as proof of authorship</li>
                  <li><strong className="text-gray-200">Document your process</strong> &mdash; screenshots, drafts, and work-in-progress records</li>
                  <li><strong className="text-gray-200">Portfolio documentation</strong> &mdash; publicly display work with dates to establish provenance</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Takedown Procedures</h3>
            <p className="text-gray-300 leading-relaxed">
              If someone infringes your copyright, you have several options under Australian law. The first step is usually a <strong className="text-white">cease and desist letter</strong> &mdash; a formal written demand to stop the infringing activity. If the infringer does not comply, you can pursue legal action through the Federal Court or Federal Circuit Court. For online infringement, you can file a <strong className="text-white">takedown notice</strong> with the hosting platform. While Australia does not have a direct equivalent of the US DMCA, most major platforms (Google, Facebook, Instagram, Behance) accept copyright takedown requests under their own terms of service.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">When to Get Legal Advice</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>You are signing a contract with unusual or aggressive IP clauses</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>A client is using your work beyond the agreed licence terms</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>You discover someone has copied your work without permission</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>You are building a SaaS product or creating IP with significant commercial value</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>You want to register a trademark or patent</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>A dispute arises over IP ownership and cannot be resolved amicably</span>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Prevention Over Cure</p>
              <p className="text-gray-400 text-sm">
                The best IP protection is <strong className="text-gray-200">proactive, not reactive</strong>. Clear contracts with explicit IP clauses, proper documentation of your creative process, and consistent use of copyright notices will prevent the vast majority of disputes before they start. Litigation is expensive (often $50,000+ for a Federal Court action), time-consuming, and emotionally draining. Investing time upfront in proper IP practices saves you from costly disputes down the road.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built to help Australian freelancers <strong className="text-white">protect their intellectual property at every stage of the client relationship</strong> &mdash; from contract generation through to invoicing and deliverable tracking. Here is how each feature supports your IP strategy:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Contract Generation with IP Clauses</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Generate professional freelance contracts with pre-built IP clauses covering all four models: full assignment, licence grant, shared IP, and portfolio rights. Choose the model that fits each engagement, customise the specifics, and generate a contract that clearly defines IP ownership from day one. Includes moral rights consent clauses compliant with Australian law.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Project Documentation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Document every project with detailed scope records, deliverable lists, and version histories. This documentation serves as evidence of your creative process and authorship in case of any IP dispute. Link project briefs, client approvals, and revision histories directly to each project record for a complete audit trail.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Deliverable Tracking</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track every deliverable with timestamps, version numbers, and client sign-off records. When IP ownership is tied to payment milestones (as it should be), InvoiceFlow ensures you have a clear record of exactly when each deliverable was delivered, approved, and paid for &mdash; and therefore exactly when IP rights transferred. No more ambiguity about what was delivered and when.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Professional Invoicing with IP Terms</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Create invoices that reference your IP terms directly. Include notes like &quot;IP assignment effective upon receipt of full payment&quot; or &quot;Licence rights as per Agreement dated [date].&quot; This reinforces your IP position with every payment interaction and creates a paper trail linking payment to IP transfer. Tie milestones to deliverables so IP rights only transfer when payment is confirmed.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Your IP, Your Business</p>
              <p className="text-gray-400 text-sm">
                Intellectual property is not just a legal formality &mdash; it is the <strong className="text-gray-200">core asset of your freelance business</strong>. InvoiceFlow gives you the tools to define, document, track, and monetise your IP at every stage. From the first contract to the final invoice, every touchpoint reinforces your rights and protects the work that makes your business valuable.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture />
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {(faqSchema.mainEntity as Array<{ '@type': string; name: string; acceptedAnswer: { text: string } }>).map((faq, i) => (
            <details key={i} className="group rounded-xl bg-gray-800/40 border border-gray-700/40">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-violet-400 transition-colors">
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

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you protect and manage your intellectual property.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-violet-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-violet-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-violet-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on contracts, pricing, and getting paid as a freelancer.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-violet-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-violet-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-violet-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read guide
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Own Your Work. Protect Your Rights.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps freelancers create contracts with proper IP clauses, track deliverables, and invoice professionally &mdash; so you never accidentally give away rights you did not intend to. Start for free and take control of your intellectual property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/contract-generator">
              <Button variant="secondary">Generate a Contract</Button>
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
