import type { Metadata } from "next";
import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";
import { PageBand } from "@/components/page/PageBand";
import { marketingImages } from "@/lib/marketing-images";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Get a free quote",
  description:
    "Get your free, no-obligation moving quote. Local Alberton or long-distance. Monitored moves with transparent pricing.",
  alternates: { canonical: `${SITE.url}/quote` },
};

export default function QuotePage() {
  return (
    <>
      <PageBand tone="soft" contentMax="2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Get your free quote</h1>
        <p className="mt-4 leading-relaxed text-zinc-700">
          Tell us about your move. We will get back to you with a clear, monitored move quote and no hidden fees.
        </p>
      </PageBand>

      <PageBand tone="dark" contentMax="2xl">
        <div className="min-w-0">
          <ContentImage
            src={marketingImages.modernHome.src}
            alt={marketingImages.modernHome.alt}
            ratio="wide"
            sizes="(max-width: 672px) 100vw, 40rem"
          />
        </div>
      </PageBand>

      <PageBand tone="light" contentMax="2xl">
        <section aria-labelledby="quote-step1">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-sm font-medium text-sky-700">Step 1 of 3</p>
            <h2 id="quote-step1" className="mt-1 text-lg font-semibold text-zinc-900">
              Move details
            </h2>
            <p className="mt-2 text-sm text-zinc-700">
              Where are you moving from and to, and when? We use this to give you an accurate quote.
            </p>
            <form className="mt-4 space-y-4" action="/quote/inventory" method="get">
              <div>
                <label htmlFor="origin" className="block text-sm font-medium text-zinc-700">
                  From (address or suburb) *
                </label>
                <input
                  id="origin"
                  type="text"
                  name="origin"
                  placeholder="e.g. Meyersdal, Alberton"
                  required
                  className="mt-1 min-h-[44px] w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900"
                />
              </div>
              <div>
                <label htmlFor="dest" className="block text-sm font-medium text-zinc-700">
                  To (address or suburb) *
                </label>
                <input
                  id="dest"
                  type="text"
                  name="dest"
                  placeholder="e.g. Cape Town / same area"
                  required
                  className="mt-1 min-h-[44px] w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-zinc-700">
                  Preferred move date *
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  required
                  className="mt-1 min-h-[44px] w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-700"
                >
                  Next: Your inventory
                </button>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 font-medium text-zinc-900 hover:border-sky-600"
                >
                  Prefer to call or WhatsApp?
                </Link>
              </div>
            </form>
          </div>
        </section>

        <p className="mt-6 text-sm text-zinc-700">
          Or get a quote the fast way: call us on{" "}
          <a href={`tel:${SITE.phoneE164}`} className="font-medium text-sky-700 hover:underline">
            {SITE.phone}
          </a>{" "}
          or{" "}
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sky-700 hover:underline"
          >
            WhatsApp
          </a>
          .
        </p>

        <div className="mt-10">
          <Link href="/" className="text-sky-700 hover:underline">
            ← Back to home
          </Link>
        </div>
      </PageBand>
    </>
  );
}
