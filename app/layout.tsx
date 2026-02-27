import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import ToastContainer from "@/components/ui/Toast";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://invoiceflow-teal.vercel.app"),
  title: "InvoiceFlow — AI-Powered Invoice Management",
  description: "Auto-extract invoices from Gmail, categorize with AI, and export to CSV/PDF. Built for freelancers and small businesses.",
  openGraph: {
    title: "InvoiceFlow — AI-Powered Invoice Management",
    description: "Auto-extract invoices from Gmail, categorize with AI, and export to CSV/PDF. Built for freelancers and small businesses.",
    siteName: "InvoiceFlow",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "InvoiceFlow — AI-Powered Invoice Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InvoiceFlow — AI-Powered Invoice Management",
    description: "Auto-extract invoices from Gmail, categorize with AI, and export to CSV/PDF.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'InvoiceFlow',
  url: 'https://invoiceflow-teal.vercel.app',
  logo: 'https://invoiceflow-teal.vercel.app/icon.png',
  description: 'AI-powered invoice management for Australian freelancers and small businesses.',
  foundingDate: '2026',
  areaServed: { '@type': 'Country', name: 'Australia' },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: 'English',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'InvoiceFlow',
  url: 'https://invoiceflow-teal.vercel.app',
  description: 'Free business tools, invoicing, and tax resources for Australian freelancers.',
  publisher: { '@type': 'Organization', name: 'InvoiceFlow' },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://invoiceflow-teal.vercel.app/tools?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${ibmPlex.variable}`}>
        <AuthProvider>
          {children}
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  );
}
