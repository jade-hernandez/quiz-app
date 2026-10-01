import type { QuizQuestion } from "../../types";

const jsObjectsQuestions: QuizQuestion[] = [
  {
    id: "javascript-8-1",
    sectionId: "javascript-8",
    question: "Que retourne ce code ?",
    code: "const user = { name: 'Wayne' };\nconst { name, city = 'Gotham' } = user;\nconsole.log(city);",
    options: ["undefined", '"Gotham"', "null", "ReferenceError"],
    answerIndex: 1,
    explanation:
      "city n'existe pas dans user → JS utilise la valeur par défaut 'Gotham'. Sans valeur par défaut, ce serait undefined.",
  },
  {
    id: "javascript-8-2",
    sectionId: "javascript-8",
    question: "Que retourne ce code ?",
    code: "const user = { name: 'Wayne' };\nconst { name: userName } = user;\nconsole.log(userName);\nconsole.log(name);",
    options: [
      '"Wayne" et ReferenceError',
      '"Wayne" et "Wayne"',
      "ReferenceError et ReferenceError",
      'undefined et "Wayne"',
    ],
    answerIndex: 0,
    explanation:
      "Le renommage { name: userName } crée userName avec la valeur de name. La variable name n'existe pas dans ce scope → ReferenceError.",
  },
  {
    id: "javascript-8-3",
    sectionId: "javascript-8",
    question: "Que retourne ce code ?",
    code: "const user1 = { name: 'Wayne' };\nconst user2 = user1;\nuser2.name = 'Clark';\nconsole.log(user1.name);",
    options: ['"Wayne"', "undefined", "TypeError", '"Clark"'],
    answerIndex: 3,
    explanation:
      "Passage par référence — user2 = user1 ne copie pas l'objet. Les deux pointent vers le même objet en mémoire. Modifier user2.name modifie aussi user1.name.",
  },
  {
    id: "javascript-8-4",
    sectionId: "javascript-8",
    question: "Quelle est la différence entre shallow copy et deep copy ?",
    options: [
      "Aucune",
      "Shallow copy ne copie que les primitives / deep copy copie tout",
      "Shallow copy copie les propriétés simples mais partage les objets imbriqués / deep copy est complètement indépendante",
      "Deep copy est plus lente mais identique",
    ],
    answerIndex: 2,
    explanation:
      "Shallow copy {...obj} copie 1 niveau — les objets imbriqués sont partagés. Deep copy structuredClone() copie tout — complètement indépendante.",
  },
  {
    id: "javascript-8-5",
    sectionId: "javascript-8",
    question: "Que retourne Object.entries({ name: 'Wayne', age: 35 }) ?",
    options: [
      '["name", "age"]',
      '["Wayne", 35]',
      '{ name: "Wayne", age: 35 }',
      '[["name", "Wayne"], ["age", 35]]',
    ],
    answerIndex: 3,
    explanation:
      "Object.entries() retourne un tableau de paires [clé, valeur]. Très utile combiné avec map() pour transformer un objet.",
  },
  {
    id: "javascript-8-6",
    sectionId: "javascript-8",
    question: "Que fait ...rest dans ce composant React ?",
    code: "function Button({ label, ...rest }) {\n  return <button {...rest}>{label}</button>;\n}",
    options: [
      "Il copie le composant",
      "Il récupère toutes les props sauf label et les passe au bouton HTML",
      "Il spread label dans le bouton",
      "Il crée une copie de label",
    ],
    answerIndex: 1,
    explanation:
      "...rest récupère toutes les props non déstructurées (onClick, className, etc.) et {...rest} les étale sur le bouton. Pattern très courant en React.",
  },
  {
    id: "javascript-8-7",
    sectionId: "javascript-8",
    question: "Que retourne ce code ?",
    code: "const fruits = ['pomme', 'banane', 'cerise'];\nconst [first, ...rest] = fruits;\nconsole.log(rest);",
    options: ['"banane"', '["pomme", "banane", "cerise"]', '["banane", "cerise"]', "undefined"],
    answerIndex: 2,
    explanation:
      "...rest récupère tous les éléments restants après first. first = 'pomme', rest = ['banane', 'cerise'].",
  },
  {
    id: "javascript-8-8",
    sectionId: "javascript-8",
    question: "Que retourne ce code si `user.address` n'existe pas ?",
    code: "const user = { name: 'Wayne' };\nconsole.log(user.address?.city);",
    options: [
      "undefined, sans erreur",
      "TypeError: Cannot read properties of undefined",
      "null",
      "''",
    ],
    answerIndex: 0,
    explanation:
      "`?.` (optional chaining) vérifie chaque étape avant de continuer : si `user.address` est `undefined`, l'expression s'arrête et retourne `undefined` au lieu de planter en essayant de lire `.city` sur `undefined`.",
  },
  {
    id: "javascript-8-9",
    sectionId: "javascript-8",
    question: "Que se passe-t-il avec ce code ?",
    code: "const user = Object.freeze({ name: 'Wayne' });\nuser.name = 'Clark';\nconsole.log(user.name);",
    options: [
      "'Clark' : Object.freeze n'a aucun effet",
      "TypeError est levée",
      "'Wayne' : Object.freeze empêche la modification des propriétés",
      "undefined",
    ],
    answerIndex: 2,
    explanation:
      "`Object.freeze()` rend l'objet immuable en mode silencieux (sans erreur, sauf en mode strict) : la tentative de modification est simplement ignorée, `user.name` reste `'Wayne'`. Attention : c'est une immutabilité superficielle (shallow), les objets imbriqués restent modifiables.",
  },
  {
    id: "javascript-8-10",
    sectionId: "javascript-8",
    question: "Que retourne ce code ?",
    code: "const key = 'age';\nconst user = { name: 'Jade', [key]: 28 };\nconsole.log(user.age);",
    options: ["28", "undefined", "'age'", "SyntaxError"],
    answerIndex: 0,
    explanation:
      "Les crochets `[key]` dans un objet littéral créent une clé calculée : la valeur de la variable `key` ('age') devient le nom de la propriété. C'est utile quand le nom d'une clé dépend d'une variable, plutôt que d'être fixe.",
  },
];

export { jsObjectsQuestions };
