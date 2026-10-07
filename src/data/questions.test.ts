import { describe, expect, it } from "vitest";
import { sections } from "../domain/sections.ts";
import { questions } from "./questions.ts";

// Checks on the hand-written question data. Three things are already guaranteed by the
// Question type, so the compiler (not a test) rejects them: exactly four options, an
// answerIndex that points at one of them, and a sectionId that exists.
// These tests cover what types cannot express. Each one lists the offending ids when it fails.
describe("question data", () => {
  it("gives every question a unique id", () => {
    const ids = questions.map((question) => question.id);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    expect(duplicates).toEqual([]);
  });

  it("starts every question id with its section id", () => {
    const mismatched = questions
      .filter((question) => !question.id.startsWith(`${question.sectionId}-`))
      .map((question) => question.id);
    expect(mismatched).toEqual([]);
  });

  it("gives every section at least one question", () => {
    const sectionsWithQuestions = new Set(
      questions.map((question) => question.sectionId),
    );
    const empty = sections
      .filter((section) => !sectionsWithQuestions.has(section.id))
      .map((section) => section.id);
    expect(empty).toEqual([]);
  });

  it("gives every question complete content and four distinct options", () => {
    const broken = questions
      .filter(
        (question) =>
          question.question.trim() === "" ||
          question.explanation.trim() === "" ||
          question.options.some((option) => option.trim() === "") ||
          new Set(question.options).size !== question.options.length,
      )
      .map((question) => question.id);
    expect(broken).toEqual([]);
  });
});
