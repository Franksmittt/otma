import type { Metadata } from "next";
import { ContentImage } from "@/components/ContentImage";
import { PageBand } from "@/components/page/PageBand";
import { ServiceCtaBand } from "@/components/services/ServiceCtaBand";
import { marketingImages } from "@/lib/marketing-images";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet the team behind ${SITE.name}. Based at Joanique Eco Park, Alberton. PMA & AMOSA accredited. Owner-led, transparent relocation.`,
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <PageBand tone="soft" contentMax="4xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">About On The Move Again</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-700">
          We are an Alberton-based relocation company that puts your peace of mind first. Every move is monitored, every step
          is transparent.
        </p>
      </PageBand>

      <PageBand tone="dark" contentMax="4xl">
        <div className="max-w-2xl">
          <ContentImage
            src={marketingImages.warehouse.src}
            alt={marketingImages.warehouse.alt}
            ratio="wide"
            sizes="(max-width: 896px) 100vw, 42rem"
          />
        </div>
      </PageBand>

      <PageBand tone="light" contentMax="4xl">
        <section aria-labelledby="about-story">
          <h2 id="about-story" className="text-xl font-semibold text-zinc-900">
            Our story
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-700">
            On The Move Again operates from Units 9 and 10 at Joanique Eco Park, 186 2nd Avenue, Verwoerdpark, Alberton. We
            chose an Eco Park base to reflect our commitment to a modern, secure, and professional operation, somewhere you
            can visit and know your belongings are in safe hands.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10" aria-labelledby="about-leadership">
          <div className="min-w-0">
            <h2 id="about-leadership" className="text-xl font-semibold text-zinc-900">
              Leadership you can reach
            </h2>
            <p className="mt-3 leading-relaxed text-zinc-700">
              Our owner, Andre, is directly involved in your move. Clients consistently mention his professionalism and
              &quot;constant updates&quot; from quote to delivery. When something does not go to plan, we fix it, including authorising a
              free second load when a job required an extra trip, rather than charging you for our miscalculation. That is the
              standard we hold ourselves to.
            </p>
          </div>
          <div className="min-w-0 lg:pt-1">
            <ContentImage src={marketingImages.officePlanning.src} alt={marketingImages.officePlanning.alt} ratio="photo" />
          </div>
        </section>
      </PageBand>

      <PageBand tone="soft" contentMax="4xl">
        <section aria-labelledby="about-accred">
          <h2 id="about-accred" className="text-xl font-semibold text-zinc-900">
            PMA &amp; AMOSA accreditation
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-700">
            We are proud members of the Professional Movers Association (PMA) and meet the Accredited Mover of South Africa
            (AMOSA) standard. That means: trained staff, purpose-built vehicles, clean packing materials, and public recourse
            through a national committee if you ever have a serious complaint. When you choose an accredited mover, you are
            choosing accountability, not a fly-by-night operator.
          </p>
        </section>
      </PageBand>

      <PageBand tone="dark" contentMax="4xl">
        <section aria-labelledby="about-where">
          <h2 id="about-where" className="text-xl font-semibold text-white">
            Where we are
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-400">
            {SITE.address.street}, {SITE.address.locality}, {SITE.address.postalCode}. Open Monday–Saturday 06:00–20:00,
            Sunday 07:00–14:00. Give us a call on{" "}
            <a href={`tel:${SITE.phoneE164}`} className="font-medium text-sky-400 hover:underline">
              {SITE.phone}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${SITE.email}`} className="font-medium text-sky-400 hover:underline">
              {SITE.email}
            </a>
            .
          </p>
        </section>
      </PageBand>

      <PageBand tone="sky" contentMax="4xl" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="about-cta"
          heading="Ready to move with an accredited crew?"
          description="Get a monitored quote or ask us anything about Joanique Eco Park."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: "/contact", label: "Contact us" }}
        />
      </PageBand>
    </>
  );
}
