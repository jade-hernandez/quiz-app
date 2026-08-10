import type { QuizQuestion } from "../../types";

const jsConditionsQuestions: QuizQuestion[] = [
  {
    sectionId: "javascript-4",
    question: "Que retourne ce code ?",
    code: 'const jour = "lundi";\nswitch (jour) {\n  case "lundi":\n    console.log("A");\n  case "mardi":\n    console.log("B");\n  default:\n    console.log("C");\n}',
    options: ['"A" uniquement', '"A", "B" et "C"', '"A" et "B"', '"C" uniquement'],
    answerIndex: 1,
    explanation:
      "Pas de break → fallthrough ! JS exécute 'lundi' puis continue sur 'mardi' et default. Les 3 messages sont affichés.",
  },
  {
    sectionId: "javascript-4",
    question: "Lequel de ces if s'exécute ?",
    options: ["if (0)", "if (null)", "if (undefined)", 'if ("false")'],
    answerIndex: 3,
    explanation:
      "'false' est une string NON vide → truthy → s'exécute. 0, null et undefined sont falsy.",
  },
  {
    sectionId: "javascript-4",
    question: "Pourquoi ne peut-on pas utiliser if...else directement dans le JSX React ?",
    options: [
      "React ne supporte pas if...else",
      "if...else est trop lent",
      "if...else est une instruction qui ne retourne rien — JSX a besoin d'expressions",
      "Il faut toujours utiliser switch en React",
    ],
    answerIndex: 2,
    explanation:
      "JSX n'accepte que des expressions dans {}. if...else est une instruction sans valeur de retour. Le ternaire et && sont des expressions.",
  },
  {
    sectionId: "javascript-4",
    question: "Que se passe-t-il dans le DOM React avec ce code quand count = 0 ?",
    code: "{count && <p>{count}</p>}",
    options: [
      "0 est affiché dans le DOM",
      "Rien n'est affiché",
      "Le composant <p> s'affiche",
      "Une erreur est lancée",
    ],
    answerIndex: 0,
    explanation:
      "0 est falsy → && retourne 0. React affiche les nombres dans le DOM → '0' apparaît. Solution : {count > 0 && <p>{count}</p>}.",
  },
  {
    sectionId: "javascript-4",
    question: "Dans quel cas utilise-t-on switch plutôt que if...else ?",
    options: [
      "Quand on a des conditions complexes avec &&, ||",
      "Quand on a 2 cas seulement",
      "switch est toujours meilleur",
      "Quand on discrimine sur une même variable contre plusieurs valeurs égales",
    ],
    answerIndex: 3,
    explanation:
      "switch brille quand on compare une même variable à plusieurs valeurs — plus lisible qu'une longue chaîne de else if. C'est pour ça qu'il va bien avec useReducer.",
  },
  {
    sectionId: "javascript-4",
    question: "Ce code affiche-t-il le message ?",
    code: "if ({}) {\n  console.log('exécuté');\n}",
    options: [
      "Oui : un objet, même vide, est toujours truthy",
      "Non : un objet vide est falsy",
      "Cela lève une erreur",
      "Cela dépend du moteur JavaScript",
    ],
    answerIndex: 0,
    explanation:
      "Comme pour le tableau vide `[]`, un objet vide `{}` est truthy. Seules 6 valeurs sont falsy en JS : `false, 0, '', null, undefined, NaN` — un objet n'en fait jamais partie, peu importe son contenu.",
  },
  {
    sectionId: "javascript-4",
    question: "Que retourne ce code ?",
    code: "const note = 15;\nconst mention = note >= 16 ? 'Très bien' : note >= 14 ? 'Bien' : 'Assez bien';",
    options: ["'Très bien'", "'Bien'", "'Assez bien'", "undefined"],
    answerIndex: 1,
    explanation:
      "Les ternaires imbriqués s'évaluent de gauche à droite : `note >= 16` est faux (15 < 16), on passe au ternaire suivant `note >= 14` qui est vrai → 'Bien'. Pratique mais à utiliser avec parcimonie pour la lisibilité.",
  },
  {
    sectionId: "javascript-4",
    question: "Que retourne ce code ?",
    code: "const id = '3';\nswitch (id) {\n  case 3:\n    console.log('trouvé');\n    break;\n  default:\n    console.log('non trouvé');\n}",
    options: ["'trouvé'", "Les deux messages s'affichent", "'non trouvé'", "TypeError"],
    answerIndex: 2,
    explanation:
      "`switch` compare avec `===` (égalité stricte), sans coercition de type. `'3'` (string) n'est pas strictement égal à `3` (number), donc aucun `case` ne correspond et c'est le `default` qui s'exécute.",
  },
  {
    sectionId: "javascript-4",
    question:
      "Dans une chaîne `if / else if / else`, combien de blocs peuvent s'exécuter au maximum pour un seul passage ?",
    options: [
      "Tous ceux dont la condition est vraie",
      "Aucun, sauf le dernier else",
      "Cela dépend du nombre de conditions",
      "Un seul : dès qu'une condition est vraie, les suivantes ne sont plus testées",
    ],
    answerIndex: 3,
    explanation:
      "`if / else if / else` s'arrête au premier bloc vrai — contrairement à plusieurs `if` indépendants, qui testeraient chacun leur condition sans lien avec les autres.",
  },
  {
    sectionId: "javascript-4",
    question: "Que retourne ce code si `user` vaut `null` ?",
    code: "const user = null;\nif (user?.isAdmin) {\n  console.log('accès admin');\n} else {\n  console.log('accès refusé');\n}",
    options: [
      "TypeError: Cannot read properties of null",
      "'accès refusé', sans erreur",
      "'accès admin'",
      "undefined",
    ],
    answerIndex: 1,
    explanation:
      "`user?.isAdmin` retourne `undefined` si `user` est `null`, sans lever d'erreur. `undefined` est falsy, donc la condition du `if` échoue et on passe dans le `else`.",
  },
];

export { jsConditionsQuestions };
