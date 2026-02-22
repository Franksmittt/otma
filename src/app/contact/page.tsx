import type { Metadata } from "next";
import Link from "next/link";
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

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Head */}
      <header className="text-center">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
          Get in touch
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          We’re based at Joanique Eco Park in Verwoerdpark and serve Alberton and beyond. Use the form, call, or WhatsApp.
        </p>
      </header>

      {/* Two columns: form + contact info */}
      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left: form */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/50 sm:p-8">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Send us a message
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            We’ll reply by email or phone, usually within one working day.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        {/* Right: contact details + quick actions */}
        <div className="space-y-6">
          {/* Contact cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href={`tel:${SITE.phoneE164}`}
              className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-sky-600 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900/50 dark:hover:border-sky-600"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">Call us</p>
                <p className="mt-0.5 text-lg font-medium text-sky-700">{SITE.phone}</p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Mon–Sat 06:00–20:00, Sun 07:00–14:00</p>
              </div>
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-sky-600 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900/50 dark:hover:border-sky-600"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">WhatsApp</p>
                <p className="mt-0.5 text-lg font-medium text-sky-700">Chat with us</p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Quick replies for quotes</p>
              </div>
            </a>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900/50">
            <h3 className="font-semibold text-zinc-900 dark:text-white">Email</h3>
            <a href={`mailto:${SITE.email}`} className="mt-1 block text-sky-700 hover:underline">
              {SITE.email}
            </a>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900/50">
            <h3 className="font-semibold text-zinc-900 dark:text-white">Visit us</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {SITE.address.street}<br />
              {SITE.address.locality}, {SITE.address.postalCode}
            </p>
            <Link
              href={MAP_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:underline"
            >
              Open in Google Maps
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Map */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Find us</h2>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Joanique Eco Park, Verwoerdpark. We’re easy to find for collections and crate returns.
        </p>
        <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
          <iframe
            title="On The Move Again location map"
            src={MAP_EMBED_URL}
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block min-h-[280px] w-full sm:min-h-[320px]"
          />
        </div>
        <p className="mt-3 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <Link href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">
            View larger map
          </Link>
        </p>
      </section>

      {/* Quick CTA */}
      <section className="mt-14 rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-8 text-center dark:border-zinc-700 dark:bg-zinc-900/50 sm:py-10">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Need a quote fast?</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Use our online quote form or call / WhatsApp for a same-day response.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/quote"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-700"
          >
            Get a free quote
          </Link>
          <a
            href={`tel:${SITE.phoneE164}`}
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border-2 border-zinc-300 px-6 py-3 font-semibold hover:border-sky-600 hover:bg-sky-50 dark:border-zinc-600 dark:hover:border-sky-600 dark:hover:bg-sky-950"
          >
            Call {SITE.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
