import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Track your move",
  description: "Client portal: track your move in real time. Smile – you're on camera! Login to see GPS and milestone updates.",
  alternates: { canonical: `${SITE.url}/track` },
};

export default function TrackPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Track your move</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Once your move is booked, you’ll get login details for our client portal. There you can see live GPS tracking, milestone updates, and time-stamped cargo verification, so you always know where your goods are.
      </p>

      <section className="mt-10 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/50">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Client login</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          The tracking portal is available to clients with an active booking. If you’ve lost your login details, call us on{" "}
          <a href={`tel:${SITE.phoneE164}`} className="font-medium text-sky-700 hover:underline">{SITE.phone}</a>.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Booking reference or email"
            className="rounded-lg border border-zinc-300 px-4 py-2 dark:border-zinc-600 dark:bg-zinc-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-lg border border-zinc-300 px-4 py-2 dark:border-zinc-600 dark:bg-zinc-800"
          />
          <button type="button" className="rounded-full bg-sky-600 px-6 py-2 font-medium text-white hover:bg-sky-700">
            Log in
          </button>
        </div>
        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
          Login is enabled once your move is confirmed and you’ve received your booking reference. Lost your details? Call or email us and we’ll resend them.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">What you’ll see in the portal</h2>
        <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
          <li><strong>Live map:</strong> See your truck’s position and route in real time.</li>
          <li><strong>Milestones:</strong> Packing complete, in transit, arrived at destination.</li>
          <li><strong>Cargo verification:</strong> Time-stamped confirmation that your goods are secure.</li>
        </ul>
      </section>

      <div className="mt-10">
        <Link href="/quote" className="text-sky-700 hover:underline">Book a move →</Link>
      </div>
    </div>
  );
}
