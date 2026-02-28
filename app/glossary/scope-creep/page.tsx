import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Scope Creep: How to Prevent It as an Australian Freelancer — InvoiceFlow',
  description:
    'What is scope creep? Learn how to identify, prevent, and manage scope creep as an Australian freelancer. Includes warning signs, contract clauses, change request processes, and how to bill for out-of-scope work without damaging client relationships.',
  keywords: [
    'scope creep meaning',
    'how to prevent scope creep freelancer',
    'scope creep examples',
    'project scope management freelancer',
    'scope creep contract clause',
    'change request template',
    'out of scope work billing',
    'freelance scope management',
  ],
  alternates: { canonical: '/glossary/scope-creep' },
  openGraph: {
    title: 'Scope Creep: How to Prevent It as an Australian Freelancer — InvoiceFlow',
    description:
      'What is scope creep? Learn how to identify, prevent, and manage scope creep as an Australian freelancer. Includes warning signs, contract clauses, change request processes, and how to bill for out-of-scope work without damaging client relationships.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/scope-creep',
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
    { '@type': 'ListItem', position: 3, name: 'Scope Creep', item: `${BASE_URL}/glossary/scope-creep` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is scope creep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scope creep is the gradual, uncontrolled expansion of a project\'s requirements beyond the original agreed scope — without corresponding increases in budget, timeline, or resources. It\'s the "can you also..." and "just one more thing..." requests that slowly turn a $3,000 website project into $6,000 worth of work. Scope creep is the #1 profitability killer for freelancers because each small addition seems harmless in isolation, but collectively they can double your workload. It happens in nearly every project to some degree — the key is managing it, not eliminating it entirely.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I prevent scope creep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prevention starts BEFORE the project begins: (1) Write a detailed scope document listing exactly what is and isn\'t included, (2) Get written sign-off on the scope, (3) Include a change request clause in your contract that requires approval and pricing for any additions, (4) Use milestone billing so you\'re never too far ahead of payments. During the project: flag scope changes immediately ("that\'s a great idea — it\'s outside our current scope, so let me send you a quote for the additional work"), document everything in writing, and never absorb "small" changes without acknowledging them.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I charge for out-of-scope work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a client requests work outside the agreed scope, send a formal change request that includes: a description of the additional work, estimated hours/cost, impact on the timeline, and a request for written approval before proceeding. Price out-of-scope work at your standard rate or at a premium (10-20% above your regular rate) to account for the disruption. Use the phrase: "I\'d be happy to include that. Based on the additional requirements, the extra work would be [amount] and would add [time] to the timeline. Shall I send a revised quote?" This is professional, not confrontational.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should my contract say about scope changes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your contract should include a dedicated "Scope Changes" or "Change Request" clause. At minimum it should state: (1) any work not explicitly listed in the scope of work is considered out-of-scope, (2) out-of-scope requests require a written change request from the client, (3) you will provide a cost and timeline estimate for each change request, (4) work on changes will not begin until the client approves the cost in writing, (5) approved changes will be invoiced separately or added to the next milestone invoice. This clause is your legal protection and your professional tool for having scope conversations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is scope creep always bad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. Scope expansion can be a positive signal — it means the client sees value in your work and wants more. The problem isn\'t scope changes themselves, it\'s UNCONTROLLED and UNCOMPENSATED changes. Managed scope changes (properly documented, priced, and approved) are actually good for business — they increase project value and deepen the client relationship. The goal isn\'t to reject every change, it\'s to ensure every change is acknowledged, agreed upon, and paid for. A $5,000 project that grows to $8,000 through approved change requests is a win for everyone.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-scope-creep', label: '1. What Is Scope Creep?' },
  { id: 'real-cost-of-scope-creep', label: '2. The Real Cost of Scope Creep' },
  { id: 'warning-signs', label: '3. 10 Warning Signs of Scope Creep' },
  { id: 'preventing-scope-creep', label: '4. Preventing Scope Creep (Before the Project)' },
  { id: 'managing-scope-changes', label: '5. Managing Scope Changes (During the Project)' },
  { id: 'scope-management-invoiceflow', label: '6. Scope Management with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/freelance-contract-generator',
    name: 'Contract Generator',
    description: 'Create contracts with built-in scope change and change request clauses.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/project-timeline-calculator',
    name: 'Project Timeline Calculator',
    description: 'Account for scope changes when planning project timelines.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Invoice for change requests and out-of-scope work professionally.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Set rates that account for the hidden cost of scope creep.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Milestone billing structures that protect against scope creep.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'How to invoice for change requests and additional work professionally.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'Build a scope creep buffer into your pricing.',
  },
];

