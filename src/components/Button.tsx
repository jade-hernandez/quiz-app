import { sticker } from "./sticker.ts";

const tones = {
  action: `${sticker} bg-action`,
  link: "underline underline-offset-4",
} as const;

type ButtonProps = {
  readonly tone: keyof typeof tones;
  readonly onClick: () => void;
  readonly children: string;
};

export function Button({ tone, onClick, children }: ButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`flex min-h-11 w-full items-center justify-center px-4 py-2 text-base font-bold ${tones[tone]}`}
    >
      {children}
    </button>
  );
}
