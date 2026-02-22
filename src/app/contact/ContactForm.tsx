"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sky-200 bg-sky-50 p-8 text-center dark:border-sky-800 dark:bg-sky-950/30">
        <p className="text-lg font-semibold text-sky-800 dark:text-sky-200">
          Thank you for your message
        </p>
        <p className="mt-2 text-sky-700 dark:text-sky-300">
          We’ll get back to you as soon as we can. For urgent moves, call or WhatsApp us.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Name *
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            className="mt-1.5 min-h-[44px] w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 placeholder-zinc-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Phone *
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            required
            className="mt-1.5 min-h-[44px] w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 placeholder-zinc-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500"
            placeholder="072 000 0000"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Email *
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          className="mt-1.5 min-h-[44px] w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 placeholder-zinc-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          className="mt-1.5 min-h-[44px] w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
        >
          <option value="quote">Get a quote</option>
          <option value="general">General enquiry</option>
          <option value="track">Track my move</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 placeholder-zinc-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500"
          placeholder="Tell us about your move or ask a question..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-xl bg-sky-600 px-6 py-4 font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 sm:w-auto sm:px-8"
      >
        Send message
      </button>
    </form>
  );
}
