import { useEffect } from "react";
import { useLocation } from "react-router";

const revealMargin = 12;
const startMargin = 16;

function scrollsInside(scroller: HTMLElement): boolean {
  return getComputedStyle(scroller).overflowY === "auto";
}

export function scrollToReveal(
  region: HTMLElement,
  pinnedBar: HTMLElement,
  scroller: HTMLElement,
  topInset: number,
): void {
  const inside = scrollsInside(scroller);
  const frame = inside
    ? scroller.getBoundingClientRect()
    : { top: 0, bottom: window.innerHeight };
  const { top, bottom } = region.getBoundingClientRect();
  const covered =
    getComputedStyle(pinnedBar).position === "fixed"
      ? pinnedBar.offsetHeight
      : 0;
  const hidden = bottom - (frame.bottom - covered - revealMargin);
  if (hidden <= 0) return;
  const room = top - frame.top - (inside ? topInset : 0);
  const distance = Math.max(0, Math.min(hidden, room));
  if (inside) scroller.scrollBy(0, distance);
  else window.scrollBy(0, distance);
}

export function resetScroll(scroller: HTMLElement): void {
  const target = scrollsInside(scroller) ? scroller : window;
  target.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
