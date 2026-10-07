import type { Question } from "../../../domain/question.ts";

const reactStateQuestions: readonly Question[] = [
  {
    id: "react-5-1",
    sectionId: "react-5",
    question:
      "Que se passe-t-il si on modifie le state directement sans passer par le setter ?",
    options: [
      "La variable change mais React n'est pas notifié — interface figée",
      "React met quand même l'UI à jour",
      "React lance une erreur",
      "Le composant est détruit",
    ],
    answerIndex: 0,
    explanation:
      "C'est le setter qui notifie React du changement et déclenche le re-rendu. Sans lui, la variable change en mémoire mais l'interface reste figée.",
  },
  {
    id: "react-5-2",
    sectionId: "react-5",
    question: "Que vaut count après ce clic ?",
    code: "const [count, setCount] = useState(0);\nfunction handleClick() {\n  setCount(count + 1);\n  setCount(count + 1);\n  setCount(count + 1);\n}",
    options: ["3", "0", "1", "2"],
    answerIndex: 2,
    explanation:
      "Les 3 appels lisent la même snapshot count = 0. Chacun calcule 0+1 = 1. Pour obtenir 3, il faut la forme fonctionnelle : setCount(prev => prev + 1).",
  },
  {
    id: "react-5-3",
    sectionId: "react-5",
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
  {
    id: "react-5-4",
    sectionId: "react-5",
    question: "Quelle est la différence fondamentale entre state et props ?",
    options: [
      "Les props peuvent être modifiées par l'enfant, le state ne peut pas",
      "Il n'y a aucune différence, ce sont deux noms pour la même chose",
      "Le state ne peut contenir que des nombres",
      "Le state est géré et modifié par le composant lui-même ; les props viennent du parent et sont en lecture seule",
    ],
    answerIndex: 3,
    explanation:
      "Le state est la mémoire interne d'un composant, qu'il contrôle avec son setter. Les props sont fournies de l'extérieur (par le parent) et le composant ne doit jamais essayer de les modifier lui-même.",
  },
  {
    id: "react-5-5",
    sectionId: "react-5",
    question: "Qu'est-ce que le 'lifting state up' (faire remonter l'état) ?",
    options: [
      "Une technique pour supprimer un state devenu inutile",
      "Un Hook spécifique de React",
      "Déplacer un state depuis un enfant vers son parent commun, pour que plusieurs enfants puissent le partager",
      "Le fait de stocker le state dans le localStorage",
    ],
    answerIndex: 2,
    explanation:
      "Quand deux composants ont besoin de refléter la même donnée, on déplace le state vers leur parent commun, qui le transmet ensuite aux deux enfants via des props (et une fonction pour le modifier).",
  },
  {
    id: "react-5-6",
    sectionId: "react-5",
    question:
      "Quel est l'avantage de regrouper des states liés dans un seul objet plutôt que d'utiliser plusieurs `useState` séparés ?",
    code: "// Option A\nconst [name, setName] = useState('');\nconst [age, setAge] = useState(0);\n\n// Option B\nconst [user, setUser] = useState({ name: '', age: 0 });",
    options: [
      "Il n'y a strictement aucune différence entre les deux options",
      "Cela garde ensemble des données qui changent souvent en même temps, au prix de devoir spreader l'objet à chaque mise à jour",
      "L'option B est toujours interdite en React",
      "L'option A est plus lente à l'exécution",
    ],
    answerIndex: 1,
    explanation:
      "Les deux approches sont valables. Regrouper en objet a du sens si les valeurs sont liées et changent souvent ensemble, mais oblige à faire `setUser({ ...user, age: 29 })` pour ne modifier qu'un champ. Séparer les `useState` évite ce spread, au prix de plusieurs déclarations.",
  },
  {
    id: "react-5-7",
    sectionId: "react-5",
    question:
      "Pourquoi préfère-t-on parfois `useState(() => calculCouteux())` à `useState(calculCouteux())` ?",
    options: [
      "Les deux syntaxes sont strictement équivalentes en termes de performance",
      "`useState` n'accepte pas de fonction comme argument",
      "C'est purement une question de style, sans impact réel",
      "La fonction n'est exécutée qu'une seule fois, au montage ; sans elle, le calcul refait à chaque rendu",
    ],
    answerIndex: 3,
    explanation:
      "`useState(calculCouteux())` exécute `calculCouteux()` à CHAQUE rendu, même si le résultat n'est utilisé qu'au premier. `useState(() => calculCouteux())` (lazy initial state) ne l'exécute qu'une seule fois, au montage initial.",
  },
  {
    id: "react-5-8",
    sectionId: "react-5",
    question: "Que retourne ce code juste après l'appel de `setCount` ?",
    code: "const [count, setCount] = useState(0);\nfunction handleClick() {\n  setCount(5);\n  console.log(count);\n}",
    options: [
      "0 — la variable `count` de ce rendu ne change pas immédiatement après l'appel",
      "5 — count est mis à jour instantanément",
      "undefined",
      "Cela provoque une erreur",
    ],
    answerIndex: 0,
    explanation:
      "`setCount` planifie une mise à jour pour le PROCHAIN rendu ; elle ne modifie pas la variable `count` du rendu en cours. `console.log(count)` juste après affichera toujours l'ancienne valeur (0), le nouveau `count` (5) n'apparaîtra qu'au rendu suivant.",
  },
  {
    id: "react-5-9",
    sectionId: "react-5",
    question: "Pourquoi ce code ne déclenche-t-il pas de re-rendu ?",
    code: "const [items, setItems] = useState([1, 2, 3]);\nfunction addItem() {\n  items.push(4);\n  setItems(items);\n}",
    options: [
      "React compare la référence du tableau ; `items` pointe vers le même tableau qu'avant, donc aucun changement n'est détecté",
      "`push()` est interdit sur un state et lève une erreur",
      "`setItems` ne fonctionne qu'avec des nombres, pas des tableaux",
      "Le code fonctionne normalement et déclenche bien un re-rendu",
    ],
    answerIndex: 0,
    explanation:
      "`push()` modifie le tableau en place — la référence ne change pas. React compare les références pour décider s'il doit re-rendre ; comme `items` est toujours le même objet en mémoire, aucun re-rendu n'est déclenché. Il faut créer un nouveau tableau : `setItems([...items, 4])`.",
  },
  {
    id: "react-5-10",
    sectionId: "react-5",
    question:
      "Sur quel critère React décide-t-il si une mise à jour de state doit déclencher un re-rendu ?",
    options: [
      "Il compare le contenu profond des deux valeurs (deep equality)",
      "Il compare l'ancienne et la nouvelle valeur avec une égalité de référence (similaire à Object.is)",
      "Il re-rend systématiquement, sans aucune comparaison",
      "Il demande confirmation au développeur via la console",
    ],
    answerIndex: 1,
    explanation:
      "React utilise une comparaison de référence (`Object.is`), pas une comparaison profonde du contenu. C'est pour ça que muter un objet/tableau existant (même référence) ne déclenche rien, alors que créer un nouvel objet avec les mêmes valeurs déclenche bien un re-rendu.",
  },
];

export { reactStateQuestions };
