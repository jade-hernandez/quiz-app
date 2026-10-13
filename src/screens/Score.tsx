import { Button } from "../components/ui/Button.tsx";
import { InlineText } from "../components/ui/InlineText.tsx";
import { ScoreRing } from "../components/ScoreRing.tsx";
import { questionsOfSection } from "../data/queries.ts";
import type { Section } from "../domain/sections.ts";
import { verdictFor } from "../domain/verdict.ts";

type ScoreProps = {
  readonly section: Section;
  readonly answers: readonly number[];
  readonly onRetry: () => void;
  readonly onBack: () => void;
};

export function Score({ section, answers, onRetry, onBack }: ScoreProps) {
  const questions = questionsOfSection(section.id);
  const score = answers.filter(
    (picked, index) => picked === questions[index]?.answerIndex,
  ).length;
  const percent = Math.round((score / questions.length) * 100);
  const verdict = verdictFor(percent);

  return (
    <main
      data-topic={section.topic}
      className='mx-auto flex min-h-dvh w-full max-w-160 flex-col items-center gap-3 p-4 text-center lg:max-w-240 lg:p-10'
    >
      <ScoreRing
        percent={percent}
        score={score}
        total={questions.length}
      />
      <h1
        tabIndex={-1}
        className='w-fit display text-3xl leading-display lg:text-4xl'
      >
        <InlineText text={verdict.title} />
      </h1>
      <p className='text-sm lg:text-base'>
        <InlineText text={verdict.text} />
      </p>
      <div className='flex w-full flex-col gap-2'>
        <Button
          tone='action'
          onClick={onRetry}
        >
          Réessayer
        </Button>
        <Button
          tone='link'
          onClick={onBack}
        >
          Retour aux sections
        </Button>
      </div>
    </main>
  );
}
