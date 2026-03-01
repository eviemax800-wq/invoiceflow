import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Scope of Work (SOW): How to Write One as a Freelancer — InvoiceFlow',
  description:
    'What is a scope of work? Learn how to write a bulletproof SOW that defines deliverables, prevents scope creep, and protects your freelance business. Includes templates, examples, and a 10-element checklist for Australian freelancers.',
  keywords: [
    'scope of work template',
    'scope of work meaning',
    'SOW freelancer',
    'scope of work example',
    'how to write scope of work',
    'scope of work vs contract',
    'scope of work document',
    'scope of work australia',
  ],
  alternates: { canonical: '/glossary/scope-of-work' },
  openGraph: {
    title: 'Scope of Work (SOW): How to Write One as a Freelancer — InvoiceFlow',
    description:
      'The complete guide to writing a scope of work for Australian freelancers. Define deliverables, set boundaries, prevent scope creep, and align your invoicing to project milestones. Includes templates, comparison tables, and worked examples.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/scope-of-work',
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
    { '@type': 'ListItem', position: 3, name: 'Scope of Work', item: `${BASE_URL}/glossary/scope-of-work` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a scope of work in freelancing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A scope of work (SOW) is a detailed project document that defines exactly what a freelancer will deliver, the timeline for delivery, the boundaries of the project (what is and is not included), acceptance criteria, revision limits, and the payment schedule tied to milestones. It is the "what and how" companion to a contract, which covers the legal terms. For freelancers, the SOW is the single most important document for preventing scope creep, managing client expectations, and ensuring you get paid for all the work you do. A well-written SOW turns vague project conversations into concrete, measurable deliverables that both you and your client can reference throughout the engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a scope of work legally binding in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A scope of work on its own is not automatically legally binding in Australia. However, when the SOW is referenced in or attached to a signed contract (which is standard practice), it becomes an enforceable part of that agreement. Most freelance contracts include a clause such as "The services to be provided are described in the Scope of Work attached as Schedule A." This makes the SOW legally binding as part of the contract. Even without a formal contract, if both parties have agreed to the SOW in writing (including email), it can form the basis of a binding agreement under Australian contract law, as it demonstrates offer, acceptance, consideration, and intention to create legal relations. For maximum protection, always attach the SOW to a signed contract.',
      },
    },
    {
      '@type': 'Question',
      name: 'How detailed should a scope of work be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A scope of work should be detailed enough that a third party could read it and understand exactly what will be delivered, but not so detailed that it becomes a technical specification or takes longer to write than the project itself. The rule of thumb is: if something could be misinterpreted, clarify it. For a $2,000 to $5,000 project, the SOW should be 1 to 3 pages. For projects over $10,000, it may run 3 to 5 pages. Focus on measurable deliverables (not vague descriptions), explicit exclusions (what is NOT included), revision limits, and acceptance criteria. For example, instead of writing "design a website," write "design a 5-page responsive website (Home, About, Services, Portfolio, Contact) with 2 rounds of design revisions per page, delivered as Figma files and production-ready code."',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the client wants something outside the scope?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a client requests work that is not listed in the scope of work, this is a change request (also called a change order or variation). The professional approach is: (1) acknowledge the request positively, (2) confirm it is outside the current scope, (3) provide a cost and timeline estimate for the additional work, and (4) get written approval before proceeding. A typical response is: "That is a great idea. It falls outside our current scope, so let me put together a quick quote for the additional work. I estimate it would be $X and add Y days to the timeline. I will send the change request for your approval today." This keeps the relationship positive while ensuring you are compensated for all work. Never absorb out-of-scope work silently — it sets a precedent that erodes your profitability on every future request.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I charge for writing a scope of work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For projects under $3,000, most freelancers include the SOW in their proposal or quote at no extra charge — it is part of the sales process. For larger or more complex projects ($5,000 and above), it is increasingly common and entirely reasonable to charge for a paid discovery phase that produces the SOW as a deliverable. This is sometimes called a "discovery sprint" or "scoping engagement" and typically costs $500 to $2,000 depending on complexity. The benefits of charging for discovery are significant: it filters out clients who are not serious, it compensates you for the strategic thinking involved, and it produces a higher-quality SOW because the client has invested in the process. You can position it as: "I offer a paid discovery session for $X that produces a detailed scope of work, project plan, and fixed-price quote. This ensures we are fully aligned before the main project begins."',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-scope-of-work', label: '1. What Is a Scope of Work?' },
  { id: 'essential-elements', label: '2. Essential Elements of a Freelancer SOW' },
  { id: 'sow-vs-related-documents', label: '3. SOW vs Related Documents' },
  { id: 'how-to-write-sow', label: '4. How to Write a Bulletproof SOW' },
  { id: 'scope-creep-prevention', label: '5. Scope Creep Prevention' },
  { id: 'invoiceflow-sow', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create milestone invoices aligned to your SOW phases, with deposit and progress billing built in.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/quote-generator',
    name: 'Quote Generator',
    description: 'Generate professional quotes from your SOW with itemised deliverables and milestone pricing.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-contract-generator',
    name: 'Contract Generator',
    description: 'Create contracts with SOW attachment clauses, change request processes, and scope management terms.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9.75m3 0H9.75m3 0l-3 3m0 0l-3-3m3 3V15m12-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/project-timeline-calculator',
    name: 'Project Timeline Calculator',
    description: 'Plan SOW milestones, estimate delivery dates, and build realistic project schedules.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Milestone billing structures that align invoices to SOW deliverables for faster payment.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'The complete beginner guide to invoicing in Australia &mdash; from quotes to final payment.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'Price your SOW deliverables profitably with rates that cover scope creep, tax, and business costs.',
  },
];

