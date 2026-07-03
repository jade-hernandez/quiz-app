import type { QuizId, QuizQuestion } from "../types";
import { jsQuestions } from "./quiz-questions-js";
import { reactQuestions } from "./quiz-questions-react";

type Quiz = {
  title: string;
  questions: QuizQuestion[];
};

const quizzes: Record<QuizId, Quiz> = {
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
export type { Quiz };
