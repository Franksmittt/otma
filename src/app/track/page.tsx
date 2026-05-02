import type { Metadata } from "next";
import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";
import { PageBand } from "@/components/page/PageBand";
import { ServiceCtaBand } from "@/components/services/ServiceCtaBand";
import { marketingImages } from "@/lib/marketing-images";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Track your move",
  description:
    "Client portal: track your move in real time. Smile – you're on camera! Login to see GPS and milestone updates.",
  alternates: { canonical: `${SITE.url}/track` },
};

export default function TrackPage() {
  return (
    <>
      <PageBand tone="soft" contentMax="2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Track your move</h1>
        <p className="mt-4 leading-relaxed text-zinc-700">
          Once your move is booked, you will get login details for our client portal. There you can see live GPS tracking,
          milestone updates, and time-stamped cargo verification, so you always know where your goods are.
        </p>
      </PageBand>

      <PageBand tone="dark" contentMax="2xl">
        <div className="min-w-0">
          <ContentImage
            src={marketingImages.connectivity.src}
            alt={marketingImages.connectivity.alt}
            ratio="wide"
          />
        </div>
      </PageBand>

      <PageBand tone="light" contentMax="2xl">
        <section aria-labelledby="track-login">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            <h2 id="track-login" className="text-lg font-semibold text-zinc-900">
              Client login
            </h2>
            <p className="mt-2 text-sm text-zinc-700">
              The tracking portal is available to clients with an active booking. If you have lost your login details, call
              us on{" "}
              <a href={`tel:${SITE.phoneE164}`} className="font-medium text-sky-700 hover:underline">
                {SITE.phone}
              </a>
              .
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
              <input
                type="text"
                placeholder="Booking reference or email"
                autoComplete="username"
                className="min-h-[44px] w-full min-w-0 flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900 sm:min-w-[12rem]"
              />
              <input
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                className="min-h-[44px] w-full min-w-0 flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900 sm:min-w-[12rem]"
              />
              <button
                type="button"
                className="inline-flex min-h-[44px] w-full shrink-0 items-center justify-center rounded-full bg-sky-600 px-6 py-2 font-medium text-white hover:bg-sky-700 sm:w-auto"
              >
                Log in
              </button>
            </div>
            <p className="mt-3 text-sm text-zinc-700">
              Login is enabled once your move is confirmed and you have received your booking reference. Lost your details?
              Call or email us and we will resend them.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="track-see">
          <h2 id="track-see" className="text-xl font-semibold text-zinc-900">
            What you will see in the portal
          </h2>
          <ul className="mt-3 space-y-2 text-zinc-700">
            <li>
              <strong>Live map:</strong> See your truck&apos;s position and route in real time.
            </li>
            <li>
              <strong>Milestones:</strong> Packing complete, in transit, arrived at destination.
            </li>
            <li>
              <strong>Cargo verification:</strong> Time-stamped confirmation that your goods are secure.
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <Link href="/quote" className="text-sky-700 hover:underline">
            Book a move →
          </Link>
        </div>
      </PageBand>

      <PageBand tone="sky" contentMax="2xl" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="track-cta"
          heading="Need access to your booking?"
          description="Call us and we will resend portal credentials."
          primary={{ href: `tel:${SITE.phoneE164}`, label: `Call ${SITE.phone}` }}
          secondary={{ href: "/contact", label: "Contact us" }}
        />
      </PageBand>
    </>
  );
}
