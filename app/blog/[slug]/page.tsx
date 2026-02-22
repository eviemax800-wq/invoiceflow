import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';
import { blogPosts } from '../posts';

const allSlugs = Object.keys(blogPosts);

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: 'article',
    },
  };
}

function parseDate(dateStr: string): string {
  // Convert "February 2026" to "2026-02-01"
  const months: Record<string, string> = {
    January: '01', February: '02', March: '03', April: '04', May: '05', June: '06',
    July: '07', August: '08', September: '09', October: '10', November: '11', December: '12',
  };
  const parts = dateStr.split(' ');
  if (parts.length === 2 && months[parts[0]]) {
    return `${parts[1]}-${months[parts[0]]}-01`;
  }
  return '2026-02-01';
}

function readTimeMinutes(readTime: string): number {
  const match = readTime.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 8;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) notFound();

  // Get related posts: same category first, then other categories
  const currentCategory = post.category;
  const sameCategoryPosts = allSlugs.filter((s) => s !== slug && blogPosts[s].category === currentCategory);
  const otherCategoryPosts = allSlugs.filter((s) => s !== slug && blogPosts[s].category !== currentCategory);
  const relatedPosts = [...sameCategoryPosts.slice(0, 3), ...otherCategoryPosts.slice(0, Math.max(0, 3 - sameCategoryPosts.length))].slice(0, 3);

  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://invoiceflow-teal.vercel.app';
  const articleUrl = `${siteUrl}/blog/${slug}`;
  const isoDate = parseDate(post.date);
  const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).length;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seoDescription,
    url: articleUrl,
    datePublished: isoDate,
    dateModified: isoDate,
    wordCount,
    timeRequired: `PT${readTimeMinutes(post.readTime)}M`,
    articleSection: post.category,
    inLanguage: 'en-AU',
    author: {
      '@type': 'Organization',
      name: 'InvoiceFlow',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'InvoiceFlow',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/icon.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    isAccessibleForFree: true,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: articleUrl },
    ],
  };

  return (
    <div className="min-h-screen page-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
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

      <main className="container mx-auto px-4 py-16 max-w-3xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span>/</span>
          <span className="text-slate-200">{post.category}</span>
        </div>

        {/* Article Header */}
        <article>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-teal-400 px-2 py-1 rounded-full bg-teal-400/10">{post.category}</span>
              <span className="text-xs text-slate-500">{post.readTime}</span>
              <span className="text-xs text-slate-500">{post.date}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white heading-font mb-4">
              {post.title}
            </h2>
            <p className="text-slate-400">{post.excerpt}</p>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-invert prose-slate max-w-none
              prose-headings:heading-font prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pt-6 prose-h2:border-t prose-h2:border-white/10
              prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-4
              prose-li:text-slate-300 prose-li:leading-relaxed
              prose-strong:text-white
              prose-a:text-teal-400 prose-a:no-underline hover:prose-a:text-teal-300
              prose-table:border-collapse prose-table:w-full
              prose-td:py-3 prose-td:px-4 prose-td:border-b prose-td:border-white/5
              prose-th:py-3 prose-th:px-4 prose-th:border-b prose-th:border-white/10 prose-th:text-slate-400 prose-th:text-left prose-th:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* CTA */}
        <div className="glass rounded-3xl p-8 text-center mt-16 mb-12">
          <h3 className="text-2xl font-bold text-white heading-font mb-3">Start Invoicing Smarter</h3>
          <p className="text-slate-400 mb-6">AI-powered invoicing for Australian freelancers. Free to start.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button size="lg">Get Started Free</Button>
            </Link>
            <Link href="/tools">
              <Button variant="secondary" size="lg">Free Tools</Button>
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div>
            <h4 className="text-lg font-bold text-white heading-font mb-4">Related Articles</h4>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedPosts.map((s) => (
                <Link key={s} href={`/blog/${s}`} className="block group">
                  <div className="glass rounded-xl p-4 border border-white/5 hover:border-teal-400/20 transition-all h-full">
                    <span className="text-xs text-teal-400 mb-2 block">{blogPosts[s].category}</span>
                    <h5 className="text-sm font-semibold text-white group-hover:text-teal-400 transition-colors leading-snug">{blogPosts[s].title}</h5>
                    <p className="text-xs text-slate-500 mt-2">{blogPosts[s].readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link href="/blog" className="text-sm text-teal-400 hover:text-teal-300">View all articles →</Link>
            </div>
          </div>
        )}
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
