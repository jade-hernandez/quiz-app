import type { QuizQuestion } from "../../types";

const jsLoopsQuestions: QuizQuestion[] = [
  {
    sectionId: 5,
    sectionLabel: "Boucles",
    question: "Quelle est la différence entre for...of et for...in ?",
    options: [
      "Aucune",
      "for...of → clés / for...in → valeurs",
      "for...in est plus récent",
      "for...of → valeurs d'un tableau / for...in → clés d'un objet",
    ],
    answerIndex: 3,
    explanation:
      "for...of parcourt les valeurs d'un tableau. for...in parcourt les clés d'un objet. Astuce : of = des valeurs de / in = à l'intérieur des clés de.",
  },
  {
    sectionId: 5,
    sectionLabel: "Boucles",
    question: "Que retourne ce code ?",
    code: "const result = [1, 2, 3].forEach(n => n * 2);",
    options: ["[2, 4, 6]", "[1, 2, 3]", "undefined", "6"],
    answerIndex: 2,
    explanation:
      "forEach retourne toujours undefined — il a été conçu pour les effets de bord, pas pour transformer des données. Pour [2, 4, 6], utiliser .map().",
  },
  {
    sectionId: 5,
    sectionLabel: "Boucles",
    question: "Pourquoi utilise-t-on map() plutôt que forEach() en React ?",
    options: [
      "map() retourne un tableau de composants que React peut afficher",
      "map() est plus rapide",
      "forEach() ne fonctionne pas avec les tableaux",
      "Par convention",
    ],
    answerIndex: 0,
    explanation:
      "forEach() retourne undefined → React n'a rien à afficher. map() retourne un nouveau tableau de composants que React peut rendre dans le JSX.",
  },
  {
    sectionId: 5,
    sectionLabel: "Boucles",
    question: "Que retourne ce code ?",
    code: "let i = 10;\ndo {\n  console.log('exécuté');\n} while (i < 5);",
    options: ["Rien", "'exécuté' — une fois", "Boucle infinie", "ReferenceError"],
    answerIndex: 1,
    explanation:
      "do...while s'exécute toujours au moins une fois avant de vérifier la condition. Même si i = 10 > 5, le bloc s'exécute une fois.",
  },
  {
    sectionId: 5,
    sectionLabel: "Boucles",
    question: "Pourquoi évite-t-on l'index comme key en React ?",
    options: [
      "L'index est lent",
      "Si la liste est réordonnée, l'index change et React peut confondre les éléments",
      "React n'accepte pas les numbers",
      "L'index n'est pas unique",
    ],
    answerIndex: 1,
    explanation:
      "Si la liste est réordonnée ou filtrée, l'index change et React peut confondre les éléments → bugs visuels. Il faut toujours un id unique et stable.",
  },
  {
    sectionId: 5,
    sectionLabel: "Boucles",
    question: "Quelle est la différence entre `break` et `continue` dans une boucle ?",
    options: [
      "`continue` arrête complètement la boucle, `break` passe à l'itération suivante",
      "Les deux arrêtent complètement la boucle",
      "Les deux passent à l'itération suivante",
      "`break` arrête complètement la boucle, `continue` passe seulement à l'itération suivante",
    ],
    answerIndex: 3,
    explanation:
      "`break` sort définitivement de la boucle. `continue` saute uniquement le reste du code de l'itération actuelle, puis continue avec la suivante.",
  },
  {
    sectionId: 5,
    sectionLabel: "Boucles",
    question: "Que fait ce code ?",
    code: "const user = { name: 'Jade', age: 28 };\nfor (const [key, value] of Object.entries(user)) {\n  console.log(key, value);\n}",
    options: [
      "Affiche chaque paire clé/valeur de l'objet : 'name Jade' puis 'age 28'",
      "Affiche uniquement les clés",
      "Affiche uniquement les valeurs",
      "Lève une erreur, for...of ne fonctionne pas sur des objets",
    ],
    answerIndex: 0,
    explanation:
      "`Object.entries()` transforme l'objet en tableau de paires `[clé, valeur]`. La déstructuration `[key, value]` dans le `for...of` extrait chaque paire à chaque itération.",
  },
  {
    sectionId: 5,
    sectionLabel: "Boucles",
    question: "Que retourne ce code ?",
    code: "const arr = Array.from({ length: 3 }, (_, i) => i * 2);",
    options: ["[1, 2, 3]", "[undefined, undefined, undefined]", "[0, 2, 4]", "TypeError"],
    answerIndex: 2,
    explanation:
      "`Array.from({ length: 3 }, callback)` crée un tableau de 3 éléments et applique le callback `(élément, index)` à chacun. Ici `i * 2` pour `i` de 0 à 2 donne `[0, 2, 4]` — un pattern courant pour générer des séquences.",
  },
  {
    sectionId: 5,
    sectionLabel: "Boucles",
    question: "Qu'est-ce qui ne va pas dans ce code ?",
    code: "let i = 0;\nwhile (i < 5) {\n  console.log(i);\n}",
    options: [
      "Rien, le code fonctionne normalement",
      "Boucle infinie : `i` n'est jamais incrémenté",
      "SyntaxError",
      "La boucle ne s'exécute jamais",
    ],
    answerIndex: 1,
    explanation:
      "`i` reste à `0` pour toujours, car rien à l'intérieur du bloc ne l'incrémente. La condition `i < 5` sera donc toujours vraie → boucle infinie qui plantera l'onglet du navigateur.",
  },
  {
    sectionId: 5,
    sectionLabel: "Boucles",
    question: "Que retourne ce code ?",
    code: "const words = ['a', 'b', 'c'];\nconst indexed = words.reduce((acc, word, i) => {\n  acc[word] = i;\n  return acc;\n}, {});",
    options: ["['a', 'b', 'c']", "undefined", "{ 0: 'a', 1: 'b', 2: 'c' }", "{ a: 0, b: 1, c: 2 }"],
    answerIndex: 3,
    explanation:
      "`reduce` ne sert pas qu'à additionner des nombres : ici l'accumulateur part d'un objet vide `{}` et on lui ajoute une clé à chaque tour. C'est un pattern courant pour transformer un tableau en objet indexé.",
  },
];

export { jsLoopsQuestions };
