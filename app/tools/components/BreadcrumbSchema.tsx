import { tools } from '../tools-data';

export default function BreadcrumbSchema({ slug }: { slug: string }) {
  const siteUrl = 'https://invoiceflow-teal.vercel.app';
  const tool = tools.find((t) => t.href === `/tools/${slug}`);
  const toolName = tool?.title || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Free Tools', item: `${siteUrl}/tools` },
      { '@type': 'ListItem', position: 3, name: toolName, item: `${siteUrl}/tools/${slug}` },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
    />
  );
}
