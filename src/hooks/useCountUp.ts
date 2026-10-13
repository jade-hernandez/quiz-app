import { useEffect, useState } from "react";

const delay = 100;
const duration = 800;

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useCountUp(target: number): number {
  const [value, setValue] = useState(() =>
    prefersReducedMotion() ? target : 0,
  );

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const start = performance.now() + delay;
    let frame = 0;
    const step = (now: number) => {
      const progress = Math.min(Math.max((now - start) / duration, 0), 1);
      setValue(Math.round(target * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return value;
}
