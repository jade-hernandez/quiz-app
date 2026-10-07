import type { SectionId } from "./sections.ts";

// Every question has exactly four options (A to D), and the answer is one of them.
// Typing both as a tuple and a union of indexes makes an out-of-range answerIndex
// or a missing option a compile error instead of a runtime surprise.
export type Options = readonly [string, string, string, string];
export type OptionIndex = 0 | 1 | 2 | 3;

export type Question = {
  readonly id: string;
  readonly sectionId: SectionId;
  readonly question: string;
  readonly code?: string;
  readonly options: Options;
  readonly answerIndex: OptionIndex;
  readonly explanation: string;
};
