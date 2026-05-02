import type { Metadata } from "next";
import { ContentImage } from "@/components/ContentImage";
import { PageBand } from "@/components/page/PageBand";
import { ServiceCtaBand } from "@/components/services/ServiceCtaBand";
import { ServiceFaqSection } from "@/components/services/ServiceFaqSection";
import { ServiceFeatureCardGrid } from "@/components/services/ServiceFeatureCardGrid";
import { ServiceHighlightBand } from "@/components/services/ServiceHighlightBand";
import { ServiceLedeQuartet } from "@/components/services/ServiceLedeQuartet";
import { ServiceMasthead } from "@/components/services/ServiceMasthead";
import { marketingImages } from "@/lib/marketing-images";
import { SITE } from "@/lib/site-config";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { HOUSE_REMOVALS_FAQ } from "./faq-data";

export const metadata: Metadata = {
  title: "House & office removals",
  description:
    "Local and long-distance furniture removals from Alberton. House moves, office removals, 1-ton to 8-ton fleet. Monitored and insured.",
  alternates: { canonical: `${SITE.url}/services/house-removals` },
};

const LEDE_QUARTET = [
  { src: marketingImages.modernHome.src, alt: marketingImages.modernHome.alt },
  { src: marketingImages.deliveryVan.src, alt: marketingImages.deliveryVan.alt },
  { src: marketingImages.officePlanning.src, alt: marketingImages.officePlanning.alt },
  { src: marketingImages.movingBoxes.src, alt: marketingImages.movingBoxes.alt },
] as const;

const FEATURE_CARDS = [
  {
    title: "Local and estates",
    body: (
      <>
        We plan around gates, lifts, and contractor windows so crews are not waiting on codes. In Meyersdal, Brackenhurst,
        and similar estates we build HOA timing into the schedule. Name the complex when you quote.
      </>
    ),
  },
  {
    title: "Long-distance",
    body: (
      <>
        Honest load and delivery windows, mattresses and polished wood padded for highway vibration, and updates while you
        are on the N1 or N3. Your portal shows milestones, not guesswork.
      </>
    ),
  },
  {
    title: "Offices",
    body: (
      <>
        Phased desks and meeting rooms, labels that match your floor plan, coordination with IT where needed. Safes,
        boardrooms, and AV get their own wrap sequence, not one generic blanket over everything.
      </>
    ),
  },
  {
    title: "Packing and handover",
    body: (
      <>
        Corners padded, fragile items wrapped, boxes marked by room. Before anything leaves, we walk through with you (or
        your nominee): what moves, what stays, what loads last and unloads first, with no mystery boxes at the other end.
      </>
    ),
  },
] as const;

export default function HouseRemovalsPage() {
  return (
    <>
      <FaqJsonLd items={HOUSE_REMOVALS_FAQ} />

      <PageBand tone="soft" innerClassName="pb-0 sm:pb-0 lg:pb-0">
        <ServiceMasthead
          title={<>House &amp; office removals</>}
          intro={
            <p>
              Local moves across Alberton and the East Rand, or long-distance to Cape Town and KZN: one coordinated crew,
              a single plan from quote to delivery,{" "}
              <strong className="font-semibold text-zinc-800">proper packing</strong>, and a monitored fleet so you can see
              where your goods are. Straight answers on timing and cost, and no rushed loads.
            </p>
          }
        />
      </PageBand>

      <PageBand tone="dark" innerClassName="pt-6 sm:pt-8">
        <ServiceLedeQuartet items={LEDE_QUARTET} />
      </PageBand>

      <PageBand tone="light" aria-labelledby="chapter-offer">
        <h2 id="chapter-offer" className="text-2xl font-semibold tracking-tight text-zinc-900">
          What we offer
        </h2>
        <p className="mt-8 max-w-none text-pretty text-base leading-[1.7] text-zinc-700 sm:mt-10 lg:max-w-4xl">
          Local moves in Alberton and the East Rand, long-distance to Cape Town, Durban, and other provinces, and office or
          commercial relocations. We right-size the fleet from 1-ton bakkie to 8-ton truck, and monitored vehicles with
          real-time tracking so you are never guessing where your load is.
        </p>
        <ServiceFeatureCardGrid surface="light" cards={FEATURE_CARDS} />
        <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          <ContentImage
            src={marketingImages.packingSupplies.src}
            alt={marketingImages.packingSupplies.alt}
            ratio="editorial"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 45vw, 34rem"
          />
          <ContentImage
            src={marketingImages.protectiveWrapping.src}
            alt={marketingImages.protectiveWrapping.alt}
            ratio="editorial"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 45vw, 34rem"
          />
        </div>
      </PageBand>

      <PageBand tone="dark">
        <ServiceHighlightBand
          kicker="On the truck"
          heading="We take the time to package properly"
          body="Rushed wrapping shows up as chips and scratches. We build protection into each room: blankets, stretch wrap where it helps, and a second look before the trolley rolls. Offices get sequenced so desks and IT can come back online without chaos."
          tiles={[
            { src: marketingImages.bedroomInterior.src, alt: marketingImages.bedroomInterior.alt },
            { src: marketingImages.livingRoomFurniture.src, alt: marketingImages.livingRoomFurniture.alt },
            { src: marketingImages.deliveryVan.src, alt: marketingImages.deliveryVan.alt },
          ]}
        />
      </PageBand>

      <PageBand tone="soft" aria-labelledby="chapter-faq">
        <ServiceFaqSection id="chapter-faq" items={HOUSE_REMOVALS_FAQ} />
      </PageBand>

      <PageBand tone="sky" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="house-removals-cta-heading"
          heading="Book a monitored move or explore packing"
          description="Free quote, or how we pack and unpack for a faster handover."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: "/services/packing", label: "Packing & unpacking" }}
        />
      </PageBand>
    </>
  );
}
