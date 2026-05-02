import type { Metadata } from "next";
import Link from "next/link";
import { PageBand } from "@/components/page/PageBand";
import { ServiceCtaBand } from "@/components/services/ServiceCtaBand";
import { ServiceHighlightBand } from "@/components/services/ServiceHighlightBand";
import { ServiceLedeQuartet } from "@/components/services/ServiceLedeQuartet";
import { ServiceMasthead } from "@/components/services/ServiceMasthead";
import { marketingImages } from "@/lib/marketing-images";
import { SERVICE_LINKS } from "@/lib/services-list";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description: `Full-service furniture removals from ${SITE.name}: house & office moves, packing, crate rentals, storage, cleaning. Alberton & nationwide.`,
  alternates: { canonical: `${SITE.url}/services` },
};

const LEDE = [
  { src: marketingImages.deliveryVan.src, alt: marketingImages.deliveryVan.alt },
  { src: marketingImages.movingBoxes.src, alt: marketingImages.movingBoxes.alt },
  { src: marketingImages.warehouse.src, alt: marketingImages.warehouse.alt },
  { src: marketingImages.modernHome.src, alt: marketingImages.modernHome.alt },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageBand tone="soft" innerClassName="pb-0 sm:pb-0 lg:pb-0">
        <ServiceMasthead
          title="Our services"
          intro={
            <p>
              From a single-room move to a full house or office relocation, plus packing, storage, and specialist moves, we
              are your one stop for furniture removals in Alberton and beyond—monitored, accredited, and explained in plain
              language.
            </p>
          }
        />
      </PageBand>

      <PageBand tone="dark" innerClassName="pt-6 sm:pt-8">
        <ServiceLedeQuartet items={LEDE} />
      </PageBand>

      <PageBand tone="light" aria-labelledby="services-list-heading">
        <h2 id="services-list-heading" className="text-2xl font-semibold tracking-tight text-zinc-900">
          Explore each service
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700">
          Every page follows the same layout rhythm as our house removals guide—masthead, imagery, detail sections, and a
          clear quote path—so you always know where you are.
        </p>
        <ul className="mt-10 grid list-none gap-4 p-0 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {SERVICE_LINKS.map(({ href, title, desc }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex min-h-[44px] flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-sky-600 hover:shadow-md sm:p-6"
              >
                <span className="text-lg font-semibold text-zinc-900 sm:text-xl">{title}</span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-zinc-700 sm:text-base">{desc}</span>
                <span className="mt-4 text-sm font-medium text-sky-700">Learn more →</span>
              </Link>
            </li>
          ))}
        </ul>
      </PageBand>

      <PageBand tone="dark">
        <ServiceHighlightBand
          kicker="Why OTMA"
          heading="Accredited, monitored, owner-led"
          body={`${SITE.name} is PMA and AMOSA accredited, runs live GPS and in-transit monitoring, and publishes insurance limits honestly. Pick a service above—or go straight to a quote if you already know what you need.`}
          tiles={[
            {
              src: marketingImages.connectivity.src,
              alt: marketingImages.connectivity.alt,
            },
            {
              src: marketingImages.officePlanning.src,
              alt: marketingImages.officePlanning.alt,
            },
            {
              src: marketingImages.cityLogistics.src,
              alt: marketingImages.cityLogistics.alt,
            },
          ]}
        />
      </PageBand>

      <PageBand tone="sky" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="services-index-cta"
          heading="Not sure which service fits?"
          description="Start a quote with your addresses and dates—we will steer you to the right crew and kit."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: "/contact", label: "Contact us" }}
        />
      </PageBand>
    </>
  );
}
