import type { Metadata } from "next";
import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";
import { PageBand } from "@/components/page/PageBand";
import { ServiceCtaBand } from "@/components/services/ServiceCtaBand";
import { marketingImages } from "@/lib/marketing-images";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Realtor & partner portal",
  description:
    "Estate agents and partners: refer clients to On The Move Again and earn. Alberton furniture removals referral programme.",
  alternates: { canonical: `${SITE.url}/partners` },
};

export default function PartnersPage() {
  return (
    <>
      <PageBand tone="soft" contentMax="2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Realtor &amp; partner portal</h1>
        <p className="mt-4 leading-relaxed text-zinc-700">
          If you are a real estate agent, broker, or property manager in Alberton and the East Rand, we would like to work
          with you. Refer your clients to us for furniture removals and we will take care of the rest with a structured
          referral programme.
        </p>
      </PageBand>

      <PageBand tone="dark" contentMax="2xl">
        <div className="min-w-0">
          <ContentImage
            src={marketingImages.houseKeys.src}
            alt={marketingImages.houseKeys.alt}
            ratio="wide"
          />
        </div>
      </PageBand>

      <PageBand tone="light" contentMax="2xl">
        <section aria-labelledby="partners-how">
          <h2 id="partners-how" className="text-xl font-semibold text-zinc-900">
            How it works
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-zinc-700">
            <li>Register as a partner and get your unique referral link</li>
            <li>Share the link or send leads to us with your partner ID</li>
            <li>When a referred client completes a move, you earn commission as agreed</li>
          </ul>
        </section>

        <section className="mt-10 rounded-xl border border-zinc-200 bg-zinc-50 p-6" aria-labelledby="partners-signup">
          <h2 id="partners-signup" className="text-lg font-semibold text-zinc-900">
            Partner sign-up
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700">
            Email us with your name, company or agency, and how you would like to refer clients (link, phone, or direct
            leads). We will set you up with your referral details and commission terms.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=Partner%20enquiry`}
            className="mt-4 inline-block max-w-full break-all font-medium text-sky-700 hover:underline sm:break-words"
          >
            {SITE.email}
          </a>
        </section>

        <div className="mt-10">
          <Link href="/" className="text-sky-700 hover:underline">
            ← Back to home
          </Link>
        </div>
      </PageBand>

      <PageBand tone="sky" contentMax="2xl" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="partners-cta"
          heading="Refer a client moving this month?"
          description="Send them to a monitored quote; we credit your partner ID."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: `mailto:${SITE.email}?subject=Partner%20referral`, label: "Email a lead" }}
        />
      </PageBand>
    </>
  );
}
