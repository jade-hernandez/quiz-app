import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ClassValue } from "clsx";

// Combines conditional classes (clsx) and resolves conflicting Tailwind
// classes (tailwind-merge), e.g. cn('px-2', condition && 'px-4') → 'px-4'.
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export { cn };
