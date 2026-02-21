'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/lib/database.types';

const hasSupabaseConfig =
  typeof process !== 'undefined' &&
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = hasSupabaseConfig
  ? createClientComponentClient<Database>()
  : (null as unknown as ReturnType<typeof createClientComponentClient<Database>>);

export const isSupabaseConfigured = !!hasSupabaseConfig;
