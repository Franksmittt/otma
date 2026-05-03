import type { Metadata } from "next";
import { ContentImage } from "@/components/ContentImage";
import { PageBand } from "@/components/page/PageBand";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { ServiceCtaBand } from "@/components/services/ServiceCtaBand";
import { ServiceFaqSection } from "@/components/services/ServiceFaqSection";
import { ServiceFeatureCardGrid } from "@/components/services/ServiceFeatureCardGrid";
import { ServiceHighlightBand } from "@/components/services/ServiceHighlightBand";
import { ServiceLedeQuartet } from "@/components/services/ServiceLedeQuartet";
import { ServiceMasthead } from "@/components/services/ServiceMasthead";
import type { ServiceFaqItem } from "@/lib/service-faq";
import { marketingImages } from "@/lib/marketing-images";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Post-move cleaning",
  description:
    "Post-move cleaning so you leave your old property spotless. Ideal for rental handover and property transfers. Alberton removals.",
  alternates: { canonical: `${SITE.url}/services/cleaning` },
};

const FAQ: ServiceFaqItem[] = [
  {
    q: "Can cleaning be booked on the same day as the move?",
    a: "Often yes, depending on crew availability and property access. Tell us your handover deadline when you quote; we confirm a realistic sequence so you are not stuck between keys and inspection.",
  },
  {
    q: "Is post-move cleaning only for rentals?",
    a: "No. Rentals are common, but owner transfers and renovation gaps use the same service. We scope rooms, garages, and appliances based on what the transfer requires.",
  },
  {
    q: "Do you bring your own supplies?",
    a: "We arrive with standard professional supplies suited to empty or partly empty homes. If you need specialist finishes or marble-specific products, flag that when you quote.",
  },
  {
    q: `How does bundling with ${SITE.name} removals help?`,
    a: "One schedule, one coordination path: movers clear rooms, cleaners follow in an agreed sequence. Fewer gaps between truck leaving and keys handing over.",
  },
];

const LEDE = [
  { src: marketingImages.bathroomClean.src, alt: marketingImages.bathroomClean.alt },
  { src: marketingImages.modernHome.src, alt: marketingImages.modernHome.alt },
  { src: marketingImages.apartmentInterior.src, alt: marketingImages.apartmentInterior.alt },
  { src: marketingImages.deliveryVan.src, alt: marketingImages.deliveryVan.alt },
] as const;

const CARDS = [
  {
    title: "Why add cleaning",
    body: (
      <>
        Bundling cleaning with your move simplifies schedules and helps you meet deposit or transfer conditions. One team
        culture from truck to mop bucket, with fewer strangers with conflicting timing.
      </>
    ),
  },
  {
    title: "Rental handover friendly",
    body: (
      <>
        We focus on what inspectors actually check: kitchens, bathrooms, built-in cupboards, and obvious scuffs left
        after furniture pulls out. Tell us your checklist when you quote.
      </>
    ),
  },
  {
    title: "Owner transfers",
    body: (
      <>
        Selling or buying? A clean handover photographs better and reduces friction on occupation day. We coordinate with
        your removal load-out so rooms are accessible in the right order.
      </>
    ),
  },
  {
    title: "Honest scope",
    body: (
      <>
        We quote rooms and extras explicitly (oven interiors, garage sweep, windows where agreed) so you are not surprised
        by a generic &quot;deep clean&quot; promise that means different things to different people.
      </>
    ),
  },
] as const;

export default function CleaningPage() {
  return (
    <>
      <FaqJsonLd items={FAQ} />

      <PageBand tone="soft" innerClassName="pb-0 sm:pb-0 lg:pb-0">
        <ServiceMasthead
          title="Post-move cleaning"
          intro={
            <p>
              Moving out often means leaving the property clean for handover, for your landlord or the new owner. We offer
              post-move cleaning so you can focus on settling in instead of scrubbing.
            </p>
          }
        />
      </PageBand>

      <PageBand tone="dark" innerClassName="pt-6 sm:pt-8">
        <ServiceLedeQuartet items={LEDE} />
      </PageBand>

      <PageBand tone="light" aria-labelledby="cleaning-why">
        <h2 id="cleaning-why" className="text-2xl font-semibold tracking-tight text-zinc-900">
          Why add cleaning to your move
        </h2>
        <p className="mt-8 text-base leading-[1.7] text-zinc-700 sm:mt-10">
          Bundling cleaning with your move simplifies things and helps you get your deposit back or meet transfer conditions.
          One team, one booking: move and clean in a coordinated sequence instead of two unrelated diaries.
        </p>
        <ServiceFeatureCardGrid surface="light" cards={CARDS} />
        <div className="mt-10 max-w-2xl sm:mt-12">
          <ContentImage
            src={marketingImages.bathroomClean.src}
            alt={marketingImages.bathroomClean.alt}
            ratio="photo"
            sizes="(max-width: 768px) 100vw, 40rem"
          />
        </div>
      </PageBand>

      <PageBand tone="dark">
        <ServiceHighlightBand
          kicker="Sequence"
          heading="Move out, then shine, without chaos"
          body="We agree whether cleaners trail the last truck, start in cleared bedrooms first, or tackle kitchens while the crew secures the garage. The point is one plan, not two crews arguing about who needs the keys."
          tiles={[
            {
              src: marketingImages.livingRoomFurniture.src,
              alt: marketingImages.livingRoomFurniture.alt,
            },
            {
              src: marketingImages.bedroomInterior.src,
              alt: marketingImages.bedroomInterior.alt,
            },
            {
              src: marketingImages.houseKeys.src,
              alt: marketingImages.houseKeys.alt,
            },
          ]}
        />
      </PageBand>

      <PageBand tone="soft" aria-labelledby="cleaning-faq">
        <ServiceFaqSection id="cleaning-faq" items={FAQ} />
      </PageBand>

      <PageBand tone="sky" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="cleaning-cta"
          heading="Book cleaning with your removal"
          description="Tell us property type, rooms, and handover deadline; we quote scope clearly."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: "/services/house-removals", label: "House & office removals" }}
        />
      </PageBand>
    </>
  );
}
