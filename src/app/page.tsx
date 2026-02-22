import Link from "next/link";
import { SITE, SUBURBS } from "@/lib/site-config";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-900 px-4 py-14 text-white sm:px-6 sm:py-20 md:py-24 lg:py-28">
        {/* Subtle gradient and grid for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.12),transparent)]" aria-hidden />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,zinc-800_1px,transparent_1px),linear-gradient(to_bottom,zinc-800_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)] opacity-30" aria-hidden />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            {/* Left: headline + CTAs */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] lg:text-5xl lg:leading-[1.1]">
                {SITE.tagline}
              </h1>
              <p className="mt-5 max-w-xl text-base text-zinc-400 sm:text-lg lg:mx-0 lg:mt-6">
                Real-time GPS tracking on every move. PMA & AMOSA accredited. Your peace of mind is our standard.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
                <Link
                  href="/quote"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-sky-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-zinc-900 sm:text-lg lg:min-h-[56px] lg:px-10"
                >
                  Get your free quote
                </Link>
                <a
                  href={`tel:${SITE.phoneE164}`}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl border-2 border-zinc-500 px-8 py-4 text-base font-semibold text-white transition hover:border-zinc-400 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-900 sm:text-lg lg:min-h-[56px] lg:px-10"
                >
                  Call {SITE.phone}
                </a>
              </div>
              <p className="mt-6 text-sm text-zinc-500 lg:mt-7">
                Alberton · Long-haul to Cape Town & KZN · Office · Packing & storage
              </p>
            </div>

            {/* Right: trust card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-2xl border border-zinc-700/80 bg-zinc-800/60 p-6 shadow-xl backdrop-blur sm:p-8">
                <div className="flex items-center gap-3 text-sky-400">
                  <svg className="h-8 w-8 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span className="text-sm font-semibold uppercase tracking-wider">Monitored moves</span>
                </div>
                <p className="mt-4 text-lg font-medium text-white">
                  Every truck is fitted with live GPS. You get secure access to track your move in real time.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-700/80 px-3 py-1.5 text-sm text-zinc-300">
                    <span className="text-sky-400">★</span> {SITE.rating.value}/10 · {SITE.rating.count}+ reviews
                  </span>
                  <span className="inline-flex items-center rounded-lg bg-sky-500/20 px-3 py-1.5 text-sm font-medium text-sky-300">
                    PMA · AMOSA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smile You're on Camera */}
      <section className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-10">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
                Smile! You&apos;re on Camera!
              </h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                We don’t just promise safe moves; we prove it. Our fleet is fitted with live GPS tracking and in-transit monitoring. 
                Book a move and get secure access to see your goods in real time. No more “black box” anxiety.
              </p>
              <ul className="mt-6 space-y-2 text-zinc-600 dark:text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="text-sky-600">✓</span> Live GPS tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-600">✓</span> Time-stamped cargo verification
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-600">✓</span> Milestone updates (Packing · In transit · Delivered)
                </li>
              </ul>
              <Link
                href="/quote"
                className="mt-6 inline-block rounded-full bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-700"
              >
                Book a monitored move
              </Link>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-100 p-8 dark:border-zinc-700 dark:bg-zinc-800/50 aspect-video flex flex-col items-center justify-center text-center">
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">Live tracking &amp; in-transit monitoring</p>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">Our crews pack with care at Joanique Eco Park. Once your move is underway, you can follow the truck on the map and see milestone updates in your client portal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="relative py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            What we do
          </p>
          <h2 className="mt-2 text-center text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl md:text-4xl">
            Full-Service Relocation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-600 dark:text-zinc-400">
            From packing and transport to cleaning and storage, we handle the full journey so you don’t have to.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {[
              {
                title: "House & office removals",
                href: "/services/house-removals",
                desc: "Local and long-distance, 1-ton to 8-ton.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
              },
              {
                title: "Packing & unpacking",
                href: "/services/packing",
                desc: "Professional packing and tiered unpacking options.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
              },
              {
                title: "Crate rentals",
                href: "/services/crate-rentals",
                desc: "Reusable plastic crates: stronger and greener.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
              },
              {
                title: "Storage",
                href: "/services/storage",
                desc: "Short- and long-term at our secure Eco Park base.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-200 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10 dark:border-zinc-700 dark:bg-zinc-900/50 dark:hover:border-sky-500 dark:hover:shadow-sky-500/5 sm:p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 transition duration-200 group-hover:bg-sky-600 group-hover:text-white dark:bg-sky-900/40 dark:text-sky-400 dark:group-hover:bg-sky-600 dark:group-hover:text-white">
                  {item.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 dark:text-sky-400 group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-sky-600 bg-sky-600 px-6 py-3.5 font-semibold text-white transition hover:bg-sky-700 hover:border-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
            >
              View all services
              <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Suburb links (SEO) */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-10 dark:border-zinc-800 dark:bg-zinc-900/50 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-lg font-bold text-zinc-900 dark:text-white sm:text-xl">
            Furniture removals across Alberton
          </h2>
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-6 sm:gap-3">
            {SUBURBS.map(({ slug, name }) => (
              <Link
                key={slug}
                href={`/movers-in/${slug}`}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:bg-sky-50 hover:text-sky-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-sky-950 dark:hover:text-sky-300"
              >
                Movers in {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery – 2×4 grid, 8 images. When adding real photos use next/image with descriptive alt (e.g. "OTMA moving truck at Joanique Eco Park", "Crew packing furniture in Alberton") for SEO and accessibility. */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-900/50 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl">
            Our moves in action
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-zinc-600 dark:text-zinc-400">
            Trucks, crews, and happy customers across Alberton and beyond.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4 md:gap-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-700"
                role="img"
                aria-label={`Gallery image ${i + 1} of 8 – Our moves in action`}
              >
                {/* Replace with <Image src={`/gallery/${i + 1}.jpg`} alt="Descriptive text, e.g. Moving truck at Joanique Eco Park" fill className="object-cover" /> */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-300 to-zinc-400 dark:from-zinc-600 dark:to-zinc-700">
                  <svg className="h-10 w-10 text-zinc-500 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl">
            Ready for a stress-free move?
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Get a free quote. No hidden fees. Monitored from start to finish.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <Link
              href="/quote"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-sky-600 px-6 py-4 font-semibold text-white hover:bg-sky-700 sm:px-8"
            >
              Get free quote
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-zinc-300 px-6 py-4 font-semibold hover:border-sky-500 hover:bg-sky-50 dark:border-zinc-600 dark:hover:border-sky-500 dark:hover:bg-sky-950 sm:px-8"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
