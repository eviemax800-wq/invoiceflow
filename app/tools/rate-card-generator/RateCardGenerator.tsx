'use client';

import { useState, useRef } from 'react';

/* ---- Types ---- */

type Step = 1 | 2 | 3 | 4;

type Industry =
  | 'web_design'
  | 'development'
  | 'copywriting'
  | 'graphic_design'
  | 'photography'
  | 'video_production'
  | 'social_media'
  | 'consulting'
  | 'marketing'
  | 'other';

type PricingType = 'hourly' | 'per_project' | 'retainer' | 'day_rate';

type PaymentTerms = 'due_on_receipt' | 'net_7' | 'net_14' | 'net_30' | '50_upfront';

type Availability =
  | 'available_now'
  | 'limited'
  | 'booked_2_weeks'
  | 'booked_4_weeks'
  | 'by_enquiry';

type GSTOption = 'not_registered' | 'inclusive' | 'exclusive';

interface BusinessDetails {
  businessName: string;
  yourName: string;
  industry: Industry | '';
  abn: string;
  email: string;
  phone: string;
  website: string;
}

interface ServiceItem {
  id: string;
  name: string;
  pricingType: PricingType;
  price: number;
  isFrom: boolean;
  description: string;
}

interface TermsDetails {
  paymentTerms: PaymentTerms | '';
  paymentMethods: string[];
  availability: Availability | '';
  minimumProjectValue: number;
  gstOption: GSTOption;
  validUntil: string;
  additionalNotes: string;
}

/* ---- Constants ---- */

const INDUSTRY_LABELS: Record<Industry, string> = {
  web_design: 'Web Design',
  development: 'Development',
  copywriting: 'Copywriting',
  graphic_design: 'Graphic Design',
  photography: 'Photography',
  video_production: 'Video Production',
  social_media: 'Social Media',
  consulting: 'Consulting',
  marketing: 'Marketing',
  other: 'Other',
};

const PRICING_TYPE_LABELS: Record<PricingType, string> = {
  hourly: 'Hourly',
  per_project: 'Per Project',
  retainer: 'Retainer',
  day_rate: 'Day Rate',
};

const PAYMENT_TERMS_LABELS: Record<PaymentTerms, string> = {
  due_on_receipt: 'Due on Receipt',
  net_7: 'Net 7',
  net_14: 'Net 14',
  net_30: 'Net 30',
  '50_upfront': '50% Upfront',
};

const AVAILABILITY_LABELS: Record<Availability, string> = {
  available_now: 'Available Now',
  limited: 'Limited Availability',
  booked_2_weeks: 'Booked 2 Weeks Out',
  booked_4_weeks: 'Booked 4 Weeks Out',
  by_enquiry: 'By Enquiry Only',
};

const PAYMENT_METHODS = [
  'Bank Transfer',
  'Credit Card',
  'PayPal',
  'Stripe',
  'Cash',
];

