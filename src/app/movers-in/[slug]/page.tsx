import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SUBURBS } from "@/lib/site-config";
import { SUBURB_CONTENT, type SuburbSlug } from "@/lib/suburb-content";
import { SITE } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SUBURBS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const suburb = SUBURBS.find((s) => s.slug === slug);
  if (!suburb) return { title: "Movers" };
  const content = SUBURB_CONTENT[slug as SuburbSlug];
  if (!content) return { title: `Movers in ${suburb.name}` };
  const canonical = `${SITE.url}/movers-in/${slug}`;
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical },
  };
}

export default async function SuburbPage({ params }: Props) {
  const { slug } = await params;
  const suburb = SUBURBS.find((s) => s.slug === slug);
  if (!suburb) notFound();
  const content = SUBURB_CONTENT[slug as SuburbSlug];
  if (!content) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">{content.h1}</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{content.description}</p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Areas we cover in {suburb.name}</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          We know {suburb.name}: {suburb.character}. Landmarks and areas we’re familiar with include:
        </p>
        <ul className="mt-3 list-inside list-disc space-y-1 text-zinc-600 dark:text-zinc-400">
          {content.landmarks.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Why choose us in {suburb.name}</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          We’re based in Alberton and serve the East Rand daily. Every move is monitored (“Smile! You’re on Camera!”), we’re PMA and AMOSA accredited, and we offer transparent pricing and insurance. Local or long-distance, we’ve got you.
        </p>
        <ul className="mt-3 list-inside list-disc space-y-1 text-zinc-600 dark:text-zinc-400">
          <li>Real-time GPS tracking and in-transit monitoring</li>
          <li>Goods-in-Transit insurance (see our Insurance page for limits)</li>
          <li>Packing, unpacking, storage, and post-move cleaning</li>
          <li>Plastic crate rentals and specialist pet or vehicle moves</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Get a quote for {suburb.name}</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Tell us your move date and what you’re moving. We’ll get back with a clear quote. You can also call {SITE.phone} or WhatsApp us for a quick quote.
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/quote" className="inline-block rounded-full bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-700">
          Get a free quote
        </Link>
        <Link href="/services" className="inline-block rounded-full border border-zinc-300 px-6 py-3 font-medium dark:border-zinc-600">
          Our services
        </Link>
        <Link href="/contact" className="inline-block rounded-full border border-zinc-300 px-6 py-3 font-medium dark:border-zinc-600">
          Contact us
        </Link>
      </div>
    </div>
  );
}