export default function ScopeOfWorkGlossaryPage() {
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
            <span className="text-white">Scope of Work</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Project Management
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Scope of Work:{' '}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              The Freelancer&apos;s Guide to Bulletproof SOWs
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A scope of work (SOW) is the document that defines what you will deliver, when you will deliver it, and what is not included. It is the single most effective tool for preventing scope creep, aligning client expectations, and ensuring every hour of work is accounted for. This guide covers how to write a SOW that protects your time, your profitability, and your professional relationships &mdash; with templates, examples, and practical strategies for Australian freelancers.
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
              </svg>
              <span>Project Management</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">52%</span>
              <div>
                <p className="text-white font-medium text-sm">Projects Hit by Scope Creep</p>
                <p className="text-gray-400 text-sm">52% of projects experience scope creep &mdash; a clear SOW is your first line of defence</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">$7.6K</span>
              <div>
                <p className="text-white font-medium text-sm">Lost to Unpaid Scope Creep</p>
                <p className="text-gray-400 text-sm">Freelancers lose an average of $7,600 per year to uncompensated out-of-scope work</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">28%</span>
              <div>
                <p className="text-white font-medium text-sm">Faster Completion with SOW</p>
                <p className="text-gray-400 text-sm">Projects with a documented SOW complete 28% faster than those without one</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">65%</span>
              <div>
                <p className="text-white font-medium text-sm">Fewer Disputes</p>
                <p className="text-gray-400 text-sm">A well-written SOW reduces project disputes by 65% compared to verbal agreements</p>
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

        {/* Section 1: What Is a Scope of Work? */}
        <section id="what-is-scope-of-work">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Scope of Work?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">A scope of work (SOW) is a detailed project document that defines the deliverables, timeline, boundaries, and acceptance criteria for a piece of work.</strong> It answers the fundamental questions every project must address before work begins: what exactly will be delivered, when will it be delivered, what is not included, and how will both parties know the work is complete.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Think of the SOW as the <strong className="text-white">blueprint for your project</strong>. Just as a builder would never start construction without architectural plans, a freelancer should never start a project without a written scope of work. It is the document you point to when a client says &quot;I thought that was included&quot; and the document your client references when they want to confirm what they are getting for their investment.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">SOW vs Contract: What&apos;s the Difference?</h3>
            <p className="text-gray-300 leading-relaxed">
              This is the most common point of confusion. The distinction is straightforward:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="p-5 rounded-xl bg-gray-800/50 border border-violet-500/20">
                <h4 className="text-violet-400 font-semibold mb-2">Scope of Work (The What)</h4>
                <p className="text-gray-400 text-sm">Defines deliverables, milestones, timeline, exclusions, revision limits, and acceptance criteria. It is the technical and practical description of the project.</p>
              </div>
              <div className="p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <h4 className="text-gray-300 font-semibold mb-2">Contract (The Legal Terms)</h4>
                <p className="text-gray-400 text-sm">Covers payment terms, liability, intellectual property, confidentiality, termination, dispute resolution, and governing law. It is the legal framework around the project.</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mt-4">
              In practice, the SOW is typically attached to the contract as a schedule or appendix (e.g., &quot;Schedule A: Scope of Work&quot;). The contract says <em className="text-gray-200">&quot;the freelancer will provide the services described in Schedule A&quot;</em> and the SOW provides the detail. You need both: the SOW without a contract leaves you legally exposed, and the contract without a SOW leaves the deliverables ambiguous.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Key Elements of Every SOW</h3>
            <p className="text-gray-300 leading-relaxed">
              While the level of detail varies by project size, every scope of work should address these six core areas:
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">1</span>
                <div>
                  <p className="text-white font-medium text-sm">Objectives</p>
                  <p className="text-gray-400 text-sm">What the project aims to achieve. Not what you will build, but why it is being built. E.g., &quot;Increase online enquiries by 40% through a redesigned website with improved UX and clear calls to action.&quot;</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">2</span>
                <div>
                  <p className="text-white font-medium text-sm">Deliverables</p>
                  <p className="text-gray-400 text-sm">The tangible outputs. Be specific and measurable: &quot;5-page responsive website&quot; not &quot;a website&quot;; &quot;3x 1,500-word blog articles&quot; not &quot;some blog content&quot;.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">3</span>
                <div>
                  <p className="text-white font-medium text-sm">Timeline &amp; Milestones</p>
                  <p className="text-gray-400 text-sm">When each deliverable will be completed. Break the project into phases with specific dates or durations. E.g., &quot;Phase 1: Wireframes &mdash; Week 1&ndash;2; Phase 2: Design &mdash; Week 3&ndash;4; Phase 3: Development &mdash; Week 5&ndash;7.&quot;</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">4</span>
                <div>
                  <p className="text-white font-medium text-sm">Exclusions</p>
                  <p className="text-gray-400 text-sm">What is NOT included. This is the most protective element. E.g., &quot;This scope does not include: copywriting, stock photography, SEO optimisation, ongoing maintenance, or third-party integrations.&quot;</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">5</span>
                <div>
                  <p className="text-white font-medium text-sm">Acceptance Criteria</p>
                  <p className="text-gray-400 text-sm">How both parties will know the work is complete. E.g., &quot;Each deliverable is considered accepted if the client does not raise feedback within 5 business days of delivery.&quot;</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">6</span>
                <div>
                  <p className="text-white font-medium text-sm">Assumptions</p>
                  <p className="text-gray-400 text-sm">Conditions that must hold true for the scope to be valid. E.g., &quot;This scope assumes the client will provide all written content by [date]. Delays in content delivery may extend the project timeline.&quot;</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Key Takeaway</p>
              <p className="text-gray-400 text-sm">
                A scope of work is not bureaucracy &mdash; it is <strong className="text-gray-200">protection</strong>. It protects you from doing unpaid work, protects your client from unclear expectations, and protects the project from drifting off course. The 1&ndash;2 hours you spend writing a SOW will save you 10&ndash;20 hours of scope creep, rework, and difficult conversations later.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Essential Elements of a Freelancer SOW */}
        <section id="essential-elements">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Essential Elements of a Freelancer SOW</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Every freelancer SOW should include these 10 elements. Skip any one of them and you create an opening for misalignment, scope creep, or payment disputes. The table below includes <strong className="text-white">sample language you can adapt</strong> for your own projects:
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4 w-8">#</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Element</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Sample Language</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-violet-400 font-bold">1</td>
                      <td className="py-3 px-4 text-white font-medium">Project Overview</td>
                      <td className="py-3 px-4 text-gray-300">&quot;This project involves the design and development of a 5-page responsive website for [Client Name], a Melbourne-based architecture firm, to replace their existing site and improve online lead generation.&quot;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-violet-400 font-bold">2</td>
                      <td className="py-3 px-4 text-white font-medium">Objectives</td>
                      <td className="py-3 px-4 text-gray-300">&quot;The primary objectives are to: (a) increase online enquiries by 40%, (b) improve mobile user experience, (c) establish a modern, premium visual identity aligned with the client&apos;s brand guidelines.&quot;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-violet-400 font-bold">3</td>
                      <td className="py-3 px-4 text-white font-medium">Deliverables (Measurable)</td>
                      <td className="py-3 px-4 text-gray-300">&quot;5-page responsive website (Home, About, Services, Portfolio, Contact). Figma design files for all pages. Production-ready HTML/CSS/JS code. Basic on-page SEO (meta titles, descriptions, alt tags). Google Analytics 4 setup.&quot;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-violet-400 font-bold">4</td>
                      <td className="py-3 px-4 text-white font-medium">Timeline &amp; Milestones</td>
                      <td className="py-3 px-4 text-gray-300">&quot;Phase 1: Discovery &amp; Wireframes (Week 1&ndash;2). Phase 2: Visual Design (Week 3&ndash;4). Phase 3: Development (Week 5&ndash;7). Phase 4: Testing &amp; Launch (Week 8). Total duration: 8 weeks from project kickoff.&quot;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-violet-400 font-bold">5</td>
                      <td className="py-3 px-4 text-white font-medium">Exclusions</td>
                      <td className="py-3 px-4 text-gray-300">&quot;This scope does NOT include: copywriting or content creation, stock photography or image sourcing, ongoing SEO or marketing services, CMS development or WordPress setup, domain registration or hosting, third-party integrations (CRM, booking system, etc.).&quot;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-violet-400 font-bold">6</td>
                      <td className="py-3 px-4 text-white font-medium">Revision Policy</td>
                      <td className="py-3 px-4 text-gray-300">&quot;Each design deliverable includes 2 rounds of revisions. Additional revision rounds are available at $150 per round. A &apos;revision&apos; is defined as a set of changes submitted together in writing; verbal feedback does not constitute a revision round.&quot;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-violet-400 font-bold">7</td>
                      <td className="py-3 px-4 text-white font-medium">Acceptance Criteria</td>
                      <td className="py-3 px-4 text-gray-300">&quot;Each milestone deliverable is considered accepted if the client does not provide written feedback within 5 business days of delivery. Acceptance of a milestone triggers the corresponding milestone invoice.&quot;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-violet-400 font-bold">8</td>
                      <td className="py-3 px-4 text-white font-medium">Payment Schedule</td>
                      <td className="py-3 px-4 text-gray-300">&quot;30% deposit ($1,500) due before project kickoff. 30% ($1,500) due upon design approval (end of Phase 2). 40% ($2,000) due upon project completion and launch. Payment terms: Net 14.&quot;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-violet-400 font-bold">9</td>
                      <td className="py-3 px-4 text-white font-medium">Assumptions</td>
                      <td className="py-3 px-4 text-gray-300">&quot;This scope assumes: (a) the client will provide all written content by [date], (b) a single point of contact will consolidate all feedback, (c) the client has existing brand guidelines. Changes to these assumptions may affect the timeline and cost.&quot;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-violet-400 font-bold">10</td>
                      <td className="py-3 px-4 text-white font-medium">Change Order Process</td>
                      <td className="py-3 px-4 text-gray-300">&quot;Any work not listed in this SOW is considered out-of-scope. Out-of-scope requests will be documented as a change order with an estimated cost and timeline impact. Work on change orders will begin only after written approval from the client.&quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Adapt this language to your industry and project size. For smaller projects ($500&ndash;$2,000), you can condense elements 1&ndash;3 into a single paragraph and simplify the rest.</p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">The Exclusions Section Is Non-Negotiable</p>
              <p className="text-gray-400 text-sm">
                Of all 10 elements, <strong className="text-gray-200">exclusions</strong> is the one that saves freelancers the most money. Clients do not intentionally scope-creep &mdash; they genuinely assume certain things are included because they seem related. By explicitly listing what is NOT included, you eliminate assumptions and create a natural entry point for change order conversations. If you only add one thing to your current SOW template, make it an exclusions section.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: SOW vs Related Documents */}
        <section id="sow-vs-related-documents">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">SOW vs Related Documents</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Freelancers often confuse the scope of work with other project documents. Here is how the SOW compares to every related document you might encounter, so you know exactly which one to use and when:
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Document</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Purpose</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Who Creates It</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Legally Binding</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">When Used</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr className="bg-violet-500/5">
                      <td className="py-3 px-4 text-violet-400 font-medium">Scope of Work (SOW)</td>
                      <td className="py-3 px-4 text-gray-300">Defines deliverables, timeline, exclusions, and acceptance criteria</td>
                      <td className="py-3 px-4 text-gray-300">Freelancer (with client input)</td>
                      <td className="py-3 px-4 text-gray-300">When attached to a signed contract</td>
                      <td className="py-3 px-4 text-gray-300">After proposal acceptance, before work begins</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Contract</td>
                      <td className="py-3 px-4 text-gray-300">Establishes legal obligations: payment, IP, liability, termination</td>
                      <td className="py-3 px-4 text-gray-300">Freelancer or client (or lawyer)</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Yes</span></td>
                      <td className="py-3 px-4 text-gray-300">Before any work begins; must be signed</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Proposal</td>
                      <td className="py-3 px-4 text-gray-300">Pitches your approach, methodology, and value proposition</td>
                      <td className="py-3 px-4 text-gray-300">Freelancer</td>
                      <td className="py-3 px-4 text-gray-300">Generally no</td>
                      <td className="py-3 px-4 text-gray-300">During the sales process, before the client commits</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Brief</td>
                      <td className="py-3 px-4 text-gray-300">Outlines the client&apos;s requirements, goals, and constraints</td>
                      <td className="py-3 px-4 text-gray-300">Client</td>
                      <td className="py-3 px-4 text-gray-300">No</td>
                      <td className="py-3 px-4 text-gray-300">At the start of the project, as input to the SOW</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium"><Link href="/glossary/quote" className="text-violet-400 hover:text-violet-300 underline">Quote</Link></td>
                      <td className="py-3 px-4 text-gray-300">States the price for the defined work, usually with an expiry date</td>
                      <td className="py-3 px-4 text-gray-300">Freelancer</td>
                      <td className="py-3 px-4 text-gray-300">Can be, if accepted</td>
                      <td className="py-3 px-4 text-gray-300">After understanding requirements, before contract</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium"><Link href="/glossary/purchase-order" className="text-violet-400 hover:text-violet-300 underline">Purchase Order</Link></td>
                      <td className="py-3 px-4 text-gray-300">A formal authorisation from the buyer to proceed and commit funds</td>
                      <td className="py-3 px-4 text-gray-300">Client (buyer)</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Yes</span></td>
                      <td className="py-3 px-4 text-gray-300">Common in corporate/government engagements</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Letter of Engagement</td>
                      <td className="py-3 px-4 text-gray-300">A lighter-weight contract often used by consultants and professional services</td>
                      <td className="py-3 px-4 text-gray-300">Freelancer or firm</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Yes</span></td>
                      <td className="py-3 px-4 text-gray-300">Retainer or ongoing advisory relationships</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Project Plan</td>
                      <td className="py-3 px-4 text-gray-300">Detailed schedule with tasks, dependencies, resources, and critical path</td>
                      <td className="py-3 px-4 text-gray-300">Freelancer or project manager</td>
                      <td className="py-3 px-4 text-gray-300">No</td>
                      <td className="py-3 px-4 text-gray-300">After SOW approval, for execution planning</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Requirements Document</td>
                      <td className="py-3 px-4 text-gray-300">Technical specification of functional and non-functional requirements</td>
                      <td className="py-3 px-4 text-gray-300">Business analyst or developer</td>
                      <td className="py-3 px-4 text-gray-300">No</td>
                      <td className="py-3 px-4 text-gray-300">Complex technical projects; supplements the SOW</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">For most freelance projects under $10,000, you need three documents: a SOW, a contract, and invoices. Everything else is optional or can be folded into one of these three.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">The Typical Document Flow</h3>
            <p className="text-gray-300 leading-relaxed">
              For a standard freelance project, documents are created in this order:
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-4 text-sm">
              <span className="px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300">Client Brief</span>
              <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              <span className="px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300">Proposal</span>
              <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              <span className="px-3 py-1.5 rounded-lg bg-violet-500/20 border border-violet-500/30 text-violet-300 font-medium">SOW + Quote</span>
              <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              <span className="px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300">Contract</span>
              <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              <span className="px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300">Deposit Invoice</span>
              <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              <span className="px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300">Work Begins</span>
            </div>
          </div>
        </section>

        {/* Section 4: How to Write a Bulletproof SOW */}
        <section id="how-to-write-sow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Write a Bulletproof SOW</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Writing a scope of work is a skill, and like any skill, it improves with practice. Here is a 7-step process that produces consistently strong SOWs, followed by a <strong className="text-white">worked example for a $5,000 web design project</strong>.
            </p>

            <div className="space-y-6 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <span className="text-violet-400 text-sm font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Start with Discovery</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Before you write a single word of the SOW, <strong className="text-gray-200">understand the project fully</strong>. Conduct a discovery call or review the client brief. Ask: What is the problem you are trying to solve? What does success look like? What have you tried before? Who are the stakeholders? What is the budget and timeline? What is definitely NOT in scope? The quality of your SOW is directly proportional to the quality of your discovery.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <span className="text-violet-400 text-sm font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Define Objectives (Not Features)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Start the SOW with the <strong className="text-gray-200">business objectives</strong>, not the deliverables. Objectives frame the entire project and give you a reference point for evaluating whether a request is in scope or out of scope. If a change request does not serve the stated objectives, it probably does not belong in this project.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <span className="text-violet-400 text-sm font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">List Deliverables with Specifications</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every deliverable should be <strong className="text-gray-200">specific and measurable</strong>. Use numbers, formats, and dimensions wherever possible. Not &quot;design mockups&quot; but &quot;3x homepage design concepts in Figma at 1440px desktop width and 375px mobile width.&quot; Not &quot;social media content&quot; but &quot;12x Instagram carousel posts (10 slides each) with custom illustrations, delivered as 1080x1080px PNG files.&quot;
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <span className="text-violet-400 text-sm font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Set Timeline with Milestones</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Break the project into <strong className="text-gray-200">phases with clear milestones</strong>. Each milestone should have a deliverable, a review period, and a corresponding payment trigger. This creates natural checkpoints where the client approves work before you move on, reducing the risk of major rework at the end of the project.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <span className="text-violet-400 text-sm font-bold">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Define Exclusions Explicitly</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This is where most freelancers underinvest. <strong className="text-gray-200">Write out everything that is NOT included</strong>, especially things a reasonable client might assume are part of the project. If you are designing a website, explicitly exclude copywriting, SEO, hosting setup, domain configuration, email setup, ongoing maintenance, training, and third-party integrations. It feels redundant &mdash; it is not. Every item on this list is a future scope creep conversation you will never have to have.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <span className="text-violet-400 text-sm font-bold">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Establish the Change Process</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Include a clear <strong className="text-gray-200">change order process</strong>: what happens when the client wants something outside the scope. Define the steps (request, quote, approval, execution), the pricing model (hourly rate for changes, or per-item), and the approval requirements (written sign-off before work begins). This normalises scope changes as a routine part of the project rather than an adversarial negotiation.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <span className="text-violet-400 text-sm font-bold">7</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Get Written Sign-Off</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A SOW that is not signed is a suggestion, not an agreement. <strong className="text-gray-200">Get the client to sign the SOW</strong> (or approve it in writing via email at minimum). This can be as simple as a signature block at the bottom of the document, or integrating it into your contract signing workflow. A signed SOW is your reference point for every future scope discussion.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-10">Worked Example: $5,000 Web Design Project</h3>
            <p className="text-gray-300 leading-relaxed">
              Here is how the 7-step process produces a real SOW for a $5,000 website redesign:
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6 mt-4 space-y-5">
              <div>
                <h4 className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2">Project Overview</h4>
                <p className="text-gray-300 text-sm">Redesign and development of a 5-page responsive website for Collins Architecture, a Melbourne-based residential architecture firm. The project replaces the existing WordPress site with a modern, high-performance static site built on Next.js.</p>
              </div>
              <div>
                <h4 className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2">Objectives</h4>
                <ul className="space-y-1 text-gray-300 text-sm ml-4">
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5 flex-shrink-0">&bull;</span><span>Increase online enquiry form submissions by 40% within 6 months of launch</span></li>
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5 flex-shrink-0">&bull;</span><span>Achieve mobile page speed score of 90+ on Google PageSpeed Insights</span></li>
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5 flex-shrink-0">&bull;</span><span>Establish a modern, premium visual identity that positions the firm alongside top-tier competitors</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2">Deliverables</h4>
                <ul className="space-y-1 text-gray-300 text-sm ml-4">
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5 flex-shrink-0">&bull;</span><span>5 pages: Home, About, Services, Portfolio (filterable gallery), Contact</span></li>
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5 flex-shrink-0">&bull;</span><span>Figma design files for all 5 pages (desktop 1440px + mobile 375px)</span></li>
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5 flex-shrink-0">&bull;</span><span>Production-ready Next.js code deployed to Vercel</span></li>
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5 flex-shrink-0">&bull;</span><span>Contact form with email notification (using Resend)</span></li>
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5 flex-shrink-0">&bull;</span><span>Google Analytics 4 + Search Console setup</span></li>
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5 flex-shrink-0">&bull;</span><span>Basic on-page SEO (meta tags, alt text, sitemap)</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2">Timeline</h4>
                <div className="grid sm:grid-cols-2 gap-3 mt-2">
                  <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-700/30">
                    <p className="text-white text-sm font-medium">Phase 1: Discovery &amp; Wireframes</p>
                    <p className="text-gray-500 text-xs">Week 1&ndash;2 &mdash; Payment: 30% deposit ($1,500)</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-700/30">
                    <p className="text-white text-sm font-medium">Phase 2: Visual Design</p>
                    <p className="text-gray-500 text-xs">Week 3&ndash;4 &mdash; Payment: 30% on approval ($1,500)</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-700/30">
                    <p className="text-white text-sm font-medium">Phase 3: Development</p>
                    <p className="text-gray-500 text-xs">Week 5&ndash;7 &mdash; No payment trigger</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-700/30">
                    <p className="text-white text-sm font-medium">Phase 4: Testing &amp; Launch</p>
                    <p className="text-gray-500 text-xs">Week 8 &mdash; Payment: 40% on launch ($2,000)</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2">Exclusions</h4>
                <p className="text-gray-400 text-sm">Copywriting, stock photography, logo design, ongoing SEO/marketing, CMS setup, blog functionality, e-commerce, third-party integrations (booking, CRM), domain registration, hosting fees, email setup, post-launch maintenance, staff training.</p>
              </div>
              <div>
                <h4 className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2">Revisions</h4>
                <p className="text-gray-400 text-sm">2 rounds per design deliverable included. Additional rounds: $150/round. Revisions must be submitted in writing within 5 business days.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Scope Creep Prevention */}
        <section id="scope-creep-prevention">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Scope Creep Prevention</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A well-written SOW is the <strong className="text-white">primary weapon against scope creep</strong>. <Link href="/glossary/scope-creep" className="text-violet-400 hover:text-violet-300 underline">Scope creep</Link> &mdash; the gradual, uncontrolled expansion of project requirements &mdash; affects 52% of all projects and causes an average 27% budget overrun. Freelancers lose an average of $7,600 per year to uncompensated scope creep. The SOW prevents this by creating a documented baseline that both parties have agreed to.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">How the SOW Prevents Scope Creep</h3>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-violet-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Clear deliverables</strong> mean both parties agree on exactly what &quot;done&quot; looks like before work begins</span></li>
              <li className="flex items-start gap-2"><span className="text-violet-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Explicit exclusions</strong> eliminate the &quot;I assumed that was included&quot; conversation entirely</span></li>
              <li className="flex items-start gap-2"><span className="text-violet-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Revision limits</strong> prevent the endless feedback loop that turns 2 weeks of design into 2 months</span></li>
              <li className="flex items-start gap-2"><span className="text-violet-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Change order process</strong> normalises scope changes as a paid, documented activity rather than a favour</span></li>
              <li className="flex items-start gap-2"><span className="text-violet-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Acceptance criteria</strong> define when a deliverable is complete, preventing the &quot;just one more tweak&quot; cycle</span></li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8">Change Order Template</h3>
            <p className="text-gray-300 leading-relaxed">
              When a client requests work outside the SOW, respond with a formal change order. Here is a template you can use:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6 mt-4 font-mono text-sm">
              <p className="text-violet-400 font-semibold mb-3">CHANGE ORDER #[number]</p>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-gray-500">Project:</span> [Project Name]</p>
                <p><span className="text-gray-500">Date:</span> [Date]</p>
                <p><span className="text-gray-500">Requested by:</span> [Client Name]</p>
                <p className="mt-3"><span className="text-gray-500">Description of Change:</span></p>
                <p className="pl-4 text-gray-400">[Detailed description of the additional work requested]</p>
                <p className="mt-3"><span className="text-gray-500">Estimated Cost:</span> $[amount] (excl. GST)</p>
                <p><span className="text-gray-500">Timeline Impact:</span> +[X] business days</p>
                <p><span className="text-gray-500">Payment Terms:</span> Due upon completion of change order</p>
                <p className="mt-3"><span className="text-gray-500">Approval:</span></p>
                <p className="pl-4 text-gray-400">Client Signature: _________________ Date: _________</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Pricing Change Requests</h3>
            <p className="text-gray-300 leading-relaxed">
              Not all change requests are created equal. Use these pricing guidelines:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Request Type</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Pricing</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Rationale</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Standard change</td>
                      <td className="py-3 px-4 text-gray-300">Your standard hourly rate</td>
                      <td className="py-3 px-4 text-gray-300">Client acknowledges the request is out of scope and accepts the additional cost</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Rush change (48hr or less)</td>
                      <td className="py-3 px-4 text-gray-300">Standard rate + 25% premium</td>
                      <td className="py-3 px-4 text-gray-300">Urgency requires reprioritising other work and potentially working outside normal hours</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Emergency change (same day)</td>
                      <td className="py-3 px-4 text-gray-300">Standard rate + 50% premium</td>
                      <td className="py-3 px-4 text-gray-300">Requires dropping everything; reserved for genuine emergencies</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Rework (after approval)</td>
                      <td className="py-3 px-4 text-gray-300">Standard rate + 15% premium</td>
                      <td className="py-3 px-4 text-gray-300">Client approved a deliverable, then changed their mind; the original work is wasted</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Red Flags in Client Requests</h3>
            <p className="text-gray-300 leading-relaxed">
              Watch for these phrases that signal incoming scope creep:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div>
                  <p className="text-red-300 font-medium text-sm">&quot;Can you just quickly...&quot;</p>
                  <p className="text-gray-500 text-xs mt-1">There is no such thing as a quick change. Every request takes time to understand, implement, and test.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div>
                  <p className="text-red-300 font-medium text-sm">&quot;I thought that was included.&quot;</p>
                  <p className="text-gray-500 text-xs mt-1">Politely point to the exclusions section of the signed SOW. This is exactly why it exists.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div>
                  <p className="text-red-300 font-medium text-sm">&quot;While you&apos;re at it, could you also...&quot;</p>
                  <p className="text-gray-500 text-xs mt-1">Additional items added mid-project are change orders. Quote and document them before proceeding.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div>
                  <p className="text-red-300 font-medium text-sm">&quot;My boss wants a few extra things.&quot;</p>
                  <p className="text-gray-500 text-xs mt-1">Multiple stakeholders adding requests is the #1 cause of scope creep. Ensure one point of contact consolidates all feedback.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">The 52% Problem</p>
              <p className="text-gray-400 text-sm">
                According to the Project Management Institute, <strong className="text-gray-200">52% of projects experience scope creep</strong>, with an average budget overrun of 27%. For a freelancer billing $100,000 per year, that translates to approximately $7,600 in uncompensated work. A SOW with clear exclusions and a change order process recovers most of that lost revenue and completes projects 28% faster on average.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-sow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A great SOW defines the project &mdash; but you still need to <strong className="text-white">invoice against it, track payments, and manage the financial side</strong>. InvoiceFlow connects your scope of work directly to your billing workflow, so every milestone, deliverable, and change order is accounted for:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Milestone Invoicing Aligned to SOW Phases</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set up your project with <strong className="text-gray-200">milestone-based billing</strong> that mirrors your SOW phases. When you complete Phase 1 (e.g., Discovery &amp; Wireframes), generate the corresponding milestone invoice with one click. InvoiceFlow pre-populates the invoice with the correct amount, deliverable description, and payment terms from your project setup. Each milestone invoice references the SOW phase, creating a clear paper trail between the work delivered and the payment requested.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Deposit Invoicing for Initial Phase</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Most SOWs require a <strong className="text-gray-200"><Link href="/glossary/deposit" className="text-violet-400 hover:text-violet-300 underline">deposit</Link> before work begins</strong> (typically 30&ndash;50% of the total project value). InvoiceFlow generates deposit invoices with the correct percentage, marks the project as &quot;awaiting deposit,&quot; and automatically transitions the project status to &quot;active&quot; once the deposit payment is received. No manual tracking required &mdash; you know exactly when you are cleared to start.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Payment Tracking Against SOW Deliverables</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  See a <strong className="text-gray-200">real-time overview of invoiced vs. paid amounts</strong> for each project, broken down by SOW phase. InvoiceFlow shows you: total project value, amount invoiced to date, amount paid, amount outstanding, and percentage complete. If Phase 2 is complete but the client has not paid the Phase 1 invoice yet, you will know before you move to Phase 3 &mdash; giving you leverage to pause work until payments are current, as your contract should allow.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Quote-to-Invoice Workflow</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Start with a <strong className="text-gray-200"><Link href="/glossary/quote" className="text-violet-400 hover:text-violet-300 underline">quote</Link> that mirrors your SOW</strong>, with itemised deliverables and phase pricing. When the client accepts the quote, InvoiceFlow automatically converts it into a project with pre-configured milestone invoices. You go from SOW sign-off to deposit invoice in under 60 seconds. Change orders are added as separate line items, keeping the original SOW pricing intact while clearly showing the additional work.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">SOW + InvoiceFlow = Complete Project Control</p>
              <p className="text-gray-400 text-sm">
                Your SOW defines the work. InvoiceFlow turns that definition into a <strong className="text-gray-200">billing structure</strong> that tracks every dollar from deposit to final payment. Together, they ensure you never do work without a corresponding invoice, never lose track of what has been paid, and always have a clear financial picture of every project. Use the <Link href="/tools/invoice-generator" className="text-violet-400 hover:text-violet-300 underline">Invoice Generator</Link> to create your first milestone invoice in minutes.
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
        <p className="text-gray-400 text-center mb-8">Free tools to scope, quote, contract, and invoice your freelance projects.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on scoping, pricing, and invoicing freelance projects.</p>
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
            Turn Your SOW Into Invoices
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow connects your scope of work to milestone invoicing, deposit billing, and payment tracking &mdash; so every deliverable has a corresponding invoice and every dollar is accounted for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/invoice-generator">
              <Button variant="secondary">Create a Milestone Invoice</Button>
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
