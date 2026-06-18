import type { Metadata } from "next";
import { cinzel, geistMono, geistSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mobile Number Correction Report",
  description: "Premium Mobile Number Vibration Analysis & Correction Report by Astro Aarambh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className={`${cinzel.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
