import type { Metadata } from "next";
import Script from "next/script";
import { AuthProvider } from "@/lib/AuthProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "VOLTPAY - Affordable Solar Energy For Your Business",
  description: "Simple, powerful tools designed for small businesses",
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
