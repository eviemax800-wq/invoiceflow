import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

interface AlternativeData {
  name: string;
  slug: string;
  headline: string;
  subheadline: string;
  themeColor: string;
  gradientFrom: string;
  gradientTo: string;
  monthlyPrice: string;
  trustpilotScore: string;
  trustpilotColor: string;
  marketPosition: string;
  yearFounded: string;
  headquarters: string;
  topComplaints: { title: string; detail: string }[];
  switchReasons: { icon: string; title: string; detail: string }[];
  featureComparison: { feature: string; competitor: string; competitorBad: boolean; invoiceflow: string; invoiceflowGood: boolean }[];
  migrationSteps: { step: number; title: string; detail: string }[];
  targetKeywords: string[];
  seoTitle: string;
  seoDescription: string;
  faqItems: { question: string; answer: string }[];
}

const alternatives: Record<string, AlternativeData> = {
  xero: {
    name: 'Xero',
    slug: 'xero',
    headline: 'Looking for a Xero Alternative?',
    subheadline: 'Xero charges $35–$78/mo for invoicing buried inside accounting software. InvoiceFlow gives you AI-powered invoicing from $0.',
    themeColor: 'from-blue-500 to-cyan-500',
    gradientFrom: 'blue-500',
    gradientTo: 'cyan-500',
    monthlyPrice: '$35–$78/mo',
    trustpilotScore: '3.8/5',
    trustpilotColor: 'text-yellow-400',
    marketPosition: '#1 in Australia — 3.95M subscribers globally',
    yearFounded: '2006',
    headquarters: 'Wellington, NZ',
    topComplaints: [
      { title: 'Prices up 169% since 2021', detail: 'Xero Ignite (formerly Starter) jumped from $13 to $35/mo. The $35/mo plan caps you at 20 invoices — want unlimited? That\'s $78/mo on Grow.' },
      { title: 'Accounting bloat you don\'t need', detail: 'Xero is built for accountants, not freelancers. You get double-entry bookkeeping, bank reconciliation, and chart of accounts — but just want to send invoices.' },
      { title: 'JAX AI is accounting-focused', detail: 'Xero\'s AI assistant helps with categorisation and reconciliation. It doesn\'t help you create, send, or manage invoices faster.' },
      { title: 'API pricing backlash', detail: 'Xero\'s 2024 API pricing changes angered the developer community, threatening integrations that many businesses depend on.' },
    ],
    switchReasons: [
      { icon: '💰', title: 'Save $420–$936/year', detail: 'InvoiceFlow Pro costs $19/mo with unlimited invoices. That\'s $228/year vs Xero Grow at $78/mo ($936/year).' },
      { icon: '🤖', title: 'AI that actually helps with invoicing', detail: 'Gemini-powered data extraction, smart categorisation, and invoice templates — not accounting AI repackaged as invoicing.' },
      { icon: '🇦🇺', title: 'Built for Australian freelancers', detail: 'Native GST handling, ABN validation, ATO-compliant invoices, BAS-ready exports. Not a US product adapted for AU.' },
      { icon: '⚡', title: 'Simple by design', detail: 'No double-entry bookkeeping. No chart of accounts. No bank reconciliation. Just invoicing, done properly.' },
    ],
    featureComparison: [
      { feature: 'Starting price', competitor: '$35/mo', competitorBad: true, invoiceflow: '$0/mo (free tier)', invoiceflowGood: true },
      { feature: 'Unlimited invoices', competitor: '$78/mo (Grow)', competitorBad: true, invoiceflow: '$19/mo (Pro)', invoiceflowGood: true },
      { feature: 'AI invoice extraction', competitor: 'No (accounting AI only)', competitorBad: true, invoiceflow: 'Yes — Gemini-powered', invoiceflowGood: true },
      { feature: 'GST compliance', competitor: 'Yes', competitorBad: false, invoiceflow: 'Yes — native', invoiceflowGood: true },
      { feature: 'Free tools included', competitor: 'No', competitorBad: true, invoiceflow: '100+ free business tools', invoiceflowGood: true },
      { feature: 'Learning curve', competitor: 'Steep — built for accountants', competitorBad: true, invoiceflow: 'Minimal — built for freelancers', invoiceflowGood: true },
      { feature: 'Bank reconciliation', competitor: 'Yes', competitorBad: false, invoiceflow: 'Not needed for invoicing', invoiceflowGood: false },
      { feature: 'Payroll', competitor: 'Add-on ($13/mo+)', competitorBad: false, invoiceflow: 'Not included', invoiceflowGood: false },
    ],
    migrationSteps: [
      { step: 1, title: 'Export your data from Xero', detail: 'Go to Accounting → Reports → Account Transactions. Export as CSV. This gives you your complete invoice history.' },
      { step: 2, title: 'Sign up for InvoiceFlow free', detail: 'Create your account at invoiceflow-teal.vercel.app/signup. No credit card required. You get 5 invoices/month free, forever.' },
      { step: 3, title: 'Import your client list', detail: 'Upload your Xero contacts CSV or add clients manually. InvoiceFlow auto-fills ABN and GST details from your data.' },
      { step: 4, title: 'Start invoicing', detail: 'Create your first invoice in under 30 seconds. InvoiceFlow\'s AI pre-fills line items based on your service type and previous invoices.' },
    ],
    targetKeywords: ['xero alternative', 'xero alternative for freelancers', 'xero alternative australia', 'cheaper than xero', 'xero too expensive', 'simple invoicing without xero'],
    seoTitle: 'Best Xero Alternative for Freelancers (2026) — Save $420+/Year | InvoiceFlow',
    seoDescription: 'Tired of paying $35-78/mo for Xero when you just need invoicing? InvoiceFlow is the #1 Xero alternative for Australian freelancers. AI-powered, GST-compliant, from $0/mo.',
    faqItems: [
      { question: 'Is InvoiceFlow a full Xero replacement?', answer: 'InvoiceFlow replaces Xero\'s invoicing features at a fraction of the cost. If you need full accounting (bank reconciliation, payroll, BAS lodgement), you may still need accounting software. But if you primarily use Xero to send invoices and track payments — InvoiceFlow does everything you need from $0/mo, saving you $420–$936/year.' },
      { question: 'Can I import my Xero data into InvoiceFlow?', answer: 'Yes. Export your invoices and contacts from Xero as CSV files, then import them into InvoiceFlow. Your client details, payment history, and invoice records transfer seamlessly. Most users complete the migration in under 15 minutes.' },
      { question: 'Does InvoiceFlow handle GST like Xero?', answer: 'Yes. InvoiceFlow includes native GST calculation, ABN validation, and ATO-compliant invoice formatting. Every invoice includes the correct GST treatment (GST-free, GST-inclusive, or mixed) and exports are BAS-ready. Unlike Xero, you don\'t need to set up a chart of accounts to get GST right.' },
      { question: 'Why is InvoiceFlow so much cheaper than Xero?', answer: 'Xero bundles invoicing with full double-entry accounting, bank feeds, payroll, and reporting. You\'re paying for features most freelancers never use. InvoiceFlow focuses exclusively on invoicing and payment management — doing one thing exceptionally well at a fraction of the cost.' },
      { question: 'Can I use InvoiceFlow alongside Xero?', answer: 'Absolutely. Many freelancers use InvoiceFlow for day-to-day invoicing (faster, simpler, cheaper) while keeping Xero for end-of-year tax lodgement through their accountant. InvoiceFlow exports clean CSVs that your accountant can import directly into Xero or any accounting package.' },
    ],
  },
  quickbooks: {
    name: 'QuickBooks',
    slug: 'quickbooks',
    headline: 'Looking for a QuickBooks Alternative?',
    subheadline: 'QuickBooks has a 1.1/5 Trustpilot rating and charges $20/mo for just 2 invoices. There\'s a better way.',
    themeColor: 'from-green-500 to-emerald-500',
    gradientFrom: 'green-500',
    gradientTo: 'emerald-500',
    monthlyPrice: '$20–$275/mo',
    trustpilotScore: '1.1/5',
    trustpilotColor: 'text-red-400',
    marketPosition: 'Global #1 — $108B Intuit market cap',
    yearFounded: '1983',
    headquarters: 'Mountain View, USA',
    topComplaints: [
      { title: '1.1/5 on Trustpilot (1,151 reviews)', detail: 'The lowest Trustpilot score of any major invoicing tool. Users report billing issues, poor support, and accounts being locked without explanation.' },
      { title: '$20/mo for just 2 invoices', detail: 'The Solopreneur plan costs $20/mo but caps you at 2 invoices per month. For a freelancer sending 10+ invoices, you need Simple Start at $35/mo minimum.' },
      { title: 'Prices up 40-88% since 2020', detail: 'Intuit has aggressively raised prices across all tiers. The Self-Employed plan was discontinued entirely, forcing users to more expensive options.' },
      { title: 'Oct 2025 UI overhaul backlash', detail: 'QuickBooks forced a major interface redesign that users universally hated. Familiar workflows disappeared overnight with no option to revert.' },
    ],
    switchReasons: [
      { icon: '💰', title: 'Start free, stay free', detail: 'InvoiceFlow gives you 5 invoices/month free forever. QuickBooks charges $20/mo for 2. Do the maths.' },
      { icon: '⭐', title: 'Actually respected by users', detail: 'QuickBooks\' 1.1/5 Trustpilot tells you everything. InvoiceFlow is built by people who use it — not a $108B corporation optimising for shareholder returns.' },
      { icon: '🇦🇺', title: 'Australian-first design', detail: 'QuickBooks is a US product with AU bolted on. InvoiceFlow is built from scratch for Australian freelancers — ABN, GST, BAS, Super, all native.' },
      { icon: '🎯', title: 'No accounting bloat', detail: 'QuickBooks wants you to do your own bookkeeping. InvoiceFlow just wants you to get paid. Invoicing without the accounting degree.' },
    ],
    featureComparison: [
      { feature: 'Starting price', competitor: '$20/mo', competitorBad: true, invoiceflow: '$0/mo (free tier)', invoiceflowGood: true },
      { feature: 'Invoices on cheapest plan', competitor: '2/month', competitorBad: true, invoiceflow: '5/month (free)', invoiceflowGood: true },
      { feature: 'Unlimited invoices', competitor: '$35/mo (Simple Start)', competitorBad: true, invoiceflow: '$19/mo (Pro)', invoiceflowGood: true },
      { feature: 'Trustpilot score', competitor: '1.1/5 ★', competitorBad: true, invoiceflow: 'New — building trust', invoiceflowGood: false },
      { feature: 'AI features', competitor: 'Intuit Assist (error-prone)', competitorBad: true, invoiceflow: 'Gemini AI extraction', invoiceflowGood: true },
      { feature: 'GST compliance', competitor: 'Limited (US-first)', competitorBad: true, invoiceflow: 'Native Australian', invoiceflowGood: true },
      { feature: 'Free tools', competitor: 'None', competitorBad: true, invoiceflow: '100+ business tools', invoiceflowGood: true },
      { feature: 'Price stability', competitor: '40-88% increases', competitorBad: true, invoiceflow: 'Transparent pricing', invoiceflowGood: true },
    ],
    migrationSteps: [
      { step: 1, title: 'Export from QuickBooks', detail: 'Navigate to Reports → Custom Reports → Transaction Detail. Export as CSV or Excel. Include all invoice and customer data.' },
      { step: 2, title: 'Sign up free on InvoiceFlow', detail: 'Create your account — no credit card needed. The free tier gives you 5 invoices/month to test everything before committing.' },
      { step: 3, title: 'Set up your business profile', detail: 'Enter your ABN, business details, and payment terms. InvoiceFlow auto-configures GST settings for your business type.' },
      { step: 4, title: 'Send your first invoice', detail: 'Create a professional, ATO-compliant invoice in under 30 seconds. AI pre-fills details based on your service type.' },
    ],
    targetKeywords: ['quickbooks alternative', 'quickbooks alternative australia', 'quickbooks alternative for freelancers', 'better than quickbooks', 'quickbooks too expensive', 'quickbooks replacement free'],
    seoTitle: 'Best QuickBooks Alternative for Freelancers (2026) — From $0/Mo | InvoiceFlow',
    seoDescription: 'QuickBooks charges $20/mo for 2 invoices with a 1.1/5 Trustpilot score. Switch to InvoiceFlow — free tier, AI-powered, GST-compliant invoicing built for Australian freelancers.',
    faqItems: [
      { question: 'Why are people leaving QuickBooks?', answer: 'The top reasons freelancers leave QuickBooks are: (1) aggressive price increases of 40-88% since 2020, (2) the Solopreneur plan only allows 2 invoices for $20/mo, (3) the Oct 2025 UI overhaul that broke familiar workflows, and (4) a 1.1/5 Trustpilot rating reflecting persistent billing and support issues. Many freelancers realise they\'re paying for accounting features they never use.' },
      { question: 'Is InvoiceFlow really free?', answer: 'Yes. InvoiceFlow\'s free tier includes 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools — forever. No credit card required, no trial period. If you need unlimited invoices, Pro is $19/mo — still cheaper than QuickBooks\' cheapest usable plan.' },
      { question: 'Does InvoiceFlow work for Australian businesses?', answer: 'InvoiceFlow is built specifically for Australian freelancers and sole traders. It includes native ABN validation, GST calculation, ATO-compliant invoice formatting, BAS-ready exports, and superannuation tracking. Unlike QuickBooks (a US product adapted for Australia), every feature is designed for the Australian business environment.' },
      { question: 'Can I cancel QuickBooks after switching?', answer: 'Yes. We recommend running both for one month to ensure all your data is transferred. Export your QuickBooks data as CSV, import your clients into InvoiceFlow, and once you\'re comfortable, cancel your QuickBooks subscription. Most users complete the transition within a week.' },
      { question: 'What about QuickBooks integrations I use?', answer: 'InvoiceFlow exports clean CSV data that works with any accounting software, bank, or tax agent. If your accountant needs data in a specific format, our exports are compatible with Xero, MYOB, and standard accounting imports. For payment processing, InvoiceFlow integrates directly with Stripe.' },
    ],
  },
  myob: {
    name: 'MYOB',
    slug: 'myob',
    headline: 'Looking for a MYOB Alternative?',
    subheadline: 'MYOB charges $34–$65/mo, has no AI features, and a 2.1/5 Trustpilot. Australian freelancers deserve better.',
    themeColor: 'from-purple-500 to-violet-500',
    gradientFrom: 'purple-500',
    gradientTo: 'violet-500',
    monthlyPrice: '$34–$65/mo',
    trustpilotScore: '2.1/5',
    trustpilotColor: 'text-red-400',
    marketPosition: 'Australia\'s oldest accounting software — 1.2M businesses',
    yearFounded: '1991',
    headquarters: 'Melbourne, AU',
    topComplaints: [
      { title: '$34/mo minimum for basic invoicing', detail: 'MYOB Business Lite costs $34/mo just to send invoices. There\'s no free tier and no way to start small. Even simple invoicing requires the full platform.' },
      { title: 'Taken private by KKR — profit extraction', detail: 'KKR acquired MYOB for A$2B. Private equity ownership typically means price increases and cost-cutting, not product improvement. Mar 2026 price increase already confirmed.' },
      { title: '2.1/5 Trustpilot — support rated "Poor"', detail: 'MYOB\'s customer support is consistently rated poor. Long wait times, outsourced support, and unresolved billing issues dominate reviews.' },
      { title: 'No AI features whatsoever', detail: 'While competitors add AI for data extraction and categorisation, MYOB has no AI capabilities. Manual data entry in 2026 is inexcusable.' },
    ],
    switchReasons: [
      { icon: '💰', title: 'Save $408+/year instantly', detail: 'MYOB starts at $34/mo ($408/yr). InvoiceFlow starts at $0 and Pro is $19/mo ($228/yr) — saving you at least $180/year.' },
      { icon: '🤖', title: 'AI-powered vs manual entry', detail: 'InvoiceFlow uses Gemini AI to extract invoice data, auto-categorise expenses, and generate smart templates. MYOB offers zero AI.' },
      { icon: '🚀', title: 'Modern tech, not legacy software', detail: 'MYOB was built in 1991 and it shows. InvoiceFlow is a modern Next.js app — fast, responsive, and built for mobile-first freelancers.' },
      { icon: '🎯', title: 'Invoicing focus, not accounting sprawl', detail: 'MYOB forces you into their full accounting ecosystem. InvoiceFlow gives you professional invoicing without the overhead.' },
    ],
    featureComparison: [
      { feature: 'Starting price', competitor: '$34/mo', competitorBad: true, invoiceflow: '$0/mo (free tier)', invoiceflowGood: true },
      { feature: 'Free tier', competitor: 'None', competitorBad: true, invoiceflow: '5 invoices/mo free forever', invoiceflowGood: true },
      { feature: 'AI features', competitor: 'None', competitorBad: true, invoiceflow: 'Gemini AI extraction', invoiceflowGood: true },
      { feature: 'Mobile experience', competitor: 'Dated app, poor reviews', competitorBad: true, invoiceflow: 'Modern responsive web app', invoiceflowGood: true },
      { feature: 'Trustpilot score', competitor: '2.1/5', competitorBad: true, invoiceflow: 'New — building trust', invoiceflowGood: false },
      { feature: 'GST compliance', competitor: 'Yes — strong AU support', competitorBad: false, invoiceflow: 'Yes — native Australian', invoiceflowGood: true },
      { feature: 'Payroll', competitor: 'Add-on ($2/employee/mo)', competitorBad: false, invoiceflow: 'Not included', invoiceflowGood: false },
      { feature: 'Free tools', competitor: 'None', competitorBad: true, invoiceflow: '100+ business tools', invoiceflowGood: true },
    ],
    migrationSteps: [
      { step: 1, title: 'Export your MYOB data', detail: 'Go to File → Export Data → Invoices. Export as TAB or CSV. Also export your customer/contact list separately.' },
      { step: 2, title: 'Create your InvoiceFlow account', detail: 'Sign up free at invoiceflow-teal.vercel.app/signup. No credit card, no commitment. Test with 5 free invoices/month.' },
      { step: 3, title: 'Import clients and history', detail: 'Upload your MYOB client export. InvoiceFlow maps your contact data, ABNs, and payment terms automatically.' },
      { step: 4, title: 'Send your first AI-powered invoice', detail: 'Experience the difference — create a professional, GST-compliant invoice in 30 seconds with AI-assisted data entry.' },
    ],
    targetKeywords: ['myob alternative', 'myob alternative australia', 'myob alternative for small business', 'cheaper than myob', 'myob too expensive', 'myob replacement'],
    seoTitle: 'Best MYOB Alternative for Australian Freelancers (2026) — From $0/Mo | InvoiceFlow',
    seoDescription: 'MYOB charges $34/mo with no free tier, no AI, and a 2.1/5 Trustpilot. InvoiceFlow offers AI-powered invoicing, GST compliance, and 100+ free tools from $0/mo.',
    faqItems: [
      { question: 'Can InvoiceFlow replace MYOB for freelancers?', answer: 'For invoicing — absolutely. InvoiceFlow handles everything freelancers use MYOB for: creating professional invoices, tracking payments, GST compliance, ABN validation, and BAS-ready exports. If your accountant uses MYOB for year-end lodgement, InvoiceFlow exports clean CSV data that imports directly. You save $180-$552/year on software you don\'t fully need.' },
      { question: 'Is MYOB raising prices again?', answer: 'Yes. MYOB has confirmed price increases for March 2026, following multiple increases since KKR\'s acquisition. Under private equity ownership, price increases are expected to continue as KKR seeks returns on their A$2 billion investment. InvoiceFlow\'s pricing is transparent and stable — the free tier is free forever.' },
      { question: 'What about MYOB\'s Australian compliance features?', answer: 'InvoiceFlow matches MYOB\'s Australian compliance features for invoicing: GST calculation, ABN validation, ATO-compliant invoice formatting, and BAS-ready exports. MYOB\'s advantage is in full accounting compliance (payroll, STP, BAS lodgement) — but if you\'re using MYOB just for invoicing, you\'re overpaying for features you don\'t need.' },
      { question: 'How long does it take to switch from MYOB?', answer: 'Most freelancers complete the switch in under 30 minutes. Export your MYOB data as CSV, import your clients into InvoiceFlow, and you\'re ready to send invoices. We recommend running both for one billing cycle to ensure everything\'s transferred correctly before cancelling MYOB.' },
      { question: 'Does InvoiceFlow support Single Touch Payroll?', answer: 'No. InvoiceFlow is focused on invoicing, not payroll. If you need STP compliance, you\'ll need a separate payroll solution. However, most sole traders and freelancers don\'t need STP — it\'s required for employees, not contractors. InvoiceFlow handles everything else: invoices, quotes, payment tracking, GST, and BAS-ready exports.' },
    ],
  },
  freshbooks: {
    name: 'FreshBooks',
    slug: 'freshbooks',
    headline: 'Looking for a FreshBooks Alternative?',
    subheadline: 'FreshBooks charges $24/mo for 5 clients and isn\'t built for Australian businesses. Get invoicing that understands GST, ABN, and BAS.',
    themeColor: 'from-sky-500 to-blue-500',
    gradientFrom: 'sky-500',
    gradientTo: 'blue-500',
    monthlyPrice: '$24–$68/mo',
    trustpilotScore: '4.5/5',
    trustpilotColor: 'text-green-400',
    marketPosition: 'Popular globally — 30M+ users, Canadian-based',
    yearFounded: '2003',
    headquarters: 'Toronto, Canada',
    topComplaints: [
      { title: '5-client cap on Lite ($24/mo)', detail: 'FreshBooks Lite limits you to 5 billable clients. If you work with 6+ clients, you need Plus at $44/mo or Premium at $68/mo. The cost adds up fast.' },
      { title: 'Not built for Australia', detail: 'FreshBooks is Canadian software. While it supports AUD, its GST handling, tax settings, and default templates aren\'t optimised for Australian business requirements.' },
      { title: 'Limited free tier (30-day trial only)', detail: 'FreshBooks has no permanent free tier. After 30 days, you\'re locked out unless you pay. There\'s no way to test long-term before committing.' },
      { title: 'Per-client pricing penalises growth', detail: 'The more clients you get, the more FreshBooks charges. Growing your freelance business means paying more for software — not less per client.' },
    ],
    switchReasons: [
      { icon: '🇦🇺', title: 'Built for Australia, not adapted', detail: 'InvoiceFlow is built from the ground up for Australian freelancers. Native GST, ABN validation, ATO-compliant formats, BAS-ready exports — no Canadian workarounds.' },
      { icon: '💰', title: 'No client caps, ever', detail: 'InvoiceFlow Pro at $19/mo gives you unlimited invoices to unlimited clients. FreshBooks charges $44-68/mo for the same freedom.' },
      { icon: '🆓', title: 'Free tier — not a 30-day trial', detail: 'InvoiceFlow\'s free tier gives you 5 invoices/month forever. No credit card, no expiry, no "trial over" lockout.' },
      { icon: '🤖', title: 'AI that saves time', detail: 'Gemini-powered invoice extraction, smart categorisation, and auto-filled templates. FreshBooks\' automation is basic by comparison.' },
    ],
    featureComparison: [
      { feature: 'Starting price', competitor: '$24/mo (5 clients)', competitorBad: true, invoiceflow: '$0/mo (free tier)', invoiceflowGood: true },
      { feature: 'Unlimited clients', competitor: '$44/mo (Plus)', competitorBad: true, invoiceflow: '$19/mo (Pro)', invoiceflowGood: true },
      { feature: 'Free tier', competitor: '30-day trial only', competitorBad: true, invoiceflow: '5 invoices/mo forever', invoiceflowGood: true },
      { feature: 'Australian GST native', competitor: 'Adapted (Canadian origin)', competitorBad: true, invoiceflow: 'Built-in from day one', invoiceflowGood: true },
      { feature: 'AI features', competitor: 'Basic automation', competitorBad: false, invoiceflow: 'Gemini AI extraction', invoiceflowGood: true },
      { feature: 'Trustpilot score', competitor: '4.5/5', competitorBad: false, invoiceflow: 'New — building trust', invoiceflowGood: false },
      { feature: 'Time tracking', competitor: 'Built-in', competitorBad: false, invoiceflow: 'Coming soon', invoiceflowGood: false },
      { feature: 'Free tools', competitor: 'None', competitorBad: true, invoiceflow: '100+ business tools', invoiceflowGood: true },
    ],
    migrationSteps: [
      { step: 1, title: 'Export FreshBooks data', detail: 'Go to Reports → Invoice Details. Export as CSV. Also export your client list from Clients → Export.' },
      { step: 2, title: 'Sign up for InvoiceFlow', detail: 'Create your free account. No credit card, no 30-day timer. Test everything with 5 free invoices/month.' },
      { step: 3, title: 'Import your clients', detail: 'Upload your FreshBooks client CSV. InvoiceFlow maps names, emails, ABNs, and payment terms automatically.' },
      { step: 4, title: 'Create better invoices', detail: 'Experience Australian-native invoicing — proper GST handling, ABN validation, and ATO-compliant formatting from the start.' },
    ],
    targetKeywords: ['freshbooks alternative', 'freshbooks alternative australia', 'freshbooks alternative free', 'cheaper than freshbooks', 'freshbooks too expensive', 'freshbooks not australian'],
    seoTitle: 'Best FreshBooks Alternative for Australia (2026) — No Client Caps | InvoiceFlow',
    seoDescription: 'FreshBooks caps you at 5 clients for $24/mo and isn\'t built for Australian GST. InvoiceFlow offers unlimited clients, AI-powered invoicing, and native AU compliance from $0/mo.',
    faqItems: [
      { question: 'Is FreshBooks good for Australian freelancers?', answer: 'FreshBooks works but isn\'t ideal for Australia. It\'s Canadian software that\'s been adapted for international use. While it supports AUD and basic GST, its tax handling, default templates, and compliance features aren\'t built for Australian requirements. InvoiceFlow is purpose-built for Australian freelancers with native ABN validation, GST calculation, ATO-compliant formatting, and BAS-ready exports.' },
      { question: 'Why is InvoiceFlow cheaper than FreshBooks?', answer: 'FreshBooks uses per-client pricing that scales as you grow — $24/mo for 5 clients, $44/mo for 50, $68/mo for 500. InvoiceFlow uses simple tier pricing: free (5 invoices/mo), Pro $19/mo (unlimited), Premium $39/mo (advanced features). No client caps means your cost doesn\'t increase as your business grows.' },
      { question: 'What features does FreshBooks have that InvoiceFlow doesn\'t?', answer: 'FreshBooks has built-in time tracking, expense tracking with receipt scanning, project management, and a longer market presence with established reviews. InvoiceFlow focuses on AI-powered invoicing with Gemini integration, 100+ free business tools, and Australian-native compliance. If time tracking is essential, you may want to use a dedicated tool alongside InvoiceFlow.' },
      { question: 'Can I try InvoiceFlow before cancelling FreshBooks?', answer: 'Absolutely. InvoiceFlow\'s free tier has no expiry — use it alongside FreshBooks for as long as you need. Send a few invoices, test the GST handling, try the AI features. When you\'re confident, cancel FreshBooks and upgrade to InvoiceFlow Pro. No pressure, no 30-day countdown.' },
      { question: 'Does InvoiceFlow support time-based billing?', answer: 'InvoiceFlow supports manual time entry on invoices and hourly rate calculations. Dedicated time tracking with timers and project-based time logging is on the roadmap. For now, many freelancers pair InvoiceFlow with a free time tracker like Toggl or Clockify — getting best-in-class tools for both invoicing and time management.' },
    ],
  },
  wave: {
    name: 'Wave',
    slug: 'wave',
    headline: 'Looking for a Wave Alternative?',
    subheadline: 'Wave was free. Now it charges $16/mo and its AU support is limited. Get genuinely free invoicing built for Australia.',
    themeColor: 'from-indigo-500 to-purple-500',
    gradientFrom: 'indigo-500',
    gradientTo: 'purple-500',
    monthlyPrice: '$0–$16/mo',
    trustpilotScore: '3.8/5',
    trustpilotColor: 'text-yellow-400',
    marketPosition: 'Acquired by H&R Block — transitioning from free to paid',
    yearFounded: '2010',
    headquarters: 'Toronto, Canada',
    topComplaints: [
      { title: 'No longer truly free', detail: 'Wave launched as free accounting software but now charges $16/mo for core features. The "free" era is ending as H&R Block monetises the user base.' },
      { title: 'Limited Australian support', detail: 'Wave is Canadian software focused on North American businesses. Australian GST, ABN, and BAS requirements aren\'t natively supported.' },
      { title: 'Acquired by H&R Block', detail: 'H&R Block\'s acquisition signals a shift toward paid features and tax preparation upsells. The free model that attracted users is being dismantled.' },
      { title: 'Basic invoicing features', detail: 'Wave\'s invoicing is functional but basic. No AI, limited templates, and minimal automation compared to modern alternatives.' },
    ],
    switchReasons: [
      { icon: '🆓', title: 'Actually free — permanently', detail: 'InvoiceFlow\'s free tier is free forever. 5 invoices/month, no credit card, no bait-and-switch to paid tiers.' },
      { icon: '🇦🇺', title: 'Built for Australia', detail: 'Wave struggles with AU compliance. InvoiceFlow is built from the ground up with GST, ABN, ATO formatting, and BAS exports.' },
      { icon: '🤖', title: 'AI-powered, not manual', detail: 'Gemini AI extracts invoice data, auto-categorises, and generates smart templates. Wave\'s manual approach is a relic.' },
      { icon: '🔧', title: '100+ free business tools', detail: 'Beyond invoicing, InvoiceFlow includes GST calculators, contract generators, rate calculators, and 97 other free tools.' },
    ],
    featureComparison: [
      { feature: 'Free invoicing', competitor: 'Transitioning to paid ($16/mo)', competitorBad: true, invoiceflow: 'Free forever (5/mo)', invoiceflowGood: true },
      { feature: 'Australian GST', competitor: 'Limited support', competitorBad: true, invoiceflow: 'Native — built for AU', invoiceflowGood: true },
      { feature: 'AI features', competitor: 'None', competitorBad: true, invoiceflow: 'Gemini AI extraction', invoiceflowGood: true },
      { feature: 'ABN validation', competitor: 'Manual entry', competitorBad: true, invoiceflow: 'Auto-validation', invoiceflowGood: true },
      { feature: 'Free tools', competitor: 'None', competitorBad: true, invoiceflow: '100+ business tools', invoiceflowGood: true },
      { feature: 'Accounting features', competitor: 'Full double-entry', competitorBad: false, invoiceflow: 'Invoice-focused', invoiceflowGood: false },
      { feature: 'Payment processing', competitor: 'Built-in (2.9% + $0.60)', competitorBad: false, invoiceflow: 'Stripe integration', invoiceflowGood: true },
      { feature: 'Receipt scanning', competitor: 'Yes ($16/mo)', competitorBad: false, invoiceflow: 'AI extraction', invoiceflowGood: true },
    ],
    migrationSteps: [
      { step: 1, title: 'Export Wave data', detail: 'Go to Reports → Invoices. Export as CSV. Also export your customer list from Sales → Customers.' },
      { step: 2, title: 'Sign up for InvoiceFlow', detail: 'Create your free account — no credit card, no expiry. Unlike Wave, this free tier stays free.' },
      { step: 3, title: 'Set up Australian compliance', detail: 'Enter your ABN and business details. InvoiceFlow auto-configures GST settings and ATO-compliant invoice templates — something Wave never properly supported.' },
      { step: 4, title: 'Experience the difference', detail: 'Send your first AI-powered invoice. Gemini AI pre-fills details and ensures GST compliance on every invoice.' },
    ],
    targetKeywords: ['wave alternative', 'wave alternative australia', 'wave invoicing alternative free', 'wave accounting replacement', 'wave no longer free', 'free invoicing software australia'],
    seoTitle: 'Best Wave Alternative for Australia (2026) — Actually Free | InvoiceFlow',
    seoDescription: 'Wave is no longer truly free and lacks Australian support. InvoiceFlow offers genuinely free invoicing with native GST, ABN validation, and AI — built for Australian freelancers.',
    faqItems: [
      { question: 'Is Wave still free?', answer: 'Wave is transitioning away from its free model since being acquired by H&R Block. Core features like receipt scanning now cost $16/mo, and more features are expected to move behind paywalls. InvoiceFlow\'s free tier (5 invoices/month) is genuinely permanent — no acquisition-driven bait and switch.' },
      { question: 'Does Wave work for Australian businesses?', answer: 'Wave works but isn\'t designed for Australia. It\'s Canadian software focused on North American tax requirements. Australian users report issues with GST handling, ABN formatting, and BAS-compatible exports. InvoiceFlow is purpose-built for Australian freelancers with native compliance features.' },
      { question: 'What\'s better than Wave for free invoicing?', answer: 'InvoiceFlow offers a genuinely free tier with 5 invoices/month, native Australian GST compliance, AI-powered data extraction, and 100+ free business tools. Unlike Wave, it\'s designed for Australian freelancers from day one, with no risk of features moving behind paywalls.' },
      { question: 'Can I import my Wave data?', answer: 'Yes. Export your Wave invoices and customer data as CSV files, then import them into InvoiceFlow. The process takes about 15 minutes. InvoiceFlow maps your client details and invoice history automatically.' },
      { question: 'Is InvoiceFlow as full-featured as Wave?', answer: 'For invoicing — InvoiceFlow is more capable (AI extraction, Australian compliance, 100+ tools). Wave has fuller accounting features (double-entry bookkeeping, bank connections). If you need full accounting, consider pairing InvoiceFlow with a dedicated accounting tool. Most freelancers find InvoiceFlow + a good accountant is more effective than DIY accounting on Wave.' },
    ],
  },
  honeybook: {
    name: 'HoneyBook',
    slug: 'honeybook',
    headline: 'Looking for a HoneyBook Alternative?',
    subheadline: 'HoneyBook charges $19–$79/mo for CRM features you might not need. Get focused invoicing without the project management overhead.',
    themeColor: 'from-rose-500 to-pink-500',
    gradientFrom: 'rose-500',
    gradientTo: 'pink-500',
    monthlyPrice: '$19–$79/mo',
    trustpilotScore: '4.1/5',
    trustpilotColor: 'text-green-400',
    marketPosition: 'Creative-focused CRM — popular with US wedding/event industry',
    yearFounded: '2013',
    headquarters: 'San Francisco, USA',
    topComplaints: [
      { title: 'US-centric, limited AU support', detail: 'HoneyBook is designed for US creative businesses. Australian tax requirements, payment methods, and compliance features are afterthoughts.' },
      { title: 'CRM bundled with invoicing', detail: 'You pay for project management, proposals, contracts, scheduling, and CRM — even if you just want to send invoices. It\'s powerful but overkill for many freelancers.' },
      { title: '$19/mo for just 1 active project', detail: 'HoneyBook Starter limits you to 1 active project. For freelancers juggling multiple clients, you need Essentials at $39/mo or Premium at $79/mo.' },
      { title: 'Complex for simple invoicing', detail: 'HoneyBook\'s workflow-based approach means invoicing requires setting up projects, pipelines, and templates. Overkill when you just need to send an invoice.' },
    ],
    switchReasons: [
      { icon: '🎯', title: 'Invoicing without the overhead', detail: 'Send a professional invoice in 30 seconds. No project setup, no pipeline configuration, no CRM workflow to navigate first.' },
      { icon: '🇦🇺', title: 'Australian-native compliance', detail: 'GST, ABN, BAS-ready exports, ATO-compliant formatting. HoneyBook can\'t match Australian-specific tax compliance.' },
      { icon: '💰', title: 'Start free, scale affordably', detail: 'InvoiceFlow starts at $0 with no project limits. Pro at $19/mo gives unlimited invoices — HoneyBook charges $39/mo for similar freedom.' },
      { icon: '🤖', title: 'AI-powered efficiency', detail: 'Gemini AI extracts invoice data and auto-fills templates. HoneyBook\'s automation is CRM-focused, not invoicing-optimised.' },
    ],
    featureComparison: [
      { feature: 'Starting price', competitor: '$19/mo (1 project)', competitorBad: true, invoiceflow: '$0/mo (free tier)', invoiceflowGood: true },
      { feature: 'Unlimited projects/clients', competitor: '$39/mo (Essentials)', competitorBad: true, invoiceflow: '$19/mo (Pro)', invoiceflowGood: true },
      { feature: 'Australian GST', competitor: 'Limited (US-first)', competitorBad: true, invoiceflow: 'Native — built for AU', invoiceflowGood: true },
      { feature: 'Time to send invoice', competitor: 'Minutes (project setup)', competitorBad: true, invoiceflow: '30 seconds', invoiceflowGood: true },
      { feature: 'CRM features', competitor: 'Full CRM + pipeline', competitorBad: false, invoiceflow: 'Invoice-focused', invoiceflowGood: false },
      { feature: 'Proposals & contracts', competitor: 'Built-in', competitorBad: false, invoiceflow: 'Free generators (100+ tools)', invoiceflowGood: true },
      { feature: 'Free tools', competitor: 'None', competitorBad: true, invoiceflow: '100+ business tools', invoiceflowGood: true },
      { feature: 'AI features', competitor: 'Basic automation', competitorBad: false, invoiceflow: 'Gemini AI extraction', invoiceflowGood: true },
    ],
    migrationSteps: [
      { step: 1, title: 'Export HoneyBook data', detail: 'Go to Reports → Payments. Export your invoice and payment history. Also export your contact list from the Contacts section.' },
      { step: 2, title: 'Sign up for InvoiceFlow', detail: 'Create your free account. No credit card, no project limits. Test with 5 invoices/month before deciding.' },
      { step: 3, title: 'Import your clients', detail: 'Add your client details manually or via CSV import. InvoiceFlow sets up ABN and GST details for each client automatically.' },
      { step: 4, title: 'Simplify your workflow', detail: 'Send invoices directly without project setup. Experience how fast invoicing can be when it\'s not buried inside a CRM.' },
    ],
    targetKeywords: ['honeybook alternative', 'honeybook alternative australia', 'honeybook alternative cheaper', 'simpler than honeybook', 'honeybook vs invoiceflow'],
    seoTitle: 'Best HoneyBook Alternative for Australia (2026) — Simpler & Cheaper | InvoiceFlow',
    seoDescription: 'HoneyBook charges $19-79/mo for CRM features you might not need. InvoiceFlow offers focused invoicing with native AU compliance, AI-powered automation, from $0/mo.',
    faqItems: [
      { question: 'Is HoneyBook good for Australian freelancers?', answer: 'HoneyBook is excellent for US-based creative businesses who need an all-in-one CRM. For Australian freelancers, it has limitations: GST handling isn\'t native, ABN formatting requires workarounds, and many features (US tax forms, US payment processing) aren\'t relevant. If you primarily need invoicing with proper AU compliance, InvoiceFlow is a better fit.' },
      { question: 'What does HoneyBook do that InvoiceFlow doesn\'t?', answer: 'HoneyBook includes full CRM features: project pipelines, proposals, contracts, scheduling, client portals, and workflow automation. InvoiceFlow focuses on invoicing with 100+ free business tools (including contract and proposal generators). If you need a full CRM, HoneyBook may be worth the premium. If invoicing is your primary need, InvoiceFlow is simpler and more affordable.' },
      { question: 'Can I use InvoiceFlow for creative businesses?', answer: 'Absolutely. InvoiceFlow supports deposit invoicing, milestone payments, and usage rights — perfect for photographers, designers, event planners, and other creatives. It includes 25+ industry-specific landing pages with tailored features for creative professions. Plus, 100+ free tools include contract generators, proposal builders, and project brief templates.' },
      { question: 'Is $19/mo for InvoiceFlow Pro worth it vs HoneyBook?', answer: 'InvoiceFlow Pro at $19/mo gives you unlimited invoices, unlimited clients, AI extraction, and full AU compliance. HoneyBook\'s cheapest comparable plan (Essentials) costs $39/mo. If invoicing is your primary use case, InvoiceFlow saves you $240/year while offering better Australian-specific features.' },
      { question: 'Does InvoiceFlow support online payments?', answer: 'Yes. InvoiceFlow integrates with Stripe for online payment processing, letting clients pay invoices directly. You get professional payment links on every invoice with multiple payment methods supported.' },
    ],
  },
  bonsai: {
    name: 'Bonsai',
    slug: 'bonsai',
    headline: 'Looking for a Bonsai Alternative?',
    subheadline: 'Bonsai charges $25–$79/mo for an all-in-one platform you might not fully use. Get invoicing that just works — from $0.',
    themeColor: 'from-emerald-500 to-teal-500',
    gradientFrom: 'emerald-500',
    gradientTo: 'teal-500',
    monthlyPrice: '$25–$79/mo',
    trustpilotScore: '3.4/5',
    trustpilotColor: 'text-yellow-400',
    marketPosition: 'All-in-one freelance platform — contracts, proposals, invoicing, accounting',
    yearFounded: '2015',
    headquarters: 'San Francisco, USA',
    topComplaints: [
      { title: '$25/mo minimum — no free tier', detail: 'Bonsai has no free plan. The Starter tier costs $25/mo and limits you to basic invoicing. For proposals and contracts, you need Professional at $39/mo.' },
      { title: 'US-focused, AU compliance gaps', detail: 'Bonsai is built for US freelancers. Australian GST, ABN, and ATO-specific requirements aren\'t natively supported. Templates use US tax terminology.' },
      { title: 'Bundled features increase cost', detail: 'Bonsai bundles contracts, proposals, time tracking, accounting, and banking. You pay for everything even if you only need invoicing.' },
      { title: 'Banking features — US only', detail: 'Bonsai Cash (banking) and tax preparation features only work in the US. Australian users pay the same price but get fewer features.' },
    ],
    switchReasons: [
      { icon: '🆓', title: 'Start free, not at $25/mo', detail: 'InvoiceFlow offers 5 free invoices/month forever. Bonsai\'s cheapest plan is $25/mo with limited features.' },
      { icon: '🇦🇺', title: 'Built for Australian freelancers', detail: 'Native GST, ABN validation, BAS exports, ATO-compliant formatting. Not a US platform with Australian patches.' },
      { icon: '🔧', title: '100+ free tools included', detail: 'Contract generators, proposal builders, rate calculators — all free. Bonsai charges $39/mo for similar contract and proposal features.' },
      { icon: '🤖', title: 'AI-powered invoicing', detail: 'Gemini AI extraction, smart categorisation, and auto-filled templates. Bonsai has basic templates with no AI assistance.' },
    ],
    featureComparison: [
      { feature: 'Starting price', competitor: '$25/mo', competitorBad: true, invoiceflow: '$0/mo (free tier)', invoiceflowGood: true },
      { feature: 'Contracts included', competitor: '$39/mo (Professional)', competitorBad: true, invoiceflow: 'Free contract generator tool', invoiceflowGood: true },
      { feature: 'Australian GST', competitor: 'Limited (US-first)', competitorBad: true, invoiceflow: 'Native — built for AU', invoiceflowGood: true },
      { feature: 'AI features', competitor: 'Basic templates', competitorBad: true, invoiceflow: 'Gemini AI extraction', invoiceflowGood: true },
      { feature: 'Free tools', competitor: 'None (paid add-ons)', competitorBad: true, invoiceflow: '100+ business tools', invoiceflowGood: true },
      { feature: 'Time tracking', competitor: 'Built-in', competitorBad: false, invoiceflow: 'Coming soon', invoiceflowGood: false },
      { feature: 'Accounting', competitor: 'Built-in (US only)', competitorBad: false, invoiceflow: 'Invoice-focused + CSV export', invoiceflowGood: false },
      { feature: 'Banking', competitor: 'Bonsai Cash (US only)', competitorBad: false, invoiceflow: 'Stripe integration', invoiceflowGood: false },
    ],
    migrationSteps: [
      { step: 1, title: 'Export your Bonsai data', detail: 'Go to Accounting → Invoices. Export your invoice history as CSV. Also export clients from the Clients section.' },
      { step: 2, title: 'Sign up for InvoiceFlow', detail: 'Create your free account — no credit card needed. Test with 5 invoices/month on the free tier.' },
      { step: 3, title: 'Set up Australian compliance', detail: 'Enter your ABN and business details. InvoiceFlow auto-configures GST and generates ATO-compliant templates.' },
      { step: 4, title: 'Use free tools for contracts & proposals', detail: 'InvoiceFlow\'s 100+ free tools include contract generators, proposal builders, and NDA generators — features Bonsai charges $39/mo for.' },
    ],
    targetKeywords: ['bonsai alternative', 'bonsai alternative australia', 'bonsai alternative free', 'cheaper than bonsai', 'bonsai freelance alternative'],
    seoTitle: 'Best Bonsai Alternative for Australian Freelancers (2026) — From $0/Mo | InvoiceFlow',
    seoDescription: 'Bonsai charges $25-79/mo with limited Australian support. InvoiceFlow offers free invoicing, AI-powered automation, and 100+ free tools including contract generators — from $0/mo.',
    faqItems: [
      { question: 'What makes InvoiceFlow better than Bonsai for Australians?', answer: 'InvoiceFlow is built specifically for Australian freelancers with native GST calculation, ABN validation, ATO-compliant invoice formatting, and BAS-ready exports. Bonsai is designed for US freelancers — its banking, tax, and compliance features don\'t fully translate to Australia. Plus, InvoiceFlow starts free and includes 100+ business tools that Bonsai charges $39+/mo for.' },
      { question: 'Does InvoiceFlow have contracts like Bonsai?', answer: 'InvoiceFlow includes a free contract generator tool that creates professional service agreements, NDAs, and subcontractor agreements compliant with Australian law. While Bonsai\'s contracts are integrated into their workflow, InvoiceFlow\'s free tools cover the same ground without the $39/mo Professional tier price tag.' },
      { question: 'Is Bonsai worth $25/mo?', answer: 'If you\'re a US-based freelancer who uses every feature (contracts, proposals, invoicing, time tracking, accounting, banking), Bonsai offers good value. For Australian freelancers who primarily need invoicing, you\'re paying for features that either don\'t work in Australia (banking, tax prep) or that InvoiceFlow offers for free (contracts, proposals, calculators).' },
      { question: 'Can I replicate Bonsai\'s workflow in InvoiceFlow?', answer: 'For invoicing — InvoiceFlow is faster and more capable with AI-powered features. For contracts and proposals, use InvoiceFlow\'s free generator tools. For time tracking, pair InvoiceFlow with a free tool like Toggl. The combined cost ($0-$19/mo) is still less than Bonsai\'s Starter tier ($25/mo).' },
      { question: 'Does InvoiceFlow support proposals?', answer: 'InvoiceFlow includes free proposal builder and project brief generator tools. While they\'re not integrated into the invoicing workflow like Bonsai, they generate professional documents you can customise and send. For most freelancers, this covers 90% of proposal needs without a monthly subscription.' },
    ],
  },
  zoho: {
    name: 'Zoho Invoice',
    slug: 'zoho',
    headline: 'Looking for a Zoho Invoice Alternative?',
    subheadline: 'Zoho is free but locks you into their ecosystem. Get independent invoicing with AI and 100+ free tools — no vendor lock-in.',
    themeColor: 'from-amber-500 to-orange-500',
    gradientFrom: 'amber-500',
    gradientTo: 'orange-500',
    monthlyPrice: 'Free (with Zoho ecosystem lock-in)',
    trustpilotScore: '4.3/5',
    trustpilotColor: 'text-green-400',
    marketPosition: 'Part of Zoho ecosystem — 80M+ users across all products',
    yearFounded: '1996',
    headquarters: 'Chennai, India',
    topComplaints: [
      { title: 'Ecosystem lock-in strategy', detail: 'Zoho Invoice is free to pull you into the broader Zoho ecosystem — Zoho Books ($15-$50/mo), Zoho CRM ($14-$52/mo), Zoho Expense ($3-$8/user). The "free" invoicing becomes the gateway drug.' },
      { title: 'Limited standalone functionality', detail: 'Zoho Invoice works best with other Zoho products. Standalone users miss integrations, automation, and features that require Zoho Books or Zoho CRM.' },
      { title: 'Indian-first, AU second', detail: 'Zoho is built for the Indian market first, then adapted internationally. Australian GST, ABN, and ATO requirements aren\'t the primary focus.' },
      { title: 'Overwhelming interface', detail: 'Zoho\'s interface tries to do everything. For freelancers who just need simple invoicing, navigating the feature maze is unnecessarily complex.' },
    ],
    switchReasons: [
      { icon: '🔓', title: 'No vendor lock-in', detail: 'InvoiceFlow works independently. Export to CSV, PDF, or any format. No ecosystem to get trapped in, no upsells to "Zoho Books".' },
      { icon: '🇦🇺', title: 'Australian-first design', detail: 'Built from scratch for AU freelancers. Native GST, ABN, BAS exports. Not adapted from an Indian/global template.' },
      { icon: '🤖', title: 'Gemini AI — not basic automation', detail: 'InvoiceFlow uses Google\'s Gemini AI for intelligent data extraction and categorisation. Zoho\'s automation is rule-based and manual.' },
      { icon: '🎯', title: 'Simple and focused', detail: 'No feature maze. No 47 Zoho product upsells. Just professional invoicing that Australian freelancers actually need.' },
    ],
    featureComparison: [
      { feature: 'Price', competitor: 'Free (ecosystem lock-in)', competitorBad: true, invoiceflow: 'Free (independent)', invoiceflowGood: true },
      { feature: 'Ecosystem dependency', competitor: 'High — best with Zoho suite', competitorBad: true, invoiceflow: 'None — fully standalone', invoiceflowGood: true },
      { feature: 'Australian GST', competitor: 'Adapted (Indian origin)', competitorBad: true, invoiceflow: 'Native — built for AU', invoiceflowGood: true },
      { feature: 'AI features', competitor: 'Rule-based automation', competitorBad: true, invoiceflow: 'Gemini AI extraction', invoiceflowGood: true },
      { feature: 'Free tools', competitor: 'None (use Zoho apps)', competitorBad: true, invoiceflow: '100+ business tools', invoiceflowGood: true },
      { feature: 'Multi-currency', competitor: 'Yes', competitorBad: false, invoiceflow: 'Yes', invoiceflowGood: true },
      { feature: 'Client portal', competitor: 'Yes (with Zoho Books)', competitorBad: false, invoiceflow: 'Coming soon', invoiceflowGood: false },
      { feature: 'Expense tracking', competitor: 'Zoho Expense ($3/user)', competitorBad: false, invoiceflow: 'CSV export for tracking', invoiceflowGood: false },
    ],
    migrationSteps: [
      { step: 1, title: 'Export from Zoho Invoice', detail: 'Go to Invoices → Menu → Export Invoices. Export as CSV. Also export contacts from Contacts → Export.' },
      { step: 2, title: 'Sign up for InvoiceFlow', detail: 'Create your free account — no ecosystem to join, no Zoho ID required. Just email and you\'re in.' },
      { step: 3, title: 'Import your data', detail: 'Upload your Zoho CSV exports. InvoiceFlow maps client details, ABNs, and payment terms automatically.' },
      { step: 4, title: 'Experience freedom', detail: 'Send invoices without ecosystem pressure. No "upgrade to Zoho Books" prompts. No "try Zoho CRM" nudges. Just invoicing.' },
    ],
    targetKeywords: ['zoho invoice alternative', 'zoho alternative australia', 'zoho invoice alternative free', 'leave zoho ecosystem', 'zoho invoice vs invoiceflow'],
    seoTitle: 'Best Zoho Invoice Alternative for Australia (2026) — No Lock-In | InvoiceFlow',
    seoDescription: 'Zoho Invoice is "free" but locks you into their ecosystem. InvoiceFlow offers independent AI-powered invoicing with native Australian compliance and 100+ free tools.',
    faqItems: [
      { question: 'Is Zoho Invoice really free?', answer: 'Zoho Invoice is technically free, but it\'s designed to funnel you into the paid Zoho ecosystem. Advanced features require Zoho Books ($15-50/mo), CRM features need Zoho CRM ($14-52/mo), and expense tracking requires Zoho Expense ($3-8/user). InvoiceFlow is also free (5 invoices/mo) but works as a completely standalone product with no upsell pressure.' },
      { question: 'Why switch from a free product?', answer: 'Three reasons: (1) InvoiceFlow is purpose-built for Australian freelancers with native GST, ABN, and BAS compliance — Zoho is adapted from an Indian/global template. (2) InvoiceFlow includes 100+ free business tools that Zoho charges for via separate products. (3) No ecosystem lock-in — your data stays portable and you\'re not pressured into buying additional Zoho products.' },
      { question: 'Does InvoiceFlow have a client portal like Zoho?', answer: 'A full client portal is on InvoiceFlow\'s roadmap. Currently, clients receive professional email invoices with payment links. For most freelancers, this covers the core use case. Zoho\'s client portal requires Zoho Books (paid) for full functionality.' },
      { question: 'Can I use InvoiceFlow with my accountant?', answer: 'Absolutely. InvoiceFlow exports clean CSV and PDF data that any Australian accountant can import into their preferred system (Xero, MYOB, Zoho Books, or any accounting package). Unlike Zoho, your accountant doesn\'t need to be on the same platform.' },
      { question: 'What about Zoho\'s other tools?', answer: 'InvoiceFlow includes 100+ free business tools covering contracts, proposals, rate calculators, tax estimators, and more. These replace many of the features Zoho charges for via separate products. For CRM, consider free options like HubSpot CRM. The combined stack is more flexible and equally capable without vendor lock-in.' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(alternatives).map((competitor) => ({ competitor }));
}

export function generateMetadata({ params }: { params: { competitor: string } }): Metadata {
  const data = alternatives[params.competitor];
  if (!data) return {};
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    alternates: { canonical: `/alternative-to/${data.slug}` },
    keywords: data.targetKeywords,
    openGraph: {
      title: data.seoTitle,
      description: data.seoDescription,
    },
  };
}

export default function AlternativeToPage({ params }: { params: { competitor: string } }) {
  const data = alternatives[params.competitor];
  if (!data) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Alternatives', item: 'https://invoiceflow-teal.vercel.app/alternative-to' },
      { '@type': 'ListItem', position: 3, name: `${data.name} Alternative`, item: `https://invoiceflow-teal.vercel.app/alternative-to/${data.slug}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900" />
        <div className="relative max-w-4xl mx-auto text-center">
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/alternative-to" className="hover:text-white transition-colors">Alternatives</Link>
            <span className="mx-2">/</span>
            <span className="text-teal-400">{data.name}</span>
          </nav>

          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${data.themeColor} bg-opacity-20 text-sm font-medium mb-6`}>
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            {data.name} {data.trustpilotScore} Trustpilot
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-display)]">
            {data.headline}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {data.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white px-8 py-3 text-lg rounded-lg font-semibold transition-all">
                Try InvoiceFlow Free
              </Button>
            </Link>
            <Link href={`/compare/${data.slug}`}>
              <Button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 text-lg rounded-lg font-semibold transition-all bg-transparent">
                Full Comparison →
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 justify-center text-sm text-gray-400">
            <span>✓ No credit card required</span>
            <span>✓ 5 invoices/month free forever</span>
            <span>✓ Australian GST & ABN native</span>
          </div>
        </div>
      </section>

      {/* Why People Leave Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 font-[family-name:var(--font-display)]">
            Why Freelancers Are Leaving {data.name}
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            {data.name} was built for {data.name === 'Wave' ? 'North American small businesses' : data.name === 'Zoho Invoice' ? 'the global Zoho ecosystem' : 'a different market'}. Australian freelancers deserve software built for them.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {data.topComplaints.map((complaint, i) => (
              <div key={i} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-red-500/30 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 text-xl mt-0.5">⚠</span>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">{complaint.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{complaint.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why InvoiceFlow Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-display)]">
            Why InvoiceFlow Is the Better Choice
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {data.switchReasons.map((reason, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-gray-700/50 hover:border-teal-500/30 transition-colors">
                <span className="text-3xl mb-3 block">{reason.icon}</span>
                <h3 className="font-semibold text-lg text-white mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 font-[family-name:var(--font-display)]">
            {data.name} vs InvoiceFlow — Feature Comparison
          </h2>
          <p className="text-gray-400 text-center mb-10">
            See exactly where InvoiceFlow wins — and where {data.name} has advantages.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">{data.name}</th>
                  <th className="text-center py-4 px-4 text-teal-400 font-medium">InvoiceFlow</th>
                </tr>
              </thead>
              <tbody>
                {data.featureComparison.map((row, i) => (
                  <tr key={i} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                    <td className="py-3 px-4 text-sm font-medium text-gray-300">{row.feature}</td>
                    <td className={`py-3 px-4 text-sm text-center ${row.competitorBad ? 'text-red-400' : 'text-gray-300'}`}>
                      {row.competitorBad ? '✗ ' : '✓ '}{row.competitor}
                    </td>
                    <td className={`py-3 px-4 text-sm text-center ${row.invoiceflowGood ? 'text-teal-400' : 'text-gray-300'}`}>
                      {row.invoiceflowGood ? '✓ ' : '— '}{row.invoiceflow}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Migration Guide */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 font-[family-name:var(--font-display)]">
            Switch from {data.name} in 4 Steps
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Most freelancers complete the migration in under 30 minutes.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {data.migrationSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${data.themeColor} flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                  {step.step}
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-400 font-[family-name:var(--font-display)]">$0</div>
              <div className="text-gray-400 text-sm mt-1">InvoiceFlow starting price</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 font-[family-name:var(--font-display)]">100+</div>
              <div className="text-gray-400 text-sm mt-1">Free business tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 font-[family-name:var(--font-display)]">30s</div>
              <div className="text-gray-400 text-sm mt-1">To create an invoice</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 font-[family-name:var(--font-display)]">100%</div>
              <div className="text-gray-400 text-sm mt-1">Australian GST compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-display)]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {data.faqItems.map((faq, i) => (
              <details key={i} className="group bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800/80 transition-colors">
                  <h3 className="font-semibold text-white pr-4">{faq.question}</h3>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform text-xl flex-shrink-0">▾</span>
                </summary>
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 font-[family-name:var(--font-display)]">
            Compare InvoiceFlow with Other Tools
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.values(alternatives)
              .filter((a) => a.slug !== data.slug)
              .map((a) => (
                <Link
                  key={a.slug}
                  href={`/alternative-to/${a.slug}`}
                  className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-teal-500/50 text-gray-300 hover:text-white text-sm transition-all"
                >
                  {a.name} Alternative
                </Link>
              ))}
            <Link
              href="/compare"
              className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-teal-500/50 text-gray-300 hover:text-white text-sm transition-all"
            >
              Full Comparison Hub →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-display)]">
            Ready to Switch from {data.name}?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Join Australian freelancers who chose simple, AI-powered invoicing over {data.monthlyPrice} software they don&apos;t fully need.
          </p>
          <Link href="/signup">
            <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white px-10 py-4 text-lg rounded-lg font-semibold transition-all">
              Start Free — No Credit Card Required
            </Button>
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            5 invoices/month free forever • Upgrade to Pro ($19/mo) anytime • Cancel anytime
          </p>
        </div>
      </section>

      {/* Explore More */}
      <section className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Link href="/tools" className="group">
              <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors">100+ Free Tools</h3>
              <p className="text-gray-400 text-sm mt-1">GST calculators, contract generators, rate calculators and more</p>
            </Link>
            <Link href="/blog" className="group">
              <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors">125+ Guides</h3>
              <p className="text-gray-400 text-sm mt-1">Australian freelancing guides, tax tips, and invoicing advice</p>
            </Link>
            <Link href="/templates" className="group">
              <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors">28+ Templates</h3>
              <p className="text-gray-400 text-sm mt-1">Invoice templates, contracts, proposals, and business documents</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
