const verdicts = {
  perfect: {
    icon: "trophy",
    title: "Sans faute !",
    text: "Tu maîtrises cette section.",
  },
  excellent: {
    icon: "trophy",
    title: "Excellent !",
    text: "Encore un petit effort pour le sans-faute.",
  },
  good: {
    icon: "thumb-up",
    title: "Bien joué !",
    text: "Les bases sont là, revois tes erreurs pour progresser.",
  },
  start: {
    icon: "plant-2",
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
