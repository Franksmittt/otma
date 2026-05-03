"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "otma-social-studio-gate";
/** Soft gate only; code ships to the browser. */
const ACCESS_CODE = "85879";

type Props = {
  children: ReactNode;
};

export function LoginGate({ children }: Props) {
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1") {
        setUnlocked(true);
      }
    } finally {
      setReady(true);
    }
  }, []);

  const submit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (value.trim() === ACCESS_CODE) {
        sessionStorage.setItem(STORAGE_KEY, "1");
        setError(false);
        setUnlocked(true);
        setValue("");
      } else {
        setError(true);
      }
    },
    [value],
  );

  if (!ready) {
    return (
      <div
        className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-500"
        style={{ fontFamily: "var(--font-banner-inter), ui-sans-serif, system-ui, sans-serif" }}
      >
        <span className="text-sm">Loading…</span>
      </div>
    );
  }

  if (!unlocked) {
    return (
      <div
        className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 py-12 text-zinc-100"
        style={{ fontFamily: "var(--font-banner-inter), ui-sans-serif, system-ui, sans-serif" }}
      >
        <div className="w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-xl backdrop-blur">
          <h1
            className="mb-1 text-center text-xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-banner-montserrat), ui-sans-serif, system-ui, sans-serif" }}
          >
            OTMA studio
          </h1>
          <p className="mb-6 text-center text-sm text-zinc-400">
            Enter the access code to open the banner suite and template library.
          </p>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <label className="sr-only" htmlFor="social-studio-code">
              Access code
            </label>
            <input
              id="social-studio-code"
              name="code"
              type="password"
              autoComplete="off"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              className="rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-center text-lg tracking-widest text-white outline-none ring-sky-500/40 focus:border-sky-500/50 focus:ring-2"
              placeholder="•••••"
              aria-invalid={error}
              aria-describedby={error ? "gate-err" : undefined}
            />
            {error ? (
              <p id="gate-err" className="text-center text-sm text-red-400" role="alert">
                That code is not valid. Try again or contact OTMA.
              </p>
            ) : null}
            <button
              type="submit"
              className="rounded-lg bg-sky-600 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export function lockSocialStudio(): void {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
  window.location.reload();
}
