import type { QuizQuestion } from "../../types";

const reactHooksQuestions: QuizQuestion[] = [
  {
    id: "react-9-1",
    sectionId: "react-9",
    question: "Que retourne exactement useRef(null) ?",
    options: ["Un objet { current: null }", "null", "undefined", "Un tableau [null, setNull]"],
    answerIndex: 0,
    explanation:
      "useRef retourne toujours un objet avec une seule propriété : current. Sa valeur initiale est l'argument passé à useRef — ici null.",
  },
  {
    id: "react-9-2",
    sectionId: "react-9",
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
    id: "react-9-3",
    sectionId: "react-9",
    question: "React.memo fonctionne-t-il correctement ici ?",
    code: "const Enfant = React.memo(({ onClick }) => <button onClick={onClick}>OK</button>);\n\nfunction Parent() {\n  const [count, setCount] = useState(0);\n  function handleClick() { console.log('cliqué'); }\n  return <Enfant onClick={handleClick} />;\n}",
    options: [
      "Oui — React.memo protège toujours l'enfant",
      "Oui — React.memo compare le contenu des fonctions",
      "Non — handleClick est recréée à chaque rendu, nouvelle référence, React.memo la considère comme changée",
      "Non — React.memo ne supporte pas les fonctions",
    ],
    answerIndex: 2,
    explanation:
      "handleClick est recréée à chaque rendu du parent avec une nouvelle référence. React.memo compare avec === — deux fonctions différentes en mémoire = prop changée = re-rendu. Solution : useCallback.",
  },
  {
    id: "react-9-4",
    sectionId: "react-9",
    question: "Quand useMemo est-il vraiment utile ?",
    options: [
      "Pour tous les calculs sans exception",
      "Uniquement avec TypeScript",
      "Seulement dans les composants de classe",
      "Pour les calculs coûteux sur de grandes données ou pour stabiliser une référence passée à un composant React.memo",
    ],
    answerIndex: 3,
    explanation:
      "useMemo a un coût de mémoïsation. Il n'est utile que pour des calculs vraiment coûteux ou pour stabiliser des références. L'utiliser partout est de la sur-optimisation.",
  },
  {
    id: "react-9-5",
    sectionId: "react-9",
    question: "C'est quoi un reducer ?",
    options: [
      "Une fonction pure (state, action) => newState qui centralise la logique de mise à jour du state",
      "Une fonction qui effectue des appels API",
      "Un composant qui réduit les re-rendus",
      "Un hook pour réduire la taille du bundle",
    ],
    answerIndex: 0,
    explanation:
      "Un reducer est une fonction pure : même input = même output, sans effets de bord, sans muter le state existant. Il retourne toujours un nouveau state.",
  },
  {
    id: "react-9-6",
    sectionId: "react-9",
    question: "Que vaut count dans le console.log et pourquoi ?",
    code: "const [count, setCount] = useState(0);\nconst fn = useCallback(() => {\n  console.log(count); // count = ?\n}, []); // après plusieurs incréments de count",
    options: [
      "La valeur actuelle de count",
      "undefined",
      "Toujours 0 — useCallback a capturé count = 0 à sa création, [] vide = jamais recréée",
      "NaN",
    ],
    answerIndex: 2,
    explanation:
      "C'est une closure stale. useCallback avec [] mémorise la fonction une fois avec count = 0. Elle n'est jamais recréée donc count est toujours 0. Solution : ajouter count aux dépendances.",
  },
  {
    id: "react-9-7",
    sectionId: "react-9",
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
  {
    id: "react-9-8",
    sectionId: "react-9",
    question: "Qu'est-ce qu'un hook personnalisé (custom hook) ?",
    options: [
      "Un nouveau type de composant React",
      "Une fonctionnalité exclusive à TypeScript",
      "Un Hook fourni nativement par React, comme useState",
      "Une fonction JavaScript qui utilise d'autres Hooks pour extraire et réutiliser de la logique entre plusieurs composants",
    ],
    answerIndex: 3,
    explanation:
      "Un hook personnalisé (ex. `useWindowSize`, `useLocalStorage`) est simplement une fonction qui appelle d'autres Hooks à l'intérieur, pour extraire une logique réutilisable — sans dupliquer le même `useState`/`useEffect` dans plusieurs composants.",
  },
  {
    id: "react-9-9",
    sectionId: "react-9",
    question:
      "Pourquoi la convention impose-t-elle que tout hook personnalisé commence par 'use' ?",
    options: [
      "C'est purement une question d'esthétique, sans impact réel",
      "Sinon, JavaScript refuse d'exécuter la fonction",
      "Cela n'a aucun rapport avec les Hooks natifs de React",
      "Cela permet à React (et aux linters) de vérifier que les règles des Hooks sont respectées à l'intérieur",
    ],
    answerIndex: 3,
    explanation:
      "Le préfixe 'use' est ce qui permet aux outils (ESLint notamment, via `eslint-plugin-react-hooks`) de reconnaître qu'une fonction est un Hook et de vérifier automatiquement les règles associées (l'appeler uniquement au niveau racine, jamais dans une condition).",
  },
  {
    id: "react-9-10",
    sectionId: "react-9",
    question: "Quelle est la différence entre `useMemo` et `useCallback` ?",
    options: [
      "Ce sont deux noms différents pour exactement le même Hook",
      "`useCallback` ne fonctionne qu'avec des nombres",
      "`useMemo` mémorise une VALEUR calculée, `useCallback` mémorise une FONCTION elle-même",
      "`useMemo` est déprécié au profit de `useCallback`",
    ],
    answerIndex: 2,
    explanation:
      "`useMemo(() => calcul(), deps)` mémorise le RÉSULTAT d'un calcul. `useCallback(fn, deps)` mémorise la FONCTION elle-même (sa référence), utile pour éviter qu'un composant enfant optimisé avec `React.memo` ne se re-rende inutilement à cause d'une nouvelle référence de fonction à chaque rendu.",
  },
];

export { reactHooksQuestions };
