export type TopicId = "javascript" | "react";

export const sections = [
  {
    id: "javascript-1",
    slug: "primitives",
    label: "Primitives",
    topic: "javascript",
    questionCount: 10,
  },
  {
    id: "javascript-2",
    slug: "variables",
    label: "Variables",
    topic: "javascript",
    questionCount: 10,
  },
  {
    id: "javascript-3",
    slug: "operateurs",
    label: "Opérateurs",
    topic: "javascript",
    questionCount: 10,
  },
  {
    id: "javascript-4",
    slug: "conditions",
    label: "Conditions",
    topic: "javascript",
    questionCount: 10,
  },
  {
    id: "javascript-5",
    slug: "boucles",
    label: "Boucles",
    topic: "javascript",
    questionCount: 10,
  },
  {
    id: "javascript-6",
    slug: "fonctions",
    label: "Fonctions",
    topic: "javascript",
    questionCount: 10,
  },
  {
    id: "javascript-7",
    slug: "tableaux",
    label: "Tableaux",
    topic: "javascript",
    questionCount: 10,
  },
  {
    id: "javascript-8",
    slug: "objets",
    label: "Objets",
    topic: "javascript",
    questionCount: 10,
  },

  {
    id: "react-1",
    slug: "fondamentaux",
    label: "Fondamentaux",
    topic: "react",
    questionCount: 10,
  },
  {
    id: "react-2",
    slug: "composants",
    label: "Composants",
    topic: "react",
    questionCount: 10,
  },
  {
    id: "react-3",
    slug: "jsx",
    label: "JSX",
    topic: "react",
    questionCount: 10,
  },
  {
    id: "react-4",
    slug: "props",
    label: "Props",
    topic: "react",
    questionCount: 10,
  },
  {
    id: "react-5",
    slug: "state",
    label: "State",
    topic: "react",
    questionCount: 10,
  },
  {
    id: "react-6",
    slug: "use-effect",
    label: "useEffect",
    topic: "react",
    questionCount: 10,
  },
  {
    id: "react-7",
    slug: "listes-et-cles",
    label: "Listes & Clés",
    topic: "react",
    questionCount: 10,
  },
  {
    id: "react-8",
    slug: "evenements",
    label: "Événements",
    topic: "react",
    questionCount: 10,
  },
  {
    id: "react-9",
    slug: "hooks",
    label: "Hooks",
    topic: "react",
    questionCount: 10,
  },
] as const satisfies readonly {
  id: string;
  slug: string;
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
