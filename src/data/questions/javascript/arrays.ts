import type { Question } from "../../../domain/question.ts";

const jsArraysQuestions: readonly Question[] = [
  {
    id: "javascript-7-1",
    sectionId: "javascript-7",
    question: "Quelle est la différence entre filter() et find() ?",
    options: [
      "Aucune",
      "find() retourne un tableau / filter() retourne un élément",
      "filter() modifie l'original",
      "filter() retourne un tableau de tous les éléments correspondants / find() retourne le premier ou undefined",
    ],
    answerIndex: 3,
    explanation:
      "filter() retourne TOUJOURS un tableau. find() retourne UN seul élément (le premier) ou undefined si rien ne correspond.",
  },
  {
    id: "javascript-7-2",
    sectionId: "javascript-7",
    question: "Que retourne findIndex() si aucun élément ne correspond ?",
    options: ["-1", "undefined", "null", "false"],
    answerIndex: 0,
    explanation:
      "findIndex() retourne -1 si aucun élément ne correspond — pas undefined comme find(). C'est une distinction importante !",
  },
  {
    id: "javascript-7-3",
    sectionId: "javascript-7",
    question: "Que retourne ce code ?",
    code: "const numbers = [1, 2, 3, 4, 5];\nconst total = numbers.reduce((acc, val) => acc + val, 0);",
    options: ["[1, 2, 3, 4, 5]", "undefined", "15", "5"],
    answerIndex: 2,
    explanation:
      "reduce() additionne : 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15. L'accumulateur part de 0 et s'accumule à chaque tour.",
  },
  {
    id: "javascript-7-4",
    sectionId: "javascript-7",
    question: "Que retourne push() ?",
    options: [
      "Le nouvel élément ajouté",
      "La nouvelle longueur du tableau",
      "Un nouveau tableau",
      "undefined",
    ],
    answerIndex: 1,
    explanation:
      "push() retourne la NOUVELLE LONGUEUR du tableau et modifie l'original. Pour créer un nouveau tableau, on utilise le spread operator.",
  },
  {
    id: "javascript-7-5",
    sectionId: "javascript-7",
    question: "Que retourne ce code ?",
    code: "const fruits = ['pomme', 'banane', 'cerise', 'mangue'];\nfruits.slice(1, 3);",
    options: [
      '["pomme", "banane"]',
      '["cerise", "mangue"]',
      '["banane", "cerise", "mangue"]',
      '["banane", "cerise"]',
    ],
    answerIndex: 3,
    explanation:
      "slice(1, 3) commence à l'index 1 (inclus) et s'arrête à l'index 3 (exclus) → ['banane', 'cerise'].",
  },
  {
    id: "javascript-7-6",
    sectionId: "javascript-7",
    question: "Que retourne ce code ?",
    code: "const arr = [1, [2, 3], [4, [5, 6]]];\narr.flat();",
    options: [
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, [5, 6]]",
      "[1, [2, 3], [4, [5, 6]]]",
      "undefined",
    ],
    answerIndex: 1,
    explanation:
      "flat() sans paramètre n'aplatit qu'un seul niveau. [2, 3] et [4, [5, 6]] sont aplatis mais [5, 6] reste imbriqué → [1, 2, 3, 4, [5, 6]].",
  },
  {
    id: "javascript-7-7",
    sectionId: "javascript-7",
    question: "Que retourne ce code ?",
    code: "const numbers = [1, 5, 8, 9, 3];\nnumbers.some(n => n > 8);\nnumbers.every(n => n < 10);",
    options: [
      "false et false",
      "true et false",
      "true et true",
      "false et true",
    ],
    answerIndex: 2,
    explanation:
      "some(n > 8) → 9 > 8 ✅ → true. every(n < 10) → tous < 10 ✅ → true.",
  },
  {
    id: "javascript-7-8",
    sectionId: "javascript-7",
    question: "Quelle est la différence entre `includes()` et `indexOf()` ?",
    options: [
      "`includes()` retourne un booléen, `indexOf()` retourne un index (ou -1)",
      "`indexOf()` retourne un booléen, `includes()` retourne un index",
      "Aucune différence",
      "`includes()` ne fonctionne que sur les strings",
    ],
    answerIndex: 0,
    explanation:
      "`includes()` répond à 'est-ce que cette valeur est présente ?' (true/false), plus lisible quand on n'a pas besoin de savoir où. `indexOf()` donne la position, ou -1 si absent. Bonus : `includes()` détecte correctement `NaN`, contrairement à `indexOf()`.",
  },
  {
    id: "javascript-7-9",
    sectionId: "javascript-7",
    question: "Que retourne ce code ?",
    code: "const numbers = [10, 1, 21, 2];\nnumbers.sort();",
    options: [
      "[1, 10, 2, 21] — tri alphabétique par défaut, pas numérique",
      "[1, 2, 10, 21] — tri numérique croissant",
      "[21, 10, 2, 1] — tri décroissant",
      "[10, 1, 21, 2] — sort() ne modifie rien sans argument",
    ],
    answerIndex: 0,
    explanation:
      "Par défaut, `sort()` convertit les éléments en strings et trie alphabétiquement — d'où '10' avant '2'. Pour un vrai tri numérique, il faut fournir un comparateur : `numbers.sort((a, b) => a - b)`. Autre piège : `sort()` modifie le tableau original.",
  },
  {
    id: "javascript-7-10",
    sectionId: "javascript-7",
    question: "Que vaut `second` ici ?",
    code: "const fruits = ['pomme', 'banane', 'cerise'];\nconst [, second] = fruits;",
    options: ["'pomme'", "undefined", "'banane'", "SyntaxError"],
    answerIndex: 2,
    explanation:
      "La virgule sans nom avant `second` saute le premier élément du tableau lors de la déstructuration. `second` récupère donc l'élément à l'index 1, soit `'banane'`.",
  },
];

export { jsArraysQuestions };
