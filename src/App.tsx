import { useState } from "react";

import { Home } from "./components/Home";
import { Quiz } from "./components/Quiz";
import { ScoreScreen } from "./components/ScoreScreen";
import { SectionSelection } from "./components/SectionSelection";

import { quizzes } from "./data/quizzes";
import { sections } from "./data/sections";

import type { QuizData } from "./data/quizzes";
import type { QuizId, QuizResult } from "./types";

function App() {
  const [screen, setScreen] = useState<"home" | "sections" | "quiz" | "score">("home");
  const [selectedTheme, setSelectedTheme] = useState<QuizId | null>(null);
  const [activeQuiz, setActiveQuiz] = useState<QuizData | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [quizAttempt, setQuizAttempt] = useState(0);

  function handleSelectTheme(id: QuizId) {
    setSelectedTheme(id);
    setScreen("sections");
  }

  function handleSelectSection(sectionId: string) {
    if (!selectedTheme) {
      return;
    }

    const selectedSection = sections.find(section => section.id === sectionId);

    if (!selectedSection) {
      return;
    }

    const themeQuiz = quizzes[selectedTheme];

    const sectionQuestions = themeQuiz.questions.filter(
      question => question.sectionId === sectionId,
    );

    setActiveQuiz({
      title: selectedSection.label,
      questions: sectionQuestions,
    });

    setScreen("quiz");
  }

  function handleGoHome() {
    setScreen("home");
    setSelectedTheme(null);
    setActiveQuiz(null);
    setResult(null);
  }

  function handleBackToSections() {
    setScreen("sections");
    setActiveQuiz(null);
    setResult(null);
  }

  function handleFinishQuiz(quizResult: QuizResult) {
    setResult(quizResult);
    setScreen("score");
  }

  function handleRetry() {
    setResult(null);
    setQuizAttempt(previous => previous + 1);
    setScreen("quiz");
  }

  return (
    <div className='flex min-h-screen items-start justify-center bg-neutral-50 px-4 py-8'>
      <div className='w-full max-w-xl rounded-2xl bg-white p-8 shadow-sm'>
        {screen === "home" && <Home onSelectTheme={handleSelectTheme} />}

        {screen === "sections" && selectedTheme && (
          <SectionSelection
            theme={selectedTheme}
            onSelectSection={handleSelectSection}
            onBack={handleGoHome}
          />
        )}

        {screen === "quiz" && activeQuiz && selectedTheme && (
          <Quiz
            key={quizAttempt}
            quiz={activeQuiz}
            theme={selectedTheme}
            onExit={handleBackToSections}
            onFinish={handleFinishQuiz}
          />
        )}

        {screen === "score" && activeQuiz && selectedTheme && result && (
          <ScoreScreen
            result={result}
            theme={selectedTheme}
            totalQuestions={activeQuiz.questions.length}
            onRetry={handleRetry}
            onBackToSections={handleBackToSections}
          />
        )}
      </div>
    </div>
  );
}

export { App };
