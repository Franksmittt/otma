import type { ImagePromptRow } from "./types";
import heroMarketing from "./prompts-hero-marketing.json";
import insuranceAbout from "./prompts-insurance-about.json";
import serviceLine from "./prompts-service-line.json";
import templates01 from "./prompts-templates-01-10.json";
import templates11 from "./prompts-templates-11-20.json";

export { AD_STUDIO_PROMPT_METHODOLOGY } from "./prompts-methodology";

export type { ImagePromptRow } from "./types";

export const AD_STUDIO_PROMPT_TEMPLATE_ALL: ImagePromptRow[] = [
  ...(templates01 as ImagePromptRow[]),
  ...(templates11 as ImagePromptRow[]),
];

export type PromptBundleMeta = {
  id: string;
  title: string;
  description: string;
  data: ImagePromptRow[] | string;
};

export const AD_STUDIO_PROMPT_BUNDLES: PromptBundleMeta[] = [
  {
    id: "service-line",
    title: "Service line (8 prompts)",
    description: "Aligns with /services cards: house removals through vehicle transport.",
    data: serviceLine as ImagePromptRow[],
  },
  {
    id: "insurance-about",
    title: "Insurance + about (2 prompts)",
    description: "High-value inventory / GIT mindset + owner-led Alberton briefing.",
    data: insuranceAbout as ImagePromptRow[],
  },
  {
    id: "hero-marketing",
    title: "Hero / marketing strip (3 prompts)",
    description: "GPS fleet monitoring, highway-ready truck prep, coordinated office hub.",
    data: heroMarketing as ImagePromptRow[],
  },
  {
    id: "templates-1-20",
    title: "Ad templates 1–20 (20 prompts)",
    description: "Matches Pro Ultra templates 1–20 (stairs, elevator, through roller door).",
    data: AD_STUDIO_PROMPT_TEMPLATE_ALL,
  },
];
