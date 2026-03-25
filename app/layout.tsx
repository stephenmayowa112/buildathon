import type { Metadata } from "next";
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
