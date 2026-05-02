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
  title: "VIP pet relocation",
  description:
    "Stress-less pet relocation. Climate-controlled transit, care procedures. Alberton movers who treat your pets like family.",
  alternates: { canonical: `${SITE.url}/services/pet-relocation` },
};

const FAQ: ServiceFaqItem[] = [
  {
    q: "Can pet relocation be coordinated with my furniture move?",
    a: "Yes. Most clients align pet travel with the main removal so handovers, keys, and calm spaces line up. Tell us your dates and any vet or estate requirements when you quote.",
  },
  {
    q: "What should I prepare before pet travel day?",
    a: "We recommend vet checks, microchip details, crate familiarisation, and travel documents where applicable. Ask for our Stress-Less Pet Relocation Checklist when you book—it covers the practical fifteen steps we see work best.",
  },
  {
    q: "Do you offer climate-controlled options?",
    a: "Where applicable for the route and vehicle type, we use climate-controlled, secure transit and explain limitations honestly. If something is not safe or legal for your pet’s size and breed, we say so up front.",
  },
  {
    q: "Is pet relocation insured like furniture?",
    a: "Cover depends on the service scope and carriers involved. We walk through options in plain language on your quote so you know what is insured, what is procedural care, and what you need from your vet.",
  },
];

const LEDE = [
  { src: marketingImages.petDog.src, alt: marketingImages.petDog.alt },
  { src: marketingImages.modernHome.src, alt: marketingImages.modernHome.alt },
  { src: marketingImages.deliveryVan.src, alt: marketingImages.deliveryVan.alt },
  { src: marketingImages.cozyInterior.src, alt: marketingImages.cozyInterior.alt },
] as const;

const CARDS = [
  {
    title: "Family-first planning",
    body: (
      <>
        Your pets are not an afterthought bolted onto a truck quote. We sequence feeding, toilet breaks, and handover
        contacts so the day feels controlled—not rushed.
      </>
    ),
  },
  {
    title: "Clear procedures",
    body: (
      <>
        You know who carries responsibility at each step: collection, transit, rest points where relevant, and delivery. No
        mystery subcontractors without names and contact paths.
      </>
    ),
  },
  {
    title: "Works standalone or bundled",
    body: (
      <>
        Some clients move furniture with us and pets separately; others bundle. Either way, communication stays with the
        same {SITE.name} team you already trust.
      </>
    ),
  },
  {
    title: "Long-distance aware",
    body: (
      <>
        Highway days need different pacing than a local hop. We factor heat, rest, and documentation realistically—then
        tell you the honest timeline instead of a best-case fairy tale.
      </>
    ),
  },
] as const;

export default function PetRelocationPage() {
  return (
    <>
      <FaqJsonLd items={FAQ} />

      <PageBand tone="soft" innerClassName="pb-0 sm:pb-0 lg:pb-0">
        <ServiceMasthead
          title="VIP pet relocation"
          intro={
            <p>
              Your pets are family. We offer dedicated pet relocation so they travel safely and with care, whether you are
              moving with us or we are coordinating their move separately.
            </p>
          }
        />
      </PageBand>

      <PageBand tone="dark" innerClassName="pt-6 sm:pt-8">
        <ServiceLedeQuartet items={LEDE} />
      </PageBand>

      <PageBand tone="light" aria-labelledby="pet-provide">
        <h2 id="pet-provide" className="text-2xl font-semibold tracking-tight text-zinc-900">
          What we provide
        </h2>
        <ul className="mt-8 list-inside list-disc space-y-2 text-base leading-[1.7] text-zinc-700 sm:mt-10">
          <li>Climate-controlled, secure transit where applicable for the route and vehicle</li>
          <li>Clear procedures so you know how your pet is cared for at each step</li>
          <li>Alignment with your move so timing and handover stay smooth</li>
        </ul>
        <ServiceFeatureCardGrid surface="light" cards={CARDS} />
        <div className="mt-10 max-w-xl sm:mt-12">
          <ContentImage
            src={marketingImages.petDog.src}
            alt={marketingImages.petDog.alt}
            ratio="photo"
            sizes="(max-width: 768px) 100vw, 28rem"
          />
        </div>
      </PageBand>

      <PageBand tone="dark">
        <ServiceHighlightBand
          kicker="Checklist"
          heading="Stress-less pet move mindset"
          body="We recommend vet checks, ID and microchip readiness, crate familiarisation, travel documents if needed, and a quiet handover on the day. Ask for our full Stress-Less Pet Relocation Checklist when you book—fifteen practical steps we see work in the real world."
          tiles={[
            {
              src: marketingImages.apartmentInterior.src,
              alt: marketingImages.apartmentInterior.alt,
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

      <PageBand tone="soft" aria-labelledby="pet-faq">
        <ServiceFaqSection id="pet-faq" items={FAQ} />
      </PageBand>

      <PageBand tone="sky" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="pet-cta"
          heading="Plan pet travel with your quote"
          description="Tell us species, size, route, and whether furniture is moving too."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: "/contact", label: "Contact us" }}
        />
      </PageBand>
    </>
  );
}
