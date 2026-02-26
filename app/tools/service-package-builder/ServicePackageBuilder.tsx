'use client';

import { useState, useRef } from 'react';

/* ---- Types ---- */

type Step = 1 | 2 | 3 | 4;

type ServiceCategory =
  | 'web_design'
  | 'development'
  | 'copywriting'
  | 'graphic_design'
  | 'photography'
  | 'video_production'
  | 'social_media'
  | 'consulting'
  | 'virtual_assistant'
  | 'marketing'
  | 'other';

type TierNaming = 'starter' | 'basic';

type SupportLevel = 'email' | 'email_chat' | 'priority';

interface ServiceDetails {
  category: ServiceCategory | '';
  hourlyRate: number;
  typicalHours: number;
  businessName: string;
}

interface TierDeliverable {
  id: string;
  name: string;
}

interface PackageTier {
  name: string;
  deliverables: TierDeliverable[];
  turnaround: string;
  revisions: number;
  support: SupportLevel;
  price: number;
}

interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
}

/* ---- Constants ---- */

const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  web_design: 'Web Design',
  development: 'Development',
  copywriting: 'Copywriting',
  graphic_design: 'Graphic Design',
  photography: 'Photography',
  video_production: 'Video Production',
  social_media: 'Social Media Management',
  consulting: 'Consulting',
  virtual_assistant: 'Virtual Assistant',
  marketing: 'Marketing',
  other: 'Other',
};

const SUPPORT_LABELS: Record<SupportLevel, string> = {
  email: 'Email Only',
  email_chat: 'Email + Chat',
  priority: 'Priority Support',
};

const TIER_NAMING: Record<TierNaming, [string, string, string]> = {
  starter: ['Starter', 'Standard', 'Premium'],
  basic: ['Basic', 'Professional', 'Enterprise'],
};

/* ---- Smart Presets ---- */

interface CategoryPreset {
  tiers: [
    { name: string; deliverables: string[]; turnaround: string; revisions: number; support: SupportLevel },
    { name: string; deliverables: string[]; turnaround: string; revisions: number; support: SupportLevel },
    { name: string; deliverables: string[]; turnaround: string; revisions: number; support: SupportLevel },
  ];
  addOns: { name: string; description: string; priceMultiplier: number }[];
}