const INDUSTRY_SUGGESTIONS: Record<Industry, { name: string; pricingType: PricingType; price: number; description: string }[]> = {
  web_design: [
    { name: 'Landing Page Design', pricingType: 'per_project', price: 1500, description: 'Single-page responsive design with contact form' },
    { name: 'Full Website Build', pricingType: 'per_project', price: 5000, description: 'Multi-page website with CMS integration' },
    { name: 'UI/UX Audit', pricingType: 'per_project', price: 800, description: 'Comprehensive review with actionable recommendations' },
    { name: 'Website Maintenance', pricingType: 'retainer', price: 500, description: 'Monthly updates, backups, and security monitoring' },
  ],
  development: [
    { name: 'Custom Web Application', pricingType: 'per_project', price: 8000, description: 'Full-stack application with database and API' },
    { name: 'API Development', pricingType: 'per_project', price: 4000, description: 'RESTful or GraphQL API with documentation' },
    { name: 'Code Review & Refactoring', pricingType: 'hourly', price: 150, description: 'In-depth code review with performance recommendations' },
    { name: 'Technical Consulting', pricingType: 'day_rate', price: 1200, description: 'Architecture planning and technology strategy' },
  ],
  copywriting: [
    { name: 'Website Copy', pricingType: 'per_project', price: 2000, description: 'Full website copywriting including SEO optimisation' },
    { name: 'Blog Post Writing', pricingType: 'per_project', price: 350, description: 'SEO-optimised blog post (800-1500 words)' },
    { name: 'Email Sequence', pricingType: 'per_project', price: 1200, description: '5-email nurture or welcome sequence' },
    { name: 'Content Retainer', pricingType: 'retainer', price: 2500, description: 'Monthly content package with strategy and reporting' },
  ],
  graphic_design: [
    { name: 'Logo Design', pricingType: 'per_project', price: 1200, description: '3 concepts with revisions and final files in all formats' },
    { name: 'Brand Identity Package', pricingType: 'per_project', price: 3500, description: 'Logo, colour palette, typography, and brand guidelines' },
    { name: 'Social Media Graphics', pricingType: 'retainer', price: 800, description: 'Monthly set of branded social media templates' },
    { name: 'Print Design', pricingType: 'per_project', price: 600, description: 'Business cards, brochures, or flyer design' },
  ],
  photography: [
    { name: 'Portrait Session', pricingType: 'per_project', price: 450, description: '1-hour shoot with 15 edited high-resolution images' },
    { name: 'Product Photography', pricingType: 'per_project', price: 800, description: 'Up to 20 products with white background and lifestyle shots' },
    { name: 'Event Coverage', pricingType: 'day_rate', price: 1500, description: 'Full-day event photography with same-week delivery' },
    { name: 'Monthly Content Shoots', pricingType: 'retainer', price: 1200, description: 'Monthly half-day shoot for ongoing content needs' },
  ],
  video_production: [
    { name: 'Promotional Video', pricingType: 'per_project', price: 3000, description: '60-90 second brand video with editing and colour grading' },
    { name: 'Social Media Reels', pricingType: 'per_project', price: 500, description: 'Short-form vertical video for Instagram/TikTok' },
    { name: 'Corporate Interview', pricingType: 'per_project', price: 1500, description: 'Filmed interview with professional editing and graphics' },
    { name: 'Monthly Video Package', pricingType: 'retainer', price: 4000, description: 'Ongoing video content creation and editing' },
  ],
  social_media: [
    { name: 'Social Media Management', pricingType: 'retainer', price: 1500, description: 'Monthly management of 2-3 platforms with content creation' },
    { name: 'Strategy & Audit', pricingType: 'per_project', price: 800, description: 'Social media audit with 90-day strategy document' },
    { name: 'Content Creation', pricingType: 'retainer', price: 1000, description: 'Monthly batch of posts, captions, and hashtag research' },
    { name: 'Paid Ads Management', pricingType: 'retainer', price: 1200, description: 'Monthly management of paid social campaigns' },
  ],
  consulting: [
    { name: 'Strategy Session', pricingType: 'hourly', price: 250, description: 'One-on-one strategic advisory session' },
    { name: 'Full-Day Workshop', pricingType: 'day_rate', price: 2500, description: 'Intensive workshop with action plan and follow-up' },
    { name: 'Advisory Retainer', pricingType: 'retainer', price: 3000, description: 'Ongoing strategic advisory with weekly check-ins' },
    { name: 'Business Audit', pricingType: 'per_project', price: 1500, description: 'Comprehensive business audit with recommendations report' },
  ],
  marketing: [
    { name: 'Marketing Strategy', pricingType: 'per_project', price: 3000, description: 'Full marketing strategy with channel recommendations' },
    { name: 'SEO Optimisation', pricingType: 'retainer', price: 1500, description: 'Monthly SEO management with keyword tracking and reporting' },
    { name: 'Email Marketing Setup', pricingType: 'per_project', price: 2000, description: 'Email platform setup with automations and templates' },
    { name: 'Marketing Retainer', pricingType: 'retainer', price: 4000, description: 'Ongoing marketing management across multiple channels' },
  ],
  other: [
    { name: 'Consultation', pricingType: 'hourly', price: 150, description: 'Professional consultation session' },
    { name: 'Project Delivery', pricingType: 'per_project', price: 2000, description: 'End-to-end project delivery' },
    { name: 'Ongoing Support', pricingType: 'retainer', price: 1000, description: 'Monthly retainer for ongoing support and services' },
    { name: 'Full-Day Engagement', pricingType: 'day_rate', price: 1200, description: 'Full day of dedicated professional services' },
  ],
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

function pricingLabel(type: PricingType): string {
  switch (type) {
    case 'hourly': return '/hr';
    case 'per_project': return '/project';
    case 'retainer': return '/month';
    case 'day_rate': return '/day';
  }
}

/* ---- Step Indicator ---- */

function StepIndicator({ step }: { step: Step }) {
  const steps = [
    { num: 1, label: 'Business' },
    { num: 2, label: 'Services' },
    { num: 3, label: 'Terms' },
    { num: 4, label: 'Rate Card' },
  ];

  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((s, i) => (
        <div key={s.num} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step > s.num
                  ? 'bg-amber-500 text-white'
                  : step === s.num
                  ? 'bg-gradient-to-br from-amber-400 to-yellow-500 text-white ring-4 ring-amber-400/20'
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
                step === s.num ? 'text-amber-400' : step > s.num ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-10 sm:w-16 h-0.5 mb-5 mx-1.5 transition-all ${
                step > s.num ? 'bg-amber-500' : 'bg-white/10'
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
  optional,
}: {
  label: string;
  value: string | number;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  hint?: string;
  prefix?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <Label>
        {label}
        {optional && <span className="text-slate-500 font-normal ml-1">(optional)</span>}
      </Label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">{prefix}</span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full bg-white/5 border border-white/10 rounded-lg ${prefix ? 'pl-8' : 'pl-4'} pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all`}
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
  optional,
}: {
  label: string;
  value: T | '';
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
  hint?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <Label>
        {label}
        {optional && <span className="text-slate-500 font-normal ml-1">(optional)</span>}
      </Label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all appearance-none"
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

function generateRateCardText(
  business: BusinessDetails,
  services: ServiceItem[],
  terms: TermsDetails,
): string {
  const divider = '────────────────────────────────────────────────────────────';
  let text = '';

  // Header
  text += 'RATE CARD\n';
  text += divider + '\n\n';
  if (business.businessName) text += `${business.businessName}\n`;
  if (business.yourName) text += `${business.yourName}\n`;
  if (business.industry) text += `${INDUSTRY_LABELS[business.industry]}\n`;
  if (business.abn) text += `ABN: ${business.abn}\n`;

  const contactParts: string[] = [];
  if (business.email) contactParts.push(business.email);
  if (business.phone) contactParts.push(business.phone);
  if (business.website) contactParts.push(business.website);
  if (contactParts.length > 0) text += `\n${contactParts.join('  |  ')}\n`;

  text += '\n' + divider + '\n\n';

  // Services table
  text += 'SERVICES & PRICING\n';
  text += divider + '\n\n';

  const nameWidth = Math.max(25, ...services.map((s) => s.name.length + 2));
  const typeWidth = 14;
  const rateWidth = 18;

  text += `  ${'Service'.padEnd(nameWidth)} ${'Type'.padEnd(typeWidth)} ${'Rate'}\n`;
  text += `  ${'─'.repeat(nameWidth)} ${'─'.repeat(typeWidth)} ${'─'.repeat(rateWidth)}\n`;

  services.forEach((service) => {
    const prefix = service.isFrom ? 'From ' : '';
    const rate = `${prefix}${formatCurrency(service.price)}${pricingLabel(service.pricingType)}`;
    text += `  ${service.name.padEnd(nameWidth)} ${PRICING_TYPE_LABELS[service.pricingType].padEnd(typeWidth)} ${rate}\n`;
    if (service.description) {
      text += `  ${''.padEnd(nameWidth)} ${service.description}\n`;
    }
  });

  text += '\n' + divider + '\n\n';

  // Terms
  text += 'TERMS & CONDITIONS\n';
  text += divider + '\n\n';

  if (terms.paymentTerms) {
    text += `  Payment Terms:      ${PAYMENT_TERMS_LABELS[terms.paymentTerms]}\n`;
  }
  if (terms.paymentMethods.length > 0) {
    text += `  Payment Methods:    ${terms.paymentMethods.join(', ')}\n`;
  }
  if (terms.availability) {
    text += `  Availability:       ${AVAILABILITY_LABELS[terms.availability]}\n`;
  }
  if (terms.minimumProjectValue > 0) {
    text += `  Minimum Project:    ${formatCurrency(terms.minimumProjectValue)}\n`;
  }
  if (terms.gstOption === 'inclusive') {
    text += `  GST:                All prices are GST-inclusive\n`;
  } else if (terms.gstOption === 'exclusive') {
    text += `  GST:                All prices are GST-exclusive (GST added at invoicing)\n`;
  }
  if (terms.validUntil) {
    text += `  Valid Until:        ${new Date(terms.validUntil).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}\n`;
  }

  if (terms.additionalNotes) {
    text += `\n  Notes:\n  ${terms.additionalNotes}\n`;
  }

  text += '\n' + divider + '\n';
  text += 'Rate card generated with InvoiceFlow — invoiceflow.au/tools/rate-card-generator';

  return text;
}

/* ---- Main Component ---- */

export default function RateCardGenerator() {
  const [step, setStep] = useState<Step>(1);
  const [copied, setCopied] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  /* Step 1: Business Details */
  const [business, setBusiness] = useState<BusinessDetails>({
    businessName: '',
    yourName: '',
    industry: '',
    abn: '',
    email: '',
    phone: '',
    website: '',
  });

  /* Step 2: Services */
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [servicesLoaded, setServicesLoaded] = useState(false);

  /* Step 3: Terms */
  const [terms, setTerms] = useState<TermsDetails>({
    paymentTerms: '',
    paymentMethods: [],
    availability: '',
    minimumProjectValue: 0,
    gstOption: 'not_registered',
    validUntil: '',
    additionalNotes: '',
  });

  /* Validations */
  const step1Valid =
    business.businessName.trim() !== '' &&
    business.yourName.trim() !== '' &&
    business.industry !== '';

  const step2Valid = services.filter((s) => s.name.trim() !== '' && s.price > 0).length >= 3;

  const step3Valid = terms.paymentTerms !== '' && terms.availability !== '';

  /* Load service suggestions */
  const loadServiceSuggestions = () => {
    if (!servicesLoaded && business.industry) {
      const suggestions = INDUSTRY_SUGGESTIONS[business.industry];
      const newServices = suggestions.map((s) => ({
        id: generateId(),
        name: s.name,
        pricingType: s.pricingType,
        price: s.price,
        isFrom: false,
        description: s.description,
      }));
      setServices(newServices);
      setServicesLoaded(true);
    }
  };

  /* Service management */
  const updateService = (id: string, field: keyof Omit<ServiceItem, 'id'>, value: string | number | boolean) => {
    setServices((prev) => prev.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  const addService = () => {
    setServices((prev) => [
      ...prev,
      { id: generateId(), name: '', pricingType: 'per_project', price: 0, isFrom: false, description: '' },
    ]);
  };

  const removeService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  /* Payment methods toggle */
  const togglePaymentMethod = (method: string) => {
    setTerms((prev) => ({
      ...prev,
      paymentMethods: prev.paymentMethods.includes(method)
        ? prev.paymentMethods.filter((m) => m !== method)
        : [...prev.paymentMethods, method],
    }));
  };

  /* Navigation */
  const goToStep = (target: Step) => {
    if (target === 2) loadServiceSuggestions();
    if (target === 4) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
    setStep(target);
  };

  /* Copy to clipboard */
  const copyRateCard = async () => {
    const text = generateRateCardText(business, services, terms);
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
  const printRateCard = () => {
    const text = generateRateCardText(business, services, terms);
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Rate Card — ${business.businessName || 'My Rate Card'}</title>
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

  return (
    <div className="glass rounded-2xl p-6 sm:p-8" ref={resultsRef}>
      <StepIndicator step={step} />

      {/* ---- STEP 1: Business Details ---- */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Business Details</h2>
            <p className="text-sm text-slate-400">
              Enter your business information. This appears at the top of your rate card and helps clients identify who they are working with.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <InputField
              label="Business name"
              value={business.businessName}
              onChange={(v) => setBusiness((p) => ({ ...p, businessName: v }))}
              placeholder="e.g. Smith Creative Studio"
            />
            <InputField
              label="Your name"
              value={business.yourName}
              onChange={(v) => setBusiness((p) => ({ ...p, yourName: v }))}
              placeholder="e.g. Jane Smith"
            />
            <div className="sm:col-span-2">
              <SelectField
                label="Industry / specialty"
                value={business.industry}
                onChange={(v) => {
                  setBusiness((p) => ({ ...p, industry: v }));
                  setServicesLoaded(false);
                }}
                options={Object.entries(INDUSTRY_LABELS).map(([value, label]) => ({
                  value: value as Industry,
                  label,
                }))}
                hint="Determines pre-populated service suggestions in the next step"
              />
            </div>
            <InputField
              label="ABN"
              value={business.abn}
              onChange={(v) => setBusiness((p) => ({ ...p, abn: v }))}
              placeholder="e.g. 12 345 678 901"
              optional
            />
            <InputField
              label="Email"
              value={business.email}
              onChange={(v) => setBusiness((p) => ({ ...p, email: v }))}
              placeholder="e.g. hello@studio.com.au"
              type="email"
              optional
            />
            <InputField
              label="Phone"
              value={business.phone}
              onChange={(v) => setBusiness((p) => ({ ...p, phone: v }))}
              placeholder="e.g. 0400 123 456"
              type="tel"
              optional
            />
            <InputField
              label="Website URL"
              value={business.website}
              onChange={(v) => setBusiness((p) => ({ ...p, website: v }))}
              placeholder="e.g. www.studio.com.au"
              optional
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => goToStep(2)}
              disabled={!step1Valid}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm font-semibold rounded-lg hover:from-amber-400 hover:to-yellow-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next: Add Services & Pricing
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 2: Services & Pricing ---- */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Services & Pricing</h2>
            <p className="text-sm text-slate-400">
              Add your services with pricing. We have pre-populated suggestions based on your
              {business.industry ? ` ${INDUSTRY_LABELS[business.industry].toLowerCase()}` : ''} specialty — customise everything to match your actual rates. At least 3 services required.
            </p>
          </div>

          <div className="space-y-4">
            {services.map((service, i) => (
              <div key={service.id} className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full px-2.5 py-0.5">
                    Service {i + 1}
                  </span>
                  <button
                    onClick={() => removeService(service.id)}
                    className="text-slate-500 hover:text-red-400 transition-colors p-1"
                    title="Remove service"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="sm:col-span-2">
                    <InputField
                      label="Service name"
                      value={service.name}
                      onChange={(v) => updateService(service.id, 'name', v)}
                      placeholder="e.g. Website Design"
                    />
                  </div>

                  <div>
                    <Label>Pricing type</Label>
                    <div className="grid grid-cols-2 gap-2 mt-1.5">
                      {(Object.entries(PRICING_TYPE_LABELS) as [PricingType, string][]).map(([key, label]) => (
                        <button
                          key={key}
                          onClick={() => updateService(service.id, 'pricingType', key)}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                            service.pricingType === key
                              ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white'
                              : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10'
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <InputField
                      label={`Price (AUD${pricingLabel(service.pricingType)})`}
                      value={service.price || ''}
                      onChange={(v) => updateService(service.id, 'price', Number(v) || 0)}
                      type="number"
                      prefix="$"
                      placeholder="0"
                    />
                    <button
                      onClick={() => updateService(service.id, 'isFrom', !service.isFrom)}
                      className={`mt-2 flex items-center gap-2 text-xs transition-all ${
                        service.isFrom ? 'text-amber-400' : 'text-slate-500 hover:text-slate-400'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                          service.isFrom
                            ? 'bg-amber-500 border-amber-500'
                            : 'border-white/20 bg-white/5'
                        }`}
                      >
                        {service.isFrom && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      Show as &quot;From ${service.price || '...'}&quot;
                    </button>
                  </div>

                  <div className="sm:col-span-2">
                    <InputField
                      label="Brief description"
                      value={service.description}
                      onChange={(v) => updateService(service.id, 'description', v)}
                      placeholder="e.g. Multi-page website with CMS integration"
                      optional
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={addService}
              className="w-full py-3 border border-dashed border-white/20 rounded-xl text-sm text-slate-400 hover:text-amber-400 hover:border-amber-400/30 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Custom Service
            </button>
          </div>

          {/* Validation feedback */}
          {services.length > 0 && !step2Valid && (
            <div className="bg-amber-400/10 border border-amber-400/20 rounded-xl p-4">
              <p className="text-sm text-amber-400">
                Add at least 3 services with names and prices to continue.
                Currently {services.filter((s) => s.name.trim() !== '' && s.price > 0).length} of 3 complete.
              </p>
            </div>
          )}

          <div className="flex justify-between pt-2">
            <button
              onClick={() => goToStep(1)}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => goToStep(3)}
              disabled={!step2Valid}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm font-semibold rounded-lg hover:from-amber-400 hover:to-yellow-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next: Terms & Availability
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 3: Terms & Availability ---- */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Terms & Availability</h2>
            <p className="text-sm text-slate-400">
              Set your payment terms, accepted methods, and current availability. These details help clients understand how to engage with you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <SelectField
              label="Payment terms"
              value={terms.paymentTerms}
              onChange={(v) => setTerms((p) => ({ ...p, paymentTerms: v }))}
              options={Object.entries(PAYMENT_TERMS_LABELS).map(([value, label]) => ({
                value: value as PaymentTerms,
                label,
              }))}
            />
            <SelectField
              label="Current availability"
              value={terms.availability}
              onChange={(v) => setTerms((p) => ({ ...p, availability: v }))}
              options={Object.entries(AVAILABILITY_LABELS).map(([value, label]) => ({
                value: value as Availability,
                label,
              }))}
            />
          </div>

          {/* Payment methods checkboxes */}
          <div>
            <Label>Accepted payment methods</Label>
            <div className="flex flex-wrap gap-2 mt-1.5">
              {PAYMENT_METHODS.map((method) => (
                <button
                  key={method}
                  onClick={() => togglePaymentMethod(method)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    terms.paymentMethods.includes(method)
                      ? 'bg-amber-500/20 border border-amber-500/30 text-amber-400'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                      terms.paymentMethods.includes(method)
                        ? 'bg-amber-500 border-amber-500'
                        : 'border-white/20 bg-white/5'
                    }`}
                  >
                    {terms.paymentMethods.includes(method) && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  {method}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <InputField
              label="Minimum project value"
              value={terms.minimumProjectValue || ''}
              onChange={(v) => setTerms((p) => ({ ...p, minimumProjectValue: Number(v) || 0 }))}
              type="number"
              prefix="$"
              placeholder="e.g. 500"
              optional
              hint="Leave blank if you have no minimum"
            />
            <InputField
              label="Valid until"
              value={terms.validUntil}
              onChange={(v) => setTerms((p) => ({ ...p, validUntil: v }))}
              type="date"
              optional
              hint="Date this rate card expires"
            />
          </div>

          {/* GST toggle */}
          <div>
            <Label>GST registration</Label>
            <div className="flex flex-wrap gap-2 mt-1.5">
              {[
                { value: 'not_registered' as const, label: 'Not GST Registered' },
                { value: 'inclusive' as const, label: 'GST Registered — Prices GST-inclusive' },
                { value: 'exclusive' as const, label: 'GST Registered — Prices GST-exclusive' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setTerms((p) => ({ ...p, gstOption: option.value }))}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    terms.gstOption === option.value
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            {terms.gstOption === 'inclusive' && (
              <p className="text-xs text-amber-400 mt-2">Your rate card will note: &quot;All prices are GST-inclusive&quot;</p>
            )}
            {terms.gstOption === 'exclusive' && (
              <p className="text-xs text-amber-400 mt-2">Your rate card will note: &quot;All prices are GST-exclusive (GST added at invoicing)&quot;</p>
            )}
          </div>

          {/* Additional notes */}
          <div>
            <Label>
              Additional notes
              <span className="text-slate-500 font-normal ml-1">(optional)</span>
            </Label>
            <textarea
              value={terms.additionalNotes}
              onChange={(e) => setTerms((p) => ({ ...p, additionalNotes: e.target.value }))}
              placeholder="e.g. Travel costs billed separately for on-site work outside Melbourne metro area."
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all resize-none"
            />
          </div>

          <div className="flex justify-between pt-2">
            <button
              onClick={() => goToStep(2)}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => goToStep(4)}
              disabled={!step3Valid}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm font-semibold rounded-lg hover:from-amber-400 hover:to-yellow-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Generate Rate Card
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 4: Generated Rate Card ---- */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Your Rate Card</h2>
            <p className="text-sm text-slate-400">
              Here is your professional rate card. Copy the text version to paste into emails or proposals, or print a clean version to share with clients.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={copyRateCard}
              className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
                copied
                  ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                  : 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-400 hover:to-yellow-400'
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
                  Copy as Text
                </>
              )}
            </button>
            <button
              onClick={printRateCard}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </button>
          </div>

          {/* Rate Card Visual */}
          <div className="bg-gradient-to-b from-white/[0.07] to-white/[0.03] rounded-2xl border border-white/10 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-amber-400/10 to-yellow-500/10 border-b border-white/10 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white heading-font">{business.businessName}</h3>
                  <p className="text-slate-300 mt-1">{business.yourName}</p>
                  {business.industry && (
                    <p className="text-sm text-amber-400 mt-1">{INDUSTRY_LABELS[business.industry]}</p>
                  )}
                </div>
                <div className="text-sm text-slate-400 sm:text-right space-y-0.5">
                  {business.abn && <p>ABN: {business.abn}</p>}
                  {business.email && <p>{business.email}</p>}
                  {business.phone && <p>{business.phone}</p>}
                  {business.website && <p>{business.website}</p>}
                </div>
              </div>
            </div>

            {/* Services Table */}
            <div className="p-6 sm:p-8">
              <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-4">Services & Pricing</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-slate-400 py-3 pr-4 font-medium">Service</th>
                      <th className="text-left text-slate-400 py-3 px-4 font-medium hidden sm:table-cell">Type</th>
                      <th className="text-right text-slate-400 py-3 px-4 font-medium">Rate</th>
                      <th className="text-left text-slate-400 py-3 pl-4 font-medium hidden md:table-cell">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.filter((s) => s.name.trim() !== '').map((service, i) => (
                      <tr
                        key={service.id}
                        className={`border-b border-white/5 ${i % 2 === 1 ? 'bg-white/[0.02]' : ''}`}
                      >
                        <td className="py-3 pr-4">
                          <span className="text-white font-medium">{service.name}</span>
                          {/* Mobile-only description */}
                          {service.description && (
                            <p className="text-xs text-slate-500 mt-0.5 md:hidden">{service.description}</p>
                          )}
                        </td>
                        <td className="py-3 px-4 text-slate-400 hidden sm:table-cell">
                          {PRICING_TYPE_LABELS[service.pricingType]}
                        </td>
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <span className="text-white font-semibold">
                            {service.isFrom && <span className="text-slate-400 font-normal text-xs mr-1">From</span>}
                            {formatCurrency(service.price)}
                          </span>
                          <span className="text-slate-500 text-xs ml-0.5">{pricingLabel(service.pricingType)}</span>
                        </td>
                        <td className="py-3 pl-4 text-slate-400 text-xs hidden md:table-cell">
                          {service.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Terms Section */}
            <div className="border-t border-white/10 p-6 sm:p-8">
              <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-4">Terms & Availability</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {terms.paymentTerms && (
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-xs text-slate-500 mb-1">Payment Terms</p>
                    <p className="text-sm text-white font-medium">{PAYMENT_TERMS_LABELS[terms.paymentTerms]}</p>
                  </div>
                )}
                {terms.paymentMethods.length > 0 && (
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-xs text-slate-500 mb-1">Payment Methods</p>
                    <p className="text-sm text-white font-medium">{terms.paymentMethods.join(', ')}</p>
                  </div>
                )}
                {terms.availability && (
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-xs text-slate-500 mb-1">Availability</p>
                    <p className="text-sm text-white font-medium">{AVAILABILITY_LABELS[terms.availability]}</p>
                  </div>
                )}
                {terms.minimumProjectValue > 0 && (
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-xs text-slate-500 mb-1">Minimum Project Value</p>
                    <p className="text-sm text-white font-medium">{formatCurrency(terms.minimumProjectValue)}</p>
                  </div>
                )}
              </div>

              {/* GST note */}
              {terms.gstOption !== 'not_registered' && (
                <div className="mt-4 bg-amber-400/10 border border-amber-400/20 rounded-xl p-4">
                  <p className="text-sm text-amber-400 font-medium">
                    {terms.gstOption === 'inclusive'
                      ? 'All prices are GST-inclusive.'
                      : 'All prices are GST-exclusive. GST will be added at invoicing.'}
                  </p>
                </div>
              )}

              {/* Valid until */}
              {terms.validUntil && (
                <p className="text-xs text-slate-500 mt-4">
                  This rate card is valid until{' '}
                  {new Date(terms.validUntil).toLocaleDateString('en-AU', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                  .
                </p>
              )}

              {/* Additional notes */}
              {terms.additionalNotes && (
                <div className="mt-4 bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-slate-500 mb-1">Additional Notes</p>
                  <p className="text-sm text-slate-300">{terms.additionalNotes}</p>
                </div>
              )}
            </div>

            {/* Card Footer */}
            <div className="border-t border-white/10 px-6 sm:px-8 py-4">
              <p className="text-xs text-slate-600 text-center">
                Rate card generated with InvoiceFlow
              </p>
            </div>
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">
                {services.filter((s) => s.name.trim() !== '').length}
              </p>
              <p className="text-xs text-slate-400 mt-1">Services Listed</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-amber-400">
                {formatCurrency(Math.min(...services.filter((s) => s.price > 0).map((s) => s.price)))}
              </p>
              <p className="text-xs text-slate-400 mt-1">Lowest Rate</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">
                {formatCurrency(Math.max(...services.filter((s) => s.price > 0).map((s) => s.price)))}
              </p>
              <p className="text-xs text-slate-400 mt-1">Highest Rate</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-white">
                {new Set(services.map((s) => s.pricingType)).size}
              </p>
              <p className="text-xs text-slate-400 mt-1">Pricing Types</p>
            </div>
          </div>

          {/* Pro tip */}
          <div className="bg-gradient-to-r from-amber-400/10 to-yellow-500/10 border border-amber-400/20 rounded-xl p-5">
            <p className="text-sm text-amber-400 font-medium mb-2">Pro tip: Send your rate card early</p>
            <p className="text-sm text-slate-300">
              Share your rate card with prospective clients before the first call. This pre-qualifies
              leads — clients who cannot afford your rates self-select out, saving you time on discovery
              calls that go nowhere. Clients who do book a call already know your price range, which
              means the conversation focuses on scope and fit rather than budget negotiations.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => goToStep(3)}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Edit Terms
            </button>
            <button
              onClick={() => goToStep(2)}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Edit Services
            </button>
            <button
              onClick={() => {
                setStep(1);
                setBusiness({
                  businessName: '',
                  yourName: '',
                  industry: '',
                  abn: '',
                  email: '',
                  phone: '',
                  website: '',
                });
                setServices([]);
                setTerms({
                  paymentTerms: '',
                  paymentMethods: [],
                  availability: '',
                  minimumProjectValue: 0,
                  gstOption: 'not_registered',
                  validUntil: '',
                  additionalNotes: '',
                });
                setServicesLoaded(false);
              }}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Start New Rate Card
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
