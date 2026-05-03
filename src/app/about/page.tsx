import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";
import { PageBand } from "@/components/page/PageBand";
import { ServiceCtaBand } from "@/components/services/ServiceCtaBand";
import { ServiceLedeQuartet } from "@/components/services/ServiceLedeQuartet";
import { ServiceMasthead } from "@/components/services/ServiceMasthead";
import { marketingImages } from "@/lib/marketing-images";
import { SERVICE_LINKS } from "@/lib/services-list";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `${SITE.name}: owner-led furniture removals from Joanique Eco Park, Alberton. PMA and AMOSA accredited, live GPS and in-transit monitoring, full-service relocations nationwide.`,
  alternates: { canonical: `${SITE.url}/about` },
};

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Joanique+Eco+Park+186+2nd+Avenue+Verwoerdpark+Alberton+1449&z=15&output=embed";
const MAP_LINK_URL =
  "https://www.google.com/maps/search/?api=1&query=Joanique+Eco+Park+186+2nd+Avenue+Verwoerdpark+Alberton";

/** Same editorial strip as /services for visual consistency. */
const LEDE = [
  { src: "/images/services/services-lede-01.jpg", alt: "On The Move Again furniture removal and monitored moving services" },
  { src: "/images/services/services-lede-02.jpg", alt: "Professional packing, transport, and relocation with OTMA" },
  { src: "/images/services/services-lede-03.jpg", alt: "Alberton-based full-service removals and logistics" },
  { src: "/images/services/services-lede-04.jpg", alt: "Local and long-distance moving with accredited OTMA crews" },
] as const;

