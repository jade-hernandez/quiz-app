import { sections } from "../domain/sections.ts";
import type { SectionId, TopicId } from "../domain/sections.ts";
import { questions } from "./questions.ts";

export function sectionsOfTopic(topic: TopicId) {
  return sections.filter((section) => section.topic === topic);
}

export function questionsOfSection(sectionId: SectionId) {
  return questions.filter((question) => question.sectionId === sectionId);
}

export function questionCountOfTopic(topic: TopicId): number {
  const sectionIds = new Set<string>(
    sectionsOfTopic(topic).map((section) => section.id),
  );
  return questions.filter((question) => sectionIds.has(question.sectionId))
    .length;
}
