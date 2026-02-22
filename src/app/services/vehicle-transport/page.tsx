import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vehicle transport",
  description: "Car, boat, motorcycle transport. Monitored carriers. High-value vehicle relocation with On The Move Again, Alberton.",
  alternates: { canonical: "https://otma.co.za/services/vehicle-transport" },
};

export default function VehicleTransportPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Vehicle transport</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Moving a car, boat, or motorcycle? We use monitored carriers so your high-value assets are tracked and secure from collection to delivery.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">What we move</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
          <li>Motor vehicles</li>
          <li>Boats</li>
          <li>Motorcycles</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Security</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Our carriers are fitted with tracking and monitoring. You get the same peace of mind we offer for furniture removals, with no unverified transit.
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
