import type { Question } from "../domain/question.ts";
import { CodeBox } from "./ui/CodeBox.tsx";
import { Icon } from "./ui/Icon.tsx";
import { InlineText } from "./ui/InlineText.tsx";

type MistakeCardProps = {
  readonly question: Question;
  readonly chosen: string;
  readonly language: string;
};

type AnswerRowProps = {
  readonly tone: "bg-incorrect" | "bg-correct";
  readonly icon: "x" | "check";
  readonly title: string;
  readonly text: string;
};

function AnswerRow({ tone, icon, title, text }: AnswerRowProps) {
  return (
    <p
      className={`flex w-full gap-2 rounded-lg px-3 py-2 text-sm lg:text-base ${tone}`}
    >
      <span className='mt-0.5 text-lg'>
        <Icon name={icon} />
      </span>
      <span>
        <span className='font-bold'>
          <InlineText text={title} />
        </span>{" "}
        <InlineText text={text} />
      </span>
    </p>
  );
}

export function MistakeCard({ question, chosen, language }: MistakeCardProps) {
  return (
    <div className='flex flex-col items-start gap-3 rounded-xl bg-card p-3 text-left shadow-sticker border-sticker'>
      <p className='display text-xl leading-display'>
        <InlineText text={question.question} />
      </p>
      {question.code !== undefined && (
        <CodeBox
          code={question.code}
          language={language}
        />
      )}
      <AnswerRow
        tone='bg-incorrect'
        icon='x'
        title='Ta réponse :'
        text={chosen}
      />
      <AnswerRow
        tone='bg-correct'
        icon='check'
        title='Bonne réponse :'
        text={question.options[question.answerIndex]}
      />
      <p className='text-sm text-muted lg:text-base'>
        <InlineText text={question.explanation} />
      </p>
    </div>
  );
}
