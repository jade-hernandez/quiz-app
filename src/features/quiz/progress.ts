const version = 1;

function keyOf(sectionId: string): string {
  return `quiz-progress:${sectionId}`;
}

function isOptionIndex(value: unknown): value is number {
  return Number.isInteger(value) && Number(value) >= 0 && Number(value) <= 3;
}

export function readProgress(
  sectionId: string,
  questionCount: number,
): readonly number[] {
  try {
    const raw = localStorage.getItem(keyOf(sectionId));
    if (raw === null) return [];
    const data: unknown = JSON.parse(raw);
    if (typeof data !== "object" || data === null) return [];
    if (!("version" in data) || data.version !== version) return [];
    if (!("answers" in data) || !Array.isArray(data.answers)) return [];
    const answers: unknown[] = data.answers;
    if (answers.length > questionCount) return [];
    return answers.every(isOptionIndex) ? answers : [];
  } catch {
    return [];
  }
}

export function saveProgress(
  sectionId: string,
  answers: readonly number[],
): void {
  try {
    localStorage.setItem(
      keyOf(sectionId),
      JSON.stringify({ version, answers }),
    );
  } catch {
    return;
  }
}

export function clearProgress(sectionId: string): void {
  try {
    localStorage.removeItem(keyOf(sectionId));
  } catch {
    return;
  }
}
