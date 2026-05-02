import type { ReactNode } from "react";
import type { ServiceFaqItem } from "@/lib/service-faq";
import { ServiceFaqAccordion } from "@/components/services/ServiceFaqAccordion";

type Props = {
  /** `id` on the `<h2>` for `aria-labelledby` on the wrapping section */
  id: string;
  items: readonly ServiceFaqItem[];
  /** Defaults to match `/services/house-removals` */
  title?: string;
  /** Defaults to match house removals */
  subtitle?: string;
  /** Optional line under subtitle (e.g. link to full FAQ) */
  afterSubtitle?: ReactNode;
  /** Accordion card surface — use `dark` on dark `PageBand`s */
  accordionSurface?: "light" | "dark";
};

/**
 * Shared FAQ block: centered heading + helper line + same accordion grid as house removals.
 */
export function ServiceFaqSection({
  id,
  items,
  title = "Frequently asked questions",
  subtitle = "Tap a question to expand the answer.",
  afterSubtitle,
  accordionSurface = "light",
}: Props) {
  return (
    <>
      <div className="text-center">
        <h2 id={id} className="text-2xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-zinc-700">{subtitle}</p>
        {afterSubtitle ? (
          <div className="mx-auto mt-3 max-w-2xl text-center text-sm text-zinc-700">{afterSubtitle}</div>
        ) : null}
      </div>
      <ServiceFaqAccordion items={items} surface={accordionSurface} />
    </>
  );
}
