# Product Factory

A production-ready Next.js 14 template with authentication, payments, admin dashboard, and beautiful UI components. Clone and customize to launch products 2.5x faster.

## 🚀 Features

- **Authentication** - Google OAuth, email/password, magic links via Supabase Auth
- **Payments** - Stripe subscriptions with webhooks and customer portal
- **Admin Dashboard** - User management, analytics (MRR, churn, revenue)
- **UI Components** - Glassmorphism design system with dark mode
- **Database** - Supabase (PostgreSQL) with RLS policies
- **TypeScript** - Fully typed with strict mode
- **Deployment Ready** - Vercel config and CI/CD setup

## 📋 Prerequisites

- Node.js 18+ and npm
- Supabase account ([supabase.com](https://supabase.com))
- Stripe account ([stripe.com](https://stripe.com))
- Vercel account for deployment (optional)

## 🏁 Quick Start

### 1. Clone the template

```bash
git clone <your-repo-url> my-product
cd my-product
npm install
```

### 2. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Project Settings → API
3. Copy your project URL and anon key
4. Run the migration:
   ```bash
   # Install Supabase CLI
   npm install -g supabase
   
   # Link your project
   supabase link --project-ref your-project-ref
   
   # Run migrations
   supabase db push
   ```

5. Enable Google OAuth:
   - Go to Authentication → Providers
   - Enable Google
   - Add your OAuth credentials from Google Cloud Console
   - Add authorized redirect URL: `https://your-project.supabase.co/auth/v1/callback`

### 3. Set up Stripe

1. Create account at [stripe.com](https://stripe.com)
2. Get API keys from Developers → API keys
3. Create products:
   - Go to Products → Add Product
   - Create "Monthly" plan (e.g., $29/month)
   - Create "Yearly" plan (e.g., $299/year)
   - Copy the Price IDs

4. Set up webhook:
   - Go to Developers → Webhooks → Add endpoint
   - URL: `https://your-domain.com/api/webhooks/stripe`
   - Events: Select all `checkout`, `customer`, and `invoice` events
   - Copy the webhook signing secret

### 4. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your keys:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=My Product

# Stripe Price IDs
NEXT_PUBLIC_STRIPE_PRICE_MONTHLY=price_xxx
NEXT_PUBLIC_STRIPE_PRICE_YEARLY=price_xxx
```

### 5. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

### Test Authentication
1. Click "Get Started"
2. Sign up with email or Google
3. Check email for verification (if using email)
4. Login and access dashboard

### Test Payments
1. Go to Pricing page
2. Click Subscribe (use test card: `4242 4242 4242 4242`)
3. Verify subscription appears in dashboard
4. Click "Manage Subscription" to test customer portal

### Test Webhooks Locally
```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login to Stripe
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# Use the webhook secret shown in terminal in your .env.local
```

## 📁 Project Structure

```
product-factory/
├── app/
│   ├── api/              # API routes
│   ├── auth/             # Auth callback
│   ├── admin/            # Admin dashboard
│   ├── dashboard/        # User dashboard
│   ├── login/            # Login page
│   ├── signup/           # Signup page
│   ├── pricing/          # Pricing page
│   └── page.tsx          # Landing page
├── components/
│   ├── ui/               # Reusable UI components
│   ├── auth/             # Auth forms
│   ├── admin/            # Admin components
│   └── pricing/          # Pricing components
├── contexts/             # React contexts (auth)
├── lib/                  # Utilities and configs
├── supabase/
│   └── migrations/       # Database migrations
└── public/               # Static assets
```

## 🎨 Customization

### Branding
1. Update `NEXT_PUBLIC_APP_NAME` in `.env.local`
2. Replace "Product Factory" in components
3. Update metadata in `app/layout.tsx`
4. Add your logo to `public/` folder

### Styling
- Color scheme: `app/globals.css`
- Component styles: `components/ui/`
- Tailwind config: `tailwind.config.ts`

### Features
- Add pages: Create in `app/` directory
- Add components: Create in `components/`
- Add API routes: Create in `app/api/`

## 🚀 Deployment

### Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

Vercel will auto-detect Next.js and configure build settings.

### Post-Deployment

1. Update Supabase OAuth redirect:
   - Add production URL to Supabase auth settings
   
2. Update Stripe webhook:
   - Add production webhook endpoint
   - Update `STRIPE_WEBHOOK_SECRET` in Vercel

3. Test production flows:
   - Authentication
   - Payment checkout
   - Webhook processing

## 📚 Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) - System architecture and design
- [COMPONENTS.md](./COMPONENTS.md) - UI components documentation
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Payments:** Stripe
- **Deployment:** Vercel
- **Forms:** React Hook Form + Zod

## 📄 License

MIT License - feel free to use for any project!

## 🤝 Support

Need help? Check the documentation or create an issue.

---

**Built with ❤️ to help you ship products faster**
