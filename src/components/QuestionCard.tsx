import type { Question } from "../domain/question.ts";
import { Chip } from "./Chip.tsx";

type QuestionCardProps = {
  readonly label: string;
  readonly question: Question;
};

export function QuestionCard({ label, question }: QuestionCardProps) {
  const size = question.code === undefined ? "text-2xl" : "text-xl lg:text-2xl";

  return (
    <div className='flex flex-col items-start gap-3 rounded-xl bg-card p-3 shadow-sticker border-sticker'>
      <Chip tone='topic'>{label}</Chip>
      <h1
        tabIndex={-1}
        className={`display leading-display ${size}`}
      >
        {question.question}
      </h1>
    </div>
  );
}
