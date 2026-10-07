export type TopicId = "javascript" | "react";

// The sections, in display order. Their ids become the SectionId type, so a question
// that points at a section that does not exist fails to compile.
export const sections = [
  { id: "javascript-1", label: "Primitives", topic: "javascript" },
  { id: "javascript-2", label: "Variables", topic: "javascript" },
  { id: "javascript-3", label: "Opérateurs", topic: "javascript" },
  { id: "javascript-4", label: "Conditions", topic: "javascript" },
  { id: "javascript-5", label: "Boucles", topic: "javascript" },
  { id: "javascript-6", label: "Fonctions", topic: "javascript" },
  { id: "javascript-7", label: "Tableaux", topic: "javascript" },
  { id: "javascript-8", label: "Objets", topic: "javascript" },

  { id: "react-1", label: "Fondamentaux", topic: "react" },
  { id: "react-2", label: "Composants", topic: "react" },
  { id: "react-3", label: "JSX", topic: "react" },
  { id: "react-4", label: "Props", topic: "react" },
  { id: "react-5", label: "State", topic: "react" },
  { id: "react-6", label: "useEffect", topic: "react" },
  { id: "react-7", label: "Listes & Clés", topic: "react" },
  { id: "react-8", label: "Événements", topic: "react" },
  { id: "react-9", label: "Hooks", topic: "react" },
] as const satisfies readonly { id: string; label: string; topic: TopicId }[];

export type Section = (typeof sections)[number];
export type SectionId = Section["id"];
