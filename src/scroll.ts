const revealMargin = 12;

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
