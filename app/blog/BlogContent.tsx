'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import { blogPosts } from './posts';

const CATEGORIES = ['All', 'Invoicing', 'Tax', 'Business', 'Getting Started', 'Getting Paid', 'Growth', 'Pricing', 'Profession Guides'] as const;

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const allPosts = Object.values(blogPosts).sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filteredPosts = activeCategory === 'All'
    ? allPosts
    : allPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen page-bg">
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
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            Resources for Australian Freelancers
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            InvoiceFlow <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-xl text-slate-300">
            Practical guides on invoicing, GST, ABN, and getting paid faster as a freelancer in Australia.
          </p>
        </div>

        {/* Profession Guides Hub CTA */}
        <Link href="/blog/profession-guides" className="block mb-8 group">
          <div className="glass rounded-2xl p-5 border border-teal-400/10 hover:border-teal-400/30 transition-all flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-xl shrink-0">
              📋
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-white group-hover:text-teal-400 transition-colors">
                Invoicing Guides by Profession
              </h3>
              <p className="text-sm text-slate-400">36+ profession-specific guides — find yours</p>
            </div>
            <span className="text-teal-400 group-hover:text-teal-300 text-sm shrink-0 hidden sm:block">Browse all →</span>
          </div>
        </Link>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => {
            const count = cat === 'All' ? allPosts.length : allPosts.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm px-4 py-2 rounded-full transition-all ${
                  activeCategory === cat
                    ? 'bg-teal-400/20 text-teal-400 border border-teal-400/30'
                    : 'glass text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {cat} <span className="text-xs opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Article count */}
        <p className="text-sm text-slate-500 mb-6">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          {activeCategory !== 'All' && ` in ${activeCategory}`}
        </p>

        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="glass rounded-2xl p-6 border border-white/5 hover:border-teal-400/20 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-teal-400 px-2 py-1 rounded-full bg-teal-400/10">{post.category}</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                  <span className="text-xs text-slate-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 heading-font group-hover:text-teal-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>

        {/* Tools CTA */}
        <div className="glass rounded-3xl p-8 text-center mt-16">
          <h3 className="text-2xl font-bold text-white heading-font mb-3">Free Tools for Freelancers</h3>
          <p className="text-slate-400 mb-6">Use our free calculators alongside these guides</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/gst-calculator" className="text-sm text-teal-400 hover:text-teal-300 px-4 py-2 rounded-full glass">GST Calculator</Link>
            <Link href="/tools/invoice-generator" className="text-sm text-teal-400 hover:text-teal-300 px-4 py-2 rounded-full glass">Invoice Generator</Link>
            <Link href="/tools/rate-calculator" className="text-sm text-teal-400 hover:text-teal-300 px-4 py-2 rounded-full glass">Rate Calculator</Link>
            <Link href="/tools/abn-lookup" className="text-sm text-teal-400 hover:text-teal-300 px-4 py-2 rounded-full glass">ABN Lookup</Link>
          </div>
        </div>
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
