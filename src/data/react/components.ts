import type { QuizQuestion } from "../../types";

const reactComponentsQuestions: QuizQuestion[] = [
  {
    id: "react-2-1",
    sectionId: "react-2",
    question: "Pourquoi le nom d'un composant React doit commencer par une majuscule ?",
    options: [
      "React l'utilise pour distinguer ses composants des balises HTML natives",
      "Convention de style sans impact",
      "JavaScript exige des majuscules pour les classes",
      "TypeScript le requiert",
    ],
    answerIndex: 0,
    explanation:
      "Minuscule = balise HTML native (<div>). Majuscule = composant React (<MonComposant>). React utilise cette convention pour la réconciliation.",
  },
  {
    id: "react-2-2",
    sectionId: "react-2",
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
    id: "react-2-3",
    sectionId: "react-2",
    question: "Quelle règle s'applique obligatoirement aux Hooks ?",
    options: [
      "Ils doivent être dans un fichier séparé",
      "Ils ne peuvent être utilisés que dans les composants de classe",
      "Ils s'appellent uniquement au niveau racine d'un composant — jamais dans un if ou une boucle",
      "Ils doivent toujours recevoir des props",
    ],
    answerIndex: 2,
    explanation:
      "React maintient l'ordre des Hooks entre les rendus. Les appeler dans des conditions ou boucles briserait cet ordre et causerait des bugs imprévisibles.",
  },
  {
    id: "react-2-4",
    sectionId: "react-2",
    question: "Qu'est-ce que `children` dans `function Card({ children })` ?",
    options: [
      "Un Hook pour créer des composants enfants",
      "Une méthode du cycle de vie",
      "Une prop qui n'existe qu'en TypeScript",
      "Une prop spéciale contenant tout ce qui est passé entre les balises ouvrante et fermante du composant",
    ],
    answerIndex: 3,
    explanation:
      "`<Card>Contenu ici</Card>` place automatiquement 'Contenu ici' dans la prop `children` de `Card`. C'est ce qui permet à un composant d'englober du contenu arbitraire, comme une `<div>` HTML classique.",
  },
  {
    id: "react-2-5",
    sectionId: "react-2",
    question: "En React, préfère-t-on généralement la composition ou l'héritage entre composants ?",
    options: [
      "L'héritage : chaque composant doit hériter d'une classe de base commune",
      "Les deux sont interdits en React",
      "La composition : assembler des composants entre eux plutôt que créer des hiérarchies de classes",
      "Cela dépend uniquement de TypeScript",
    ],
    answerIndex: 2,
    explanation:
      "React encourage la composition (un composant utilise `children` ou d'autres composants comme props) plutôt que l'héritage de classes, jugé plus rigide et plus difficile à faire évoluer dans une UI.",
  },
  {
    id: "react-2-6",
    sectionId: "react-2",
    question: "Un composant peut-il retourner `null` ?",
    options: [
      "Non, un composant doit toujours retourner du JSX",
      "Oui, c'est une façon standard de ne rien afficher conditionnellement",
      "Non, cela provoque une erreur au rendu",
      "Seulement les composants de classe peuvent le faire",
    ],
    answerIndex: 1,
    explanation:
      "Retourner `null` est parfaitement valide et courant : c'est le moyen standard pour un composant de dire 'je ne rends rien à l'écran pour l'instant', par exemple avant que des données soient chargées.",
  },
  {
    id: "react-2-7",
    sectionId: "react-2",
    question:
      "Pourquoi cherche-t-on généralement à garder les composants petits et focalisés sur une seule responsabilité ?",
    options: [
      "Parce que React refuse de rendre des composants trop longs",
      "Pour améliorer automatiquement les performances au runtime",
      "Aucune raison particulière, c'est une question de goût uniquement",
      "Plus faciles à lire, à tester et à réutiliser ailleurs",
    ],
    answerIndex: 3,
    explanation:
      "Un composant qui fait 'une seule chose' est plus simple à comprendre d'un coup d'œil, plus facile à tester isolément, et plus probable d'être réutilisable ailleurs dans l'app — le même principe de responsabilité unique qu'en programmation générale.",
  },
  {
    id: "react-2-8",
    sectionId: "react-2",
    question:
      "Quelle est la différence entre un export nommé et un export par défaut pour un composant ?",
    options: [
      "L'export nommé impose le même nom à l'import (`{ Button }`), l'export par défaut permet de le renommer librement",
      "Un composant ne peut être exporté que par défaut",
      "L'export nommé n'existe qu'en TypeScript",
      "Aucune différence pratique",
    ],
    answerIndex: 0,
    explanation:
      "`export { Button }` oblige à importer avec `import { Button } from ...` (même nom). `export default Button` permet d'importer sous n'importe quel nom (`import MonBouton from ...`) — d'où l'intérêt des exports nommés pour la cohérence dans un projet.",
  },
  {
    id: "react-2-9",
    sectionId: "react-2",
    question:
      "Que désigne la distinction entre composant 'présentational' et composant 'container' ?",
    options: [
      "Présentational gère les Hooks, container gère uniquement le CSS",
      "Présentational se concentre sur l'affichage, container gère la logique/les données qu'il transmet",
      "C'est une distinction obsolète qui n'a jamais existé",
      "Container ne peut jamais recevoir de props",
    ],
    answerIndex: 1,
    explanation:
      "Un composant présentational reçoit des données en props et se contente de les afficher (souvent sans state). Un composant container gère la logique, l'état, les appels de données, et les transmet aux composants présentationnels. La frontière est parfois floue, mais le principe aide à organiser le code.",
  },
  {
    id: "react-2-10",
    sectionId: "react-2",
    question:
      "Comment TypeScript aide-t-il à valider les props d'un composant, comparé à PropTypes ?",
    options: [
      "Il vérifie les types à la compilation, avant même d'exécuter le code",
      "Il fait exactement la même vérification, mais au runtime",
      "TypeScript ne peut pas typer les props de composants React",
      "PropTypes est plus strict que TypeScript",
    ],
    answerIndex: 0,
    explanation:
      "PropTypes vérifie les types au runtime (une fois le code exécuté, dans le navigateur). TypeScript vérifie dès la compilation, avant même de lancer l'app — les erreurs de type sont visibles directement dans l'éditeur.",
  },
];

export { reactComponentsQuestions };
