"use client";

import type { ChangeEvent, ReactNode } from "react";
import { toJpeg } from "html-to-image";
import { SITE } from "@/lib/site-config";
import { StreamingCardLayout21 } from "@/components/ad-studio/StreamingCardLayout21";
import { StreamingCenterModalLayout22 } from "@/components/ad-studio/StreamingCenterModalLayout22";
import { StreamingInvertedPricingLayout23 } from "@/components/ad-studio/StreamingInvertedPricingLayout23";
import { ImagePromptLibrary } from "@/components/ad-studio/ImagePromptLibrary";

type Template = {
  id: number;
  name: string;
  tagline: string;
  layout: string;
};

const TEMPLATES: Template[] = [
  { id: 1, name: "Template 1: Narrow Stairs", tagline: "We climb the stairs. You stay out of the strain.", layout: "layout-1" },
  { id: 2, name: "Template 2: Cramped Elevator", tagline: "Tight lifts. Patient, experienced movers.", layout: "layout-2" },
  { id: 3, name: "Template 3: Hot Asphalt", tagline: "Long days. The same careful crew.", layout: "layout-3" },
  { id: 4, name: "Template 4: Sofa Wrapping", tagline: "Your lounge suite. Wrapped like it matters.", layout: "layout-4" },
  { id: 5, name: "Template 5: Truck Straps", tagline: "Every strap checked. Your load in good hands.", layout: "layout-5" },
  { id: 6, name: "Template 6: Boardroom", tagline: "Office moves. Minimal drama. Maximum care.", layout: "layout-6" },
  { id: 7, name: "Template 7: Server Racks", tagline: "IT and heavy gear. A detail-obsessed crew.", layout: "layout-7" },
  { id: 8, name: "Template 8: Packing Monitors", tagline: "Packed tight. Labelled right. Handled gently.", layout: "layout-8" },
  { id: 9, name: "Template 9: Photocopier", tagline: "Heavy machinery. Trained movers. No guesswork.", layout: "layout-9" },
  { id: 10, name: "Template 10: Dismantling", tagline: "Dismantle, move, rebuild. We handle the lot.", layout: "layout-10" },
  { id: 11, name: "Template 11: Grand Piano", tagline: "Specialist heavy lifting. Years of practice.", layout: "layout-11" },
  { id: 12, name: "Template 12: Ornate Mirror", tagline: "Delicate pieces. White-glove attention.", layout: "layout-12" },
  { id: 13, name: "Template 13: Patio Furniture", tagline: "Big outdoor sets. The same care as inside.", layout: "layout-13" },
  { id: 14, name: "Template 14: Antique Armoire", tagline: "Heirlooms in safe hands. Respect in every step.", layout: "layout-14" },
  { id: 15, name: "Template 15: Glassware", tagline: "Fragile loads. Counted, cushioned, confident.", layout: "layout-15" },
  { id: 16, name: "Template 16: Tailgate Break", tagline: "We lift all day. You skip the backache.", layout: "layout-16" },
  { id: 17, name: "Template 17: Fridge Corner", tagline: "Appliances and bulk. We push—you point.", layout: "layout-17" },
  { id: 18, name: "Template 18: Empty Dolly", tagline: "Door to door. Heavy lifting sorted for you.", layout: "layout-18" },
  { id: 19, name: "Template 19: Garage Tires", tagline: "Clear-outs done thoroughly. Pro crew on site.", layout: "layout-19" },
  { id: 20, name: "Template 20: Roller Door", tagline: "New home, new start. We handle the heavy bit.", layout: "layout-20" },
  {
    id: 21,
    name: "Template 21: Streaming card",
    tagline: "Bottom glass strip—trust and monitoring.",
    layout: "layout-21",
  },
  {
    id: 22,
    name: "Template 22: Center modal",
    tagline: "Center modal—quote and reassurance.",
    layout: "layout-22",
  },
  {
    id: 23,
    name: "Template 23: Inverted + pricing",
    tagline: "Pricing tier and GIT—clear expectations.",
    layout: "layout-23",
  },
];

function webDisplay(): string {
  try {
    const host = new URL(SITE.url).hostname;
    return host.startsWith("www.") ? host : `www.${host}`;
  } catch {
    return "www.otma.co.za";
  }
}

function CtaWrap() {
  return (
    <div className="cta-wrap">
      <span className="cta-phone">{SITE.phone}</span>
    </div>
  );
}

function BrandDefault() {
  return (
    <p className="brand">
      On The Move <span>Again</span>
    </p>
  );
}

function BrandLayout4() {
  return (
    <p className="brand">
      On The Move
      <br />
      <span>Again</span>
    </p>
  );
}

