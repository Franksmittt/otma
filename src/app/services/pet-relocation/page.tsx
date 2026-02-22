import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VIP pet relocation",
  description: "Stress-less pet relocation. Climate-controlled transit, care procedures. Alberton movers who treat your pets like family.",
  alternates: { canonical: "https://otma.co.za/services/pet-relocation" },
};

export default function PetRelocationPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">VIP pet relocation</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Your pets are family. We offer dedicated pet relocation so they travel safely and with care, whether you’re moving with us or we’re coordinating their move separately.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">What we provide</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
          <li>Climate-controlled, secure transit where applicable</li>
          <li>Clear procedures so you know how your pet is cared for</li>
          <li>Alignment with your move so timing and handover are smooth</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Stress-less pet move checklist</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          We recommend a 15-step checklist for a stress-less pet relocation: vet check, ID and microchip, travel crate familiarisation, travel documents if needed, and a calm handover on the day. Ask us for our full “Stress-Less Pet Relocation Checklist” when you book.
        </p>
      </section>

      <div className="mt-10">
        <Link href="/quote" className="inline-block rounded-full bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-700">
          Get a free quote
        </Link>
      </div>
    </div>
  );
}
