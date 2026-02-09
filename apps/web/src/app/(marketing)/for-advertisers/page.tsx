import type { Metadata } from "next";

import { PageShell } from "@/components/layout/PageShell";
import { LottiePlayer } from "@/components/media/LottiePlayer";

export const metadata: Metadata = {
  title: "For advertisers | Ghost Signal",
};

export default function ForAdvertisersPage() {
  return (
    <PageShell
      title="For advertisers"
      eyebrow="Ghost Signal"
      visual={
        <div className="h-full w-full bg-black">
          <LottiePlayer
            src="/lottie/advertisers.json"
            className="h-full w-full opacity-90"
          />
        </div>
      }
    >
      <p>Content coming next. We’ll wire this page to your Figma design.</p>
    </PageShell>
  );
}
