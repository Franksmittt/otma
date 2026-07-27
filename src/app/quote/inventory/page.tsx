import type { Metadata } from "next";
import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";
import { PageBand } from "@/components/page/PageBand";
import { marketingImages } from "@/lib/marketing-images";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Quote – Your inventory",
  description: "Add your items for an accurate moving quote. Visual inventory for furniture removals.",
  alternates: { canonical: `${SITE.url}/quote/inventory` },
};

type InventorySearchParams = Promise<{ origin?: string; dest?: string; date?: string }>;

export default async function QuoteInventoryPage({ searchParams }: { searchParams: InventorySearchParams }) {
  const sp = await searchParams;
  const backQs = new URLSearchParams();
  if (sp.origin) backQs.set("origin", sp.origin);
  if (sp.dest) backQs.set("dest", sp.dest);
  if (sp.date) backQs.set("date", sp.date);
  const backHref = backQs.toString() ? `/quote?${backQs.toString()}` : "/quote";

  return (
    <>
      <PageBand tone="soft" contentMax="2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">What are you moving?</h1>
        <p className="mt-4 leading-relaxed text-zinc-700">
          Add the main items (rooms or pieces) so we can estimate vehicle size and give you an accurate quote. You can refine
          this when we call you.
        </p>
      </PageBand>

      <PageBand tone="dark" contentMax="2xl">
        <div className="min-w-0">
          <ContentImage
            src={marketingImages.bedroomInterior.src}
            alt={marketingImages.bedroomInterior.alt}
            ratio="wide"
          />
        </div>
      </PageBand>

      <PageBand tone="light" contentMax="2xl">
        <section aria-labelledby="quote-inv-form">
          <div className="min-w-0 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-sm font-medium text-sky-700">Step 2 of 3</p>
            <h2 id="quote-inv-form" className="mt-1 text-lg font-semibold text-zinc-900">
              Your inventory
            </h2>
            <p className="mt-2 text-sm text-zinc-700">
              List the main rooms and big items (beds, fridge, couch, etc.). We use this to recommend the right truck size and
              give you an accurate quote. In the next step you can also upload photos for tricky access, fragile items, or
              unusually large pieces.
            </p>
            <form action="/quote/contact" method="get" className="mt-4">
              <input type="hidden" name="origin" value={sp.origin ?? ""} />
              <input type="hidden" name="dest" value={sp.dest ?? ""} />
              <input type="hidden" name="date" value={sp.date ?? ""} />
              <textarea
                name="inventory"
                rows={6}
                placeholder="e.g. 3-bed house, lounge suite, fridge, washing machine, 2 beds, cupboards..."
                className="mt-4 min-h-[10rem] w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900"
              />
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-700"
                >
                  Next: Contact details
                </button>
                <Link
                  href={backHref}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 font-medium text-zinc-900 hover:border-sky-600"
                >
                  Back
                </Link>
              </div>
            </form>
          </div>
        </section>
        <div className="mt-6">
          <Link href={backHref} className="text-sky-700 hover:underline">
            ← Back to move details
          </Link>
        </div>
      </PageBand>
    </>
  );
}
