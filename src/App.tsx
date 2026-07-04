import { useState } from "react";
import { Home } from "./components/Home";
import { Quiz } from "./components/Quiz";
import { ScoreScreen } from "./components/ScoreScreen";
import { quizzes } from "./data/quizzes";
import type { QuizId } from "./types";

function App() {
  const [screen, setScreen] = useState<"home" | "quiz" | "score">("home");
  const [activeQuizId, setActiveQuizId] = useState<QuizId | null>(null);
  const [finalScore, setFinalScore] = useState<number | null>(null);

  function handleSelectQuiz(id: QuizId) {
    setActiveQuizId(id);
    setScreen("quiz");
  }

  function handleGoHome() {
    setScreen("home");
    setActiveQuizId(null);
  }

  function handleFinishQuiz(score: number) {
    setFinalScore(score);
    setScreen("score");
  }

  const activeQuiz = activeQuizId ? quizzes[activeQuizId] : null;

  return (
    <div className="flex min-h-screen items-start justify-center bg-neutral-50 px-4 py-8">
      <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-sm">
        {screen === "home" && <Home onSelectQuiz={handleSelectQuiz} />}
        {screen === "quiz" && activeQuiz && (
          <Quiz
            quiz={activeQuiz}
            onExit={handleGoHome}
            onFinish={handleFinishQuiz}
          />
        )}
        {screen === "score" && activeQuiz && finalScore !== null && (
          <ScoreScreen
            score={finalScore}
            totalQuestions={activeQuiz.questions.length}
            onExit={handleGoHome}
          />
        )}
      </div>
    </div>
  );
}

export { App };
