"use client";

import { ImagePromptLibrary } from "@/components/ad-studio/ImagePromptLibrary";
import { ProBannerSuite } from "@/components/ad-studio/ProBannerSuite";

export function ProAdStudio() {
  return (
    <div className="otma-ad-studio-root">
      <header className="ad-studio-header">
        <h1>
          OTMA <span>12-in-1 Pro Banner Suite</span>
        </h1>
        <p>
          Upload one background, pick a layout (V1–V12), and export a 9:16 JPEG at 1080×1920 — same flow as the standalone
          banner tool, wired to site config for phone and ratings.
        </p>
      </header>

      <ImagePromptLibrary />

      <ProBannerSuite />
    </div>
  );
}
