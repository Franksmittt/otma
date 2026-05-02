import type { Metadata } from "next";
import { PageBand } from "@/components/page/PageBand";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Privacy policy for On The Move Again. How we collect, use, and protect your information. POPIA and data protection.",
  alternates: { canonical: `${SITE.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <PageBand tone="soft" contentMax="3xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Privacy policy</h1>
        <p className="mt-4 leading-relaxed text-zinc-700">
          Last updated: {new Date().toLocaleDateString("en-ZA")}. On The Move Again (&quot;we&quot;, &quot;us&quot;) respects your privacy and
          complies with the Protection of Personal Information Act (POPIA) and other applicable data protection laws in
          South Africa.
        </p>
      </PageBand>

      <PageBand tone="dark" contentMax="3xl">
        <section aria-labelledby="privacy-collect">
          <h2 id="privacy-collect" className="text-xl font-semibold text-white">
            Information we collect
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-400">
            We collect information you give us when requesting a quote, booking a move, or contacting us: name, phone number,
            email, addresses, and move details. If you use our tracking portal, we process data necessary to show you the
            status and location of your move. We do not sell your personal information to third parties.
          </p>
        </section>
      </PageBand>

      <PageBand tone="light" contentMax="3xl">
        <section aria-labelledby="privacy-use">
          <h2 id="privacy-use" className="text-xl font-semibold text-zinc-900">
            How we use it
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-700">
            We use your information to provide quotes, perform moves, communicate with you, and operate our tracking and client
            portal. We may retain records for legal, accounting, and dispute-resolution purposes as required by law.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="privacy-security">
          <h2 id="privacy-security" className="text-xl font-semibold text-zinc-900">
            Security and sharing
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-700">
            We take reasonable steps to protect your personal information. We may share data with service providers (for
            example payment or IT) who assist our operations, subject to confidentiality. We do not share your information for
            marketing by unrelated third parties.
          </p>
        </section>
      </PageBand>

      <PageBand tone="soft" contentMax="3xl">
        <section aria-labelledby="privacy-rights">
          <h2 id="privacy-rights" className="text-xl font-semibold text-zinc-900">
            Your rights
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-700">
            You may ask us what personal information we hold about you, request correction, or object to processing where the
            law allows. Contact us at {SITE.email} or {SITE.phone} to exercise your rights or with any privacy questions.
          </p>
        </section>
      </PageBand>
    </>
  );
}
