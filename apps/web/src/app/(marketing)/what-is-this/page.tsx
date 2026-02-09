import type { Metadata } from "next";

import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "What is this | Ghost Signal",
};

export default function WhatIsThisPage() {
  return (
    <PageShell title="What is this" eyebrow="Ghost Signal">
      <p>Content coming next. We’ll match this page to the Squarespace layout.</p>
    </PageShell>
  );
}

