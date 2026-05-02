import type { Metadata } from "next";
import { ContentImage } from "@/components/ContentImage";
import { PageBand } from "@/components/page/PageBand";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { ServiceCtaBand } from "@/components/services/ServiceCtaBand";
import { ServiceFaqSection } from "@/components/services/ServiceFaqSection";
import { marketingImages } from "@/lib/marketing-images";
import type { ServiceFaqItem } from "@/lib/service-faq";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Asset protection & insurance",
  description:
    "Goods-in-Transit (GIT) and All-Risk moving insurance. Transparent coverage limits. Your move protected with On The Move Again.",
  alternates: { canonical: `${SITE.url}/insurance` },
};

const INSURANCE_FAQ: ServiceFaqItem[] = [
  {
    q: "Do you provide Goods-in-Transit (GIT) insurance for hijacking or theft?",
    a: "Yes. We offer Goods-in-Transit (GIT) and All-Risk in-house short-term cover. Unlike basic Carrier's Liability (which only pays if we're proven negligent), GIT covers physical loss from fire, collision, or armed hijacking regardless of fault. We publish our coverage limits so you know exactly what you're protected for.",
  },
  {
    q: "What is your moving insurance coverage limit per load?",
    a: "Our All-Risk in-house short-term insurance provides cover up to R250,000 per load (or as confirmed on your quote). We confirm the exact terms when you get a quote. No vague promises: you get numbers you can rely on.",
  },
  {
    q: "Are your moving trucks monitored for security during transit?",
    a: "Yes. Our fleet uses live GPS tracking and in-transit monitoring. When you book, you get access to our client portal to see where your goods are in real time. We call it \"Smile! You're on Camera!\". Insurance is your safety net; monitoring helps prevent problems in the first place.",
  },
];

export default function InsurancePage() {
  return (
    <>
      <FaqJsonLd items={INSURANCE_FAQ} />

      <PageBand tone="soft" contentMax="4xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Asset protection & insurance</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-700">
          We believe in clear, upfront protection. Here is how we cover your move so you are not left guessing.
        </p>
      </PageBand>

      <PageBand tone="dark" contentMax="4xl">
        <div className="max-w-2xl">
          <ContentImage
            src={marketingImages.houseKeys.src}
            alt={marketingImages.houseKeys.alt}
            ratio="wide"
            sizes="(max-width: 896px) 100vw, 42rem"
          />
        </div>
      </PageBand>

      <PageBand tone="light" contentMax="4xl">
        <section aria-labelledby="ins-git">
          <h2 id="ins-git" className="text-xl font-semibold text-zinc-900">
            Goods-in-Transit (GIT) vs Carrier&apos;s Liability
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-700">
            <strong>Carrier&apos;s Liability</strong> only pays out if the transporter is legally proven negligent.
            <strong> Goods-in-Transit (GIT) insurance</strong> covers physical loss (including fire, collision, or hijacking)
            regardless of fault. We offer in-house short-term All-Risk cover so you know you are protected against the risks
            that matter most on South African roads.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="ins-cover">
          <h2 id="ins-cover" className="text-xl font-semibold text-zinc-900">
            Our coverage
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-700">
            We publish our coverage limits clearly. Our All-Risk in-house short-term insurance provides cover up to{" "}
            <strong>R250,000 per load</strong> (or as per your current quote). When you get a quote, we will confirm the exact
            terms. No vague &quot;we are insured&quot; promises. You get numbers you can rely on.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="ins-monitor">
          <h2 id="ins-monitor" className="text-xl font-semibold text-zinc-900">
            Monitoring as prevention
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-700">
            Insurance is your safety net. Our &quot;Smile! You&apos;re on Camera!&quot; tracking and in-transit monitoring help prevent
            problems in the first place. Real-time visibility and verification mean you and we both know where your goods are
            and that they are secure.
          </p>
        </section>
      </PageBand>

      <PageBand tone="soft" contentMax="4xl" aria-labelledby="insurance-faq">
        <ServiceFaqSection
          id="insurance-faq"
          title="Frequently asked questions about moving insurance"
          items={INSURANCE_FAQ}
        />
      </PageBand>

      <PageBand tone="sky" contentMax="4xl" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="insurance-cta"
          heading="Get a quote with cover explained upfront"
          description="We confirm limits and monitoring access on every quote."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: "/contact", label: "Contact us" }}
        />
      </PageBand>
    </>
  );
}
