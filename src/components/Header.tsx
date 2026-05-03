"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { SITE, HEADER_NAV } from "@/lib/site-config";

const navLinkClass =
  "rounded-md px-2.5 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white";

const mobileNavClass =
  "border-b border-zinc-100 px-4 py-3.5 font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900";

function HeaderLogo() {
  return (
    <Link
      href="/"
      className="relative z-10 block min-w-0 overflow-visible py-1 text-left md:inline-block md:w-auto md:shrink-0"
      aria-label={`${SITE.name}, Home`}
    >
      <span className="inline-flex items-baseline font-black text-zinc-900 dark:text-white max-md:tracking-[-0.02em] md:tracking-tight">
        <span className="text-[1.35rem] leading-[1.12] min-[400px]:text-[1.5rem] md:text-base md:leading-normal">
          On The{" "}
          <span className="relative inline-block overflow-visible align-baseline">
            <span className="otma-logo-move inline-block text-sky-600 dark:text-sky-400">Move</span>
          </span>{" "}
          Again
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, closeMenu]);

  const mobileMenuPortal =
    mounted && open
      ? createPortal(
          <>
            <div
              className="fixed inset-x-0 bottom-0 top-16 z-[19950] bg-black/30 md:hidden"
              aria-hidden
              onClick={closeMenu}
              role="presentation"
            />
            <div
              className="fixed bottom-0 right-0 top-16 z-[19980] flex w-full max-w-sm flex-col overflow-y-auto overscroll-contain border-l border-zinc-200 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-900 md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
            >
              <nav className="flex flex-col gap-0 py-4">
                {HEADER_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={mobileNavClass}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 flex flex-col gap-0 border-t border-zinc-200 pt-2 dark:border-zinc-800">
                  <Link
                    href="/quote"
                    className="px-4 py-3.5 font-semibold text-sky-700 dark:text-sky-400"
                    onClick={closeMenu}
                  >
                    Get a quote
                  </Link>
                  <Link
                    href="/track"
                    className="border-t border-zinc-100 px-4 py-3.5 font-medium text-zinc-800 dark:border-zinc-800 dark:text-zinc-200"
                    onClick={closeMenu}
                  >
                    Track your move
                  </Link>
                  <a
                    href={`tel:${SITE.phoneE164}`}
                    className="border-t border-zinc-100 px-4 py-3.5 font-medium text-sky-700 dark:border-zinc-800"
                    onClick={closeMenu}
                  >
                    Call {SITE.phone}
                  </a>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-t border-zinc-100 px-4 py-3.5 font-medium text-sky-700 dark:border-zinc-800"
                    onClick={closeMenu}
                  >
                    WhatsApp
                  </a>
                </div>
              </nav>
            </div>
          </>,
          document.body,
        )
      : null;

  return (
    <header className="sticky top-0 z-[20000] isolate overflow-visible border-b border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <div className="relative z-[20100] mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-2 overflow-visible px-3 sm:gap-3 sm:px-6 md:h-16 md:min-h-0">
        <div className="flex min-w-0 max-w-[calc(100%-3.25rem)] flex-1 items-center md:max-w-none md:block md:w-auto md:flex-none">
          <HeaderLogo />
        </div>

        <nav className="hidden flex-1 flex-wrap items-center justify-center gap-0.5 md:flex lg:gap-1">
          {HEADER_NAV.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-wrap items-center justify-end gap-2 md:flex md:gap-2">
          <Link
            href="/track"
            className="rounded-md px-2 py-1.5 text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            Track
          </Link>
          <Link
            href="/quote"
            className="rounded-full bg-sky-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
          >
            Get a quote
          </Link>
          <a
            href={`tel:${SITE.phoneE164}`}
            className="inline-flex rounded-full bg-sky-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-sky-700"
          >
            Call
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-sky-600 px-3.5 py-2 text-sm font-medium text-sky-700 hover:bg-sky-50 dark:border-sky-500 dark:text-sky-300 dark:hover:bg-zinc-800"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="relative z-[20200] flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
          style={{ touchAction: "manipulation" }}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            className={`block h-0.5 w-6 origin-center bg-current transition-all duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-200 ${
              open ? "scale-x-0 opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 origin-center bg-current transition-all duration-200 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      {mobileMenuPortal}
    </header>
  );
}
