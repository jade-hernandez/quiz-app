import { BackButton } from "../components/BackButton.tsx";
import { InlineText } from "../components/InlineText.tsx";
import { questionsOfSection } from "../data/queries.ts";
import type { Section } from "../domain/sections.ts";
import { verdictFor } from "../domain/verdict.ts";

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
  const verdict = verdictFor(Math.round((score / questions.length) * 100));

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
        className='w-fit display text-3xl leading-display lg:text-4xl'
      >
        <InlineText text={verdict.title} />
      </h1>
      <p className='text-sm lg:text-base'>
        <InlineText text={verdict.text} />
      </p>
      <p className='text-sm text-muted lg:text-base'>{`${score} / ${questions.length}`}</p>
    </main>
  );
}
