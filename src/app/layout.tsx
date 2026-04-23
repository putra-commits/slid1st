import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Suspense } from "react";
import "./globals.css";

// [DEBUG1ST] Standard Metadata
export const metadata: Metadata = {
  title: "BERNAS Member | Sovereign Digital Library",
  description: "Akses eksklusif mahakarya literatur dan cetak biru bisnis digital dari Sovereign Ecosystem BERNAS.id.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("[DEBUG1ST] RootLayout: Initializing Sovereign UI...");

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={<div className="min-h-screen bg-[#0A0A10]" />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
