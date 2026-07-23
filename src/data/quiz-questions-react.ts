import type { QuizQuestion } from "../types";
import { reactReactBasicsQuestions } from "./react/react-basics";
import { reactComponentsQuestions } from "./react/components";
import { reactJsxQuestions } from "./react/jsx";
import { reactPropsQuestions } from "./react/props";
import { reactStateQuestions } from "./react/state";
import { reactUseEffectQuestions } from "./react/use-effect";
import { reactListsAndKeysQuestions } from "./react/lists-and-keys";
import { reactEventsQuestions } from "./react/events";
import { reactHooksQuestions } from "./react/hooks";

const reactQuestions: QuizQuestion[] = [
  ...reactReactBasicsQuestions,
  ...reactComponentsQuestions,
  ...reactJsxQuestions,
  ...reactPropsQuestions,
  ...reactStateQuestions,
  ...reactUseEffectQuestions,
  ...reactListsAndKeysQuestions,
  ...reactEventsQuestions,
  ...reactHooksQuestions,
];

export { reactQuestions };
