import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { LoginGate } from "@/components/ad-studio/LoginGate";
import { ProAdStudio } from "@/components/ad-studio/ProAdStudio";
import { SITE } from "@/lib/site-config";
import "./ad-studio.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-banner-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-banner-montserrat",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "12-in-1 Pro Banner Suite",
  description:
    "Internal 9:16 social banner templates for On The Move Again. Upload imagery and export JPEG creatives.",
  alternates: { canonical: `${SITE.url}/login` },
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div className={`${inter.variable} ${montserrat.variable}`}>
      <LoginGate>
        <ProAdStudio />
      </LoginGate>
    </div>
  );
}
