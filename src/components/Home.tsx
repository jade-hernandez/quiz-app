import { QuizCard } from "./QuizCard";
import type { QuizCardProps } from "./QuizCard";

type QuizCardData = Omit<QuizCardProps, "onClick">;

const quizCards: QuizCardData[] = [
  {
    emoji: "🚀",
    title: "Quiz JavaScript",
    questionCount: 53,
    description: "Les fondamentaux, les fonctions, les objets, et plus encore.",
    color: "amber",
  },
  {
    emoji: "⚛️",
    title: "Quiz React",
    questionCount: 32,
    description: "Les fondamentaux, les composants, les hooks, et plus encore.",
    color: "blue",
  },
];

function Home() {
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

      {quizCards.map((card) => (
        <QuizCard key={card.title} {...card} onClick={() => {}} />
      ))}
    </div>
  );
}

export { Home };
