import type { QuizQuestion } from "../../types";

const reactReactBasicsQuestions: QuizQuestion[] = [
  {
    sectionId: 1,
    sectionLabel: "React",
    question: "En quoi le rôle de React diffère-t-il de celui de Next.js ?",
    options: [
      "Ce sont deux noms différents pour exactement la même chose",
      "Next.js remplace complètement React : on n'écrit plus de JSX avec Next.js",
      "React est une bibliothèque qui gère l'affichage des composants ; Next.js est un framework construit au-dessus de React qui ajoute le routing, le rendu serveur, etc.",
      "React s'occupe uniquement du style CSS, Next.js s'occupe de la logique",
    ],
    answerIndex: 2,
    explanation:
      "Next.js est construit au-dessus de React : il ajoute le routing basé sur les fichiers, le rendu serveur, l'optimisation des images, etc. React reste la bibliothèque qui gère l'affichage des composants ; Next.js est le framework qui structure l'application autour de React.",
  },
  {
    sectionId: 1,
    sectionLabel: "React",
    question: "Qu'est-ce que la réconciliation ?",
    options: [
      "Le processus de comparaison entre l'ancien et le nouveau Virtual DOM pour identifier ce qui a changé",
      "Le processus de compilation du JSX",
      "La synchronisation des données avec le serveur",
      "Le montage initial d'un composant",
    ],
    answerIndex: 0,
    explanation:
      "La réconciliation est le processus par lequel React compare les deux états du Virtual DOM et ne met à jour que les parties du DOM réel qui ont changé.",
  },
  {
    sectionId: 1,
    sectionLabel: "React",
    question: "Laquelle de ces affirmations sur React et les SPAs est correcte ?",
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
  {
    sectionId: 1,
    sectionLabel: "React",
    question: "Que veut-on dire quand on affirme que React est 'déclaratif' plutôt qu'impératif ?",
    options: [
      "On écrit manuellement chaque instruction DOM (createElement, appendChild...)",
      "React choisit lui-même les données à afficher",
      "Le code s'exécute dans un ordre aléatoire",
      "On décrit à quoi l'UI doit ressembler pour un état donné, sans détailler les étapes pour y arriver",
    ],
    answerIndex: 3,
    explanation:
      "En impératif, on dirait 'crée cet élément, puis ajoute-le ici'. En déclaratif, on dit juste 'voici à quoi l'UI doit ressembler pour cet état' — React se charge de calculer les manipulations du DOM nécessaires.",
  },
  {
    sectionId: 1,
    sectionLabel: "React",
    question: "Qu'est-ce qui déclenche un nouveau rendu (re-render) d'un composant ?",
    options: [
      "Uniquement un rechargement complet de la page",
      "Un simple survol de la souris",
      "Rien : un composant ne se re-rend jamais après le montage",
      "Un changement de son state ou de ses props",
    ],
    answerIndex: 3,
    explanation:
      "React re-rend un composant quand son state change (via un setter), quand ses props changent, ou quand son composant parent se re-rend. C'est le mécanisme central qui garde l'UI synchronisée avec les données.",
  },
  {
    sectionId: 1,
    sectionLabel: "React",
    question: "Dans quel sens l'information circule-t-elle dans un arbre de composants React ?",
    options: [
      "Dans les deux sens automatiquement",
      "De façon unidirectionnelle : les données descendent du parent vers l'enfant via les props",
      "De l'enfant vers le parent uniquement",
      "Il n'y a pas de hiérarchie entre les composants",
    ],
    answerIndex: 1,
    explanation:
      "React suit un flux de données unidirectionnel (top-down) : un parent transmet des données à ses enfants via les props. Pour qu'un enfant influence son parent, il faut un mécanisme explicite (une fonction passée en prop).",
  },
  {
    sectionId: 1,
    sectionLabel: "React",
    question: "À quoi sert `<React.StrictMode>` ?",
    options: [
      "Il optimise automatiquement les performances en production",
      "Il empêche l'utilisation des Hooks",
      "Il aide à détecter des problèmes potentiels en développement, notamment en exécutant certaines fonctions deux fois",
      "Il bloque tous les re-rendus inutiles",
    ],
    answerIndex: 2,
    explanation:
      "StrictMode n'a aucun effet visuel et ne change rien en production. En développement, il exécute certaines fonctions (comme le corps des composants) deux fois pour aider à repérer des effets de bord cachés ou du code non idempotent.",
  },
  {
    sectionId: 1,
    sectionLabel: "React",
    question: "Qu'est-ce que le Virtual DOM, concrètement ?",
    options: [
      "Une représentation JavaScript légère de l'UI, que React compare avant de toucher au vrai DOM",
      "Une copie exacte du DOM stockée sur le serveur",
      "Un nouveau langage qui remplace le HTML",
      "Une extension du navigateur",
    ],
    answerIndex: 0,
    explanation:
      "Le Virtual DOM est un simple objet JavaScript qui décrit l'UI voulue. Manipuler cet objet est bien moins coûteux que manipuler le vrai DOM directement — React ne touche au vrai DOM qu'après avoir calculé les différences nécessaires (la réconciliation).",
  },
  {
    sectionId: 1,
    sectionLabel: "React",
    question: "Quelle est la différence entre les packages `react` et `react-dom` ?",
    options: [
      "`react` contient la logique des composants et des Hooks, `react-dom` s'occupe de l'affichage dans le navigateur",
      "Ce sont deux noms pour exactement le même package",
      "`react-dom` contient les Hooks, `react` gère l'affichage",
      "`react` est pour le web, `react-dom` est pour le mobile",
    ],
    answerIndex: 0,
    explanation:
      "`react` est indépendant de la plateforme (composants, Hooks, JSX). `react-dom` fournit les fonctions pour afficher ces composants spécifiquement dans un navigateur (`createRoot`, `render`...). React Native utilise `react` avec un renderer différent.",
  },
  {
    sectionId: 1,
    sectionLabel: "React",
    question: "À quoi servent les React DevTools (extension navigateur) ?",
    options: [
      "Compiler le code React en JavaScript",
      "Inspecter l'arbre de composants, leurs props et leur state en temps réel",
      "Remplacer Vite ou Next.js comme outil de build",
      "Écrire du code React sans JSX",
    ],
    answerIndex: 1,
    explanation:
      "Les React DevTools ajoutent un onglet dans les outils de développement du navigateur pour visualiser l'arbre de composants, inspecter leurs props/state, et repérer pourquoi un composant se re-rend.",
  },
];

export { reactReactBasicsQuestions };
