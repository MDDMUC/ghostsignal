import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/content/site";
import { SiteNav } from "@/components/layout/SiteNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logo-black.svg"
            alt={siteConfig.name}
            width={132}
            height={24}
            priority
            className="h-6 w-auto"
          />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        <SiteNav />
      </div>
    </header>
  );
}
