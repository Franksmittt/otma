import type { Metadata } from "next";
import { ContentImage } from "@/components/ContentImage";
import { PageBand } from "@/components/page/PageBand";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { ServiceCtaBand } from "@/components/services/ServiceCtaBand";
import { ServiceFaqSection } from "@/components/services/ServiceFaqSection";
import { SITE_FAQ_ITEMS } from "@/lib/faq-content";
import { marketingImages } from "@/lib/marketing-images";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about furniture removals, tracking, insurance, and moving with On The Move Again in Alberton.",
  alternates: { canonical: `${SITE.url}/faq` },
};

export default function FAQPage() {
  return (
    <>
      <FaqJsonLd items={SITE_FAQ_ITEMS} />

      <PageBand tone="soft" contentMax="3xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Frequently asked questions</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-700">
          Quick answers about moving with {SITE.name}. For anything else, call or WhatsApp us.
        </p>
      </PageBand>

      <PageBand tone="dark" contentMax="3xl">
        <div className="min-w-0">
          <ContentImage
            src={marketingImages.apartmentInterior.src}
            alt={marketingImages.apartmentInterior.alt}
            ratio="wide"
            sizes="(max-width: 768px) 100vw, 42rem"
          />
        </div>
      </PageBand>

      <PageBand tone="soft" contentMax="3xl" aria-labelledby="faq-accordion-heading">
        <ServiceFaqSection id="faq-accordion-heading" title="Common questions" items={SITE_FAQ_ITEMS} />
      </PageBand>

      <PageBand tone="sky" contentMax="3xl" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="faq-cta"
          heading="Still unsure?"
          description="Start a quote or reach us by phone and WhatsApp; we reply honestly."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: "/contact", label: "Contact us" }}
        />
      </PageBand>
    </>
  );
}
