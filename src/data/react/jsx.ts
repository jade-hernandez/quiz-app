import type { QuizQuestion } from "../../types";

const reactJsxQuestions: QuizQuestion[] = [
  {
    id: "react-3-1",
    sectionId: "react-3",
    question: "En quoi Babel transforme-t-il le JSX ?",
    options: ["En HTML pur", "En JSON", "En CSS-in-JS", "En appels React.createElement()"],
    answerIndex: 3,
    explanation:
      "Babel transforme chaque balise JSX en React.createElement(type, props, enfants). C'est pour ça qu'on appelle JSX du sucre syntaxique.",
  },
  {
    id: "react-3-2",
    sectionId: "react-3",
    question: "Qu'affiche ce code à l'écran ?",
    code: "const items = [];\nreturn <div>{items.length && <Liste />}</div>;",
    options: ["<Liste /> est rendu", "0", "Rien", "Une erreur"],
    answerIndex: 1,
    explanation:
      "Piège classique ! items.length vaut 0. React affiche 0 car c'est un nombre. Solution : items.length > 0 && <Liste /> pour retourner un booléen.",
  },
  {
    id: "react-3-3",
    sectionId: "react-3",
    question: "Quel est l'avantage de <> </> par rapport à une <div> englobante ?",
    options: [
      "C'est plus rapide à écrire",
      "Le Fragment supporte plus d'événements",
      "Le Fragment n'ajoute aucun nœud au DOM réel",
      "La <div> est interdite comme racine",
    ],
    answerIndex: 2,
    explanation:
      "Un Fragment n'existe que dans le Virtual DOM — aucune trace dans le HTML final. La <div> inutile peut casser le CSS.",
  },
  {
    id: "react-3-4",
    sectionId: "react-3",
    question: "Pourquoi ne peut-on pas écrire {if (...) {}} dans du JSX ?",
    options: [
      "if est une instruction qui ne retourne pas de valeur — les {} n'acceptent que des expressions",
      "JSX n'autorise que les ternaires",
      "Babel ne supporte pas if",
      "Les accolades n'acceptent que des nombres",
    ],
    answerIndex: 0,
    explanation:
      "Les {} attendent une expression (qui produit une valeur). if est une instruction. On utilise le ternaire condition ? A : B à la place.",
  },
  {
    id: "react-3-5",
    sectionId: "react-3",
    question:
      "Que se passe-t-il si un composant essaie de retourner deux éléments côte à côte sans les envelopper ?",
    code: "return (\n  <h1>Titre</h1>\n  <p>Texte</p>\n);",
    options: [
      "Erreur de compilation : JSX doit retourner un seul élément racine",
      "Les deux éléments s'affichent normalement l'un après l'autre",
      "Seul le premier élément est affiché",
      "React choisit aléatoirement lequel afficher",
    ],
    answerIndex: 0,
    explanation:
      "JSX exige un seul élément racine. Il faut envelopper dans une `<div>` ou, mieux, un Fragment (`<>...</>`) qui n'ajoute aucun nœud supplémentaire au DOM final.",
  },
  {
    id: "react-3-6",
    sectionId: "react-3",
    question: "Pourquoi écrit-on `className` plutôt que `class` en JSX ?",
    options: [
      "`class` fonctionne aussi, `className` est juste une préférence de style",
      "React ne supporte pas les classes CSS",
      "`class` est un mot réservé en JavaScript (pour les classes), donc JSX utilise `className` à la place",
      "`className` est plus court à taper",
    ],
    answerIndex: 2,
    explanation:
      "JSX se transforme en JavaScript, où `class` est déjà un mot-clé réservé (pour la syntaxe des classes ES6). Pour éviter le conflit, React utilise `className`, qui correspond à l'attribut `class` une fois rendu dans le vrai HTML.",
  },
  {
    id: "react-3-7",
    sectionId: "react-3",
    question: "Comment applique-t-on un style inline à un élément en JSX ?",
    code: '<p style={{ color: "red", fontSize: 20 }}>Texte</p>',
    options: [
      "Avec une simple string CSS comme en HTML classique",
      "Avec un objet JavaScript dont les propriétés sont en camelCase, entre doubles accolades",
      "Ce n'est pas possible directement en JSX",
      "Uniquement via une balise <style> séparée",
    ],
    answerIndex: 1,
    explanation:
      "Les premières accolades `{}` introduisent une expression JS, les secondes créent l'objet littéral du style. Les propriétés CSS s'écrivent en camelCase (`fontSize`, pas `font-size`) car ce sont des clés d'objet JavaScript.",
  },
  {
    id: "react-3-8",
    sectionId: "react-3",
    question: "Comment écrit-on un commentaire à l'intérieur du JSX ?",
    options: ["// commentaire", "<!-- commentaire -->", "# commentaire", "{/* commentaire */}"],
    answerIndex: 3,
    explanation:
      "À l'intérieur du JSX, un commentaire doit être une expression JavaScript valide entre accolades : `{/* ... */}`. Les syntaxes `//` et `<!-- -->` ne fonctionnent pas dans ce contexte précis.",
  },
  {
    id: "react-3-9",
    sectionId: "react-3",
    question: "Que vaut l'attribut `disabled` ici ?",
    code: "<button disabled>Valider</button>",
    options: [
      "'disabled' (une string)",
      "undefined",
      "false",
      "true — écrire l'attribut seul équivaut à `disabled={true}`",
    ],
    answerIndex: 3,
    explanation:
      "Pour les attributs booléens, JSX permet un raccourci : les écrire seuls (sans `={...}`) équivaut à leur donner la valeur `true`. `disabled` seul est donc identique à `disabled={true}`.",
  },
  {
    id: "react-3-10",
    sectionId: "react-3",
    question: "Que fait `{...props}` sur un élément JSX ?",
    code: "function Input(props) {\n  return <input {...props} />;\n}",
    options: [
      "Passe l'objet `props` entier comme une seule prop nommée 'props'",
      "Étale chaque propriété de l'objet `props` comme un attribut séparé sur l'élément",
      "Provoque une SyntaxError",
      "Ne fonctionne que sur les composants, jamais sur les balises HTML natives",
    ],
    answerIndex: 1,
    explanation:
      "Le spread `{...props}` étale toutes les propriétés de l'objet sur l'élément — `<input value={props.value} onChange={props.onChange} ... />` sans avoir à les lister une par une. Pratique, mais moins explicite sur ce qui est réellement transmis.",
  },
];

export { reactJsxQuestions };
