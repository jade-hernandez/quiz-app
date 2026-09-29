import { sections } from "./sections";

const getSectionLabel = (sectionId: string): string =>
  sections.find(s => s.id === sectionId)?.label ?? "Section inconnue";

export { getSectionLabel };
