import { Icon } from "./Icon.tsx";
import { sticker } from "./sticker.ts";

type BackButtonProps = {
  readonly label: string;
  readonly onClick: () => void;
};

export function BackButton({ label, onClick }: BackButtonProps) {
  return (
    <button
      type='button'
      aria-label={label}
      onClick={onClick}
      className={`${sticker} relative grid size-9 place-items-center bg-card text-lg after:absolute after:-inset-1.5`}
    >
      <Icon name='arrow-left' />
    </button>
  );
}
