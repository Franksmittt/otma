"use client";

import Image from "next/image";
import { SOCIAL_TEMPLATE_IMAGES } from "@/lib/social-template-images";

export function SocialTemplateLibrary() {
  return (
    <section className="social-template-library mt-12 w-full max-w-6xl border-t border-zinc-800 pt-10">
      <div className="mb-6 text-center">
        <h2
          className="text-xl font-bold tracking-tight text-white sm:text-2xl"
          style={{ fontFamily: "var(--font-banner-montserrat), ui-sans-serif, system-ui, sans-serif" }}
        >
          Social template image library
        </h2>
        <p className="mt-2 text-sm text-zinc-400 sm:text-base">
          Ready-made visuals for posts and ads. Preview and download JPEGs when you need them.
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {SOCIAL_TEMPLATE_IMAGES.map((item) => (
          <li
            key={item.id}
            className="flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 shadow-lg"
          >
            <div className="relative aspect-[9/16] w-full min-h-0 bg-zinc-950">
              <Image
                src={item.path}
                alt={item.label}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </div>
            <div className="flex flex-col gap-2 p-3">
              <span className="truncate text-center text-xs font-medium text-zinc-300">{item.label}</span>
              <a
                href={item.path}
                download={item.downloadName}
                className="rounded-lg bg-zinc-800 py-2 text-center text-xs font-semibold text-sky-400 transition hover:bg-zinc-700 hover:text-sky-300"
              >
                Download JPEG
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
