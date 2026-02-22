import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet the team behind ${SITE.name}. Based at Joanique Eco Park, Alberton. PMA & AMOSA accredited. Owner-led, transparent relocation.`,
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">About On The Move Again</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        We’re an Alberton-based relocation company that puts your peace of mind first. Every move is monitored, every step is transparent.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Our story</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          On The Move Again operates from Units 9 and 10 at Joanique Eco Park, 186 2nd Avenue, Verwoerdpark, Alberton. 
          We chose an Eco Park base to reflect our commitment to a modern, secure, and professional operation, somewhere you can visit and know your belongings are in safe hands.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Leadership you can reach</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Our owner, Andre, is directly involved in your move. Clients consistently mention his professionalism and &quot;constant updates&quot; from quote to delivery. 
          When something doesn’t go to plan, we fix it, including authorising a free second load when a job required an extra trip, rather than charging you for our miscalculation. 
          That’s the standard we hold ourselves to.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">PMA & AMOSA accreditation</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          We are proud members of the Professional Movers Association (PMA) and meet the Accredited Mover of South Africa (AMOSA) standard. 
          That means: trained staff, purpose-built vehicles, clean packing materials, and public recourse through a national committee if you ever have a serious complaint. 
          When you choose an accredited mover, you’re choosing accountability, not a fly-by-night operator.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Where we are</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          {SITE.address.street}, {SITE.address.locality}, {SITE.address.postalCode}. 
          Open Monday–Saturday 06:00–20:00, Sunday 07:00–14:00. 
          Give us a call on <a href={`tel:${SITE.phoneE164}`} className="font-medium text-sky-700 hover:underline">{SITE.phone}</a> or email <a href={`mailto:${SITE.email}`} className="font-medium text-sky-700 hover:underline">{SITE.email}</a>.
        </p>
      </section>
    </div>
  );
}
