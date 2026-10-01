import { useState } from "react";

import { themeStyles } from "../data/theme-styles";
import type { QuizId, QuizResult } from "../types";
import { cn } from "../utils/utils";

import { Button } from "./Button";

type ScoreScreenProps = {
  result: QuizResult;
  totalQuestions: number;
  theme: QuizId;
  onRetry: () => void;
  onBackToSections: () => void;
};

type Verdict = { emoji: string; title: string; message: string };

function getVerdict(percentage: number): Verdict {
  if (percentage === 100) {
    return { emoji: "🏆", title: "Sans faute !", message: "Tu maîtrises cette section." };
  }
  if (percentage >= 80) {
    return {
      emoji: "🎉",
      title: "Excellent !",
      message: "Encore un petit effort pour le sans-faute.",
    };
  }
  if (percentage >= 40) {
    return {
      emoji: "💪",
      title: "Bien joué !",
      message: "Les bases sont là, revois tes erreurs pour progresser.",
    };
  }
  return {
    emoji: "🌱",
    title: "C'est un début !",
    message: "Chaque erreur est une occasion d'apprendre. On y retourne ?",
  };
}

const RING_RADIUS = 52;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function ScoreScreen({
  result,
  totalQuestions,
  theme,
  onRetry,
  onBackToSections,
}: ScoreScreenProps) {
  const [showReview, setShowReview] = useState(false);
  const styles = themeStyles[theme];
  const { score, missedQuestions } = result;
  const percentage = Math.round((score / totalQuestions) * 100);
  const verdict = getVerdict(percentage);
  const dashOffset = RING_CIRCUMFERENCE * (1 - percentage / 100);

  return (
    <div className='flex flex-col items-center gap-6 text-center'>
      <div className='relative flex h-36 w-36 items-center justify-center'>
        <svg
          viewBox='0 0 120 120'
          className='absolute inset-0 -rotate-90'
          aria-hidden='true'
        >
          <circle
            cx='60'
            cy='60'
            r={RING_RADIUS}
            fill='none'
            strokeWidth='10'
            className='stroke-neutral-100'
          />
          <circle
            cx='60'
            cy='60'
            r={RING_RADIUS}
            fill='none'
            strokeWidth='10'
            strokeLinecap='round'
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
            className={cn("transition-all duration-700", styles.ring)}
          />
        </svg>

        <div className='flex flex-col'>
          <span className='font-display text-3xl font-bold text-neutral-900'>{percentage} %</span>
          <span className='text-xs font-medium text-neutral-400'>
            {score} / {totalQuestions}
          </span>
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <h2 className='font-display text-2xl font-bold text-neutral-900'>
          {verdict.emoji} {verdict.title}
        </h2>
        <p className='max-w-prose text-sm text-neutral-500'>{verdict.message}</p>
      </div>

      <div className='flex w-full flex-col gap-2'>
        <Button
          onClick={onRetry}
          className={cn("w-full", styles.button, styles.outline)}
        >
          Réessayer
        </Button>

        {missedQuestions.length > 0 && (
          <Button
            variant='secondary'
            onClick={() => setShowReview(previous => !previous)}
            className='w-full'
          >
            {showReview ? "Masquer mes erreurs" : `Revoir mes erreurs (${missedQuestions.length})`}
          </Button>
        )}

        <Button
          variant='ghost'
          onClick={onBackToSections}
          className='w-full'
        >
          Retour aux sujets
        </Button>
      </div>

      {showReview && (
        <ul className='flex w-full flex-col gap-3 text-left'>
          {missedQuestions.map(({ question, selectedIndex }) => (
            <li
              key={question.id}
              className='flex flex-col gap-2 rounded-xl border border-neutral-200 p-4'
            >
              <p className='text-sm font-medium text-neutral-900'>{question.question}</p>

              {question.code && (
                <div className='overflow-x-auto rounded-lg bg-neutral-100 p-3 font-mono text-xs whitespace-pre'>
                  {question.code}
                </div>
              )}

              <div className='flex flex-col gap-2'>
                <p className='rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800'>
                  <span className='font-semibold'>✗ Ta réponse : </span>
                  {question.options[selectedIndex]}
                </p>

                <p className='rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800'>
                  <span className='font-semibold'>✓ Bonne réponse : </span>
                  {question.options[question.answerIndex]}
                </p>
              </div>

              <p className='text-sm text-neutral-500'>{question.explanation}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { ScoreScreen };
