import { GoogleGenerativeAI } from '@google/generative-ai';

const geminiKey = process.env.GEMINI_API_KEY;

export interface InvoiceExtraction {
  vendor: string | null;
  amount: number | null;
  currency: string | null;
  date: string | null;
  category: string | null;
  confidence: number | null;
}

export async function extractInvoiceFields(text: string): Promise<InvoiceExtraction> {
  if (!geminiKey) {
    return {
      vendor: null,
      amount: null,
      currency: null,
      date: null,
      category: null,
      confidence: null,
    };
  }

  const genAI = new GoogleGenerativeAI(geminiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = `You are extracting invoice data from an email.\n
Return ONLY valid JSON with keys: vendor, amount, currency, date, category, confidence.\n
Rules:\n- vendor: company/vendor name\n- amount: numeric total (no currency symbols)\n- currency: ISO 4217 (USD, AUD, etc)\n- date: ISO date (YYYY-MM-DD)\n- category: one of Travel, Marketing, SaaS, Infrastructure, Office, Professional Services, Utilities, Other\n- confidence: number between 0 and 1\n\nEmail text:\n${text}`;

  const result = await model.generateContent(prompt);
  const raw = result.response.text();

  const jsonMatch = raw.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    return {
      vendor: null,
      amount: null,
      currency: null,
      date: null,
      category: null,
      confidence: null,
    };
  }

  try {
    const parsed = JSON.parse(jsonMatch[0]);
    return {
      vendor: parsed.vendor || null,
      amount: typeof parsed.amount === 'number' ? parsed.amount : null,
      currency: parsed.currency || null,
      date: parsed.date || null,
      category: parsed.category || null,
      confidence: typeof parsed.confidence === 'number' ? parsed.confidence : null,
    };
  } catch {
    return {
      vendor: null,
      amount: null,
      currency: null,
      date: null,
      category: null,
      confidence: null,
    };
  }
}
