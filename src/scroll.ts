import { useEffect } from "react";
import { useLocation } from "react-router";

const revealMargin = 12;
const startMargin = 16;

export function scrollToReveal(
  region: HTMLElement,
  pinnedBar: HTMLElement,
): void {
  const { top, bottom } = region.getBoundingClientRect();
  const covered =
    getComputedStyle(pinnedBar).position === "fixed"
      ? pinnedBar.offsetHeight
      : 0;
  const hidden = bottom - (window.innerHeight - covered - revealMargin);
  if (hidden > 0) window.scrollBy(0, Math.max(0, Math.min(hidden, top)));
}

export function scrollToStartOf(element: HTMLElement): void {
  window.scrollBy(0, element.getBoundingClientRect().top - startMargin);
}

export function useScrollToTop(): void {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
}
