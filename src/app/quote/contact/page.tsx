import type { Metadata } from "next";
import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";
import { PageBand } from "@/components/page/PageBand";
import { marketingImages } from "@/lib/marketing-images";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Quote – Contact details",
  description: "Submit your contact details to receive your free moving quote.",
  alternates: { canonical: `${SITE.url}/quote/contact` },
};

export default function QuoteContactPage() {
  return (
    <>
      <PageBand tone="soft" contentMax="2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Almost there</h1>
        <p className="mt-4 leading-relaxed text-zinc-700">
          Leave your details and we will send you a free, no-obligation quote by email or phone. We will never spam you or
          share your information.
        </p>
      </PageBand>

      <PageBand tone="dark" contentMax="2xl">
        <div className="min-w-0">
          <ContentImage
            src={marketingImages.officePlanning.src}
            alt={marketingImages.officePlanning.alt}
            ratio="wide"
          />
        </div>
      </PageBand>

      <PageBand tone="light" contentMax="2xl">
        <section aria-labelledby="quote-contact-form">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-sm font-medium text-sky-700">Step 3 of 3</p>
            <h2 id="quote-contact-form" className="mt-1 text-lg font-semibold text-zinc-900">
              Contact details
            </h2>
            <p className="mt-2 text-sm text-zinc-700">
              We will use these to send your quote and confirm your move details. A team member may call to clarify anything.
            </p>
            <form className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-1 min-h-[44px] w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="mt-1 min-h-[44px] w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-700">
                  Phone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="072 100 0000"
                  className="mt-1 min-h-[44px] w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900"
                />
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-zinc-700">
                  Any extra details (optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="mt-1 min-h-[5.5rem] w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900"
                />
              </div>
              <button
                type="submit"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-700"
              >
                Get my free quote
              </button>
            </form>
            <p className="mt-4 text-sm text-zinc-700">
              We aim to respond within one working day. For urgent moves, call or WhatsApp us for a same-day quote.
            </p>
          </div>
        </section>

        <div className="mt-6 flex min-h-[44px] flex-wrap items-center gap-4 gap-y-2">
          <Link href="/quote/inventory" className="text-sky-700 hover:underline">
            ← Back to inventory
          </Link>
          <Link href="/quote" className="text-zinc-700 hover:underline">
            Start over
          </Link>
        </div>
      </PageBand>
    </>
  );
}
