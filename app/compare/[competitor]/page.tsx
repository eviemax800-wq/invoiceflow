import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

interface CompetitorData {
  name: string;
  slug: string;
  tagline: string;
  minPrice: string;
  proPrice: string;
  freeInvoices: string;
  trustpilot: string;
  trustpilotReviews: string;
  trustpilotColor: string;
  aiFeatures: string;
  hiddenFees: string;
  painPoint: string;
  auCompliance: string;
  focus: string;
  founded: string;
  funding: string;
  headToHead: string;
  pricingDetails: { tier: string; price: string; note: string }[];
  redFlags: string[];
  invoiceflowWins: string[];
  switchReason: string;
  seoTitle: string;
  seoDescription: string;
}

const competitorData: Record<string, CompetitorData> = {
  quickbooks: {
    name: 'QuickBooks',
    slug: 'quickbooks',
    tagline: 'The $108B giant that charges you $20/mo for 2 invoices',
    minPrice: '$20/mo',
    proPrice: '$35/mo',
    freeInvoices: '2 (Solopreneur)',
    trustpilot: '1.1/5',
    trustpilotReviews: '1,151',
    trustpilotColor: 'text-red-400',
    aiFeatures: 'Intuit Assist (error-prone categorisation)',
    hiddenFees: 'None disclosed',
    painPoint: 'Prices up 40-88% since 2020. The Solopreneur plan caps you at just 2 invoices per month. Their Oct 2025 UI overhaul was universally hated by users.',
    auCompliance: 'Limited — US-first design',
    focus: 'Full accounting suite',
    founded: '1983 (Intuit)',
    funding: '$108B market cap (public)',
    headToHead: 'InvoiceFlow wins 8-2',
    pricingDetails: [
      { tier: 'Solopreneur', price: '$20/mo', note: 'Only 2 invoices — not usable for active freelancers' },
      { tier: 'Simple Start', price: '$35/mo', note: 'Basic invoicing + expenses' },
      { tier: 'Essentials', price: '$65/mo', note: 'Multi-currency, bill management' },
      { tier: 'Plus', price: '$99/mo', note: 'Inventory, project profitability' },
      { tier: 'Advanced', price: '$275/mo', note: 'Custom roles, batch invoicing' },
    ],
    redFlags: [
      'Trustpilot 1.1/5 — the lowest of any major invoicing tool (3.3-point gap vs curated review platforms)',
      'Prices increased 40-88% since 2020 with no warning',
      'Self-Employed plan discontinued — replaced with more expensive Solopreneur',
      'Oct 2025 UI overhaul universally hated — users lost workflows overnight',
      'Intuit Assist AI makes categorisation errors — accountants warn against auto-entry',
      'Solopreneur plan: $20/mo for just 2 invoices is absurd for freelancers',
    ],
    invoiceflowWins: [
      'Free tier with 5 invoices/mo (vs 2 on QuickBooks $20/mo plan)',
      'Pro at $19/mo — 46% cheaper than QuickBooks Simple Start',
      'Gemini AI extracts invoice data accurately — no error-prone auto-categorisation',
      'Built for invoicing, not bloated accounting you don\'t need',
      'Native GST + ABN compliance for Australian freelancers',
      'Modern Next.js stack — fast, responsive, actually pleasant to use',
      'No surprise price hikes — transparent pricing, always',
    ],
    switchReason: 'You shouldn\'t need accounting software to send an invoice. QuickBooks charges $20-275/mo for features freelancers never use. InvoiceFlow gives you AI-powered invoicing from $0.',
    seoTitle: 'InvoiceFlow vs QuickBooks 2026 | Better Alternative for Freelancers',
    seoDescription: 'QuickBooks charges $20/mo for 2 invoices with a 1.1/5 Trustpilot score. InvoiceFlow offers a free tier, AI-powered invoicing, and GST compliance from $0/mo.',
  },
  xero: {
    name: 'Xero',
    slug: 'xero',
    tagline: 'The $28B accounting giant that caps your invoices at 20',
    minPrice: '$35/mo',
    proPrice: '$75/mo',
    freeInvoices: '20 (capped on Ignite)',
    trustpilot: '3.8/5',
    trustpilotReviews: '10,500+',
    trustpilotColor: 'text-yellow-400',
    aiFeatures: 'JAX AI (accounting-focused, not invoicing)',
    hiddenFees: 'API pricing backlash (Mar 2026)',
    painPoint: 'Entry plan increased +169% since 2021. Ignite at $35/mo caps you at 20 invoices — send more and you\'re forced to $75/mo. JAX AI helps with accounting, not invoicing.',
    auCompliance: 'Yes — strong ANZ presence',
    focus: 'Full accounting suite',
    founded: '2006 (New Zealand)',
    funding: 'ASX:XRO — A$28B market cap',
    headToHead: 'InvoiceFlow wins 7-2',
    pricingDetails: [
      { tier: 'Ignite', price: '$35/mo', note: 'Capped at 20 invoices — forces upgrade for active freelancers' },
      { tier: 'Grow', price: '$75/mo', note: 'Unlimited invoicing + bills + projects' },
      { tier: 'Comprehensive', price: '$105/mo', note: 'Multi-currency, analytics, expenses' },
    ],
    redFlags: [
      'Entry plan price increased +169% since 2021 — was $13/mo, now $35/mo',
      '20-invoice cap on cheapest plan — hits limit fast if you invoice weekly',
      'API pricing changes (Mar 2026) causing developer backlash',
      'Forced payroll bundling in some regions',
      'No deposit invoicing feature — common freelancer need',
      'JAX AI is accounting-focused — won\'t help you create or manage invoices faster',
    ],
    invoiceflowWins: [
      'Free tier: 5 invoices/mo at $0 (vs $35/mo for Xero\'s cheapest)',
      'Unlimited invoices at $19/mo Pro (vs $75/mo on Xero Grow)',
      'AI-powered invoice creation — Gemini extracts data from emails and documents',
      'Built specifically for invoicing, not accounting bloat',
      'No invoice caps on any paid plan',
      'Native GST + ABN compliance (same as Xero)',
      '74% cheaper for unlimited invoicing ($19 vs $75)',
    ],
    switchReason: 'Xero is built for accountants, not freelancers. If you just need to send invoices and get paid, you\'re overpaying by 74% for features you\'ll never touch.',
    seoTitle: 'InvoiceFlow vs Xero 2026 | Cheaper Alternative for Freelancers',
    seoDescription: 'Xero caps invoices at 20 on their $35/mo plan and charges $75/mo for unlimited. InvoiceFlow offers unlimited invoicing from $19/mo with AI and GST compliance.',
  },
  freshbooks: {
    name: 'FreshBooks',
    slug: 'freshbooks',
    tagline: 'The $1B tool with $125M in debt and zero AI features',
    minPrice: '$24/mo',
    proPrice: '$44/mo',
    freeInvoices: '0',
    trustpilot: '3.4/5',
    trustpilotReviews: '800+',
    trustpilotColor: 'text-yellow-400',
    aiFeatures: 'None',
    hiddenFees: '70% promo → full price after trial',
    painPoint: 'No free tier at all. Lite plan caps at 5 clients. $125M in debt as of March 2025. Declining headcount. Zero native AI features while competitors race ahead.',
    auCompliance: 'Limited — US-focused',
    focus: 'Time tracking + invoicing',
    founded: '2003 (Toronto)',
    funding: '$1B+ valuation (private)',
    headToHead: 'InvoiceFlow wins 8-2',
    pricingDetails: [
      { tier: 'Lite', price: '$24/mo', note: '5 clients max — unusable for growing freelancers' },
      { tier: 'Plus', price: '$44/mo', note: '50 clients, proposals, bank reconciliation' },
      { tier: 'Premium', price: '$55/mo', note: '500 clients, project profitability' },
      { tier: 'Select', price: 'Custom', note: 'Custom pricing for larger teams' },
    ],
    redFlags: [
      'No free tier — not even a limited one',
      '5-client cap on Lite ($24/mo) — outgrow it in your first month',
      '70% promo pricing is a bait-and-switch — full price hits hard after trial',
      '$125M in debt (Mar 2025) — financial health is a concern',
      'Declining headcount — less investment in the product',
      'Zero native AI features — no automation, no extraction, nothing',
      '2026 price increase confirmed — costs are only going up',
    ],
    invoiceflowWins: [
      'Free tier with 5 invoices/mo (vs $0 free on FreshBooks)',
      'Unlimited clients on every plan (vs 5-client cap on Lite)',
      'Gemini AI extracts invoice data from emails and documents',
      'Pro at $19/mo — 21% cheaper than FreshBooks Lite with more features',
      'No bait-and-switch pricing — what you see is what you pay',
      'Modern tech stack (Next.js 14 + Supabase) — fast and reliable',
      'GST + ABN compliance built in',
    ],
    switchReason: 'FreshBooks charges $24/mo for 5 clients with no AI and no free tier. InvoiceFlow gives you unlimited clients, AI-powered invoicing, and starts at $0.',
    seoTitle: 'InvoiceFlow vs FreshBooks 2026 | Free Alternative for Freelancers',
    seoDescription: 'FreshBooks has no free tier, caps at 5 clients on Lite ($24/mo), and has zero AI features. InvoiceFlow offers a free tier, unlimited clients, and Gemini AI from $0.',
  },
  wave: {
    name: 'Wave',
    slug: 'wave',
    tagline: 'Free invoicing that holds your money for 7 months',
    minPrice: '$0 (free) / $19 (Pro)',
    proPrice: '$19/mo',
    freeInvoices: '0 on Pro',
    trustpilot: '1.2/5',
    trustpilotReviews: '1,000+',
    trustpilotColor: 'text-red-400',
    aiFeatures: 'None',
    hiddenFees: 'Payment holds up to $50K+ for 6-7 months',
    painPoint: 'Acquired by H&R Block for $405M in 2023. Users report payment holds of $50K+ lasting 6-7 months. Zero customer support for free users. 2025 payroll processing disaster.',
    auCompliance: 'US/CA focused',
    focus: 'Free accounting + paid payments',
    founded: '2010 (Toronto)',
    funding: 'Acquired by H&R Block ($405M, 2023)',
    headToHead: 'InvoiceFlow wins 8-2',
    pricingDetails: [
      { tier: 'Free', price: '$0/mo', note: 'Basic invoicing + accounting — but zero support' },
      { tier: 'Pro', price: '$19/mo', note: 'Receipt scanning, bank connections — no AI' },
      { tier: 'Payment processing', price: '2.9% + $0.60', note: 'Per transaction — and they may hold your funds' },
    ],
    redFlags: [
      'Trustpilot 1.2/5 — among the worst-rated financial software',
      'Payment holds: users report $50K+ held for 6-7 months with no recourse',
      'Account lockouts without warning — businesses lost access to their own data',
      '2025 payroll disaster — employees and contractors weren\'t paid on time',
      'Zero customer support for free users — you\'re on your own',
      'Acquired by H&R Block — corporate ownership means less innovation',
      'No AI features, no time tracking, no project management',
    ],
    invoiceflowWins: [
      'Free tier with no payment hold risk — your money is your money',
      'Same $19/mo Pro price but with Gemini AI and modern stack',
      'Stripe Direct payments — no middleman holding your funds for months',
      'Responsive support for all users, not just paid tiers',
      'AI-powered invoice extraction from emails and documents',
      'GST + ABN compliance for Australian freelancers',
      'Independent — not owned by a tax corporation with conflicting interests',
    ],
    switchReason: 'Wave\'s "free" comes at a cost — payment holds, zero support, and account lockouts. InvoiceFlow is free too, but your money goes straight to you via Stripe.',
    seoTitle: 'InvoiceFlow vs Wave 2026 | Safer Free Alternative for Freelancers',
    seoDescription: 'Wave has a 1.2/5 Trustpilot score with reports of $50K+ payment holds lasting months. InvoiceFlow offers free invoicing with Stripe Direct — no holds, no risk.',
  },
  bonsai: {
    name: 'Bonsai',
    slug: 'bonsai',
    tagline: 'Acquired by Zoom. Per-user pricing. No AI. +1% hidden fee.',
    minPrice: '$25/mo',
    proPrice: '$39/mo',
    freeInvoices: '0 (Basic has no invoicing)',
    trustpilot: '4.1/5',
    trustpilotReviews: '612',
    trustpilotColor: 'text-green-400',
    aiFeatures: 'None',
    hiddenFees: '+1% platform fee on all Stripe transactions (+1.35% Amex, +2.5% FX)',
    painPoint: 'Acquired by Zoom in November 2025. Basic $15/mo plan has NO invoicing — you need $25/mo minimum. Per-user pricing. Only 2 net-new features shipped in 5 years.',
    auCompliance: 'US-focused',
    focus: 'All-in-one freelancer platform',
    founded: '2016 (San Francisco)',
    funding: 'Y Combinator ($120K) → Acquired by Zoom (Dec 2025)',
    headToHead: 'InvoiceFlow wins 8-2',
    pricingDetails: [
      { tier: 'Basic', price: '$15/mo', note: 'NO invoicing included — proposals and contracts only' },
      { tier: 'Essentials', price: '$25/mo', note: 'Invoicing unlocked — minimum for freelancers who invoice' },
      { tier: 'Professional', price: '$39/mo', note: 'Subcontracting, workflow automation' },
      { tier: 'Per-user add-on', price: '+$10/user/mo', note: 'Each additional team member costs extra' },
    ],
    redFlags: [
      'Acquired by Zoom (Nov 2025) — product future is uncertain under corporate ownership',
      'Basic $15/mo plan has NO invoicing — misleading for freelancers',
      '+1% hidden platform fee on every Stripe transaction (+1.35% Amex, +2.5% FX)',
      '7-10 day initial payout delays when you start',
      'Only 2 net-new features shipped in the last 5 years — nearly abandoned',
      'Per-user pricing — scales poorly for growing teams',
      'Zero AI features despite users requesting them',
    ],
    invoiceflowWins: [
      'Free tier: 5 invoices/mo at $0 (vs $25/mo minimum for invoicing on Bonsai)',
      'No hidden fees — no +1% platform fee on your payments',
      'Gemini AI extracts invoice data automatically',
      'Independent product — not owned by Zoom or any corporation',
      'Faster payouts via Stripe Direct — no 7-10 day delays',
      'Active development — new features shipping regularly',
      'Pro at $19/mo — 24% cheaper than Bonsai Essentials',
    ],
    switchReason: 'Bonsai was acquired by Zoom and charges $25/mo minimum for invoicing plus a hidden +1% fee on every transaction. InvoiceFlow is independent, AI-powered, and starts free.',
    seoTitle: 'InvoiceFlow vs Bonsai 2026 | Independent Alternative for Freelancers',
    seoDescription: 'Bonsai was acquired by Zoom, charges $25/mo minimum for invoicing, and adds a hidden +1% fee on every Stripe transaction. InvoiceFlow starts free with AI and no hidden fees.',
  },
  myob: {
    name: 'MYOB',
    slug: 'myob',
    tagline: 'Australia\'s legacy accounting giant — $34/mo minimum, no AI, owned by private equity',
    minPrice: '$34/mo',
    proPrice: '$63/mo',
    freeInvoices: '0',
    trustpilot: '2.1/5',
    trustpilotReviews: '370+',
    trustpilotColor: 'text-red-400',
    aiFeatures: 'None',
    hiddenFees: 'Payroll unbundled Jul 2025 (+$2/employee/mo)',
    painPoint: 'Taken private by KKR for A$2B in 2019. Business Lite costs $34/mo — just for basic invoicing and expenses. Price increase confirmed for March 2026. Payroll stripped from Lite/Pro plans in July 2025 and charged separately. Support is notoriously slow with no cancel button on their website.',
    auCompliance: 'Yes — Australian-built',
    focus: 'Full accounting suite',
    founded: '1991 (Australia)',
    funding: 'KKR private equity (A$2B acquisition, 2019)',
    headToHead: 'InvoiceFlow wins 8-2',
    pricingDetails: [
      { tier: 'Payroll Only', price: '$9/mo', note: 'Payroll for up to 4 employees — no invoicing at all' },
      { tier: 'Business Lite', price: '$34/mo', note: 'Sole traders — invoicing + expenses, up to 2 employees' },
      { tier: 'Business Pro', price: '$63/mo', note: 'Small-medium business — multi-employee, job tracking' },
      { tier: 'AccountRight Plus', price: '$150/mo', note: 'Full desktop + cloud — inventory, multi-currency' },
      { tier: 'Payroll add-on', price: '+$2/employee/mo', note: 'Unbundled from Lite/Pro from July 2025' },
    ],
    redFlags: [
      'Trustpilot 2.1/5 rated "Poor" — customer support described as "appalling" and "disgusting"',
      'Owned by KKR private equity since 2019 — cost-cutting and price hikes follow PE acquisitions',
      'Price increase confirmed for March 2026 — costs keep rising',
      'Payroll unbundled from Lite/Pro in July 2025 — sneaky price increase via feature removal',
      'No cancel button on their website — users report extremely frustrating cancellation process',
      'Desktop-first legacy software transitioning to cloud — steep learning curve',
      'Zero AI features — no smart invoice creation, no data extraction, no automation',
    ],
    invoiceflowWins: [
      'Free tier: 5 invoices/mo at $0 (vs $34/mo minimum on MYOB)',
      'Pro at $19/mo — 44% cheaper than MYOB Business Lite',
      'Gemini AI extracts invoice data from emails and documents — zero manual entry',
      'Built for invoicing, not full accounting you don\'t need as a freelancer',
      'Modern web app — no desktop software, no steep learning curve',
      'Transparent pricing — no unbundled features, no surprise increases',
      'Easy to cancel — unlike MYOB\'s hidden cancellation process',
    ],
    switchReason: 'MYOB is built for accountants managing businesses, not freelancers sending invoices. At $34/mo minimum with no AI and a 2.1 Trustpilot score, you\'re overpaying for complexity you don\'t need.',
    seoTitle: 'InvoiceFlow vs MYOB 2026 | Modern Alternative for Australian Freelancers',
    seoDescription: 'MYOB costs $34/mo minimum with no AI, no free tier, and a 2.1/5 Trustpilot "Poor" rating. InvoiceFlow offers free AI-powered invoicing built for Australian freelancers.',
  },
  zoho: {
    name: 'Zoho Invoice',
    slug: 'zoho',
    tagline: 'Free invoicing — until you hit 500 invoices and get pushed to Zoho Books',
    minPrice: '$0 (free)',
    proPrice: '$10/mo (Zoho Books)',
    freeInvoices: '500/year (then $0)',
    trustpilot: '4.0/5',
    trustpilotReviews: '5,769',
    trustpilotColor: 'text-green-400',
    aiFeatures: 'None in Invoice (Zia AI in Books only)',
    hiddenFees: 'Forced migration to Zoho Books when you outgrow limits',
    painPoint: 'Zoho Invoice is free but capped at 500 invoices/year. Outgrow it and you\'re pushed to Zoho Books ($10-33/mo) — a completely different product. No AI in Invoice. Authentication issues reported monthly. Mobile app can\'t edit templates. Limited third-party integrations.',
    auCompliance: 'Basic GST support',
    focus: 'Invoicing (limited) → Zoho ecosystem upsell',
    founded: '1996 (Chennai, India)',
    funding: 'Private — Zoho Corporation ($1B+ revenue)',
    headToHead: 'InvoiceFlow wins 7-3',
    pricingDetails: [
      { tier: 'Zoho Invoice', price: 'Free', note: '500 invoices/year cap — forced to Zoho Books beyond that' },
      { tier: 'Zoho Books Standard', price: '$10/mo', note: 'When you outgrow Invoice — different product, different UI' },
      { tier: 'Zoho Books Professional', price: '$20/mo', note: 'Purchase orders, project billing' },
      { tier: 'Zoho Books Premium', price: '$33/mo', note: 'Custom domain, budgeting, vendor portal' },
    ],
    redFlags: [
      '500 invoices/year cap — forces migration to Zoho Books when you outgrow it',
      'Zoho Books is a completely different product with different UI and learning curve',
      'Authentication issues: users report monthly login problems with OneAuth',
      'Mobile app limitations — can\'t edit templates, limited item list management',
      'Very few third-party integrations — locked into Zoho ecosystem',
      'No AI features in Zoho Invoice — Zia AI only available in Zoho Books',
      'Cancellation and billing complaints on Trustpilot — "designed to frustrate customers"',
    ],
    invoiceflowWins: [
      'No invoice cap on Pro plan — unlimited invoicing at $19/mo, always',
      'One product, one experience — no forced migration to a different app',
      'Gemini AI extracts invoice data from emails and documents',
      'Works with any payment provider via Stripe — not locked into an ecosystem',
      'Modern Next.js stack — no authentication headaches or mobile limitations',
      'GST + ABN compliance built for Australian freelancers specifically',
      'Free tier with 5 invoices/mo — enough for getting started, upgrade when ready',
    ],
    switchReason: 'Zoho Invoice is free but caps you at 500/year, then pushes you to Zoho Books — a different product. InvoiceFlow grows with you: free tier, then $19/mo for unlimited. One product, no forced migrations.',
    seoTitle: 'InvoiceFlow vs Zoho Invoice 2026 | Better Free Alternative',
    seoDescription: 'Zoho Invoice caps at 500 invoices/year and pushes you to Zoho Books. InvoiceFlow offers unlimited AI-powered invoicing from $19/mo with GST compliance — no forced migration.',
  },
  honeybook: {
    name: 'HoneyBook',
    slug: 'honeybook',
    tagline: 'The $2.4B platform that hiked prices 89% in one year',
    minPrice: '$36/mo',
    proPrice: '$59/mo',
    freeInvoices: '0',
    trustpilot: '3.5/5',
    trustpilotReviews: '569',
    trustpilotColor: 'text-yellow-400',
    aiFeatures: 'CRM-focused AI (not invoicing)',
    hiddenFees: '2.9% + $0.25 per transaction (3.4% Amex)',
    painPoint: 'Massive 89% price hike in February 2025 — Starter went from $19 to $36/mo overnight. Bloated all-in-one CRM forces you to pay for contracts, scheduling, and features you don\'t need.',
    auCompliance: 'US + Canada only — no international support',
    focus: 'CRM + contracts + invoicing bundle',
    founded: '2013 (San Francisco)',
    funding: '$498M raised — $2.4B valuation (Nov 2021)',
    headToHead: 'InvoiceFlow wins 8-2',
    pricingDetails: [
      { tier: 'Starter', price: '$36/mo', note: 'Was $19/mo until Feb 2025 — 89% increase' },
      { tier: 'Essentials', price: '$59/mo', note: 'Was $39/mo — 51% increase' },
      { tier: 'Premium', price: '$129/mo', note: 'Was $79/mo — 63% increase' },
    ],
    redFlags: [
      '89% price hike in Feb 2025 — Starter from $19 to $36/mo with no new features',
      'Users actively fleeing the platform after the price increase',
      'Bloated all-in-one: CRM + contracts + scheduling + invoicing — forces payment for unwanted features',
      'Hidden transaction fees: 2.9% + $0.25 per transaction (3.4% Amex)',
      'US + Canada only — no support for international freelancers',
      'AI features are CRM-focused (lead scoring, follow-ups) — doesn\'t help with invoicing',
      '$498M in funding at $2.4B valuation — need to justify VC expectations with more price hikes',
    ],
    invoiceflowWins: [
      'Free tier at $0 (vs $36/mo minimum on HoneyBook)',
      'Pro at $19/mo — 47% cheaper than HoneyBook Starter',
      'Pay only for invoicing — no forced CRM, contracts, or scheduling bundle',
      'No transaction fees beyond standard Stripe rates',
      'AI-powered invoice creation and data extraction',
      'Global support with GST + ABN compliance (vs US/CA only)',
      'Stable pricing — no 89% surprise hikes',
    ],
    switchReason: 'HoneyBook hiked prices 89% and forces you to pay for a CRM, contracts, and scheduling you don\'t need. InvoiceFlow is invoicing-only, AI-powered, and 47% cheaper.',
    seoTitle: 'InvoiceFlow vs HoneyBook 2026 | Cheaper Alternative After Price Hike',
    seoDescription: 'HoneyBook hiked prices 89% in 2025. Their cheapest plan is now $36/mo for bloated CRM features. InvoiceFlow offers focused AI invoicing from $0/mo.',
  },
};

