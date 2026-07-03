type QuizId = "javascript" | "react";

type QuizQuestion = {
  sectionId: number;
  sectionLabel: string;
  question: string;
  code?: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type { QuizQuestion, QuizId };
