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
  title: "Plastic crate rentals",
  description:
    "Reusable plastic moving crates vs cardboard. Stronger, stackable, eco-friendly. Crate hire for furniture removals in Alberton.",
  alternates: { canonical: `${SITE.url}/services/crate-rentals` },
};

const FAQ: ServiceFaqItem[] = [
  {
    q: "How long can I keep crates on hire?",
    a: "Rental windows depend on your move dates and return logistics. We quote a transparent hire period with collection after delivery—no hidden weekly surprises.",
  },
  {
    q: "Are plastic crates better than cardboard for fragile items?",
    a: "Rigid sides and standardised footprints reduce crush risk and speed loading. They are especially strong for electronics, dinnerware, and dense kitchen contents.",
  },
  {
    q: "Do you deliver and collect crates?",
    a: "Yes. We deliver for your pack, you use them for the move, and we collect after delivery. One schedule tied to your removal where possible.",
  },
  {
    q: "What happens if a crate is damaged?",
    a: "Fair wear is expected; serious damage or loss is handled per your rental agreement on the quote. We explain charges plainly before you sign—not after return.",
  },
];

const LEDE = [
  { src: marketingImages.movingBoxes.src, alt: marketingImages.movingBoxes.alt },
  { src: marketingImages.packingSupplies.src, alt: marketingImages.packingSupplies.alt },
  { src: marketingImages.warehouse.src, alt: marketingImages.warehouse.alt },
  { src: marketingImages.modernHome.src, alt: marketingImages.modernHome.alt },
] as const;

const CARDS = [
  {
    title: "Crates vs cardboard",
    body: (
      <>
        See the comparison table below for protection, setup, environment, and loading. If you are unsure which rooms should
        use crates first, ask—we will steer you to the biggest wins.
      </>
    ),
  },
  {
    title: "How hire works",
    body: (
      <>
        We deliver crates for your pack, you use them for the move, and we collect after delivery. One transparent rental fee
        with no hidden costs—ideal for fragile items and electronics.
      </>
    ),
  },
  {
    title: "Eco angle",
    body: (
      <>
        Reusable crates cut single-use cardboard waste. For clients based at Joanique Eco Park values, that circular approach
        matches how we already think about operations.
      </>
    ),
  },
  {
    title: "Truck efficiency",
    body: (
      <>
        Standardised external dimensions mean straighter stacks and fewer voids in the load. That can translate to fewer
        trips         on borderline inventories—ask when you quote.
      </>
    ),
  },
] as const;

export default function CrateRentalsPage() {
  return (
    <>
      <FaqJsonLd items={FAQ} />

      <PageBand tone="soft" innerClassName="pb-0 sm:pb-0 lg:pb-0">
        <ServiceMasthead
          title="Plastic crate rentals"
          intro={
            <p>
              Ditch the cardboard. Our heavy-duty plastic crates are reusable, crush-proof, and better for your belongings
              and the environment.
            </p>
          }
        />
      </PageBand>

      <PageBand tone="dark" innerClassName="pt-6 sm:pt-8">
        <ServiceLedeQuartet items={LEDE} />
      </PageBand>

      <PageBand tone="light" aria-labelledby="crate-compare">
        <h2 id="crate-compare" className="text-2xl font-semibold tracking-tight text-zinc-900">
          Crates vs cardboard
        </h2>
        <ServiceFeatureCardGrid surface="light" cards={CARDS} />

        <div className="mt-10 overflow-x-auto overscroll-x-contain rounded-lg sm:mt-12">
          <table className="w-full min-w-[400px] border border-zinc-200">
            <thead>
              <tr className="bg-zinc-100">
                <th className="border-b border-zinc-200 p-3 text-left text-sm font-semibold text-zinc-900">Factor</th>
                <th className="border-b border-zinc-200 p-3 text-left text-sm font-semibold text-zinc-900">Cardboard boxes</th>
                <th className="border-b border-zinc-200 p-3 text-left text-sm font-semibold text-zinc-900">OTMA plastic crates</th>
              </tr>
            </thead>
            <tbody className="text-sm text-zinc-700">
              <tr className="border-b border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Protection</td>
                <td className="p-3">Can crush; not waterproof</td>
                <td className="p-3">Crush-proof; rigid; waterproof</td>
              </tr>
              <tr className="border-b border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Setup</td>
                <td className="p-3">Tape, assemble, break down</td>
                <td className="p-3">Ready to pack; no tape</td>
              </tr>
              <tr className="border-b border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Environment</td>
                <td className="p-3">Single-use; disposal</td>
                <td className="p-3">Reusable; circular economy</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-zinc-900">Loading</td>
                <td className="p-3">Uneven stacking</td>
                <td className="p-3">Standardised; max truck efficiency</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 max-w-2xl sm:mt-12">
          <ContentImage
            src={marketingImages.movingBoxes.src}
            alt={marketingImages.movingBoxes.alt}
            ratio="photo"
            sizes="(max-width: 768px) 100vw, 40rem"
          />
        </div>
      </PageBand>

      <PageBand tone="dark">
        <ServiceHighlightBand
          kicker="On the truck"
          heading="Standardised footprints, calmer loads"
          body="Crews stack faster when every box is the same width. Fewer odd voids means less shifting in transit—and less re-tightening straps at midnight on the N3."
          tiles={[
            {
              src: marketingImages.protectiveWrapping.src,
              alt: marketingImages.protectiveWrapping.alt,
            },
            {
              src: marketingImages.deliveryVan.src,
              alt: marketingImages.deliveryVan.alt,
            },
            {
              src: marketingImages.cityLogistics.src,
              alt: marketingImages.cityLogistics.alt,
            },
          ]}
        />
      </PageBand>

      <PageBand tone="soft" aria-labelledby="crate-faq">
        <ServiceFaqSection id="crate-faq" items={FAQ} />
      </PageBand>

      <PageBand tone="sky" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="crate-cta"
          heading="Add crates to your quote"
          description="Tell us rooms, rough volume, and dates—we size hire and delivery."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: "/services/packing", label: "Packing & unpacking" }}
        />
      </PageBand>
    </>
  );
}
