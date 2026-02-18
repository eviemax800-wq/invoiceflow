import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/pricing', '/privacy', '/terms'],
        disallow: ['/dashboard', '/admin', '/api/', '/auth/'],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_APP_URL || 'https://invoiceflow.app'}/sitemap.xml`,
  };
}
