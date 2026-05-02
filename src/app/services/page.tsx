import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBand } from "@/components/page/PageBand";
import { ServiceCtaBand } from "@/components/services/ServiceCtaBand";
import { ServiceHighlightBand } from "@/components/services/ServiceHighlightBand";
import { ServiceLedeQuartet } from "@/components/services/ServiceLedeQuartet";
import { ServiceMasthead } from "@/components/services/ServiceMasthead";
import { SERVICE_LINKS } from "@/lib/services-list";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description: `Full-service furniture removals from ${SITE.name}: house & office moves, packing, crate rentals, storage, cleaning. Alberton & nationwide.`,
  alternates: { canonical: `${SITE.url}/services` },
};

/** Four-up strip under the services masthead (`/public/images/services/services-lede-*.jpg`). */
const LEDE = [
  { src: "/images/services/services-lede-01.jpg", alt: "On The Move Again furniture removal and monitored moving services" },
  { src: "/images/services/services-lede-02.jpg", alt: "Professional packing, transport, and relocation with OTMA" },
  { src: "/images/services/services-lede-03.jpg", alt: "Alberton-based full-service removals and logistics" },
  { src: "/images/services/services-lede-04.jpg", alt: "Local and long-distance moving with accredited OTMA crews" },
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
              are your one stop for furniture removals in Alberton and beyond: monitored, accredited, and explained in plain
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
          Every page follows the same layout rhythm as our house removals guide: masthead, imagery, detail sections, and a
          clear quote path, so you always know where you are.
        </p>
        <ul className="mt-10 grid list-none gap-4 p-0 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {SERVICE_LINKS.map(({ href, title, desc, imageSrc, imageAlt }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex min-h-[44px] flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:border-sky-600 hover:shadow-md"
              >
                <div className="relative aspect-[5/3] w-full shrink-0 border-b border-zinc-200 bg-zinc-100">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <span className="text-lg font-semibold text-zinc-900 sm:text-xl">{title}</span>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-zinc-700 sm:text-base">{desc}</span>
                  <span className="mt-4 text-sm font-medium text-sky-700">Learn more →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </PageBand>

      <PageBand tone="dark">
        <ServiceHighlightBand
          kicker="Why OTMA"
          heading="Accredited, monitored, owner-led"
          body={`${SITE.name} is PMA and AMOSA accredited, runs live GPS and in-transit monitoring, and publishes insurance limits honestly. Pick a service above, or go straight to a quote if you already know what you need.`}
          tiles={[
            {
              src: "/images/home/home-long-distance-corridors.jpg",
              alt: "Monitored long-distance furniture moves on the N1 and N3 corridors with GPS and portal updates",
            },
            {
              src: "/images/home/home-insurance-git-cover.jpg",
              alt: "Goods-in-transit and all-risk cover with clear limits on your written OTMA quote",
            },
            {
              src: "/images/home/home-about-joanique-alberton.jpg",
              alt: "On The Move Again at Joanique Eco Park, Alberton — owner-led removals base",
            },
          ]}
        />
      </PageBand>

      <PageBand tone="sky" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="services-index-cta"
          heading="Not sure which service fits?"
          description="Start a quote with your addresses and dates. We will steer you to the right crew and kit."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: "/contact", label: "Contact us" }}
        />
      </PageBand>
    </>
  );
}
