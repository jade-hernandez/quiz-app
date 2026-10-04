import type { ButtonHTMLAttributes } from "react";
import { cn } from "../utils/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-neutral-900 text-white hover:bg-neutral-900/80",
  secondary: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
  ghost: "bg-transparent text-neutral-400 hover:bg-transparent hover:text-neutral-700",
};

function Button({
  className,
  children,
  variant = "primary",
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "cursor-pointer rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900",
        variantStyles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export { Button };
export type { ButtonProps, ButtonVariant };
