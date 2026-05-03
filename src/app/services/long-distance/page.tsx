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
  title: "Long distance movers – Gauteng to Cape Town & KZN",
  description:
    "Long-distance furniture removals from Alberton and Gauteng to Cape Town, Durban, and nationwide. Monitored trucks and transparent pricing.",
  alternates: { canonical: `${SITE.url}/services/long-distance` },
};

const FAQ: ServiceFaqItem[] = [
  {
    q: "How long does Gauteng to Cape Town or Durban usually take?",
    a: "Transit windows depend on load size, consolidation, and route. We quote honest ranges, not best-case only, and update milestones in the client portal while you are on the N1 or N3.",
  },
  {
    q: "Are long-distance trucks monitored like local moves?",
    a: "Yes. GPS and in-transit monitoring apply on interprovincial legs too. You follow milestones like packing complete, in transit, and arrived at destination instead of guessing.",
  },
  {
    q: "How do you protect furniture on highway vibration?",
    a: "Mattresses, polished wood, and glass get padding choices matched to distance, not the same wrap as a five-kilometre hop. Crews are briefed on strapping checks at scheduled stops.",
  },
  {
    q: "Is insurance different for long-distance?",
    a: "We explain Goods-in-Transit and All-Risk limits on your quote for every distance. Long haul does not mean vague cover: you get the same plain-language numbers, adjusted to declared value.",
  },
];

const LEDE = [
  { src: marketingImages.cityLogistics.src, alt: marketingImages.cityLogistics.alt },
  { src: marketingImages.deliveryVan.src, alt: marketingImages.deliveryVan.alt },
  { src: marketingImages.movingBoxes.src, alt: marketingImages.movingBoxes.alt },
  { src: marketingImages.modernHome.src, alt: marketingImages.modernHome.alt },
] as const;

const CARDS = [
  {
    title: "Popular routes",
    body: (
      <>
        <strong>Gauteng to Cape Town:</strong> N1 route with quoted transit windows.
        <br />
        <strong>Gauteng to Durban / KZN:</strong> N3, typically one to two working days depending on load and consolidation.
        <br />
        <strong>Eastern Cape and Garden Route:</strong> long-haul with consolidation where it still makes sense for your
        timeline.
      </>
    ),
  },
  {
    title: "Why visibility matters more on long haul",
    body: (
      <>
        Distance amplifies anxiety. Our trucks carry GPS and in-transit monitoring; you see milestones in the client portal
        instead of chasing voicemail.
      </>
    ),
  },
  {
    title: "Insurance in plain numbers",
    body: (
      <>
        Goods-in-Transit and All-Risk limits are published and confirmed on your quote, especially important when high-value
        loads spend longer on the road.
      </>
    ),
  },
  {
    title: "Packing for distance",
    body: (
      <>
        Highway vibration punishes rushed wrapping. We build protection into each room and sequence load so bedroom
        essentials are accessible if you arrive before the full offload finishes.
      </>
    ),
  },
] as const;

export default function LongDistancePage() {
  return (
    <>
      <FaqJsonLd items={FAQ} />

      <PageBand tone="soft" innerClassName="pb-0 sm:pb-0 lg:pb-0">
        <ServiceMasthead
          title="Long-distance movers"
          intro={
            <p>
              Moving from Gauteng to Cape Town, Durban, or anywhere else in South Africa? We run regular long-haul routes
              with monitored trucks and clear transit times so you know when your goods are expected, not &quot;sometime next
              week&quot; silence.
            </p>
          }
        />
      </PageBand>

      <PageBand tone="dark" innerClassName="pt-6 sm:pt-8">
        <ServiceLedeQuartet items={LEDE} />
      </PageBand>

      <PageBand tone="light" aria-labelledby="long-routes">
        <h2 id="long-routes" className="text-2xl font-semibold tracking-tight text-zinc-900">
          Routes, cover, and realistic windows
        </h2>
        <p className="mt-8 text-base leading-[1.7] text-zinc-700 sm:mt-10">
          Long moves are when you need visibility most. Our trucks are fitted with GPS and in-transit monitoring. You follow
          your move in the client portal and see milestones like packing complete, in transit, and arrived at destination.
        </p>
        <ServiceFeatureCardGrid surface="light" cards={CARDS} />
        <div className="mt-10 min-w-0 sm:mt-12">
          <ContentImage
            src={marketingImages.cityLogistics.src}
            alt={marketingImages.cityLogistics.alt}
            ratio="wide"
            sizes="(max-width: 1024px) 100vw, 58rem"
          />
        </div>
      </PageBand>

      <PageBand tone="dark">
        <ServiceHighlightBand
          kicker="On the highway"
          heading="Protection and pacing for interprovincial legs"
          body="We pad for vibration, strap for braking, and schedule crew rest legally. You get updates that reflect real traffic and weather, not a script that pretends every day is identical."
          tiles={[
            {
              src: marketingImages.protectiveWrapping.src,
              alt: marketingImages.protectiveWrapping.alt,
            },
            {
              src: marketingImages.livingRoomFurniture.src,
              alt: marketingImages.livingRoomFurniture.alt,
            },
            {
              src: marketingImages.connectivity.src,
              alt: marketingImages.connectivity.alt,
            },
          ]}
        />
      </PageBand>

      <PageBand tone="soft" aria-labelledby="long-faq">
        <ServiceFaqSection id="long-faq" items={FAQ} />
      </PageBand>

      <PageBand tone="sky" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="long-cta"
          heading="Quote your long-distance move"
          description="Share both addresses, move date, and inventory notes; we reply with monitored options."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: "/insurance", label: "Insurance & GIT" }}
        />
      </PageBand>
    </>
  );
}
