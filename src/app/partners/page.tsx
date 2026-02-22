import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Realtor & partner portal",
  description: "Estate agents and partners: refer clients to On The Move Again and earn. Alberton furniture removals referral programme.",
  alternates: { canonical: `${SITE.url}/partners` },
};

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Realtor & partner portal</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        If you’re a real estate agent, broker, or property manager in Alberton and the East Rand, we’d like to work with you. Refer your clients to us for furniture removals and we’ll take care of the rest with a structured referral programme.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">How it works</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
          <li>Register as a partner and get your unique referral link</li>
          <li>Share the link or send leads to us with your partner ID</li>
          <li>When a referred client completes a move, you earn commission as agreed</li>
        </ul>
      </section>

      <section className="mt-10 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/50">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Partner sign-up</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Email us with your name, company or agency, and how you’d like to refer clients (link, phone, or direct leads). We’ll set you up with your referral details and commission terms.
        </p>
        <a href={`mailto:${SITE.email}?subject=Partner%20enquiry`} className="mt-4 inline-block font-medium text-sky-700 hover:underline">
          {SITE.email}
        </a>
      </section>

      <div className="mt-10">
        <Link href="/" className="text-sky-700 hover:underline">← Back to home</Link>
      </div>
    </div>
  );
}
