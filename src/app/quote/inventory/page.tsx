import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Quote – Your inventory",
  description: "Add your items for an accurate moving quote. Visual inventory for furniture removals.",
  alternates: { canonical: `${SITE.url}/quote/inventory` },
};

export default function QuoteInventoryPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">What are you moving?</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Add the main items (rooms or pieces) so we can estimate vehicle size and give you an accurate quote. You can refine this when we call you.
      </p>

      <section className="mt-10">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/50">
          <p className="text-sm font-medium text-sky-700 dark:text-sky-400">Step 2 of 3</p>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mt-1">Your inventory</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            List the main rooms and big items (beds, fridge, couch, etc.). We use this to recommend the right truck size and give you an accurate quote. We’ll confirm details when we call you.
          </p>
          <form action="/quote/contact" method="get" className="mt-4">
          <textarea
            name="inventory"
            rows={6}
            placeholder="e.g. 3-bed house, lounge suite, fridge, washing machine, 2 beds, cupboards..."
            className="mt-4 w-full rounded-lg border border-zinc-300 px-4 py-3 dark:border-zinc-600 dark:bg-zinc-800"
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="submit" className="rounded-full bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-700">
              Next: Contact details
            </button>
            <Link href="/quote" className="inline-block rounded-full border border-zinc-300 px-6 py-3 font-medium dark:border-zinc-600">
              Back
            </Link>
          </div>
          </form>
        </div>
      </section>
      <div className="mt-6">
        <Link href="/quote" className="text-sky-700 hover:underline">← Back to move details</Link>
      </div>
    </div>
  );
}
