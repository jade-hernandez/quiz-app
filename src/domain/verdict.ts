const verdicts = {
  perfect: {
    title: "Sans faute !",
    text: "Tu maîtrises cette section.",
  },
  excellent: {
    title: "Excellent !",
    text: "Encore un petit effort pour le sans-faute.",
  },
  good: {
    title: "Bien joué !",
    text: "Les bases sont là, revois tes erreurs pour progresser.",
  },
  start: {
    title: "C'est un début !",
    text: "Chaque erreur est une occasion d'apprendre. On y retourne ?",
  },
} as const;

export function verdictFor(percent: number) {
  if (percent === 100) return verdicts.perfect;
  if (percent >= 80) return verdicts.excellent;
  if (percent >= 40) return verdicts.good;
  return verdicts.start;
}