const warningSignIcons = [
  // 1. "Can you also..." emails
  <svg key="ws1" className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>,
  // 2. Vague scope
  <svg key="ws2" className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>,
  // 3. Multiple stakeholders
  <svg key="ws3" className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>,
  // 4. "Quick" requests
  <svg key="ws4" className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // 5. References work not in brief
  <svg key="ws5" className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>,
  // 6. Working weekends
  <svg key="ws6" className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>,
  // 7. Timeline extending
  <svg key="ws7" className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
  </svg>,
  // 8. Stopped tracking hours
  <svg key="ws8" className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
  </svg>,
  // 9. "I thought that was included"
  <svg key="ws9" className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>,
  // 10. Dreading emails
  <svg key="ws10" className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
  </svg>,
];

const warningSigns = [
  { title: '"Can you also..." emails after scope is signed off', description: 'The classic scope creep opener. Each request sounds small, but they stack up fast. If you hear "can you also..." more than twice after signing the scope, you have active scope creep.' },
  { title: 'Vague or unclear original scope document', description: 'If the scope says "build a website" instead of "build a 5-page marketing website with contact form," you have left the door wide open. Vague scopes are an invitation for unlimited interpretation.' },
  { title: 'Multiple stakeholders with different expectations', description: 'When the marketing manager wants one thing, the CEO wants another, and the developer wants a third, scope creep is inevitable. Too many cooks means too many change requests.' },
  { title: '"Quick" requests that keep growing', description: '"Can you just make a quick change?" is rarely quick. A "quick" logo tweak becomes a full rebrand. A "quick" copy edit becomes a content rewrite. Time these requests and you will be surprised.' },
  { title: 'Client references work that was not in the brief', description: 'When a client says "I assumed the SEO setup was included" or "the competitor\'s site has this feature," they are referencing scope that was never agreed upon. This is a red flag.' },
  { title: 'You find yourself working weekends to stay on schedule', description: 'If the agreed timeline no longer works despite you being on track, the scope has grown. Working extra hours to absorb scope creep is the most expensive form of free labour.' },
  { title: 'The project timeline keeps extending', description: 'The project was supposed to take 4 weeks. Then 6. Then 8. If the deadline keeps shifting without a corresponding change in budget, scope creep is the cause.' },
  { title: 'You have stopped tracking hours because the numbers are depressing', description: 'When you stop looking at time tracking because you know you are way over budget, that is scope creep in its most advanced stage. The data does not lie.' },
  { title: 'Client says "I thought that was included"', description: 'This phrase reveals a gap between what the client expected and what you scoped. Either the scope was unclear, or the client did not read it. Either way, it is a scope problem.' },
  { title: 'You are dreading opening the client\'s emails', description: 'When every email brings a new request, revision, or "quick addition," the emotional toll becomes real. Dread is your body telling you the project has gone off track.' },
];

