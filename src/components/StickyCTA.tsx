"use client";

import { SITE } from "@/lib/site-config";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-2 border-t border-zinc-200 bg-white/95 px-3 pb-safe pt-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/95 sm:gap-3 md:hidden">
      <a
        href={`tel:${SITE.phoneE164}`}
        className="flex min-h-[48px] min-w-0 flex-1 items-center justify-center rounded-full bg-sky-600 px-2 py-3 text-center text-sm font-medium text-white hover:bg-sky-700 sm:text-base"
      >
        Call {SITE.phone}
      </a>
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[48px] min-w-0 flex-1 items-center justify-center rounded-full border-2 border-sky-600 px-2 py-3 text-center text-sm font-medium text-sky-700 hover:bg-sky-50 dark:hover:bg-sky-950 sm:text-base"
      >
        WhatsApp
      </a>
    </div>
  );
}
