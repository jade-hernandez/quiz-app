import { Icon } from "./Icon.tsx";
import { sticker } from "./sticker.ts";

type BackButtonProps = {
  readonly label: string;
  readonly showLabel?: boolean;
  readonly onClick: () => void;
};

export function BackButton({ label, showLabel, onClick }: BackButtonProps) {
  return (
    <button
      type='button'
      aria-label={showLabel ? undefined : label}
      onClick={onClick}
      className={`${sticker} relative flex h-9 items-center justify-center gap-2 bg-card text-lg after:absolute after:-inset-1.5 ${showLabel ? "px-3" : "w-9"}`}
    >
      <Icon name='arrow-left' />
      {showLabel && <span className='text-sm font-bold'>{label}</span>}
    </button>
  );
}
