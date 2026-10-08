import { sections } from "../domain/sections.ts";
import type { TopicId } from "../domain/sections.ts";
import { questions } from "./questions.ts";

export function sectionsOfTopic(topic: TopicId) {
  return sections.filter((section) => section.topic === topic);
}

export function questionCountOfTopic(topic: TopicId): number {
  const sectionIds = new Set<string>(
    sectionsOfTopic(topic).map((section) => section.id),
  );
  return questions.filter((question) => sectionIds.has(question.sectionId))
    .length;
}
