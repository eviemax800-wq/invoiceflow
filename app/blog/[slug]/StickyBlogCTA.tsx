'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function StickyBlogCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling 40% of the page
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      setVisible(scrollPercent > 0.4)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none">
      <div className="max-w-2xl mx-auto pointer-events-auto">
        <div className="glass rounded-2xl p-4 border border-teal-400/20 shadow-2xl shadow-black/50 flex items-center justify-between gap-4 backdrop-blur-xl bg-slate-900/90">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white">Ready to simplify your invoicing?</p>
            <p className="text-xs text-slate-400 mt-0.5 hidden sm:block">Free for up to 5 invoices/month. No credit card required.</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/signup"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 transition-all"
            >
              Try Free
            </Link>
            <button
              onClick={() => setDismissed(true)}
              className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors"
              aria-label="Dismiss"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
