import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  `${process.env.NEXT_PUBLIC_APP_URL}/api/gmail/callback`
);

const GMAIL_SCOPES = [
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/gmail.metadata',
];

export function getGmailAuthUrl(state: string) {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: GMAIL_SCOPES,
    state,
  });
}

export async function exchangeCodeForTokens(code: string) {
  const { tokens } = await oauth2Client.getToken(code);
  return tokens;
}

export async function getGmailProfile(accessToken: string, refreshToken?: string) {
  const client = new google.auth.OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    `${process.env.NEXT_PUBLIC_APP_URL}/api/gmail/callback`
  );
  client.setCredentials({ access_token: accessToken, refresh_token: refreshToken });
  const gmail = google.gmail({ version: 'v1', auth: client });
  const profile = await gmail.users.getProfile({ userId: 'me' });
  return profile.data;
}

export async function listInvoiceMessages(params: {
  accessToken: string;
  refreshToken?: string | null;
  query?: string;
  maxResults?: number;
}) {
  const client = new google.auth.OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    `${process.env.NEXT_PUBLIC_APP_URL}/api/gmail/callback`
  );
  client.setCredentials({
    access_token: params.accessToken,
    refresh_token: params.refreshToken || undefined,
  });

  const gmail = google.gmail({ version: 'v1', auth: client });
  const response = await gmail.users.messages.list({
    userId: 'me',
    q: params.query || 'has:attachment (invoice OR receipt OR statement)',
    maxResults: params.maxResults || 20,
  });

  return response.data.messages || [];
}

export async function getMessageDetails(params: {
  accessToken: string;
  refreshToken?: string | null;
  messageId: string;
}) {
  const client = new google.auth.OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    `${process.env.NEXT_PUBLIC_APP_URL}/api/gmail/callback`
  );
  client.setCredentials({
    access_token: params.accessToken,
    refresh_token: params.refreshToken || undefined,
  });

  const gmail = google.gmail({ version: 'v1', auth: client });
  const response = await gmail.users.messages.get({
    userId: 'me',
    id: params.messageId,
    format: 'metadata',
    metadataHeaders: ['From', 'To', 'Subject', 'Date'],
  });

  const headers = response.data.payload?.headers || [];
  const getHeader = (name: string) =>
    headers.find((h) => h.name?.toLowerCase() === name.toLowerCase())?.value || '';

  return {
    id: response.data.id || params.messageId,
    threadId: response.data.threadId || null,
    subject: getHeader('Subject'),
    from: getHeader('From'),
    date: getHeader('Date'),
    snippet: response.data.snippet || '',
  };
}
