import { useState } from "react";
import { Home } from "./components/Home";
import { quizzes } from "./data/quizzes";
import type { QuizId } from "./types";

function App() {
  const [screen, setScreen] = useState<"home" | "quiz">("home");
  const [activeQuizId, setActiveQuizId] = useState<QuizId | null>(null);

  function handleSelectQuiz(id: QuizId) {
    setActiveQuizId(id);
    setScreen("quiz");
  }

  function handleGoHome() {
    setScreen("home");
    setActiveQuizId(null);
  }

  const activeQuiz = activeQuizId ? quizzes[activeQuizId] : null;
  return (
    <div className="flex min-h-screen items-start justify-center bg-neutral-50 px-4 py-8">
      <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-sm">
        {screen === "home" && <Home onSelectQuiz={handleSelectQuiz} />}
        {screen === "quiz" && activeQuiz && (
          <div>
            <button
              onClick={handleGoHome}
              className="mb-4 text-sm text-neutral-500 hover:text-neutral-900"
            >
              ← Retour à l'accueil
            </button>

            <h1 className="font-display text-lg font-bold">
              {activeQuiz.title}
            </h1>

            <p className="mt-4 mb-4 text-sm font-medium text-neutral-900">
              {activeQuiz.questions[0].question}
            </p>

            <div className="flex flex-col gap-2">
              {activeQuiz.questions[0].options.map((option) => (
                <button
                  key={option}
                  className="rounded-xl border border-neutral-200 p-3 text-left text-sm hover:border-neutral-400"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { App };
