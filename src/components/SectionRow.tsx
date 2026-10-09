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
      className={`${sticker} flex min-h-12 w-full items-center gap-3 bg-card px-3 py-2 text-left md:px-4 md:py-5`}
    >
      <span className='grid size-6 place-items-center rounded-lg bg-accent display text-sm border-sticker md:size-10 md:text-base'>
        {number}
      </span>
      <span className='flex flex-1 items-center justify-between gap-3 md:flex-col md:items-start md:justify-center md:gap-0'>
        <span className='display text-lg leading-display md:text-xl'>
          {label}
        </span>
        <span className='text-sm text-muted'>{`${questionCount} questions`}</span>
      </span>
      <span className='text-lg'>
        <Icon name='chevron-right' />
      </span>
    </button>
  );
}
