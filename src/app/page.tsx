import type { Metadata } from "next";
import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";
import { HomeHeroCarousel } from "@/components/home/HomeHeroCarousel";
import { ServiceCardIcon } from "@/components/home/ServiceCardIcon";
import { PageBand } from "@/components/page/PageBand";
import { ServiceFaqSection } from "@/components/services/ServiceFaqSection";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE_FAQ_ITEMS } from "@/lib/faq-content";
import { SERVICE_LINKS } from "@/lib/services-list";
import { SITE, SUBURBS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Furniture removals Alberton | Monitored moves & GPS tracking",
  description: `${SITE.name}: PMA & AMOSA accredited furniture removals, live GPS tracking, house and office moves, packing, storage, and long-distance to Cape Town and KZN. Free quote.`,
  alternates: { canonical: `${SITE.url}/` },
};

const HOME_FAQ_SCHEMA = SITE_FAQ_ITEMS.slice(0, 4);

function HomeFaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQ_SCHEMA.map(({ q, a }) => ({
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

const RECENT_POSTS = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

export default function HomePage() {
  return (
    <div>
      <HomeFaqJsonLd />

      {/* 1. Hero — 3-slide carousel (client) */}
      <HomeHeroCarousel />

      {/* 2. Trust strip — light band */}
      <section
        className="border-y border-zinc-200 bg-zinc-50 py-9 sm:py-11"
        aria-labelledby="home-trust-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="home-trust-heading" className="sr-only">
            Trust and credentials
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-zinc-900">
                {SITE.rating.value}/{SITE.rating.best}
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-700">Google rating</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-zinc-900">GIT</p>
              <p className="mt-1 text-sm font-medium text-zinc-700">Goods-in-transit cover</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-zinc-900">PMA</p>
              <p className="mt-1 text-sm font-medium text-zinc-700">Professional Movers Association</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-zinc-900">AMOSA</p>
              <p className="mt-1 text-sm font-medium text-zinc-700">Accredited mover standard</p>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-zinc-700">
            Based at Joanique Eco Park, Alberton.{" "}
            <Link href="/track" className="font-semibold text-sky-700 hover:underline">
              Track your move
            </Link>{" "}
            in the client portal once you are booked.
          </p>
        </div>
      </section>

      {/* 3. How it works — dark band */}
      <section className="bg-zinc-950 py-12 text-zinc-100 sm:py-16" aria-labelledby="home-steps-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="home-steps-heading" className="text-center text-2xl font-bold text-white sm:text-3xl">
            How your move works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-400">
            Clear steps from first call to keys in hand. No black-box logistics.
          </p>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            <li className="rounded-2xl border border-zinc-700 bg-zinc-900/80 p-6 shadow-lg shadow-black/20">
              <span className="text-sm font-bold text-sky-400">01</span>
              <h3 className="mt-2 text-lg font-semibold text-white">Quote & plan</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Tell us origin, destination, dates, and what you are moving. We confirm fleet size (1-ton to 8-ton),
                crew, and access constraints for estates or offices.
              </p>
              <Link href="/quote" className="mt-4 inline-block text-sm font-semibold text-sky-400 hover:underline">
                Start a quote →
              </Link>
            </li>
            <li className="rounded-2xl border border-zinc-700 bg-zinc-900/80 p-6 shadow-lg shadow-black/20">
              <span className="text-sm font-bold text-sky-400">02</span>
              <h3 className="mt-2 text-lg font-semibold text-white">Pack & load</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Optional full packing, crate rentals, or you pack while we protect furniture. Blankets, stretch wrap,
                and labelled cartons for an organised unload.
              </p>
              <Link href="/services/packing" className="mt-4 inline-block text-sm font-semibold text-sky-400 hover:underline">
                Packing options →
              </Link>
            </li>
            <li className="rounded-2xl border border-zinc-700 bg-zinc-900/80 p-6 shadow-lg shadow-black/20">
              <span className="text-sm font-bold text-sky-400">03</span>
              <h3 className="mt-2 text-lg font-semibold text-white">Track & deliver</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Live GPS and milestone updates while you are on the road. Delivery windows you can plan around, with
                monitored handover at your new address.
              </p>
              <Link href="/track" className="mt-4 inline-block text-sm font-semibold text-sky-400 hover:underline">
                Tracking info →
              </Link>
            </li>
          </ol>
        </div>
      </section>

      {/* 4. Monitoring — light */}
      <section className="border-y border-zinc-200 bg-white py-12 sm:py-16" aria-labelledby="home-monitor-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-10 lg:gap-12">
            <div className="min-w-0">
              <h2 id="home-monitor-heading" className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                Smile! You&apos;re on Camera!
              </h2>
              <p className="mt-4 text-zinc-700">
                We don’t just promise safe moves; we prove it. Our fleet is fitted with live GPS tracking and
                in-transit monitoring. Book a move and get secure access to see your goods in real time. No more
                “black box” anxiety.
              </p>
              <ul className="mt-6 space-y-2 text-zinc-700">
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
                className="mt-6 inline-block rounded-full bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-700"
              >
                Book a monitored move
              </Link>
            </div>
            <div className="min-w-0">
              <ContentImage
                src="/images/home/home-monitoring-smile-camera.jpg"
                alt="Monitored OTMA fleet with live GPS and in-transit visibility for your move"
                ratio="photo"
              />
              <p className="mt-4 text-sm text-zinc-700">
                Our crews pack with care at Joanique Eco Park. Once your move is underway, you can follow the truck on
                the map and see milestone updates in your client portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. All services — dark */}
      <section className="relative bg-zinc-900 py-16 text-zinc-100 sm:py-20 md:py-24" aria-labelledby="home-services-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-sky-400">What we do</p>
          <h2 id="home-services-heading" className="mt-2 text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Full-service relocation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-400">
            From packing and transport to cleaning, storage, pets, and vehicles: one coordinated team based in
            Alberton.
          </p>

          <div className="mt-10 w-full min-w-0 sm:mt-12">
            <ContentImage
              src="/images/home/home-full-service-relocation.jpg"
              alt="On The Move Again full-service relocation: packing, transport, storage, and coordinated crew in Alberton"
              ratio="wide"
              sizes="(max-width: 1024px) 100vw, 72rem"
            />
          </div>

          <div className="mt-10 grid min-w-0 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {SERVICE_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col rounded-2xl border border-zinc-700 bg-zinc-950/60 p-6 shadow-lg shadow-black/30 transition duration-200 hover:border-sky-500 hover:bg-zinc-900 sm:p-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-300 transition duration-200 group-hover:bg-sky-500 group-hover:text-zinc-950">
                  <ServiceCardIcon href={item.href} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 group-hover:gap-2 transition-all">
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
              className="inline-flex items-center gap-2 rounded-xl border-2 border-sky-500 bg-sky-500 px-6 py-3.5 font-semibold text-zinc-950 transition hover:border-sky-400 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              View all services
              <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Real homes — light (image spans same width as What we do 4-card row: max-w-6xl inner) */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-12 sm:py-16" aria-labelledby="home-homes-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="home-homes-heading" className="mx-auto max-w-4xl text-center text-xl font-bold text-zinc-900 sm:text-2xl">
            Real homes, real care
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-zinc-700 sm:text-base">
            From lounges and dining sets to bedrooms and fragile décor, we plan protection and placement so your new
            space feels like home from day one.
          </p>
          <div className="mt-8 w-full min-w-0">
            <ContentImage
              src="/images/home/home-real-homes-real-care.jpg"
              alt="Careful furniture placement and protection for lounges, dining sets, and bedrooms in your new home"
              ratio="wide"
              slimWide
              sizes="(max-width: 1024px) 100vw, 72rem"
            />
          </div>
        </div>
      </section>

      {/* 7. Long-distance — dark */}
      <section className="border-t border-zinc-800 bg-zinc-950 py-12 text-zinc-100 sm:py-16 md:py-20" aria-labelledby="home-ld-heading">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-stretch lg:gap-14">
          <div className="min-w-0">
            <h2 id="home-ld-heading" className="text-2xl font-bold text-white sm:text-3xl">
              Gauteng to Cape Town, Durban, and beyond
            </h2>
            <p className="mt-4 text-zinc-300">
              Long-distance furniture moves need honest load windows, highway-ready padding, and a fleet you can see
              on the map. We run monitored trucks on the N1 and N3 corridors with milestone updates in your portal.
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-300">
              <li>Clear pickup and delivery windows, not vague “soon”</li>
              <li>Mattresses and polished wood protected for vibration</li>
              <li>Same accreditation and insurance standards as local moves</li>
            </ul>
            <Link href="/services/long-distance" className="mt-6 inline-flex font-semibold text-sky-400 hover:underline">
              Long-distance service details →
            </Link>
          </div>
          <div className="min-w-0 lg:flex lg:h-full lg:min-h-0 lg:flex-col">
            <ContentImage
              src="/images/home/home-long-distance-corridors.jpg"
              alt="Monitored long-distance furniture moves on the N1 and N3 corridors with GPS and portal updates"
              ratio="wide"
              fillRowHeight
              className="lg:min-h-0 lg:flex-1 lg:self-stretch"
            />
          </div>
        </div>
      </section>

      {/* 8. Insurance — light */}
      <section className="bg-white py-12 sm:py-16" aria-labelledby="home-insurance-heading">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-stretch">
          <div className="order-2 min-w-0 lg:order-1 lg:flex lg:h-full lg:min-h-0 lg:flex-col">
            <ContentImage
              src="/images/home/home-insurance-git-cover.jpg"
              alt="Goods-in-transit and all-risk cover with clear limits on your written OTMA quote"
              ratio="wide"
              fillRowHeight
              className="lg:min-h-0 lg:flex-1 lg:self-stretch"
            />
          </div>
          <div className="order-1 min-w-0 lg:order-2">
            <h2 id="home-insurance-heading" className="text-2xl font-bold text-zinc-900 sm:text-3xl">
              Insurance that uses real numbers
            </h2>
            <p className="mt-4 text-zinc-700">
              Goods-in-Transit (GIT) and All-Risk in-house short-term cover are available with published limits (for
              example up to R250,000 per load as confirmed on your quote). Monitoring helps prevent incidents; insurance
              is your safety net when the unexpected happens.
            </p>
            <Link href="/insurance" className="mt-6 inline-flex font-semibold text-sky-700 hover:underline">
              Read asset protection & insurance →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. About — dark */}
      <section className="border-t border-zinc-800 bg-zinc-900 py-12 text-zinc-100 sm:py-16" aria-labelledby="home-about-heading">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-stretch">
          <div className="min-w-0">
            <h2 id="home-about-heading" className="text-2xl font-bold text-white sm:text-3xl">
              Owner-led, Alberton-based
            </h2>
            <p className="mt-4 text-zinc-300">
              We operate from Units 9 and 10 at Joanique Eco Park, Verwoerdpark: a secure base you can visit. Our owner,
              Andre, stays involved from quote to delivery. Clients mention constant updates and straight answers when
              plans change.
            </p>
            <p className="mt-4 text-zinc-300">
              PMA and AMOSA membership means trained crews, purpose-built vehicles, clean packing materials, and
              national recourse if something serious goes wrong.
            </p>
            <Link href="/about" className="mt-6 inline-flex font-semibold text-sky-400 hover:underline">
              About On The Move Again →
            </Link>
          </div>
          <div className="min-w-0 lg:flex lg:h-full lg:min-h-0 lg:flex-col">
            <ContentImage
              src="/images/home/home-about-joanique-alberton.jpg"
              alt="On The Move Again at Joanique Eco Park, Alberton — owner-led removals base"
              ratio="wide"
              fillRowHeight
              className="lg:min-h-0 lg:flex-1 lg:self-stretch"
            />
          </div>
        </div>
      </section>

      {/* 10. Service areas — light */}
      <section className="bg-zinc-100 py-12 sm:py-16" aria-labelledby="home-areas-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="home-areas-heading" className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl">
            Areas we know well
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-700">
            Estate gates, HOA windows, and East Rand traffic patterns are part of how we plan your crew and truck—not
            afterthoughts on moving day.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SUBURBS.map(({ slug, name, character }) => (
              <article
                key={slug}
                className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-zinc-900">Movers in {name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-700">{character}</p>
                <Link href={`/movers-in/${slug}`} className="mt-4 text-sm font-semibold text-sky-700 hover:underline">
                  View {name} page →
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {SUBURBS.map(({ slug, name }) => (
              <Link
                key={`chip-${slug}`}
                href={`/movers-in/${slug}`}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-200 hover:bg-sky-50 hover:text-sky-800"
              >
                Movers in {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Blog — dark */}
      <section className="border-t border-zinc-800 bg-zinc-950 py-12 text-zinc-100 sm:py-16" aria-labelledby="home-blog-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 id="home-blog-heading" className="text-2xl font-bold text-white sm:text-3xl">
                From the blog
              </h2>
              <p className="mt-2 max-w-xl text-zinc-400">
                Practical guides on estates, security, packing, and moving in Alberton and the East Rand.
              </p>
            </div>
            <Link href="/blog" className="shrink-0 font-semibold text-sky-400 hover:underline">
              All posts →
            </Link>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {RECENT_POSTS.map((post) => (
              <li key={post.slug}>
                <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                  <time className="text-xs font-semibold uppercase tracking-wide text-sky-400" dateTime={post.date}>
                    {post.date}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-white">
                    <Link href={`/blog/${post.slug}`} className="hover:text-sky-300">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{post.description}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-4 text-sm font-semibold text-sky-400 hover:underline">
                    Read article →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 12. FAQ — same block as service pages */}
      <PageBand tone="soft" contentMax="6xl" aria-labelledby="home-faq-heading">
        <ServiceFaqSection
          id="home-faq-heading"
          items={HOME_FAQ_SCHEMA}
          afterSubtitle={
            <>
              Full FAQ on{" "}
              <Link href="/faq" className="font-semibold text-sky-700 hover:underline">
                /faq
              </Link>
              .
            </>
          }
        />
      </PageBand>

      {/* 13. Partners — dark */}
      <section className="border-t border-zinc-800 bg-zinc-900 py-12 text-zinc-100 sm:py-16" aria-labelledby="home-partners-heading">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 id="home-partners-heading" className="text-2xl font-bold text-white sm:text-3xl">
            Realtors & partners
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
            Estate agents and property managers: refer clients to a monitored, accredited mover with a structured
            referral programme. We handle packing, timing, and handover so your sales close smoothly.
          </p>
          <Link
            href="/partners"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-sky-400 px-8 py-3 font-semibold text-sky-300 hover:bg-white/5"
          >
            Partner portal →
          </Link>
        </div>
      </section>

      {/* 14. Contact strip — light */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-10 sm:py-12" aria-labelledby="home-contact-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="home-contact-heading" className="text-center text-xl font-bold text-zinc-900 sm:text-2xl">
            Visit, call, or WhatsApp
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Address</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                {SITE.address.street}
                <br />
                {SITE.address.locality}, {SITE.address.postalCode}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Hours</h3>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700">
                {SITE.hours.map((h) => (
                  <li key={h.day}>
                    {h.day}: {h.opens}–{h.closes}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Direct</h3>
              <p className="mt-2 text-sm text-zinc-700">
                <a href={`tel:${SITE.phoneE164}`} className="font-semibold text-sky-700 hover:underline">
                  {SITE.phone}
                </a>
                <br />
                <a href={`mailto:${SITE.email}`} className="font-semibold text-sky-700 hover:underline">
                  {SITE.email}
                </a>
              </p>
              <Link href="/contact" className="mt-3 inline-block text-sm font-semibold text-zinc-900 underline">
                Contact form & map →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Final CTA — dark */}
      <section className="bg-zinc-950 py-12 text-zinc-100 sm:py-16 md:py-20" aria-labelledby="home-final-cta-heading">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="home-final-cta-heading" className="text-xl font-bold text-white sm:text-2xl">
            Ready for a stress-free move?
          </h2>
          <p className="mt-3 text-zinc-400">
            Get a free quote. No hidden fees. Monitored from start to finish.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <Link
              href="/quote"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-sky-500 px-6 py-4 font-semibold text-zinc-950 hover:bg-sky-400 sm:px-8"
            >
              Get free quote
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-zinc-600 px-6 py-4 font-semibold text-white hover:border-sky-400 hover:bg-zinc-900 sm:px-8"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
