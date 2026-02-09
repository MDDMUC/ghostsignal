import type { ReactNode } from "react";

type Props = {
  title: string;
  eyebrow?: string;
  visual?: ReactNode;
  children?: ReactNode;
};

export function PageShell({ title, eyebrow, visual, children }: Props) {
  return (
    <section className="relative overflow-hidden">
      {visual ? (
        <div className="pointer-events-none absolute inset-0 -z-10">
          {visual}
        </div>
      ) : null}
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        {eyebrow ? (
          <p className="text-sm font-medium tracking-wider text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        <div className="mt-10 text-muted">{children}</div>
      </div>
    </section>
  );
}
