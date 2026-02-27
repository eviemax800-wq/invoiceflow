'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useState } from 'react';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://invoiceflow-teal.vercel.app/contact' },
  ],
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch {
      // Fire-and-forget — graceful degradation
    }

    setSending(false);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen page-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <span className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</span>
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="/features" className="text-sm text-slate-300 hover:text-white transition-colors hidden sm:inline">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-slate-300 hover:text-white transition-colors hidden sm:inline">
              Pricing
            </Link>
            <Link href="/tools" className="text-sm text-slate-300 hover:text-white transition-colors hidden sm:inline">
              Free Tools
            </Link>
            <Link href="/signup">
              <Button>Get Started Free</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              We respond within 24 hours
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white heading-font leading-tight">
              Get in <span className="gradient-text">touch</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto mt-4">
              Have a question about InvoiceFlow, need help with your account, or want to suggest a feature? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message sent</h3>
                  <p className="text-slate-400">
                    We&apos;ll get back to you within 24 hours. In the meantime, check out our{' '}
                    <Link href="/tools" className="text-teal-400 hover:text-teal-300">free tools</Link> or{' '}
                    <Link href="/blog" className="text-teal-400 hover:text-teal-300">blog</Link>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-slate-300 mb-1.5">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-slate-300 mb-1.5">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm text-slate-300 mb-1.5">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-teal-500/50 transition-colors"
                    >
                      <option value="general" className="bg-slate-900">General enquiry</option>
                      <option value="support" className="bg-slate-900">Account support</option>
                      <option value="feature" className="bg-slate-900">Feature request</option>
                      <option value="bug" className="bg-slate-900">Report a bug</option>
                      <option value="partnership" className="bg-slate-900">Partnership opportunity</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-slate-300 mb-1.5">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 transition-colors resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-white mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-slate-400 text-sm">support@invoiceflow.com.au</p>
                <p className="text-slate-500 text-xs mt-1">We respond within 24 hours on business days.</p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">Self-Service Help</h3>
                <p className="text-slate-400 text-sm">
                  Browse our <Link href="/blog" className="text-teal-400 hover:text-teal-300">125+ articles</Link> covering
                  invoicing, GST, tax, and running a freelance business in Australia.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 3.03 1.35-5.64L2.3 8.08l5.77-.5L11.42 2.5l3.35 5.08 5.77.5-4.37 4.48 1.35 5.64-5.1-3.03z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">Free Business Tools</h3>
                <p className="text-slate-400 text-sm">
                  Need a quick answer? Try our <Link href="/tools" className="text-teal-400 hover:text-teal-300">100+ free tools</Link> —
                  GST calculators, invoice generators, contract templates, and more.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 p-6">
                <h3 className="text-white font-semibold mb-1">Based in Melbourne, Australia</h3>
                <p className="text-slate-400 text-sm">
                  InvoiceFlow is built by ASDES, an Australian technology company.
                  We understand Australian tax requirements because we live and work here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <Link href="/features" className="hover:text-slate-300 transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-slate-300 transition-colors">Pricing</Link>
            <Link href="/compare" className="hover:text-slate-300 transition-colors">Compare</Link>
            <Link href="/tools" className="hover:text-slate-300 transition-colors">Free Tools</Link>
            <Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-slate-300 transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
