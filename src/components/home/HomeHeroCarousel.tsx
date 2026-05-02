"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { SITE } from "@/lib/site-config";

const SLIDE_INTERVAL_MS = 7000;

/** On-brand hero photography (`/public/images/hero/`). Order matches carousel slides. */
const HERO_IMAGES = [
  { src: "/images/hero/home-hero-1.jpg", alt: "On The Move Again monitored removals fleet and crew" },
  { src: "/images/hero/home-hero-2.jpg", alt: "Long distance and regional furniture moves on the road" },
  { src: "/images/hero/home-hero-3.jpg", alt: "Full service home and office relocation in Alberton and surrounds" },
] as const;

type Slide = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  footnote: string;
  imageSrc: string;
  imageAlt: string;
  /** First slide carries the page h1 for SEO */
  isPrimary: boolean;
};

const SLIDES: Slide[] = [
  {
    id: "secure",
    kicker: "Alberton · GPS fleet",
    title: "High trust Alberton movers with GPS",
    description:
      "Live GPS on every truck, PMA and AMOSA crews, and a client portal so you replace guesswork with milestones across Alberton, the East Rand, Cape Town, and Durban.",
    footnote: "Alberton · Cape Town & KZN · Office · Packing & storage",
    imageSrc: HERO_IMAGES[0].src,
    imageAlt: HERO_IMAGES[0].alt,
    isPrimary: true,
  },
  {
    id: "distance",
    kicker: "N1 · N3 · nationwide",
    title: "Long distance that stays on the map",
    description:
      "Honest load and delivery windows, highway ready padding, and the same monitored standards whether you are moving across the East Rand or to Cape Town and Durban.",
    footnote: "Goods in transit options · Clear quotes · No black box logistics",
    imageSrc: HERO_IMAGES[1].src,
    imageAlt: HERO_IMAGES[1].alt,
    isPrimary: false,
  },
  {
    id: "full",
    kicker: "Joanique · one team",
    title: "Alberton pack to handover moves hub",
    description:
      "House and office removals, packing, crates, storage, cleaning, pets and vehicles. One plan from quote to handover with no cracks across Alberton or our East Rand.",
    footnote: "Owner led scheduling · Estate aware timing · Crates or boxes",
    imageSrc: HERO_IMAGES[2].src,
    imageAlt: HERO_IMAGES[2].alt,
    isPrimary: false,
  },
];

export function HomeHeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: -1 | 1) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => go(1), SLIDE_INTERVAL_MS);
    return () => window.clearInterval(t);
  }, [paused, go]);

  const slide = SLIDES[index];

  /** `lvh` stays stable when mobile browser chrome shows/hides on scroll (`svh`/`dvh` jump). Header `h-16`; below `md`, StickyCTA + safe area. */
  const heroHeight =
    "h-[calc(100lvh-4rem)] max-md:h-[calc(100lvh-4rem-5.5rem-env(safe-area-inset-bottom,0px))] min-h-0";

  return (
    <section
      className={`relative flex flex-col overflow-hidden bg-zinc-950 text-white ${heroHeight}`}
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_70%_20%,rgba(14,165,233,0.14),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="grid min-h-0 flex-1 grid-cols-1 grid-rows-[auto_minmax(0,1fr)] items-stretch gap-5 lg:grid-cols-12 lg:grid-rows-1 lg:items-stretch lg:gap-10">
          {/* Copy */}
          <div className="flex min-h-0 flex-col justify-center text-center max-lg:shrink-0 lg:col-span-5 lg:h-full lg:text-left">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sky-400 sm:text-xs">{slide.kicker}</p>
            <div className="mt-2 sm:mt-3">
              {slide.isPrimary ? (
                <h1 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[2.35rem] md:leading-[1.12] lg:text-[2.65rem]">
                  {slide.title}
                </h1>
              ) : (
                <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[2.35rem] md:leading-[1.12] lg:text-[2.65rem]">
                  {slide.title}
                </h2>
              )}
            </div>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-zinc-300 sm:mt-4 sm:text-base sm:leading-relaxed lg:mx-0 lg:text-lg">
              {slide.description}
            </p>

            <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 lg:justify-start">
              <Link
                href="/quote"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-sky-900/40 transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:min-h-[48px] sm:px-7 sm:py-3.5 sm:text-base"
              >
                Get your free quote
              </Link>
              <a
                href={`tel:${SITE.phoneE164}`}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:min-h-[48px] sm:px-7 sm:py-3.5 sm:text-base"
              >
                Call {SITE.phone}
              </a>
            </div>

            <p className="mt-4 text-xs text-zinc-400 sm:mt-5 sm:text-sm">{slide.footnote}</p>

            {/* Controls */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6 sm:gap-4 lg:justify-start">
              <div className="flex gap-2" role="tablist" aria-label="Hero slides">
                {SLIDES.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-controls={`hero-slide-panel-${s.id}`}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index ? "w-10 bg-sky-400" : "w-2.5 bg-zinc-600 hover:bg-zinc-500"
                    }`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous slide"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-600 text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800"
                  onClick={() => go(-1)}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-600 text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800"
                  onClick={() => go(1)}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Image + trust card */}
          <div className="flex min-h-0 min-w-0 flex-col items-stretch justify-center max-lg:min-h-0 lg:col-span-7 lg:h-full">
            <div
              id={`hero-slide-panel-${slide.id}`}
              role="tabpanel"
              aria-live="polite"
              className="relative flex min-h-0 w-full max-w-xl flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl max-lg:mx-auto max-lg:max-h-full lg:max-h-none lg:max-w-none"
            >
              <div className="relative min-h-[10.5rem] w-full flex-1 basis-0 lg:min-h-[13rem]">
                <Image
                  key={slide.id}
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-opacity duration-500"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" aria-hidden />
              </div>
              <div className="relative shrink-0 border-t border-white/10 bg-zinc-950/90 p-3 sm:p-4">
                <div className="flex flex-wrap items-center gap-2 text-xs sm:gap-3 sm:text-sm">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 font-medium text-white">
                    <span className="text-sky-400">★</span> {SITE.rating.value}/{SITE.rating.best} · {SITE.rating.count}+ reviews
                  </span>
                  <span className="inline-flex items-center rounded-lg bg-sky-500/20 px-3 py-1.5 font-medium text-sky-200">
                    PMA · AMOSA
                  </span>
                  <span className="inline-flex items-center rounded-lg bg-emerald-500/15 px-3 py-1.5 font-medium text-emerald-200">
                    Live GPS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
