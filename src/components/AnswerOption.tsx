import { Icon } from "./ui/Icon.tsx";
import { InlineText } from "./ui/InlineText.tsx";
import { sticker } from "./ui/sticker.ts";

const letters = "ABCD";

const settle =
  "transition-[background-color,translate,box-shadow] duration-180 ease-out";

const looks = {
  idle: { box: `${sticker} bg-card`, icon: undefined },
  correct: {
    box: `${settle} rounded-xl border-sticker bg-correct shadow-sticker`,
    icon: "check",
  },
  incorrect: {
    box: `${settle} animate-nudge rounded-xl border-sticker bg-incorrect shadow-sticker`,
    icon: "x",
  },
  flat: {
    box: `${settle} translate-0.5 rounded-xl border-sticker bg-card`,
    icon: undefined,
  },
} as const;

export type AnswerStatus = keyof typeof looks;

type AnswerOptionProps = {
  readonly index: number;
  readonly text: string;
  readonly status: AnswerStatus;
  readonly onSelect: () => void;
};

export function AnswerOption({
  index,
  text,
  status,
  onSelect,
}: AnswerOptionProps) {
  const { box, icon } = looks[status];

  return (
    <button
      type='button'
      aria-disabled={status !== "idle"}
      onClick={onSelect}
      className={`flex w-full items-start gap-3 p-3 text-left aria-disabled:cursor-default ${box}`}
    >
      <span className='grid size-6 shrink-0 place-items-center rounded-lg bg-paper text-xs font-bold border-sticker'>
        {letters.charAt(index)}
      </span>
      <span className='mt-0.5 flex-1 text-sm lg:mt-0 lg:text-base'>
        <InlineText text={text} />
      </span>
      <span
        className={`grid size-6 shrink-0 place-items-center text-lg ${icon === undefined ? "" : "animate-icon-in"}`}
      >
        {icon !== undefined && <Icon name={icon} />}
      </span>
    </button>
  );
}
