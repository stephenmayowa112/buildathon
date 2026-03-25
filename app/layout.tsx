import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "VOLTPAY - Affordable Solar Energy For Your Business",
  description: "Simple, powerful tools designed for small businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Interswitch Payment SDK */}
        <Script
          src="https://newwebpay.interswitchng.com/inline-checkout.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
