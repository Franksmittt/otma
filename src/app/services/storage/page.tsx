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
  title: "Storage & warehousing",
  description: `Short- and long-term storage at ${SITE.name}'s secure Joanique Eco Park facility in Alberton. Safe, monitored storage for your move.`,
  alternates: { canonical: `${SITE.url}/services/storage` },
};

const FAQ: ServiceFaqItem[] = [
  {
    q: "Where is my furniture stored?",
    a: `Goods are stored at ${SITE.address.street}, ${SITE.address.locality}, as part of our daily operations—not an anonymous third-party shed you cannot visit.`,
  },
  {
    q: "Can I access my goods while they are in storage?",
    a: "Access rules depend on the storage plan and scheduling. Tell us if you need occasional retrieval when you quote, and we will confirm what is practical for your dates and inventory.",
  },
  {
    q: "Is storage insured while my items are on site?",
    a: "We explain cover options when you book, including how storage relates to Goods-in-Transit and any warehouse terms. You get plain-language limits, not vague promises.",
  },
  {
    q: "How long can I store between moving out and moving in?",
    a: "Short gaps and multi-month storage are both common. We align collection and delivery with your transfer or renovation timeline so you are not paying for open-ended uncertainty.",
  },
];

const LEDE = [
  { src: marketingImages.warehouse.src, alt: marketingImages.warehouse.alt },
  { src: marketingImages.movingBoxes.src, alt: marketingImages.movingBoxes.alt },
  { src: marketingImages.deliveryVan.src, alt: marketingImages.deliveryVan.alt },
  { src: marketingImages.modernHome.src, alt: marketingImages.modernHome.alt },
] as const;

const CARDS = [
  {
    title: "Gap coverage between properties",
    body: (
      <>
        Renovations, delayed transfers, and chain breaks happen. We store inside the operation you already trust so your
        goods are not bouncing between unknown handlers.
      </>
    ),
  },
  {
    title: "Joanique Eco Park base",
    body: (
      <>
        Storage sits alongside our removals workflow at Joanique Eco Park in Verwoerdpark—modern, secure, and part of the
        same team you meet on the truck.
      </>
    ),
  },
  {
    title: "Inventory discipline",
    body: (
      <>
        Inbound checks and clear labelling mean nothing gets &quot;lost in the pile&quot;. When you are ready to deliver
        out, we know which units are yours and how they should load.
      </>
    ),
  },
  {
    title: "Works with long-distance",
    body: (
      <>
        If you are staging Gauteng to Cape Town or KZN, storage can sit between legs of the journey. We plan dates and
        monitoring around your milestones—not generic warehouse windows.
      </>
    ),
  },
] as const;

export default function StoragePage() {
  return (
    <>
      <FaqJsonLd items={FAQ} />

      <PageBand tone="soft" innerClassName="pb-0 sm:pb-0 lg:pb-0">
        <ServiceMasthead
          title="Storage & warehousing"
          intro={
            <p>
              Need a gap between moving out and moving in? Renovating? We offer secure short- and long-term storage at our
              Joanique Eco Park base in Verwoerdpark, Alberton—run by the same crew who load your truck.
            </p>
          }
        />
      </PageBand>

      <PageBand tone="dark" innerClassName="pt-6 sm:pt-8">
        <ServiceLedeQuartet items={LEDE} />
      </PageBand>

      <PageBand tone="light" aria-labelledby="storage-where">
        <h2 id="storage-where" className="text-2xl font-semibold tracking-tight text-zinc-900">
          Where we store—and why it matters
        </h2>
        <p className="mt-8 text-base leading-[1.7] text-zinc-700 sm:mt-10">
          Your goods are stored at {SITE.address.street}, {SITE.address.locality}. Our facility is modern, secure, and part
          of our daily operations, so your belongings sit where we already run removals—not in a disconnected warehouse
          brand you have never met.
        </p>
        <ServiceFeatureCardGrid surface="light" cards={CARDS} />
        <div className="mt-10 min-w-0 sm:mt-12">
          <ContentImage
            src={marketingImages.warehouse.src}
            alt={marketingImages.warehouse.alt}
            ratio="wide"
            sizes="(max-width: 1024px) 100vw, 58rem"
          />
        </div>
      </PageBand>

      <PageBand tone="dark">
        <ServiceHighlightBand
          kicker="Operations"
          heading="Storage that stays tied to your move plan"
          body="We do not treat storage as a black box. Dates, access needs, and insurance expectations are agreed up front. When you are ready to deliver out, the same monitoring mindset follows your goods back onto the road."
          tiles={[
            {
              src: marketingImages.packingSupplies.src,
              alt: marketingImages.packingSupplies.alt,
            },
            {
              src: marketingImages.protectiveWrapping.src,
              alt: marketingImages.protectiveWrapping.alt,
            },
            {
              src: marketingImages.cityLogistics.src,
              alt: marketingImages.cityLogistics.alt,
            },
          ]}
        />
      </PageBand>

      <PageBand tone="soft" aria-labelledby="storage-faq">
        <ServiceFaqSection id="storage-faq" items={FAQ} />
      </PageBand>

      <PageBand tone="sky" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="storage-cta"
          heading="Book storage with your move"
          description="Tell us your dates, access needs, and how long the gap might be—we will respond with a clear plan."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: "/services/house-removals", label: "House & office removals" }}
        />
      </PageBand>
    </>
  );
}
