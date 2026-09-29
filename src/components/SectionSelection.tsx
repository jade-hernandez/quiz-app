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
          variant='ghost'
          onClick={onBack}
          className='mb-2 w-fit px-0 py-0 font-medium'
        >
          ← Retour
        </Button>

        <p className='text-xs font-semibold tracking-wide text-neutral-400 uppercase'>
          {themeEmojis[theme]} {themeLabels[theme]}
        </p>

        <h1 className='font-display text-2xl font-bold text-neutral-900'>Choisis un sujet</h1>

        <p className='max-w-prose text-sm text-neutral-500'>
          Sélectionne ce que tu souhaites réviser.
        </p>
      </div>

      <div className='flex flex-col gap-3'>
        {themeSections.map(section => {
          const questionCount = themeQuestions.filter(
            question => question.sectionId === section.id,
          ).length;

          return (
            <button
              key={section.id}
              type='button'
              onClick={() => onSelectSection(section.id)}
              className='flex w-full cursor-pointer items-center justify-between rounded-2xl border border-neutral-200 bg-white p-5 text-left transition-colors hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900'
            >
              <div className='flex flex-col gap-1'>
                <span className='font-display text-lg font-bold text-neutral-900'>
                  {section.label}
                </span>

                <span className='text-sm text-neutral-500'>
                  {questionCount} {questionCount > 1 ? "questions" : "question"}
                </span>
              </div>

              <span className='text-sm font-semibold text-neutral-900'>Commencer →</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { SectionSelection };
