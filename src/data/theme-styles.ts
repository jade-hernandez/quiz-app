import type { QuizId } from "../types";

type ThemeStyle = {
  text: string;
  cardHover: string;
  button: string;
  progress: string;
  outline: string;
  ring: string;
};

const themeStyles: Record<QuizId, ThemeStyle> = {
  javascript: {
    text: "text-amber-600",
    cardHover: "hover:border-amber-400",
    button: "bg-amber-600 hover:bg-amber-700",
    progress: "bg-amber-500",
    outline: "focus-visible:outline-amber-600",
    ring: "stroke-amber-500",
  },
  react: {
    text: "text-blue-600",
    cardHover: "hover:border-blue-400",
    button: "bg-blue-600 hover:bg-blue-700",
    progress: "bg-blue-500",
    outline: "focus-visible:outline-blue-600",
    ring: "stroke-blue-500",
  },
};

export { themeStyles };
export type { ThemeStyle };
