import type { QuizQuestion } from "../../types";

const reactEventsQuestions: QuizQuestion[] = [
  {
    sectionId: "react-8",
    question: "Que se passe-t-il avec ce code ?",
    code: "<button onClick={handleClick()}>Cliquer</button>",
    options: [
      "handleClick s'exécute au clic",
      "React affiche une erreur",
      "handleClick s'exécute immédiatement au rendu — pas au clic",
      "Les parenthèses sont ignorées",
    ],
    answerIndex: 2,
    explanation:
      "Avec les parenthèses, on appelle la fonction au rendu. Sans parenthèses {handleClick}, on passe une référence que React appellera au clic.",
  },
  {
    sectionId: "react-8",
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
    sectionId: "react-8",
    question: "C'est quoi un input contrôlé ?",
    options: [
      "Un input avec un attribut disabled",
      "Un input qui valide automatiquement",
      "Un input connecté à une API",
      "Un input dont la valeur est gérée par le state React — value={state} + onChange met à jour le state",
    ],
    answerIndex: 3,
    explanation:
      "Un input contrôlé a sa valeur dans le state. value={valeur} affiche le state, onChange={e => setValeur(e.target.value)} le met à jour à chaque frappe. Le state est la source de vérité.",
  },
  {
    sectionId: "react-8",
    question: "Qu'est-ce qu'un SyntheticEvent en React ?",
    options: [
      "Un objet événement fourni par React qui uniformise le comportement entre navigateurs",
      "Un événement déclenché uniquement par du code, jamais par l'utilisateur",
      "Un type d'événement qui n'existe qu'en développement",
      "Un synonyme d'un événement DOM natif, sans aucune différence",
    ],
    answerIndex: 0,
    explanation:
      "React enveloppe les événements natifs du navigateur dans un SyntheticEvent, avec une API cohérente quel que soit le navigateur. On y accède exactement comme un événement DOM classique (`e.target`, `e.preventDefault()`...).",
  },
  {
    sectionId: "react-8",
    question: "Pourquoi appelle-t-on `e.preventDefault()` sur la soumission d'un formulaire ?",
    code: "function handleSubmit(e) {\n  e.preventDefault();\n  // ...\n}",
    options: [
      "Pour empêcher le rechargement complet de la page, comportement par défaut du navigateur",
      "Pour empêcher le formulaire de s'afficher",
      "Pour bloquer tous les événements futurs sur cette page",
      "Ce n'est jamais nécessaire avec React",
    ],
    answerIndex: 0,
    explanation:
      "Par défaut, un `<form>` recharge intégralement la page à sa soumission — ce qui effacerait tout le state React. `e.preventDefault()` bloque ce comportement natif, pour gérer la soumission entièrement en JavaScript.",
  },
  {
    sectionId: "react-8",
    question: "Comment passer un argument personnalisé à un gestionnaire d'événement ?",
    code: "// On veut appeler removeItem(item.id) au clic\n<button onClick={???}>Supprimer</button>",
    options: [
      "onClick={removeItem(item.id)}",
      "onClick={() => removeItem(item.id)}",
      "onClick={removeItem, item.id}",
      "Ce n'est pas possible en React",
    ],
    answerIndex: 1,
    explanation:
      "`onClick={removeItem(item.id)}` appellerait la fonction immédiatement au rendu (pas au clic). Il faut envelopper l'appel dans une arrow function : `() => removeItem(item.id)`, qui ne s'exécute qu'au moment du clic.",
  },
  {
    sectionId: "react-8",
    question: "À quoi sert `e.stopPropagation()` ?",
    code: "<div onClick={() => console.log('div')}>\n  <button onClick={(e) => {\n    e.stopPropagation();\n    console.log('bouton');\n  }}>Cliquer</button>\n</div>",
    options: [
      "Empêche le bouton lui-même de réagir au clic",
      "Supprime définitivement l'événement du DOM",
      "N'a aucun effet en React",
      "Empêche l'événement de continuer à remonter (bubbling) vers les éléments parents",
    ],
    answerIndex: 3,
    explanation:
      "Sans `stopPropagation()`, un clic sur le bouton afficherait 'bouton' PUIS 'div' (bubbling). En l'appelant, l'événement s'arrête au bouton et ne remonte jamais jusqu'au `onClick` du `div` parent.",
  },
  {
    sectionId: "react-8",
    question: "Quelle est la différence entre `onChange` et `onInput` sur un `<input>` en React ?",
    options: [
      "`onChange` ne se déclenche qu'à la perte du focus, jamais pendant la frappe",
      "Ce sont des synonymes stricts sans aucune différence, y compris en HTML natif",
      "En React, `onChange` se comporte comme `onInput` du HTML natif : il se déclenche à chaque frappe",
      "`onInput` n'existe pas du tout en JSX",
    ],
    answerIndex: 2,
    explanation:
      "Contrairement au HTML natif (où `change` attend la perte de focus), React a choisi de faire déclencher `onChange` à chaque frappe, comme le ferait `input` nativement — c'est ce qui permet le pattern d'input contrôlé, mis à jour en temps réel.",
  },
  {
    sectionId: "react-8",
    question:
      "Comment détecter que l'utilisateur a appuyé sur la touche Entrée dans un champ de texte ?",
    code: "<input onKeyDown={(e) => {\n  if (???) {\n    console.log('Entrée pressée');\n  }\n}} />",
    options: [
      "e.target === 'Enter'",
      "e.type === 'Enter'",
      "e.value === 'Enter'",
      "e.key === 'Enter'",
    ],
    answerIndex: 3,
    explanation:
      "L'objet événement d'un événement clavier (`onKeyDown`, `onKeyUp`) expose `e.key`, une string décrivant la touche pressée ('Enter', 'Escape', 'a'...). C'est la propriété standard à vérifier pour réagir à une touche précise.",
  },
  {
    sectionId: "react-8",
    question:
      "Pourquoi écrire `onClick={() => handleClick(id)}` recrée-t-il une nouvelle fonction à chaque rendu ?",
    options: [
      "Chaque exécution du composant crée une nouvelle arrow function en mémoire, même si son comportement est identique",
      "React met en cache automatiquement toutes les fonctions inline",
      "Ce n'est vrai que pour les composants de classe",
      "Cela ne se produit que si le composant contient un useEffect",
    ],
    answerIndex: 0,
    explanation:
      "Une arrow function définie directement dans le JSX est recréée à chaque rendu du composant — une nouvelle fonction en mémoire, même si son code est identique. Généralement sans conséquence, mais ça peut poser problème si cette fonction est passée à un enfant optimisé avec `React.memo` (qui compare les références).",
  },
];

export { reactEventsQuestions };
