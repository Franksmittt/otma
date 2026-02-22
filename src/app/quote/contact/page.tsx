import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quote – Contact details",
  description: "Submit your contact details to receive your free moving quote.",
  alternates: { canonical: `${SITE.url}/quote/contact` },
};

export default function QuoteContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Almost there</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Leave your details and we’ll send you a free, no-obligation quote by email or phone. We’ll never spam you or share your information.
      </p>

      <section className="mt-10">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/50">
          <p className="text-sm font-medium text-sky-700 dark:text-sky-400">Step 3 of 3</p>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mt-1">Contact details</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">We’ll use these to send your quote and confirm your move details. A team member may call to clarify anything.</p>
          <form className="mt-4 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 dark:border-zinc-600 dark:bg-zinc-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 dark:border-zinc-600 dark:bg-zinc-800"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Phone *
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                placeholder="072 100 0000"
                className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 dark:border-zinc-600 dark:bg-zinc-800"
              />
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Any extra details (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 dark:border-zinc-600 dark:bg-zinc-800"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-700"
            >
              Get my free quote
            </button>
          </form>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            We aim to respond within one working day. For urgent moves, call or WhatsApp us for a same-day quote.
          </p>
        </div>
      </section>

      <div className="mt-6 flex gap-6">
        <Link href="/quote/inventory" className="text-sky-700 hover:underline">← Back to inventory</Link>
        <Link href="/quote" className="text-zinc-500 hover:underline">Start over</Link>
      </div>
    </div>
  );
}