const CATEGORY_PRESETS: Record<ServiceCategory, CategoryPreset> = {
  web_design: {
    tiers: [
      { name: '', deliverables: ['Single landing page', 'Mobile responsive design', 'Contact form integration', 'Basic SEO setup'], turnaround: '2 weeks', revisions: 3, support: 'email' },
      { name: '', deliverables: ['Up to 5 pages', 'Mobile responsive design', 'Contact form + newsletter signup', 'SEO optimisation', 'CMS setup', 'Social media integration'], turnaround: '3 weeks', revisions: 5, support: 'email_chat' },
      { name: '', deliverables: ['10+ pages', 'Mobile responsive design', 'Custom animations & interactions', 'Full SEO optimisation', 'CMS setup + training', 'E-commerce ready', 'Analytics dashboard', 'Speed optimisation'], turnaround: '4 weeks', revisions: -1, support: 'priority' },
    ],
    addOns: [
      { name: 'Rush delivery', description: 'Deliver 50% faster than standard turnaround', priceMultiplier: 0.3 },
      { name: 'Extra page', description: 'Additional page beyond package scope', priceMultiplier: 0.08 },
      { name: 'SEO setup', description: 'Advanced keyword research + on-page SEO for all pages', priceMultiplier: 0.15 },
      { name: 'Content writing', description: 'Professional copy for all pages', priceMultiplier: 0.2 },
      { name: 'Monthly maintenance', description: 'Updates, backups, and security monitoring per month', priceMultiplier: 0.1 },
    ],
  },
  development: {
    tiers: [
      { name: '', deliverables: ['Single feature or module', 'Clean documented code', 'Basic testing', 'Deployment to staging'], turnaround: '2 weeks', revisions: 2, support: 'email' },
      { name: '', deliverables: ['Up to 5 features', 'Clean documented code', 'Unit + integration testing', 'CI/CD pipeline setup', 'Staging + production deployment', 'API documentation'], turnaround: '4 weeks', revisions: 4, support: 'email_chat' },
      { name: '', deliverables: ['Full application build', 'Clean documented code', 'Comprehensive test suite', 'CI/CD pipeline', 'Database design + migration', 'API development', 'Performance optimisation', 'Security audit'], turnaround: '6-8 weeks', revisions: -1, support: 'priority' },
    ],
    addOns: [
      { name: 'Rush delivery', description: 'Deliver 50% faster than standard turnaround', priceMultiplier: 0.35 },
      { name: 'Additional feature', description: 'Single feature addition beyond package scope', priceMultiplier: 0.12 },
      { name: 'Technical documentation', description: 'Comprehensive developer documentation', priceMultiplier: 0.1 },
      { name: 'Performance audit', description: 'Deep-dive performance analysis and optimisation', priceMultiplier: 0.15 },
      { name: 'Ongoing support (monthly)', description: 'Bug fixes, minor updates, and technical support', priceMultiplier: 0.12 },
    ],
  },
  copywriting: {
    tiers: [
      { name: '', deliverables: ['1 blog post per week (800-1200 words)', 'Basic keyword research', 'Meta descriptions'], turnaround: '1 week', revisions: 2, support: 'email' },
      { name: '', deliverables: ['3 blog posts per week (1000-1500 words)', 'SEO keyword strategy', 'Meta descriptions + titles', 'Internal linking plan', 'Content calendar'], turnaround: '1 week', revisions: 3, support: 'email_chat' },
      { name: '', deliverables: ['5 blog posts per week (1200-2000 words)', 'Full SEO strategy', 'Meta descriptions + titles', 'Social media captions', 'Email newsletter copy', 'Content calendar + strategy'], turnaround: '1 week', revisions: -1, support: 'priority' },
    ],
    addOns: [
      { name: 'Rush delivery', description: 'Same-day or next-day turnaround', priceMultiplier: 0.25 },
      { name: 'Website copy', description: 'Professional copy for a single web page', priceMultiplier: 0.1 },
      { name: 'Email sequence', description: '5-email nurture or welcome sequence', priceMultiplier: 0.2 },
      { name: 'Case study', description: 'Client case study (interview + writing)', priceMultiplier: 0.15 },
      { name: 'White paper', description: 'In-depth white paper or report (3000+ words)', priceMultiplier: 0.25 },
    ],
  },
  graphic_design: {
    tiers: [
      { name: '', deliverables: ['Logo design (3 concepts)', 'Business card design', 'Colour palette', 'File formats: PNG, SVG, PDF'], turnaround: '1 week', revisions: 3, support: 'email' },
      { name: '', deliverables: ['Logo design (5 concepts)', 'Business card + letterhead', 'Colour palette + typography', 'Brand guidelines document', 'Social media profile graphics', 'File formats: all standard'], turnaround: '2 weeks', revisions: 5, support: 'email_chat' },
      { name: '', deliverables: ['Logo design (unlimited concepts)', 'Full stationery suite', 'Comprehensive brand guide', 'Social media kit (all platforms)', 'Presentation template', 'Email signature design', 'Brand pattern + texture', 'Icon set'], turnaround: '3 weeks', revisions: -1, support: 'priority' },
    ],
    addOns: [
      { name: 'Rush delivery', description: 'Deliver 50% faster than standard turnaround', priceMultiplier: 0.3 },
      { name: 'Brochure design', description: 'Tri-fold or bi-fold brochure design', priceMultiplier: 0.12 },
      { name: 'Packaging design', description: 'Product packaging design (single product)', priceMultiplier: 0.2 },
      { name: 'Infographic', description: 'Custom infographic design', priceMultiplier: 0.1 },
      { name: 'Vehicle wrap design', description: 'Full or partial vehicle wrap design', priceMultiplier: 0.25 },
    ],
  },
  photography: {
    tiers: [
      { name: '', deliverables: ['1-hour photo session', '15 edited photos', 'Basic retouching', 'Digital delivery (high-res)'], turnaround: '1 week', revisions: 2, support: 'email' },
      { name: '', deliverables: ['2-hour photo session', '40 edited photos', 'Advanced retouching', 'Digital delivery (high-res + web)', '1 location', 'Outfit change included'], turnaround: '1 week', revisions: 3, support: 'email_chat' },
      { name: '', deliverables: ['Half-day session (4 hours)', '80+ edited photos', 'Premium retouching', 'Digital delivery (all formats)', 'Multiple locations', 'Outfit changes', 'Online gallery', 'Print-ready files'], turnaround: '2 weeks', revisions: -1, support: 'priority' },
    ],
    addOns: [
      { name: 'Rush editing', description: '24-hour editing turnaround', priceMultiplier: 0.3 },
      { name: 'Extra hour on location', description: 'Additional hour of shooting time', priceMultiplier: 0.15 },
      { name: 'Drone photography', description: 'Aerial photography with licensed drone operator', priceMultiplier: 0.2 },
      { name: 'Product photography', description: '10 product shots with white background', priceMultiplier: 0.15 },
      { name: 'Photo prints', description: 'Set of 10 professional prints (8x10)', priceMultiplier: 0.1 },
    ],
  },
  video_production: {
    tiers: [
      { name: '', deliverables: ['30-second video', 'Basic editing + cuts', 'Background music', 'Text overlays', '1 format (16:9 or 9:16)'], turnaround: '1 week', revisions: 2, support: 'email' },
      { name: '', deliverables: ['1-2 minute video', 'Professional editing', 'Colour grading', 'Background music + sound design', 'Text overlays + lower thirds', '2 formats (16:9 + 9:16)', 'Thumbnail design'], turnaround: '2 weeks', revisions: 3, support: 'email_chat' },
      { name: '', deliverables: ['3-5 minute video', 'Premium editing + motion graphics', 'Full colour grading', 'Custom music + sound design', 'Professional voiceover', 'All formats', 'Thumbnail + social cuts', 'Raw footage provided'], turnaround: '3 weeks', revisions: -1, support: 'priority' },
    ],
    addOns: [
      { name: 'Rush delivery', description: 'Deliver 50% faster than standard turnaround', priceMultiplier: 0.35 },
      { name: 'Extra social media cut', description: 'Additional short-form edit for social media', priceMultiplier: 0.1 },
      { name: 'Subtitles/captions', description: 'Burned-in or SRT subtitles', priceMultiplier: 0.08 },
      { name: 'Voiceover', description: 'Professional voiceover recording', priceMultiplier: 0.15 },
      { name: 'Drone footage', description: 'Aerial footage with licensed drone operator', priceMultiplier: 0.2 },
    ],
  },
  social_media: {
    tiers: [
      { name: '', deliverables: ['2 platforms managed', '8 posts per month', 'Content calendar', 'Basic analytics report'], turnaround: 'Monthly', revisions: 2, support: 'email' },
      { name: '', deliverables: ['3 platforms managed', '16 posts per month', 'Content calendar + strategy', 'Hashtag research', 'Monthly analytics report', 'Community engagement (weekdays)'], turnaround: 'Monthly', revisions: 3, support: 'email_chat' },
      { name: '', deliverables: ['5 platforms managed', '30 posts per month', 'Full content strategy', 'Custom graphic design', 'Story/Reel creation', 'Daily community engagement', 'Weekly analytics report', 'Influencer outreach'], turnaround: 'Monthly', revisions: -1, support: 'priority' },
    ],
    addOns: [
      { name: 'Paid ad management', description: 'Management of paid social campaigns (ad spend not included)', priceMultiplier: 0.2 },
      { name: 'Additional platform', description: 'Add one more platform to your package', priceMultiplier: 0.15 },
      { name: 'Reel/TikTok creation', description: '4 short-form videos per month', priceMultiplier: 0.2 },
      { name: 'Influencer outreach', description: 'Identify and manage 5 influencer partnerships', priceMultiplier: 0.15 },
      { name: 'Monthly strategy call', description: '30-minute strategy and review call', priceMultiplier: 0.05 },
    ],
  },
  consulting: {
    tiers: [
      { name: '', deliverables: ['2-hour strategy session', 'Action plan document', 'Email follow-up support (1 week)'], turnaround: '1 week', revisions: 1, support: 'email' },
      { name: '', deliverables: ['Half-day workshop (4 hours)', 'Comprehensive strategy document', 'Implementation roadmap', 'Priority list + quick wins', 'Email support (2 weeks)'], turnaround: '2 weeks', revisions: 2, support: 'email_chat' },
      { name: '', deliverables: ['Full-day workshop', 'Comprehensive strategy document', 'Implementation roadmap + timeline', 'Stakeholder presentation', 'Monthly check-in calls (3 months)', 'Ongoing email support', 'Resource library access'], turnaround: '3 weeks', revisions: -1, support: 'priority' },
    ],
    addOns: [
      { name: 'Additional strategy session', description: '1-hour follow-up strategy call', priceMultiplier: 0.12 },
      { name: 'Implementation support', description: '4 hours of hands-on implementation help', priceMultiplier: 0.2 },
      { name: 'Team training', description: '2-hour training session for your team', priceMultiplier: 0.15 },
      { name: 'Monthly retainer', description: 'Ongoing advisory support (4 hours/month)', priceMultiplier: 0.25 },
      { name: 'Competitive analysis', description: 'Deep-dive competitive landscape report', priceMultiplier: 0.15 },
    ],
  },
  virtual_assistant: {
    tiers: [
      { name: '', deliverables: ['10 hours per month', 'Email management', 'Calendar management', 'Basic data entry', 'Weekly progress report'], turnaround: 'Monthly', revisions: 1, support: 'email' },
      { name: '', deliverables: ['20 hours per month', 'Email + calendar management', 'Travel booking', 'Document preparation', 'Social media scheduling', 'CRM management', 'Weekly progress report'], turnaround: 'Monthly', revisions: 2, support: 'email_chat' },
      { name: '', deliverables: ['40 hours per month', 'Full inbox management', 'Calendar + travel management', 'Document preparation', 'Social media management', 'CRM + project management', 'Client communication', 'Daily progress report', 'Dedicated availability (business hours)'], turnaround: 'Monthly', revisions: -1, support: 'priority' },
    ],
    addOns: [
      { name: 'Additional hours', description: '5 extra hours beyond package allocation', priceMultiplier: 0.1 },
      { name: 'Weekend availability', description: 'Support available on weekends', priceMultiplier: 0.15 },
      { name: 'Bookkeeping', description: 'Basic bookkeeping and expense tracking', priceMultiplier: 0.12 },
      { name: 'Research project', description: 'Dedicated research task (up to 5 hours)', priceMultiplier: 0.1 },
      { name: 'Event coordination', description: 'Planning and coordination for a single event', priceMultiplier: 0.2 },
    ],
  },
  marketing: {
    tiers: [
      { name: '', deliverables: ['Marketing audit', 'Channel recommendations', 'Basic content calendar', 'Monthly performance report'], turnaround: '2 weeks', revisions: 2, support: 'email' },
      { name: '', deliverables: ['Full marketing strategy', 'Content calendar (3 months)', 'SEO keyword research', 'Email marketing setup', 'Landing page optimisation', 'Monthly performance report'], turnaround: '3 weeks', revisions: 3, support: 'email_chat' },
      { name: '', deliverables: ['Comprehensive marketing strategy', 'Content calendar (6 months)', 'Full SEO strategy + implementation', 'Email marketing automation', 'Paid ad campaign setup', 'Landing page design + A/B testing', 'Conversion rate optimisation', 'Weekly performance reports'], turnaround: '4-6 weeks', revisions: -1, support: 'priority' },
    ],
    addOns: [
      { name: 'Paid ad management', description: 'Monthly management of Google/Meta ad campaigns', priceMultiplier: 0.2 },
      { name: 'Email automation', description: 'Setup of automated email sequences', priceMultiplier: 0.15 },
      { name: 'Competitor analysis', description: 'In-depth competitor marketing analysis', priceMultiplier: 0.12 },
      { name: 'Brand photoshoot', description: 'Coordinate and manage a brand photo session', priceMultiplier: 0.2 },
      { name: 'Monthly strategy call', description: '1-hour monthly marketing review and planning call', priceMultiplier: 0.08 },
    ],
  },
  other: {
    tiers: [
      { name: '', deliverables: ['Core deliverable', 'Basic documentation', 'Email support'], turnaround: '1-2 weeks', revisions: 2, support: 'email' },
      { name: '', deliverables: ['Core deliverable + extras', 'Comprehensive documentation', 'Implementation support', 'Progress reports'], turnaround: '2-3 weeks', revisions: 3, support: 'email_chat' },
      { name: '', deliverables: ['Full-scope deliverable', 'Premium documentation', 'Full implementation support', 'Training session', 'Ongoing support (1 month)', 'Priority access'], turnaround: '3-4 weeks', revisions: -1, support: 'priority' },
    ],
    addOns: [
      { name: 'Rush delivery', description: 'Deliver 50% faster than standard turnaround', priceMultiplier: 0.3 },
      { name: 'Additional revision round', description: 'One extra round of revisions', priceMultiplier: 0.08 },
      { name: 'Extended support', description: 'Additional month of post-delivery support', priceMultiplier: 0.1 },
      { name: 'Training session', description: '1-hour training or walkthrough session', priceMultiplier: 0.1 },
      { name: 'Priority scheduling', description: 'Guaranteed start within 48 hours', priceMultiplier: 0.15 },
    ],
  },
};

