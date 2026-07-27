import type { Metadata } from "next";
import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { PageBand } from "@/components/page/PageBand";
import { marketingImages } from "@/lib/marketing-images";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Quote – Contact details",
  description: "Submit your contact details to receive your free moving quote.",
  alternates: { canonical: `${SITE.url}/quote/contact` },
};

type ContactSearchParams = Promise<{
  origin?: string;
  dest?: string;
  date?: string;
  inventory?: string;
}>;

export default async function QuoteContactPage({ searchParams }: { searchParams: ContactSearchParams }) {
  const sp = await searchParams;
  const invQs = new URLSearchParams();
  if (sp.origin) invQs.set("origin", sp.origin);
  if (sp.dest) invQs.set("dest", sp.dest);
  if (sp.date) invQs.set("date", sp.date);
  const inventoryBackHref = invQs.toString() ? `/quote/inventory?${invQs.toString()}` : "/quote/inventory";

  return (
    <>
      <PageBand tone="soft" contentMax="6xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">Step 3 of 3</p>
            <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
              Finish your quote request with the real-world details
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-700">
              This is the part that makes the quote sharper: your contact details, any awkward access notes, and optional
              room photos so the team can price around what is actually there.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Accuracy</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">Photos help us size labour, wrapping, and vehicle space more confidently.</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Speed</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">The desk gets one complete brief instead of chasing missing details over multiple calls.</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Clarity</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">No mystery lead form: what you send is exactly what we use to review the move.</p>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <ContentImage
              src={marketingImages.officePlanning.src}
              alt={marketingImages.officePlanning.alt}
              ratio="wide"
              className="[&>div]:rounded-[1.75rem]"
            />
          </div>
        </div>
      </PageBand>

      <PageBand tone="light" contentMax="6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
          <section aria-labelledby="quote-contact-form" className="min-w-0">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-sky-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">1 · Move details</span>
              <span className="rounded-full bg-sky-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">2 · Inventory</span>
              <span className="rounded-full bg-zinc-950 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">3 · Contact & photos</span>
            </div>
            <h2 id="quote-contact-form" className="sr-only">
              Quote contact form
            </h2>
            <LeadCaptureForm
              inquiryType="quote"
              submitLabel="Send my quote request"
              quoteContext={{
                origin: sp.origin,
                dest: sp.dest,
                date: sp.date,
                inventory: sp.inventory,
              }}
            />
          </section>

          <aside className="space-y-5" aria-label="Quote help">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">What photos help most?</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
                <li>• Lounge and dining areas to judge volume and wrapping.</li>
                <li>• Staircases, lifts, narrow passages, or complex driveway access.</li>
                <li>• Oversized items such as pianos, safes, headboards, or gym equipment.</li>
                <li>• Fragile pieces you want singled out in the quote notes.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-zinc-950 p-6 text-zinc-100 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">Prefer not to upload here?</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Send photos on WhatsApp instead</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Some clients would rather send a quick burst of room photos from the phone camera roll. That still works —
                use the same number as the call line and mention your name so we can match it to the quote request.
              </p>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-300"
              >
                Open WhatsApp
              </a>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">Need to go back?</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href={inventoryBackHref}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-sky-500 hover:bg-sky-50"
                >
                  Back to inventory
                </Link>
                <Link
                  href="/quote"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-sky-500 hover:bg-sky-50"
                >
                  Start over
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </PageBand>
    </>
  );
}
