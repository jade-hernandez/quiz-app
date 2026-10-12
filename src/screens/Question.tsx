import { AnswerOption } from "../components/AnswerOption.tsx";
import { BackButton } from "../components/BackButton.tsx";
import { QuestionCard } from "../components/QuestionCard.tsx";
import { questionsOfSection } from "../data/queries.ts";
import type { Section } from "../domain/sections.ts";
import { topics } from "../domain/topics.ts";

type QuestionProps = {
  readonly section: Section;
  readonly onBack: () => void;
};

export function Question({ section, onBack }: QuestionProps) {
  const question = questionsOfSection(section.id)[0];

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
        <>
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
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
