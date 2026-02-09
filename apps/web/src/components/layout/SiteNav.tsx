"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navLinks } from "@/content/site";
import { Magnetic } from "@/components/motion/Magnetic";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <nav className="hidden items-center gap-6 text-[13px] font-semibold tracking-tight text-black sm:flex">
        {navLinks.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "pb-1 transition-opacity hover:opacity-70",
                active
                  ? "border-b border-black"
                  : "border-b border-transparent",
              ].join(" ")}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <Magnetic>
        <button
          type="button"
          className="inline-flex h-10 items-center justify-center rounded-md border border-black/15 px-4 text-xs font-semibold tracking-wider text-black sm:hidden"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
          data-cursor="link"
        >
          MENU
        </button>
      </Magnetic>

      {open ? (
        <div
          className="fixed inset-0 z-[100] bg-white"
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            <p className="text-xs font-semibold tracking-wider text-black/70">
              Ghost Signal
            </p>
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center rounded-md border border-black/15 px-4 text-xs font-semibold tracking-wider text-black"
              onClick={() => setOpen(false)}
              data-cursor="link"
            >
              CLOSE
            </button>
          </div>

          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="grid gap-4">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                const idx = String(navLinks.indexOf(link) + 1).padStart(2, "0");

                return (
                  <Magnetic key={link.href} strength={18}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={[
                        "flex items-baseline gap-4 text-2xl font-semibold tracking-tight",
                        active ? "text-black" : "text-black/70",
                      ].join(" ")}
                      data-cursor="link"
                    >
                      <span className="text-[11px] font-semibold tracking-[0.35em] text-black/45">
                        {idx}
                      </span>
                      <span>{link.label}</span>
                    </Link>
                  </Magnetic>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
