import type { Metadata } from "next";

import { PageShell } from "@/components/layout/PageShell";
import { SnowDriftVisual } from "@/features/visuals/SnowDriftVisual";

export const metadata: Metadata = {
  title: "Snow drift | Ghost Signal",
};

export default function SnowDriftPage() {
  return (
    <PageShell title="Snow drift" eyebrow="Ghost Signal" visual={<SnowDriftVisual />}>
      <p>
        Placeholder page for a dedicated visual experience. Next we can design a
        custom 3D “snow drift” scene and hook it to your Figma layout.
      </p>
    </PageShell>
  );
}
