import { Icon } from "./Icon.tsx";
import type { IconName } from "./Icon.tsx";
import { sticker } from "./sticker.ts";

const tones = {
  action: `${sticker} bg-action`,
  topic: `${sticker} bg-accent`,
  white: `${sticker} bg-card`,
  link: "underline underline-offset-4",
} as const;

type ButtonProps = {
  readonly tone: keyof typeof tones;
  readonly onClick: () => void;
  readonly expanded?: boolean;
  readonly icon?: IconName;
  readonly children: string;
};

export function Button({
  tone,
  onClick,
  expanded,
  icon,
  children,
}: ButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-expanded={expanded}
      className={`flex min-h-11 w-full items-center justify-center gap-2 px-4 py-2 text-base font-bold ${tones[tone]}`}
    >
      {children}
      {icon !== undefined && <Icon name={icon} />}
    </button>
  );
}
