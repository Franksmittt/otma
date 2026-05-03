"use client";

import { ImagePromptLibrary } from "@/components/ad-studio/ImagePromptLibrary";
import { lockSocialStudio } from "@/components/ad-studio/LoginGate";
import { ProBannerSuite } from "@/components/ad-studio/ProBannerSuite";
import { SocialTemplateLibrary } from "@/components/ad-studio/SocialTemplateLibrary";

export function ProAdStudio() {
  return (
    <div className="otma-ad-studio-root">
      <header className="ad-studio-header">
        <div className="ad-studio-header-top">
          <h1>
            OTMA <span>12-in-1 Pro Banner Suite</span>
          </h1>
          <button type="button" className="ad-studio-lock-btn" onClick={() => lockSocialStudio()} title="Lock studio">
            <i className="fa-solid fa-lock" aria-hidden />
            <span className="ad-studio-lock-label">Lock</span>
          </button>
        </div>
        <p>
          Upload one background, pick a layout (V1–V12), and export a 9:16 JPEG at 1080×1920, same flow as the standalone
          banner tool, wired to site config for phone and ratings.
        </p>
      </header>

      <ImagePromptLibrary />

      <ProBannerSuite />

      <SocialTemplateLibrary />
    </div>
  );
}
