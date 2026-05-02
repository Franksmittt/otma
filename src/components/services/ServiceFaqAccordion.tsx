"use client";

import { useCallback, useId, useState } from "react";
import type { ServiceFaqItem } from "@/lib/service-faq";
export type { ServiceFaqItem } from "@/lib/service-faq";

type Surface = "light" | "dark";

const card: Record<Surface, string> = {
  light: "rounded-xl border border-zinc-300/90 bg-white shadow-sm",
  dark: "rounded-xl border border-zinc-600 bg-zinc-900/80 shadow-sm",
};

const qClass: Record<Surface, string> = {
  light: "text-base font-semibold leading-snug text-zinc-900",
  dark: "text-base font-semibold leading-snug text-white",
};

const btnHover: Record<Surface, string> = {
  light: "hover:bg-zinc-50 focus-visible:ring-offset-white",
  dark: "hover:bg-zinc-800 focus-visible:ring-offset-zinc-950",
};

const chevronWrap: Record<Surface, string> = {
  light: "border-zinc-200 bg-zinc-50 text-zinc-700",
  dark: "border-zinc-600 bg-zinc-800 text-zinc-300",
};

const answer: Record<Surface, string> = {
  light: "border-t border-zinc-100 text-zinc-700",
  dark: "border-t border-zinc-800 text-zinc-400",
};

export function ServiceFaqAccordion({
  items,
  surface = "light",
}: {
  items: readonly ServiceFaqItem[];
  surface?: Surface;
}) {
  const baseId = useId();
  const [open, setOpen] = useState<Record<number, boolean>>({});

  const toggle = useCallback((index: number) => {
    setOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  }, []);

  return (
    <div className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-x-6 md:gap-y-5">
      {items.map((item, index) => {
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-btn-${index}`;
        const isOpen = Boolean(open[index]);
        return (
          <div key={item.q} className={`flex min-w-0 flex-col ${card[surface]}`}>
            <h3 className={`m-0 ${qClass[surface]}`}>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className={`flex w-full min-h-[52px] items-start justify-between gap-3 px-4 py-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 sm:min-h-[56px] sm:px-5 sm:py-4 ${btnHover[surface]}`}
              >
                <span className="min-w-0 flex-1 pr-1">{item.q}</span>
                <span
                  className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${chevronWrap[surface]}`}
                >
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`px-4 pb-4 sm:px-5 ${answer[surface]}`}
            >
              <p className="pt-3 text-sm leading-relaxed sm:text-base">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
