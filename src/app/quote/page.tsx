import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get a free quote",
  description: "Get your free, no-obligation moving quote. Local Alberton or long-distance. Monitored moves with transparent pricing.",
  alternates: { canonical: `${SITE.url}/quote` },
};

export default function QuotePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Get your free quote</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Tell us about your move. We’ll get back to you with a clear, monitored move quote and no hidden fees.
      </p>

      <section className="mt-10">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/50">
          <p className="text-sm font-medium text-sky-700 dark:text-sky-400">Step 1 of 3</p>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mt-1">Move details</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Where are you moving from and to, and when? We use this to give you an accurate quote.</p>
          <form className="mt-4 space-y-4" action="/quote/inventory" method="get">
            <div>
              <label htmlFor="origin" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                From (address or suburb) *
              </label>
              <input
                id="origin"
                type="text"
                name="origin"
                placeholder="e.g. Meyersdal, Alberton"
                required
                className="mt-1 min-h-[44px] w-full rounded-lg border border-zinc-300 px-4 py-3 dark:border-zinc-600 dark:bg-zinc-800"
              />
            </div>
            <div>
              <label htmlFor="dest" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                To (address or suburb) *
              </label>
              <input
                id="dest"
                type="text"
                name="dest"
                placeholder="e.g. Cape Town / same area"
                required
                className="mt-1 min-h-[44px] w-full rounded-lg border border-zinc-300 px-4 py-3 dark:border-zinc-600 dark:bg-zinc-800"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Preferred move date *
              </label>
              <input
                id="date"
                type="date"
                name="date"
                required
                className="mt-1 min-h-[44px] w-full rounded-lg border border-zinc-300 px-4 py-3 dark:border-zinc-600 dark:bg-zinc-800"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-full bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-700"
              >
                Next: Your inventory
              </button>
              <Link href="/contact" className="rounded-full border border-zinc-300 px-6 py-3 font-medium dark:border-zinc-600">
                Prefer to call or WhatsApp?
              </Link>
            </div>
          </form>
        </div>
      </section>

      <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
        Or get a quote the fast way: call us on{" "}
        <a href="tel:+27271000936" className="font-medium text-sky-700 hover:underline">
          072 100 0936
        </a>{" "}
        or{" "}
        <a href="https://wa.me/27271000936" target="_blank" rel="noopener noreferrer" className="font-medium text-sky-700 hover:underline">
          WhatsApp
        </a>.
      </p>

      <div className="mt-10">
        <Link href="/" className="text-sky-700 hover:underline">← Back to home</Link>
      </div>
    </div>
  );
}
