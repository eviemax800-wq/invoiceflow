// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { supabase } from '@/lib/supabase';
import { formatDate } from '@/lib/utils';

interface User {
  id: string;
  email: string;
  full_name: string | null;
  created_at: string;
  subscription_status?: string;
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    if (search) {
      const filtered = users.filter(
        (user) =>
          user.email.toLowerCase().includes(search.toLowerCase()) ||
          user.full_name?.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [search, users]);

  const loadUsers = async () => {
    try {
      const { data: profiles } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (profiles) {
        // Fetch subscription status for each user
        const usersWithSubs = await Promise.all(
          profiles.map(async (profile) => {
            const { data: sub } = await supabase
              .from('subscriptions')
              .select('status')
              .eq('user_id', profile.id)
              .in('status', ['active', 'trialing'])
              .single();

            return {
              ...profile,
              subscription_status: sub?.status || 'none',
            };
          })
        );

        setUsers(usersWithSubs);
        setFilteredUsers(usersWithSubs);
      }
    } catch (error) {
      console.error('Error loading users:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status?: string) => {
    const styles = {
      active: 'bg-green-500/20 text-green-400 border-green-500/30',
      trialing: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      none: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    };

    const labels = {
      active: 'Active',
      trialing: 'Trial',
      none: 'Free',
    };

    const statusKey = (status as keyof typeof styles) || 'none';

    return (
      <span
        className={`px-2 py-1 text-xs rounded-full border ${styles[statusKey]}`}
      >
        {labels[statusKey]}
      </span>
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Users</CardTitle>
          <div className="w-64">
            <Input
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="text-center py-8 text-gray-400">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                    Email
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                    Joined
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-3 px-4 text-sm text-white">
                      {user.email}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-300">
                      {user.full_name || '-'}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {getStatusBadge(user.subscription_status)}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-400">
                      {formatDate(user.created_at)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredUsers.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                No users found
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
