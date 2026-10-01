type QuizId = "javascript" | "react";

type Section = {
  id: string;
  label: string;
  theme: QuizId;
};

type QuizQuestion = {
  id: string;
  sectionId: string;
  question: string;
  code?: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

type QuizResult = {
  score: number;
  missedQuestions: MissedQuestion[];
};

type MissedQuestion = {
  question: QuizQuestion;
  selectedIndex: number;
};

export type { QuizQuestion, QuizId, Section, QuizResult, MissedQuestion };
