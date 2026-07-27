import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

export const runtime = "nodejs";

const MAX_FILES = 6;
const MAX_FILE_SIZE = 8 * 1024 * 1024;
const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]);

type StoredAttachment = {
  originalName: string;
  storedName: string;
  type: string;
  size: number;
};

function asText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function sanitizeName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g, "-");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    if (asText(formData, "company")) {
      return Response.json({ ok: true, requestId: `spam-${randomUUID().slice(0, 8)}`, message: "Thanks." });
    }

    const inquiryType = asText(formData, "inquiryType") === "contact" ? "contact" : "quote";
    const name = asText(formData, "name");
    const email = asText(formData, "email");
    const phone = asText(formData, "phone");
    const preferredContact = asText(formData, "preferredContact");
    const subject = asText(formData, "subject");
    const message = asText(formData, "message");
    const origin = asText(formData, "origin");
    const dest = asText(formData, "dest");
    const date = asText(formData, "date");
    const inventory = asText(formData, "inventory");

    if (!name || !email || !phone) {
      return Response.json(
        { ok: false, message: "Name, email, and phone are required before we can save the request." },
        { status: 400 },
      );
    }

    if (inquiryType === "contact" && !message) {
      return Response.json({ ok: false, message: "Please include a short message so we can route your enquiry." }, { status: 400 });
    }

    const attachmentEntries = formData.getAll("attachments");
    const attachments = attachmentEntries.filter((entry): entry is File => entry instanceof File && entry.size > 0);

    if (attachments.length > MAX_FILES) {
      return Response.json({ ok: false, message: `Please upload ${MAX_FILES} images or fewer.` }, { status: 400 });
    }

    for (const attachment of attachments) {
      if (attachment.size > MAX_FILE_SIZE) {
        return Response.json(
          { ok: false, message: `${attachment.name} is too large. Please keep each image under 8 MB.` },
          { status: 400 },
        );
      }

      if (!ALLOWED_MIME_TYPES.has(attachment.type)) {
        return Response.json(
          { ok: false, message: `${attachment.name} is not a supported image format.` },
          { status: 400 },
        );
      }
    }

    const requestId = `otma-${new Date().toISOString().slice(0, 10)}-${randomUUID().slice(0, 8)}`;
    const submissionDir = path.join("/tmp", "otma-quote-requests", requestId);
    await mkdir(submissionDir, { recursive: true });

    const storedAttachments: StoredAttachment[] = [];

    for (const attachment of attachments) {
      const extension = path.extname(attachment.name) || "";
      const storedName = `${randomUUID()}${extension.toLowerCase()}`;
      const filePath = path.join(submissionDir, sanitizeName(storedName));
      const bytes = Buffer.from(await attachment.arrayBuffer());
      await writeFile(filePath, bytes);

      storedAttachments.push({
        originalName: attachment.name,
        storedName,
        type: attachment.type,
        size: attachment.size,
      });
    }

    const payload = {
      requestId,
      receivedAt: new Date().toISOString(),
      inquiryType,
      contact: {
        name,
        email,
        phone,
        preferredContact: preferredContact || "phone",
      },
      subject: subject || (inquiryType === "quote" ? "Quote request" : "General enquiry"),
      message,
      move: {
        origin,
        dest,
        date,
        inventory,
      },
      attachments: storedAttachments,
      storageNote:
        "Temporary pre-database intake stored on server disk for review and sign-off. Replace with durable database/blob storage before production launch.",
    };

    await writeFile(path.join(submissionDir, "submission.json"), JSON.stringify(payload, null, 2), "utf8");

    return Response.json({
      ok: true,
      requestId,
      message:
        inquiryType === "quote"
          ? "Your quote request and any photos have been captured for review."
          : "Your message and any attachments have been captured for the team.",
    });
  } catch {
    return Response.json(
      { ok: false, message: "The form could not be saved right now. Please phone or WhatsApp us while we fix it." },
      { status: 500 },
    );
  }
}
