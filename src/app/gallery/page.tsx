import type { Metadata } from "next";
import Link from "next/link";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { PageBand } from "@/components/page/PageBand";
import { GALLERY_IMAGES } from "@/lib/gallery-images";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photos of ${SITE.name} fleet, crew, and work around Alberton and on the road. Monitored removals and Joanique Eco Park base.`,
  alternates: { canonical: `${SITE.url}/gallery` },
};

export default function GalleryPage() {
  const hasImages = GALLERY_IMAGES.length > 0;

  return (
    <>
      <PageBand tone="soft" contentMax="6xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">Gallery</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.4rem] lg:leading-tight">
          On the road and at Joanique Eco Park
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-700">
          A look at our crews, fleet, and the kind of moves we run every week. Tap any photo to view it larger, then use{" "}
          <span className="whitespace-nowrap">Prev / Next</span> or arrow keys on your keyboard.
        </p>
      </PageBand>

      <PageBand tone="light" contentMax="6xl" innerClassName="pt-0 sm:pt-0">
        {hasImages ? (
          <GalleryGrid items={GALLERY_IMAGES} />
        ) : (
          <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/80 px-6 py-14 text-center sm:px-10 sm:py-16">
            <p className="text-lg font-semibold text-zinc-900">Photos coming soon</p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
              We are preparing a full gallery of on-site and on-the-road shots. To add images: place JPG or WebP files in{" "}
              <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs text-zinc-800 sm:text-sm">public/images/gallery/</code>{" "}
              and list each path and alt text in{" "}
              <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs text-zinc-800 sm:text-sm">
                src/lib/gallery-images.ts
              </code>
              . The grid supports dozens of images and stays responsive on phones and desktops.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/quote"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
              >
                Get a free quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 hover:border-sky-500 hover:bg-sky-50"
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </PageBand>
    </>
  );
}
