import { NextResponse } from "next/server";

function badRequest(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}

function getBaseUrl(request: Request) {
  const url = new URL(request.url);
  return `${url.protocol}//${url.host}`;
}

async function sendWebhook(payload: unknown) {
  const url = process.env.SNOWDRIFT_WEBHOOK_URL;
  if (!url) return { ok: false, skipped: true };

  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  return { ok: res.ok, status: res.status };
}

async function sendResendEmail(payload: { subject: string; text: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.SNOWDRIFT_TO ?? process.env.CONTACT_TO;

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
    }),
  });

  return { ok: res.ok, status: res.status };
}

export async function POST(request: Request) {
  const form = await request.formData();

  const hp = String(form.get("company") ?? "");
  if (hp.trim().length > 0) return badRequest("Spam detected.");

  const email = String(form.get("email") ?? "").trim();
  if (!email) return badRequest("Email is required.");

  const now = new Date().toISOString();
  const payload = { kind: "snowdrift", at: now, email };

  console.log("[snowdrift]", payload);

  const subject = `SnowDrift signup (${email})`;
  const text = [`Time: ${now}`, `Email: ${email}`].join("\n");

  await Promise.allSettled([
    sendWebhook(payload),
    sendResendEmail({ subject, text }),
  ]);

  const redirectTo = new URL("/snowdrift?submitted=1", getBaseUrl(request));
  return NextResponse.redirect(redirectTo, { status: 303 });
}
