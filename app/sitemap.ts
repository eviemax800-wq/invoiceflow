import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://invoiceflow-teal.vercel.app';

  const competitors = ['quickbooks', 'xero', 'myob', 'zoho', 'freshbooks', 'wave', 'bonsai', 'honeybook'];
  const blogSlugs = ['how-to-create-tax-invoice-australia', 'gst-guide-australian-freelancers', 'freelance-rates-australia', 'invoicing-international-clients-australia', 'best-invoicing-software-australia', 'sole-trader-vs-company-australia', 'why-freelancers-dont-need-accounting-software', 'get-clients-pay-invoices-faster', 'freelance-invoice-checklist', 'tax-deductions-australian-freelancers', 'bas-guide-australian-freelancers', 'how-to-register-abn-australia', 'superannuation-for-freelancers-australia', 'late-payment-fees-australia-freelancers', 'how-to-start-freelancing-australia', 'freelance-contract-australia', 'record-keeping-freelancers-australia', 'how-to-quote-clients-freelancer', 'how-much-tax-freelancers-pay-australia', 'freelancer-insurance-guide-australia', 'how-to-accept-payments-freelancer-australia', 'sole-trader-tax-return-australia', 'contractor-vs-employee-australia', 'cashflow-management-freelancers-australia', 'working-from-home-tax-deductions-australia', 'freelancing-vs-full-time-employment-australia', 'how-to-price-freelance-services-australia', 'best-business-bank-accounts-freelancers-australia', 'how-to-find-freelance-clients-australia', 'freelance-portfolio-guide-australia', 'common-invoicing-mistakes-freelancers', 'how-to-chase-overdue-invoices-australia', 'freelancer-tax-calendar-australia-2026', 'payment-reminder-email-templates-freelancers', 'payg-instalments-australian-freelancers', 'how-to-handle-scope-creep-freelancer', 'how-to-raise-freelance-rates-australia', 'retainer-agreements-australian-freelancers', 'time-tracking-australian-freelancers', 'how-to-write-freelance-proposal-australia', 'freelance-client-red-flags-australia', 'how-to-fire-client-professionally-freelancer', 'freelance-bookkeeping-australia', 'invoice-payment-terms-explained', 'how-to-handle-client-disputes-freelancer-australia', 'freelance-tools-stack-australia', 'how-to-get-repeat-clients-freelancer', 'digital-marketing-freelancers-australia', 'ai-tools-for-freelancers-australia', 'transition-full-time-to-freelancing-australia', 'freelance-tax-mistakes-australia', 'deposit-invoicing-milestone-payments-freelancer', 'freelance-networking-australia', 'financial-planning-australian-freelancers', 'invoice-numbering-system-freelancers', 'invoice-email-templates-freelancers', 'intellectual-property-rights-freelancers-australia', 'managing-multiple-freelance-clients-australia', 'recurring-invoices-guide-freelancers', 'setting-boundaries-freelance-clients', 'freelance-business-plan-australia', 'client-onboarding-checklist-freelancers', 'freelance-work-life-balance-burnout-australia', 'how-to-send-first-invoice-freelancer', 'subcontracting-guide-australian-freelancers', 'credit-notes-refunds-australian-freelancers', 'eofy-tax-prep-checklist-freelancers-australia', 'freelance-project-management-deliver-on-time', 'vehicle-travel-expenses-freelancers-australia', 'personal-branding-freelancers-australia', 'how-to-scale-freelance-business-australia', 'freelance-negotiation-skills-australia', 'digital-products-freelancer-australia', 'freelance-cybersecurity-australia', 'email-marketing-freelancers-australia', 'invoice-vs-receipt-vs-quote-difference', 'proforma-invoice-guide-australian-freelancers', 'how-to-niche-down-freelancer-australia', 'government-grants-funding-australian-freelancers', 'non-paying-clients-legal-options-australia', 'freelancing-on-visa-australia-work-rights-tax', 'ato-audit-guide-australian-freelancers', 'professional-development-tax-deductions-freelancers-australia', 'diversify-freelance-income-streams-australia', 'freelancing-while-employed-australia', 'gst-registration-threshold-australian-freelancers', 'invoicing-expenses-reimbursements-freelancer-australia', 'invoicing-graphic-designers-australia', 'invoicing-web-developers-australia', 'invoicing-photographers-australia', 'invoicing-copywriters-content-writers-australia', 'invoicing-social-media-managers-australia', 'invoicing-videographers-video-editors-australia', 'invoicing-consultants-australia', 'invoicing-bookkeepers-bas-agents-australia', 'invoicing-personal-trainers-fitness-australia', 'invoicing-virtual-assistants-australia', 'invoicing-interior-designers-australia', 'invoicing-electricians-tradespeople-australia', 'invoicing-massage-therapists-allied-health-australia', 'invoicing-tutors-private-teachers-australia', 'invoicing-makeup-artists-hair-stylists-australia', 'invoicing-cleaners-cleaning-business-australia', 'invoicing-yoga-pilates-instructors-australia', 'invoicing-carpenters-builders-australia', 'invoicing-musicians-djs-australia', 'invoicing-architects-draftspeople-australia', 'invoicing-event-planners-wedding-coordinators-australia'];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tools`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tools/gst-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tools/invoice-generator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tools/rate-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tools/abn-lookup`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...competitors.map((slug) => ({
      url: `${baseUrl}/compare/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    { url: `${baseUrl}/login`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/signup`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
