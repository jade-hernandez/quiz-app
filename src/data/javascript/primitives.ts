import type { QuizQuestion } from "../../types";

const jsPrimitivesQuestions: QuizQuestion[] = [
  {
    id: "javascript-1-1",
    sectionId: "javascript-1",
    question: "Combien y a-t-il de types primitifs en JavaScript ?",
    options: ["5", "6", "8", "7"],
    answerIndex: 3,
    explanation: "Les 7 primitives : string, number, boolean, null, undefined, symbol, bigint.",
  },
  {
    id: "javascript-1-2",
    sectionId: "javascript-1",
    question: "Que retourne typeof null ?",
    options: ['"null"', '"object"', '"undefined"', '"boolean"'],
    answerIndex: 1,
    explanation:
      "typeof null retourne 'object' — un bug historique de JS lié à la représentation binaire en mémoire. Jamais corrigé pour des raisons de compatibilité.",
  },
  {
    id: "javascript-1-3",
    sectionId: "javascript-1",
    question: "Que retourne typeof NaN ?",
    options: ['"number"', '"NaN"', '"undefined"', '"boolean"'],
    answerIndex: 0,
    explanation:
      "NaN est de type 'number' — une des grandes bizarreries de JS. NaN est le résultat d'une opération mathématique invalide, dans le domaine du number.",
  },
  {
    id: "javascript-1-4",
    sectionId: "javascript-1",
    question: "Que retourne NaN === NaN ?",
    options: ["true", "undefined", "false", "TypeError"],
    answerIndex: 2,
    explanation:
      "NaN est la seule valeur en JS qui n'est pas égale à elle-même ! Pour vérifier si une valeur est NaN, on utilise Number.isNaN().",
  },
  {
    id: "javascript-1-5",
    sectionId: "javascript-1",
    question: "Laquelle de ces valeurs est truthy ?",
    options: ['""', "[]", "0", "null"],
    answerIndex: 1,
    explanation:
      "Un tableau vide [] est toujours truthy ! Les 6 valeurs falsy : false, null, undefined, NaN, 0, ''.",
  },
  {
    id: "javascript-1-6",
    sectionId: "javascript-1",
    question: "Quelle est la différence entre null et undefined ?",
    options: [
      "Aucune différence",
      "undefined = absence volontaire / null = JS ne sait pas encore",
      "null = absence volontaire / undefined = JS ne sait pas encore",
      "null est un number",
    ],
    answerIndex: 2,
    explanation:
      "null → toi tu décides qu'il n'y a rien (volontaire). undefined → JS te dit qu'il ne sait pas encore (pas encore assigné).",
  },
  {
    id: "javascript-1-7",
    sectionId: "javascript-1",
    question: "Que retourne 0.1 + 0.2 ?",
    options: ["0.3", "NaN", "0.03", "0.30000000000000004"],
    answerIndex: 3,
    explanation:
      "Problème de précision des nombres flottants en binaire — certains décimaux ne peuvent pas être représentés exactement.",
  },
  {
    id: "javascript-1-8",
    sectionId: "javascript-1",
    question: "Que retourne ce code ?",
    code: "let name = 'jade';\nname[0] = 'J';\nconsole.log(name);",
    options: ['"jade"', '"Jade"', "TypeError", "undefined"],
    answerIndex: 0,
    explanation:
      "Les strings sont immutables — on ne peut pas modifier un caractère directement. name reste 'jade'. Pour modifier, il faut créer une nouvelle string.",
  },
  {
    id: "javascript-1-9",
    sectionId: "javascript-1",
    question: "Que retourne Boolean('false') ?",
    options: ["false", "true", "undefined", "TypeError"],
    answerIndex: 1,
    explanation:
      "'false' est une string NON vide → truthy → true. La distinction importante : 'false' (string) ≠ false (boolean).",
  },
  {
    id: "javascript-1-10",
    sectionId: "javascript-1",
    question:
      "Quand on fait `let b = a;` avec `a` un number, que se passe-t-il si on modifie ensuite `b` ?",
    options: [
      "`a` change aussi, car il n'y a qu'une seule valeur en mémoire",
      "`a` ne change pas : les primitives sont copiées par valeur, pas par référence",
      "Une erreur est levée",
      "`a` devient `undefined`",
    ],
    answerIndex: 1,
    explanation:
      "Les primitives (number, string, boolean...) sont copiées par valeur : `b` reçoit une copie indépendante. Modifier `b` n'affecte jamais `a`. C'est l'inverse pour les objets, copiés par référence.",
  },
];

export { jsPrimitivesQuestions };
