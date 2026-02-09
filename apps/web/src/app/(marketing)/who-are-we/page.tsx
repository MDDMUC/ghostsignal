import type { Metadata } from "next";

import { PageShell } from "@/components/layout/PageShell";
import { AboutVisual } from "@/features/visuals/AboutVisual";

export const metadata: Metadata = {
  title: "Who are we | Ghost Signal",
};

export default function WhoAreWePage() {
  return (
    <PageShell title="Who are we" eyebrow="Ghost Signal" visual={<AboutVisual />}>
      <p>Content coming next. We’ll wire this page to your Figma design.</p>
    </PageShell>
  );
}
