import { NextResponse } from "next/server";

function badRequest(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}

function getBaseUrl(request: Request) {
  const url = new URL(request.url);
  return `${url.protocol}//${url.host}`;
}

async function sendWebhook(payload: unknown) {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return { ok: false, skipped: true };

  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  return { ok: res.ok, status: res.status };
}

async function sendResendEmail(payload: {
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.CONTACT_TO;

  if (!apiKey || !from || !to) return { ok: false, skipped: true };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: payload.subject,
      text: payload.text,
      reply_to: payload.replyTo,
    }),
  });

  return { ok: res.ok, status: res.status };
}

export async function POST(request: Request) {
  const form = await request.formData();

  // Honeypot: bots will often fill this.
  const hp = String(form.get("company") ?? "");
  if (hp.trim().length > 0) return badRequest("Spam detected.");

  const first = String(form.get("first_name") ?? "").trim();
  const last = String(form.get("last_name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const newsletter = form.get("newsletter") ? "yes" : "no";
  const type = String(form.get("type") ?? "").trim();
  const website = String(form.get("website") ?? "").trim();
  const product = String(form.get("podcast_or_product") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (!email) return badRequest("Email is required.");

  const now = new Date().toISOString();
  const payload = {
    kind: "get-in-touch",
    at: now,
    first,
    last,
    email,
    newsletter,
    type,
    website,
    product,
    message,
  };

  // Always log in server for baseline traceability.
  console.log("[get-in-touch]", payload);

  const subject = `Get in touch: ${type || "unknown"} (${email})`;
  const text = [
    `Time: ${now}`,
    `Name: ${[first, last].filter(Boolean).join(" ") || "(n/a)"}`,
    `Email: ${email}`,
    `Newsletter: ${newsletter}`,
    `Type: ${type || "(n/a)"}`,
    `Website: ${website || "(n/a)"}`,
    `Podcast/Product: ${product || "(n/a)"}`,
    `Message: ${message || "(n/a)"}`,
  ].join("\n");

  await Promise.allSettled([
    sendWebhook(payload),
    sendResendEmail({ subject, text, replyTo: email }),
  ]);

  const redirectTo = new URL("/get-in-touch?submitted=1", getBaseUrl(request));
  return NextResponse.redirect(redirectTo, { status: 303 });
}
