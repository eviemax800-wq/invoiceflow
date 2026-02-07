# InvoiceFlow

AI-powered invoice and expense auto-organizer for SMBs. Connect Gmail, auto-detect invoices, extract key fields, and export clean CSVs in minutes.

## ✅ MVP Features

- Gmail OAuth connection
- Auto-fetch and detect invoices
- AI extraction: vendor, amount, date, category
- Dashboard with filters and search
- CSV export
- Supabase Auth
- Stripe subscriptions (Free / Pro)
- Landing page with pricing

## 🧱 Tech Stack

- Next.js 14 + TypeScript
- Gmail API (OAuth)
- Supabase (PostgreSQL + Auth)
- Gemini API (extraction)
- Stripe (payments)
- Vercel (deploy)

## 🏁 Quick Start

### 1. Install

```bash
cd invoiceflow
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
```

Fill in values:

```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=InvoiceFlow

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
NEXT_PUBLIC_STRIPE_PRICE_PRO=price_xxx

# Gmail OAuth
GMAIL_CLIENT_ID=xxx.apps.googleusercontent.com
GMAIL_CLIENT_SECRET=xxx

# Gemini
GEMINI_API_KEY=xxx
```

### 3. Supabase schema

```bash
# Install Supabase CLI
npm install -g supabase

# Link your project
supabase link --project-ref your-project-ref

# Run migrations
supabase db push
```

### 4. Run dev server

```bash
npm run dev
```

Open `http://localhost:3000`

## 🧪 Test Flow

1. Sign up / Login
2. Connect Gmail
3. Click “Sync Invoices”
4. View invoices in dashboard
5. Export CSV

## 🚀 Deploy (Vercel)

1. Push to GitHub
2. Import to Vercel
3. Add env vars
4. Deploy

## 📁 Structure

```
invoiceflow/
├── app/
│   ├── api/              # API routes (Stripe, Gmail, Invoices)
│   ├── dashboard/        # User dashboard
│   ├── login/            # Auth
│   ├── pricing/          # Pricing page
│   └── page.tsx          # Landing page
├── components/
│   ├── auth/
│   ├── invoices/
│   ├── pricing/
│   └── ui/
├── lib/
│   ├── gemini.ts
│   ├── gmail.ts
│   ├── stripe.ts
│   └── supabase.ts
└── supabase/
    └── migrations/
```

## Notes

- Gmail scopes are limited to read-only + metadata.
- Tokens are stored in Supabase; consider encrypting for production.
- QuickBooks export is CSV-only in MVP (API integration can be added).

---

Built for speed and real-world SMB workflows.
