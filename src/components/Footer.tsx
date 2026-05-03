import type { ReactNode } from "react";
import Link from "next/link";
import { SITE, NAV_LINKS, SUBURBS } from "@/lib/site-config";

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-zinc-600">{children}</h3>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-7">
        <div className="grid min-w-0 gap-6 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-6">
          {/* Brand */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-bold tracking-tight text-white">{SITE.name}</p>
            <p className="mt-1 line-clamp-2 text-xs leading-snug text-zinc-500">{SITE.tagline}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              <span className="rounded border border-sky-500/20 bg-sky-500/5 px-1.5 py-0.5 text-[0.65rem] font-medium text-sky-400/90">
                PMA
              </span>
              <span className="rounded border border-sky-500/20 bg-sky-500/5 px-1.5 py-0.5 text-[0.65rem] font-medium text-sky-400/90">
                AMOSA
              </span>
              <span className="rounded border border-sky-500/20 bg-sky-500/5 px-1.5 py-0.5 text-[0.65rem] font-medium text-sky-400/90">
                GPS
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-2 space-y-1 text-xs leading-snug">
              <li>
                <a href={`tel:${SITE.phoneE164}`} className="font-medium text-zinc-200 hover:text-sky-400">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-sky-400 sm:break-words">
                  {SITE.email}
                </a>
              </li>
              <li className="pt-1 text-[0.7rem] leading-snug text-zinc-600">
                {SITE.address.street}, {SITE.address.locality}
              </li>
            </ul>
          </div>

          {/* Hours (compact) */}
          <div className="min-w-0">
            <FooterHeading>Hours</FooterHeading>
            <ul className="mt-2 space-y-1 text-xs text-zinc-500">
              {SITE.hours.map((h) => (
                <li key={h.day}>
                  <span className="text-zinc-600">{h.day}:</span> {h.opens}–{h.closes}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <FooterHeading>Quick links</FooterHeading>
            <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-0.5 text-xs sm:max-w-sm lg:max-w-none">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-sky-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Areas: one dense strip */}
        <div className="mt-4 border-t border-zinc-800/90 pt-3">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-zinc-600">Areas we serve</p>
          <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-[0.7rem]">
            {SUBURBS.map(({ slug, name }) => (
              <li key={slug}>
                <Link href={`/movers-in/${slug}`} className="hover:text-sky-400">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal strip */}
        <div className="mt-4 border-t border-zinc-800/90 pt-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.7rem] text-zinc-600">
              <span>© {year} {SITE.name}</span>
              <span className="text-zinc-700" aria-hidden>
                ·
              </span>
              <Link href="/privacy" className="hover:text-sky-400">
                Privacy
              </Link>
              <span className="text-zinc-700" aria-hidden>
                ·
              </span>
              <Link href="/login" className="rounded border border-zinc-800 px-1.5 py-0.5 text-[0.65rem] text-zinc-500 hover:border-sky-500/30 hover:text-sky-400">
                Login
              </Link>
              <span className="text-zinc-700" aria-hidden>
                ·
              </span>
              <Link href="/quote" className="font-medium text-sky-500/90 hover:text-sky-400">
                Free quote →
              </Link>
            </div>
            <p className="text-[0.65rem] leading-snug text-zinc-600 sm:text-right">
              <span className="text-zinc-600">Designed, developed &amp; maintained by </span>
              <span className="font-semibold tracking-wide text-zinc-500">ENDPOINT MEDIA</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
