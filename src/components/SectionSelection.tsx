import { sections } from "../data/sections";
import { quizzes } from "../data/quizzes";
import type { QuizId } from "../types";

import { Button } from "./Button";

type SectionSelectionProps = {
  theme: QuizId;
  onSelectSection: (sectionId: string) => void;
  onBack: () => void;
};

const themeLabels: Record<QuizId, string> = {
  javascript: "JavaScript",
  react: "React",
};

const themeEmojis: Record<QuizId, string> = {
  javascript: "🚀",
  react: "⚛️",
};

function SectionSelection({ theme, onSelectSection, onBack }: SectionSelectionProps) {
  const themeSections = sections.filter(section => section.theme === theme);

  const themeQuestions = quizzes[theme].questions;

  return (
    <div className='flex flex-col gap-7'>
      <div className='flex flex-col gap-1'>
        <Button
          type='button'
          onClick={onBack}
          className='mb-2 w-fit bg-transparent px-0 py-0 text-sm font-medium text-neutral-400 hover:bg-transparent hover:text-neutral-700'
        >
          ← Retour
        </Button>

        <p className='text-xs font-semibold tracking-wide text-neutral-400 uppercase'>
          {themeEmojis[theme]} {themeLabels[theme]}
        </p>

        <h1 className='font-display text-2xl font-bold text-neutral-900'>Choisis un thème</h1>

        <p className='max-w-prose text-sm text-neutral-500'>
          Sélectionne le sujet que tu souhaites réviser.
        </p>
      </div>

      <div className='flex flex-col gap-3'>
        {themeSections.map(section => {
          const questionCount = themeQuestions.filter(
            question => question.sectionId === section.id,
          ).length;

          return (
            <Button
              key={section.id}
              type='button'
              onClick={() => onSelectSection(section.id)}
              className='flex w-full items-center justify-between rounded-2xl border border-neutral-200 p-5 text-left transition-colors hover:border-neutral-400'
            >
              <div className='flex flex-col gap-1'>
                <span className='font-display text-lg font-bold'>{section.label}</span>

                <span className='text-sm text-neutral-500'>
                  {questionCount} {questionCount > 1 ? "questions" : "question"}
                </span>
              </div>

              <span className='text-sm font-semibold'>Commencer →</span>
            </Button>
          );
        })}
      </div>

      <Button
        type='button'
        onClick={onBack}
        className='w-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
      >
        Retour aux parcours
      </Button>
    </div>
  );
}

export { SectionSelection };
