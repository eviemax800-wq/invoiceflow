# Architecture Overview

Product Factory is built with a modular, scalable architecture using modern web technologies.

## System Design

### High-Level Architecture

```
┌─────────────┐
│   Browser   │
└──────┬──────┘
       │
       ├─────► Next.js App (React)
       │       ├─ Pages (App Router)
       │       ├─ API Routes
       │       └─ Components
       │
       ├─────► Supabase
       │       ├─ Auth (OAuth, email, magic links)
       │       ├─ Database (PostgreSQL)
       │       └─ Row Level Security
       │
       └─────► Stripe
               ├─ Checkout Sessions
               ├─ Subscriptions
               ├─ Customer Portal
               └─ Webhooks
```

## Core Modules

### 1. Authentication (`contexts/AuthContext.tsx`)

**Responsibilities:**
- User session management
- Multiple auth methods (Google, email/password, magic links)
- Protected route handling

**Flow:**
```
User Action → AuthContext → Supabase Auth → Session State
                                ↓
                        Profile Creation (DB trigger)
```

**Key Features:**
- Persistent sessions via cookies
- Auth state listener for real-time updates
- Automatic profile creation on signup

### 2. Database Layer (`lib/supabase.ts`)

**Schema:**

```sql
profiles
├─ id (UUID, PK, FK to auth.users)
├─ email (TEXT, UNIQUE)
├─ full_name (TEXT)
├─ avatar_url (TEXT)
└─ timestamps

subscriptions
├─ id (UUID, PK)
├─ user_id (UUID, FK to profiles)
├─ stripe_customer_id (TEXT)
├─ stripe_subscription_id (TEXT, UNIQUE)
├─ status (TEXT)
├─ plan_id (TEXT)
├─ interval (TEXT)
├─ amount (INTEGER)
├─ current_period_start (TIMESTAMP)
├─ current_period_end (TIMESTAMP)
├─ cancel_at_period_end (BOOLEAN)
└─ timestamps

payments
├─ id (UUID, PK)
├─ user_id (UUID, FK to profiles)
├─ stripe_payment_id (TEXT, UNIQUE)
├─ amount (INTEGER)
├─ currency (TEXT)
├─ status (TEXT)
└─ created_at (TIMESTAMP)

activity_logs
├─ id (UUID, PK)
├─ user_id (UUID, FK to profiles)
├─ action (TEXT)
├─ metadata (JSONB)
└─ created_at (TIMESTAMP)
```

**Security:**
- Row Level Security (RLS) policies
- Users can only access their own data
- Service role key for admin operations

### 3. Payment System (`lib/stripe.ts`)

**Checkout Flow:**
```
User clicks Subscribe
    ↓
Create/Get Stripe Customer
    ↓
Create Checkout Session
    ↓
Redirect to Stripe Checkout
    ↓
User completes payment
    ↓
Stripe sends webhook
    ↓
Update subscription in DB
    ↓
Redirect to dashboard
```

**Webhook Events:**
- `checkout.session.completed` → Create subscription
- `customer.subscription.updated` → Update subscription
- `customer.subscription.deleted` → Cancel subscription
- `invoice.payment_succeeded` → Record payment
- `invoice.payment_failed` → Log failure

**Security:**
- Webhook signature verification
- Idempotent event handling
- Service role for DB writes

### 4. UI Components (`components/ui/`)

**Design System:**
- Glassmorphism aesthetic (translucent backgrounds, blur effects)
- Dark mode by default
- Gradient accents
- Smooth animations

**Component Hierarchy:**
```
Button
├─ variants: primary, secondary, danger, ghost
├─ sizes: sm, md, lg
└─ loading state

Input
├─ label support
├─ error handling
└─ glassmorphism styling

Card
├─ CardHeader
├─ CardTitle
└─ CardContent

Modal
├─ Overlay with backdrop blur
├─ Keyboard navigation (ESC to close)
└─ Click-outside to close

Toast
├─ Global notification system
├─ Auto-dismiss (5s)
└─ Types: success, error, info
```