export default function ScopeCreepGlossaryPage() {
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
            <span className="text-white">Scope Creep</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Project Management
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Scope Creep{' '}
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
              Prevention for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Scope creep is the silent profitability killer for freelancers. This guide covers what it is, how to spot it early, how to prevent it with bulletproof contracts, and how to manage change requests professionally &mdash; so you get paid for every hour you work.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>16 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Templates Included</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">52%</span>
              <div>
                <p className="text-white font-medium text-sm">Projects Affected</p>
                <p className="text-gray-400 text-sm">Over half of all projects experience scope creep according to PMI research data</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">#1</span>
              <div>
                <p className="text-white font-medium text-sm">Profitability Killer</p>
                <p className="text-gray-400 text-sm">Scope creep is the number one reason freelancers earn less than their quoted rate</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">30%</span>
              <div>
                <p className="text-white font-medium text-sm">Average Overrun</p>
                <p className="text-gray-400 text-sm">The typical project affected by scope creep runs 30% or more over the original budget</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">$0</span>
              <div>
                <p className="text-white font-medium text-sm">What Most Freelancers Charge</p>
                <p className="text-gray-400 text-sm">The majority of freelancers absorb scope creep without billing &mdash; working for free</p>
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

        {/* Section 1: What Is Scope Creep? */}
        <section id="what-is-scope-creep">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Scope Creep?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Scope creep is the <strong className="text-white">gradual, uncontrolled expansion of a project&apos;s requirements beyond the original agreed scope</strong> &mdash; without corresponding increases in budget, timeline, or resources. It is the &quot;can you also...&quot; and &quot;just one more thing...&quot; requests that slowly turn a $3,000 website project into $6,000 worth of work, while you are still being paid $3,000.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Here is what scope creep looks like in practice: You agree to build a 5-page marketing website for $4,000. After the design is approved, the client asks &quot;can you also add a blog?&quot; Then &quot;can we add an events calendar too?&quot; Then &quot;actually, can you integrate this with our CRM?&quot; Each request sounds small and reasonable. But collectively, they have transformed a 50-hour project into a 90-hour project &mdash; and you are still being paid $4,000.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Scope creep is the #1 profitability killer for freelancers</strong> because each individual addition seems harmless. Nobody asks you to do $3,000 of free work in a single request. Instead, it happens in twenty small requests of $150 each. By the time you realise the project has ballooned, you are already deep into the work and feel obligated to finish. According to the Project Management Institute (PMI), <strong className="text-white">52% of all projects experience scope creep</strong> &mdash; and for freelancers without formal project management processes, the number is likely much higher.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Types of Scope Creep</h3>
            <div className="grid sm:grid-cols-3 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Feature Creep</h4>
                <p className="text-gray-400 text-sm">New features, pages, or functionality added after the scope is agreed. The most common type. &quot;Can you also build an admin dashboard?&quot;</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-rose-400 font-medium mb-2">Requirement Creep</h4>
                <p className="text-gray-400 text-sm">Existing features become more complex. What started as a &quot;simple contact form&quot; becomes a multi-step enquiry wizard with conditional logic and CRM integration.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Gold Plating</h4>
                <p className="text-gray-400 text-sm">When YOU over-deliver without being asked. Adding extra polish, bonus features, or functionality the client did not request. It feels generous, but it is still unpaid scope expansion.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">The Psychology Behind Scope Creep</h3>
            <p className="text-gray-300 leading-relaxed">
              Understanding why scope creep happens helps you prevent it. There are two sides to the equation:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3">Why Clients Ask for More</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>They do not understand the effort behind &quot;small&quot; requests</li>
                  <li>They see the project evolving and get excited about possibilities</li>
                  <li>They assume it was included because the scope was vague</li>
                  <li>They are comparing your deliverable to a competitor&apos;s and want parity</li>
                  <li>They genuinely do not know the request is outside scope</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <h4 className="text-rose-400 font-semibold mb-3">Why Freelancers Say Yes</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Fear of losing the client or the relationship</li>
                  <li>People-pleasing &mdash; wanting to be seen as helpful and accommodating</li>
                  <li>Avoiding confrontation or &quot;difficult&quot; conversations</li>
                  <li>Underestimating how much the additions will actually take</li>
                  <li>Hoping the goodwill will lead to more work later (it rarely does)</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">The Core Problem</p>
              <p className="text-gray-400 text-sm">
                Scope creep is not a client problem or a freelancer problem &mdash; it is a <strong className="text-gray-200">process problem</strong>. It happens when there is no clear system for identifying, documenting, and pricing changes. The solution is not to have better clients or thicker skin. It is to have a <strong className="text-gray-200">change management process</strong> that makes scope conversations routine and professional, not confrontational.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The Real Cost of Scope Creep */}
        <section id="real-cost-of-scope-creep">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Real Cost of Scope Creep</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Most freelancers underestimate the cost of scope creep because they never calculate it. When you absorb &quot;just a few extra hours&quot; on every project, it does not feel like a major loss. But the numbers tell a different story.
            </p>

            {/* Worked Example */}
            <div className="rounded-xl bg-gray-800/50 border border-red-500/30 p-6 mt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Financial Cost: Worked Example</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                A $5,000 website project with 30% scope creep:
              </p>
              <div className="space-y-3">
                <div className="rounded-lg bg-gray-900/60 p-4">
                  <p className="text-sm text-gray-400 mb-1">Agreed Scope</p>
                  <div className="rounded-lg bg-gray-900/60 p-3 text-sm font-mono text-red-300">
                    $5,000 for 50 hours = $100/hr effective rate
                  </div>
                </div>
                <div className="rounded-lg bg-gray-900/60 p-4">
                  <p className="text-sm text-gray-400 mb-1">Actual Work (with 30% scope creep)</p>
                  <div className="rounded-lg bg-gray-900/60 p-3 text-sm font-mono text-rose-300">
                    $5,000 for 65 hours = $76.92/hr effective rate &mdash; a 23% pay cut
                  </div>
                </div>
                <div className="rounded-lg bg-gray-900/60 p-4">
                  <p className="text-sm text-gray-400 mb-1">The Hidden Donation</p>
                  <div className="rounded-lg bg-gray-900/60 p-3 text-sm font-mono text-red-400">
                    15 extra hours x $100/hr = $1,500 of free work donated to the client
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Time Cost</h3>
            <p className="text-gray-300 leading-relaxed">
              Those 15 extra hours had to come from somewhere. They either <strong className="text-white">delayed your other projects</strong> (damaging those client relationships), <strong className="text-white">reduced your capacity for new work</strong> (costing you future revenue), or came from <strong className="text-white">your personal time</strong> (evenings, weekends, time with family). Every hour spent on unpaid scope creep is an hour you could have spent on paid work, business development, or rest.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Relationship Cost</h3>
            <p className="text-gray-300 leading-relaxed">
              Ironically, absorbing scope creep <strong className="text-white">damages client relationships rather than strengthening them</strong>. As the project drags on and your internal resentment builds, the quality of your work drops. Communication becomes shorter, less enthusiastic. You start cutting corners on the original scope to make up for the extra work. The client senses something is off, and the relationship deteriorates &mdash; the exact outcome you were trying to avoid by saying yes.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Mental Health Cost</h3>
            <p className="text-gray-300 leading-relaxed">
              Scope creep creates a <strong className="text-white">cycle of overwork and resentment</strong>. You feel taken advantage of but blame yourself for not setting boundaries. You work longer hours to stay on track, leading to burnout. You dread client communications because every email might bring a new request. This is not sustainable, and it is entirely preventable with the right processes.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">The Compounding Effect</h3>
            <p className="text-gray-300 leading-relaxed">
              The real danger is not scope creep on a single project &mdash; it is scope creep on <strong className="text-white">every project simultaneously</strong>. If you are juggling 5 projects and each one has 30% scope creep, you are effectively doing the work of 6.5 projects while being paid for 5. That is the equivalent of working one and a half months for free every year. For a freelancer billing $100,000 annually, that is <strong className="text-white">$30,000 in lost revenue</strong>.
            </p>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Opportunity Cost</p>
              <p className="text-gray-400 text-sm">
                Every hour spent on unpaid scope creep has an opportunity cost. If your rate is $100/hr and you donate 15 hours of free work per project across 10 projects a year, that is <strong className="text-gray-200">$15,000 in lost annual revenue</strong> &mdash; money that could have gone to paid client work, professional development, marketing, or simply taking time off to recharge. The time you spend on free work cannot be recovered.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: 10 Warning Signs of Scope Creep */}
        <section id="warning-signs">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">10 Warning Signs of Scope Creep</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Scope creep rarely announces itself. It creeps in gradually &mdash; hence the name. Recognising the early warning signs gives you the chance to address it before it derails the project and your profitability.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {warningSigns.map((sign, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5 hover:border-red-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                      {warningSignIcons[i]}
                    </div>
                    <span className="text-red-400 font-bold text-sm">#{i + 1}</span>
                  </div>
                  <h4 className="text-white font-medium text-sm mb-2">{sign.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{sign.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">The Threshold Rule</p>
              <p className="text-gray-400 text-sm">
                If you spot <strong className="text-gray-200">three or more</strong> of these warning signs on a single project, you have active scope creep that needs to be addressed immediately. Do not wait for it to resolve itself &mdash; it never does. Schedule a scope review conversation with the client and refer to the processes outlined in sections 4 and 5 below.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Preventing Scope Creep (Before the Project) */}
        <section id="preventing-scope-creep">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Preventing Scope Creep (Before the Project)</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The best time to prevent scope creep is <strong className="text-white">before the project begins</strong>. Once work is underway, it becomes exponentially harder to push back on changes. These pre-project strategies create the structure and documentation you need to manage scope professionally.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Write a Bulletproof Scope Document</h3>
            <p className="text-gray-300 leading-relaxed">
              Your scope document is your <strong className="text-white">single most important defence against scope creep</strong>. It should list everything that IS included in the project AND everything that is NOT included. The &quot;out of scope&quot; section is just as important as the &quot;in scope&quot; section because it eliminates ambiguity.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Use Specific Language</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Vague (Dangerous)</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&quot;Build a website&quot;</li>
                  <li>&quot;Design a logo&quot;</li>
                  <li>&quot;Write copy for the site&quot;</li>
                  <li>&quot;Includes revisions&quot;</li>
                  <li>&quot;Ongoing support&quot;</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-2">Specific (Safe)</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&quot;Build a 5-page marketing website (Home, About, Services, Portfolio, Contact)&quot;</li>
                  <li>&quot;Design 1 primary logo + 1 monogram, 3 initial concepts, 2 rounds of revisions&quot;</li>
                  <li>&quot;Write up to 2,500 words of website copy across 5 pages&quot;</li>
                  <li>&quot;Includes 2 rounds of revisions; additional revisions at $X/hr&quot;</li>
                  <li>&quot;30 days of post-launch bug fixes; additional support at $X/hr&quot;</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Get Written Sign-Off</h3>
            <p className="text-gray-300 leading-relaxed">
              The client must <strong className="text-white">formally agree to the scope in writing</strong> before you start work. This can be a signed contract, a countersigned proposal, or even a reply email explicitly confirming the scope. The key is having a documented moment where the client agreed to what is and is not included. Without this, any scope dispute becomes &quot;he said, she said.&quot;
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Include a Change Request Clause in Your Contract</h3>
            <p className="text-gray-300 leading-relaxed">
              Every freelance contract should include a dedicated clause for handling scope changes. This makes change requests a <strong className="text-white">normal, expected part of the process</strong> rather than an awkward confrontation.
            </p>

            {/* Sample Contract Clause */}
            <div className="rounded-xl bg-gray-800/50 border border-red-500/30 p-6 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">Sample Contract Clause</span>
              </div>
              <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono">
                <p className="font-bold">SCOPE CHANGES AND CHANGE REQUESTS</p>
                <p className="mt-2">Any work not explicitly listed in the Scope of Work (Schedule A) is considered out-of-scope. Should the Client request additional work or modifications to the agreed scope, the following process applies:</p>
                <p className="mt-2">1. The Client will submit a written change request describing the additional work required.</p>
                <p>2. The Contractor will provide a written estimate of the additional cost and timeline impact within 2 business days.</p>
                <p>3. Work on the change request will not commence until the Client provides written approval of the cost estimate.</p>
                <p>4. Approved change requests will be invoiced separately or added to the next scheduled milestone invoice.</p>
                <p className="mt-2">Minor clarifications or adjustments that do not materially alter the scope, timeline, or cost of the project may be accommodated at the Contractor&apos;s discretion without a formal change request.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Use Milestone Billing</h3>
            <p className="text-gray-300 leading-relaxed">
              Milestone billing <strong className="text-white">naturally limits scope creep</strong> because each payment is tied to a specific deliverable. If the scope expands, you can point to the milestone structure and say &quot;the additional work falls outside Milestone 2 &mdash; let me quote that as a separate item.&quot; It also means you are never more than one milestone ahead of payments, reducing your financial exposure.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Set a Revision Limit</h3>
            <p className="text-gray-300 leading-relaxed">
              Unlimited revisions are an open invitation for scope creep. State clearly: <strong className="text-white">&quot;Includes 2 rounds of revisions. Additional revisions will be charged at $X per hour.&quot;</strong> This sets expectations upfront and gives you a natural checkpoint to re-scope if the project is evolving.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Define &quot;Done&quot;</h3>
            <p className="text-gray-300 leading-relaxed">
              When is the project complete? Without a clear definition, projects can drag on indefinitely as the client continues to request tweaks and additions. Define completion criteria in your scope: <strong className="text-white">&quot;The project is considered complete upon delivery of [specific deliverables] and client sign-off on the final version.&quot;</strong>
            </p>

            {/* Scope Checklist */}
            <h3 className="text-lg font-semibold text-white mt-8">Pre-Project Scope Checklist</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3">Scope Document</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>All deliverables listed with specific quantities</li>
                  <li>&quot;Out of scope&quot; section included</li>
                  <li>Number of revision rounds specified</li>
                  <li>Completion criteria defined</li>
                  <li>Timeline with milestones documented</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                <h4 className="text-rose-400 font-semibold mb-3">Contract Protections</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Change request clause included</li>
                  <li>Milestone billing structure defined</li>
                  <li>Rate for additional work specified</li>
                  <li>Client sign-off obtained in writing</li>
                  <li>Deposit or first milestone collected</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Pro Tip: The &quot;Out of Scope&quot; Section</p>
              <p className="text-gray-400 text-sm">
                The most powerful tool in your scope document is the <strong className="text-gray-200">&quot;What Is NOT Included&quot; section</strong>. Explicitly listing items like SEO optimisation, content creation, stock photography, hosting setup, training sessions, and ongoing maintenance removes the client&apos;s ability to claim they assumed these were included. It also opens the door for upselling: &quot;These items are available as add-ons &mdash; happy to provide a quote.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Managing Scope Changes (During the Project) */}
        <section id="managing-scope-changes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Managing Scope Changes (During the Project)</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Even with a bulletproof scope document, changes will happen. Clients have new ideas, business requirements shift, and projects evolve. The goal is not to prevent all changes &mdash; it is to <strong className="text-white">manage them through a professional process</strong> so every change is acknowledged, priced, and approved.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">The Change Request Process</h3>
            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">1</span>
                <div>
                  <p className="text-white font-medium text-sm">Client Makes a Request</p>
                  <p className="text-gray-400 text-sm">The client asks for something new &mdash; a feature, a change, an addition. This can come via email, call, or meeting. Document it immediately.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">2</span>
                <div>
                  <p className="text-white font-medium text-sm">You Assess: In Scope or Out of Scope?</p>
                  <p className="text-gray-400 text-sm">Compare the request against your signed scope document. Is this a clarification of existing work or genuinely new work? Be honest but firm.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">3</span>
                <div>
                  <p className="text-white font-medium text-sm">If Out of Scope: Acknowledge, Explain, Quote</p>
                  <p className="text-gray-400 text-sm">Acknowledge the request positively. Explain that it is outside the current scope. Provide a cost estimate and timeline impact. This is not a rejection &mdash; it is a professional process.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">4</span>
                <div>
                  <p className="text-white font-medium text-sm">Get Written Approval Before Proceeding</p>
                  <p className="text-gray-400 text-sm">Never start work on a change request until the client has approved the cost in writing. A simple email reply saying &quot;approved, go ahead&quot; is sufficient.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">5</span>
                <div>
                  <p className="text-white font-medium text-sm">Track and Invoice Accordingly</p>
                  <p className="text-gray-400 text-sm">Log all approved change requests. Invoice them separately or add them to the next milestone invoice. Keep a running total of scope changes throughout the project.</p>
                </div>
              </div>
            </div>

            {/* Sample Email Template */}
            <h3 className="text-lg font-semibold text-white mt-8">Sample Change Request Email</h3>
            <div className="rounded-xl bg-gray-800/50 border border-rose-500/30 p-6 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full">Email Template</span>
              </div>
              <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono">
                <p>Subject: Change Request &mdash; [Project Name] &mdash; [Brief Description]</p>
                <p className="mt-2">Hi [Client Name],</p>
                <p className="mt-2">Thanks for the feedback on the latest deliverable. I love the idea of adding [requested feature/change] &mdash; it would definitely improve the end result.</p>
                <p className="mt-2">This falls outside our current agreed scope, so I have put together a quick estimate for the additional work:</p>
                <p className="mt-2">&bull; Additional work: [description]<br />&bull; Estimated time: [X hours]<br />&bull; Additional cost: $[amount] (at my standard rate of $[rate]/hr)<br />&bull; Timeline impact: adds approximately [X days/weeks] to the current schedule</p>
                <p className="mt-2">If you would like to go ahead, just reply confirming and I will incorporate this into the project plan. Alternatively, we can discuss further on a call.</p>
                <p className="mt-2">The rest of the project is tracking well &mdash; I will have the next milestone ready for review by [date] as planned.</p>
                <p className="mt-2">Cheers,<br />[Your Name]</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">How to Say &quot;No&quot; Professionally</h3>
            <p className="text-gray-300 leading-relaxed">
              You are not saying &quot;no&quot; &mdash; you are saying <strong className="text-white">&quot;yes, and here is what it costs.&quot;</strong> This reframing is critical. You are not rejecting the client&apos;s idea. You are validating it, acknowledging it would add value, and presenting the cost of making it happen. Here are three scripts:
            </p>
            <div className="space-y-3 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">The Redirect</h4>
                <p className="text-gray-400 text-sm italic">&quot;That is a great idea. It is outside our current scope, so let me put together a quick estimate for the additional work. I will have that to you by tomorrow.&quot;</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-rose-400 font-medium mb-2">The Defer</h4>
                <p className="text-gray-400 text-sm italic">&quot;I would love to include that. Let us get the current phase wrapped up first, and then we can scope a Phase 2 that includes these additional features. That way we stay on track and on budget for the current deliverables.&quot;</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">The Trade-Off</h4>
                <p className="text-gray-400 text-sm italic">&quot;We can absolutely add that. To keep the project on budget, we could swap it in for [lower-priority item] from the current scope. Alternatively, I can add it as an additional line item at $[amount]. Which would you prefer?&quot;</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">The &quot;Scope Creep Jar&quot; Technique</h3>
            <p className="text-gray-300 leading-relaxed">
              Track every small addition throughout the project in a running log &mdash; the &quot;scope creep jar.&quot; Even changes you choose to absorb. At the end of the project (or monthly for retainers), present the log to the client: <strong className="text-white">&quot;Here are all the additional items we accommodated this month. The total value of out-of-scope work was $X. We absorbed $Y as goodwill and invoiced $Z.&quot;</strong> This makes your generosity visible and sets a precedent for future billing.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">When to Absorb Small Changes (Strategic Goodwill)</h3>
            <p className="text-gray-300 leading-relaxed">
              Not every small change needs a formal change request. If a client asks you to swap a stock photo, fix a typo, or adjust a colour, it is often more valuable to absorb it as goodwill. The rule of thumb: <strong className="text-white">if it takes less than 15 minutes and does not set a precedent for larger changes, absorb it and note it in your scope creep jar.</strong> If it takes longer than 15 minutes or leads to a pattern of requests, trigger the change request process.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Handling Pushback</h3>
            <p className="text-gray-300 leading-relaxed">
              When a client says <strong className="text-white">&quot;but I thought that was included&quot;</strong>, refer directly to the signed scope document: &quot;Let me pull up the scope we agreed on &mdash; you can see that [feature] is not listed in the deliverables, and it is actually listed in the &apos;out of scope&apos; section. I would be happy to add it as a change request.&quot; This is why documentation matters. The signed scope document is your evidence, not your opinion.
            </p>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Document Everything</p>
              <p className="text-gray-400 text-sm">
                Keep all scope discussions in writing. If a scope change is discussed on a call, follow up with an email: <strong className="text-gray-200">&quot;Per our conversation today, you requested [X]. As discussed, this is outside the current scope and will cost $[Y] with a timeline impact of [Z]. Please confirm in writing if you would like to proceed.&quot;</strong> This paper trail protects you in disputes and keeps both parties accountable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Scope Management with InvoiceFlow */}
        <section id="scope-management-invoiceflow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Scope Management with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built to help Australian freelancers <strong className="text-white">protect their profitability by managing scope professionally</strong>. Here is how it supports every aspect of the scope management lifecycle:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Project Scope Attached to Records</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Attach your scope document directly to the client and project record in InvoiceFlow. Every time you create an invoice, view the client profile, or log a change request, the original scope is one click away. No more digging through email chains to find the document the client signed off on three months ago.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Change Request Tracking</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Log every change request against a project &mdash; including the description, estimated cost, approval status, and whether it has been invoiced. InvoiceFlow gives you a complete history of all scope changes, making it easy to see how the project has evolved and ensuring no approved change slips through uninvoiced.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Milestone-Based Billing</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set up milestone billing structures that naturally limit scope creep. Each milestone is tied to specific deliverables, so when a change request comes in, you can clearly separate it from the agreed milestones. InvoiceFlow generates milestone invoices automatically and tracks payment status against each deliverable.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Time Tracking Against Quoted Hours</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track actual hours against the original quote in real time. InvoiceFlow alerts you when you are approaching the quoted hours for a project, giving you an early warning that scope creep may be occurring. If you quoted 50 hours and you are at 40 hours with 30% of the work remaining, you know the scope has expanded.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Project Profitability Analysis</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  See your <strong className="text-gray-200">quoted effective rate vs actual effective rate</strong> for every project. If you quoted $5,000 for 50 hours ($100/hr) but have logged 65 hours, InvoiceFlow shows your actual rate has dropped to $76.92/hr &mdash; a 23% profitability loss. This data helps you identify which clients and project types are most susceptible to scope creep, so you can adjust your processes and pricing accordingly.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Client Communication Templates</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pre-built email templates for scope discussions, change request notifications, and out-of-scope quotes. When a change request comes in, select the template, fill in the details, and send &mdash; no more agonising over how to word the email. The templates are professional, positive, and designed to preserve the client relationship while protecting your profitability.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">The Bottom Line</p>
              <p className="text-gray-400 text-sm">
                Scope creep does not have to be an inevitable cost of freelancing. With the right tools and processes, every change request becomes a <strong className="text-gray-200">revenue opportunity rather than a profitability leak</strong>. InvoiceFlow gives you the structure, templates, and tracking to manage scope professionally &mdash; so you can say yes to great ideas and get paid for all of them.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you prevent and manage scope creep.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on protecting your freelance profitability.</p>
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
            Stop Working for Free. Start Managing Scope.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps freelancers bill for ALL work delivered &mdash; including change requests. Track scope changes, invoice out-of-scope work, and protect your profitability with milestone billing and project analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/freelance-contract-generator">
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
