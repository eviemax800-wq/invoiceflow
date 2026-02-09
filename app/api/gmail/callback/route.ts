import { NextResponse } from 'next/server';
import { exchangeCodeForTokens, getGmailProfile } from '@/lib/gmail';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  if (!code || !state) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard?error=gmail_auth_failed`);
  }

  try {
    const tokens = await exchangeCodeForTokens(code);
    const accessToken = tokens.access_token;
    const refreshToken = tokens.refresh_token || null;

    if (!accessToken) {
      throw new Error('Missing access token');
    }

    const profile = await getGmailProfile(accessToken, refreshToken || undefined);
    const email = profile.emailAddress || 'unknown';

    await supabaseAdmin
      .from('gmail_connections')
      .upsert(
        {
          user_id: state,
          email,
          status: 'connected',
          access_token: accessToken,
          refresh_token: refreshToken,
          scope: tokens.scope || null,
          expiry: tokens.expiry_date ? new Date(tokens.expiry_date).toISOString() : null,
        } as any,
        { onConflict: 'user_id' }
      );

    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard?connected=true`);
  } catch (error) {
    console.error('Gmail callback error:', error);
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard?error=gmail_auth_failed`);
  }
}