const PILLARS = [
  {
    title: "Monitored moves",
    body: "Live GPS and in-transit monitoring are standard, not an upsell. You follow milestones in the client portal instead of chasing voicemail on moving day.",
  },
  {
    title: "PMA and AMOSA",
    body: "We meet national mover standards: trained crews, purpose-built vehicles, clean materials, and a formal complaints path if something serious ever goes wrong.",
  },
  {
    title: "Insurance in plain numbers",
    body: "Goods-in-Transit and All-Risk limits are written on your quote in language you can compare, not buried in fine print after you have already said yes.",
  },
  {
    title: "One coordinated team",
    body: "House and office moves, packing, crates, storage, cleaning, pets, and vehicles sit under one Alberton operation so your dates and handovers stay aligned.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageBand tone="soft" innerClassName="pb-0 sm:pb-0 lg:pb-0">
        <ServiceMasthead
          kicker="About us"
          title="Alberton removals, owner-led and monitored"
          layout="stacked"
          intro={
            <div className="space-y-4">
              <p>
                <strong className="font-semibold text-zinc-900">{SITE.name}</strong> ({SITE.tagline}) is a furniture
                relocation company based at Joanique Eco Park in Verwoerdpark, Alberton. We plan and run local East Rand
                moves, long-distance corridors to Cape Town and KZN, and everything around the move: packing, storage,
                handover cleaning, crate hire, pets, and specialist vehicle transport.
              </p>
              <p>
                Our owner, Andre, stays involved from first quote to final offload. Clients tell us they value straight
                answers, constant updates, and a crew that behaves like guests in your home, not strangers rushing a job.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-800 shadow-sm">
                  <span className="text-amber-600" aria-hidden>
                    ★
                  </span>
                  {SITE.rating.value}/{SITE.rating.best} Google ({SITE.rating.count}+ reviews)
                </span>
                <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-700 shadow-sm">
                  {SITE.accreditations.join(" · ")}
                </span>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/quote"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
                >
                  Get a free quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-sky-500 hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
                >
                  Contact us
                </Link>
                <Link
                  href="/track"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-transparent px-3 py-2.5 text-sm font-semibold text-sky-800 underline-offset-4 hover:underline"
                >
                  Track a move
                </Link>
              </div>
            </div>
          }
        />
      </PageBand>

      <PageBand tone="dark" innerClassName="pt-6 sm:pt-8">
        <ServiceLedeQuartet items={LEDE} />
      </PageBand>

      <PageBand tone="light" contentMax="6xl" aria-labelledby="about-who">
        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14">
          <div className="min-w-0 lg:min-h-0">
            <h2 id="about-who" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Who we are
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
              We operate from {SITE.address.street}, {SITE.address.locality}. The Eco Park base is deliberate: secure
              access, room for fleet and storage, and a place you can visit when you want to see how we work, not just read
              about it on a website.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
              Most of our crew live in and around Alberton. That means we understand estate rules, HOA time windows, and
              East Rand traffic patterns before we send a truck, so your move plan reflects real conditions, not a generic
              checklist from another city.
            </p>
            <Link
              href="/blog"
              className="mt-6 inline-flex text-sm font-semibold text-sky-700 hover:underline"
            >
              Read how we work on the blog →
            </Link>
          </div>
          <div className="flex min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-100 shadow-md ring-1 ring-black/5 lg:h-full">
            <ContentImage
              src="/images/home/home-about-joanique-alberton.jpg"
              alt="On The Move Again at Joanique Eco Park, Alberton, owner-led removals base"
              ratio="wide"
              fillRowHeight
              sizes="(max-width: 1024px) 100vw, 36rem"
              className="flex min-h-0 flex-1 flex-col lg:min-h-0 [&>div]:rounded-none [&>div]:border-0 [&>div]:shadow-none"
            />
          </div>
        </div>
      </PageBand>

      <PageBand tone="soft" contentMax="6xl" aria-labelledby="about-pillars">
        <h2 id="about-pillars" className="text-center text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          What makes OTMA different
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-zinc-600">
          We built the business around things people actually worry about on moving day: visibility, accreditation, honest
          cover, and one accountable team.
        </p>
        <ul className="mt-10 grid min-w-0 list-none gap-5 p-0 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {PILLARS.map(({ title, body }) => (
            <li
              key={title}
              className="flex flex-col rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm transition hover:border-sky-300/80 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">{body}</p>
            </li>
          ))}
        </ul>
      </PageBand>

      <PageBand tone="dark" contentMax="6xl" aria-labelledby="about-leadership">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14">
          <div className="min-w-0 lg:flex lg:flex-col lg:justify-center">
            <h2 id="about-leadership" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Leadership you can actually reach
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
              Andre stays hands-on across quotes, crew briefings, and problem-solving on the road. When reviews mention
              &quot;constant updates&quot;, that is the standard we aim for on every job, not a lucky week.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
              If we get something wrong, we fix it. When a move once needed an extra trip because of our side of the plan,
              we authorised a free follow-up load instead of billing the client for our miscalculation. That is the kind of
              recovery we want our name to stand for.
            </p>
          </div>
          <div className="min-w-0 overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-xl ring-1 ring-white/5 lg:flex lg:min-h-[280px] lg:flex-col">
            <ContentImage
              src={marketingImages.officePlanning.src}
              alt={marketingImages.officePlanning.alt}
              ratio="wide"
              fillRowHeight
              className="lg:min-h-0 lg:flex-1 [&>div]:rounded-none [&>div]:border-0 [&>div]:shadow-none"
            />
          </div>
        </div>
      </PageBand>

      <PageBand tone="light" contentMax="6xl" aria-labelledby="about-services">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="about-services" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              What we do
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-700">
              Full-service relocation under one roof. Pick a service to read scope, FAQs, and how we quote it, or jump
              straight to a monitored quote if you already know your dates.
            </p>
          </div>
          <Link
            href="/services"
            className="shrink-0 text-sm font-semibold text-sky-700 hover:underline sm:text-base"
          >
            All services overview →
          </Link>
        </div>
        <ul className="mt-10 grid min-w-0 list-none grid-cols-1 gap-4 p-0 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-4">
          {SERVICE_LINKS.map(({ href, title, desc, imageSrc, imageAlt }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex h-full min-h-[44px] flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:border-sky-600 hover:shadow-md"
              >
                <div className="relative aspect-[5/3] w-full shrink-0 border-b border-zinc-200 bg-zinc-100 lg:aspect-[4/3]">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-4">
                  <span className="text-base font-semibold leading-snug text-zinc-900 sm:text-lg lg:text-[0.9375rem] lg:leading-tight xl:text-base">
                    {title}
                  </span>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-zinc-700 lg:text-xs lg:leading-relaxed xl:text-sm">
                    {desc}
                  </span>
                  <span className="mt-3 text-sm font-medium text-sky-700 lg:mt-3">Learn more →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </PageBand>

      <PageBand tone="soft" contentMax="6xl" aria-labelledby="about-accred">
        <h2 id="about-accred" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          PMA and AMOSA in plain terms
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-700">
          Membership is not a sticker for the truck. It means documented training, equipment checks, and a national committee
          route if you ever need to escalate a serious complaint. It is one of the fastest ways to sort a legitimate mover
          from a fly-by-night.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">Professional Movers Association</p>
            <h3 className="mt-2 text-xl font-semibold text-zinc-900">PMA</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Industry association standards for how crews are trained, how vehicles are maintained, and how customers are
              treated before, during, and after the move.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">Accredited Mover of South Africa</p>
            <h3 className="mt-2 text-xl font-semibold text-zinc-900">AMOSA</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              South African accreditation benchmark: vetted operations, consistent packing and handling practices, and
              public accountability aligned with how domestic removals should work.
            </p>
          </div>
        </div>
      </PageBand>

      <PageBand tone="dark" contentMax="6xl" aria-labelledby="about-map">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="about-map" className="text-xl font-semibold text-white sm:text-2xl">
              Visit us at Joanique Eco Park
            </h2>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              {SITE.address.street}, {SITE.address.locality}, {SITE.address.postalCode}. Open for collections, crate
              returns, and face-to-face planning.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-zinc-300">
              {SITE.hours.map((h) => (
                <li key={h.day}>
                  <span className="font-semibold text-white">{h.day}</span>
                  <span className="text-zinc-500"> · </span>
                  {h.opens}–{h.closes}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-4">
              <a href={`tel:${SITE.phoneE164}`} className="text-sm font-semibold text-sky-400 hover:underline">
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="text-sm font-semibold text-sky-400 hover:underline">
                {SITE.email}
              </a>
            </div>
          </div>
          <Link
            href={MAP_LINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-semibold text-sky-400 hover:underline"
          >
            Open in Google Maps
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
            className="block aspect-[4/3] min-h-[260px] w-full sm:aspect-auto sm:min-h-[320px]"
          />
        </div>
      </PageBand>

      <PageBand tone="sky" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="about-cta"
          heading="Move with a team that shows its work"
          description="Get a monitored quote, ask about insurance limits, or walk us through a tricky access. We reply in plain language."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: "/contact", label: "Contact us" }}
        />
      </PageBand>
    </>
  );
}
