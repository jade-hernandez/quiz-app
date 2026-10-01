import type { QuizQuestion } from "../../types";

const reactListsAndKeysQuestions: QuizQuestion[] = [
  {
    id: "react-7-1",
    sectionId: "react-7",
    question: "Pourquoi React a-t-il besoin de la prop key sur les éléments d'une liste ?",
    options: [
      "Pour appliquer des styles différents",
      "Pour accéder à l'élément dans l'enfant",
      "Pour optimiser le CSS",
      "Pour identifier précisément chaque élément lors de la réconciliation",
    ],
    answerIndex: 3,
    explanation:
      "La key permet à React d'identifier chaque élément lors de la réconciliation. Sans elle, React compare par position et peut faire des erreurs quand la liste change.",
  },
  {
    id: "react-7-2",
    sectionId: "react-7",
    question: "Pourquoi évite-t-on l'index comme key ?",
    options: [
      "L'index est toujours undefined",
      "React interdit l'index comme key",
      "Si la liste change (ajout, suppression, réordonnancement), les index changent et React peut mal identifier les éléments",
      "L'index n'est pas unique",
    ],
    answerIndex: 2,
    explanation:
      "Si un élément est supprimé, tous les index suivants changent. React voit les mêmes keys mais des éléments différents — erreurs de rendu possibles.",
  },
  {
    id: "react-7-3",
    sectionId: "react-7",
    question: "La prop key est-elle accessible dans le composant enfant ?",
    options: [
      "Non — key est réservée par React et n'est jamais transmise à l'enfant",
      "Oui, comme n'importe quelle prop",
      "Oui, mais seulement en TypeScript",
      "Seulement avec propTypes",
    ],
    answerIndex: 0,
    explanation:
      "key est une prop réservée par React pour la réconciliation. Elle vaut undefined si on essaie d'y accéder dans l'enfant. Pour l'utiliser dans l'enfant, on la passe en prop séparée.",
  },
  {
    id: "react-7-4",
    sectionId: "react-7",
    question:
      "Une `key` doit-elle être unique dans toute l'application, ou seulement à un endroit précis ?",
    options: [
      "Unique dans l'application entière, tous composants confondus",
      "Unique seulement parmi ses éléments frères (dans la même liste)",
      "Unique uniquement au sein d'un même fichier",
      "Les keys n'ont pas besoin d'être uniques du tout",
    ],
    answerIndex: 1,
    explanation:
      "React ne compare les keys qu'entre éléments frères, générés par le même `.map()`. Deux listes différentes ailleurs dans l'app peuvent parfaitement réutiliser les mêmes valeurs de key sans aucun conflit.",
  },
  {
    id: "react-7-5",
    sectionId: "react-7",
    question: "Que faut-il faire avant de mapper une liste de données qu'on veut filtrer ?",
    code: "// Objectif : n'afficher que les tâches non terminées\n{tasks.map(task => <TaskItem key={task.id} task={task} />)}",
    options: [
      "Ajouter une condition à l'intérieur du JSX de TaskItem uniquement",
      "Utiliser `key` pour exclure certains éléments",
      "Filtrer le tableau avec `.filter()` avant d'appeler `.map()`",
      "React filtre automatiquement selon le contenu du composant",
    ],
    answerIndex: 2,
    explanation:
      "`tasks.filter(t => !t.done).map(task => <TaskItem key={task.id} task={task} />)` — on filtre d'abord le tableau de données, puis on mappe le résultat. Le filtrage est une opération sur les données, distincte de l'affichage.",
  },
  {
    id: "react-7-6",
    sectionId: "react-7",
    question:
      "Comment gère-t-on des listes imbriquées (une liste de catégories, chacune avec sa propre liste d'articles) ?",
    options: [
      "Une seule `key` sur le niveau le plus externe suffit pour toute la structure",
      "Les listes imbriquées ne sont pas supportées par React",
      "Il faut fusionner les deux niveaux en un seul tableau avant de mapper",
      "Chaque niveau de `.map()` a besoin de sa propre `key`, indépendamment des autres niveaux",
    ],
    answerIndex: 3,
    explanation:
      "Chaque `.map()` génère sa propre liste d'éléments frères, donc chaque niveau a besoin de sa propre `key` (souvent l'id de la catégorie pour le niveau externe, l'id de l'article pour le niveau interne).",
  },
  {
    id: "react-7-7",
    sectionId: "react-7",
    question:
      "Que signifie l'avertissement React : \"Each child in a list should have a unique 'key' prop\" ?",
    options: [
      "React a détecté un `.map()` qui génère des éléments JSX sans prop `key`",
      "Une erreur de syntaxe empêche le composant de compiler",
      "Un composant enfant a été appelé deux fois par erreur",
      "Le tableau de données est vide",
    ],
    answerIndex: 0,
    explanation:
      "Cet avertissement (pas une erreur bloquante) apparaît dans la console dès que React détecte une liste d'éléments générés dynamiquement sans `key`. Il invite à en ajouter une pour permettre une réconciliation fiable.",
  },
  {
    id: "react-7-8",
    sectionId: "react-7",
    question: "Peut-on utiliser `Math.random()` pour générer une `key` ?",
    options: [
      "Oui, c'est la meilleure façon de garantir l'unicité",
      "Ce n'est pas une bonne pratique : la clé change à chaque rendu, ce qui force React à démonter et remonter l'élément inutilement",
      "Cela provoque systématiquement une erreur",
      "Uniquement si le tableau contient moins de 10 éléments",
    ],
    answerIndex: 1,
    explanation:
      "Une key doit rester stable entre les rendus pour qu'un élément garde son identité. `Math.random()` génère une valeur différente à chaque rendu — React croit alors que chaque élément est nouveau, et le démonte/remonte à chaque fois (perte de state local, animations cassées...).",
  },
  {
    id: "react-7-9",
    sectionId: "react-7",
    question:
      "Comment donner une `key` quand on doit retourner plusieurs éléments par itération, sans wrapper visible dans le DOM ?",
    code: "{items.map(item => (\n  <>\n    <dt>{item.term}</dt>\n    <dd>{item.definition}</dd>\n  </>\n))}",
    options: [
      "Utiliser la syntaxe longue `<Fragment key={item.id}>`, car le raccourci `<>` n'accepte pas de props",
      "Ajouter `key` directement sur `<>`",
      "C'est impossible, il faut obligatoirement une `<div>` englobante",
      "Mettre la key sur chaque enfant du Fragment uniquement",
    ],
    answerIndex: 0,
    explanation:
      "Le raccourci `<>...</>` n'accepte aucune prop, y compris `key`. Quand une key est nécessaire sur un Fragment (cas des listes), il faut utiliser la forme complète : `import { Fragment } from 'react'` puis `<Fragment key={item.id}>`.",
  },
  {
    id: "react-7-10",
    sectionId: "react-7",
    question: "Un élément peut-il avoir à la fois une prop `key` et une prop `id` ?",
    options: [
      "Non, cela crée un conflit de nommage",
      "`id` et `key` désignent toujours la même chose",
      "Oui : `key` est réservée à React (jamais transmise à l'enfant), `id` est un attribut HTML normal totalement indépendant",
      "Un élément ne peut avoir qu'une seule de ces deux props",
    ],
    answerIndex: 2,
    explanation:
      "`key` et `id` n'ont rien à voir : `key` est un signal interne pour React (jamais accessible dans le composant enfant), `id` est un attribut HTML classique (utile pour l'accessibilité, le CSS, ou le JS). On peut tout à fait utiliser la même valeur pour les deux, mais ce sont deux props distinctes.",
  },
];

export { reactListsAndKeysQuestions };
