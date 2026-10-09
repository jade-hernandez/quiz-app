import { Icon } from "./Icon.tsx";
import { sticker } from "./sticker.ts";

type SectionRowProps = {
  readonly number: number;
  readonly label: string;
  readonly questionCount: number;
};

export function SectionRow({ number, label, questionCount }: SectionRowProps) {
  return (
    <button
      type='button'
      className={`${sticker} flex min-h-12 w-full items-center gap-3 bg-card px-3 py-2 text-left`}
    >
      <span className='grid size-6 place-items-center rounded-lg bg-accent display text-sm border-sticker'>
        {number}
      </span>
      <span className='display text-lg leading-display'>{label}</span>
      <span className='ml-auto text-sm text-muted'>{`${questionCount} questions`}</span>
      <span className='text-lg'>
        <Icon name='chevron-right' />
      </span>
    </button>
  );
}
