import { Icon } from "./Icon.tsx";
import { sticker } from "./sticker.ts";

type BackButtonProps = {
  readonly label: string;
  readonly shortLabel?: string;
  readonly onClick: () => void;
};

export function BackButton({ label, shortLabel, onClick }: BackButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`${sticker} relative flex h-9 items-center justify-center gap-2 bg-card px-3 text-lg after:absolute after:-inset-1.5`}
    >
      <Icon name='arrow-left' />
      <span
        className={`text-sm font-bold ${shortLabel === undefined ? "" : "max-[359px]:hidden"}`}
      >
        {label}
      </span>
      {shortLabel !== undefined && (
        <span className='text-sm font-bold min-[360px]:hidden'>
          {shortLabel}
        </span>
      )}
    </button>
  );
}
