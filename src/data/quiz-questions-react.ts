import type { QuizQuestion } from "../types";

const reactQuestions: QuizQuestion[] = [
  // Section 1 — React
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
    sectionId: 1,
    sectionLabel: "React",
    question: "Qu'est-ce que la réconciliation ?",
    options: [
      "Le processus de compilation du JSX",
      "Le processus de comparaison entre l'ancien et le nouveau Virtual DOM pour identifier ce qui a changé",
      "La synchronisation des données avec le serveur",
      "Le montage initial d'un composant",
    ],
    answerIndex: 1,
    explanation:
      "La réconciliation est le processus par lequel React compare les deux états du Virtual DOM et ne met à jour que les parties du DOM réel qui ont changé.",
  },

  {
    sectionId: 1,
    sectionLabel: "React",
    question:
      "Laquelle de ces affirmations sur React et les SPAs est correcte ?",
    options: [
      "React est une SPA",
      "React permet de construire des SPAs mais n'est pas une SPA lui-même",
      "Toute app React est obligatoirement une SPA",
      "React ne peut pas construire de SPA",
    ],
    answerIndex: 1,
    explanation:
      "React est un outil. La SPA est un pattern architectural. Avec Next.js, React peut aussi faire du rendu côté serveur.",
  },

  // Section 2 — Composants
  {
    sectionId: 2,
    sectionLabel: "Composants",
    question:
      "Pourquoi le nom d'un composant React doit commencer par une majuscule ?",
    options: [
      "Convention de style sans impact",
      "React l'utilise pour distinguer ses composants des balises HTML natives",
      "JavaScript exige des majuscules pour les classes",
      "TypeScript le requiert",
    ],
    answerIndex: 1,
    explanation:
      "Minuscule = balise HTML native (<div>). Majuscule = composant React (<MonComposant>). React utilise cette convention pour la réconciliation.",
  },

  {
    sectionId: 2,
    sectionLabel: "Composants",
    question: "Qu'est-ce qui a rendu les composants de classe obsolètes ?",
    options: [
      "Meta a décidé de les supprimer",
      "L'introduction des Hooks dans React 16.8",
      "Les classes JS ont été supprimées en ES2020",
      "Next.js ne les supporte plus",
    ],
    answerIndex: 1,
    explanation:
      "Les Hooks (useState, useEffect...) introduits en React 16.8 donnent aux composants fonctionnels toutes les capacités des classes, avec un code plus simple.",
  },

  {
    sectionId: 2,
    sectionLabel: "Composants",
    question: "Quelle règle s'applique obligatoirement aux Hooks ?",
    options: [
      "Ils doivent être dans un fichier séparé",
      "Ils s'appellent uniquement au niveau racine d'un composant — jamais dans un if ou une boucle",
      "Ils ne peuvent être utilisés que dans les composants de classe",
      "Ils doivent toujours recevoir des props",
    ],
    answerIndex: 1,
    explanation:
      "React maintient l'ordre des Hooks entre les rendus. Les appeler dans des conditions ou boucles briserait cet ordre et causerait des bugs imprévisibles.",
  },

  // Section 3 — JSX
  {
    sectionId: 3,
    sectionLabel: "JSX",
    question: "En quoi Babel transforme-t-il le JSX ?",
    options: [
      "En HTML pur",
      "En appels React.createElement()",
      "En JSON",
      "En CSS-in-JS",
    ],
    answerIndex: 1,
    explanation:
      "Babel transforme chaque balise JSX en React.createElement(type, props, enfants). C'est pour ça qu'on appelle JSX du sucre syntaxique.",
  },

  {
    sectionId: 3,
    sectionLabel: "JSX",
    question: "Qu'affiche ce code à l'écran ?",
    code: "const items = [];\nreturn <div>{items.length && <Liste />}</div>;",
    options: ["<Liste /> est rendu", "Rien", "0", "Une erreur"],
    answerIndex: 2,
    explanation:
      "Piège classique ! items.length vaut 0. React affiche 0 car c'est un nombre. Solution : items.length > 0 && <Liste /> pour retourner un booléen.",
  },

  {
    sectionId: 3,
    sectionLabel: "JSX",
    question:
      "Quel est l'avantage de <> </> par rapport à une <div> englobante ?",
    options: [
      "C'est plus rapide à écrire",
      "Le Fragment n'ajoute aucun nœud au DOM réel",
      "Le Fragment supporte plus d'événements",
      "La <div> est interdite comme racine",
    ],
    answerIndex: 1,
    explanation:
      "Un Fragment n'existe que dans le Virtual DOM — aucune trace dans le HTML final. La <div> inutile peut casser le CSS.",
  },

  {
    sectionId: 3,
    sectionLabel: "JSX",
    question: "Pourquoi ne peut-on pas écrire {if (...) {}} dans du JSX ?",
    options: [
      "JSX n'autorise que les ternaires",
      "if est une instruction qui ne retourne pas de valeur — les {} n'acceptent que des expressions",
      "Babel ne supporte pas if",
      "Les accolades n'acceptent que des nombres",
    ],
    answerIndex: 1,
    explanation:
      "Les {} attendent une expression (qui produit une valeur). if est une instruction. On utilise le ternaire condition ? A : B à la place.",
  },

  // Section 4 — Props
  {
    sectionId: 4,
    sectionLabel: "Props",
    question: "Dans quel sens circulent les props ?",
    options: [
      "De l'enfant vers le parent",
      "Dans les deux sens",
      "Toujours du parent vers l'enfant",
      "Entre composants au même niveau",
    ],
    answerIndex: 2,
    explanation:
      "Les props suivent un flux unidirectionnel : toujours du parent vers l'enfant. C'est ce qui rend l'app prévisible et facile à déboguer.",
  },

  {
    sectionId: 4,
    sectionLabel: "Props",
    question:
      "Comment un enfant peut-il déclencher une modification de données dans le parent ?",
    options: [
      "En modifiant directement la prop",
      "En appelant une fonction passée en prop par le parent",
      "En accédant au state du parent",
      "En utilisant localStorage",
    ],
    answerIndex: 1,
    explanation:
      "Le parent passe une fonction en prop. L'enfant l'appelle. Le parent met à jour son state. React re-rend avec les nouvelles props.",
  },

  {
    sectionId: 4,
    sectionLabel: "Props",
    question: "Que vaut la prop age ici ?",
    code: '<Bouton age="28" />',
    options: ["Le nombre 28", 'La string "28"', "undefined", "NaN"],
    answerIndex: 1,
    explanation:
      "Les guillemets produisent une string. Pour passer un nombre, il faut les accolades : age={28}.",
  },

  // Section 5 — State
  {
    sectionId: 5,
    sectionLabel: "State",
    question:
      "Que se passe-t-il si on modifie le state directement sans passer par le setter ?",
    options: [
      "React met quand même l'UI à jour",
      "La variable change mais React n'est pas notifié — interface figée",
      "React lance une erreur",
      "Le composant est détruit",
    ],
    answerIndex: 1,
    explanation:
      "C'est le setter qui notifie React du changement et déclenche le re-rendu. Sans lui, la variable change en mémoire mais l'interface reste figée.",
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
    sectionId: 5,
    sectionLabel: "State",
    question: "Quelle est la bonne façon de mettre à jour uniquement l'âge ?",
    code: "const [user, setUser] = useState({ nom: 'Jade', age: 28 });",
    options: [
      "setUser({ age: 29 })",
      "setUser({ ...user, age: 29 })",
      "user.age = 29; setUser(user)",
      "setUser(prev => prev.age = 29)",
    ],
    answerIndex: 1,
    explanation:
      "Le spread crée un nouvel objet avec toutes les propriétés existantes + l'âge écrasé. Nouvelle référence = React détecte le changement.",
  },

  // Section 6 — useEffect
  {
    sectionId: 6,
    sectionLabel: "useEffect",
    question:
      "Quand s'exécute un useEffect avec un tableau de dépendances vide [] ?",
    options: [
      "À chaque rendu",
      "Une seule fois au montage du composant",
      "Uniquement au démontage",
      "Jamais",
    ],
    answerIndex: 1,
    explanation:
      "Le tableau vide signifie aucune dépendance — l'effet s'exécute une seule fois au montage. C'est le pattern typique d'un appel API initial.",
  },

  {
    sectionId: 6,
    sectionLabel: "useEffect",
    question: "C'est quoi le cleanup dans useEffect et quand s'exécute-t-il ?",
    options: [
      "Une fonction pour réinitialiser le state au montage",
      "Une fonction retournée par le setup qui s'exécute au démontage ou avant chaque ré-exécution",
      "Un argument optionnel de useEffect",
      "Un Hook séparé useCleanup()",
    ],
    answerIndex: 1,
    explanation:
      "Le cleanup évite les memory leaks. Il s'exécute quand le composant est démonté ET avant chaque nouvelle exécution de l'effet si les dépendances changent.",
  },

  {
    sectionId: 6,
    sectionLabel: "useEffect",
    question: "Qu'est-ce qui ne va pas dans ce useEffect ?",
    code: "function Profil({ userId }) {\n  useEffect(() => {\n    fetch(`/api/users/${userId}`)\n      .then(r => r.json())\n      .then(d => setUser(d));\n  }, []);\n}",
    options: [
      "fetch ne peut pas être utilisé dans useEffect",
      "Il faut un cleanup",
      "userId est utilisé dans l'effet mais absent des dépendances — les données ne se mettent pas à jour si userId change",
      "useState doit être avant useEffect",
    ],
    answerIndex: 2,
    explanation:
      "Toute valeur utilisée dans useEffect qui peut changer doit être dans le tableau. Sans userId dans les dépendances, l'effet ne se ré-exécute pas si userId change.",
  },

  // Section 7 — Listes & Clés
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

  {
    sectionId: 7,
    sectionLabel: "Listes & Clés",
    question: "Pourquoi évite-t-on l'index comme key ?",
    options: [
      "L'index est toujours undefined",
      "Si la liste change (ajout, suppression, réordonnancement), les index changent et React peut mal identifier les éléments",
      "React interdit l'index comme key",
      "L'index n'est pas unique",
    ],
    answerIndex: 1,
    explanation:
      "Si un élément est supprimé, tous les index suivants changent. React voit les mêmes keys mais des éléments différents — erreurs de rendu possibles.",
  },

  {
    sectionId: 7,
    sectionLabel: "Listes & Clés",
    question: "La prop key est-elle accessible dans le composant enfant ?",
    options: [
      "Oui, comme n'importe quelle prop",
      "Non — key est réservée par React et n'est jamais transmise à l'enfant",
      "Oui, mais seulement en TypeScript",
      "Seulement avec propTypes",
    ],
    answerIndex: 1,
    explanation:
      "key est une prop réservée par React pour la réconciliation. Elle vaut undefined si on essaie d'y accéder dans l'enfant. Pour l'utiliser dans l'enfant, on la passe en prop séparée.",
  },

  // Section 8 — Événements
  {
    sectionId: 8,
    sectionLabel: "Événements",
    question: "Que se passe-t-il avec ce code ?",
    code: "<button onClick={handleClick()}>Cliquer</button>",
    options: [
      "handleClick s'exécute au clic",
      "handleClick s'exécute immédiatement au rendu — pas au clic",
      "React affiche une erreur",
      "Les parenthèses sont ignorées",
    ],
    answerIndex: 1,
    explanation:
      "Avec les parenthèses, on appelle la fonction au rendu. Sans parenthèses {handleClick}, on passe une référence que React appellera au clic.",
  },

  {
    sectionId: 8,
    sectionLabel: "Événements",
    question: "Que s'affiche dans la console au clic sur le bouton ?",
    code: "<div onClick={() => console.log('parent')}>\n  <button onClick={() => console.log('bouton')}>\n    Cliquer\n  </button>\n</div>",
    options: [
      "Uniquement 'bouton'",
      "'bouton' puis 'parent' — les deux s'affichent (event bubbling)",
      "Uniquement 'parent'",
      "Rien — les deux s'annulent",
    ],
    answerIndex: 1,
    explanation:
      "L'événement remonte (bubbling) : d'abord le bouton, puis le div parent. Pour stopper la propagation : e.stopPropagation().",
  },

  {
    sectionId: 8,
    sectionLabel: "Événements",
    question: "C'est quoi un input contrôlé ?",
    options: [
      "Un input avec un attribut disabled",
      "Un input dont la valeur est gérée par le state React — value={state} + onChange met à jour le state",
      "Un input qui valide automatiquement",
      "Un input connecté à une API",
    ],
    answerIndex: 1,
    explanation:
      "Un input contrôlé a sa valeur dans le state. value={valeur} affiche le state, onChange={e => setValeur(e.target.value)} le met à jour à chaque frappe. Le state est la source de vérité.",
  },

  // Section 9 — Hooks essentiels
  {
    sectionId: 9,
    sectionLabel: "useRef",
    question: "Que retourne exactement useRef(null) ?",
    options: [
      "null",
      "undefined",
      "Un objet { current: null }",
      "Un tableau [null, setNull]",
    ],
    answerIndex: 2,
    explanation:
      "useRef retourne toujours un objet avec une seule propriété : current. Sa valeur initiale est l'argument passé à useRef — ici null.",
  },

  {
    sectionId: 9,
    sectionLabel: "useContext",
    question: "Quelles sont les 3 étapes pour utiliser useContext ?",
    options: [
      "useState, useEffect, useContext",
      "createContext, Provider, useContext",
      "createStore, connect, useSelector",
      "createContext, Consumer, useContext",
    ],
    answerIndex: 1,
    explanation:
      "1) createContext() crée le contexte, 2) Provider fournit la valeur aux descendants, 3) useContext() consomme la valeur n'importe où dans l'arbre.",
  },

  {
    sectionId: 9,
    sectionLabel: "React.memo",
    question: "React.memo fonctionne-t-il correctement ici ?",
    code: "const Enfant = React.memo(({ onClick }) => <button onClick={onClick}>OK</button>);\n\nfunction Parent() {\n  const [count, setCount] = useState(0);\n  function handleClick() { console.log('cliqué'); }\n  return <Enfant onClick={handleClick} />;\n}",
    options: [
      "Oui — React.memo protège toujours l'enfant",
      "Non — handleClick est recréée à chaque rendu, nouvelle référence, React.memo la considère comme changée",
      "Oui — React.memo compare le contenu des fonctions",
      "Non — React.memo ne supporte pas les fonctions",
    ],
    answerIndex: 1,
    explanation:
      "handleClick est recréée à chaque rendu du parent avec une nouvelle référence. React.memo compare avec === — deux fonctions différentes en mémoire = prop changée = re-rendu. Solution : useCallback.",
  },

  {
    sectionId: 9,
    sectionLabel: "useMemo",
    question: "Quand useMemo est-il vraiment utile ?",
    options: [
      "Pour tous les calculs sans exception",
      "Pour les calculs coûteux sur de grandes données ou pour stabiliser une référence passée à un composant React.memo",
      "Uniquement avec TypeScript",
      "Seulement dans les composants de classe",
    ],
    answerIndex: 1,
    explanation:
      "useMemo a un coût de mémoïsation. Il n'est utile que pour des calculs vraiment coûteux ou pour stabiliser des références. L'utiliser partout est de la sur-optimisation.",
  },

  {
    sectionId: 9,
    sectionLabel: "useReducer",
    question: "C'est quoi un reducer ?",
    options: [
      "Une fonction qui effectue des appels API",
      "Une fonction pure (state, action) => newState qui centralise la logique de mise à jour du state",
      "Un composant qui réduit les re-rendus",
      "Un hook pour réduire la taille du bundle",
    ],
    answerIndex: 1,
    explanation:
      "Un reducer est une fonction pure : même input = même output, sans effets de bord, sans muter le state existant. Il retourne toujours un nouveau state.",
  },

  {
    sectionId: 9,
    sectionLabel: "useCallback",
    question: "Que vaut count dans le console.log et pourquoi ?",
    code: "const [count, setCount] = useState(0);\nconst fn = useCallback(() => {\n  console.log(count); // count = ?\n}, []); // après plusieurs incréments de count",
    options: [
      "La valeur actuelle de count",
      "Toujours 0 — useCallback a capturé count = 0 à sa création, [] vide = jamais recréée",
      "undefined",
      "NaN",
    ],
    answerIndex: 1,
    explanation:
      "C'est une closure stale. useCallback avec [] mémorise la fonction une fois avec count = 0. Elle n'est jamais recréée donc count est toujours 0. Solution : ajouter count aux dépendances.",
  },

  {
    sectionId: 9,
    sectionLabel: "React Compiler",
    question: "Que fait React Compiler introduit avec React 19 ?",
    options: [
      "Il remplace JSX par un nouveau langage",
      "Il automatise les optimisations de mémoïsation — l'équivalent de useMemo, useCallback et React.memo appliqués automatiquement",
      "Il remplace Babel",
      "Il génère automatiquement des tests unitaires",
    ],
    answerIndex: 1,
    explanation:
      "React Compiler analyse le code à la compilation et applique automatiquement les optimisations nécessaires. Mais connaître useMemo/useCallback reste essentiel pour les projets React 16-18.",
  },
];

export { reactQuestions };
