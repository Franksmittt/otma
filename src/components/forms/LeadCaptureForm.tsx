"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState } from "react";

type InquiryType = "contact" | "quote";

type QuoteContext = {
  origin?: string;
  dest?: string;
  date?: string;
  inventory?: string;
};

type LeadCaptureFormProps = {
  inquiryType: InquiryType;
  quoteContext?: QuoteContext;
  defaultSubject?: string;
  submitLabel?: string;
};

type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; requestId: string; message: string }
  | { status: "error"; message: string };

const fieldClassName =
  "mt-1.5 min-h-[48px] w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 shadow-sm transition placeholder:text-zinc-500 focus:border-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-500/15";

const panelClassName = "rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-7";
const MAX_FILES = 6;

function bytesToReadable(bytes: number) {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(mb >= 10 ? 0 : 1)} MB`;
}

export function LeadCaptureForm({
  inquiryType,
  quoteContext,
  defaultSubject = inquiryType === "quote" ? "Quote request" : "General enquiry",
  submitLabel = inquiryType === "quote" ? "Send quote request" : "Send message",
}: LeadCaptureFormProps) {
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });
  const [files, setFiles] = useState<File[]>([]);

  const quoteSummary = useMemo(() => {
    if (!quoteContext) return [];

    return [
      quoteContext.origin ? { label: "Moving from", value: quoteContext.origin } : null,
      quoteContext.dest ? { label: "Moving to", value: quoteContext.dest } : null,
      quoteContext.date ? { label: "Preferred date", value: quoteContext.date } : null,
      quoteContext.inventory ? { label: "Inventory notes", value: quoteContext.inventory } : null,
    ].filter((item): item is { label: string; value: string } => Boolean(item));
  }, [quoteContext]);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(event.target.files ?? []).slice(0, MAX_FILES);
    setFiles(selectedFiles);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    files.forEach((file) => formData.append("attachments", file));

    setSubmission({ status: "submitting" });

    try {
      const response = await fetch("/api/quote-request", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as { ok?: boolean; requestId?: string; message?: string };

      if (!response.ok || !result.ok || !result.requestId) {
        throw new Error(result.message ?? "We could not send your request right now.");
      }

      form.reset();
      setFiles([]);
      setSubmission({
        status: "success",
        requestId: result.requestId,
        message:
          result.message ??
          "Your request has been captured. We will use your details to come back with the next step.",
      });
    } catch (error) {
      setSubmission({
        status: "error",
        message: error instanceof Error ? error.message : "Something went wrong while sending the form.",
      });
    }
  }

  if (submission.status === "success") {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-zinc-900 shadow-sm sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Request received</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">Thanks, we’ve got it.</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700 sm:text-base">{submission.message}</p>
        <dl className="mt-5 grid gap-3 rounded-2xl border border-emerald-200/80 bg-white/70 p-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-zinc-600">Reference</dt>
            <dd className="mt-1 font-mono text-zinc-900">{submission.requestId}</dd>
          </div>
          <div>
            <dt className="font-semibold text-zinc-600">Next step</dt>
            <dd className="mt-1 text-zinc-900">
              {inquiryType === "quote" ? "We’ll review your move details and photos." : "We’ll route your message to the right team member."}
            </dd>
          </div>
        </dl>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="inquiryType" value={inquiryType} />
      <input type="hidden" name="subject" value={defaultSubject} />
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      {quoteContext ? (
        <>
          <input type="hidden" name="origin" value={quoteContext.origin ?? ""} />
          <input type="hidden" name="dest" value={quoteContext.dest ?? ""} />
          <input type="hidden" name="date" value={quoteContext.date ?? ""} />
          <input type="hidden" name="inventory" value={quoteContext.inventory ?? ""} />
        </>
      ) : null}

      {quoteSummary.length > 0 ? (
        <section className={`${panelClassName} space-y-4`} aria-labelledby="lead-quote-summary">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">Move summary</p>
              <h3 id="lead-quote-summary" className="mt-1 text-lg font-semibold text-zinc-900">
                We’ll price against this scope
              </h3>
            </div>
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">Step 3 of 3</span>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2">
            {quoteSummary.map((item) => (
              <div key={item.label} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{item.label}</dt>
                <dd className="mt-2 whitespace-pre-wrap break-words text-sm leading-relaxed text-zinc-900">{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <section className={`${panelClassName} space-y-5`} aria-labelledby="lead-contact-details">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
            {inquiryType === "quote" ? "Booking contact" : "Contact details"}
          </p>
          <h3 id="lead-contact-details" className="mt-1 text-xl font-semibold tracking-tight text-zinc-900">
            Tell us how to reach you
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">
            {inquiryType === "quote"
              ? "We use this to send the quote, confirm access details, and ask follow-up questions only if something is unclear."
              : "Give us the best contact details and enough context to point the request to the right person."}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-name" className="block text-sm font-semibold text-zinc-800">
              Full name *
            </label>
            <input id="lead-name" name="name" type="text" required autoComplete="name" className={fieldClassName} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="lead-phone" className="block text-sm font-semibold text-zinc-800">
              Phone *
            </label>
            <input
              id="lead-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              className={fieldClassName}
              placeholder="072 100 0936"
            />
          </div>
          <div>
            <label htmlFor="lead-email" className="block text-sm font-semibold text-zinc-800">
              Email *
            </label>
            <input
              id="lead-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClassName}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="lead-preferred-contact" className="block text-sm font-semibold text-zinc-800">
              Preferred reply
            </label>
            <select id="lead-preferred-contact" name="preferredContact" className={fieldClassName} defaultValue="phone">
              <option value="phone">Phone call</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="email">Email</option>
            </select>
          </div>
        </div>
      </section>

      <section className={`${panelClassName} space-y-5`} aria-labelledby="lead-brief">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
            {inquiryType === "quote" ? "Quote brief" : "Message"}
          </p>
          <h3 id="lead-brief" className="mt-1 text-xl font-semibold tracking-tight text-zinc-900">
            {inquiryType === "quote" ? "Anything we should price around?" : "What can we help with?"}
          </h3>
        </div>

        <div>
          <label htmlFor="lead-message" className="block text-sm font-semibold text-zinc-800">
            {inquiryType === "quote" ? "Extra details" : "Your message"} {inquiryType === "contact" ? "*" : "(optional)"}
          </label>
          <textarea
            id="lead-message"
            name="message"
            rows={5}
            required={inquiryType === "contact"}
            className={`${fieldClassName} min-h-[9rem] resize-y`}
            placeholder={
              inquiryType === "quote"
                ? "Examples: third-floor flat, narrow driveway, fragile art, exact pickup time, or if the date is still flexible."
                : "Tell us whether this is a quote, availability question, tracking issue, or something else."
            }
          />
        </div>

        <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <label htmlFor="lead-attachments" className="block text-sm font-semibold text-zinc-900">
                Upload photos {inquiryType === "quote" ? "(recommended)" : "(optional)"}
              </label>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                Add room photos, stair access, driveway constraints, or fragile items. Up to {MAX_FILES} images, max 8 MB each.
              </p>
            </div>
            <label
              htmlFor="lead-attachments"
              className="inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-sky-500 hover:bg-sky-50"
            >
              Choose images
            </label>
          </div>
          <input
            id="lead-attachments"
            name="attachmentPicker"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
            multiple
            className="sr-only"
            onChange={handleFileChange}
          />
          {files.length > 0 ? (
            <ul className="mt-4 grid gap-3 sm:grid-cols-2" aria-live="polite">
              {files.map((file) => (
                <li key={`${file.name}-${file.size}`} className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700">
                  <p className="truncate font-semibold text-zinc-900">{file.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">{bytesToReadable(file.size)}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-zinc-500">No files selected yet.</p>
          )}
        </div>
      </section>

      <div className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-zinc-950 p-6 text-white shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-sky-300">No spam. No hidden handoff.</p>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-zinc-300">
            {inquiryType === "quote"
              ? "Your request is stored with its photos so the team can quote against real access conditions instead of guesswork."
              : "Your message is logged with any attachments so the team has the full brief before replying."}
          </p>
        </div>
        <button
          type="submit"
          disabled={submission.status === "submitting"}
          className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-base font-semibold text-zinc-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-sky-300"
        >
          {submission.status === "submitting" ? "Sending..." : submitLabel}
        </button>
      </div>

      {submission.status === "error" ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {submission.message}
        </p>
      ) : null}
    </form>
  );
}
