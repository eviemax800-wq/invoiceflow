import { ImageResponse } from 'next/og'
import { blogMeta } from '../blog-meta'

export const runtime = 'edge'
export const alt = 'InvoiceFlow Blog'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return Object.keys(blogMeta).map((slug) => ({ slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const meta = blogMeta[slug]

  const title = meta?.title || 'InvoiceFlow Blog'
  const category = meta?.category || 'Blog'
  const readTime = meta?.readTime || ''

  // Category colors
  const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
    'Invoicing': { bg: 'rgba(59, 130, 246, 0.15)', border: 'rgba(59, 130, 246, 0.3)', text: '#93c5fd' },
    'Tax': { bg: 'rgba(239, 68, 68, 0.15)', border: 'rgba(239, 68, 68, 0.3)', text: '#fca5a5' },
    'Business': { bg: 'rgba(168, 85, 247, 0.15)', border: 'rgba(168, 85, 247, 0.3)', text: '#c4b5fd' },
    'Getting Started': { bg: 'rgba(16, 185, 129, 0.15)', border: 'rgba(16, 185, 129, 0.3)', text: '#6ee7b7' },
    'Getting Paid': { bg: 'rgba(245, 158, 11, 0.15)', border: 'rgba(245, 158, 11, 0.3)', text: '#fcd34d' },
    'Growth': { bg: 'rgba(14, 165, 233, 0.15)', border: 'rgba(14, 165, 233, 0.3)', text: '#7dd3fc' },
    'Pricing': { bg: 'rgba(236, 72, 153, 0.15)', border: 'rgba(236, 72, 153, 0.3)', text: '#f9a8d4' },
    'Profession Guides': { bg: 'rgba(20, 184, 166, 0.15)', border: 'rgba(20, 184, 166, 0.3)', text: '#5eead4' },
  }
  const catColor = categoryColors[category] || categoryColors['Invoicing']

  // Truncate title if too long
  const displayTitle = title.length > 80 ? title.substring(0, 77) + '...' : title
  const titleSize = displayTitle.length > 60 ? 36 : displayTitle.length > 40 ? 42 : 48

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 70px',
          background: 'linear-gradient(145deg, #030014 0%, #0a0a1a 25%, #0a1628 50%, #0d2137 75%, #0a0a1a 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow - top right */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '50%',
            height: '60%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Ambient glow - bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-25%',
            left: '-10%',
            width: '45%',
            height: '55%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Top section: category + read time */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 18px',
              borderRadius: 999,
              background: catColor.bg,
              border: `1px solid ${catColor.border}`,
            }}
          >
            <div style={{ fontSize: 16, color: catColor.text, fontWeight: 600 }}>{category}</div>
          </div>
          {readTime && (
            <div style={{ fontSize: 16, color: '#64748b', fontWeight: 400 }}>{readTime}</div>
          )}
        </div>

        {/* Middle section: title */}
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', zIndex: 1 }}>
          <div
            style={{
              fontSize: titleSize,
              fontWeight: 800,
              color: '#f1f5f9',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              maxWidth: '95%',
            }}
          >
            {displayTitle}
          </div>
        </div>

        {/* Bottom section: branding */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {/* Icon */}
            <div
              style={{
                display: 'flex',
                width: 44,
                height: 44,
                borderRadius: 12,
                background: 'linear-gradient(135deg, #3b82f6, #0ea5e9, #10b981)',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div style={{ fontSize: 26, fontWeight: 700, color: '#e2e8f0', letterSpacing: '-0.02em' }}>
              InvoiceFlow
            </div>
          </div>

          <div style={{ fontSize: 14, color: '#475569', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' as const, display: 'flex' }}>
            invoiceflow.com.au
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
