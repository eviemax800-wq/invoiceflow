import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://invoiceflow-teal.vercel.app';

  const competitors = ['quickbooks', 'xero', 'myob', 'zoho', 'freshbooks', 'wave', 'bonsai', 'honeybook'];
  const blogSlugs = ['how-to-create-tax-invoice-australia', 'gst-guide-australian-freelancers', 'freelance-rates-australia', 'invoicing-international-clients-australia', 'best-invoicing-software-australia', 'sole-trader-vs-company-australia', 'why-freelancers-dont-need-accounting-software', 'get-clients-pay-invoices-faster', 'freelance-invoice-checklist', 'tax-deductions-australian-freelancers', 'bas-guide-australian-freelancers', 'how-to-register-abn-australia', 'superannuation-for-freelancers-australia', 'late-payment-fees-australia-freelancers', 'how-to-start-freelancing-australia', 'freelance-contract-australia', 'record-keeping-freelancers-australia', 'how-to-quote-clients-freelancer', 'how-much-tax-freelancers-pay-australia', 'freelancer-insurance-guide-australia', 'how-to-accept-payments-freelancer-australia', 'sole-trader-tax-return-australia', 'contractor-vs-employee-australia', 'cashflow-management-freelancers-australia', 'working-from-home-tax-deductions-australia', 'freelancing-vs-full-time-employment-australia', 'how-to-price-freelance-services-australia'];

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
