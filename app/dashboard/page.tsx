'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { supabase } from '@/lib/supabase';
import { formatCurrency, formatDate } from '@/lib/utils';
import { toast } from '@/components/ui/Toast';

interface Subscription {
  status: string;
  interval: string;
  amount: number;
  current_period_end: string;
  cancel_at_period_end: boolean;
}

export default function DashboardPage() {
  const { user, loading: authLoading, signOut } = useAuth();
  const router = useRouter();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [portalLoading, setPortalLoading] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) {
      loadSubscription();
    }
  }, [user]);

  const loadSubscription = async () => {
    try {
      const { data } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user!.id)
        .in('status', ['active', 'trialing'])
        .single();

      setSubscription(data);
    } catch (error) {
      console.error('Error loading subscription:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleManageSubscription = async () => {
    setPortalLoading(true);
    try {
      const response = await fetch('/api/create-portal', {
        method: 'POST',
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Failed to create portal session');
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to open customer portal');
      setPortalLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">Product Factory</h1>
          <Button variant="ghost" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Dashboard</h2>
            <p className="text-gray-400">
              Welcome back, {user?.email}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white">{user?.email}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Member since</div>
                  <div className="text-white">
                    {user?.created_at && formatDate(user.created_at)}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subscription</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {subscription ? (
                  <>
                    <div>
                      <div className="text-sm text-gray-400">Plan</div>
                      <div className="text-white font-medium">
                        {formatCurrency(subscription.amount)} /{' '}
                        {subscription.interval}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Status</div>
                      <div className="text-green-400 capitalize">
                        {subscription.status}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">
                        {subscription.cancel_at_period_end
                          ? 'Cancels on'
                          : 'Renews on'}
                      </div>
                      <div className="text-white">
                        {formatDate(subscription.current_period_end)}
                      </div>
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={handleManageSubscription}
                      isLoading={portalLoading}
                      className="w-full mt-4"
                    >
                      Manage Subscription
                    </Button>
                  </>
                ) : (
                  <>
                    <p className="text-gray-400">No active subscription</p>
                    <Button
                      onClick={() => router.push('/pricing')}
                      size="sm"
                      className="w-full mt-4"
                    >
                      View Plans
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
