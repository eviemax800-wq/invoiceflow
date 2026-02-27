'use client';

import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'tools' }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className="my-12 mx-auto max-w-2xl rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-900/20 to-blue-900/20 p-8 text-center">
        <div className="text-3xl mb-3">&#10003;</div>
        <h3 className="text-xl font-bold text-white mb-2">You&apos;re in!</h3>
        <p className="text-slate-300">
          We&apos;ll send you freelancing tips, tax reminders, and new tool alerts. No spam, unsubscribe anytime.
        </p>
      </section>
    );
  }

  return (
    <section className="my-12 mx-auto max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          Free freelancing tips &amp; tax reminders
        </h3>
        <p className="text-slate-400 text-sm">
          Join Australian freelancers getting weekly tips on invoicing, tax deductions, and growing their business.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 px-6 py-3 font-semibold text-white transition-all hover:from-teal-400 hover:to-blue-400 disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-3 text-center text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
      <p className="mt-4 text-center text-xs text-slate-500">
        No spam. Unsubscribe anytime. We respect your privacy.
      </p>
    </section>
  );
}
