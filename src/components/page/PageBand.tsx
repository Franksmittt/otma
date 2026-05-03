import type { ReactNode } from "react";

export type PageBandTone = "light" | "soft" | "dark" | "sky";

const TONE_SHELL: Record<PageBandTone, string> = {
  light: "bg-white text-zinc-900",
  soft: "bg-zinc-50 text-zinc-900",
  dark: "bg-zinc-950 text-zinc-100",
  sky: "border-y border-sky-200/80 bg-sky-50/90 text-zinc-900",
};

const INNER_PAD = "mx-auto w-full min-w-0 px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16";

const MAX_W = {
  "6xl": "max-w-6xl",
  "4xl": "max-w-4xl",
  "3xl": "max-w-3xl",
  "2xl": "max-w-2xl",
} as const;

type PageBandProps = {
  tone: PageBandTone;
  children: ReactNode;
  /** Default full marketing width; use narrower for article-style pages */
  contentMax?: keyof typeof MAX_W;
  /** Extra classes on the outer `<section>` */
  className?: string;
  /** Extra classes on the inner width container (padding/max come from defaults unless overridden here) */
  innerClassName?: string;
  /** Semantic section label for accessibility */
  "aria-labelledby"?: string;
};

export function PageBand({
  tone,
  children,
  contentMax = "6xl",
  className = "",
  innerClassName = "",
  "aria-labelledby": ariaLabelledBy,
}: PageBandProps) {
  return (
    <section
      className={`${TONE_SHELL[tone]} min-w-0 ${className}`.trim()}
      aria-labelledby={ariaLabelledBy}
    >
      <div className={`${INNER_PAD} ${MAX_W[contentMax]} min-w-0 ${innerClassName}`.trim()}>{children}</div>
    </section>
  );
}
