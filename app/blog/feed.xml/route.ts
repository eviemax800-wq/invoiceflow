import { blogPosts } from '../posts';

export const dynamic = 'force-static';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function parseDate(dateStr: string): string {
  const months: Record<string, string> = {
    January: '01', February: '02', March: '03', April: '04', May: '05', June: '06',
    July: '07', August: '08', September: '09', October: '10', November: '11', December: '12',
  };
  const parts = dateStr.split(' ');
  if (parts.length === 2 && months[parts[0]]) {
    return new Date(`${parts[1]}-${months[parts[0]]}-01T00:00:00+11:00`).toUTCString();
  }
  return new Date('2026-02-01T00:00:00+11:00').toUTCString();
}

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://invoiceflow-teal.vercel.app';
  const posts = Object.values(blogPosts);

  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${parseDate(post.date)}</pubDate>
    </item>`
    )
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>InvoiceFlow Blog — Freelancing Guides for Australians</title>
    <link>${siteUrl}/blog</link>
    <description>Practical guides on invoicing, tax, pricing, and business skills for Australian freelancers and sole traders.</description>
    <language>en-AU</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/icon.png</url>
      <title>InvoiceFlow Blog</title>
      <link>${siteUrl}/blog</link>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
