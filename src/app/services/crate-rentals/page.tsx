import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plastic crate rentals",
  description: "Reusable plastic moving crates vs cardboard. Stronger, stackable, eco-friendly. Crate hire for furniture removals in Alberton.",
  alternates: { canonical: "https://otma.co.za/services/crate-rentals" },
};

export default function CrateRentalsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Plastic crate rentals</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Ditch the cardboard. Our heavy-duty plastic crates are reusable, crush-proof, and better for your belongings and the environment.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Crates vs cardboard</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[400px] border border-zinc-200 dark:border-zinc-700">
            <thead>
              <tr className="bg-zinc-100 dark:bg-zinc-800">
                <th className="border-b border-zinc-200 p-3 text-left dark:border-zinc-700">Factor</th>
                <th className="border-b border-zinc-200 p-3 text-left dark:border-zinc-700">Cardboard boxes</th>
                <th className="border-b border-zinc-200 p-3 text-left dark:border-zinc-700">OTMA plastic crates</th>
              </tr>
            </thead>
            <tbody className="text-sm text-zinc-600 dark:text-zinc-400">
              <tr className="border-b border-zinc-200 dark:border-zinc-700">
                <td className="p-3 font-medium">Protection</td>
                <td className="p-3">Can crush; not waterproof</td>
                <td className="p-3">Crush-proof; rigid; waterproof</td>
              </tr>
              <tr className="border-b border-zinc-200 dark:border-zinc-700">
                <td className="p-3 font-medium">Setup</td>
                <td className="p-3">Tape, assemble, break down</td>
                <td className="p-3">Ready to pack; no tape</td>
              </tr>
              <tr className="border-b border-zinc-200 dark:border-zinc-700">
                <td className="p-3 font-medium">Environment</td>
                <td className="p-3">Single-use; disposal</td>
                <td className="p-3">Reusable; circular economy</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Loading</td>
                <td className="p-3">Uneven stacking</td>
                <td className="p-3">Standardised; max truck efficiency</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">How it works</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          We deliver crates for your pack, you use them for the move, and we collect after delivery. One transparent rental fee with no hidden costs. Ideal for fragile items and electronics.
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
