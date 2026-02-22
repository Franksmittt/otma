import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Long distance movers – Gauteng to Cape Town & KZN",
  description: "Long-distance furniture removals from Alberton and Gauteng to Cape Town, Durban, and nationwide. Monitored trucks and transparent pricing.",
  alternates: { canonical: "https://otma.co.za/services/long-distance" },
};

export default function LongDistancePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Long-distance movers</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Moving from Gauteng to Cape Town, Durban, or anywhere else in South Africa? We run regular long-haul routes with monitored trucks and clear transit times so you know exactly when your goods will arrive.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Popular routes</h2>
        <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
          <li><strong>Gauteng to Cape Town:</strong> N1 route. We’ll give you an estimated transit window when you quote.</li>
          <li><strong>Gauteng to Durban / KZN:</strong> N3, typically 1 to 2 working days depending on load and consolidation.</li>
          <li><strong>Gauteng to Port Elizabeth, George, Eastern Cape:</strong> Long-haul with consolidated loads where it makes sense.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Why use us for long-distance</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Long moves are when you need visibility most. Our trucks are fitted with GPS and in-transit monitoring. You can follow your move in the client portal and see milestones like “Packing complete”, “In transit”, and “Arrived at destination”. We also carry Goods-in-Transit insurance and publish our coverage limits so you’re protected.
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
