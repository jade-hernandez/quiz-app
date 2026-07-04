import type { QuizId, QuizQuestion } from "../types";
import { jsQuestions } from "./quiz-questions-js";
import { reactQuestions } from "./quiz-questions-react";

type QuizData = {
  title: string;
  questions: QuizQuestion[];
};

const quizzes: Record<QuizId, QuizData> = {
  javascript: {
    title: "Quiz JavaScript",
    questions: jsQuestions,
  },
  react: {
    title: "Quiz React",
    questions: reactQuestions,
  },
};

export { quizzes };
export type { QuizData };
