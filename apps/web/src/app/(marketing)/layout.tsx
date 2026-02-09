import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { IntroLoader } from "@/components/motion/IntroLoader";
import { RouteWipe } from "@/components/motion/RouteWipe";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { GrainOverlay } from "@/components/motion/GrainOverlay";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <div className="min-h-dvh">
        <CustomCursor />
        <GrainOverlay />
        <IntroLoader />
        <RouteWipe />
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
      </div>
    </SmoothScroll>
  );
}
