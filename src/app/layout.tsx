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

export const metadata: Metadata = {
  title: "Abhinav Rana | Editorial Portfolio",
  description: "An unconventional, asymmetrical editorial-style portfolio showcasing high-end frontend architecture and design systems.",
  keywords: ["frontend developer", "editorial design", "asymmetrical layout", "interaction design", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="w-full antialiased selection:bg-primary-yellow/30 selection:text-primary-yellow">{children}</body>
    </html>
  );
}
