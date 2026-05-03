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
  title: "Packing & unpacking services",
  description:
    "Professional packing and unpacking for your move. Tiered unpacking options. Alberton furniture removals with full packing support.",
  alternates: { canonical: `${SITE.url}/services/packing` },
};

const FAQ: ServiceFaqItem[] = [
  {
    q: "Do you supply boxes and packing materials?",
    a: "Yes. We use quality materials and can supply box kits if you prefer to pack yourself. When we pack for you, everything is sized and labelled so loading stays organised and delivery is faster.",
  },
  {
    q: "What is the difference between your unpacking tiers?",
    a: "Tiers range from countertop unpacking (essentials out of boxes) through to fuller room-by-room support. Your quote spells out exactly what is included so there are no surprises on arrival day.",
  },
  {
    q: "Can I pack some rooms and you pack the rest?",
    a: "Absolutely. Many clients pack clothes and books while we handle kitchens, glassware, and large fragile items. We agree the split up front and label consistently so the crew knows what is ready to load.",
  },
  {
    q: "Is packing included in a house removal quote?",
    a: "Packing can be quoted separately or bundled with your move. Tell us what you want packed, what you will handle yourself, and whether you need unpacking at the destination; we will mirror that in writing.",
  },
];

const LEDE = [
  {
    src: marketingImages.movingBoxes.src,
    alt: marketingImages.movingBoxes.alt,
  },
  {
    src: marketingImages.packingSupplies.src,
    alt: marketingImages.packingSupplies.alt,
  },
  {
    src: marketingImages.protectiveWrapping.src,
    alt: marketingImages.protectiveWrapping.alt,
  },
  {
    src: marketingImages.modernHome.src,
    alt: marketingImages.modernHome.alt,
  },
] as const;

const CARDS = [
  {
    title: "Materials that match the job",
    body: (
      <>
        We do not one-size-fits-all wrapping. Delicate items get cushioning and orientation marks; books and dense loads go
        in smaller boxes so weight stays manageable for stairs and lifts.
      </>
    ),
  },
  {
    title: "Unpacking you can plan around",
    body: (
      <>
        Choose a tier that fits your budget and timeline. Need beds made and kitchens usable the first night? Say so when
        you quote; we schedule crew time accordingly.
      </>
    ),
  },
  {
    title: "Coordination with removals",
    body: (
      <>
        Packing sequences align with how the truck loads: last-off items packed for first access at the new address. That
        is the boring detail that saves hours on the other side.
      </>
    ),
  },
  {
    title: "Office and hybrid moves",
    body: (
      <>
        IT-adjacent areas, meeting rooms, and personal desks can be phased so your team is not stuck mid-week without
        monitors. Labels follow your floor plan naming.
      </>
    ),
  },
] as const;

export default function PackingPage() {
  return (
    <>
      <FaqJsonLd items={FAQ} />

      <PageBand tone="soft" innerClassName="pb-0 sm:pb-0 lg:pb-0">
        <ServiceMasthead
          title="Packing & unpacking"
          intro={
            <p>
              We handle the packing phase so your goods are protected and loading is efficient. We also offer clear unpacking
              tiers so you know exactly what to expect at the other end, with no vague &quot;we might help a bit&quot; language.
            </p>
          }
        />
      </PageBand>

      <PageBand tone="dark" innerClassName="pt-6 sm:pt-8">
        <ServiceLedeQuartet items={LEDE} />
      </PageBand>

      <PageBand tone="light" aria-labelledby="packing-offer">
        <h2 id="packing-offer" className="text-2xl font-semibold tracking-tight text-zinc-900">
          How we pack and unpack
        </h2>
        <p className="mt-8 text-base leading-[1.7] text-zinc-700 sm:mt-10">
          Our teams use quality materials and standardised crates where possible. We can supply box kits if you prefer to
          pack yourself, or we pack for you. Either way, we keep loading secure and organised, and we spell out unpacking so
          you are not guessing what happens when the tailgate opens.
        </p>
        <ServiceFeatureCardGrid surface="light" cards={CARDS} />
        <div className="mt-10 min-w-0 sm:mt-12">
          <ContentImage
            src={marketingImages.movingBoxes.src}
            alt={marketingImages.movingBoxes.alt}
            ratio="wide"
            sizes="(max-width: 1024px) 100vw, 58rem"
          />
        </div>
      </PageBand>

      <PageBand tone="dark">
        <ServiceHighlightBand
          kicker="At delivery"
          heading="Unpacking that matches how you move in"
          body="Some clients want essentials only; others want cupboards sorted. We agree the scope in writing, bring the right crew time, and leave you with clear recycling piles, not mystery half-empty boxes in every room."
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
              src: marketingImages.apartmentInterior.src,
              alt: marketingImages.apartmentInterior.alt,
            },
          ]}
        />
      </PageBand>

      <PageBand tone="soft" aria-labelledby="packing-faq">
        <ServiceFaqSection id="packing-faq" items={FAQ} />
      </PageBand>

      <PageBand tone="sky" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="packing-cta"
          heading="Get a quote with packing included"
          description="Tell us what you want packed, what you will handle, and how much help you want at delivery."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: "/services/house-removals", label: "House & office removals" }}
        />
      </PageBand>
    </>
  );
}
