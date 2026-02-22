import Link from "next/link";
import { SITE, NAV_LINKS, SUBURBS } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col">
            <p className="font-semibold text-zinc-900 dark:text-white">{SITE.name}</p>
            <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">{SITE.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded bg-zinc-200/80 px-2 py-1 text-xs font-medium dark:bg-zinc-700">
                PMA
              </span>
              <span className="rounded bg-zinc-200/80 px-2 py-1 text-xs font-medium dark:bg-zinc-700">
                AMOSA
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-zinc-900 dark:text-white">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a href={`tel:${SITE.phoneE164}`} className="text-sky-700 hover:underline dark:text-sky-400">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="text-sky-700 hover:underline dark:text-sky-400">
                  {SITE.email}
                </a>
              </li>
              <li className="leading-snug">
                {SITE.address.street}<br />
                {SITE.address.locality}, {SITE.address.postalCode}
              </li>
            </ul>
          </div>

          {/* Quick links - 2-col layout so column height matches others */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-zinc-900 dark:text-white">Quick links</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas we serve - 2-col layout */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-zinc-900 dark:text-white">Areas we serve</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {SUBURBS.map(({ slug, name }) => (
                <li key={slug}>
                  <Link
                    href={`/movers-in/${slug}`}
                    className="text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-white"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-700 sm:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-zinc-500 hover:underline dark:text-zinc-400"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
