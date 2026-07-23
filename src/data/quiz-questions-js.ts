import type { QuizQuestion } from "../types";
import { jsPrimitivesQuestions } from "./javascript/primitives";
import { jsVariablesQuestions } from "./javascript/variables";
import { jsOperatorsQuestions } from "./javascript/operators";
import { jsConditionsQuestions } from "./javascript/conditions";
import { jsLoopsQuestions } from "./javascript/loops";
import { jsFunctionsQuestions } from "./javascript/functions";
import { jsArraysQuestions } from "./javascript/arrays";
import { jsObjectsQuestions } from "./javascript/objects";

const jsQuestions: QuizQuestion[] = [
  ...jsPrimitivesQuestions,
  ...jsVariablesQuestions,
  ...jsOperatorsQuestions,
  ...jsConditionsQuestions,
  ...jsLoopsQuestions,
  ...jsFunctionsQuestions,
  ...jsArraysQuestions,
  ...jsObjectsQuestions,
];

export { jsQuestions };
