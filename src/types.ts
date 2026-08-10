type QuizId = "javascript" | "react";

type Section = {
  id: string;
  label: string;
  theme: QuizId;
};

type QuizQuestion = {
  sectionId: string;
  question: string;
  code?: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type { QuizQuestion, QuizId, Section };
