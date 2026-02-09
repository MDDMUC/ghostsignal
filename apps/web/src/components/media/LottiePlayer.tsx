"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

type Props = {
  src: string;
  className?: string;
};

export function LottiePlayer({ src, className }: Props) {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(src)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setAnimationData(data);
      })
      .catch(() => {
        if (!cancelled) setAnimationData(null);
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className={className}
    />
  );
}

