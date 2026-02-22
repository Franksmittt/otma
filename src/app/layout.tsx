import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE } from "@/lib/site-config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { MovingCompanyJsonLd } from "@/components/JsonLd";
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
  title: {
    default: `${SITE.name} | Furniture Removals Alberton – Secure, Monitored Moves`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Alberton's most secure furniture removals. Real-time GPS tracking, PMA & AMOSA accredited. Local moves & long-distance to Cape Town & KZN. Get a free quote.",
  keywords: [
    "furniture removals Alberton",
    "movers Alberton",
    "moving company Alberton",
    "packers and movers",
    "long distance movers Gauteng",
  ],
  openGraph: {
    title: SITE.name,
    description: "Alberton's most secure, fully monitored relocation experts. Smile – you're on camera!",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: "Alberton's most secure furniture removals. Real-time GPS tracking, PMA & AMOSA accredited. Free quote.",
  },
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}>
        <MovingCompanyJsonLd />
        <Header />
        <main className="min-h-[calc(100vh-4rem)] pb-24 md:pb-0">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
