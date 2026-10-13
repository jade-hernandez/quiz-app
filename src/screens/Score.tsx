import { BackButton } from "../components/BackButton.tsx";
import { questionsOfSection } from "../data/queries.ts";
import type { Section } from "../domain/sections.ts";
import { topics } from "../domain/topics.ts";

type ScoreProps = {
  readonly section: Section;
  readonly answers: readonly number[];
  readonly onBack: () => void;
};

export function Score({ section, answers, onBack }: ScoreProps) {
  const questions = questionsOfSection(section.id);
  const score = answers.filter(
    (picked, index) => picked === questions[index]?.answerIndex,
  ).length;

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
      <h1
        tabIndex={-1}
        className='w-fit display text-4xl leading-display'
      >
        {`${score} / ${questions.length}`}
      </h1>
      <p className='text-sm text-muted lg:text-base'>
        {`${topics[section.topic].title} · ${section.label}`}
      </p>
    </main>
  );
}
