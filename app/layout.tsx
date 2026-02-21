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
  },
  twitter: {
    card: "summary_large_image",
    title: "InvoiceFlow — AI-Powered Invoice Management",
    description: "Auto-extract invoices from Gmail, categorize with AI, and export to CSV/PDF.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${ibmPlex.variable}`}>
        <AuthProvider>
          {children}
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  );
}
