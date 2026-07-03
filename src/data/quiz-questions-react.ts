import type { QuizQuestion } from "../types";

const reactQuestions: QuizQuestion[] = [
  {
    sectionId: 1,
    sectionLabel: "React",
    question:
      "Quelle est la différence entre une bibliothèque et un framework ?",
    options: [
      "Une bibliothèque est gratuite, un framework est payant",
      "Avec une bibliothèque tu appelles son code, avec un framework c'est lui qui appelle ton code",
      "Un framework est plus léger",
      "Il n'y a aucune différence",
    ],
    answerIndex: 1,
    explanation:
      "C'est l'inversion de contrôle. React est une bibliothèque — tu l'intègres comme tu veux. Angular est un framework — il impose la structure.",
  },
  {
    sectionId: 5,
    sectionLabel: "State",
    question: "Que vaut count après ce clic ?",
    code: "const [count, setCount] = useState(0);\nfunction handleClick() {\n  setCount(count + 1);\n  setCount(count + 1);\n  setCount(count + 1);\n}",
    options: ["3", "1", "0", "2"],
    answerIndex: 1,
    explanation:
      "Les 3 appels lisent la même snapshot count = 0. Chacun calcule 0+1 = 1. Pour obtenir 3, il faut la forme fonctionnelle : setCount(prev => prev + 1).",
  },
  {
    sectionId: 7,
    sectionLabel: "Listes & Clés",
    question:
      "Pourquoi React a-t-il besoin de la prop key sur les éléments d'une liste ?",
    options: [
      "Pour appliquer des styles différents",
      "Pour identifier précisément chaque élément lors de la réconciliation",
      "Pour accéder à l'élément dans l'enfant",
      "Pour optimiser le CSS",
    ],
    answerIndex: 1,
    explanation:
      "La key permet à React d'identifier chaque élément lors de la réconciliation. Sans elle, React compare par position et peut faire des erreurs quand la liste change.",
  },
];

export { reactQuestions };
