import { jsQuestions } from "../data/quiz-questions-js";
import { reactQuestions } from "../data/quiz-questions-react";
import type { QuizId } from "../types";
import { QuizCard } from "./QuizCard";
import type { QuizCardProps } from "./QuizCard";

type QuizCardData = Omit<QuizCardProps, "onClick"> & { id: QuizId };

type HomeProps = {
  onSelectQuiz: (id: QuizId) => void;
};

const quizCards: QuizCardData[] = [
  {
    id: "javascript",
    emoji: "🚀",
    title: "Quiz JavaScript",
    questionCount: jsQuestions.length,
    description: "Les fondamentaux, les fonctions, les objets, et plus encore.",
    color: "amber",
  },
  {
    id: "react",
    emoji: "⚛️",
    title: "Quiz React",
    questionCount: reactQuestions.length,
    description: "Les fondamentaux, les composants, les hooks, et plus encore.",
    color: "blue",
  },
];

function Home({ onSelectQuiz }: HomeProps) {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold tracking-wide text-neutral-400 uppercase">
          Salle de révision
        </p>
        <h1 className="font-display text-2xl font-bold text-neutral-900">
          Choisis ton quiz
        </h1>
        <p className="max-w-prose text-sm text-neutral-500">
          Deux parcours complets pour tester ce que tu maîtrises déjà — et
          repérer ce qu'il reste à revoir.
        </p>
      </div>

      {quizCards.map(({ id, ...card }) => (
        <QuizCard key={id} {...card} onClick={() => onSelectQuiz(id)} />
      ))}
    </div>
  );
}

export { Home };
