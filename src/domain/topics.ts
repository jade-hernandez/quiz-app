import type { TopicId } from "./sections.ts";

export type Topic = {
  readonly id: TopicId;
  readonly title: string;
  readonly description: string;
  readonly codeLanguage: string;
};

export const topics: Record<TopicId, Topic> = {
  javascript: {
    id: "javascript",
    title: "JavaScript",
    description: "Les fondamentaux du langage",
    codeLanguage: "JavaScript",
  },
  react: {
    id: "react",
    title: "React",
    description: "Penser en composants",
    codeLanguage: "JSX",
  },
};
