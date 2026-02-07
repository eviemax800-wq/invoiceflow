# UI Components Documentation

Complete reference for all reusable UI components in Product Factory.

## Design Principles

### Glassmorphism
All components use a glassmorphism aesthetic:
- Translucent backgrounds (`bg-white/5`)
- Backdrop blur (`backdrop-blur-lg`)
- Subtle borders (`border-white/10`)
- Gradient accents

### Dark Mode
- Default dark theme
- High contrast for readability
- Gradient text for emphasis

### Responsive
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Touch-friendly hit areas

---

## Core Components

### Button

**Location:** `components/ui/Button.tsx`

**Props:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  // ...standard button props
}
```

**Usage:**
```tsx
import Button from '@/components/ui/Button';

// Primary action
<Button variant="primary">Submit</Button>

// Secondary action
<Button variant="secondary">Cancel</Button>

// Destructive action
<Button variant="danger">Delete</Button>

// Subtle action
<Button variant="ghost">Skip</Button>

// Loading state
<Button isLoading={loading}>Processing...</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

**Variants:**
- **primary**: Gradient blue-purple, for main CTAs
- **secondary**: Glassmorphism style, for secondary actions
- **danger**: Gradient red-pink, for destructive actions
- **ghost**: Transparent, for subtle actions

**States:**
- Hover: Enhanced shadow/background
- Focus: Ring indicator
- Disabled: 50% opacity
- Loading: Spinner with disabled state

---

### Input

**Location:** `components/ui/Input.tsx`

**Props:**
```typescript
interface InputProps {
  label?: string;
  error?: string;
  // ...standard input props
}
```

**Usage:**
```tsx
import Input from '@/components/ui/Input';

// Basic input
<Input 
  label="Email"
  type="email"
  placeholder="you@example.com"
/>

// With error
<Input 
  label="Password"
  type="password"
  error="Password must be at least 8 characters"
/>

// Controlled component
const [value, setValue] = useState('');
<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

**Features:**
- Glassmorphism styling
- Floating label support
- Error state with message
- Focus ring indicator
- Placeholder styling

---

### Card

**Location:** `components/ui/Card.tsx`

**Components:**
- `Card` - Container
- `CardHeader` - Header section
- `CardTitle` - Title text
- `CardContent` - Main content

**Usage:**
```tsx
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

<Card>
  <CardHeader>
    <CardTitle>Analytics</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
</Card>

// Disable glassmorphism
<Card glass={false}>
  <p>Solid background</p>
</Card>
```

**Features:**
- Glassmorphism by default
- Rounded corners
- Subtle border
- Optional solid background

---

### Modal

**Location:** `components/ui/Modal.tsx`

**Props:**
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}
```

**Usage:**
```tsx
import Modal from '@/components/ui/Modal';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Action"
        size="md"
      >
        <p>Are you sure?</p>
        <div className="flex gap-2 mt-4">
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button variant="danger">Confirm</Button>
        </div>
      </Modal>
    </>
  );
}
```

**Features:**
- Backdrop blur overlay
- Click outside to close
- ESC key to close
- Focus trap
- Smooth animations
- Responsive sizes

---

### Toast

**Location:** `components/ui/Toast.tsx`

**Usage:**
```tsx
import { toast } from '@/components/ui/Toast';

// Success notification
toast.success('Profile updated!');

// Error notification
toast.error('Failed to save changes');

// Info notification
toast.info('New feature available');
```

**Add to Layout:**
```tsx
import ToastContainer from '@/components/ui/Toast';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
```

**Features:**
- Global notification system
- Auto-dismiss after 5 seconds
- Gradient backgrounds
- Slide-in animation
- Stack multiple toasts
- Icon indicators

---

### Skeleton

**Location:** `components/ui/Skeleton.tsx`

**Components:**
- `Skeleton` - Basic skeleton
- `TableSkeleton` - Table loading state
- `CardSkeleton` - Card loading state

**Usage:**
```tsx
import Skeleton, { TableSkeleton, CardSkeleton } from '@/components/ui/Skeleton';

// Basic skeleton
<Skeleton className="h-8 w-32" />

// Table loading
<TableSkeleton rows={5} />

// Card loading
<div className="grid md:grid-cols-3 gap-6">
  <CardSkeleton />
  <CardSkeleton />
  <CardSkeleton />
</div>

// Custom skeleton
<div className="space-y-2">
  <Skeleton className="h-6 w-full" />
  <Skeleton className="h-6 w-3/4" />
  <Skeleton className="h-6 w-1/2" />
</div>
```

