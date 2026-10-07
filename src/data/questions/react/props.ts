import type { Question } from "../../../domain/question.ts";

const reactPropsQuestions: readonly Question[] = [
  {
    id: "react-4-1",
    sectionId: "react-4",
    question: "Dans quel sens circulent les props ?",
    options: [
      "De l'enfant vers le parent",
      "Toujours du parent vers l'enfant",
      "Dans les deux sens",
      "Entre composants au même niveau",
    ],
    answerIndex: 1,
    explanation:
      "Les props suivent un flux unidirectionnel : toujours du parent vers l'enfant. C'est ce qui rend l'app prévisible et facile à déboguer.",
  },
  {
    id: "react-4-2",
    sectionId: "react-4",
    question:
      "Comment un enfant peut-il déclencher une modification de données dans le parent ?",
    options: [
      "En modifiant directement la prop",
      "En accédant au state du parent",
      "En utilisant localStorage",
      "En appelant une fonction passée en prop par le parent",
    ],
    answerIndex: 3,
    explanation:
      "Le parent passe une fonction en prop. L'enfant l'appelle. Le parent met à jour son state. React re-rend avec les nouvelles props.",
  },
  {
    id: "react-4-3",
    sectionId: "react-4",
    question: "Que vaut la prop age ici ?",
    code: '<Bouton age="28" />',
    options: ['La string "28"', "Le nombre 28", "undefined", "NaN"],
    answerIndex: 0,
    explanation:
      "Les guillemets produisent une string. Pour passer un nombre, il faut les accolades : age={28}.",
  },
  {
    id: "react-4-4",
    sectionId: "react-4",
    question:
      "Un composant enfant peut-il modifier directement une prop qu'il a reçue ?",
    code: "function Greeting({ name }) {\n  name = 'Modifié';\n  return <p>{name}</p>;\n}",
    options: [
      "Oui, et cela met à jour la prop chez le parent aussi",
      "Non, cela lève une erreur immédiatement",
      "Il peut réassigner la variable locale `name`, mais cela ne change rien pour le parent — les props sont en lecture seule",
      "Cela dépend du type de la prop",
    ],
    answerIndex: 2,
    explanation:
      "Les props sont en lecture seule (read-only) du point de vue de l'enfant. Réassigner la variable locale `name` fonctionne comme n'importe quelle variable JS, mais ça n'a aucun effet sur la vraie source de la donnée chez le parent.",
  },
  {
    id: "react-4-5",
    sectionId: "react-4",
    question: "Que vaut `size` ici si le parent ne passe pas cette prop ?",
    code: "function Avatar({ size = 'medium' }) {\n  return <img className={size} />;\n}",
    options: ["undefined", "'medium'", "null", "TypeError"],
    answerIndex: 1,
    explanation:
      "Comme pour une variable classique, on peut donner une valeur par défaut à une prop directement dans la déstructuration des paramètres. Si `size` n'est pas fournie, `'medium'` est utilisée.",
  },
  {
    id: "react-4-6",
    sectionId: "react-4",
    question: "`children` est-elle une prop comme les autres ?",
    options: [
      "Non, c'est un mot-clé réservé du langage JavaScript",
      "Non, elle n'existe que dans les composants de classe",
      "Oui, mais elle est remplie automatiquement par ce qui est placé entre les balises du composant",
      "Elle ne peut contenir que du texte, jamais d'autres composants",
    ],
    answerIndex: 2,
    explanation:
      "`children` fonctionne exactement comme n'importe quelle autre prop (on peut la lire, la passer plus loin), à la différence qu'elle est remplie implicitement par React à partir du contenu placé entre les balises d'ouverture et de fermeture.",
  },
  {
    id: "react-4-7",
    sectionId: "react-4",
    question: "Qu'est-ce que le 'prop drilling' ?",
    options: [
      "Le fait de faire transiter une prop à travers plusieurs composants intermédiaires qui n'en ont pas besoin eux-mêmes",
      "Une technique d'optimisation automatique des props",
      "Un Hook pour valider les props",
      "La suppression automatique des props inutilisées",
    ],
    answerIndex: 0,
    explanation:
      "Le prop drilling arrive quand une donnée doit passer par plusieurs niveaux de composants intermédiaires (qui ne l'utilisent pas, juste pour la retransmettre) avant d'atteindre le composant qui en a réellement besoin. `useContext` est une des solutions pour éviter ça.",
  },
  {
    id: "react-4-8",
    sectionId: "react-4",
    question:
      "Comment typer les props d'un composant avec TypeScript, selon la convention la plus courante ?",
    code: "type ButtonProps = {\n  label: string;\n  onClick: () => void;\n};",
    options: [
      "TypeScript ne permet pas de typer les props",
      "Il faut obligatoirement utiliser PropTypes en plus de TypeScript",
      "Chaque prop doit être déclarée comme un Hook séparé",
      "Définir un `type` (ou `interface`) décrivant la forme des props, puis l'utiliser dans la signature du composant",
    ],
    answerIndex: 3,
    explanation:
      "On décrit la forme des props avec un `type` ou une `interface`, puis on l'utilise dans la signature : `function Button({ label, onClick }: ButtonProps)`. TypeScript vérifie alors que chaque utilisation du composant respecte cette forme.",
  },
  {
    id: "react-4-9",
    sectionId: "react-4",
    question: "Que fait ce composant avec `...rest` ?",
    code: "function Button({ label, ...rest }) {\n  return <button {...rest}>{label}</button>;\n}",
    options: [
      "Ignore toutes les props sauf `label`",
      "Récupère toutes les props sauf `label`, et les étale sur le bouton HTML natif",
      "Provoque une erreur car `label` est déjà utilisé",
      "`rest` contient uniquement `label`",
    ],
    answerIndex: 1,
    explanation:
      "`...rest` (rest pattern) capture toutes les propriétés non explicitement déstructurées (`onClick`, `disabled`, `className`...) dans un objet. `{...rest}` les étale ensuite sur le `<button>` natif — pattern courant pour créer un composant qui garde toute la flexibilité d'un élément HTML.",
  },
  {
    id: "react-4-10",
    sectionId: "react-4",
    question:
      'Que se passe-t-il si deux composants frères reçoivent la même prop `color="blue"` du même parent ?',
    options: [
      "Ils partagent la même variable, donc modifier l'un modifie l'autre",
      "Une erreur est levée : une prop ne peut être utilisée qu'une fois",
      "Seul le premier composant déclaré reçoit la prop",
      "Chacun reçoit sa propre copie de la valeur, indépendamment l'un de l'autre",
    ],
    answerIndex: 3,
    explanation:
      "Chaque composant reçoit sa propre instance de props. Passer la même valeur à deux composants frères ne crée aucun lien entre eux — ce sont deux rendus complètement indépendants.",
  },
];

export { reactPropsQuestions };
