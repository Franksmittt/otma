import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Storage & warehousing",
  description: `Short- and long-term storage at ${SITE.name}'s secure Joanique Eco Park facility in Alberton. Safe, monitored storage for your move.`,
  alternates: { canonical: `${SITE.url}/services/storage` },
};

export default function StoragePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Storage & warehousing</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Need a gap between moving out and moving in? Renovating? We offer secure short- and long-term storage at our Joanique Eco Park base in Verwoerdpark, Alberton.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Where we store</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Your goods are stored at {SITE.address.street}, {SITE.address.locality}. Our facility is modern, secure, and part of our daily operations, so your belongings are in the same place we run our removals from.
        </p>
      </section>

      <div className="mt-10">
        <Link href="/quote" className="inline-block rounded-full bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-700">
          Get a free quote
        </Link>
      </div>
    </div>
  );
}
