import type { Metadata } from "next";
import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";
import { PageBand } from "@/components/page/PageBand";
import { marketingImages } from "@/lib/marketing-images";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Get a free quote",
  description:
    "Get your free, no-obligation moving quote. Local Alberton or long-distance. Monitored moves with transparent pricing.",
  alternates: { canonical: `${SITE.url}/quote` },
};

type QuoteSearchParams = Promise<{ origin?: string; dest?: string; date?: string }>;

const inputClass =
  "mt-1.5 min-h-[48px] w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 shadow-sm transition placeholder:text-zinc-500 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500/25 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500";

export default async function QuotePage({ searchParams }: { searchParams: QuoteSearchParams }) {
  const sp = await searchParams;
  return (
    <>
      <PageBand tone="soft" contentMax="6xl">
        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14">
          <div className="min-w-0 lg:min-h-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">Free moving quote</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.4rem] lg:leading-tight">
              Monitored moves, transparent numbers
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-700">
              Start with your route and date. Next you will add a quick inventory so we can size the truck, then your
              contact details. No obligation, and we will explain insurance in plain language before you commit.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-zinc-700">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700" aria-hidden>
                  ✓
                </span>
                <span>
                  <strong className="text-zinc-900">Live GPS and in-transit checks</strong> on monitored relocations.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700" aria-hidden>
                  ✓
                </span>
                <span>
                  <strong className="text-zinc-900">No surprise surcharges</strong> on the quote we give you for the scope you describe.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700" aria-hidden>
                  ✓
                </span>
                <span>
                  <strong className="text-zinc-900">{SITE.accreditations.join(" & ")}</strong> accredited crew and equipment from Joanique Eco Park, Alberton.
                </span>
              </li>
            </ul>
            <ol
              className="mt-10 flex flex-wrap items-center gap-2"
              aria-label="Quote steps"
            >
              <li className="rounded-full bg-sky-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                1 · Move details
              </li>
              <li className="rounded-full border border-zinc-300 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                2 · Inventory
              </li>
              <li className="rounded-full border border-zinc-300 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                3 · Contact
              </li>
            </ol>
          </div>
          <div className="flex min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-100 shadow-md ring-1 ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 lg:h-full">
            <ContentImage
              src={marketingImages.modernHome.src}
              alt={marketingImages.modernHome.alt}
              ratio="wide"
              fillRowHeight
              sizes="(max-width: 1024px) 100vw, 36rem"
              className="flex min-h-0 flex-1 flex-col lg:min-h-0 [&>div]:rounded-none [&>div]:border-0 [&>div]:shadow-none"
            />
          </div>
        </div>
      </PageBand>

      <PageBand tone="light" contentMax="6xl">
        <div className="grid min-w-0 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <div className="flex min-h-0 min-w-0 flex-col lg:col-span-7 lg:h-full">
            <section
              aria-labelledby="quote-step1"
              className="flex min-h-0 flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:h-full lg:p-10 dark:border-zinc-700 dark:bg-zinc-900/30"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-sky-700">Step 1 of 3</p>
              <h2 id="quote-step1" className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-white">
                Where and when are you moving?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
                Suburbs or full addresses both work. If your date is flexible, pick your best option and tell us in the next
                step.
              </p>
              <form className="mt-8 space-y-5" action="/quote/inventory" method="get">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="origin" className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      Moving from *
                    </label>
                    <input
                      id="origin"
                      type="text"
                      name="origin"
                      placeholder="e.g. Meyersdal, Alberton"
                      required
                      autoComplete="street-address"
                      defaultValue={sp.origin ?? ""}
                      className={inputClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="dest" className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      Moving to *
                    </label>
                    <input
                      id="dest"
                      type="text"
                      name="dest"
                      placeholder="e.g. Cape Town, or same suburb"
                      required
                      defaultValue={sp.dest ?? ""}
                      className={inputClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="date" className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      Preferred move date *
                    </label>
                    <input id="date" type="date" name="date" required defaultValue={sp.date ?? ""} className={inputClass} />
                    <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-500">
                      We confirm availability when we respond. Sundays after 14:00 are closed.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 border-t border-zinc-100 pt-6 dark:border-zinc-700 sm:flex-row sm:flex-wrap sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 sm:flex-none sm:px-8"
                  >
                    Next: Your inventory
                  </button>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-center text-sm font-semibold text-zinc-800 transition hover:border-sky-500 hover:bg-sky-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-sky-500"
                  >
                    Prefer phone or WhatsApp?
                  </Link>
                </div>
              </form>
              <p className="mt-8 border-t border-zinc-100 pt-5 text-center text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 lg:mt-auto lg:pt-6">
                <Link href="/" className="font-medium text-sky-700 hover:underline dark:text-sky-400">
                  ← Back to home
                </Link>
              </p>
            </section>
          </div>

          <aside
            className="flex min-h-0 min-w-0 flex-col lg:col-span-5 lg:h-full"
            aria-label="Other ways to get a quote"
          >
            <div className="flex min-h-0 w-full flex-1 flex-col justify-between gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:min-h-0 lg:p-10 dark:border-zinc-700 dark:bg-zinc-900/30">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Need it today?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  For urgent dates or complex access (estates, hoists, basements, narrow driveways), a two-minute call often
                  beats a form. We can sanity-check truck size, hoists, and access before you spend time on fields.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  Same monitored service either way: GPS-backed fleet, uniform crews, and clear paperwork. If you already
                  have photos or a pin drop, send them on WhatsApp and we will fold them into your quote.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`tel:${SITE.phoneE164}`}
                    className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                  >
                    Call {SITE.phone}
                  </a>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-xl border border-emerald-600/40 bg-emerald-50/80 px-4 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-100 dark:border-emerald-500/40 dark:bg-emerald-950/40 dark:text-emerald-100 dark:hover:bg-emerald-900/50"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="border-t border-zinc-200 pt-5 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-white">Already booked?</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Use the portal for live status on your move. If something looks off mid-route, the desk sees the same
                  milestones you do so we can respond quickly.
                </p>
                <Link
                  href="/track"
                  className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-sky-700 hover:underline dark:text-sky-400"
                >
                  Track your move →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </PageBand>
    </>
  );
}