/* ---- Helpers ---- */

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function calcSuggestedPrice(hourlyRate: number, hours: number, multiplier: number): number {
  return Math.round(hourlyRate * hours * multiplier / 10) * 10;
}

function calcEffectiveRate(price: number, hours: number, multiplier: number): number {
  const estimatedHours = hours * (multiplier < 1 ? 0.7 : multiplier < 1.5 ? 1 : 1.4);
  return estimatedHours > 0 ? Math.round(price / estimatedHours) : 0;
}

/* ---- Step Indicator ---- */

function StepIndicator({ step }: { step: Step }) {
  const steps = [
    { num: 1, label: 'Service' },
    { num: 2, label: 'Tiers' },
    { num: 3, label: 'Extras' },
    { num: 4, label: 'Package' },
  ];

  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((s, i) => (
        <div key={s.num} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step > s.num
                  ? 'bg-rose-500 text-white'
                  : step === s.num
                  ? 'bg-gradient-to-br from-rose-400 to-pink-500 text-white ring-4 ring-rose-400/20'
                  : 'bg-white/10 text-slate-500'
              }`}
            >
              {step > s.num ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s.num
              )}
            </div>
            <span
              className={`text-xs mt-1.5 font-medium whitespace-nowrap ${
                step === s.num ? 'text-rose-400' : step > s.num ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-10 sm:w-16 h-0.5 mb-5 mx-1.5 transition-all ${
                step > s.num ? 'bg-rose-500' : 'bg-white/10'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ---- Field Components ---- */

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm text-slate-300 font-medium mb-1.5">{children}</label>;
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  hint,
  prefix,
}: {
  label: string;
  value: string | number;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  hint?: string;
  prefix?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">{prefix}</span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full bg-white/5 border border-white/10 rounded-lg ${prefix ? 'pl-8' : 'pl-4'} pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 transition-all`}
        />
      </div>
      {hint && <p className="text-xs text-slate-500 mt-1">{hint}</p>}
    </div>
  );
}

function SelectField<T extends string>({
  label,
  value,
  onChange,
  options,
  hint,
}: {
  label: string;
  value: T | '';
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
  hint?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 transition-all appearance-none"
      >
        <option value="" className="bg-slate-900">Select...</option>
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-slate-900">
            {o.label}
          </option>
        ))}
      </select>
      {hint && <p className="text-xs text-slate-500 mt-1">{hint}</p>}
    </div>
  );
}

