import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentImage } from "@/components/ContentImage";
import { PageBand } from "@/components/page/PageBand";
import { ServiceCtaBand } from "@/components/services/ServiceCtaBand";
import { marketingImages } from "@/lib/marketing-images";
import { SITE, SUBURBS } from "@/lib/site-config";
import { SUBURB_CONTENT, type SuburbSlug } from "@/lib/suburb-content";

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
    <>
      <PageBand tone="soft" contentMax="4xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">{content.h1}</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-700">{content.description}</p>
      </PageBand>

      <PageBand tone="dark" contentMax="4xl">
        <div className="min-w-0 w-full max-w-2xl">
          <ContentImage
            src={marketingImages.deliveryVan.src}
            alt={`${marketingImages.deliveryVan.alt}, ${suburb.name} area`}
            ratio="wide"
            sizes="(max-width: 896px) 100vw, 42rem"
          />
        </div>
      </PageBand>

      <PageBand tone="light" contentMax="4xl">
        <section aria-labelledby={`areas-${slug}`}>
          <h2 id={`areas-${slug}`} className="text-xl font-semibold text-zinc-900">
            Areas we cover in {suburb.name}
          </h2>
          <p className="mt-2 text-zinc-700">
            We know {suburb.name}: {suburb.character}. Landmarks and areas we are familiar with include:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1 text-zinc-700">
            {content.landmarks.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </section>
      </PageBand>

      <PageBand tone="soft" contentMax="4xl">
        <section className="grid min-w-0 gap-8 lg:grid-cols-2 lg:items-start lg:gap-10" aria-labelledby={`why-${slug}`}>
          <div className="min-w-0">
            <h2 id={`why-${slug}`} className="text-xl font-semibold text-zinc-900">
              Why choose us in {suburb.name}
            </h2>
            <p className="mt-3 leading-relaxed text-zinc-700">
              We are based in Alberton and serve the East Rand daily. Every move is monitored (&quot;Smile! You&apos;re on Camera!&quot;),
              we are PMA and AMOSA accredited, and we offer transparent pricing and insurance. Local or long-distance, we
              have you covered.
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-zinc-700">
              <li>Real-time GPS tracking and in-transit monitoring</li>
              <li>Goods-in-Transit insurance (see our Insurance page for limits)</li>
              <li>Packing, unpacking, storage, and post-move cleaning</li>
              <li>Plastic crate rentals and specialist pet or vehicle moves</li>
            </ul>
          </div>
          <div className="min-w-0 lg:pt-1">
            <ContentImage
              src={marketingImages.cozyInterior.src}
              alt={`${marketingImages.cozyInterior.alt}, ${suburb.name} area`}
              ratio="photo"
            />
          </div>
        </section>
      </PageBand>

      <PageBand tone="dark" contentMax="4xl">
        <section aria-labelledby={`quote-${slug}`}>
          <h2 id={`quote-${slug}`} className="text-xl font-semibold text-white">
            Get a quote for {suburb.name}
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-400">
            Tell us your move date and what you are moving. We will get back with a clear quote. You can also call {SITE.phone}{" "}
            or WhatsApp us for a quick quote.
          </p>
        </section>
      </PageBand>

      <PageBand tone="sky" contentMax="4xl" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id={`${slug}-cta`}
          heading={`Book monitored movers in ${suburb.name}`}
          description="Free quote, transparent insurance numbers, and live tracking."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: "/contact", label: "Contact us" }}
        />
      </PageBand>
    </>
  );
}
