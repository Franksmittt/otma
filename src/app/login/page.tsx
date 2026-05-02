import type { Metadata } from "next";
import { ProAdStudio } from "@/components/ad-studio/ProAdStudio";
import { SITE } from "@/lib/site-config";
import "./ad-studio.css";

export const metadata: Metadata = {
  title: "Pro Ultra Ad Studio",
  description:
    "Internal 9:16 social ad templates for On The Move Again. Upload imagery and export JPEG creatives.",
  alternates: { canonical: `${SITE.url}/login` },
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <ProAdStudio />;
}
