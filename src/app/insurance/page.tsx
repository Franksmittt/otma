import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Asset protection & insurance",
  description: "Goods-in-Transit (GIT) and All-Risk moving insurance. Transparent coverage limits. Your move protected with On The Move Again.",
  alternates: { canonical: `${SITE.url}/insurance` },
};

const INSURANCE_FAQ = [
  {
    q: "Do you provide Goods-in-Transit (GIT) insurance for hijacking or theft?",
    a: "Yes. We offer Goods-in-Transit (GIT) and All-Risk in-house short-term cover. Unlike basic Carrier's Liability (which only pays if we're proven negligent), GIT covers physical loss from fire, collision, or armed hijacking regardless of fault. We publish our coverage limits so you know exactly what you're protected for.",
  },
  {
    q: "What is your moving insurance coverage limit per load?",
    a: "Our All-Risk in-house short-term insurance provides cover up to R250,000 per load (or as confirmed on your quote). We confirm the exact terms when you get a quote. No vague promises—you get numbers you can rely on.",
  },
  {
    q: "Are your moving trucks monitored for security during transit?",
    a: "Yes. Our fleet uses live GPS tracking and in-transit monitoring. When you book, you get access to our client portal to see where your goods are in real time. We call it \"Smile! You're on Camera!\"—insurance is your safety net; monitoring helps prevent problems in the first place.",
  },
];

function InsuranceFaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: INSURANCE_FAQ.map(({ q, a }) => ({
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

export default function InsurancePage() {
  return (
    <>
      <InsuranceFaqJsonLd />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Asset protection & insurance</h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          We believe in clear, upfront protection. Here’s how we cover your move so you’re not left guessing.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Goods-in-Transit (GIT) vs Carrier’s Liability</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            <strong>Carrier’s Liability</strong> only pays out if the transporter is legally proven negligent. 
            <strong> Goods-in-Transit (GIT) insurance</strong> covers physical loss (including fire, collision, or hijacking) regardless of fault. 
            We offer in-house short-term All-Risk cover so you know you’re protected against the risks that matter most on South African roads.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Our coverage</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            We publish our coverage limits clearly. Our All-Risk in-house short-term insurance provides cover up to <strong>R250,000 per load</strong> (or as per your current quote). 
            When you get a quote, we’ll confirm the exact terms. No vague “we’re insured” promises. You get numbers you can rely on.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Monitoring as prevention</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Insurance is your safety net. Our “Smile! You’re on Camera!” tracking and in-transit monitoring help prevent problems in the first place. 
            Real-time visibility and verification mean you and we both know where your goods are and that they’re secure.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Frequently asked questions about moving insurance</h2>
          <dl className="mt-4 space-y-4">
            {INSURANCE_FAQ.map(({ q, a }) => (
              <div key={q}>
                <dt className="font-medium text-zinc-900 dark:text-white">{q}</dt>
                <dd className="mt-1 text-zinc-600 dark:text-zinc-400">{a}</dd>
              </div>
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
