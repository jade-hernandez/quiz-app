import { jsQuestions } from "../data/quiz-questions-js";
import { reactQuestions } from "../data/quiz-questions-react";
import { sections } from "../data/sections";
import type { QuizId } from "../types";

import { QuizCard } from "./QuizCard";

import type { QuizCardProps } from "./QuizCard";

type QuizCardData = Omit<QuizCardProps, "onClick" | "theme"> & { id: QuizId };

type HomeProps = {
  onSelectTheme: (id: QuizId) => void;
};

const quizCards: QuizCardData[] = [
  {
    id: "javascript",
    emoji: "🚀",
    title: "Quiz JavaScript",
    sectionCount: sections.filter(section => section.theme === "javascript").length,
    questionCount: jsQuestions.length,
    description: "Les fondamentaux, les fonctions, les objets, et plus encore.",
  },
  {
    id: "react",
    emoji: "⚛️",
    title: "Quiz React",
    sectionCount: sections.filter(section => section.theme === "react").length,
    questionCount: reactQuestions.length,
    description: "Les fondamentaux, les composants, les hooks, et plus encore.",
  },
];

function Home({ onSelectTheme }: HomeProps) {
  return (
    <div className='flex flex-col gap-7'>
      <div className='flex flex-col gap-1'>
        <h1 className='font-display text-2xl font-bold text-neutral-900'>Choisis ton parcours</h1>
        <p className='max-w-prose text-sm text-neutral-500'>
          Choisis un thème pour réviser les notions qui t'intéressent.
        </p>
      </div>
      {quizCards.map(({ id, ...card }) => (
        <QuizCard
          key={id}
          {...card}
          theme={id}
          onClick={() => onSelectTheme(id)}
        />
      ))}
    </div>
  );
}

export { Home };
