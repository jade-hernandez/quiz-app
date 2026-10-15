import { useEffect, useRef, useState } from "react";
import { Button } from "../../ui/Button.tsx";
import { InlineText } from "../../ui/InlineText.tsx";
import { MistakeCard } from "./MistakeCard.tsx";
import { ScoreRing } from "./ScoreRing.tsx";
import { TierBadge } from "./TierBadge.tsx";
import type { Question } from "../../domain/question.ts";
import type { Section } from "../../domain/sections.ts";
import { topics } from "../../domain/topics.ts";
import { scrollToStartOf } from "../../scroll.ts";
import { verdictFor } from "./verdict.ts";

type ScoreProps = {
  readonly section: Section;
  readonly questions: readonly Question[];
  readonly answers: readonly number[];
  readonly onRetry: () => void;
  readonly onBack: () => void;
};

export function Score({
  section,
  questions,
  answers,
  onRetry,
  onBack,
}: ScoreProps) {
  const score = answers.filter(
    (picked, index) => picked === questions[index]?.answerIndex,
  ).length;
  const percent = Math.round((score / questions.length) * 100);
  const verdict = verdictFor(percent);
  const mistakes = answers.flatMap((picked, index) => {
    const question = questions[index];
    const chosen = question?.options[picked];
    if (question === undefined || chosen === undefined) return [];
    return picked === question.answerIndex ? [] : [{ question, chosen }];
  });
  const [reviewing, setReviewing] = useState(false);
  const list = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (reviewing && list.current) scrollToStartOf(list.current);
  }, [reviewing]);

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
      <TierBadge icon={verdict.icon} />
      <h1
        tabIndex={-1}
        className='w-fit display text-3xl leading-display lg:text-4xl'
      >
        <InlineText text={verdict.title} />
      </h1>
      <p className='text-sm lg:text-base'>
        <InlineText text={verdict.text} />
      </p>
      <div className='flex w-full flex-col gap-2 md:max-w-80'>
        <Button
          tone='topic'
          onClick={onRetry}
        >
          Réessayer
        </Button>
        {mistakes.length > 0 && (
          <Button
            tone='white'
            expanded={reviewing}
            onClick={() => setReviewing(!reviewing)}
          >
            {reviewing
              ? "Masquer mes erreurs"
              : `Revoir mes erreurs (${mistakes.length})`}
          </Button>
        )}
        <Button
          tone='link'
          onClick={onBack}
        >
          Retour aux sections
        </Button>
      </div>
      {reviewing && (
        <ul
          ref={list}
          className='flex w-full max-w-160 flex-col gap-3 text-left'
        >
          {mistakes.map(({ question, chosen }) => (
            <li key={question.id}>
              <MistakeCard
                question={question}
                chosen={chosen}
                language={topics[section.topic].codeLanguage}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
