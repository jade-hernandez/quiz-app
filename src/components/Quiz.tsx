import { useState } from "react";
import type { QuizData } from "../data/quizzes";
import { themeStyles } from "../data/theme-styles";
import type { QuizId, QuizResult, MissedQuestion } from "../types";
import { cn } from "../utils/utils";
import { QuizOption } from "./QuizOption";
import { Button } from "./Button";

type QuizProps = {
  quiz: QuizData;
  theme: QuizId;
  onExit: () => void;
  onFinish: (result: QuizResult) => void;
};

function Quiz({ quiz, theme, onExit, onFinish }: QuizProps) {
  const styles = themeStyles[theme];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [missedQuestions, setMissedQuestions] = useState<MissedQuestion[]>([]);

  const currentQuestion = quiz.questions[currentIndex];
  const hasAnswered = selectedOption !== null;
  const isAnswerCorrect = selectedOption === currentQuestion.answerIndex;

  const questionNumber = currentIndex + 1;
  const progress = (questionNumber / quiz.questions.length) * 100;

  function handleNext() {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex(previousIndex => previousIndex + 1);
      setSelectedOption(null);
    } else {
      onFinish({ score, missedQuestions });
    }
  }

  function handleSelectOption(index: number) {
    setSelectedOption(index);
    if (index === currentQuestion.answerIndex) {
      setScore(previousScore => previousScore + 1);
    } else {
      setMissedQuestions(previous => [
        ...previous,
        { question: currentQuestion, selectedIndex: index },
      ]);
    }
  }

  function getOptionState(index: number) {
    const isCorrectAnswer = index === currentQuestion.answerIndex;
    const isSelected = index === selectedOption;

    if (selectedOption === null) {
      return "idle";
    }

    if (isCorrectAnswer) {
      return "correct";
    }

    if (isSelected && !isCorrectAnswer) {
      return "incorrect";
    }

    return "idle";
  }

  return (
    <div>
      <button
        onClick={onExit}
        className='mb-4 cursor-pointer text-sm text-neutral-500 hover:text-neutral-900'
      >
        ← Retour aux sujets
      </button>

      <h1 className='font-display text-lg font-bold'>{quiz.title}</h1>

      <div className='mt-4 mb-6'>
        <div className='mb-2 flex items-center justify-between text-xs font-medium text-neutral-500'>
          <span>
            Question {questionNumber} sur {quiz.questions.length}
          </span>

          <span>{Math.round(progress)} %</span>
        </div>

        <div className='h-2 overflow-hidden rounded-full bg-neutral-100'>
          <div
            className={cn("h-full rounded-full transition-all duration-300", styles.progress)}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className='mt-4 mb-4 text-sm font-medium text-neutral-900'>{currentQuestion.question}</p>

      {currentQuestion.code && (
        <div className='mb-4 overflow-x-auto rounded-xl bg-neutral-100 p-4 font-mono text-xs whitespace-pre'>
          {currentQuestion.code}
        </div>
      )}

      <div className='flex flex-col gap-2'>
        {currentQuestion.options.map((option, index) => (
          <QuizOption
            key={option}
            label={option}
            state={getOptionState(index)}
            disabled={hasAnswered}
            onClick={() => handleSelectOption(index)}
          />
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
          <Button
            onClick={handleNext}
            className={cn("mt-4", styles.button, styles.outline)}
          >
            {currentIndex < quiz.questions.length - 1 ? "Question suivante" : "Voir les résultats"}
          </Button>
        )}
      </div>
    </div>
  );
}

export { Quiz };
