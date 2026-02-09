"use client";

import { motion, useReducedMotion } from "motion/react";
import { createElement } from "react";
import type { ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  children: string;
  className?: string;
  wordClassName?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
};

const defaultStagger = 0.035;

export function SplitText({
  as: asTag,
  children,
  className,
  wordClassName,
  stagger = defaultStagger,
  delay = 0,
  once = true,
}: Props) {
  const reducedMotion = useReducedMotion();
  const Tag = asTag ?? "span";

  const words = children.split(/(\s+)/).filter(Boolean);

  if (reducedMotion) {
    return createElement(Tag, { className }, children);
  }

  return createElement(
    Tag,
    { className, "aria-label": children },
    <span className="sr-only">{children}</span>,
    <motion.span
      aria-hidden
      className="inline-block"
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.6 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {words.map((word, idx) => {
        const isSpace = /^\s+$/.test(word);
        const node: ReactNode = isSpace ? (
          <span key={`s-${idx}`}> </span>
        ) : (
          <motion.span
            key={`w-${idx}`}
            className={
              wordClassName ? `inline-block ${wordClassName}` : "inline-block"
            }
            variants={{
              hidden: { y: "0.65em", opacity: 0 },
              show: {
                y: "0em",
                opacity: 1,
                transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
          </motion.span>
        );

        return node;
      })}
    </motion.span>,
  );
}
