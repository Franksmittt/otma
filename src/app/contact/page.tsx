import type { Metadata } from "next";
import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";
import { PageBand } from "@/components/page/PageBand";
import { ServiceCtaBand } from "@/components/services/ServiceCtaBand";
import { marketingImages } from "@/lib/marketing-images";
import { SITE } from "@/lib/site-config";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact On The Move Again. ${SITE.address.locality}. Phone ${SITE.phone}, WhatsApp, email. Get a quote or track your move.`,
  alternates: { canonical: `${SITE.url}/contact` },
};

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Joanique+Eco+Park+186+2nd+Avenue+Verwoerdpark+Alberton+1449&z=15&output=embed";
const MAP_LINK_URL =
  "https://www.google.com/maps/search/?api=1&query=Joanique+Eco+Park+186+2nd+Avenue+Verwoerdpark+Alberton";

const contactCardClass =
  "group flex min-w-0 gap-4 rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm transition hover:border-sky-400/80 hover:shadow-md";

export default function ContactPage() {
  return (
    <>
      <PageBand tone="soft" contentMax="6xl">
        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14">
          <div className="min-w-0 lg:min-h-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">Contact us</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Talk to the team at Joanique Eco Park
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-700">
              Owner-led moves from Alberton with monitored trucks and clear insurance language. Call, WhatsApp, email, or
              send the form, and we will reply as soon as we can.
            </p>
            <ul className="mt-6 space-y-2 border-l-2 border-sky-500 pl-4 text-sm text-zinc-700">
              {SITE.hours.map((h) => (
                <li key={h.day}>
                  <span className="font-semibold text-zinc-900">{h.day}</span>
                  <span className="text-zinc-600"> · </span>
                  <span>
                    {h.opens}–{h.closes}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${SITE.phoneE164}`}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
              >
                Call {SITE.phone}
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-emerald-500/60 hover:bg-emerald-50/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/30 focus-visible:ring-offset-2"
              >
                WhatsApp
              </a>
              <Link
                href="/quote"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-sky-500 hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
              >
                Get a quote
              </Link>
              <Link
                href="/track"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-transparent px-3 py-2.5 text-sm font-semibold text-sky-800 underline-offset-4 hover:underline"
              >
                Track a move
              </Link>
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Accredited · {SITE.accreditations.join(" · ")}
            </p>
          </div>
          <div className="flex min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-100 shadow-md ring-1 ring-black/5 lg:h-full">
            <ContentImage
              src={marketingImages.deliveryVan.src}
              alt={marketingImages.deliveryVan.alt}
              ratio="wide"
              fillRowHeight
              sizes="(max-width: 1024px) 100vw, 36rem"
              className="flex min-h-0 flex-1 flex-col lg:min-h-0 [&>div]:rounded-none [&>div]:border-0 [&>div]:shadow-none"
            />
          </div>
        </div>
      </PageBand>

      <PageBand tone="light" contentMax="6xl">
        <div className="grid min-w-0 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-7">
            <div className="min-w-0 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">Send a message</h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-600 sm:text-base">
                Tell us what you need: quote, general question, or help with tracking. We usually respond within one working
                day; for urgent dates, phone or WhatsApp is fastest.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>

          <aside className="min-w-0 space-y-4 lg:col-span-5" aria-label="Other ways to reach us">
            <a href={`tel:${SITE.phoneE164}`} className={contactCardClass}>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 transition group-hover:bg-sky-200/90">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-zinc-900">Phone</p>
                <p className="mt-0.5 text-lg font-bold text-sky-700">{SITE.phone}</p>
                <p className="mt-1 text-sm text-zinc-600">Best for move dates and complex inventory.</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={contactCardClass}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-200/90">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-zinc-900">WhatsApp</p>
                <p className="mt-0.5 text-lg font-bold text-emerald-800">Message us</p>
                <p className="mt-1 text-sm text-zinc-600">Same number as phone. Quick photos and pin drops welcome.</p>
              </div>
            </a>

            <div className={contactCardClass}>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-zinc-900">Email</p>
                <a href={`mailto:${SITE.email}`} className="mt-0.5 block break-all text-base font-semibold text-sky-700 hover:underline">
                  {SITE.email}
                </a>
                <p className="mt-1 text-sm text-zinc-600">Best for detailed written briefs and attachments.</p>
              </div>
            </div>

            <div className={contactCardClass}>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-zinc-900">Visit</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-700">
                  {SITE.address.street}
                  <br />
                  {SITE.address.locality}, {SITE.address.postalCode}
                </p>
                <Link
                  href={MAP_LINK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 hover:underline"
                >
                  Open in Google Maps
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </PageBand>

      <PageBand tone="dark" contentMax="6xl">
        <section aria-labelledby="contact-map">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="contact-map" className="text-xl font-semibold text-white sm:text-2xl">
                Find us
              </h2>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                Joanique Eco Park in Verwoerdpark, with easy access for collections, crate returns, and face-to-face planning.
              </p>
            </div>
            <Link
              href={MAP_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-semibold text-sky-400 hover:underline"
            >
              View larger map
            </Link>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-xl ring-1 ring-white/5">
            <iframe
              title="On The Move Again location map"
              src={MAP_EMBED_URL}
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-[4/3] min-h-[260px] w-full sm:aspect-auto sm:min-h-[360px]"
            />
          </div>
        </section>
      </PageBand>

      <PageBand tone="sky" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="contact-cta"
          heading="Need a quote fast?"
          description="Use our online quote form or call and WhatsApp for a same-day response when we can."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: `tel:${SITE.phoneE164}`, label: `Call ${SITE.phone}` }}
        />
      </PageBand>
    </>
  );
}
