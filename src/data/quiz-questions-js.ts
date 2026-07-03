import type { QuizQuestion } from "../types";

const jsQuestions: QuizQuestion[] = [
  {
    sectionId: 1,
    sectionLabel: "Primitives",
    question: "Combien y a-t-il de types primitifs en JavaScript ?",
    options: ["5", "6", "7", "8"],
    answerIndex: 2,
    explanation:
      "Les 7 primitives : string, number, boolean, null, undefined, symbol, bigint.",
  },
  {
    sectionId: 1,
    sectionLabel: "Primitives",
    question: "Que retourne typeof null ?",
    options: ['"null"', '"undefined"', '"object"', '"boolean"'],
    answerIndex: 2,
    explanation:
      "typeof null retourne 'object' — un bug historique de JS lié à la représentation binaire en mémoire. Jamais corrigé pour des raisons de compatibilité.",
  },
  {
    sectionId: 6,
    sectionLabel: "Fonctions",
    question: "Que retourne ce code ?",
    code: "const getUser = () => { name: 'Jade' };\nconsole.log(getUser());",
    options: ['{ name: "Jade" }', '"Jade"', "undefined", "SyntaxError"],
    answerIndex: 2,
    explanation:
      "JS confond {} de l'objet avec {} du corps de fonction → retourne undefined. Solution : const getUser = () => ({ name: 'Jade' }).",
  },
];

export { jsQuestions };