/* ---- Text Generator ---- */

function generatePackageText(
  details: ServiceDetails,
  naming: TierNaming,
  tiers: [PackageTier, PackageTier, PackageTier],
  addOns: AddOn[]
): string {
  const divider = '────────────────────────────────────────────────────────────';
  const categoryName = details.category ? CATEGORY_LABELS[details.category] : 'Service';
  const tierNames = TIER_NAMING[naming];

  let text = '';

  text += `SERVICE PACKAGES\n`;
  text += divider + '\n\n';
  if (details.businessName) text += `${details.businessName}\n`;
  text += `Service: ${categoryName}\n`;
  text += `Generated: ${new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}\n`;

  text += '\n' + divider + '\n\n';

  // Tier comparison summary
  text += `PACKAGE OVERVIEW\n${divider}\n\n`;
  text += `  ${'Feature'.padEnd(30)} ${tierNames[0].padEnd(18)} ${tierNames[1].padEnd(18)} ${tierNames[2]}\n`;
  text += `  ${'─'.repeat(30)} ${'─'.repeat(18)} ${'─'.repeat(18)} ${'─'.repeat(18)}\n`;
  text += `  ${'Price'.padEnd(30)} ${formatCurrency(tiers[0].price).padEnd(18)} ${formatCurrency(tiers[1].price).padEnd(18)} ${formatCurrency(tiers[2].price)}\n`;
  text += `  ${'Turnaround'.padEnd(30)} ${tiers[0].turnaround.padEnd(18)} ${tiers[1].turnaround.padEnd(18)} ${tiers[2].turnaround}\n`;
  text += `  ${'Revisions'.padEnd(30)} ${(tiers[0].revisions === -1 ? 'Unlimited' : String(tiers[0].revisions)).padEnd(18)} ${(tiers[1].revisions === -1 ? 'Unlimited' : String(tiers[1].revisions)).padEnd(18)} ${tiers[2].revisions === -1 ? 'Unlimited' : String(tiers[2].revisions)}\n`;
  text += `  ${'Support'.padEnd(30)} ${SUPPORT_LABELS[tiers[0].support].padEnd(18)} ${SUPPORT_LABELS[tiers[1].support].padEnd(18)} ${SUPPORT_LABELS[tiers[2].support]}\n`;

  // Individual tier details
  tiers.forEach((tier, i) => {
    text += `\n\n${tierNames[i].toUpperCase()} PACKAGE — ${tiers[i].name || tierNames[i]}`;
    if (i === 1) text += '  ★ RECOMMENDED';
    text += `\n${divider}\n\n`;
    text += `  Price:        ${formatCurrency(tier.price)}\n`;
    text += `  Turnaround:   ${tier.turnaround}\n`;
    text += `  Revisions:    ${tier.revisions === -1 ? 'Unlimited' : tier.revisions}\n`;
    text += `  Support:      ${SUPPORT_LABELS[tier.support]}\n\n`;
    text += `  Deliverables:\n`;
    tier.deliverables.forEach((d) => {
      text += `    • ${d.name}\n`;
    });
  });

  // Add-ons
  if (addOns.length > 0) {
    text += `\n\nOPTIONAL ADD-ONS\n${divider}\n\n`;
    addOns.forEach((addon) => {
      text += `  ${addon.name}  —  ${formatCurrency(addon.price)}\n`;
      if (addon.description) text += `    ${addon.description}\n`;
      text += '\n';
    });
  }

  text += '\n' + divider + '\n';
  text += `Generated with InvoiceFlow — invoiceflow.au/tools/service-package-builder`;

  return text;
}

