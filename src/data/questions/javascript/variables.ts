import type { Question } from "../../../domain/question.ts";

const jsVariablesQuestions: readonly Question[] = [
  {
    id: "javascript-2-1",
    sectionId: "javascript-2",
    question: "Que retourne ce code ?",
    code: "console.log(score);\nvar score = 10;",
    options: ["10", "ReferenceError", "TypeError", "undefined"],
    answerIndex: 3,
    explanation:
      "Hoisting ! var est remontée en haut du scope sans sa valeur → undefined. Pas d'erreur mais un bug silencieux.",
  },
  {
    id: "javascript-2-2",
    sectionId: "javascript-2",
    question: "Que retourne ce code ?",
    code: "console.log(name);\nlet name = 'Jade';",
    options: ["Jade", "undefined", "ReferenceError", "null"],
    answerIndex: 2,
    explanation:
      "let est dans la Temporal Dead Zone — elle existe mais est inaccessible avant sa déclaration → ReferenceError.",
  },
  {
    id: "javascript-2-3",
    sectionId: "javascript-2",
    question: "Que retourne ce code ?",
    code: "const user = { name: 'Jade' };\nuser.name = 'Alice';\nconsole.log(user.name);",
    options: ["Alice", "Jade", "TypeError", "undefined"],
    answerIndex: 0,
    explanation:
      "const protège le contenant, pas le contenu. On peut modifier les propriétés d'un objet const — on ne peut pas réassigner la variable.",
  },
  {
    id: "javascript-2-4",
    sectionId: "javascript-2",
    question: "Quelles sont les 3 raisons d'éviter var ?",
    options: [
      "Performance, lisibilité, compatibilité",
      "Function scope, redéclaration silencieuse, hoisting à undefined",
      "Block scope, TDZ, hoisting",
      "Réassignation, redéclaration, hoisting",
    ],
    answerIndex: 1,
    explanation:
      "Les 3 vrais problèmes de var : function scope (ignore les blocs {}), redéclaration silencieuse, hoisting à undefined.",
  },
  {
    id: "javascript-2-5",
    sectionId: "javascript-2",
    question: "Qu'est-ce que la Temporal Dead Zone ?",
    options: [
      "Une zone de code jamais exécutée",
      "Une erreur spécifique à var",
      "La période où let/const existent mais sont inaccessibles avant leur déclaration",
      "Le temps que met JS à compiler",
    ],
    answerIndex: 2,
    explanation:
      "La TDZ est la période entre le début du scope et la déclaration de let/const — pendant laquelle la variable est inaccessible → ReferenceError.",
  },
  {
    id: "javascript-2-6",
    sectionId: "javascript-2",
    question: "Que retourne ce code ?",
    code: "for (var i = 0; i < 3; i++) {}\nconsole.log(i);",
    options: ["3", "ReferenceError", "undefined", "0"],
    answerIndex: 0,
    explanation:
      "var s'échappe de la boucle car elle a un function scope. i vaut 3 après la boucle. Avec let, ce serait une ReferenceError.",
  },
  {
    id: "javascript-2-7",
    sectionId: "javascript-2",
    question: "Que retourne ce code ?",
    code: "let x = 'dehors';\nif (true) {\n  let x = 'dedans';\n}\nconsole.log(x);",
    options: ["'dehors'", "'dedans'", "undefined", "ReferenceError"],
    answerIndex: 0,
    explanation:
      "`let` a un scope de bloc : le `x` déclaré dans le `if` n'existe qu'à l'intérieur de ce bloc et masque temporairement le `x` extérieur (shadowing). En dehors du bloc, le `x` extérieur reprend sa valeur.",
  },
  {
    id: "javascript-2-8",
    sectionId: "javascript-2",
    question: "Que retourne ce code ?",
    code: "const fruits = ['pomme'];\nfruits.push('banane');\nconsole.log(fruits);",
    options: [
      "TypeError, car fruits est const",
      "['pomme']",
      "undefined",
      "['pomme', 'banane']",
    ],
    answerIndex: 3,
    explanation:
      "`const` interdit de réassigner la variable (`fruits = [...]` échouerait), mais n'empêche pas de modifier le contenu du tableau qu'elle référence. `push()` modifie le tableau en place, ce qui est autorisé.",
  },
  {
    id: "javascript-2-9",
    sectionId: "javascript-2",
    question:
      "Dans un navigateur, quelle est une différence importante entre `var` et `let` déclarés dans le scope global ?",
    options: [
      "`let` devient une propriété de `window`, `var` non",
      "Les deux deviennent des propriétés de `window`",
      "`var` devient une propriété de `window`, `let` non",
      "Aucune des deux ne devient une propriété de `window`",
    ],
    answerIndex: 2,
    explanation:
      "Une `var` globale s'attache à l'objet `window` (`window.maVariable` fonctionne). `let` et `const` créent des bindings globaux qui existent, mais ne sont pas attachés à `window` — encore une bonne raison de préférer `let`/`const`.",
  },
  {
    id: "javascript-2-10",
    sectionId: "javascript-2",
    question: "Que vaut `city` ici ?",
    code: "const { city = 'Paris' } = {};\nconsole.log(city);",
    options: ["undefined", "null", "ReferenceError", "'Paris'"],
    answerIndex: 3,
    explanation:
      "La déstructuration accepte une valeur par défaut avec `=`. Comme l'objet source ne contient pas de propriété `city`, la valeur par défaut `'Paris'` est utilisée.",
  },
];

export { jsVariablesQuestions };
