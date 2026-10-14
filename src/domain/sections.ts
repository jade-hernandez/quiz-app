export type TopicId = "javascript" | "react";

export const sections = [
  {
    id: "javascript-1",
    label: "Primitives",
    topic: "javascript",
    questionCount: 10,
  },
  {
    id: "javascript-2",
    label: "Variables",
    topic: "javascript",
    questionCount: 10,
  },
  {
    id: "javascript-3",
    label: "Opérateurs",
    topic: "javascript",
    questionCount: 10,
  },
  {
    id: "javascript-4",
    label: "Conditions",
    topic: "javascript",
    questionCount: 10,
  },
  {
    id: "javascript-5",
    label: "Boucles",
    topic: "javascript",
    questionCount: 10,
  },
  {
    id: "javascript-6",
    label: "Fonctions",
    topic: "javascript",
    questionCount: 10,
  },
  {
    id: "javascript-7",
    label: "Tableaux",
    topic: "javascript",
    questionCount: 10,
  },
  {
    id: "javascript-8",
    label: "Objets",
    topic: "javascript",
    questionCount: 10,
  },

  { id: "react-1", label: "Fondamentaux", topic: "react", questionCount: 10 },
  { id: "react-2", label: "Composants", topic: "react", questionCount: 10 },
  { id: "react-3", label: "JSX", topic: "react", questionCount: 10 },
  { id: "react-4", label: "Props", topic: "react", questionCount: 10 },
  { id: "react-5", label: "State", topic: "react", questionCount: 10 },
  { id: "react-6", label: "useEffect", topic: "react", questionCount: 10 },
  { id: "react-7", label: "Listes & Clés", topic: "react", questionCount: 10 },
  { id: "react-8", label: "Événements", topic: "react", questionCount: 10 },
  { id: "react-9", label: "Hooks", topic: "react", questionCount: 10 },
] as const satisfies readonly {
  id: string;
  label: string;
  topic: TopicId;
  questionCount: number;
}[];

export type Section = (typeof sections)[number];
export type SectionId = Section["id"];

export function sectionsOfTopic(topic: TopicId) {
  return sections.filter((section) => section.topic === topic);
}

export function questionCountOfTopic(topic: TopicId): number {
  return sectionsOfTopic(topic).reduce(
    (total, section) => total + section.questionCount,
    0,
  );
}
