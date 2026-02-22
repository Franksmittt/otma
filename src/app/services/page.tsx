import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description: `Full-service furniture removals from ${SITE.name}: house & office moves, packing, crate rentals, storage, cleaning. Alberton & nationwide.`,
  alternates: { canonical: `${SITE.url}/services` },
};

const SERVICES = [
  { href: "/services/house-removals", title: "House & office removals", desc: "Local Alberton moves and long-distance to Cape Town, KZN and beyond. 1-ton to 8-ton fleet." },
  { href: "/services/long-distance", title: "Long-distance moves", desc: "Gauteng to Cape Town, Durban, and nationwide. Monitored trucks and clear transit times." },
  { href: "/services/packing", title: "Packing & unpacking", desc: "Professional packing and tiered unpacking so you know exactly what to expect at the other end." },
  { href: "/services/cleaning", title: "Post-move cleaning", desc: "Leave your old property spotless for handover. Ideal for rentals and property transfers." },
  { href: "/services/storage", title: "Storage & warehousing", desc: "Short- or long-term storage at our secure Joanique Eco Park facility." },
  { href: "/services/crate-rentals", title: "Plastic crate rentals", desc: "Reusable crates: stronger, stackable, and better for the environment than cardboard." },
  { href: "/services/pet-relocation", title: "VIP pet relocation", desc: "Stress-less pet moves with care and climate-controlled transit." },
  { href: "/services/vehicle-transport", title: "Vehicle transport", desc: "Cars, boats, motorcycles moved safely on monitored carriers." },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Our services</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        From a single-room move to a full house or office relocation, plus packing, storage, and specialist moves, we’re your one stop for furniture removals in Alberton and beyond.
      </p>

      <ul className="mt-12 space-y-6">
        {SERVICES.map(({ href, title, desc }) => (
          <li key={href}>
            <Link
              href={href}
              className="block rounded-xl border border-zinc-200 p-6 transition hover:border-sky-600 hover:shadow-md dark:border-zinc-700 dark:hover:border-sky-600"
            >
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">{title}</h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">{desc}</p>
              <span className="mt-3 inline-block font-medium text-sky-700">Learn more →</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
