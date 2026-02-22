import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy for On The Move Again. How we collect, use, and protect your information. POPIA and data protection.",
  alternates: { canonical: `${SITE.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Privacy policy</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Last updated: {new Date().toLocaleDateString("en-ZA")}. On The Move Again (“we”, “us”) respects your privacy and complies with the Protection of Personal Information Act (POPIA) and other applicable data protection laws in South Africa.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Information we collect</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          We collect information you give us when requesting a quote, booking a move, or contacting us: name, phone number, email, addresses, and move details. If you use our tracking portal, we process data necessary to show you the status and location of your move. We do not sell your personal information to third parties.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">How we use it</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          We use your information to provide quotes, perform moves, communicate with you, and operate our tracking and client portal. We may retain records for legal, accounting, and dispute-resolution purposes as required by law.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Security and sharing</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          We take reasonable steps to protect your personal information. We may share data with service providers (e.g. payment or IT) who assist our operations, subject to confidentiality. We do not share your information for marketing by unrelated third parties.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Your rights</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          You may ask us what personal information we hold about you, request correction, or object to processing where the law allows. Contact us at {SITE.email} or {SITE.phone} to exercise your rights or with any privacy questions.
        </p>
      </section>
    </div>
  );
}
