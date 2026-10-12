const letters = "ABCD";

type AnswerOptionProps = {
  readonly index: number;
  readonly text: string;
};

export function AnswerOption({ index, text }: AnswerOptionProps) {
  return (
    <div className='flex items-start gap-3 rounded-xl bg-card p-3 shadow-sticker border-sticker'>
      <span className='grid size-6 shrink-0 place-items-center rounded-lg bg-paper text-xs font-bold border-sticker'>
        {letters.charAt(index)}
      </span>
      <span className='mt-0.5 text-sm lg:mt-0 lg:text-base'>{text}</span>
    </div>
  );
}