/* ---- Main Component ---- */

export default function ServicePackageBuilder() {
  const [step, setStep] = useState<Step>(1);
  const [copied, setCopied] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  /* Step 1: Service Details */
  const [details, setDetails] = useState<ServiceDetails>({
    category: '',
    hourlyRate: 0,
    typicalHours: 0,
    businessName: '',
  });

  /* Step 2: Package Tiers */
  const [naming, setNaming] = useState<TierNaming>('starter');
  const [tiers, setTiers] = useState<[PackageTier, PackageTier, PackageTier]>([
    { name: '', deliverables: [], turnaround: '', revisions: 0, support: 'email', price: 0 },
    { name: '', deliverables: [], turnaround: '', revisions: 0, support: 'email_chat', price: 0 },
    { name: '', deliverables: [], turnaround: '', revisions: 0, support: 'priority', price: 0 },
  ]);
  const [tiersLoaded, setTiersLoaded] = useState(false);

  /* Step 3: Add-ons */
  const [addOns, setAddOns] = useState<AddOn[]>([]);
  const [addOnsLoaded, setAddOnsLoaded] = useState(false);

  /* Validations */
  const step1Valid =
    details.category !== '' &&
    details.hourlyRate > 0 &&
    details.typicalHours > 0;

  /* Load presets */
  const loadTierPresets = () => {
    if (!tiersLoaded && details.category) {
      const preset = CATEGORY_PRESETS[details.category];
      const tierNames = TIER_NAMING[naming];
      const multipliers = [0.85, 1.15, 1.65];

      const newTiers = preset.tiers.map((t, i) => ({
        name: t.name || tierNames[i],
        deliverables: t.deliverables.map((d) => ({ id: generateId(), name: d })),
        turnaround: t.turnaround,
        revisions: t.revisions,
        support: t.support,
        price: calcSuggestedPrice(details.hourlyRate, details.typicalHours, multipliers[i]),
      })) as [PackageTier, PackageTier, PackageTier];

      setTiers(newTiers);
      setTiersLoaded(true);
    }
  };

  const loadAddOnPresets = () => {
    if (!addOnsLoaded && details.category) {
      const preset = CATEGORY_PRESETS[details.category];
      const baseCost = details.hourlyRate * details.typicalHours;
      const newAddOns = preset.addOns.map((a) => ({
        id: generateId(),
        name: a.name,
        description: a.description,
        price: Math.round(baseCost * a.priceMultiplier / 10) * 10,
      }));
      setAddOns(newAddOns);
      setAddOnsLoaded(true);
    }
  };

  /* Tier management */
  const updateTier = (index: number, field: keyof PackageTier, value: string | number | SupportLevel) => {
    setTiers((prev) => {
      const next = [...prev] as [PackageTier, PackageTier, PackageTier];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const addDeliverable = (tierIndex: number) => {
    setTiers((prev) => {
      const next = [...prev] as [PackageTier, PackageTier, PackageTier];
      next[tierIndex] = {
        ...next[tierIndex],
        deliverables: [...next[tierIndex].deliverables, { id: generateId(), name: '' }],
      };
      return next;
    });
  };

  const updateDeliverable = (tierIndex: number, delId: string, value: string) => {
    setTiers((prev) => {
      const next = [...prev] as [PackageTier, PackageTier, PackageTier];
      next[tierIndex] = {
        ...next[tierIndex],
        deliverables: next[tierIndex].deliverables.map((d) =>
          d.id === delId ? { ...d, name: value } : d
        ),
      };
      return next;
    });
  };

  const removeDeliverable = (tierIndex: number, delId: string) => {
    setTiers((prev) => {
      const next = [...prev] as [PackageTier, PackageTier, PackageTier];
      next[tierIndex] = {
        ...next[tierIndex],
        deliverables: next[tierIndex].deliverables.filter((d) => d.id !== delId),
      };
      return next;
    });
  };

  /* Add-on management */
  const addAddOn = () => {
    setAddOns((prev) => [...prev, { id: generateId(), name: '', description: '', price: 0 }]);
  };

  const updateAddOn = (id: string, field: keyof Omit<AddOn, 'id'>, value: string | number) => {
    setAddOns((prev) => prev.map((a) => (a.id === id ? { ...a, [field]: value } : a)));
  };

  const removeAddOn = (id: string) => {
    setAddOns((prev) => prev.filter((a) => a.id !== id));
  };

  /* Navigation */
  const goToStep = (target: Step) => {
    if (target === 2) loadTierPresets();
    if (target === 3) loadAddOnPresets();
    if (target === 4) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
    setStep(target);
  };

  /* Copy to clipboard */
  const copyPackage = async () => {
    const text = generatePackageText(details, naming, tiers, addOns);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  /* Print */
  const printPackage = () => {
    const text = generatePackageText(details, naming, tiers, addOns);
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Service Packages — ${details.businessName || 'My Packages'}</title>
            <style>
              body { font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.6; padding: 40px; color: #1a1a1a; max-width: 800px; margin: 0 auto; }
              @media print { body { padding: 20px; } }
            </style>
          </head>
          <body><pre>${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre></body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const tierNames = TIER_NAMING[naming];
  const multipliers = [0.85, 1.15, 1.65];

  return (
    <div className="glass rounded-2xl p-6 sm:p-8" ref={resultsRef}>
      <StepIndicator step={step} />

      {/* ---- STEP 1: Service Details ---- */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Service Details</h2>
            <p className="text-sm text-slate-400">
              Tell us about your service. We will use this to generate smart presets for your package tiers and pricing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <SelectField
                label="Service category"
                value={details.category}
                onChange={(v) => {
                  setDetails((p) => ({ ...p, category: v }));
                  setTiersLoaded(false);
                  setAddOnsLoaded(false);
                }}
                options={Object.entries(CATEGORY_LABELS).map(([value, label]) => ({
                  value: value as ServiceCategory,
                  label,
                }))}
                hint="Determines preset deliverables, turnaround times, and suggested add-ons"
              />
            </div>
            <InputField
              label="Your base hourly rate"
              value={details.hourlyRate || ''}
              onChange={(v) => {
                setDetails((p) => ({ ...p, hourlyRate: Number(v) || 0 }));
                setTiersLoaded(false);
                setAddOnsLoaded(false);
              }}
              type="number"
              placeholder="e.g. 120"
              prefix="$"
              hint="Used to calculate suggested package prices"
            />
            <InputField
              label="Typical project hours"
              value={details.typicalHours || ''}
              onChange={(v) => {
                setDetails((p) => ({ ...p, typicalHours: Number(v) || 0 }));
                setTiersLoaded(false);
                setAddOnsLoaded(false);
              }}
              type="number"
              placeholder="e.g. 40"
              hint="Average hours for a standard project in this category"
            />
            <div className="sm:col-span-2">
              <InputField
                label="Business name"
                value={details.businessName}
                onChange={(v) => setDetails((p) => ({ ...p, businessName: v }))}
                placeholder="e.g. Smith Creative Studio"
                hint="Optional — appears on your generated package document"
              />
            </div>
          </div>

          {/* Pricing preview */}
          {step1Valid && (
            <div className="bg-white/5 rounded-xl border border-white/10 p-5">
              <p className="text-sm text-slate-400 mb-3">Suggested package prices based on your rate and hours:</p>
              <div className="grid grid-cols-3 gap-3">
                {(['Starter', 'Standard', 'Premium'] as const).map((name, i) => (
                  <div
                    key={name}
                    className={`rounded-xl p-4 text-center ${
                      i === 1
                        ? 'bg-gradient-to-b from-rose-400/10 to-pink-500/10 border border-rose-400/20'
                        : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    <p className="text-xs text-slate-400 mb-1">{name}</p>
                    <p className="text-lg font-bold text-white">
                      {formatCurrency(calcSuggestedPrice(details.hourlyRate, details.typicalHours, multipliers[i]))}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      ~{formatCurrency(calcEffectiveRate(calcSuggestedPrice(details.hourlyRate, details.typicalHours, multipliers[i]), details.typicalHours, multipliers[i]))}/hr effective
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <button
              onClick={() => goToStep(2)}
              disabled={!step1Valid}
              className="px-6 py-2.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold rounded-lg hover:from-rose-400 hover:to-pink-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next: Build Package Tiers
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 2: Package Tiers ---- */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Package Tiers</h2>
            <p className="text-sm text-slate-400">
              Build your 3-tier offering. We have pre-populated deliverables and pricing based on your
              {details.category ? ` ${CATEGORY_LABELS[details.category].toLowerCase()}` : ''} service — customise everything to match your actual offering.
            </p>
          </div>

          {/* Naming convention */}
          <div>
            <Label>Tier naming convention</Label>
            <div className="flex gap-3 mt-1.5">
              {(['starter', 'basic'] as const).map((n) => (
                <button
                  key={n}
                  onClick={() => {
                    setNaming(n);
                    const names = TIER_NAMING[n];
                    setTiers((prev) => {
                      const next = [...prev] as [PackageTier, PackageTier, PackageTier];
                      next.forEach((t, i) => {
                        if (t.name === TIER_NAMING[naming][i]) {
                          next[i] = { ...t, name: names[i] };
                        }
                      });
                      return next;
                    });
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    naming === n
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  {TIER_NAMING[n].join(' / ')}
                </button>
              ))}
            </div>
          </div>

          {/* Three tier cards */}
          <div className="space-y-6">
            {tiers.map((tier, tierIndex) => (
              <div
                key={tierIndex}
                className={`rounded-2xl border p-5 ${
                  tierIndex === 1
                    ? 'bg-gradient-to-b from-rose-400/5 to-pink-500/5 border-rose-400/30'
                    : 'bg-white/5 border-white/10'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      tierIndex === 1
                        ? 'bg-rose-400/20 text-rose-400 border border-rose-400/30'
                        : 'bg-white/10 text-slate-400 border border-white/10'
                    }`}
                  >
                    {tierIndex === 1 ? 'Recommended' : `Tier ${tierIndex + 1}`}
                  </span>
                  <span className="text-xs text-slate-500">
                    Suggested: {formatCurrency(calcSuggestedPrice(details.hourlyRate, details.typicalHours, multipliers[tierIndex]))}
                    {' '}({multipliers[tierIndex]}x base)
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <InputField
                    label="Package name"
                    value={tier.name}
                    onChange={(v) => updateTier(tierIndex, 'name', v)}
                    placeholder={tierNames[tierIndex]}
                  />
                  <InputField
                    label="Price"
                    value={tier.price || ''}
                    onChange={(v) => updateTier(tierIndex, 'price', Number(v) || 0)}
                    type="number"
                    prefix="$"
                    hint={tier.price > 0 ? `~${formatCurrency(calcEffectiveRate(tier.price, details.typicalHours, multipliers[tierIndex]))}/hr effective rate` : undefined}
                  />
                  <InputField
                    label="Turnaround time"
                    value={tier.turnaround}
                    onChange={(v) => updateTier(tierIndex, 'turnaround', v)}
                    placeholder="e.g. 2 weeks"
                  />
                  <div>
                    <Label>Revisions</Label>
                    <div className="flex gap-2">
                      <select
                        value={tier.revisions}
                        onChange={(e) => updateTier(tierIndex, 'revisions', Number(e.target.value))}
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 transition-all appearance-none"
                      >
                        {[1, 2, 3, 4, 5].map((n) => (
                          <option key={n} value={n} className="bg-slate-900">{n} revision{n > 1 ? 's' : ''}</option>
                        ))}
                        <option value={-1} className="bg-slate-900">Unlimited</option>
                      </select>
                    </div>
                  </div>
                  <SelectField
                    label="Support level"
                    value={tier.support}
                    onChange={(v) => updateTier(tierIndex, 'support', v)}
                    options={Object.entries(SUPPORT_LABELS).map(([value, label]) => ({
                      value: value as SupportLevel,
                      label,
                    }))}
                  />
                </div>

                {/* Deliverables */}
                <div>
                  <Label>Deliverables</Label>
                  <div className="space-y-2 mt-1.5">
                    {tier.deliverables.map((d) => (
                      <div key={d.id} className="flex items-center gap-2">
                        <span className="text-rose-400 text-xs flex-shrink-0">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          value={d.name}
                          onChange={(e) => updateDeliverable(tierIndex, d.id, e.target.value)}
                          placeholder="Deliverable item"
                          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 transition-all"
                        />
                        <button
                          onClick={() => removeDeliverable(tierIndex, d.id)}
                          className="text-slate-500 hover:text-red-400 transition-colors p-1 flex-shrink-0"
                          title="Remove"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addDeliverable(tierIndex)}
                      className="w-full py-2 border border-dashed border-white/20 rounded-lg text-xs text-slate-400 hover:text-rose-400 hover:border-rose-400/30 transition-all flex items-center justify-center gap-1.5"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Add Deliverable
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between pt-2">
            <button
              onClick={() => goToStep(1)}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => goToStep(3)}
              className="px-6 py-2.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold rounded-lg hover:from-rose-400 hover:to-pink-400 transition-all"
            >
              Next: Package Extras
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 3: Package Extras ---- */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Package Extras</h2>
            <p className="text-sm text-slate-400">
              Add optional add-ons that clients can purchase on top of any package. These are pre-populated
              based on your {details.category ? CATEGORY_LABELS[details.category].toLowerCase() : ''} service — edit or remove as needed.
            </p>
          </div>

          <div className="space-y-3">
            {addOns.map((addon, i) => (
              <div key={addon.id} className="bg-white/5 rounded-xl border border-white/10 p-4">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-bold text-rose-400 bg-rose-400/10 border border-rose-400/20 rounded-full px-2.5 py-0.5">
                    Add-on {i + 1}
                  </span>
                  <button
                    onClick={() => removeAddOn(addon.id)}
                    className="text-slate-500 hover:text-red-400 transition-colors text-sm p-1"
                    title="Remove add-on"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    value={addon.name}
                    onChange={(e) => updateAddOn(addon.id, 'name', e.target.value)}
                    placeholder="Add-on name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white font-medium placeholder-slate-600 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 transition-all"
                  />
                  <input
                    type="text"
                    value={addon.description}
                    onChange={(e) => updateAddOn(addon.id, 'description', e.target.value)}
                    placeholder="Brief description"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 transition-all"
                  />
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                    <input
                      type="number"
                      value={addon.price || ''}
                      onChange={(e) => updateAddOn(addon.id, 'price', Number(e.target.value) || 0)}
                      placeholder="Price"
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-8 pr-4 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 transition-all"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={addAddOn}
              className="w-full py-3 border border-dashed border-white/20 rounded-xl text-sm text-slate-400 hover:text-rose-400 hover:border-rose-400/30 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Extra
            </button>
          </div>

          {/* Add-ons total value */}
          {addOns.length > 0 && (
            <div className="bg-white/5 rounded-xl border border-white/10 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Total add-on value if all selected:</span>
                <span className="text-lg font-bold text-white">
                  {formatCurrency(addOns.reduce((sum, a) => sum + a.price, 0))}
                </span>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-2">
            <button
              onClick={() => goToStep(2)}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => goToStep(4)}
              className="px-6 py-2.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold rounded-lg hover:from-rose-400 hover:to-pink-400 transition-all"
            >
              Generate Package
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 4: Generated Package ---- */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Your Service Packages</h2>
            <p className="text-sm text-slate-400">
              Here are your beautifully formatted service packages. Copy the text or print a clean version to share with clients.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={copyPackage}
              className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
                copied
                  ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                  : 'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-400 hover:to-pink-400'
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied to Clipboard
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy All as Text
                </>
              )}
            </button>
            <button
              onClick={printPackage}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </button>
          </div>

          {/* 3-column pricing cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {tiers.map((tier, i) => {
              const isMiddle = i === 1;
              const valuePrice = Math.round(tier.price * (i === 0 ? 1.3 : i === 1 ? 1.5 : 1.8));
              return (
                <div
                  key={i}
                  className={`rounded-2xl border p-5 flex flex-col relative ${
                    isMiddle
                      ? 'bg-gradient-to-b from-rose-400/10 to-pink-500/10 border-rose-400/30 ring-1 ring-rose-400/20'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  {isMiddle && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Recommended
                      </span>
                    </div>
                  )}
                  <h3 className={`text-lg font-bold heading-font mb-1 ${isMiddle ? 'text-rose-400' : 'text-white'}`}>
                    {tier.name || tierNames[i]}
                  </h3>
                  <div className="mb-4">
                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-bold text-white">{formatCurrency(tier.price)}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 line-through">
                      Value: {formatCurrency(valuePrice)}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      ~{formatCurrency(calcEffectiveRate(tier.price, details.typicalHours, multipliers[i]))}/hr effective
                    </p>
                  </div>

                  <div className="space-y-2 mb-4 flex-1">
                    {tier.deliverables.map((d) => (
                      <div key={d.id} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-slate-300">{d.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-3 mt-auto space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">Turnaround</span>
                      <span className="text-slate-300">{tier.turnaround}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">Revisions</span>
                      <span className="text-slate-300">{tier.revisions === -1 ? 'Unlimited' : tier.revisions}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">Support</span>
                      <span className="text-slate-300">{SUPPORT_LABELS[tier.support]}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tier comparison table */}
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            <div className="px-5 py-3 border-b border-white/10">
              <span className="text-sm font-semibold text-white">Package Comparison</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-slate-400 py-3 px-5 font-medium">Feature</th>
                    {tiers.map((tier, i) => (
                      <th key={i} className={`text-center py-3 px-4 font-semibold ${i === 1 ? 'text-rose-400' : 'text-white'}`}>
                        {tier.name || tierNames[i]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 px-5 text-slate-400">Price</td>
                    {tiers.map((tier, i) => (
                      <td key={i} className="text-center py-2.5 px-4 font-semibold text-white">{formatCurrency(tier.price)}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 px-5 text-slate-400">Turnaround</td>
                    {tiers.map((tier, i) => (
                      <td key={i} className="text-center py-2.5 px-4">{tier.turnaround}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 px-5 text-slate-400">Revisions</td>
                    {tiers.map((tier, i) => (
                      <td key={i} className="text-center py-2.5 px-4">{tier.revisions === -1 ? 'Unlimited' : tier.revisions}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 px-5 text-slate-400">Support</td>
                    {tiers.map((tier, i) => (
                      <td key={i} className="text-center py-2.5 px-4">{SUPPORT_LABELS[tier.support]}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-2.5 px-5 text-slate-400">Deliverables</td>
                    {tiers.map((tier, i) => (
                      <td key={i} className="text-center py-2.5 px-4">{tier.deliverables.length} items</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Add-ons section */}
          {addOns.length > 0 && (
            <div className="bg-white/5 rounded-xl border border-white/10 p-5">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Optional Add-Ons
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {addOns.map((addon) => (
                  <div key={addon.id} className="bg-white/5 rounded-lg p-3 flex items-start justify-between">
                    <div>
                      <p className="text-sm text-white font-medium">{addon.name}</p>
                      {addon.description && (
                        <p className="text-xs text-slate-400 mt-0.5">{addon.description}</p>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-rose-400 flex-shrink-0 ml-3">
                      +{formatCurrency(addon.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Value positioning */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">{formatCurrency(tiers[0].price)}</p>
              <p className="text-xs text-slate-400 mt-1">Starting from</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-rose-400">{formatCurrency(tiers[1].price)}</p>
              <p className="text-xs text-slate-400 mt-1">Most Popular</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">{formatCurrency(tiers[2].price)}</p>
              <p className="text-xs text-slate-400 mt-1">Premium</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">{addOns.length}</p>
              <p className="text-xs text-slate-400 mt-1">Add-ons</p>
            </div>
          </div>

          {/* Pro tip */}
          <div className="bg-gradient-to-r from-rose-400/10 to-pink-500/10 border border-rose-400/20 rounded-xl p-5">
            <p className="text-sm text-rose-400 font-medium mb-2">Pro tip: Lead with the Standard package</p>
            <p className="text-sm text-slate-300">
              When presenting your packages to a client, start by explaining the Standard (middle)
              tier first. This anchors their expectation at the right price point. The Starter
              tier feels like a downgrade, while the Premium feels aspirational. Research shows
              60-70% of buyers choose the middle option when it is presented as the recommended
              choice — which is exactly where you want them.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => goToStep(3)}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Edit Add-Ons
            </button>
            <button
              onClick={() => goToStep(2)}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Edit Tiers
            </button>
            <button
              onClick={() => {
                setStep(1);
                setDetails({ category: '', hourlyRate: 0, typicalHours: 0, businessName: '' });
                setTiers([
                  { name: '', deliverables: [], turnaround: '', revisions: 0, support: 'email', price: 0 },
                  { name: '', deliverables: [], turnaround: '', revisions: 0, support: 'email_chat', price: 0 },
                  { name: '', deliverables: [], turnaround: '', revisions: 0, support: 'priority', price: 0 },
                ]);
                setAddOns([]);
                setTiersLoaded(false);
                setAddOnsLoaded(false);
                setNaming('starter');
              }}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Start New Package
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