**Features:**
- Pulse animation
- Glassmorphism styling
- Responsive layouts
- Pre-built templates

---

## Utility Functions

### cn (Class Names)

**Location:** `lib/utils.ts`

Utility for merging Tailwind classes with proper precedence.

**Usage:**
```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'base-class',
  condition && 'conditional-class',
  'override-class'
)} />
```

### formatCurrency

**Location:** `lib/utils.ts`

Format amounts (in cents) to currency strings.

**Usage:**
```tsx
import { formatCurrency } from '@/lib/utils';

formatCurrency(2900) // "$29.00"
formatCurrency(29900) // "$299.00"
```

### formatDate

**Location:** `lib/utils.ts`

Format date strings to readable format.

**Usage:**
```tsx
import { formatDate } from '@/lib/utils';

formatDate('2024-01-15') // "Jan 15, 2024"
formatDate(new Date()) // "Feb 6, 2024"
```

---

## Form Components

### LoginForm

**Location:** `components/auth/LoginForm.tsx`

Complete login form with:
- Email/password input
- Google OAuth button
- Magic link option
- Error handling
- Loading states

**Usage:**
```tsx
import LoginForm from '@/components/auth/LoginForm';

<LoginForm />
```

### SignUpForm

**Location:** `components/auth/SignUpForm.tsx`

Complete signup form with:
- Name, email, password fields
- Google OAuth button
- Validation
- Loading states

**Usage:**
```tsx
import SignUpForm from '@/components/auth/SignUpForm';

<SignUpForm />
```

---

## Pricing Components

### PricingCards

**Location:** `components/pricing/PricingCards.tsx`

Displays subscription plans with:
- Monthly/yearly options
- Feature lists
- Popular badge
- Subscribe buttons
- Loading states

**Usage:**
```tsx
import PricingCards from '@/components/pricing/PricingCards';

<PricingCards />
```

**Customization:**
Edit the `plans` array in the component to change:
- Pricing
- Features
- Popular flag

---

## Admin Components

### AnalyticsDashboard

**Location:** `components/admin/AnalyticsDashboard.tsx`

Displays key metrics:
- Total users
- Active subscriptions
- MRR
- Total revenue

**Usage:**
```tsx
import AnalyticsDashboard from '@/components/admin/AnalyticsDashboard';

<AnalyticsDashboard />
```

### UserManagement

**Location:** `components/admin/UserManagement.tsx`

User table with:
- Search functionality
- Subscription status
- Join date
- Email and name

**Usage:**
```tsx
import UserManagement from '@/components/admin/UserManagement';

<UserManagement />
```

---

## Styling Utilities

### Gradient Text

Add gradient effect to text:

```tsx
<h1 className="gradient-text">Beautiful Title</h1>
```

### Glass Effect

Apply glassmorphism manually:

```tsx
<div className="glass p-6 rounded-lg">
  Glass container
</div>
```

### Animations

Available animations:
- `animate-pulse` - Pulsing effect (skeletons)
- `animate-slide-in` - Slide from right (toasts)
- `animate-modal-in` - Scale up (modals)

---

## Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

**Usage:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Responsive grid */}
</div>
```

---

## Best Practices

### Component Composition

```tsx
// ✅ Good - Composable
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// ❌ Bad - Monolithic
<Card title="Title" content="Content" />
```

### Loading States

```tsx
// ✅ Good - Show loading UI
{loading ? <TableSkeleton /> : <DataTable data={data} />}

// ❌ Bad - No feedback
{!loading && <DataTable data={data} />}
```

### Error Handling

```tsx
// ✅ Good - User feedback
try {
  await action();
  toast.success('Action completed!');
} catch (error) {
  toast.error('Action failed');
}

// ❌ Bad - Silent failure
try {
  await action();
} catch (error) {
  console.error(error);
}
```

---

## Extending Components

### Creating New Variants

```tsx
// Button.tsx
const variants = {
  primary: '...',
  secondary: '...',
  // Add new variant
  outline: 'border-2 border-white/30 hover:bg-white/10',
};
```

### Adding New Components

1. Create file in `components/ui/`
2. Export component
3. Use `cn()` for class merging
4. Support className prop
5. Document in this file

**Template:**
```tsx
import { cn } from '@/lib/utils';

interface MyComponentProps {
  className?: string;
  // other props
}

export default function MyComponent({ className, ...props }: MyComponentProps) {
  return (
    <div className={cn('base-styles', className)} {...props} />
  );
}
```

---

**All components are fully customizable and production-ready!**
