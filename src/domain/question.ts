import type { SectionId } from "./sections.ts";

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
