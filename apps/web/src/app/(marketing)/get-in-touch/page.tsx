import type { Metadata } from "next";

import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Get in touch | Ghost Signal",
};

export default function GetInTouchPage() {
  return (
    <PageShell title="Get in touch" eyebrow="Ghost Signal">
      <p>Content coming next. We’ll add your preferred contact method(s).</p>
    </PageShell>
  );
}

