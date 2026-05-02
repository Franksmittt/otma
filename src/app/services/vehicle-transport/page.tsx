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
  title: "Vehicle transport",
  description:
    "Car, boat, motorcycle transport. Monitored carriers. High-value vehicle relocation with On The Move Again, Alberton.",
  alternates: { canonical: `${SITE.url}/services/vehicle-transport` },
};

const FAQ: ServiceFaqItem[] = [
  {
    q: "What vehicles can you transport?",
    a: "We move motor vehicles, boats, and motorcycles using monitored carriers. Tell us dimensions, running condition, and access at collection and delivery so we quote the right equipment.",
  },
  {
    q: "How is my vehicle tracked in transit?",
    a: "Carriers are fitted with tracking and monitoring consistent with our furniture fleet philosophy—visibility and verification, not a black-box transporter.",
  },
  {
    q: "Can vehicle transport be combined with a house move?",
    a: "Yes. Many clients move furniture and a daily driver on parallel timelines. We align dates and handovers so you are not stranded without keys at either end.",
  },
  {
    q: "Do you handle non-running or classic cars?",
    a: "Tell us the condition, ground clearance, and any winch needs when you quote. We confirm what is practical and safe before we commit—no last-minute surprises on collection day.",
  },
];

const LEDE = [
  { src: marketingImages.classicCar.src, alt: marketingImages.classicCar.alt },
  { src: marketingImages.cityLogistics.src, alt: marketingImages.cityLogistics.alt },
  { src: marketingImages.deliveryVan.src, alt: marketingImages.deliveryVan.alt },
  { src: marketingImages.connectivity.src, alt: marketingImages.connectivity.alt },
] as const;

const CARDS = [
  {
    title: "Motor vehicles",
    body: (
      <>
        Daily drivers through to performance vehicles—quoted with realistic loading angles, clearance, and tie-down plans.
        Photos and notes travel with the job file.
      </>
    ),
  },
  {
    title: "Boats and trailers",
    body: (
      <>
        Beam, draft on the trailer, and access at launch or storage gates matter. We ask the boring measurement questions up
        front so the right trailer turns up first time.
      </>
    ),
  },
  {
    title: "Motorcycles",
    body: (
      <>
        Wheel chocks, soft ties, and crate options where needed. We minimise unnecessary mileage on track-focused machines
        and agree start photos before wheels roll.
      </>
    ),
  },
  {
    title: "Security mindset",
    body: (
      <>
        Same peace of mind as furniture removals: monitored movement, vetted handovers, and clear escalation contacts—not
        anonymous one-line SMS updates.
      </>
    ),
  },
] as const;

export default function VehicleTransportPage() {
  return (
    <>
      <FaqJsonLd items={FAQ} />

      <PageBand tone="soft" innerClassName="pb-0 sm:pb-0 lg:pb-0">
        <ServiceMasthead
          title="Vehicle transport"
          intro={
            <p>
              Moving a car, boat, or motorcycle? We use monitored carriers so your high-value assets are tracked and secure
              from collection to delivery.
            </p>
          }
        />
      </PageBand>

      <PageBand tone="dark" innerClassName="pt-6 sm:pt-8">
        <ServiceLedeQuartet items={LEDE} />
      </PageBand>

      <PageBand tone="light" aria-labelledby="vehicle-what">
        <h2 id="vehicle-what" className="text-2xl font-semibold tracking-tight text-zinc-900">
          What we move
        </h2>
        <ul className="mt-8 list-inside list-disc space-y-2 text-base leading-[1.7] text-zinc-700 sm:mt-10">
          <li>Motor vehicles</li>
          <li>Boats</li>
          <li>Motorcycles</li>
        </ul>
        <ServiceFeatureCardGrid surface="light" cards={CARDS} />
        <div className="mt-10 max-w-2xl sm:mt-12">
          <ContentImage
            src={marketingImages.classicCar.src}
            alt={marketingImages.classicCar.alt}
            ratio="wide"
            sizes="(max-width: 768px) 100vw, 40rem"
          />
        </div>
      </PageBand>

      <PageBand tone="dark">
        <ServiceHighlightBand
          kicker="In transit"
          heading="Verification, not guesswork"
          body="Insurance and monitoring both play a role. We publish what is tracked, who holds keys at handover, and how to reach the desk if something looks off mid-route—same transparency culture as our furniture fleet."
          tiles={[
            {
              src: marketingImages.deliveryVan.src,
              alt: marketingImages.deliveryVan.alt,
            },
            {
              src: marketingImages.cityLogistics.src,
              alt: marketingImages.cityLogistics.alt,
            },
            {
              src: marketingImages.modernHome.src,
              alt: marketingImages.modernHome.alt,
            },
          ]}
        />
      </PageBand>

      <PageBand tone="soft" aria-labelledby="vehicle-faq">
        <ServiceFaqSection id="vehicle-faq" items={FAQ} />
      </PageBand>

      <PageBand tone="sky" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="vehicle-cta"
          heading="Quote vehicle transport with your move"
          description="Share make, model, running condition, and both addresses—we respond with a clear plan."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: "/services/house-removals", label: "House & office removals" }}
        />
      </PageBand>
    </>
  );
}
