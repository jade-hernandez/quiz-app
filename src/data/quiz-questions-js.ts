import type { QuizQuestion } from "../types";

const jsQuestions: QuizQuestion[] = [
  // SECTION 1 — PRIMITIVES
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
    sectionId: 1,
    sectionLabel: "Primitives",
    question: "Que retourne typeof NaN ?",
    options: ['"NaN"', '"undefined"', '"number"', '"boolean"'],
    answerIndex: 2,
    explanation:
      "NaN est de type 'number' — une des grandes bizarreries de JS. NaN est le résultat d'une opération mathématique invalide, dans le domaine du number.",
  },
  {
    sectionId: 1,
    sectionLabel: "Primitives",
    question: "Que retourne NaN === NaN ?",
    options: ["true", "false", "undefined", "TypeError"],
    answerIndex: 1,
    explanation:
      "NaN est la seule valeur en JS qui n'est pas égale à elle-même ! Pour vérifier si une valeur est NaN, on utilise Number.isNaN().",
  },
  {
    sectionId: 1,
    sectionLabel: "Primitives",
    question: "Laquelle de ces valeurs est truthy ?",
    options: ['""', "0", "[]", "null"],
    answerIndex: 2,
    explanation:
      "Un tableau vide [] est toujours truthy ! Les 6 valeurs falsy : false, null, undefined, NaN, 0, ''.",
  },
  {
    sectionId: 1,
    sectionLabel: "Primitives",
    question: "Quelle est la différence entre null et undefined ?",
    options: [
      "Aucune différence",
      "null = absence volontaire / undefined = JS ne sait pas encore",
      "undefined = absence volontaire / null = JS ne sait pas encore",
      "null est un number",
    ],
    answerIndex: 1,
    explanation:
      "null → toi tu décides qu'il n'y a rien (volontaire). undefined → JS te dit qu'il ne sait pas encore (pas encore assigné).",
  },
  {
    sectionId: 1,
    sectionLabel: "Primitives",
    question: "Que retourne 0.1 + 0.2 ?",
    options: ["0.3", "0.30000000000000004", "NaN", "0.03"],
    answerIndex: 1,
    explanation:
      "Problème de précision des nombres flottants en binaire — certains décimaux ne peuvent pas être représentés exactement.",
  },
  {
    sectionId: 1,
    sectionLabel: "Primitives",
    question: "Que retourne ce code ?",
    code: "let name = 'jade';\nname[0] = 'J';\nconsole.log(name);",
    options: ['"Jade"', '"jade"', "TypeError", "undefined"],
    answerIndex: 1,
    explanation:
      "Les strings sont immutables — on ne peut pas modifier un caractère directement. name reste 'jade'. Pour modifier, il faut créer une nouvelle string.",
  },
  {
    sectionId: 1,
    sectionLabel: "Primitives",
    question: "Que retourne Boolean('false') ?",
    options: ["false", "true", "undefined", "TypeError"],
    answerIndex: 1,
    explanation:
      "'false' est une string NON vide → truthy → true. La distinction importante : 'false' (string) ≠ false (boolean).",
  },
  // SECTION 2 — VARIABLES
  {
    sectionId: 2,
    sectionLabel: "Variables",
    question: "Que retourne ce code ?",
    code: "console.log(score);\nvar score = 10;",
    options: ["10", "ReferenceError", "undefined", "TypeError"],
    answerIndex: 2,
    explanation:
      "Hoisting ! var est remontée en haut du scope sans sa valeur → undefined. Pas d'erreur mais un bug silencieux.",
  },
  {
    sectionId: 2,
    sectionLabel: "Variables",
    question: "Que retourne ce code ?",
    code: "console.log(name);\nlet name = 'Jade';",
    options: ["Jade", "undefined", "null", "ReferenceError"],
    answerIndex: 3,
    explanation:
      "let est dans la Temporal Dead Zone — elle existe mais est inaccessible avant sa déclaration → ReferenceError.",
  },
  {
    sectionId: 2,
    sectionLabel: "Variables",
    question: "Que retourne ce code ?",
    code: "const user = { name: 'Jade' };\nuser.name = 'Alice';\nconsole.log(user.name);",
    options: ["Jade", "TypeError", "undefined", "Alice"],
    answerIndex: 3,
    explanation:
      "const protège le contenant, pas le contenu. On peut modifier les propriétés d'un objet const — on ne peut pas réassigner la variable.",
  },
  {
    sectionId: 2,
    sectionLabel: "Variables",
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
    sectionId: 2,
    sectionLabel: "Variables",
    question: "Qu'est-ce que la Temporal Dead Zone ?",
    options: [
      "Une zone de code jamais exécutée",
      "La période où let/const existent mais sont inaccessibles avant leur déclaration",
      "Une erreur spécifique à var",
      "Le temps que met JS à compiler",
    ],
    answerIndex: 1,
    explanation:
      "La TDZ est la période entre le début du scope et la déclaration de let/const — pendant laquelle la variable est inaccessible → ReferenceError.",
  },
  {
    sectionId: 2,
    sectionLabel: "Variables",
    question: "Que retourne ce code ?",
    code: "for (var i = 0; i < 3; i++) {}\nconsole.log(i);",
    options: ["ReferenceError", "undefined", "3", "0"],
    answerIndex: 2,
    explanation:
      "var s'échappe de la boucle car elle a un function scope. i vaut 3 après la boucle. Avec let, ce serait une ReferenceError.",
  },
  // SECTION 3 — OPÉRATEURS
  {
    sectionId: 3,
    sectionLabel: "Opérateurs",
    question: "Que retourne ce code ?",
    code: '"5" + 3 + 2',
    options: ["10", '"532"', '"55"', "NaN"],
    answerIndex: 1,
    explanation:
      "'5' + 3 → '53' (concaténation car string). '53' + 2 → '532'. Seul + déclenche la concaténation avec une string.",
  },
  {
    sectionId: 3,
    sectionLabel: "Opérateurs",
    question: "Que retourne ce code ?",
    code: '"5" - 3',
    options: ['"53"', '"2"', "2", "NaN"],
    answerIndex: 2,
    explanation:
      "- convertit '5' en number → 5 - 3 = 2. Contrairement à +, les autres opérateurs arithmétiques forcent la conversion en number.",
  },
  {
    sectionId: 3,
    sectionLabel: "Opérateurs",
    question: "Que retourne ce code ?",
    code: "0 ?? 'défaut'\nfalse ?? 'défaut'",
    options: [
      "'défaut' et 'défaut'",
      "0 et false",
      "'défaut' et false",
      "0 et 'défaut'",
    ],
    answerIndex: 1,
    explanation:
      "?? ne se déclenche que sur null et undefined. 0 et false ne sont ni l'un ni l'autre → retourne 0 et false.",
  },
  {
    sectionId: 3,
    sectionLabel: "Opérateurs",
    question: "Que retourne ce code ?",
    code: '"10" > "9"',
    options: ["true", "false", "NaN", "TypeError"],
    answerIndex: 1,
    explanation:
      "Les deux sont des strings → JS compare caractère par caractère. '1' vient avant '9' en ASCII → false. Pas une comparaison numérique !",
  },
  {
    sectionId: 3,
    sectionLabel: "Opérateurs",
    question: "Que retourne ce code ?",
    code: "const user = null;\nuser?.address?.city ?? 'Inconnue'",
    options: ["TypeError", "null", '"Inconnue"', "undefined"],
    answerIndex: 2,
    explanation:
      "user est null → user?.address retourne undefined → undefined ?? 'Inconnue' → 'Inconnue'. ?. et ?? font une équipe parfaite !",
  },
  {
    sectionId: 3,
    sectionLabel: "Opérateurs",
    question: "Quelle est la différence entre == et === ?",
    options: [
      "Aucune",
      "=== fait une coercition de type",
      "== fait une coercition de type / === compare valeur ET type sans conversion",
      "== est plus récent",
    ],
    answerIndex: 2,
    explanation:
      "== est l'égalité faible — JS convertit les types avant de comparer. === est stricte — compare valeur ET type sans conversion. Toujours utiliser ===.",
  },
  {
    sectionId: 3,
    sectionLabel: "Opérateurs",
    question: "Que retourne ce code ?",
    code: "true + true + true",
    options: ["true", '"truetruetrue"', "3", "NaN"],
    answerIndex: 2,
    explanation:
      "true est converti en 1 par coercition numérique. 1 + 1 + 1 = 3. false vaudrait 0.",
  },
  // SECTION 4 — CONDITIONS
  {
    sectionId: 4,
    sectionLabel: "Conditions",
    question: "Que retourne ce code ?",
    code: 'const jour = "lundi";\nswitch (jour) {\n  case "lundi":\n    console.log("A");\n  case "mardi":\n    console.log("B");\n  default:\n    console.log("C");\n}',
    options: [
      '"A" uniquement',
      '"A" et "B"',
      '"A", "B" et "C"',
      '"C" uniquement',
    ],
    answerIndex: 2,
    explanation:
      "Pas de break → fallthrough ! JS exécute 'lundi' puis continue sur 'mardi' et default. Les 3 messages sont affichés.",
  },
  {
    sectionId: 4,
    sectionLabel: "Conditions",
    question: "Lequel de ces if s'exécute ?",
    options: ['if ("false")', "if (0)", "if (null)", "if (undefined)"],
    answerIndex: 0,
    explanation:
      "'false' est une string NON vide → truthy → s'exécute. 0, null et undefined sont falsy.",
  },
  {
    sectionId: 4,
    sectionLabel: "Conditions",
    question:
      "Pourquoi ne peut-on pas utiliser if...else directement dans le JSX React ?",
    options: [
      "React ne supporte pas if...else",
      "if...else est une instruction qui ne retourne rien — JSX a besoin d'expressions",
      "if...else est trop lent",
      "Il faut toujours utiliser switch en React",
    ],
    answerIndex: 1,
    explanation:
      "JSX n'accepte que des expressions dans {}. if...else est une instruction sans valeur de retour. Le ternaire et && sont des expressions.",
  },
  {
    sectionId: 4,
    sectionLabel: "Conditions",
    question:
      "Que se passe-t-il dans le DOM React avec ce code quand count = 0 ?",
    code: "{count && <p>{count}</p>}",
    options: [
      "Rien n'est affiché",
      "Le composant <p> s'affiche",
      "0 est affiché dans le DOM",
      "Une erreur est lancée",
    ],
    answerIndex: 2,
    explanation:
      "0 est falsy → && retourne 0. React affiche les nombres dans le DOM → '0' apparaît. Solution : {count > 0 && <p>{count}</p>}.",
  },
  {
    sectionId: 4,
    sectionLabel: "Conditions",
    question: "Dans quel cas utilise-t-on switch plutôt que if...else ?",
    options: [
      "Quand on a des conditions complexes avec &&, ||",
      "Quand on discrimine sur une même variable contre plusieurs valeurs égales",
      "Quand on a 2 cas seulement",
      "switch est toujours meilleur",
    ],
    answerIndex: 1,
    explanation:
      "switch brille quand on compare une même variable à plusieurs valeurs — plus lisible qu'une longue chaîne de else if. C'est pour ça qu'il va bien avec useReducer.",
  },
  // SECTION 5 — BOUCLES
  {
    sectionId: 5,
    sectionLabel: "Boucles",
    question: "Quelle est la différence entre for...of et for...in ?",
    options: [
      "Aucune",
      "for...of → clés / for...in → valeurs",
      "for...of → valeurs d'un tableau / for...in → clés d'un objet",
      "for...in est plus récent",
    ],
    answerIndex: 2,
    explanation:
      "for...of parcourt les valeurs d'un tableau. for...in parcourt les clés d'un objet. Astuce : of = des valeurs de / in = à l'intérieur des clés de.",
  },
  {
    sectionId: 5,
    sectionLabel: "Boucles",
    question: "Que retourne ce code ?",
    code: "const result = [1, 2, 3].forEach(n => n * 2);",
    options: ["[2, 4, 6]", "undefined", "[1, 2, 3]", "6"],
    answerIndex: 1,
    explanation:
      "forEach retourne toujours undefined — il a été conçu pour les effets de bord, pas pour transformer des données. Pour [2, 4, 6], utiliser .map().",
  },
  {
    sectionId: 5,
    sectionLabel: "Boucles",
    question: "Pourquoi utilise-t-on map() plutôt que forEach() en React ?",
    options: [
      "map() est plus rapide",
      "forEach() ne fonctionne pas avec les tableaux",
      "map() retourne un tableau de composants que React peut afficher",
      "Par convention",
    ],
    answerIndex: 2,
    explanation:
      "forEach() retourne undefined → React n'a rien à afficher. map() retourne un nouveau tableau de composants que React peut rendre dans le JSX.",
  },
  {
    sectionId: 5,
    sectionLabel: "Boucles",
    question: "Que retourne ce code ?",
    code: "let i = 10;\ndo {\n  console.log('exécuté');\n} while (i < 5);",
    options: [
      "Rien",
      "'exécuté' — une fois",
      "Boucle infinie",
      "ReferenceError",
    ],
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
      "React n'accepte pas les numbers",
      "Si la liste est réordonnée, l'index change et React peut confondre les éléments",
      "L'index n'est pas unique",
    ],
    answerIndex: 2,
    explanation:
      "Si la liste est réordonnée ou filtrée, l'index change et React peut confondre les éléments → bugs visuels. Il faut toujours un id unique et stable.",
  },
  // SECTION 6 — FONCTIONS
  {
    sectionId: 6,
    sectionLabel: "Fonctions",
    question: "Laquelle peut être appelée avant sa déclaration ?",
    code: "// A\nfunction add(a, b) { return a + b; }\n\n// B\nconst add = function(a, b) { return a + b; };\n\n// C\nconst add = (a, b) => a + b;",
    options: ["A uniquement", "B uniquement", "C uniquement", "B et C"],
    answerIndex: 0,
    explanation:
      "Seule la déclaration de fonction (A) est entièrement hoistée — nom ET corps. Les expressions (B) et arrow functions (C) sont soumises à la TDZ.",
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
  {
    sectionId: 6,
    sectionLabel: "Fonctions",
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
    sectionId: 6,
    sectionLabel: "Fonctions",
    question: "Qu'est-ce qu'une closure ?",
    options: [
      "Une fonction qui ne retourne rien",
      "Une fonction qui se souvient des variables de son scope parent même après son exécution",
      "Une fonction dans le scope global",
      "Une fonction sans paramètres",
    ],
    answerIndex: 1,
    explanation:
      "Une closure capture les variables de son scope parent dans son 'sac à dos' et s'en souvient même après que ce scope a fini de s'exécuter.",
  },
  {
    sectionId: 6,
    sectionLabel: "Fonctions",
    question: "Que retourne ce code ?",
    code: "function creerCompteur() {\n  let count = 0;\n  return () => ++count;\n}\nconst c = creerCompteur();\nc(); c();\nconsole.log(c());",
    options: ["1", "2", "3", "undefined"],
    answerIndex: 2,
    explanation:
      "++count incrémente PUIS retourne. Après 3 appels → count = 3. La closure maintient count en vie entre les appels.",
  },
  {
    sectionId: 6,
    sectionLabel: "Fonctions",
    question: "Que retourne ce code ?",
    code: "function getDiscount(user) {\n  if (!user) return 0;\n  if (user.isPremium) return 0.3;\n  return 0.1;\n}\ngetDiscount(null);",
    options: ["0.1", "0.3", "0", "undefined"],
    answerIndex: 2,
    explanation:
      "null est falsy → !user est true → early return → retourne 0. C'est le pattern early return — sortir tôt sans évaluer le reste.",
  },
  {
    sectionId: 6,
    sectionLabel: "Fonctions",
    question: "Que retourne ce code ?",
    code: "const name = 'Jade';\nfunction outer() {\n  const name = 'Alice';\n  function inner() {\n    console.log(name);\n  }\n  inner();\n}\nouter();",
    options: ['"Jade"', '"Alice"', "undefined", "ReferenceError"],
    answerIndex: 1,
    explanation:
      "inner() cherche name → trouve 'Alice' dans outer() → s'arrête. C'est le shadowing — la variable locale masque la globale. JS ne descend jamais, il remonte.",
  },
  // SECTION 7 — TABLEAUX
  {
    sectionId: 7,
    sectionLabel: "Tableaux",
    question: "Quelle est la différence entre filter() et find() ?",
    options: [
      "Aucune",
      "filter() retourne un tableau de tous les éléments correspondants / find() retourne le premier ou undefined",
      "find() retourne un tableau / filter() retourne un élément",
      "filter() modifie l'original",
    ],
    answerIndex: 1,
    explanation:
      "filter() retourne TOUJOURS un tableau. find() retourne UN seul élément (le premier) ou undefined si rien ne correspond.",
  },
  {
    sectionId: 7,
    sectionLabel: "Tableaux",
    question: "Que retourne findIndex() si aucun élément ne correspond ?",
    options: ["undefined", "null", "-1", "false"],
    answerIndex: 2,
    explanation:
      "findIndex() retourne -1 si aucun élément ne correspond — pas undefined comme find(). C'est une distinction importante !",
  },
  {
    sectionId: 7,
    sectionLabel: "Tableaux",
    question: "Que retourne ce code ?",
    code: "const numbers = [1, 2, 3, 4, 5];\nconst total = numbers.reduce((acc, val) => acc + val, 0);",
    options: ["[1, 2, 3, 4, 5]", "undefined", "15", "5"],
    answerIndex: 2,
    explanation:
      "reduce() additionne : 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15. L'accumulateur part de 0 et s'accumule à chaque tour.",
  },
  {
    sectionId: 7,
    sectionLabel: "Tableaux",
    question: "Que retourne push() ?",
    options: [
      "Le nouvel élément ajouté",
      "Un nouveau tableau",
      "La nouvelle longueur du tableau",
      "undefined",
    ],
    answerIndex: 2,
    explanation:
      "push() retourne la NOUVELLE LONGUEUR du tableau et modifie l'original. Pour créer un nouveau tableau, on utilise le spread operator.",
  },
  {
    sectionId: 7,
    sectionLabel: "Tableaux",
    question: "Que retourne ce code ?",
    code: "const fruits = ['pomme', 'banane', 'cerise', 'mangue'];\nfruits.slice(1, 3);",
    options: [
      '["pomme", "banane"]',
      '["banane", "cerise"]',
      '["cerise", "mangue"]',
      '["banane", "cerise", "mangue"]',
    ],
    answerIndex: 1,
    explanation:
      "slice(1, 3) commence à l'index 1 (inclus) et s'arrête à l'index 3 (exclus) → ['banane', 'cerise'].",
  },
  {
    sectionId: 7,
    sectionLabel: "Tableaux",
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
    sectionId: 7,
    sectionLabel: "Tableaux",
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
  // SECTION 8 — OBJETS
  {
    sectionId: 8,
    sectionLabel: "Objets",
    question: "Que retourne ce code ?",
    code: "const user = { name: 'Wayne' };\nconst { name, city = 'Gotham' } = user;\nconsole.log(city);",
    options: ["undefined", "null", '"Gotham"', "ReferenceError"],
    answerIndex: 2,
    explanation:
      "city n'existe pas dans user → JS utilise la valeur par défaut 'Gotham'. Sans valeur par défaut, ce serait undefined.",
  },
  {
    sectionId: 8,
    sectionLabel: "Objets",
    question: "Que retourne ce code ?",
    code: "const user = { name: 'Wayne' };\nconst { name: userName } = user;\nconsole.log(userName);\nconsole.log(name);",
    options: [
      '"Wayne" et "Wayne"',
      '"Wayne" et ReferenceError',
      "ReferenceError et ReferenceError",
      'undefined et "Wayne"',
    ],
    answerIndex: 1,
    explanation:
      "Le renommage { name: userName } crée userName avec la valeur de name. La variable name n'existe pas dans ce scope → ReferenceError.",
  },
  {
    sectionId: 8,
    sectionLabel: "Objets",
    question: "Que retourne ce code ?",
    code: "const user1 = { name: 'Wayne' };\nconst user2 = user1;\nuser2.name = 'Clark';\nconsole.log(user1.name);",
    options: ['"Wayne"', '"Clark"', "undefined", "TypeError"],
    answerIndex: 1,
    explanation:
      "Passage par référence — user2 = user1 ne copie pas l'objet. Les deux pointent vers le même objet en mémoire. Modifier user2.name modifie aussi user1.name.",
  },
  {
    sectionId: 8,
    sectionLabel: "Objets",
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
    sectionId: 8,
    sectionLabel: "Objets",
    question: "Que retourne Object.entries({ name: 'Wayne', age: 35 }) ?",
    options: [
      '["name", "age"]',
      '["Wayne", 35]',
      '[["name", "Wayne"], ["age", 35]]',
      '{ name: "Wayne", age: 35 }',
    ],
    answerIndex: 2,
    explanation:
      "Object.entries() retourne un tableau de paires [clé, valeur]. Très utile combiné avec map() pour transformer un objet.",
  },
  {
    sectionId: 8,
    sectionLabel: "Objets",
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
    sectionId: 8,
    sectionLabel: "Objets",
    question: "Que retourne ce code ?",
    code: "const fruits = ['pomme', 'banane', 'cerise'];\nconst [first, ...rest] = fruits;\nconsole.log(rest);",
    options: [
      '"banane"',
      '["banane", "cerise"]',
      '["pomme", "banane", "cerise"]',
      "undefined",
    ],
    answerIndex: 1,
    explanation:
      "...rest récupère tous les éléments restants après first. first = 'pomme', rest = ['banane', 'cerise'].",
  },
];

export { jsQuestions };
