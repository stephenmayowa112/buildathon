import type { Metadata } from "next";
import Script from "next/script";
import { AuthProvider } from "@/lib/AuthProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VOLTPAY - Powering Africa's Businesses With Clean Energy",
    template: "%s | VOLTPAY",
  },
  description: "Affordable, subscription-based solar energy solutions for businesses. Track usage, manage billing, and reduce costs with VOLTPAY.",
  keywords: ["solar energy", "business", "Nigeria", "Africa", "clean energy", "subscription", "VOLTPAY"],
  openGraph: {
    title: "VOLTPAY - Clean Energy For Your Business",
    description: "Affordable, subscription-based solar energy solutions for businesses.",
    url: "https://voltpay.com",
    siteName: "VOLTPAY",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VOLTPAY - Clean Energy For Your Business",
    description: "Affordable, subscription-based solar energy solutions for businesses.",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://newwebpay.interswitchng.com/inline-checkout.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
