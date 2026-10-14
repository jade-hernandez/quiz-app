import type { SectionId } from "../domain/sections.ts";
import { questions } from "./questions.ts";

export function questionsOfSection(sectionId: SectionId) {
  return questions.filter((question) => question.sectionId === sectionId);
}
