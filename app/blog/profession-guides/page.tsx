import Link from 'next/link';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';
import { blogPosts } from '../posts';

export const metadata: Metadata = {
  title: 'Invoicing Guides by Profession — How to Invoice as a Freelancer in Australia | InvoiceFlow',
  description: 'Find your profession-specific invoicing guide. 36+ detailed guides covering pricing, invoice templates, GST, tax compliance, and getting paid for every freelance profession in Australia.',
  openGraph: {
    title: 'Invoicing Guides by Profession — How to Invoice in Australia',
    description: 'Find your profession-specific invoicing guide. 36+ detailed guides covering pricing, templates, GST, and getting paid for every freelance profession in Australia.',
    type: 'website',
  },
  keywords: [
    'how to invoice as a freelancer australia',
    'freelance invoicing guide by profession',
    'invoicing tips for freelancers',
    'freelance invoice template australia',
    'profession-specific invoicing',
    'australian freelancer invoice',
    'GST invoicing by trade',
  ],
};

interface ProfessionGuide {
  slug: string;
  label: string;
  icon: string;
}

interface IndustryGroup {
  name: string;
  description: string;
  gradient: string;
  professions: ProfessionGuide[];
}

const industryGroups: IndustryGroup[] = [
  {
    name: 'Creative & Digital',
    description: 'Invoicing guides for designers, developers, photographers, and content creators',
    gradient: 'from-blue-400 to-cyan-500',
    professions: [
      { slug: 'invoicing-graphic-designers-australia', label: 'Graphic Designers', icon: '🎨' },
      { slug: 'invoicing-web-developers-australia', label: 'Web Developers', icon: '💻' },
      { slug: 'invoicing-ux-ui-designers-australia', label: 'UX/UI Designers', icon: '🖌️' },
      { slug: 'invoicing-mobile-app-developers-australia', label: 'App Developers', icon: '📱' },
      { slug: 'invoicing-photographers-australia', label: 'Photographers', icon: '📷' },
      { slug: 'invoicing-videographers-video-editors-australia', label: 'Videographers', icon: '🎬' },
      { slug: 'invoicing-copywriters-content-writers-australia', label: 'Copywriters', icon: '✍️' },
      { slug: 'invoicing-social-media-managers-australia', label: 'Social Media Managers', icon: '📣' },
    ],
  },
  {
    name: 'Health & Wellness',
    description: 'Medicare, NDIS, health fund billing, and clinical invoicing compliance',
    gradient: 'from-emerald-400 to-teal-500',
    professions: [
      { slug: 'invoicing-personal-trainers-fitness-australia', label: 'Personal Trainers', icon: '💪' },
      { slug: 'invoicing-massage-therapists-allied-health-australia', label: 'Massage Therapists', icon: '🧘' },
      { slug: 'invoicing-yoga-pilates-instructors-australia', label: 'Yoga & Pilates Instructors', icon: '🧘‍♀️' },
      { slug: 'invoicing-psychologists-counsellors-therapists-australia', label: 'Psychologists & Counsellors', icon: '🧠' },
      { slug: 'invoicing-nutritionists-dietitians-australia', label: 'Nutritionists & Dietitians', icon: '🥗' },
    ],
  },
  {
    name: 'Professional & Business Services',
    description: 'Billing structures for consultants, accountants, legal professionals, and coaches',
    gradient: 'from-violet-400 to-purple-500',
    professions: [
      { slug: 'invoicing-consultants-australia', label: 'Consultants', icon: '📊' },
      { slug: 'invoicing-bookkeepers-bas-agents-australia', label: 'Bookkeepers & BAS Agents', icon: '📒' },
      { slug: 'invoicing-accountants-tax-agents-bas-agents-australia', label: 'Accountants & Tax Agents', icon: '🧮' },
      { slug: 'invoicing-it-consultants-cybersecurity-australia', label: 'IT Consultants', icon: '🔒' },
      { slug: 'invoicing-lawyers-solicitors-legal-consultants-australia', label: 'Lawyers & Solicitors', icon: '⚖️' },
      { slug: 'invoicing-translators-interpreters-australia', label: 'Translators & Interpreters', icon: '🌐' },
      { slug: 'invoicing-life-coaches-business-coaches-australia', label: 'Life & Business Coaches', icon: '🎯' },
    ],
  },
  {
    name: 'Trades & Home Services',
    description: 'Job-based invoicing, materials pass-through, and compliance for tradespeople',
    gradient: 'from-amber-400 to-orange-500',
    professions: [
      { slug: 'invoicing-electricians-tradespeople-australia', label: 'Electricians & Tradespeople', icon: '⚡' },
      { slug: 'invoicing-carpenters-builders-australia', label: 'Carpenters & Builders', icon: '🔨' },
      { slug: 'invoicing-plumbers-gas-fitters-australia', label: 'Plumbers & Gas Fitters', icon: '🔧' },
      { slug: 'invoicing-cleaners-cleaning-business-australia', label: 'Cleaners', icon: '🧹' },
      { slug: 'invoicing-landscapers-gardeners-australia', label: 'Landscapers & Gardeners', icon: '🌿' },
      { slug: 'invoicing-interior-designers-australia', label: 'Interior Designers', icon: '🏠' },
      { slug: 'invoicing-driving-instructors-australia', label: 'Driving Instructors', icon: '🚗' },
    ],
  },
  {
    name: 'Beauty & Style',
    description: 'Session-based billing, bridal packages, and retail-meets-service invoicing',
    gradient: 'from-pink-400 to-rose-500',
    professions: [
      { slug: 'invoicing-makeup-artists-hair-stylists-australia', label: 'Makeup Artists & Hair Stylists', icon: '💄' },
      { slug: 'invoicing-florists-floral-designers-australia', label: 'Florists & Floral Designers', icon: '🌸' },
    ],
  },
  {
    name: 'Events, Education & Lifestyle',
    description: 'Package invoicing, recurring billing, and service-based pricing models',
    gradient: 'from-rose-400 to-red-500',
    professions: [
      { slug: 'invoicing-event-planners-wedding-coordinators-australia', label: 'Event Planners & Wedding Coordinators', icon: '🎉' },
      { slug: 'invoicing-caterers-private-chefs-australia', label: 'Caterers & Private Chefs', icon: '👨‍🍳' },
      { slug: 'invoicing-musicians-djs-australia', label: 'Musicians & DJs', icon: '🎵' },
      { slug: 'invoicing-tutors-private-teachers-australia', label: 'Tutors & Private Teachers', icon: '📚' },
      { slug: 'invoicing-virtual-assistants-australia', label: 'Virtual Assistants', icon: '🖥️' },
      { slug: 'invoicing-dog-walkers-pet-sitters-australia', label: 'Dog Walkers & Pet Sitters', icon: '🐕' },
    ],
  },
];