const allSlugs = Object.keys(competitorData);

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ competitor: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ competitor: string }> }): Promise<Metadata> {
  const { competitor: slug } = await params;
  const data = competitorData[slug];
  if (!data) return { title: 'Comparison Not Found' };

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    openGraph: {
      title: data.seoTitle,
      description: data.seoDescription,
    },
  };
}

export default async function CompetitorPage({ params }: { params: Promise<{ competitor: string }> }) {
  const { competitor: slug } = await params;
  const data = competitorData[slug];
  if (!data) notFound();

  const otherCompetitors = allSlugs.filter((s) => s !== slug);
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://invoiceflow-teal.vercel.app';
  const pageUrl = `${siteUrl}/compare/${slug}`;

  const comparisonJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: data.seoTitle,
    description: data.seoDescription,
    url: pageUrl,
    inLanguage: 'en-AU',
    isPartOf: { '@type': 'WebSite', name: 'InvoiceFlow', url: siteUrl },
    about: {
      '@type': 'SoftwareApplication',
      name: 'InvoiceFlow',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: [
        { '@type': 'Offer', price: '0', priceCurrency: 'AUD', name: 'Free' },
        { '@type': 'Offer', price: '19', priceCurrency: 'AUD', name: 'Pro' },
        { '@type': 'Offer', price: '39', priceCurrency: 'AUD', name: 'Premium' },
      ],
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: `${siteUrl}/compare` },
      { '@type': 'ListItem', position: 3, name: `InvoiceFlow vs ${data.name}`, item: pageUrl },
    ],
  };

  return (
    <div className="min-h-screen page-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <h1 className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</h1>
          </Link>
          <div className="flex gap-4">
            <Link href="/pricing">
              <Button variant="ghost">Pricing</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started Free</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <Link href="/compare" className="hover:text-white">Compare</Link>
          <span>/</span>
          <span className="text-slate-200">{data.name}</span>
        </div>

        {/* Hero */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Updated February 2026 — based on public pricing and real reviews
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            InvoiceFlow vs <span className="gradient-text">{data.name}</span>
          </h2>
          <p className="text-xl text-slate-300 mb-2">{data.tagline}</p>
          <p className="text-slate-400">{data.switchReason}</p>
        </div>

        {/* Quick Compare Strip */}
        <div className="grid grid-cols-2 gap-4 mb-16">
          <div className="glass rounded-2xl p-6 border border-teal-400/20 bg-teal-500/5">
            <div className="text-sm text-teal-400 font-medium mb-3">InvoiceFlow</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-300">Starts at</span><span className="text-white font-semibold">Free</span></div>
              <div className="flex justify-between"><span className="text-slate-300">Unlimited</span><span className="text-white font-semibold">$19/mo</span></div>
              <div className="flex justify-between"><span className="text-slate-300">AI</span><span className="text-emerald-400">Gemini AI</span></div>
              <div className="flex justify-between"><span className="text-slate-300">Hidden fees</span><span className="text-emerald-400">None</span></div>
              <div className="flex justify-between"><span className="text-slate-300">AU compliance</span><span className="text-emerald-400">GST + ABN</span></div>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 border border-red-500/10">
            <div className="text-sm text-slate-400 font-medium mb-3">{data.name}</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-300">Starts at</span><span className="text-white">{data.minPrice}</span></div>
              <div className="flex justify-between"><span className="text-slate-300">Full price</span><span className="text-white">{data.proPrice}</span></div>
              <div className="flex justify-between"><span className="text-slate-300">AI</span><span className="text-slate-400">{data.aiFeatures}</span></div>
              <div className="flex justify-between"><span className="text-slate-300">Hidden fees</span><span className="text-red-400 text-xs">{data.hiddenFees}</span></div>
              <div className="flex justify-between"><span className="text-slate-300">AU compliance</span><span className="text-slate-400">{data.auCompliance}</span></div>
            </div>
          </div>
        </div>

        {/* Trustpilot Reality */}
        <div className="glass rounded-2xl p-6 mb-16">
          <h3 className="text-xl font-bold text-white heading-font mb-4">What Real Users Say</h3>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className={`text-3xl font-bold ${data.trustpilotColor}`}>{data.trustpilot}</div>
              <div className="text-xs text-slate-400">Trustpilot ({data.trustpilotReviews} reviews)</div>
              <div className="text-xs text-slate-500 mt-1">{data.name}</div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="flex-1">
              <p className="text-sm text-slate-300">{data.painPoint}</p>
            </div>
          </div>
        </div>

        {/* Pricing Breakdown */}
        <div className="glass rounded-3xl p-6 lg:p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-2 heading-font">{data.name} Pricing Breakdown</h3>
          <p className="text-sm text-slate-400 mb-6">What you actually pay — not the promo price</p>
          <div className="space-y-3">
            {data.pricingDetails.map((tier) => (
              <div key={tier.tier} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-xl border border-white/5 hover:border-white/10">
                <div>
                  <span className="text-white font-medium">{tier.tier}</span>
                  <span className="text-slate-400 ml-2 text-sm">— {tier.note}</span>
                </div>
                <span className="text-slate-300 font-mono mt-1 sm:mt-0">{tier.price}</span>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-xl border border-teal-400/20 bg-teal-500/5">
              <div>
                <span className="text-teal-400 font-medium">InvoiceFlow Pro</span>
                <span className="text-slate-300 ml-2 text-sm">— Unlimited invoices, Gemini AI, GST compliance</span>
              </div>
              <span className="text-teal-400 font-mono font-bold mt-1 sm:mt-0">$19/mo</span>
            </div>
          </div>
        </div>

        {/* Red Flags */}
        <div className="glass rounded-2xl p-6 border border-red-500/20 bg-red-500/5 mb-16">
          <h3 className="text-xl font-bold text-white heading-font mb-4">
            {data.name} Red Flags
          </h3>
          <ul className="space-y-3">
            {data.redFlags.map((flag, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="text-red-400 mt-0.5 shrink-0">&#x26A0;</span>
                <span className="text-slate-300">{flag}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why InvoiceFlow Wins */}
        <div className="glass rounded-2xl p-6 border border-teal-400/20 bg-teal-500/5 mb-16">
          <h3 className="text-xl font-bold text-white heading-font mb-4">
            Why Freelancers Choose InvoiceFlow
          </h3>
          <ul className="space-y-3">
            {data.invoiceflowWins.map((win, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="text-emerald-400 mt-0.5 shrink-0">&#x2713;</span>
                <span className="text-slate-200">{win}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Head-to-Head Feature Table */}
        <div className="glass rounded-3xl p-6 lg:p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 heading-font">Feature Comparison</h3>
          <div className="space-y-0">
            {[
              { feature: 'Free tier', invoiceflow: '5 invoices/mo', competitor: data.freeInvoices, ifWin: true },
              { feature: 'Minimum price', invoiceflow: '$0/mo', competitor: data.minPrice, ifWin: true },
              { feature: 'Unlimited invoicing', invoiceflow: '$19/mo', competitor: data.proPrice, ifWin: true },
              { feature: 'AI features', invoiceflow: 'Gemini AI extraction', competitor: data.aiFeatures, ifWin: true },
              { feature: 'Hidden fees', invoiceflow: 'None', competitor: data.hiddenFees, ifWin: true },
              { feature: 'AU compliance', invoiceflow: 'GST + ABN', competitor: data.auCompliance, ifWin: data.auCompliance !== 'Yes — strong ANZ presence' },
              { feature: 'Focus', invoiceflow: 'Invoicing only', competitor: data.focus, ifWin: true },
              { feature: 'Trustpilot', invoiceflow: 'New (launching 2026)', competitor: `${data.trustpilot} (${data.trustpilotReviews})`, ifWin: false },
              { feature: 'Market presence', invoiceflow: 'New entrant', competitor: `Est. ${data.founded}`, ifWin: false },
            ].map((row) => (
              <div key={row.feature} className="grid grid-cols-3 border-b border-white/5 last:border-0">
                <div className="py-3 px-4 text-sm text-slate-400">{row.feature}</div>
                <div className={`py-3 px-4 text-sm font-medium ${row.ifWin ? 'text-emerald-400 bg-teal-500/5' : 'text-slate-300'}`}>
                  {row.invoiceflow}
                </div>
                <div className={`py-3 px-4 text-sm ${!row.ifWin ? 'text-slate-200' : 'text-slate-400'}`}>
                  {row.competitor}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <span className="text-sm text-slate-400">Head-to-head score: </span>
            <span className="text-sm text-teal-400 font-semibold">{data.headToHead}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="glass rounded-3xl p-10 text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-white heading-font mb-4">
            Ready to switch from {data.name}?
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            No credit card required. Start with 5 free invoices per month.
            Upgrade to Pro for $19/mo when you need unlimited.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button size="lg">Start Free</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="secondary" size="lg">See All Plans</Button>
            </Link>
          </div>
        </div>

        {/* Other Comparisons */}
        <div className="text-center">
          <h4 className="text-sm text-slate-400 mb-4">Compare InvoiceFlow with other tools</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCompetitors.map((s) => (
              <Link key={s} href={`/compare/${s}`} className="text-sm text-teal-400 hover:text-teal-300 px-3 py-1.5 rounded-full glass">
                vs {competitorData[s].name}
              </Link>
            ))}
            <Link href="/compare" className="text-sm text-slate-400 hover:text-white px-3 py-1.5 rounded-full glass">
              View all
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
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
