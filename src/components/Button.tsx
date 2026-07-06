import type { ButtonHTMLAttributes } from "react";
import { cn } from "../utils/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-900/80",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export { Button };
