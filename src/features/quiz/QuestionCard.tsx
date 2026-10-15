import type { Question } from "../../domain/question.ts";
import { Chip } from "../../ui/Chip.tsx";
import { CodeBox } from "../../ui/CodeBox.tsx";
import { InlineText } from "../../ui/InlineText.tsx";

type QuestionCardProps = {
  readonly className: string;
  readonly label: string;
  readonly language: string;
  readonly question: Question;
};

export function QuestionCard({
  className,
  label,
  language,
  question,
}: QuestionCardProps) {
  const size =
    question.code === undefined
      ? "text-2xl lg:text-3xl"
      : "text-xl lg:text-2xl";

  return (
    <div
      className={`flex flex-col items-start gap-3 rounded-xl bg-card p-3 shadow-sticker border-sticker ${className}`}
    >
      <Chip tone='topic'>{label}</Chip>
      <h1
        tabIndex={-1}
        className={`display leading-display ${size}`}
      >
        <InlineText text={question.question} />
      </h1>
      {question.code !== undefined && (
        <CodeBox
          key={question.id}
          code={question.code}
          language={language}
        />
      )}
    </div>
  );
}
