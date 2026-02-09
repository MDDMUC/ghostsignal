import type { Metadata } from "next";

import { PageShell } from "@/components/layout/PageShell";
import { CreatorsVisual } from "@/features/visuals/CreatorsVisual";

export const metadata: Metadata = {
  title: "For creators | Ghost Signal",
};

export default function ForCreatorsPage() {
  return (
    <PageShell title="For creators" eyebrow="Ghost Signal" visual={<CreatorsVisual />}>
      <p>Content coming next. We’ll wire this page to your Figma design.</p>
    </PageShell>
  );
}
