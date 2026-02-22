import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "House & office removals",
  description: "Local and long-distance furniture removals from Alberton. House moves, office removals, 1-ton to 8-ton fleet. Monitored and insured.",
  alternates: { canonical: `${SITE.url}/services/house-removals` },
};

const HOUSE_REMOVALS_FAQ = [
  {
    q: "Are your house removal trucks monitored during the move?",
    a: "Yes. Every move is fitted with live GPS tracking and in-transit monitoring. You get access to our client portal so you can see where your goods are in real time. We call it \"Smile! You're on Camera!\"—no black-box anxiety.",
  },
  {
    q: "What areas do you cover for house and office removals?",
    a: "We're based in Alberton and serve the East Rand (including Meyersdal, Brackenhurst, New Redruth, Randhart, Alberante), plus long-distance moves to Cape Town, Durban, and other provinces. Local and interprovincial.",
  },
  {
    q: "What size vehicles do you use for furniture removals?",
    a: "We have a 1-ton bakkie for smaller loads and 8-ton trucks for full households and office moves. We'll recommend the right size based on your inventory so you're not overpaying or undersized.",
  },
];

function HouseRemovalsFaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOUSE_REMOVALS_FAQ.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function HouseRemovalsPage() {
  return (
    <>
      <HouseRemovalsFaqJsonLd />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">House & office removals</h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Whether you’re moving across Alberton or from Gauteng to Cape Town or KZN, we provide full-service furniture removals with the right-sized vehicles and monitored transit.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">What we offer</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
            <li>Local moves within Alberton and the East Rand</li>
            <li>Long-distance moves to Cape Town, Durban, and other provinces</li>
            <li>Office and commercial removals</li>
            <li>1-ton bakkie for smaller loads; 8-ton trucks for full households</li>
            <li>Real-time tracking so you always know where your goods are</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Why choose us</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            We’re PMA and AMOSA accredited, with transparent pricing and in-house insurance. Every move is monitored, so no “black box” anxiety. Get a free quote and see the difference.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Frequently asked questions</h2>
          <dl className="mt-4 space-y-4">
            {HOUSE_REMOVALS_FAQ.map(({ q, a }) => (
              <div key={q}>
                <dt className="font-medium text-zinc-900 dark:text-white">{q}</dt>
                <dd className="mt-1 text-zinc-600 dark:text-zinc-400">{a}</dd>
              </dl>
            ))}
          </dl>
        </section>

        <div className="mt-10">
          <Link href="/quote" className="inline-block rounded-full bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-700">
            Get a free quote
          </Link>
        </div>
      </div>
    </>
  );
}
