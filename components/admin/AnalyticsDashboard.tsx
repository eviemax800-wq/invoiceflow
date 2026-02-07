'use client';

import { useEffect, useState } from 'react';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { formatCurrency, calculateMRR } from '@/lib/utils';
import { supabase } from '@/lib/supabase';

interface AnalyticsData {
  totalUsers: number;
  activeSubscriptions: number;
  mrr: number;
  totalRevenue: number;
}

export default function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData>({
    totalUsers: 0,
    activeSubscriptions: 0,
    mrr: 0,
    totalRevenue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      // Get total users
      const { count: userCount } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });

      // Get active subscriptions
      const { data: subscriptions, count: subCount } = await supabase
        .from('subscriptions')
        .select('amount, interval', { count: 'exact' })
        .in('status', ['active', 'trialing']);

      // Calculate MRR
      const mrr = calculateMRR(subscriptions || []);

      // Get total revenue
      const { data: payments } = await supabase
        .from('payments')
        .select('amount')
        .eq('status', 'succeeded');

      const totalRevenue = payments?.reduce((sum, p) => sum + p.amount, 0) || 0;

      setData({
        totalUsers: userCount || 0,
        activeSubscriptions: subCount || 0,
        mrr,
        totalRevenue,
      });
    } catch (error) {
      console.error('Error loading analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    {
      title: 'Total Users',
      value: data.totalUsers,
      format: (v: number) => v.toString(),
      icon: '👥',
    },
    {
      title: 'Active Subscriptions',
      value: data.activeSubscriptions,
      format: (v: number) => v.toString(),
      icon: '📊',
    },
    {
      title: 'Monthly Recurring Revenue',
      value: data.mrr,
      format: (v: number) => formatCurrency(v),
      icon: '💰',
    },
    {
      title: 'Total Revenue',
      value: data.totalRevenue,
      format: (v: number) => formatCurrency(v),
      icon: '💵',
    },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-32" />
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-400">
                {stat.title}
              </CardTitle>
              <span className="text-2xl">{stat.icon}</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">
              {stat.format(stat.value)}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