function TextBoxDefault({ tagline }: { tagline: string }) {
  return (
    <div className="text-box">
      <BrandDefault />
      <h2 className="tagline">{tagline}</h2>
      <CtaWrap />
    </div>
  );
}

function renderAdInner(t: Template): ReactNode {
  const { layout, tagline } = t;

  if (["layout-3", "layout-5", "layout-7", "layout-9", "layout-19"].includes(layout)) {
    return <TextBoxDefault tagline={tagline} />;
  }

  if (layout === "layout-4") {
    return (
      <div className="text-box">
        <BrandLayout4 />
        <h2 className="tagline">{tagline}</h2>
        <CtaWrap />
      </div>
    );
  }

  if (layout === "layout-6") {
    return (
      <>
        <BrandDefault />
        <h2 className="tagline">{tagline}</h2>
        <CtaWrap />
      </>
    );
  }

  if (layout === "layout-10") {
    return (
      <>
        <h2 className="tagline">{tagline}</h2>
        <div className="text-box">
          <BrandDefault />
        </div>
        <CtaWrap />
      </>
    );
  }

  if (layout === "layout-11") {
    return (
      <div className="frame">
        <BrandDefault />
        <h2 className="tagline">{tagline}</h2>
        <CtaWrap />
      </div>
    );
  }

  if (layout === "layout-13") {
    return (
      <>
        <div className="bar">
          <BrandDefault />
          <CtaWrap />
        </div>
        <h2 className="tagline">{tagline}</h2>
        <div className="bar" aria-hidden />
      </>
    );
  }

  if (layout === "layout-15") {
    return (
      <>
        <div className="vertical-bar">
          <BrandDefault />
          <CtaWrap />
        </div>
        <h2 className="tagline">{tagline}</h2>
      </>
    );
  }

  if (layout === "layout-17") {
    return (
      <div className="card">
        <BrandDefault />
        <h2 className="tagline">{tagline}</h2>
        <CtaWrap />
      </div>
    );
  }

  if (layout === "layout-20") {
    return (
      <>
        <div className="image-mask" />
        <div className="text-box">
          <h2 className="tagline">{tagline}</h2>
          <BrandDefault />
          <CtaWrap />
        </div>
      </>
    );
  }

  if (layout === "layout-21") {
    return <StreamingCardLayout21 />;
  }

  if (layout === "layout-22") {
    return <StreamingCenterModalLayout22 />;
  }

  if (layout === "layout-23") {
    return <StreamingInvertedPricingLayout23 />;
  }

  return (
    <>
      <BrandDefault />
      <h2 className="tagline">{tagline}</h2>
      <CtaWrap />
    </>
  );
}

function loadImage(event: ChangeEvent<HTMLInputElement>, bgElementId: string) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const result = e.target?.result;
    if (typeof result !== "string") return;
    const el = document.getElementById(bgElementId);
    if (el) el.style.backgroundImage = `url(${result})`;
  };
  reader.readAsDataURL(file);
}

async function downloadAd(adId: string, filename: string) {
  const adElement = document.getElementById(adId);
  if (!adElement) return;
  try {
    const dataUrl = await toJpeg(adElement, { quality: 0.95, pixelRatio: 3 });
    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error("Download failed!", error);
    window.alert(
      "Something went wrong rendering the image. Upload an image first, then try again.",
    );
  }
}

export function ProAdStudio() {
  return (
    <div className="otma-ad-studio-root">
      <header className="ad-studio-header">
        <h1>
          OTMA <span>Pro Ultra</span>
        </h1>
        <p>
          Upload your imagery. Copy highlights experienced movers, careful heavy lifting, and peace of mind —
          download 9:16 ads ready for social.
        </p>
      </header>

      <ImagePromptLibrary />

      <div className="studio-grid">
        {TEMPLATES.map((t) => (
          <div key={t.id} className="card-wrapper">
            <h3 className="template-name">{t.name}</h3>

            <div className={`ad-container ${t.layout}`} id={`ad-${t.id}`}>
              <div className="ad-bg" id={`bg-${t.id}`} />
              <div className="ad-content">{renderAdInner(t)}</div>
              <p className="ad-site-footer">{webDisplay()}</p>
            </div>

            <div className="controls">
              <label className="upload-btn" htmlFor={`upload-ad-${t.id}`}>
                Upload image
                <input
                  id={`upload-ad-${t.id}`}
                  type="file"
                  accept="image/*"
                  onChange={(e) => loadImage(e, `bg-${t.id}`)}
                />
              </label>
              <button
                type="button"
                className="download-btn"
                onClick={() => void downloadAd(`ad-${t.id}`, `OTMA_Pro_Ad_${t.id}.jpg`)}
              >
                Download post
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
