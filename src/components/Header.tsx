"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { SITE, NAV } from "@/lib/site-config";

type NavItem = (typeof NAV)[number];
function isNavLink(item: NavItem): item is Extract<NavItem, { href: string }> {
  return "href" in item;
}
function hasChildren(item: NavItem): item is Extract<NavItem, { children: unknown }> {
  return "children" in item;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
    setOpenDropdown(null);
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

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo - always left */}
        <Link
          href="/"
          className="min-w-0 shrink-0 font-semibold text-zinc-900 dark:text-white"
        >
          {SITE.name}
        </Link>

        {/* Desktop nav + CTAs - hidden on mobile */}
        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {NAV.map((item) => {
            if (isNavLink(item)) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              );
            }
            if (!hasChildren(item)) return null;
            const isOpen = openDropdown === item.label;
            return (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 rounded px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute left-0 top-full min-w-[200px] rounded-lg border border-zinc-200 bg-white py-1 shadow-lg dark:border-zinc-700 dark:bg-zinc-900 ${
                    isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                  } transition-opacity duration-150`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${SITE.phoneE164}`}
            className="rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
          >
            Call {SITE.phone}
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-sky-600 px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-50 dark:hover:bg-sky-950"
          >
            WhatsApp
          </a>
        </div>

        {/* Hamburger - right, mobile only */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
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

      {/* Mobile menu overlay + panel */}
      <div
        className={`fixed inset-0 top-16 z-40 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm overflow-y-auto border-l border-zinc-200 bg-white shadow-xl transition-transform duration-200 ease-out dark:border-zinc-800 dark:bg-zinc-950 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-0 py-4">
            {NAV.map((item) => {
              if (isNavLink(item)) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border-b border-zinc-100 px-4 py-3.5 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                );
              }
              if (!hasChildren(item)) return null;
              const expanded = openDropdown === item.label;
              return (
                <div key={item.label} className="border-b border-zinc-100 dark:border-zinc-800">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3.5 text-left text-zinc-700 dark:text-zinc-300"
                    onClick={() => setOpenDropdown(expanded ? null : item.label)}
                    aria-expanded={expanded}
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expanded && (
                    <div className="bg-zinc-50 pb-2 pl-4 pr-4 dark:bg-zinc-900/50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2.5 text-sm text-zinc-600 dark:text-zinc-400"
                          onClick={closeMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="mt-2 flex flex-col gap-0 border-t border-zinc-200 pt-2 dark:border-zinc-800">
              <a
                href={`tel:${SITE.phoneE164}`}
                className="px-4 py-3.5 font-medium text-sky-700"
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
      </div>
    </header>
  );
}
