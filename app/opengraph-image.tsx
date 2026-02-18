import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'InvoiceFlow — AI-Powered Invoice Management'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(145deg, #030014 0%, #0a0a1a 25%, #0a1628 50%, #0d2137 75%, #0a0a1a 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow - top left */}
        <div
          style={{
            position: 'absolute',
            top: '-15%',
            left: '-10%',
            width: '50%',
            height: '60%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Ambient glow - bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '45%',
            height: '55%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Icon */}
        <div
          style={{
            display: 'flex',
            width: 72,
            height: 72,
            borderRadius: 18,
            background: 'linear-gradient(135deg, #3b82f6, #0ea5e9, #10b981)',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 28,
            boxShadow: '0 20px 60px rgba(59, 130, 246, 0.35), 0 8px 24px rgba(16, 185, 129, 0.2)',
          }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 40%, #60a5fa 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: 12,
            letterSpacing: '-0.03em',
          }}
        >
          InvoiceFlow
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: 700,
            marginBottom: 40,
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}
        >
          AI-Powered Invoice Management for Freelancers
        </div>

        {/* Feature pills row */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 20px',
              borderRadius: 999,
              background: 'rgba(59, 130, 246, 0.12)',
              border: '1px solid rgba(59, 130, 246, 0.25)',
            }}
          >
            <div style={{ fontSize: 15, color: '#93c5fd', fontWeight: 500 }}>Gmail Sync</div>
          </div>

          <div
            style={{
              display: 'flex',
              width: 4,
              height: 4,
              borderRadius: 2,
              background: '#475569',
            }}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 20px',
              borderRadius: 999,
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
            }}
          >
            <div style={{ fontSize: 15, color: '#6ee7b7', fontWeight: 500 }}>AI Categorization</div>
          </div>

          <div
            style={{
              display: 'flex',
              width: 4,
              height: 4,
              borderRadius: 2,
              background: '#475569',
            }}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 20px',
              borderRadius: 999,
              background: 'rgba(14, 165, 233, 0.12)',
              border: '1px solid rgba(14, 165, 233, 0.25)',
            }}
          >
            <div style={{ fontSize: 15, color: '#7dd3fc', fontWeight: 500 }}>One-Click Export</div>
          </div>
        </div>

        {/* Bottom brand */}
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: '#475569',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
            }}
          >
            by ASDES
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
