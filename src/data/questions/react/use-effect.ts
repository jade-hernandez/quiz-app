import type { Question } from "../../../domain/question.ts";

const reactUseEffectQuestions: readonly Question[] = [
  {
    id: "react-6-1",
    sectionId: "react-6",
    question:
      "Quand s'exécute un useEffect avec un tableau de dépendances vide [] ?",
    options: [
      "Une seule fois au montage du composant",
      "À chaque rendu",
      "Uniquement au démontage",
      "Jamais",
    ],
    answerIndex: 0,
    explanation:
      "Le tableau vide signifie aucune dépendance — l'effet s'exécute une seule fois au montage. C'est le pattern typique d'un appel API initial.",
  },
  {
    id: "react-6-2",
    sectionId: "react-6",
    question: "C'est quoi le cleanup dans useEffect et quand s'exécute-t-il ?",
    options: [
      "Une fonction pour réinitialiser le state au montage",
      "Un argument optionnel de useEffect",
      "Une fonction retournée par le setup qui s'exécute au démontage ou avant chaque ré-exécution",
      "Un Hook séparé useCleanup()",
    ],
    answerIndex: 2,
    explanation:
      "Le cleanup évite les memory leaks. Il s'exécute quand le composant est démonté ET avant chaque nouvelle exécution de l'effet si les dépendances changent.",
  },
  {
    id: "react-6-3",
    sectionId: "react-6",
    question: "Qu'est-ce qui ne va pas dans ce useEffect ?",
    code: "function Profil({ userId }) {\n  useEffect(() => {\n    fetch(`/api/users/${userId}`)\n      .then(r => r.json())\n      .then(d => setUser(d));\n  }, []);\n}",
    options: [
      "fetch ne peut pas être utilisé dans useEffect",
      "Il faut un cleanup",
      "useState doit être avant useEffect",
      "userId est utilisé dans l'effet mais absent des dépendances — les données ne se mettent pas à jour si userId change",
    ],
    answerIndex: 3,
    explanation:
      "Toute valeur utilisée dans useEffect qui peut changer doit être dans le tableau. Sans userId dans les dépendances, l'effet ne se ré-exécute pas si userId change.",
  },
  {
    id: "react-6-4",
    sectionId: "react-6",
    question:
      "À quel moment un `useEffect` s'exécute-t-il par rapport à l'affichage à l'écran ?",
    options: [
      "Avant que React ne calcule le rendu",
      "Après que React a mis à jour le DOM et que le navigateur a peint l'écran",
      "Exactement en même temps que le rendu, de façon synchrone",
      "Uniquement si le composant est cliqué",
    ],
    answerIndex: 1,
    explanation:
      "`useEffect` s'exécute après le rendu ET après que le navigateur a affiché les changements à l'écran — ce qui le rend adapté aux effets de bord (appels API, abonnements) qui n'ont pas besoin de bloquer l'affichage.",
  },
  {
    id: "react-6-5",
    sectionId: "react-6",
    question: "Pourquoi le cleanup est-il important dans ce cas d'usage ?",
    code: "useEffect(() => {\n  let isCancelled = false;\n  fetch(`/api/users/${id}`)\n    .then(r => r.json())\n    .then(data => {\n      if (!isCancelled) setUser(data);\n    });\n  return () => { isCancelled = true; };\n}, [id]);",
    options: [
      "Il évite qu'une réponse obsolète (d'un ancien `id`) n'écrase des données plus récentes",
      "Il accélère la requête réseau",
      "Il empêche complètement l'appel fetch de se déclencher",
      "Il n'a aucune utilité réelle ici",
    ],
    answerIndex: 0,
    explanation:
      "Si `id` change rapidement (l'utilisateur navigue vite), une ancienne requête peut répondre APRÈS une nouvelle. Le flag `isCancelled`, mis à jour dans le cleanup, empêche cette réponse obsolète d'écraser les données actuelles — un pattern classique contre les race conditions.",
  },
  {
    id: "react-6-6",
    sectionId: "react-6",
    question:
      "Que se passe-t-il si on omet complètement le tableau de dépendances ?",
    code: "useEffect(() => {\n  console.log('effet');\n});",
    options: [
      "L'effet ne s'exécute jamais",
      "L'effet s'exécute une seule fois, comme avec []",
      "L'effet s'exécute après CHAQUE rendu du composant",
      "Cela provoque une erreur de compilation",
    ],
    answerIndex: 2,
    explanation:
      "Sans tableau de dépendances du tout (ni `[]`, ni `[dep]`), React considère qu'il n'y a aucune condition et exécute l'effet après chaque rendu — souvent une source de bugs de performance si ce n'est pas volontaire.",
  },
  {
    id: "react-6-7",
    sectionId: "react-6",
    question:
      "Pourquoi est-il souvent conseillé de séparer deux logiques indépendantes dans deux `useEffect` distincts plutôt qu'un seul ?",
    options: [
      "React limite un composant à un seul useEffect maximum",
      "Chaque effet reste focalisé sur une seule responsabilité, avec ses propres dépendances claires",
      "Cela améliore automatiquement les performances au runtime",
      "Un seul useEffect par composant est obligatoire en TypeScript",
    ],
    answerIndex: 1,
    explanation:
      "Mélanger deux logiques (par exemple, un abonnement à un event ET un fetch de données) dans un seul `useEffect` complique son tableau de dépendances et sa lisibilité. Les séparer garde chaque effet simple, avec ses propres dépendances précises.",
  },
  {
    id: "react-6-8",
    sectionId: "react-6",
    question:
      "Quelle est la différence entre `useEffect` et `useLayoutEffect` ?",
    options: [
      "Ce sont deux noms identiques pour le même Hook",
      "`useLayoutEffect` ne peut pas faire d'appels API",
      "`useEffect` est déprécié au profit de `useLayoutEffect`",
      "`useLayoutEffect` s'exécute avant que le navigateur peigne l'écran (de façon synchrone), `useEffect` après",
    ],
    answerIndex: 3,
    explanation:
      "`useLayoutEffect` bloque le navigateur jusqu'à son exécution, utile pour des mesures/mutations du DOM qui doivent être invisibles à l'utilisateur (pas de flash visuel). `useEffect` est asynchrone par rapport à l'affichage — le choix par défaut dans la grande majorité des cas.",
  },
  {
    id: "react-6-9",
    sectionId: "react-6",
    question:
      "Pourquoi ce useEffect risque-t-il de provoquer une boucle infinie ?",
    code: "const [count, setCount] = useState(0);\nuseEffect(() => {\n  setCount(count + 1);\n}, [count]);",
    options: [
      "useEffect ne peut jamais appeler un setter de state",
      "Le code ne compile pas",
      "Cela ne boucle pas, l'effet ne s'exécute qu'une fois",
      "L'effet modifie `count`, qui est aussi sa propre dépendance — chaque mise à jour redéclenche l'effet",
    ],
    answerIndex: 3,
    explanation:
      "L'effet dépend de `count` ET le modifie. Chaque exécution change `count`, ce qui redéclenche l'effet, qui rechange `count`... une boucle infinie de re-rendus. Il faut soit retirer `count` des dépendances (avec la forme fonctionnelle `setCount(c => c + 1)`), soit repenser la logique.",
  },
  {
    id: "react-6-10",
    sectionId: "react-6",
    question:
      "Un `useEffect` peut-il retourner autre chose qu'une fonction de cleanup ou rien du tout ?",
    code: "useEffect(() => {\n  return fetch('/api/data');\n}, []);",
    options: [
      "Oui, on peut retourner n'importe quelle valeur sans problème",
      "Oui, à condition que ce soit un nombre",
      "Non : React attend soit une fonction de cleanup, soit `undefined` — retourner autre chose est une erreur",
      "Cela dépend de la version de React",
    ],
    answerIndex: 2,
    explanation:
      "React n'accepte que deux formes de retour pour un `useEffect` : une fonction de cleanup, ou rien (`undefined`). Retourner une Promise (comme ici avec `fetch`) provoque un avertissement/une erreur, car React ne saurait pas quoi en faire.",
  },
];

export { reactUseEffectQuestions };
