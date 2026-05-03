import Link from "next/link";
import type { ReactNode } from "react";

type ServiceCtaBandProps = {
  id: string;
  heading: string;
  description?: ReactNode;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

function isNonNextHref(href: string) {
  return /^(https?:|tel:|mailto:)/i.test(href);
}

const btnPrimary =
  "inline-flex min-h-[44px] items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50";

const btnSecondary =
  "inline-flex min-h-[44px] items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-sky-500 hover:bg-sky-50 hover:text-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50";

export function ServiceCtaBand({ id, heading, description, primary, secondary }: ServiceCtaBandProps) {
  return (
    <div className="w-full min-w-0 rounded-xl border border-sky-200/80 bg-sky-50/90 px-5 py-6 shadow-sm sm:px-6 sm:py-7">
      <div className="mx-auto w-full min-w-0 max-w-xl text-center">
        <h2 id={id} className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl">
          {heading}
        </h2>
        {description ? (
          <div className="mt-1.5 text-sm leading-snug text-zinc-700">{description}</div>
        ) : null}
        <div className="mt-5 flex flex-col items-stretch justify-center gap-2 sm:flex-row sm:justify-center sm:gap-3">
          {isNonNextHref(primary.href) ? (
            <a href={primary.href} className={btnPrimary}>
              {primary.label}
            </a>
          ) : (
            <Link href={primary.href} className={btnPrimary}>
              {primary.label}
            </Link>
          )}
          {secondary ? (
            isNonNextHref(secondary.href) ? (
              <a href={secondary.href} className={btnSecondary}>
                {secondary.label}
              </a>
            ) : (
              <Link href={secondary.href} className={btnSecondary}>
                {secondary.label}
              </Link>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}
