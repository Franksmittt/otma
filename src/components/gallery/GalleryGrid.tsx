"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import type { GalleryImage } from "@/lib/gallery-images";

type Props = {
  items: readonly GalleryImage[];
};

export function GalleryGrid({ items }: Props) {
  const dialogTitleId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  const go = useCallback(
    (dir: -1 | 1) => {
      setOpenIndex((i) => {
        if (i === null) return null;
        return (i + dir + items.length) % items.length;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, go]);

  if (items.length === 0) return null;

  return (
    <>
      <ul className="grid min-w-0 grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {items.map((item, index) => (
          <li key={item.src} className="min-w-0">
            <button
              type="button"
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 shadow-sm ring-zinc-950/5 transition hover:border-sky-400 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-800 dark:ring-white/10"
              onClick={() => setOpenIndex(index)}
              aria-label={`Open image ${index + 1} of ${items.length}: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/70 to-transparent p-2 pt-8 text-left text-xs font-medium text-white opacity-0 transition group-hover:opacity-100 sm:text-sm">
                <span className="line-clamp-2">{item.alt}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null ? (
        <div
          className="fixed inset-0 z-[30000] flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
        >
          <p id={dialogTitleId} className="sr-only">
            Image {openIndex + 1} of {items.length}. Use arrow keys for previous and next, Escape to close.
          </p>
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close gallery"
            onClick={close}
          />
          <div className="relative z-[30001] flex max-h-[90vh] w-full max-w-5xl flex-col gap-3">
            <div className="relative aspect-[4/3] w-full min-h-0 overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-2xl sm:aspect-video">
              <Image
                key={items[openIndex].src}
                src={items[openIndex].src}
                alt={items[openIndex].alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <p className="max-w-prose text-center text-sm text-zinc-300">{items[openIndex].alt}</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white hover:bg-white/20"
                onClick={() => go(-1)}
                aria-label="Previous image"
              >
                ← Prev
              </button>
              <button
                type="button"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-sky-600 px-5 text-sm font-semibold text-white hover:bg-sky-500"
                onClick={close}
              >
                Close
              </button>
              <button
                type="button"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white hover:bg-white/20"
                onClick={() => go(1)}
                aria-label="Next image"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
