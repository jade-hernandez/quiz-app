import type { QuizQuestion } from "../../types";

const jsFunctionsQuestions: QuizQuestion[] = [
  {
    id: "javascript-6-1",
    sectionId: "javascript-6",
    question: "Laquelle peut être appelée avant sa déclaration ?",
    code: "// A\nfunction add(a, b) { return a + b; }\n\n// B\nconst add = function(a, b) { return a + b; };\n\n// C\nconst add = (a, b) => a + b;",
    options: ["A uniquement", "B uniquement", "C uniquement", "B et C"],
    answerIndex: 0,
    explanation:
      "Seule la déclaration de fonction (A) est entièrement hoistée — nom ET corps. Les expressions (B) et arrow functions (C) sont soumises à la TDZ.",
  },
  {
    id: "javascript-6-2",
    sectionId: "javascript-6",
    question: "Que retourne ce code ?",
    code: "const getUser = () => { name: 'Jade' };\nconsole.log(getUser());",
    options: ['{ name: "Jade" }', "undefined", '"Jade"', "SyntaxError"],
    answerIndex: 1,
    explanation:
      "JS confond {} de l'objet avec {} du corps de fonction → retourne undefined. Solution : const getUser = () => ({ name: 'Jade' }).",
  },
  {
    id: "javascript-6-3",
    sectionId: "javascript-6",
    question: "Quelle est la différence entre un paramètre et un argument ?",
    options: [
      "C'est la même chose",
      "Le paramètre est dans l'appel / l'argument dans la définition",
      "Le paramètre est dans la définition / l'argument est la valeur passée lors de l'appel",
      "Le paramètre est toujours un number",
    ],
    answerIndex: 2,
    explanation:
      "Paramètre = variable dans la définition (ce qu'elle attend). Argument = valeur passée lors de l'appel.",
  },
  {
    id: "javascript-6-4",
    sectionId: "javascript-6",
    question: "Qu'est-ce qu'une closure ?",
    options: [
      "Une fonction qui ne retourne rien",
      "Une fonction dans le scope global",
      "Une fonction sans paramètres",
      "Une fonction qui se souvient des variables de son scope parent même après son exécution",
    ],
    answerIndex: 3,
    explanation:
      "Une closure capture les variables de son scope parent dans son 'sac à dos' et s'en souvient même après que ce scope a fini de s'exécuter.",
  },
  {
    id: "javascript-6-5",
    sectionId: "javascript-6",
    question: "Que retourne ce code ?",
    code: "function creerCompteur() {\n  let count = 0;\n  return () => ++count;\n}\nconst c = creerCompteur();\nc(); c();\nconsole.log(c());",
    options: ["3", "1", "2", "undefined"],
    answerIndex: 0,
    explanation:
      "++count incrémente PUIS retourne. Après 3 appels → count = 3. La closure maintient count en vie entre les appels.",
  },
  {
    id: "javascript-6-6",
    sectionId: "javascript-6",
    question: "Que retourne ce code ?",
    code: "function getDiscount(user) {\n  if (!user) return 0;\n  if (user.isPremium) return 0.3;\n  return 0.1;\n}\ngetDiscount(null);",
    options: ["0.1", "0.3", "undefined", "0"],
    answerIndex: 3,
    explanation:
      "null est falsy → !user est true → early return → retourne 0. C'est le pattern early return — sortir tôt sans évaluer le reste.",
  },
  {
    id: "javascript-6-7",
    sectionId: "javascript-6",
    question: "Que retourne ce code ?",
    code: "const name = 'Jade';\nfunction outer() {\n  const name = 'Alice';\n  function inner() {\n    console.log(name);\n  }\n  inner();\n}\nouter();",
    options: ['"Jade"', '"Alice"', "undefined", "ReferenceError"],
    answerIndex: 1,
    explanation:
      "inner() cherche name → trouve 'Alice' dans outer() → s'arrête. C'est le shadowing — la variable locale masque la globale. JS ne descend jamais, il remonte.",
  },
  {
    id: "javascript-6-8",
    sectionId: "javascript-6",
    question: "Que retourne ce code ?",
    code: "function greet(name = 'invité') {\n  return `Bonjour ${name}`;\n}\ngreet();",
    options: ["'Bonjour undefined'", "TypeError", "'Bonjour invité'", "'Bonjour '"],
    answerIndex: 2,
    explanation:
      "Un paramètre par défaut (`name = 'invité'`) est utilisé quand l'argument n'est pas fourni du tout (ou vaut `undefined`). Ici, aucun argument n'est passé à `greet()`, donc `name` prend sa valeur par défaut.",
  },
  {
    id: "javascript-6-9",
    sectionId: "javascript-6",
    question: "Que fait `...args` ici ?",
    code: "function sum(...args) {\n  return args.reduce((a, b) => a + b, 0);\n}\nsum(1, 2, 3);",
    options: [
      "Ne garde que le premier argument",
      "Provoque une SyntaxError",
      "Regroupe les arguments dans un objet, pas un tableau",
      "Regroupe tous les arguments dans un vrai tableau `[1, 2, 3]`",
    ],
    answerIndex: 3,
    explanation:
      "Les rest parameters (`...args`) collectent un nombre variable d'arguments dans un vrai tableau, avec toutes les méthodes de tableau disponibles (`reduce`, `map`...) — contrairement à l'ancien objet `arguments`, qui n'est pas un vrai tableau.",
  },
  {
    id: "javascript-6-10",
    sectionId: "javascript-6",
    question: "À quoi sert une IIFE (Immediately Invoked Function Expression) comme celle-ci ?",
    code: "(function () {\n  const secret = 42;\n  console.log(secret);\n})();",
    options: [
      "Créer un scope isolé : `secret` n'existe pas en dehors de cette fonction",
      "Exécuter la fonction en boucle indéfiniment",
      "Rendre la fonction accessible globalement",
      "Empêcher la fonction de s'exécuter",
    ],
    answerIndex: 0,
    explanation:
      "Une IIFE s'exécute immédiatement après sa définition, et crée son propre scope de fonction. C'était un pattern courant avant les modules ES pour éviter de polluer le scope global avec des variables temporaires.",
  },
];

export { jsFunctionsQuestions };
