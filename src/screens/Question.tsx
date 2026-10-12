import { useEffect, useRef, useState } from "react";
import { AnswerOption } from "../components/AnswerOption.tsx";
import type { AnswerStatus } from "../components/AnswerOption.tsx";
import { BackButton } from "../components/BackButton.tsx";
import { ExplanationCard } from "../components/ExplanationCard.tsx";
import { NextBar } from "../components/NextBar.tsx";
import { Progress } from "../components/Progress.tsx";
import { QuestionCard } from "../components/QuestionCard.tsx";
import { questionsOfSection } from "../data/queries.ts";
import type { OptionIndex } from "../domain/question.ts";
import type { Section } from "../domain/sections.ts";
import { topics } from "../domain/topics.ts";

type QuestionProps = {
  readonly section: Section;
  readonly onBack: () => void;
  readonly onFinish: (score: number, total: number) => void;
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

export function Question({ section, onBack, onFinish }: QuestionProps) {
  const questions = questionsOfSection(section.id);
  const [position, setPosition] = useState(0);
  const [answers, setAnswers] = useState<readonly number[]>([]);
  const question = questions[position];
  const selected = answers[position];
  const isLast = position === questions.length - 1;
  const status = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.querySelector<HTMLElement>("main h1")?.focus();
  }, [position]);

  useEffect(() => {
    if (selected === undefined) return;
    const card = status.current?.firstElementChild;
    if (!card) return;
    const margin = 12;
    const { top, bottom } = card.getBoundingClientRect();
    const floor = Math.min(
      bar.current?.getBoundingClientRect().top ?? window.innerHeight,
      window.innerHeight,
    );
    const hidden = bottom - (floor - margin);
    if (hidden > 0) window.scrollBy(0, Math.max(0, Math.min(hidden, top)));
  }, [selected]);

  function answer(picked: number) {
    setAnswers((current) =>
      current.length > position ? current : [...current, picked],
    );
  }

  function showNext() {
    if (!isLast) {
      setPosition(position + 1);
      return;
    }
    const score = answers.filter(
      (picked, index) => picked === questions[index]?.answerIndex,
    ).length;
    onFinish(score, questions.length);
  }

  return (
    <main
      data-topic={section.topic}
      className='mx-auto flex min-h-dvh w-full max-w-160 flex-col gap-3 p-4 pb-24 md:pb-4 lg:max-w-240 lg:p-10'
    >
      <div className='flex items-center gap-3'>
        <BackButton
          label='Retour aux sections'
          onClick={onBack}
        />
        {question !== undefined && (
          <Progress
            current={position + 1}
            total={questions.length}
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
        <div className='mx-auto w-full max-w-140 lg:max-w-180'>
          <QuestionCard
            label={`${topics[section.topic].title} · ${section.label}`}
            language={topics[section.topic].codeLanguage}
            question={question}
          />
          <ul className='mt-3 flex flex-col gap-2'>
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
      )}
    </main>
  );
}
