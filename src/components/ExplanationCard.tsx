import { Icon } from "./Icon.tsx";

type ExplanationCardProps = {
  readonly correct: boolean;
  readonly text: string;
};

export function ExplanationCard({ correct, text }: ExplanationCardProps) {
  return (
    <div className='overflow-hidden rounded-xl bg-card shadow-sticker border-sticker'>
      <div
        className={`flex items-center gap-2 border-b-[1.5px] border-ink px-3 py-1 text-base font-bold ${correct ? "bg-correct" : "bg-incorrect"}`}
      >
        <span className='text-lg'>
          <Icon name={correct ? "check" : "x"} />
        </span>
        {correct ? "Correct\u202F!" : "Pas tout à fait."}
      </div>
      <p className='p-3 text-sm lg:text-base'>{text}</p>
    </div>
  );
}
