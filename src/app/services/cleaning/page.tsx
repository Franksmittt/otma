import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Post-move cleaning",
  description: "Post-move cleaning so you leave your old property spotless. Ideal for rental handover and property transfers. Alberton removals.",
  alternates: { canonical: "https://otma.co.za/services/cleaning" },
};

export default function CleaningPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Post-move cleaning</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Moving out often means leaving the property clean for handover, for your landlord or for the new owner. We offer post-move cleaning so you can focus on settling in instead of scrubbing.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Why add cleaning</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Bundling cleaning with your move simplifies things and helps you get your deposit back or meet transfer conditions. One team, one booking: move and clean in one go.
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
