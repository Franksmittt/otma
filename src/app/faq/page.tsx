import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about furniture removals, tracking, insurance, and moving with On The Move Again in Alberton.",
  alternates: { canonical: `${SITE.url}/faq` },
};

const FAQ_ITEMS = [
  {
    q: "Are your moving trucks monitored?",
    a: "Yes. Our fleet uses live GPS tracking and in-transit monitoring. When you book, you get access to our client portal so you can see where your goods are in real time. We call it \"Smile! You're on Camera!\"",
  },
  {
    q: "Do you provide insurance for hijacking or theft?",
    a: "Yes. We offer Goods-in-Transit (GIT) and All-Risk in-house short-term cover. We publish our coverage limits (e.g. up to R250,000 per load) so you know exactly what you're protected for. See our Asset Protection & Insurance page for details.",
  },
  {
    q: "What areas do you cover?",
    a: "We're based in Alberton and serve the East Rand, including Meyersdal, Brackenhurst, New Redruth, Randhart, and Alberante, plus long-distance moves to Cape Town, Durban, and other provinces.",
  },
  {
    q: "How do I get a quote?",
    a: "Use our online quote form, call us on 072 100 0936, or WhatsApp. We'll ask about origin, destination, date, and what you're moving, then send you a clear quote with no hidden fees.",
  },
  {
    q: "Are you accredited?",
    a: "Yes. We're members of the Professional Movers Association (PMA) and meet the Accredited Mover of South Africa (AMOSA) standard. That means trained staff, purpose-built vehicles, and public recourse if you ever have a serious complaint.",
  },
  {
    q: "Do you offer packing and unpacking?",
    a: "Yes. We offer full packing services and tiered unpacking options, from countertop unpacking to full cupboard organisation. We also rent plastic crates as a stronger, greener alternative to cardboard.",
  },
];

function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
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

export default function FAQPage() {
  return (
    <>
      <FaqJsonLd />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Frequently asked questions</h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Quick answers about moving with {SITE.name}. For anything else, call or WhatsApp us.
        </p>

        <dl className="mt-10 space-y-8">
          {FAQ_ITEMS.map(({ q, a }) => (
            <div key={q}>
              <dt className="text-lg font-semibold text-zinc-900 dark:text-white">{q}</dt>
              <dd className="mt-2 text-zinc-600 dark:text-zinc-400">{a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
