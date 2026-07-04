import { useState } from "react";
import { Home } from "./components/Home";
import { Quiz } from "./components/Quiz";
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
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold text-neutral-900">Résultat</h2>
            <p className="text-lg text-neutral-700">
              Tu as obtenu un score de {finalScore} sur{" "}
              {activeQuiz.questions.length}.
            </p>
            <button
              onClick={handleGoHome}
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Retour à l'accueil
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export { App };
