"use client";

import { SITE } from "@/lib/site-config";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-3 border-t border-zinc-200 bg-white/95 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95 md:hidden">
      <a
        href={`tel:${SITE.phoneE164}`}
        className="flex-1 rounded-full bg-sky-600 py-3 text-center font-medium text-white hover:bg-sky-700"
      >
        Call {SITE.phone}
      </a>
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 rounded-full border-2 border-sky-600 py-3 text-center font-medium text-sky-700 hover:bg-sky-50 dark:hover:bg-sky-950"
      >
        WhatsApp
      </a>
    </div>
  );
}
