// @ts-nocheck
'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { toast } from '@/components/ui/Toast';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    interval: 'month',
    features: [
      '10 invoices per month',
      'Gmail sync',
      'CSV export',
      'Email support',
    ],
    cta: 'Start Free',
    href: '/signup',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 2900,
    interval: 'month',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO!,
    features: [
      'Unlimited invoices',
      'Priority Gmail sync',
      'Advanced categorization',
      'QuickBooks-ready export',
      'Priority support',
    ],
    popular: true,
    cta: 'Go Pro',
  },
];

export default function PricingCards() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleSubscribe = async (priceId: string, planId: string) => {
    setLoading(planId);
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Failed to create checkout session');
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to start checkout');
      setLoading(null);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {plans.map((plan) => (
        <Card key={plan.id} className={plan.popular ? 'border-teal-400/60' : ''}>
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </span>
            </div>
          )}
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
            <div className="mt-4">
              <span className="text-4xl font-bold text-white">
                {formatCurrency(plan.price)}
              </span>
              <span className="text-gray-400">/{plan.interval}</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            {plan.id === 'free' ? (
              <Link href={plan.href!}>
                <Button variant="secondary" className="w-full">
                  {plan.cta}
                </Button>
              </Link>
            ) : (
              <Button
                variant="primary"
                className="w-full"
                onClick={() => handleSubscribe(plan.priceId!, plan.id)}
                isLoading={loading === plan.id}
              >
                {plan.cta}
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
