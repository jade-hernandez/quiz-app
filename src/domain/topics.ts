import type { TopicId } from "./sections.ts";

export type Topic = {
  readonly id: TopicId;
  readonly title: string;
  readonly description: string;
};

export const topics: Record<TopicId, Topic> = {
  javascript: {
    id: "javascript",
    title: "JavaScript",
    description: "Les fondamentaux du langage",
  },
  react: {
    id: "react",
    title: "React",
    description: "Penser en composants",
  },
};
