# InvoiceFlow Architecture

InvoiceFlow is a Next.js 14 app with Supabase for auth/data, Gmail OAuth for ingestion, Gemini for AI extraction, and Stripe for payments. The system is optimized for a fast MVP with clear separation between UI, integrations, and data storage.

## Core Modules

- **Auth**: Supabase Auth (email/password + Google OAuth)
- **Gmail Ingestion**: OAuth + Gmail API read-only access
- **AI Extraction**: Gemini API parses invoice metadata
- **Data**: Supabase Postgres (invoices, gmail_connections)
- **Payments**: Stripe subscriptions (Free/Pro)

## Data Flow

1. User signs in
2. User connects Gmail via OAuth
3. Background sync fetches invoice-like emails
4. Gemini extracts invoice fields
5. Invoices stored in Supabase
6. Dashboard renders invoices + CSV export

## Security

- OAuth scopes limited to read-only/metadata
- Tokens stored in Supabase (consider encryption for production)
- RLS enforced per user

## Deployment

- Vercel hosting
- Supabase managed Postgres
- Stripe webhooks
