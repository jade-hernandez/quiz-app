import { useEffect, useRef, useState } from "react";
import { AnswerOption } from "./AnswerOption.tsx";
import type { AnswerStatus } from "./AnswerOption.tsx";
import { BackButton } from "../../ui/BackButton.tsx";
import { Logo } from "../../ui/Logo.tsx";
import { ExplanationCard } from "./ExplanationCard.tsx";
import { NextBar } from "./NextBar.tsx";
import { clearProgress, readProgress, saveProgress } from "./progress.ts";
import { Progress } from "./Progress.tsx";
import type { SegmentResult } from "./Progress.tsx";
import { QuestionCard } from "./QuestionCard.tsx";
import type {
  OptionIndex,
  Question as QuestionData,
} from "../../domain/question.ts";
import type { Section } from "../../domain/sections.ts";
import { resetScroll, scrollToReveal } from "../../scroll.ts";
import { topics } from "../../domain/topics.ts";

type QuestionProps = {
  readonly section: Section;
  readonly questions: readonly QuestionData[];
  readonly onBack: () => void;
  readonly onFinish: (answers: readonly number[]) => void;
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

function resultsOf(
  questions: readonly QuestionData[],
  answers: readonly number[],
): SegmentResult[] {
  return questions.map((question, index) => {
    const picked = answers[index];
    if (picked === undefined) {
      return index === answers.length ? "current" : "todo";
    }
    return picked === question.answerIndex ? "correct" : "incorrect";
  });
}

export function Question({
  section,
  questions,
  onBack,
  onFinish,
}: QuestionProps) {
  const [answers, setAnswers] = useState<readonly number[]>(() =>
    readProgress(section.id, questions.length),
  );
  const [position, setPosition] = useState(() =>
    Math.max(0, Math.min(answers.length, questions.length - 1)),
  );
  const question = questions[position];
  const selected = answers[position];
  const isLast = position === questions.length - 1;
  const split = question !== undefined && question.code !== undefined;
  const scroller = useRef<HTMLDivElement>(null);
  const top = useRef<HTMLDivElement>(null);
  const status = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scroller.current) resetScroll(scroller.current);
    document
      .querySelector<HTMLElement>("main h1")
      ?.focus({ preventScroll: true });
  }, [position]);

  useEffect(() => {
    if (selected === undefined) return;
    const frame = scroller.current;
    const region = status.current;
    const pinned = bar.current;
    if (!frame || !region || !pinned) return;
    scrollToReveal(region, pinned, frame, top.current?.offsetHeight ?? 0);
  }, [selected]);

  function answer(picked: number) {
    if (answers.length > position) return;
    const next = [...answers, picked];
    setAnswers(next);
    saveProgress(section.id, next);
  }

  function showNext() {
    if (!isLast) {
      setPosition(position + 1);
      return;
    }
    clearProgress(section.id);
    onFinish(answers);
  }

  return (
    <main data-topic={section.topic}>
      <div
        ref={scroller}
        className='motion-safe:scroll-smooth max-md:fixed max-md:inset-0 max-md:overflow-y-auto'
      >
        <div className='mx-auto flex w-full max-w-160 flex-col gap-5 p-4 pb-24 max-md:min-h-full md:min-h-dvh md:pb-4 lg:max-w-260 lg:gap-10 lg:p-10'>
          <div
            ref={top}
            className='sticky top-0 z-10 -mx-4 -mt-4 flex flex-col gap-5 bg-paper px-4 pt-4 pb-2 md:static md:m-0 md:p-0 lg:gap-10'
          >
            <header className='flex items-center justify-between gap-3'>
              <Logo />
              <BackButton
                label='Retour aux sections'
                shortLabel='Sections'
                onClick={onBack}
              />
            </header>
            {question !== undefined && (
              <Progress
                results={resultsOf(questions, answers)}
                position={position}
                onSelect={setPosition}
              />
            )}
          </div>
          {question === undefined ? (
            <h1
              tabIndex={-1}
              className='w-fit display text-2xl leading-display'
            >
              Aucune question dans cette section.
            </h1>
          ) : (
            <div
              className={`mx-auto w-full max-w-140 ${split ? "lg:grid lg:max-w-240 lg:grid-cols-[460px_minmax(0,1fr)] lg:items-start lg:gap-x-8" : "lg:max-w-180"}`}
            >
              <QuestionCard
                className={split ? "lg:sticky lg:top-6" : ""}
                label={`${topics[section.topic].title} · ${section.label}`}
                language={topics[section.topic].codeLanguage}
                question={question}
              />
              <div className={`mt-5 ${split ? "lg:mt-0" : "lg:mt-8"}`}>
                <ul className='flex flex-col gap-2'>
                  {question.options.map((text, index) => (
                    <li key={`${question.id}-${index}`}>
                      <AnswerOption
                        index={index}
                        text={text}
                        status={statusOf(index, question.answerIndex, selected)}
                        onSelect={() => answer(index)}
                      />
                    </li>
                  ))}
                </ul>
                <div
                  ref={status}
                  role='status'
                  className='not-empty:mt-3'
                >
                  {selected !== undefined && (
                    <ExplanationCard
                      correct={selected === question.answerIndex}
                      text={question.explanation}
                    />
                  )}
                </div>
                <NextBar
                  ref={bar}
                  label={isLast ? "Voir les résultats" : "Question suivante"}
                  visible={selected !== undefined}
                  onNext={showNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
