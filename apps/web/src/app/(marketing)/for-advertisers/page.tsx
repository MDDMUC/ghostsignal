import type { Metadata } from "next";

import { PageShell } from "@/components/layout/PageShell";
import { AdvertisersVisual } from "@/features/visuals/AdvertisersVisual";

export const metadata: Metadata = {
  title: "For advertisers | Ghost Signal",
};

export default function ForAdvertisersPage() {
  return (
    <PageShell
      title="For advertisers"
      eyebrow="Ghost Signal"
      visual={<AdvertisersVisual />}
    >
      <p>Content coming next. We’ll wire this page to your Figma design.</p>
    </PageShell>
  );
}