export default function ProfessionGuidesHub() {
  const totalGuides = industryGroups.reduce((sum, g) => sum + g.professions.length, 0);
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://invoiceflow-teal.vercel.app';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Invoicing Guides by Profession — How to Invoice as a Freelancer in Australia',
    description: `${totalGuides} profession-specific invoicing guides for Australian freelancers. Covers pricing, templates, GST, and tax compliance for every profession.`,
    url: `${siteUrl}/blog/profession-guides`,
    inLanguage: 'en-AU',
    numberOfItems: totalGuides,
    isPartOf: { '@type': 'WebSite', name: 'InvoiceFlow', url: siteUrl },
  };

  return (
    <div className="min-h-screen page-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <h1 className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</h1>
          </Link>
          <div className="flex gap-4">
            <Link href="/blog">
              <Button variant="ghost">Blog</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started Free</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Hero */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            {totalGuides} Profession-Specific Guides
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            How to <span className="gradient-text">Invoice</span> by Profession
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Find your profession below. Each guide covers pricing models, invoice templates,
            GST rules, tax compliance, and tips for getting paid on time in Australia.
          </p>
        </div>

        {/* Quick Jump */}
        <div className="glass rounded-2xl p-6 mb-16">
          <p className="text-sm text-slate-400 mb-3 font-medium">Jump to industry:</p>
          <div className="flex flex-wrap gap-2">
            {industryGroups.map((group) => (
              <a
                key={group.name}
                href={`#${group.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="text-sm px-4 py-2 rounded-full glass text-slate-300 hover:text-white border border-white/5 hover:border-white/20 transition-all"
              >
                {group.name}
              </a>
            ))}
          </div>
        </div>

        {/* Industry Groups */}
        {industryGroups.map((group) => (
          <section
            key={group.name}
            id={group.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
            className="mb-16 scroll-mt-24"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white heading-font mb-2">
                <span className={`bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent`}>
                  {group.name}
                </span>
              </h3>
              <p className="text-slate-400">{group.description}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.professions.map((prof) => {
                const post = blogPosts[prof.slug];
                return (
                  <Link key={prof.slug} href={`/blog/${prof.slug}`} className="block group">
                    <div className="glass rounded-xl p-5 border border-white/5 hover:border-teal-400/20 transition-all h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{prof.icon}</span>
                        <h4 className="text-base font-semibold text-white group-hover:text-teal-400 transition-colors leading-snug">
                          {prof.label}
                        </h4>
                      </div>
                      {post && (
                        <p className="text-sm text-slate-400 line-clamp-2 flex-1">{post.excerpt}</p>
                      )}
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                        {post && <span className="text-xs text-slate-500">{post.readTime}</span>}
                        <span className="text-xs text-teal-400 group-hover:text-teal-300 transition-colors">
                          Read guide →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}

        {/* SEO Content */}
        <section className="glass rounded-3xl p-8 lg:p-12 mb-16">
          <h3 className="text-2xl font-bold text-white heading-font mb-6">
            Why Profession-Specific Invoicing Matters
          </h3>
          <div className="space-y-4 text-slate-300">
            <p>
              Every profession has unique invoicing requirements. A photographer billing for usage
              rights works completely differently from an electrician quoting materials pass-through
              costs, or a psychologist processing Medicare rebates.
            </p>
            <p>
              Generic invoicing advice misses the details that matter most: industry-specific pricing
              models, compliance requirements, tax treatments, and payment structures that clients in
              your field actually expect.
            </p>
            <p>
              Each of our {totalGuides} profession guides covers the specific billing practices,
              pricing benchmarks, GST rules, and invoice templates that apply to your work. Written
              for Australian freelancers and small business operators, with current 2026 tax rates
              and ATO requirements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text heading-font mb-1">{totalGuides}</div>
              <div className="text-sm text-slate-400">Profession Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text heading-font mb-1">6</div>
              <div className="text-sm text-slate-400">Industry Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text heading-font mb-1">2026</div>
              <div className="text-sm text-slate-400">Tax Rates & Rules</div>
            </div>
          </div>
        </section>

        {/* Essential Resources */}
        <section className="mb-16">
          <h3 className="text-xl font-bold text-white heading-font mb-6">Essential Resources for All Professions</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/blog/how-to-create-tax-invoice-australia" className="block group">
              <div className="glass rounded-xl p-5 border border-white/5 hover:border-teal-400/20 transition-all">
                <span className="text-xs text-teal-400 mb-2 block">Foundation Guide</span>
                <h4 className="text-base font-semibold text-white group-hover:text-teal-400 transition-colors">How to Create a Tax Invoice in Australia</h4>
                <p className="text-sm text-slate-400 mt-2">The ATO requirements every Australian invoice must meet.</p>
              </div>
            </Link>
            <Link href="/blog/gst-guide-australian-freelancers" className="block group">
              <div className="glass rounded-xl p-5 border border-white/5 hover:border-teal-400/20 transition-all">
                <span className="text-xs text-teal-400 mb-2 block">Tax Guide</span>
                <h4 className="text-base font-semibold text-white group-hover:text-teal-400 transition-colors">GST Guide for Australian Freelancers</h4>
                <p className="text-sm text-slate-400 mt-2">When to register, how to charge, and BAS reporting.</p>
              </div>
            </Link>
            <Link href="/blog/freelance-rates-australia" className="block group">
              <div className="glass rounded-xl p-5 border border-white/5 hover:border-teal-400/20 transition-all">
                <span className="text-xs text-teal-400 mb-2 block">Pricing Guide</span>
                <h4 className="text-base font-semibold text-white group-hover:text-teal-400 transition-colors">Freelance Rates in Australia (2026)</h4>
                <p className="text-sm text-slate-400 mt-2">Industry benchmarks and how to set your rates.</p>
              </div>
            </Link>
            <Link href="/blog/deposit-invoicing-milestone-payments-freelancer" className="block group">
              <div className="glass rounded-xl p-5 border border-white/5 hover:border-teal-400/20 transition-all">
                <span className="text-xs text-teal-400 mb-2 block">Payment Structure</span>
                <h4 className="text-base font-semibold text-white group-hover:text-teal-400 transition-colors">Deposits & Milestone Payments Guide</h4>
                <p className="text-sm text-slate-400 mt-2">How to structure payments to protect your cash flow.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Tools CTA */}
        <div className="glass rounded-3xl p-8 text-center mb-16">
          <h3 className="text-2xl font-bold text-white heading-font mb-3">Free Tools for Every Profession</h3>
          <p className="text-slate-400 mb-6">Use alongside your profession guide — no signup required</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/gst-calculator" className="text-sm text-teal-400 hover:text-teal-300 px-4 py-2 rounded-full glass">GST Calculator</Link>
            <Link href="/tools/invoice-generator" className="text-sm text-teal-400 hover:text-teal-300 px-4 py-2 rounded-full glass">Invoice Generator</Link>
            <Link href="/tools/rate-calculator" className="text-sm text-teal-400 hover:text-teal-300 px-4 py-2 rounded-full glass">Rate Calculator</Link>
            <Link href="/tools/abn-lookup" className="text-sm text-teal-400 hover:text-teal-300 px-4 py-2 rounded-full glass">ABN Lookup</Link>
          </div>
        </div>

        {/* Final CTA */}
        <div className="glass rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white heading-font mb-3">Start Invoicing Smarter</h3>
          <p className="text-slate-400 mb-6">AI-powered invoicing built for Australian freelancers. Free to start.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button size="lg">Get Started Free</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="secondary" size="lg">View Pricing</Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
          <span>&copy; 2026 InvoiceFlow. All rights reserved.</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <Link href="/compare" className="hover:text-white">Compare</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
