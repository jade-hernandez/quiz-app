import type { Question } from "../domain/question.ts";
import { jsPrimitivesQuestions } from "./questions/javascript/primitives.ts";
import { jsVariablesQuestions } from "./questions/javascript/variables.ts";
import { jsOperatorsQuestions } from "./questions/javascript/operators.ts";
import { jsConditionsQuestions } from "./questions/javascript/conditions.ts";
import { jsLoopsQuestions } from "./questions/javascript/loops.ts";
import { jsFunctionsQuestions } from "./questions/javascript/functions.ts";
import { jsArraysQuestions } from "./questions/javascript/arrays.ts";
import { jsObjectsQuestions } from "./questions/javascript/objects.ts";
import { reactReactBasicsQuestions } from "./questions/react/react-basics.ts";
import { reactComponentsQuestions } from "./questions/react/components.ts";
import { reactJsxQuestions } from "./questions/react/jsx.ts";
import { reactPropsQuestions } from "./questions/react/props.ts";
import { reactStateQuestions } from "./questions/react/state.ts";
import { reactUseEffectQuestions } from "./questions/react/use-effect.ts";
import { reactListsAndKeysQuestions } from "./questions/react/lists-and-keys.ts";
import { reactEventsQuestions } from "./questions/react/events.ts";
import { reactHooksQuestions } from "./questions/react/hooks.ts";

export const questions: readonly Question[] = [
  ...jsPrimitivesQuestions,
  ...jsVariablesQuestions,
  ...jsOperatorsQuestions,
  ...jsConditionsQuestions,
  ...jsLoopsQuestions,
  ...jsFunctionsQuestions,
  ...jsArraysQuestions,
  ...jsObjectsQuestions,
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
