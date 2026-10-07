import type { Question } from "../../../domain/question.ts";

const jsOperatorsQuestions: readonly Question[] = [
  {
    id: "javascript-3-1",
    sectionId: "javascript-3",
    question: "Que retourne ce code ?",
    code: '"5" + 3 + 2',
    options: ["10", '"532"', '"55"', "NaN"],
    answerIndex: 1,
    explanation:
      "'5' + 3 → '53' (concaténation car string). '53' + 2 → '532'. Seul + déclenche la concaténation avec une string.",
  },
  {
    id: "javascript-3-2",
    sectionId: "javascript-3",
    question: "Que retourne ce code ?",
    code: '"5" - 3',
    options: ['"53"', '"2"', "NaN", "2"],
    answerIndex: 3,
    explanation:
      "- convertit '5' en number → 5 - 3 = 2. Contrairement à +, les autres opérateurs arithmétiques forcent la conversion en number.",
  },
  {
    id: "javascript-3-3",
    sectionId: "javascript-3",
    question: "Que retourne ce code ?",
    code: "0 ?? 'défaut'\nfalse ?? 'défaut'",
    options: [
      "'défaut' et 'défaut'",
      "'défaut' et false",
      "0 et false",
      "0 et 'défaut'",
    ],
    answerIndex: 2,
    explanation:
      "?? ne se déclenche que sur null et undefined. 0 et false ne sont ni l'un ni l'autre → retourne 0 et false.",
  },
  {
    id: "javascript-3-4",
    sectionId: "javascript-3",
    question: "Que retourne ce code ?",
    code: '"10" > "9"',
    options: ["false", "true", "NaN", "TypeError"],
    answerIndex: 0,
    explanation:
      "Les deux sont des strings → JS compare caractère par caractère. '1' vient avant '9' en ASCII → false. Pas une comparaison numérique !",
  },
  {
    id: "javascript-3-5",
    sectionId: "javascript-3",
    question: "Que retourne ce code ?",
    code: "const user = null;\nuser?.address?.city ?? 'Inconnue'",
    options: ["TypeError", "null", "undefined", '"Inconnue"'],
    answerIndex: 3,
    explanation:
      "user est null → user?.address retourne undefined → undefined ?? 'Inconnue' → 'Inconnue'. ?. et ?? font une équipe parfaite !",
  },
  {
    id: "javascript-3-6",
    sectionId: "javascript-3",
    question: "Quelle est la différence entre == et === ?",
    options: [
      "== fait une coercition de type / === compare valeur ET type sans conversion",
      "Aucune",
      "=== fait une coercition de type",
      "== est plus récent",
    ],
    answerIndex: 0,
    explanation:
      "== est l'égalité faible — JS convertit les types avant de comparer. === est stricte — compare valeur ET type sans conversion. Toujours utiliser ===.",
  },
  {
    id: "javascript-3-7",
    sectionId: "javascript-3",
    question: "Que retourne ce code ?",
    code: "true + true + true",
    options: ["true", '"truetruetrue"', "3", "NaN"],
    answerIndex: 2,
    explanation:
      "true est converti en 1 par coercition numérique. 1 + 1 + 1 = 3. false vaudrait 0.",
  },
  {
    id: "javascript-3-8",
    sectionId: "javascript-3",
    question: "Que retourne ce code si `user.getName` n'existe pas ?",
    code: "const user = { name: 'Jade' };\nuser.getName?.();",
    options: [
      "TypeError: user.getName is not a function",
      "undefined, sans erreur",
      "null",
      "'Jade'",
    ],
    answerIndex: 1,
    explanation:
      "`?.()` applique l'optional chaining à l'appel de fonction : si `getName` est `undefined` ou `null`, l'expression s'arrête et retourne `undefined` au lieu de lancer une erreur.",
  },
  {
    id: "javascript-3-9",
    sectionId: "javascript-3",
    question: "Que retourne ce code ?",
    code: "console.log(0 || 'valeur par défaut');",
    options: ["0", "'valeur par défaut'", "false", "undefined"],
    answerIndex: 1,
    explanation:
      "`||` retourne son premier opérande truthy. `0` est falsy, donc `||` évalue et retourne le second opérande. C'est le même piège que `??`, mais `||` se déclenche sur TOUTE valeur falsy (pas seulement null/undefined).",
  },
  {
    id: "javascript-3-10",
    sectionId: "javascript-3",
    question: "Que fait `??=` dans ce code ?",
    code: "let config = { theme: null };\nconfig.theme ??= 'dark';",
    options: [
      "Assigne 'dark' dans tous les cas",
      "Assigne 'dark' seulement si theme est falsy (0, '', null...)",
      "Assigne 'dark' seulement si theme est null ou undefined",
      "Provoque une SyntaxError",
    ],
    answerIndex: 2,
    explanation:
      "`??=` est l'affectation logique nullish : elle n'assigne que si la variable vaut `null` ou `undefined`. Ici `theme` vaut `null`, donc `config.theme` devient `'dark'`.",
  },
];

export { jsOperatorsQuestions };
