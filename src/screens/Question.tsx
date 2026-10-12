import { useState } from "react";
import { AnswerOption } from "../components/AnswerOption.tsx";
import type { AnswerStatus } from "../components/AnswerOption.tsx";
import { BackButton } from "../components/BackButton.tsx";
import { QuestionCard } from "../components/QuestionCard.tsx";
import { questionsOfSection } from "../data/queries.ts";
import type { OptionIndex } from "../domain/question.ts";
import type { Section } from "../domain/sections.ts";
import { topics } from "../domain/topics.ts";

type QuestionProps = {
  readonly section: Section;
  readonly onBack: () => void;
};

function statusOf(
  index: number,
  answerIndex: OptionIndex,
  selected: number | undefined,
): AnswerStatus {
  if (selected === undefined) return "idle";
  if (index === answerIndex) return "correct";
  if (index === selected) return "incorrect";
  return "flat";
}

export function Question({ section, onBack }: QuestionProps) {
  const question = questionsOfSection(section.id)[0];
  const [selected, setSelected] = useState<number | undefined>(undefined);

  return (
    <main
      data-topic={section.topic}
      className='mx-auto flex min-h-dvh w-full max-w-160 flex-col gap-3 p-4 lg:max-w-240 lg:p-10'
    >
      <div className='flex items-center gap-3'>
        <BackButton
          label='Retour aux sections'
          onClick={onBack}
        />
      </div>
      {question === undefined ? (
        <h1
          tabIndex={-1}
          className='w-fit display text-2xl leading-display'
        >
          Aucune question dans cette section.
        </h1>
      ) : (
        <div className='mx-auto flex w-full max-w-140 flex-col gap-3 lg:max-w-180'>
          <QuestionCard
            label={`${topics[section.topic].title} · ${section.label}`}
            question={question}
          />
          <ul className='flex flex-col gap-2'>
            {question.options.map((text, index) => (
              <li key={`${question.id}-${index}`}>
                <AnswerOption
                  index={index}
                  text={text}
                  status={statusOf(index, question.answerIndex, selected)}
                  onSelect={() => setSelected((current) => current ?? index)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
