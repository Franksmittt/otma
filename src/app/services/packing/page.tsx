import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Packing & unpacking services",
  description: "Professional packing and unpacking for your move. Tiered unpacking options. Alberton furniture removals with full packing support.",
  alternates: { canonical: "https://otma.co.za/services/packing" },
};

export default function PackingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Packing & unpacking</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        We handle the packing phase so your goods are protected and loading is efficient. We also offer clear unpacking tiers so you know exactly what to expect at the other end.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Packing</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Our teams use quality materials and standardised crates where possible. We can supply box kits if you prefer to pack yourself, or we pack for you. Either way, we keep loading secure and organised.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Unpacking tiers</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          We offer different levels of unpacking, from countertop unpacking to full cupboard organisation. When you get a quote, we’ll spell out what’s included so there are no surprises, especially in the final hour of a long move.
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
