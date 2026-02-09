"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/content/site";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6 text-[13px] font-semibold tracking-tight text-black">
      {navLinks.map((link) => {
        const active = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={[
              "pb-1 transition-opacity hover:opacity-70",
              active ? "border-b border-black" : "border-b border-transparent",
            ].join(" ")}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

