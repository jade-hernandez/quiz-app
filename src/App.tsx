import { useState } from "react";

import { Home } from "./components/Home";
import { Quiz } from "./components/Quiz";
import { ScoreScreen } from "./components/ScoreScreen";
import { SectionSelection } from "./components/SectionSelection";

import { quizzes } from "./data/quizzes";
import { sections } from "./data/sections";

import type { QuizData } from "./data/quizzes";
import type { QuizId } from "./types";

function App() {
  const [screen, setScreen] = useState<"home" | "sections" | "quiz" | "score">("home");

  const [selectedTheme, setSelectedTheme] = useState<QuizId | null>(null);

  const [activeQuiz, setActiveQuiz] = useState<QuizData | null>(null);

  const [finalScore, setFinalScore] = useState<number | null>(null);

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
    setFinalScore(null);
  }

  function handleBackToSections() {
    setScreen("sections");
    setActiveQuiz(null);
    setFinalScore(null);
  }

  function handleFinishQuiz(score: number) {
    setFinalScore(score);
    setScreen("score");
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

        {screen === "quiz" && activeQuiz && (
          <Quiz
            quiz={activeQuiz}
            onExit={handleBackToSections}
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
