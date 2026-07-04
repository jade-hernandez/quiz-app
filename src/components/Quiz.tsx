import { useState } from "react";
import type { QuizData } from "../data/quizzes";
import { cn } from "../utils/utils";

type QuizProps = {
  quiz: QuizData;
  onExit: () => void;
  onFinish: (score: number) => void;
};

function Quiz({ quiz, onExit, onFinish }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = quiz.questions[currentIndex];
  const hasAnswered = selectedOption !== null;
  const isAnswerCorrect = selectedOption === currentQuestion.answerIndex;

  function handleNext() {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex((previousIndex) => previousIndex + 1);
      setSelectedOption(null);
    } else {
      onFinish(score);
    }
  }

  function handleSelectOption(index: number) {
    setSelectedOption(index);
    if (index === currentQuestion.answerIndex) {
      setScore((previousScore) => previousScore + 1);
    }
  }

  function getButtonColor(index: number) {
    const isCorrectAnswer = index === currentQuestion.answerIndex;
    const isSelected = index === selectedOption;

    if (selectedOption === null) {
      return "border-neutral-200";
    }

    if (isCorrectAnswer) {
      return "border-green-500 bg-green-100";
    }
    if (isSelected && !isCorrectAnswer) {
      return "border-red-500 bg-red-100";
    }

    return "border-neutral-200";
  }

  // console.log("Score:", score, "Current Index:", currentIndex);

  return (
    <div>
      <button
        onClick={onExit}
        className="mb-4 text-sm text-neutral-500 hover:text-neutral-900"
      >
        ← Retour à l'accueil
      </button>

      <h1 className="font-display text-lg font-bold">{quiz.title}</h1>

      <p className="mt-4 mb-4 text-sm font-medium text-neutral-900">
        {currentQuestion.question}
      </p>
      {currentQuestion.code && (
        <div className="mb-4 overflow-x-auto rounded-xl bg-neutral-100 p-4 font-mono text-xs whitespace-pre">
          {currentQuestion.code}
        </div>
      )}

      <div className="flex flex-col gap-2">
        {currentQuestion.options.map((option, index) => (
          <button
            key={option}
            onClick={() => handleSelectOption(index)}
            disabled={selectedOption !== null}
            className={`rounded-xl border p-3 text-left text-sm hover:border-neutral-400 ${getButtonColor(
              index,
            )}`}
          >
            {option}
          </button>
        ))}
        {hasAnswered && (
          <div
            className={cn(
              "mt-4 rounded-xl border p-4 text-sm font-medium",
              isAnswerCorrect
                ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                : "border-red-400 bg-red-50 text-red-900",
            )}
          >
            {isAnswerCorrect ? "✓ Correct ! " : "✗ Pas tout à fait. "}
            {currentQuestion.explanation}
          </div>
        )}
        {hasAnswered && (
          <button
            onClick={handleNext}
            className="mt-4 rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white"
          >
            {currentIndex < quiz.questions.length - 1
              ? "Question suivante"
              : "Voir les résultats"}
          </button>
        )}
      </div>
    </div>
  );
}

export { Quiz };