## Data Flow

### Authentication Flow

```
1. User submits credentials
2. AuthContext calls Supabase Auth
3. Supabase returns session + JWT
4. JWT stored in httpOnly cookie
5. Database trigger creates profile
6. Auth state updates globally
7. Protected routes become accessible
```

### Subscription Flow

```
1. User selects plan
2. Frontend calls /api/create-checkout
3. Backend creates Stripe session
4. User redirected to Stripe
5. Payment completed
6. Stripe webhook fires
7. Backend updates database
8. User sees active subscription
```

### Admin Analytics Flow

```
1. Admin page mounts
2. Fetch users from profiles table
3. Fetch subscriptions (join with users)
4. Fetch payments
5. Calculate metrics:
   - Total users (count)
   - Active subs (count where status=active)
   - MRR (sum monthly equivalent)
   - Total revenue (sum payment amounts)
6. Display in dashboard
```

## API Routes

### `/api/create-checkout` (POST)
- Creates Stripe checkout session
- Requires authenticated user
- Returns checkout URL

### `/api/create-portal` (POST)
- Creates Stripe customer portal session
- Requires active subscription
- Returns portal URL

### `/api/webhooks/stripe` (POST)
- Handles Stripe webhook events
- Verifies signature
- Updates database
- No auth required (verified by signature)

## Security Considerations

### Authentication
- Sessions use httpOnly cookies (XSS protection)
- CSRF protection via Supabase Auth
- OAuth state parameter validation

### Database
- Row Level Security enforced
- Service role used only in secure server contexts
- Input validation on all mutations

### Payments
- Webhook signature verification
- No sensitive data in frontend
- Customer IDs in metadata only

### Environment Variables
- Never committed to git
- Separate keys for dev/prod
- Secret keys server-side only

## Performance Optimizations

### React
- Client components only when needed
- Server components by default
- Streaming with Suspense

### Database
- Indexes on foreign keys
- Efficient queries (select specific columns)
- Connection pooling via Supabase

### Caching
- Static pages cached by Vercel
- API routes edge-cached when possible
- Client-side state management

## Scalability

### Current Architecture Supports:
- **Users:** 10,000+ (Supabase free tier)
- **Requests:** Unlimited (Vercel)
- **Database:** 500MB (upgradable)

### Scaling Path:
1. **10K-100K users:** Upgrade Supabase plan
2. **100K+ users:** Add caching layer (Redis)
3. **1M+ users:** Database read replicas
4. **High traffic:** CDN for assets

## Testing Strategy

### Unit Tests
- Component rendering
- Utility functions
- Form validation

### Integration Tests
- Auth flows
- Payment flows
- Webhook handling

### E2E Tests
- User signup → subscribe → dashboard
- Admin analytics
- Mobile responsiveness

## Deployment Architecture

```
GitHub
  ↓ (push)
Vercel CI/CD
  ↓ (build & deploy)
Edge Network (CDN)
  ↓
Next.js App (Serverless Functions)
  ↓
Supabase (Database + Auth)
Stripe (Payments)
```

**Benefits:**
- Zero-downtime deployments
- Automatic preview deployments
- Global edge distribution
- Serverless scaling

## Future Enhancements

### Planned Features
- [ ] Email notifications (SendGrid)
- [ ] Advanced analytics (Mixpanel)
- [ ] Multi-tenancy support
- [ ] API rate limiting
- [ ] Export user data (GDPR)
- [ ] 2FA authentication
- [ ] Webhook retry logic
- [ ] Audit logging

### Performance Improvements
- [ ] Image optimization
- [ ] Code splitting optimization
- [ ] Database query optimization
- [ ] Service Worker for offline support

---

This architecture is designed to be **production-ready** while remaining **easy to customize** for your specific product needs.
