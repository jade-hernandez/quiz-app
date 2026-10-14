import type { Question } from "../domain/question.ts";
import type { SectionId } from "../domain/sections.ts";

const loaders: Record<SectionId, () => Promise<readonly Question[]>> = {
  "javascript-1": () =>
    import("./questions/javascript/primitives.ts").then(
      (module) => module.jsPrimitivesQuestions,
    ),
  "javascript-2": () =>
    import("./questions/javascript/variables.ts").then(
      (module) => module.jsVariablesQuestions,
    ),
  "javascript-3": () =>
    import("./questions/javascript/operators.ts").then(
      (module) => module.jsOperatorsQuestions,
    ),
  "javascript-4": () =>
    import("./questions/javascript/conditions.ts").then(
      (module) => module.jsConditionsQuestions,
    ),
  "javascript-5": () =>
    import("./questions/javascript/loops.ts").then(
      (module) => module.jsLoopsQuestions,
    ),
  "javascript-6": () =>
    import("./questions/javascript/functions.ts").then(
      (module) => module.jsFunctionsQuestions,
    ),
  "javascript-7": () =>
    import("./questions/javascript/arrays.ts").then(
      (module) => module.jsArraysQuestions,
    ),
  "javascript-8": () =>
    import("./questions/javascript/objects.ts").then(
      (module) => module.jsObjectsQuestions,
    ),
  "react-1": () =>
    import("./questions/react/react-basics.ts").then(
      (module) => module.reactReactBasicsQuestions,
    ),
  "react-2": () =>
    import("./questions/react/components.ts").then(
      (module) => module.reactComponentsQuestions,
    ),
  "react-3": () =>
    import("./questions/react/jsx.ts").then(
      (module) => module.reactJsxQuestions,
    ),
  "react-4": () =>
    import("./questions/react/props.ts").then(
      (module) => module.reactPropsQuestions,
    ),
  "react-5": () =>
    import("./questions/react/state.ts").then(
      (module) => module.reactStateQuestions,
    ),
  "react-6": () =>
    import("./questions/react/use-effect.ts").then(
      (module) => module.reactUseEffectQuestions,
    ),
  "react-7": () =>
    import("./questions/react/lists-and-keys.ts").then(
      (module) => module.reactListsAndKeysQuestions,
    ),
  "react-8": () =>
    import("./questions/react/events.ts").then(
      (module) => module.reactEventsQuestions,
    ),
  "react-9": () =>
    import("./questions/react/hooks.ts").then(
      (module) => module.reactHooksQuestions,
    ),
};

const loaded = new Map<SectionId, Promise<readonly Question[]>>();

export function loadQuestions(
  sectionId: SectionId,
): Promise<readonly Question[]> {
  const known = loaded.get(sectionId);
  if (known !== undefined) return known;
  const pending = loaders[sectionId]();
  loaded.set(sectionId, pending);
  return pending;
}
